import {React,useEffect,useState} from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

import axios from 'axios'; 



const ChatComponent = (

) => {
    const [chatClient, setChatClient] = useState(null);
    const [channel, setChannel] = useState(null);
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlciJ9.oN9zK-YdaEzLtYwvFwCmfkoWWga1Qo0wC2ZuRBi5mHk"
    useEffect(()=>{
        
        
        const initChat = async () => {
        const client = StreamChat.getInstance('ms753b275zwm');
        // const userName= localStorage.getItem('userName').toString;
        const userName1= "user"
        await  axios.post('http://localhost:3000/api/chat',{userName:"user"}).then(
        response=>{
            token =response.data
            console.log(token)
        }
        
        );
        console.log(token)

        await client.connectUser(
          {
            id:"user",
            name: "user"
          },
          token,
        );
        
       const channelSet= await client.channel('messaging', 'user', {
            // add as many custom fields as you'd like
    
            name: 'Talk about food-commune',
            members: ["user"],
          });
          
        console.log("in async");
        setChatClient(client);
        setChannel(channelSet)
      };
  
      initChat();
    }, []);
    
    
    return(

    <Chat client={chatClient} theme='messaging light'>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
}

  export default ChatComponent