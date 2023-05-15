
import logo from '../../images/kiota.png'

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:justify-center justify-between items-center p-4 gradient-bg-footer'>
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo"  className='w-32'/>
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full ">
          <p className='text-white text-base text-cenetr mx-2 cursor-pointer'>Market</p>
          <p className='text-white text-base text-cenetr mx-2 cursor-pointer'>Exchange</p>
          <p className='text-white text-base text-cenetr mx-2 cursor-pointer'>FAQs</p>
          <p className='text-white text-base text-cenetr mx-2 cursor-pointer'>Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className='text-white text-small text-center'>Get in touch</p>
        <a href="https://ronaldgitonga.com">
        <button type='button'  className='text-black text-small text-center bg-white rounded-md w-full m-2 p-2 border-solid border-4 hover:border-teal-400'>ronaldgitonga.com</button>
        </a>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400" />
      <div className="sm:w-[90%] w-full flex justify-between items-center">
      <p className='text-white text-small text-center'>@ronaldgitonga 2020</p>
      <p className='text-white text-small text-center'>All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer