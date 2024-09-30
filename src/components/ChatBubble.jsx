import React from 'react'

function ChatBubble(props) {
    let chatAlign = props.sender === props.currentUser ? 'chat-end' : 'chat-start'
    let ChatColor = props.sender === props.currentUser ? 'chat-bubble-primary' : ''
   

  return (
<div className={"chat " + chatAlign}>
 
    <div className="chat-header">
      {props.sender}
    </div>
<div className={"chat-bubble " + ChatColor }>{props.message}</div>
   </div>
  )
}

export default ChatBubble
