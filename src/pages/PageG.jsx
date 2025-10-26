import React from "react";
import { Contact, Citrus } from "lucide-react";
import { GoCodeOfConduct, GoCopilot  } from "react-icons/go";
import { useState } from "react";
 
export default function PageG() {
    const [Fullname,setFullname] =useState('');
    const [Age,setAge] =useState('');
    const [Gender,setGender] =useState('');
    const [Province,setProvince] =useState('');
    const [showProfile,setShowProfile] =useState('???');
    const handleShowProfileClick = () =>{
        let profile = `ชื่อ สกุล : ${Fullname} อายุ : ${Age} เพศ : ${Gender} จังหวัด : ${Province}`
        setShowProfile(profile)

    }
    

  return (
    <div
      className="w-8/12 mx-auto border rounded
                    border-gray-500 p-5 mt-20
                    shadow-xl flex flex-col"
    >
      <label>
        <Contact className="text-red-300 inline mr-3" />
        ป้อนชื่อ-สกุล
      </label>
      <input value={Fullname} onChange={(e)=>{setFullname(e.target.value)}} type="text" className="border rounded p-2 mt-2" />
 
      <label className="mt-5">
        <Citrus className="text-blue-300 inline" /> อายุ
      </label>
      <input value={Age} onChange={(e)=>{setAge(e.target.value)}} type="number" className="border rounded p-2 mt-2" />
 
      <label className="mt-5">
        <GoCodeOfConduct className="text-red-700 inline mr-3" />
        เลือกเพศ
      </label>
      <div>
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}}  value="ชาย" name="sex"/> ชาย
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}}  value="หญิง" name="sex" /> หญิง
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}}  value="LGBTQ+" name="sex"/> LGBTQ+
      </div>
 
      <label className="mt-5">
        <GoCopilot  className="text-green-700 inline mr-3" />
        เลือกจังหวัด
      </label>
      <select value={Province} onChange={(e)=>{setProvince(e.target.value)}} name="province" id="province" className="border rounded">
        <option value="">--- กรุณาเลือก ---</option>
        <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
        <option value="สมุทรปราการ">สมุทรปราการ</option>
        <option value="สมุทรสงคราม">สมุทรสงคราม</option>
        <option value="สมุทรสาคร">สมุทรสาคร</option>
      </select>
 
      <button onClick={handleShowProfileClick} className="bg-green-500 hover:bg-green-700 cursor-pointer
                         text-white font-bold py-2 px-4 rounded mt-5">
        แสดงข้อมูล
      </button>
 
      <h1 className="text-center text-red-600 mt-5 font-bold text-2xl">
        showProfile
      </h1>
    </div>
  );
}
 
 