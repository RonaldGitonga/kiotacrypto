import React from 'react'
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import{RiHeart2Fill, RiSearch2Fill} from 'react-icons/ri'


const ServiceCard=({color,title,icon ,subtitle})=>{
  return(
  <div className="flex flex-row  flex-wrap justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="m-5 flex flex-col flex-1">
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className="text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
)}

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className='text-white text-3xl sm:text-5xl py-2 '>
            Services that we <br />
            continue to improve
          </h1>
 
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start items-center">
        <ServiceCard 
        color="bg-[#2952E3]"
        title="Security Guaranteed" 
        icon={<BiSearchAlt fontSize={21} className='text-white'/>}
        subtitle="Security is guaranteed.We always maintain quality in all of our products."
        />

        <ServiceCard 
        color="bg-[#8945F8]"
        title="Best exchange rates" 
        icon={<BsShieldFillCheck fontSize={21} className='text-white'/>}
        subtitle="Competitive rates are available across all cryptocurrencies as required."
        />

        <ServiceCard 
        color="bg-[#F84550]"
        title="Fastest transactions" 
        icon={<RiSearch2Fill fontSize={21} className='text-white'/>}
        subtitle="We ensure timely transfers at the click of a button regardless of distance."
        />
      </div>
    </div>
  )
}
 
export default Services