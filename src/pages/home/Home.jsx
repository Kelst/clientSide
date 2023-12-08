import React from 'react'
import style from  "./Home.module.css"
import InfoIcon from '@mui/icons-material/Info';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
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
  dateOfEndCredits:"2023-12-15",
  tariff:"Заставнівський-300(274)_Internet+TV",
  
  subLogin:[
    {
      uid:"189209",
      login:"dorosh_ukr50",
    }
  ]

 }
export default function Home() {
  return (
    <div className=''>
      <section className='flex items-center  justify-items-center '>
      <div className="">
   
      <div className="flex  w-[100%]   mx-auto  shadow-zinc-900  shadow-lg">
        <div className=' border-b-2  border-r-2  rounded-br-md  p-4'>
          
          <div className="text-lg font-semibold mb-2  text-gray-200 relative  p-[5px] rounded-md">Інформація про логін <InfoIcon className='absolute top-[-20px] border-t-2 rounded-2xl right-[46%]'/></div>
          <p className="text-md mb-2 text-gray-200">Логін:  <span className=' font-bold  text-h'>{user.login}</span></p>
          <p className="text-md mb-2 text-white ">Адреса: <span className='font-bold'>{user.adress}</span> </p>
          <p className="text-md mb-2 text-white  flex justify-start items-center gap-x-2">Стан з'єднання: <span className='font-bold'>{user.statusInternet?<div className='relative'><OnlinePredictionIcon fontSize='large' className='text-grean-500 text-lime-600  '></OnlinePredictionIcon><span className=' absolute text-[10px] top-[1px] '>Online</span></div>:<div className=' relative'><OnlinePredictionIcon fontSize='large' className=' text-orange-500 animate-pulse'/> <span className=' absolute text-[10px] top-[1px] '>Offline</span></div>} </span> </p>
          <p className="text-md mb-2 text-white ">Стан рахунку: <span className='font-bold'>{user.balance} грн.</span> </p>
        
        </div>
         
        {/* <div> 
          <p className="text-lg font-semibold mb-2">Інформація про послуги</p>
          <p className="text-lg mb-2">Статус Інтернету: {user.statusInternet ? 'Активний' : 'Відключений'}</p>
          <p className="text-lg mb-2">Баланс: {user.balance}</p>
          <p className="text-lg mb-2">Депозит: {user.deposit}</p>
          <p className="text-lg mb-2">Дата закінчення кредитів: {user.dateOfEndCredits}</p>
          <p className="text-lg mb-2">Тариф: {user.tariff}</p>
        </div> */}
      </div>
    </div>
      </section>

    </div>
  )
}
