import { useState } from "react";
import { Link , useNavigate } from 'react-router-dom'
import PhoneDemo from "./components/PhoneDemo";
import ChatBubble from "./components/ChatBubble";
import "./App.css";
function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [namesArr, setNamesArr] = useState('');
  const navigate = useNavigate()
  const addName1 = (e) => {
  setName1(e.target.value)
  }
  const addName2 = (e) => {
    setName2(e.target.value)
  }
  let isEmpty = true;
  if (name1 != '' && name2 != '' && name1 != name2) {
    isEmpty =false
  }
let none = name1 != '' && name2 != '' && name1 === name2 ? 'block text-error' : 'hidden'
  const startBtn = () => {
      localStorage.setItem('name1', name1)
    localStorage.setItem('name2', name2)
    navigate('/chat')
 }
  let date = new Date()
  let time = date.getHours() +':'+ date.getMinutes()
  return (
    <>
      <div className="h-screen flex justify-around items-center max-md:justify-center">
        <div className=" flex flex-col items-start max-md:items-center max-sm:items-center">
        <p className="text-2xl text-center text-secondary hidden font-semibold m-5 max-md:text-2xl max-sm:block max-sm:w-[80vw]">Enter the users' names and start chatting</p>
      <div className="w-[45vw] p-10 flex flex-col items-start justify-around bg-base-100 shadow-lg rounded-lg bg-opacity-90 max-md:items-center max-md:w-[70vw] max-sm:w-[80vw]">
    <p className="text-3xl text-secondary font-semibold my-5 max-md:text-2xl max-sm:hidden">Enter the users' names and start chatting</p>
      <label className="form-control w-full max-w-xs ">
  <div className="label">
    <span className="label-text text-lg font-semibold">First user</span>
  </div>
<input  type="text" placeholder="Type here" value={name1} onChange={addName1} className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-lg font-semibold">Second user</span>
  </div>
  <input type="text" placeholder="Type here" value={name2} onChange={addName2} className="input input-bordered w-full max-w-xs" />
            </label>
            <p className='hidden'>You should enter names first</p>
            <p className={none + ' p-2'}>You should enter different names</p>
        <button onClick={startBtn} className="btn btn-wide bg-primary disabled:bg-primary disabled:text-primary-content my-5" disabled={isEmpty}>
              Start chatting
        </button>
        </div>
        </div>
        <div className="py-5">
<PhoneDemo></PhoneDemo>
        </div>
        </div>
    </>
  );
}
export default App;
