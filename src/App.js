import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>To Do List</h1>
        <Todo text='Wim Hof Breath'/>
        <Todo text='Breathless Pushups'/>
        <Todo text='Meditate'/>
        <Modal />
        <Backdrop />
    </div>
  );
}

export default App;
