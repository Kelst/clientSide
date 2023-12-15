import React from 'react'
import style from  "./Home.module.css"
import InfoIcon from '@mui/icons-material/Info';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import GlasmorphizmButton from '../../components/button/glasmorphizm/GlasmorphizmButton';
import CompassCalibrationOutlinedIcon from '@mui/icons-material/CompassCalibrationOutlined';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
const user={
  name:"Безкоровайний Владислав Андрійович",
  uid:"140278",
  telegramId:"",
  phone:'380951470082',
  login:'vlad_b_1',
  adress:"Чернівці, Проспект Незалежності 116б кв 60",
  statusInternet:true,
  balance:"-5450",
  deposit:"0",
  monthlyPayment:"274",
  dateOfEndCredits:"2023-12-15",
  tariff:"300(274)_Internet+TV",
  ip:"192.5.4.7",
  duration:"+4 01:11:03",
  sendData:"767.85 GB",
  getData:"43.34 GB",
  subLogin:[
    {
      uid:"189209",
      login:"dorosh_ukr50",
    }
  ]

 }
export default function Home() {
  return (
      <section className=''>
        {/* <GlasmorphizmButton label='тестова'/> */}
      <div className=" flex flex-col gap-y-[40px]  items-center justify-center sm:flex-row sm:gap-y-[20px] flex-wrap sm:items-center  sm:shadow-white-sm sm:shadow-red-sm sm:shadow-red-md sm:shadow-red-sm sm:inset-shadow-red-lg sm:border-white  sm:p-8 sm:shadow-inner ">
   
      <div className=" w-[220px]   mx-auto  shadow-zinc-900 shadow-lg  z-0 mt-2">
        <div className={ style.animationBorder}>
          <div className="text-lg font-semibold mb-2  text-gray-200 relative  p-[5px] rounded-md sm:uppercase">Інформація про логін <PermIdentityIcon className='absolute top-[-25px] z-[100] border-t-2 rounded-2xl right-[46%]'/></div>
          <p className="text-md mb-2 text-gray-200">Логін:  <span className=' font-bold  text-h text-[12px]'>{user.login}</span></p>
          <p className="text-md mb-2 text-white ">Адреса: <span className='font-bold text-[12px]'>{user.adress}</span> </p>
          <p className="text-md mb-2 text-white  flex justify-start items-center gap-x-2">Стан з'єднання: <span className='font-bold text-[12px]'>{user.statusInternet?<div className='relative'><OnlinePredictionIcon fontSize='large' className='text-grean-500 text-lime-600  '></OnlinePredictionIcon><span className=' absolute text-[10px] top-[1px] '>Online</span></div>:<div className=' relative'><OnlinePredictionIcon fontSize='large' className=' text-orange-500 animate-pulse'/> <span className=' absolute text-[10px] top-[1px] '>Offline</span></div>} </span> </p>
          <p className="text-md mb-2 text-white ">Стан рахунку: <span className='font-bold text-[12px]'>{user.balance} грн.</span> </p>
        </div>
      </div>
      <div className=" w-[220px]  mx-auto   shadow-zinc-900  shadow-lg  z-0 mt-2 sm:uppercase">
        <div className={ style.animationBorder}>
          
          <div className="text-lg font-semibold mb-2  text-gray-200 relative  p-[5px] rounded-md">Інформація про тариф <PaidOutlinedIcon className='absolute top-[-25px] z-[100] border-t-2 rounded-2xl right-[46%]'/></div>
          <p className="text-md mb-2 text-gray-200">Тариф:  <span className=' font-bold  text-h text-[12px]'>{user.tariff}</span></p>
          <p className="text-md mb-2 text-white ">Абонплата: <span className='font-bold text-[12px]'>{user.monthlyPayment} грн/міс</span> </p>

        
        </div>
      </div>
      <div className=" w-[220px]  sm:w-[420px] mx-auto   shadow-zinc-900  shadow-lg  z-0 mt-2">
        <div className={ style.animationBorder}>
          
          <div className=" text-lg font-semibold mb-2   text-gray-200 relative  p-[5px] rounded-md  sm:uppercase">Інформація про сесію 
          <CompassCalibrationOutlinedIcon className='absolute top-[-25px] z-[100]  right-[46%] w-[300px]  border-t-2 rounded-2xl  mb-6'/>
          {/* <RotateLeftOutlinedIcon className=' cursor-pointer absolute top-[-16px] z-[100]  right-[0px] w-[300px]  border-t-2 rounded-2xl border-b-2   mb-6'/> */}

          </div>
          
        <div className=' sm:grid sm:grid-cols-2'>
          <p className="text-md mb-2 text-gray-200">Ip:  <span className=' font-bold  text-h text-[12px]'>{user.ip}</span></p>
          <p className="text-md mb-2 text-gray-200">Тривалість:  <span className=' font-bold  text-h text-[12px]'>{user.duration}</span></p>
          <p className="text-md mb-2 text-white ">Відправлено: <span className='font-bold text-[12px]'>{user.sendData} </span> </p>
          <p className="text-md mb-2 text-white ">Отримано: <span className='font-bold text-[12px]'>{user.sendData}</span> </p>
     </div>
        
        </div>
      </div>
    </div>
      </section>

  
  )
}
