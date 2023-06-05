import { ChatEngine } from "react-chat-engine"; 
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from "./components/LoginForm";

const projectID = "a90568d6-78bb-4686-9588-c713764d28f3";

const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
      <ChatEngine 
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps }/> }
        onNewMessage = {() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
};

export default App;
