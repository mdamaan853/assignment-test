import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import CardDetails from "./components/CartDetails"
import Home from './components/Home';
import ChatPage from './components/ChatPage/Chatpage';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <>
    {/* <Header/> */}
        <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    {/* <CardDetails/> */}
    </>
  );
}

export default App;
