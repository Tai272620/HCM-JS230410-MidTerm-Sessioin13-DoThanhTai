import { useState } from 'react';
import './App.scss';
import ModalTask from './components/ModalTask';
import TaskList from './components/TaskList';

function App() {
  const [filterStatus, setFilterStatus] = useState(null)
  return (
    <>
      <ModalTask filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
      <TaskList filterStatus={filterStatus}/>
    </>
  );
}

export default App;
