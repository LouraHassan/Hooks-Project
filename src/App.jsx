import { useState } from "react";
import { Link } from 'react-router-dom'

import ChatBubble from "./components/ChatBubble";
import "./App.css";

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');

  const [namesArr, setNamesArr] = useState('');
  const addName1 = (e) => {
  setName1(e.target.value)
  }
  const addName2 = (e) => {
    setName2(e.target.value)
  }
  let isEmpty = true;
  if (name1 != '' && name2 != '') {
    isEmpty =false
  }
  const startBtn = () => {
      
      localStorage.setItem('name1', name1)
      localStorage.setItem('name2',name2)
    
    console.log(localStorage.getItem('name1'));
    console.log(localStorage.getItem('name2'));
    
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">

    <p className="text-3xl text-secondary font-semibold my-5">Enter the users' names and start chatting</p>
      <div className="w-[20vw] h-[40vh] flex flex-col items-center justify-around border-2 border-black">
      <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">First user</span>
   
  </div>
  <input  type="text" placeholder="Type here" value={name1} onChange={addName1} className="input input-bordered w-full max-w-xs" />
 
        </label>
        <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Second user</span>
   
  </div>
  <input type="text" placeholder="Type here" value={name2} onChange={addName2} className="input input-bordered w-full max-w-xs" />
 
        </label>
        <button onClick={startBtn} onKeyDown={e => e.key === 'Enter' ? startBtn : ''} className="btn btn-wide bg-primary disabled:bg-primary" disabled={isEmpty}>
          <Link to='/chat'>Start chatting</Link>
        </button>
        </div>
        </div>
    </>
  );
}

export default App;
