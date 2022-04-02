import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import YourMessage from "./YourMessage";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];
const renderReadReceipts = (message,isMyMessage) => {
  return chat.people.map((person, index) => person.last_read === message.id &&(
  <div
   key={`read_${index}`} 
   className="read-receipt"
   style={{
     float: isMyMessage ? 'rigth' : 'left',
     backgroundImage: `url(${person?.person?.avatar})`
   }}
   />
  ))
}
  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((Key, index) => {
      const message = messages[Key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div Key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
            
                 isMyMessage 
                 ? 
              <MyMessage message={message} />
             : 
              <YourMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
    }
          </div>
          <div
            className="read-receipts"
            style={{
              marginRigth: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}

          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };
  

  if (!chat) return "Loading...";

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ heigth: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
