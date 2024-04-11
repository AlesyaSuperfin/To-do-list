import './App.css';

import imageOne from './ImageOne.png';
import imageTwo from './ImageTwo.png';
import { ToDoList } from './ToDoList';
import { TodayDate } from './TodayDate';

function App() {
  return (
    <div className='Container'>
      <img className='imageOne' src={imageOne} width='250px' alt='One' />
      <h1>Today's To-Do List</h1>
      <TodayDate />
      <ToDoList />
      <img className='imageTwo' src={imageTwo} width='250px' alt='Two' />
    </div>
  );
}

export default App;
