import React from 'react'
import ChatBubble from './ChatBubble'
function Phone(props) {
  return (
    <div>
        <p className='text-2xl font-semibold text-center my-3'>{props.user}'s Phone</p>
  
      <div className="mockup-phone border-accent ">
        <div className="camera"></div>
        <div className="display bg-base-100">
          <div className="artboard relative bg-base-100 phone-1 overflow-auto pt-4 px-1 scrollbar scrollbar-thin scrollbar-track-orange-400">
          
            <div className="flex flex-col-reverse grow">

            {props.arr.map(chat => (
                        <ChatBubble sender={props.user} message={chat.message} currentUser={props.user}></ChatBubble>

            ))}
            </div>
          
          <div className="sticky bottom-0 flex p-1 mt-2 ">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full max-w-xs m-1"
                value={props.message}
                onChange={props.addMessage}
                />
              <button onClick={props.sendMessage} className="btn btn-circle bg-cyan-600 m-1" >
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

export default Phone
