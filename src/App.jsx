import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PhoneDemo from "./components/PhoneDemo";
import ChatBubble from "./components/ChatBubble";
import "./App.css";
function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [namesArr, setNamesArr] = useState("");
  const navigate = useNavigate();
  const addName1 = (e) => {
    setName1(e.target.value);
  };
  const addName2 = (e) => {
    setName2(e.target.value);
  };
  let isEmpty = true;
  if (name1 != "" && name2 != "" && name1 != name2) {
    isEmpty = false;
  }
  let none =
    name1 != "" && name2 != "" && name1 === name2
      ? "block text-error"
      : "hidden";
  const startBtn = () => {
    localStorage.setItem("name1", name1);
    localStorage.setItem("name2", name2);
    navigate("/chat");
  };
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes();
  return (
    <>
      <div className="h-screen flex justify-around items-center max-md:justify-center max-sm:items-start">
        <div className=" flex flex-col items-start max-md:items-center max-sm:my-20">
          <div className="flex my-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              viewBox="0 0 24 24"
              fill="#EEAF3A"
              className="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot scale-75 translate-x-2 skew-y-3"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              viewBox="0 0 24 24"
              fill="#EF9FBC"
              className="icon icon-tabler icons-tabler-filled icon-tabler-message-chatbot "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-2.8 9.286a1 1 0 0 0 -1.414 .014a2.5 2.5 0 0 1 -3.572 0a1 1 0 0 0 -1.428 1.4a4.5 4.5 0 0 0 6.428 0a1 1 0 0 0 -.014 -1.414m-5.69 -4.286h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m5 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2" />
            </svg>
          </div>
          <div className="w-[45vw] p-10 flex flex-col items-start justify-around bg-base-100 shadow-lg rounded-lg bg-opacity-90 max-md:items-center max-md:w-[70vw] max-sm:w-[80vw]">
            <p className="text-3xl font-bold my-5 max-md:text-2xl ">
              Enter the users' names and start chatting
            </p>
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  First user
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={name1}
                onChange={addName1}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-lg font-semibold">
                  Second user
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={name2}
                onChange={addName2}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <p className="hidden">You should enter names first</p>
            <p className={none + " p-2"}>You should enter different names</p>
            <button
              onClick={startBtn}
              className="btn btn-wide bg-primary disabled:bg-primary disabled:text-primary-content my-5"
              disabled={isEmpty}
            >
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
