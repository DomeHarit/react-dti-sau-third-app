import React from 'react'
import { useState } from 'react'

export default function PageE() {
    const [money , setMoney] = useState('')
    const [person, setPerson] = useState('')
    const [moneyShare, setMoneyShare] = useState('0.00')
    const handleCalMoneyShareClick =() =>{
        if(money == '' || person == ''){
            alert('ตรวจสอบการป้อนเงิน')
            return ;
        }
        if(person =='0'){
             alert('ตรวจสอบการป้อนเงินต้องไม่เป็น0')
            return ;
        }
        let result = parseFloat(money) / parseInt(person)
        setMoneyShare(result.toFixed(2))
    }
    const handleClearStateClick =() =>{
        setMoney('')
        setPerson('')
        setMoneyShare('0.00')
    }
    
  return (
    <div className='w-8/12 mx-auto border border-gray-200 p-5 mt-20 shadow-xl flex flex-col'>
        <h1 className='mx-auto text-2xl font-bold mb-5 text-blue-600'>Money Share</h1>

        <label>ป้อนเงิน</label>
        <input type='number' value={money} onChange={(e)=>{setMoney(e.target.value)}} className='border rounded p-2'/>
        <label>ป้อนคน</label>
        <input type='number' value={person} onChange={(e)=>{setPerson(e.target.value)}} className='border rounded p-2'/>

        <button onClick={handleCalMoneyShareClick} className='p-2 bg-blue-600 mt-5 rounded'>
            คำนวณ
        </button>
        <button onClick={handleClearStateClick} className='p-2 bg-green-600 mt-5 rounded'>
            ยกเลิก
        </button>
        <h1 className='mx-auto text-5xl font-bold mt-5 text-red-600'>
        {moneyShare}
        </h1>
      
    </div>
  )
}
