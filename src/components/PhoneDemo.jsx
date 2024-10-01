import React from 'react'
import { useState } from "react";
import ChatBubble from "../components/ChatBubble";
function PhoneDemo() {
    const user1 = 'Amy';
    const user2 = 'John';
    const [message1, setMessage1] = useState("");
    const [message2, setMessage2] = useState("");
const messageArr = [
    {
        sender: user1,
        message: 'Hello Lamar',
        time: '12:16'
    },
    {
        sender: user2,
        message: 'Hi Loura',
        time: '12:20'
    },
    {
        sender: user1,
        message: 'r u free today?',
        time: '12:24'
    },
    {
        sender: user2,
        message: 'yes I just finished my hws',
        time: '12:25'
    },
    {
        sender: user1,
        message: 'do u wanna hang out?',
        time: '12:28'
    },
    {
        sender: user2,
        message: 'sure, where do you want to go?',
        time: '12:30'
},
]
 messageArr.reverse()
        return (
            <div className='-rotate-12 flex items-center max-md:rotate-0 max-sm:flex-col max-md:hidden'>
                <div className="mockup-phone border-accent mb-20">
                    <div className="camera"></div>
                    <div className="display bg-base-100">
                        <div className="artboard relative bg-base-100 w-[250px] h-[480px] overflow-auto px-1  scrollbar-thin flex flex-col" >
                            <div className="h-[10vh] pt-6 py-2  bg-base-300 flex items-center justify-between sticky top-0 z-10">
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
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                                <p className="text-md font-semibold ">{user2}</p>
                                <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" self-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-dots-vertical"
                          width="18"
                          height="218"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#030E0F"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box w-32 p-1 shadow">
                        <button onClick={() => document.getElementById("ClearDialog").showModal()} className="text-error m-3">
                          Clear chat
                        </button>
                      </ul>
                    </div>
                            </div>
                            <div className="flex flex-col-reverse grow text-sm">
                            {messageArr.map((chat) => (
                      <ChatBubble
                        sender={chat.sender}
                        message={chat.message}
                                    currentUser={user1}
                                    time={chat.time}
                      ></ChatBubble>
                    ))}
                            </div>
                            <div className="sticky bottom-0 flex p-1 mt-2 ">
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-sm input-bordered input-secondary w-full max-w-xs m-1"/>
                                <button
                                    className="btn btn-sm btn-circle bg-primary m-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-send"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#ffffff"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M10 14l11 -11" />
                                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mockup-phone border-secondary">
                    <div className="camera"></div>
                    <div className="display bg-base-100">
                        <div className="artboard relative bg-base-100 w-[250px] h-[480px]  overflow-auto px-1  scrollbar-thin flex flex-col">
                            <div className="h-[10vh] pt-6 py-2 bg-base-300 flex items-center justify-between sticky top-0 z-10">
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
                                    stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                                <p className="text-md font-semibold">{user1}</p>
                                <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className=" self-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-dots-vertical"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#030E0F"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box w-32 p-1 shadow">
                        <button onClick={() => document.getElementById("ClearDialog").showModal()} className="text-error m-3">
                          Clear chat
                        </button>
                      </ul>
                    </div>
                            </div>
                            <div className="flex flex-col-reverse grow text-sm">
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
                                    className="input input-sm input-bordered input-accent w-full max-w-xs m-1"/>
                                <button
                                    className="btn btn-sm btn-circle bg-primary m-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-send"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#ffffff"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round">
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
        )
}
export default PhoneDemo
