import {ChatEngine } from 'react-chat-engine';
import ChatFeeds from './ChatFeeds';
import LoginForm from './LoginForm';


const Communicationn = () => { 
    if(!localStorage.getItem('username')) return <LoginForm />
    
  return (
   
    <ChatEngine 
          height='100vh'
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          projectID='12ae1084-e78f-4777-936e-f028705fbcb0'
         
          renderChatFeed = {(chatAppProps)=> <ChatFeeds { ...chatAppProps} />}
          
    />   
  );
      
  };
   
export default Communicationn;
 





