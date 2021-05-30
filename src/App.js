import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '5706a970-6f51-456c-a8a1-6a20b84f02b2';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / > ;

        return ( <
            ChatEngine height = "100vh"
            projectID = { projectID }
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />} /
                >
            );
        };

        // infinite scroll, logout, more customizations...

        export default App;