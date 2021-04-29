const StreamChat = require('stream-chat').StreamChat; 
  const chatClient = StreamChat.getInstance('ms753b275zwm');
  const client = new StreamChat('ms753b275zwm', 'z4c5cts7jtsjnh25bxxn7tmefarcfxys6wwuu3am943mb6fqzm46vsyyj6edavfr'); 
  
const chat_token =(req,res)=>{

    // const userid= 'user'+Math.random()*10 ;
    const stringSet= JSON.stringify(req.body); 
    const chat_token = client.createToken(stringSet);
    res.send(chat_token)
}


  module.exports={chat_token}