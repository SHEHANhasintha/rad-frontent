
import { useEffect, useState } from 'react';
import './App.css';
// import io from 'socket.io-client'; 
import { v4 as uuidv4 } from 'uuid';

const dataConf = { userName: uuidv4() };

function App() {
  // const [msg, setMsg] = useState('');
  // const [room, setRoom] = useState('');
  // const [msgTo, setMsgTo] = useState('');
  // const [roomMate, setroomMate] = useState('');
  // const [roomId, setRoomId] = useState('');


  // const socket = io('ws://localhost:5000');
  


  // // after component mount...
  // useEffect(() => {
  //   // connect to the socket server

  //   console.log(dataConf.userName);

  //   socket.on('connection', (data) => {
  //     console.log('connected to server');
      
  //     socket.emit('dataConf', dataConf);
      

  //   })

  //   // socket.emit('dataConf', dataConf);

  //   socket.emit('connection', dataConf);


  //   socket.on("reconnect", (attempt) => {
  //     socket.emit('connection', dataConf);
  //   });



  //   socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //   });

  //   socket.on(dataConf.userName.trim(), (data) => {
  //     console.log(data);
  //   })

  //   // socket created room
  //   socket.on("room-created", (data) => {
  //     console.log(data);
  //   })

  //   // socket add to room
  //   socket.on("room-joined", (data) => {
  //     console.log(data);
  //   })

  //   // socket.emit('message', "hello i am shehan");

  //   socket.on(dataConf.userName.trim(), (data) => {
  //     console.log(data, 'data received from here');
  //   })


  //   socket.emit('join-room', dataConf);



    
  // }, []);

  // useEffect(() => {
  //   console.log('msg changed', msg);

  //   socket.on(dataConf.userName.trim(), (data) => {
  //     console.log(data, 'data received from here');
  //   })
  // },[msg]);



  // const submitNow = (e) => {
  //   e.preventDefault();
  //   // setMsg(msg);
  //   console.log('msg', msg);

  //   const dataObj = {
  //     'msg': msg,
  //     'msgFrom': dataConf.userName,
  //     msgTo
  // };
  // // userName
  // socket.on(dataConf.userName.trim(), (data) => {
  //   console.log(data, 'data received from there', dataConf.userName);
  // })
  // socket.emit('message', dataObj);


  // }

  // const createRoom = (e) => {
  //   e.preventDefault();
  //   const dataObj = {
  //     'roomName': room,
  //     'userName': dataConf.userName
  //   };      

  //   socket.emit('create-room', dataObj);
  // }

  // const addToRoom = (e) => {
  //   e.preventDefault();
  //   const dataObj = {
  //     roomId,
  //     'roomMateId': roomMate
  //   };      

  //   socket.emit('add-to-room', dataObj);
  // }



  return (
    <div className="App">
        {/* <label htmlFor="fname">msg: </label>
        <input type="text" id="fname" name="fname" onChange={(e) => {setMsg(e.target.value)}}/><br/><br/>
        <input type="text" id="fname" name="fname" onChange={(e) => {setMsgTo(e.target.value)}}/><br/><br/>
        <input type="submit" value="Submit" onClick={(e) => {submitNow(e)}}/>

        <br/>

        <label htmlFor="fname">roomname: </label>
        <input type="text" id="roomname" name="roomname" onChange={(e) => {setRoom(e.target.value)}}/><br/><br/>
        <input type="submit" value="create Room" onClick={(e) => {createRoom(e)}}/>

        <br/>

        <label htmlFor="room mate">add room mate: </label>
        <input type="text" id="roomId" name="roomId" onChange={(e) => {setRoomId(e.target.value)}}/><br/><br/>
        <input type="text" id="roommatename" name="roommatename" onChange={(e) => {setroomMate(e.target.value)}}/><br/><br/>
        <input type="submit" value="add to room" onClick={(e) => {addToRoom(e)}}/> */}

        
    </div>
  );
}

export default App;
