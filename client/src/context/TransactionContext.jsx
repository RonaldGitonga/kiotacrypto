import React,{createContext, useEffect,useState}from 'react';
import {ethers} from 'ethers';
import {contractABI,contractAddress} from '../utils/constants';

export const TransactionContext = createContext();

 //const {ethereum}=window;
  const getEthereumContract=()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum); 
    const signer=provider.getSigner();
    const transactionContract=new ethers.Contract(contractAddress,contractABI,signer)

return transactionContract;
  }

  export const TransactionProvider=({children})=>{
    const [ connectedAccount,setConnectedAccount]=useState("");

    const [formData,setFormData]=useState({addressTo: '',amount:'',keyword:'',message:''})

    const [isLoading,setIsLoading]=useState(false)
    const [transactions,setTransactions]=useState([])

    const [transactionCount,setTransactionCount]=useState(localStorage.getItem('transactionCount'))

    const handleChange=(e,name)=>{
        setFormData((prevState)=>({...prevState,[name]:e.target.value}))
    }


    const getAllTransactions = async () => {
        try {
          if (ethereum) {
            const transactionContract = getEthereumContract();
    
            const availableTransactions = await transactionContract.getAllTransactions();
    
            const structuredTransactions = availableTransactions.map((transaction) => ({
              addressTo: transaction.receiver,
              addressFrom: transaction.sender,
              timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
              message: transaction.message,
              keyword: transaction.keyword,
              amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }));
    
            console.log(structuredTransactions);
    
            setTransactions(structuredTransactions);
          } else {
            console.log("Ethereum is not present");
          }
        } catch (error) {
          console.log(error);
        }
      };

    const checkIfWalletIsConnected= async ()=>{
        try {
            if(!ethereum) return alert ("Please install MetaMask");
            const accounts=await ethereum.request({method:'eth_accounts'})
    
            if(accounts.length){
                setConnectedAccount(accounts[0])
                getAllTransactions();
            }else{
                console.log("No accounts found")
            }
    
            console.log(accounts)
        }
        catch (error) {

            //throw new Error("No ethereum object")
        }
    }

    const checkIfTransactionsExist=async()=>{
        try {
            if(ethereum){
            const  transactionContract=getEthereumContract();
            const transactionCount=await transactionContract.getTransactionCount();

            window.localStorage.setItem('transactionCount',transactionCount)
            }  
        } catch (error) {
            console.log(error)
           // throw new Error("No ethereum object")
        }
    }

    const connectWallet=async ()=>{
        try {
            if(!ethereum) alert ("Please install MetaMask");
        const accounts=await ethereum.request({method:'eth_requestAccounts'})
        setConnectedAccount(accounts[0]);
        window.location.reload();
            
        } catch (error) {
            console.log(error)
            //throw new Error("No ethereum object")
        }

    }



    const sendTransaction=async ()=>{
        try { 
            //check for metamask installation
            if(ethereum){
            //get form data
            const{addressTo,amount,keyword,message}=formData;
            const  transactionContract=getEthereumContract();
            const parsedAmount=ethers.utils.parseEther(amount);

            await ethereum.request({
                method:'eth_sendTransaction',
                params:[{
                    from:connectedAccount,
                    to:addressTo,
                    gas:'0x5208', //21000 GWEI
                    value:parsedAmount._hex,

                }]

            })

            const transactionHash=transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            
            setIsLoading(true)
            //console.log(`Loading - ${transactionHash.hash}`)
            await transactionHash

          
            console.log(`Success ! - ${transactionHash.hash}`);
            setIsLoading(false);

            const transactionCount=await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());

            window.reload();

        } else{
            console.log(error)
        }
     } catch (error) {
            console.log(error)
            //throw new Error("No ethereum object")
        }
    }

    
    useEffect(()=>{
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
    },[transactionCount]);

    return(
        <TransactionContext.Provider value={{connectWallet,
        connectedAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
        
        transactionCount}}>
        {children}

        </TransactionContext.Provider>

    );
  }
