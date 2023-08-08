import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Title from './components/Title';
import MainPage from './components/MainPage';
import AddRoom from './components/AddRoom';
import Room from './components/Room';

function App() {

  const [rooms,setRooms] = useState([])

  const addNewRoom = (name,color,type) =>{
    setRooms([...rooms,{name:name , color:color , type:type, products : []}])
  }

  const addNewProduct = (index, typeOfProduct) =>{
    const roomsCopy = [...rooms];
    const product = {condition:false, type: typeOfProduct};
    roomsCopy[index].products.push(product)
    setRooms(roomsCopy)
  }

  const changeProductStatus = (indexOfRoom,indexOfProduct) =>{
    rooms[indexOfRoom].products[indexOfProduct].condition = !rooms[indexOfRoom].products[indexOfProduct].condition
    setRooms([...rooms])
  }

  return (
    <div className="App">
    <Title/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MainPage rooms={rooms}/>} />
    <Route path='/AddRoom' element={<AddRoom addNewRoom={addNewRoom}/>} />
    {rooms.map((val,index)=>{
      return <Route key={index} path={`/rooms/${val.name}`} element={<Room index={index} name={val.name} type={val.type} products={val.products} addNewProduct={addNewProduct} changeProductStatus={changeProductStatus}/>} />
    })}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
