import React from "react";
import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
import { Link } from "react-router-dom";
function Landing() {
  const user1 = capitalizeName(localStorage.getItem("name1"));
  const user2 = capitalizeName(localStorage.getItem("name2"));
  function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes();
  let startText = messageArr.length == 0 ? "" : "hidden";
  const addMessage1 = (e) => {
    setMessage1(e.target.value);
  };
  const addMessage2 = (e) => {
    setMessage2(e.target.value);
  };
  const sendMessage1 = () => {
    if (message1.trim()) {
      setMessageArr([
        { sender: user1, message: message1, time: time },
        ...messageArr,
      ]);
      setMessage1("");
    }
  };
  const sendMessage2 = () => {
    if (message2.trim()) {
      setMessageArr([
        { sender: user2, message: message2, time: time },
        ...messageArr,
      ]);
      setMessage2("");
    }
  };
  const clearArr = () => {
    setMessageArr([]);
  };

 
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center bg-base-200 max-sm:py-10">
        <div className="flex flex-row justify-around w-full max-md:flex-col max-md:items-center">
          <div>
            <p className="text-2xl font-semibold text-center">
              {user1}'s Phone
            </p>
            <div className="mockup-phone border-accent ">
              <div className="camera"></div>
              <div className="display bg-base-100">
                <div className="artboard relative bg-base-100 phone-1 overflow-auto px-1  scrollbar-thin flex flex-col ">
                  <div className="h-[10vh] pt-5 p-2 bg-base-300 flex items-center justify-between sticky top-0 z-10 max-sm:h-[8vh]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#291334"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                    <p className="text-xl font-semibold ">{user2}</p>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" self-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-dots-vertical"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#030E0F"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box w-36 p-1 shadow"
                      >
                       
                        <button
                          onClick={() =>
                            document.getElementById("ClearDialog").showModal()}
                          className="text-error m-3"
                        >
                          Clear chat
                        </button>
                      </ul>
                    </div>
                  
                  </div>
                  <div className="flex flex-col-reverse grow">
                    <p className={"text-center text-lg " + startText}>
                      Start the chat!
                    </p>
                    {messageArr.map((chat) => (
                      <ChatBubble
                        sender={chat.sender}
                        message={chat.message}
                        currentUser={user1}
                        time={chat.time}
                      ></ChatBubble>
                    ))}
                  </div>
                  <div className="sticky bottom-0 flex p-1 mt-2 items-end">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered  w-full max-w-xs m-1"
                      value={message1}
                      onChange={addMessage1}
                    />
                    <button
                      onClick={sendMessage1}
                      className="btn btn-circle bg-primary m-1"
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
                <div className="artboard relative  bg-base-100 phone-1 overflow-auto px-1 scrollbar-thin flex flex-col">
                  <div className="h-[10vh] pt-5 p-2 bg-base-300 flex items-center justify-between sticky top-0 z-10 max-sm:h-[8vh]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-chevron-left"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#291334"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 6l-6 6l6 6" />
                    </svg>
                    <p className="text-xl font-semibold ">{user1}</p>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" self-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-dots-vertical"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#030E0F"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box w-32 p-1 shadow"
                      >
                        <button
                          onClick={() =>
                            document.getElementById("ClearDialog").showModal()
                          }
                          className="text-error m-3"
                        >
                          Clear chat
                        </button>
                      </ul>
                    </div>

               
                  </div>
                  <div className="flex flex-col-reverse grow ">
                    <p className={"text-center text-lg " + startText}>
                      Start the chat!
                    </p>
                    {messageArr.map((chat) => (
                      <ChatBubble
                        sender={chat.sender}
                        message={chat.message}
                        currentUser={user2}
                        time={chat.time}
                      ></ChatBubble>
                    ))}
                  </div>
                  <div className="sticky bottom-0 flex p-1 mt-2 ">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs m-1"
                      value={message2}
                      onChange={addMessage2}
                    />
                    <button
                      onClick={sendMessage2}
                      className="btn btn-circle bg-primary m-1"
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
              <dialog
                      id="ImageDialog"
                      className="modal modal-bottom sm:modal-middle "
                    >
                      <div className="modal-box flex flex-col items-center">
                        <h3 className="font-bold text-lg">
                          Adding profile image
                        </h3>
                        <p className="py-4">
                          you will loss your chat if you choose to clear!
                        </p>
                        <div className="modal-action flex justify-center">
                          <form method="dialog">
                            <button className="btn bg-primary w-[8vw] hover:border-primary hover:bg-transparent hover:text-primary mx-1">
                              Cancel
                            </button>
                            <button
                              onClick={clearArr}
                              className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[8vw] mx-1"
                            >
                              Clear chat
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <dialog
                      id="ClearDialog"
                      className="modal modal-bottom sm:modal-middle "
                    >
                      <div className="modal-box flex flex-col items-center">
                        <h3 className="font-bold text-lg">
                          Are you sure you want to clear the chat?
                        </h3>
                        <p className="py-4">
                          you will loss your chat if you choose to clear!
                        </p>
                        <div className="modal-action flex justify-center">
                          <form method="dialog">
                            <button className="btn bg-primary w-[8vw] hover:border-primary hover:bg-transparent hover:text-primary mx-1">
                              Cancel
                            </button>
                            <button
                              onClick={clearArr}
                              className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[8vw] mx-1"
                            >
                              Clear chat
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
            </div>
          </div>
        </div>
        <button
          className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[12vw] mx-1 max-md:w-[20vw]"
          onClick={() => document.getElementById("ExitDialog").showModal()}
        >
          Exit Chat
        </button>
        <dialog id="ExitDialog" className="modal modal-bottom sm:modal-middle ">
          <div className="modal-box flex flex-col items-center">
            <h3 className="font-bold text-lg">
              Are you sure you want to exit the chat?
            </h3>
            <p className="py-4">
              you will loss your chat if you choose to exit!
            </p>
            <div className="modal-action flex justify-center items-center">
              <form method="dialog" className="flex">
                <button className="btn bg-primary w-[8vw] hover:border-primary hover:bg-transparent hover:text-primary mx-1 max-md:w-[20vh]">
                  Cancel
                </button>
                <Link
                  to="/"
                  className="btn bg-error text-white hover:border-error hover:text-error hover:bg-transparent w-[8vw] mx-1 max-md:w-[20vh]"
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
