import React from "react";
import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import { Link } from "react-router-dom";
import Phone from "../components/Phone";
function Landing() {
  const user1 = capitalizeName(localStorage.getItem("name1"));
  const user2 = capitalizeName(localStorage.getItem("name2"));
  console.log(user1);
  console.log(user2);
  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");

  const [messageArr, setMessageArr] = useState([]);

  const addMessage1 = (e) => {
    setMessage1(e.target.value);
    console.log(message1);
  };
  const addMessage2 = (e) => {
    setMessage2(e.target.value);
    console.log(message2);
  };
  const sendMessage1 = () => {
    if (message1.trim()) {
      setMessageArr([{ sender: user1, message: message1 }, ...messageArr]);
      setMessage1("");
    }
  };
  const sendMessage2 = () => {
    if (message2.trim()) {
      setMessageArr([{ sender: user2, message: message2 }, ...messageArr]);
      setMessage2("");
    }
  };
  return (
    <>
      {" "}
      <div className="flex flex-col items-center">
        <div className="flex flex-row-reverse justify-around  w-full">
          <div>
            <p className="text-2xl font-semibold text-center">
              {user1}'s Phone
            </p>

            <div className="mockup-phone border-accent ">
              <div className="camera"></div>
              <div className="display bg-base-100">
                <div className="artboard relative bg-base-100 phone-1 overflow-auto pt-4 px-1 scrollbar scrollbar-thin scrollbar-track-orange-400">
                  <div className="flex flex-col-reverse grow">
                    {messageArr.map((chat) => (
                      <ChatBubble
                        sender={chat.sender}
                        message={chat.message}
                        currentUser={user1}
                      ></ChatBubble>
                    ))}
                  </div>

                  <div className="sticky bottom-0 flex p-1 mt-2 ">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info w-full max-w-xs m-1"
                      value={message1}
                      onChange={addMessage1}
                    />
                    <button
                      onClick={sendMessage1}
                      className="btn btn-circle bg-cyan-600 m-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-send"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 14l11 -11" />
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold text-center ">
              {user2}'s Phone
            </p>

            <div className="mockup-phone border-secondary ">
              <div className="camera"></div>
              <div className="display bg-base-100">
                <div className="artboard relative  bg-base-100 phone-1 overflow-auto pt-4 px-1 scrollbar scrollbar-thin scrollbar-track-orange-400">
                  <div className="flex flex-col-reverse grow">
                    {messageArr.map((chat) => (
                      <ChatBubble
                        sender={chat.sender}
                        message={chat.message}
                        currentUser={user2}
                      ></ChatBubble>
                    ))}
                  </div>

                  <div className="sticky bottom-0 flex p-1 mt-2 ">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-info w-full max-w-xs m-1"
                      value={message2}
                      onChange={addMessage2}
                    />
                    <button
                      onClick={sendMessage2}
                      className="btn btn-circle bg-cyan-600 m-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-send"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 14l11 -11" />
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[8vw] mx-1"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Exit Chat
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box flex flex-col items-center">
            <h3 className="font-bold text-lg">
              Are you sure you want to exit the chat?
            </h3>
            <p className="py-4">
              you will loss your chat if you choose to exit!
            </p>
            <div className="modal-action flex justify-center">
              <form method="dialog">
                <button className="btn bg-primary w-[8vw] hover:border-primary hover:bg-transparent hover:text-primary mx-1">
                  Cancel
                </button>
                <Link
                  to="/"
                  className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[8vw] mx-1"
                >
                  Exit Chat
                </Link>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Landing;
