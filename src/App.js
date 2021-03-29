import Header from './components/Header'
import Tasks from './components/Tasks'
import Addtask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [showAddTasks, setShowAddTasks] = useState(false)
  
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: '05.02 02:30',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting an School',
      day: '06.02 01:30',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: '07.02 02:30',
      reminder: true
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000 +1)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder}
    : task))
  }

  return (
    <div className="container">
      <a href='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>https://www.youtube.com/watch?v=w7ejDZ8SWv8</a>
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} />
      {showAddTasks && <Addtask onAdd={addTask} />}
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : 'No Tasks to Show'}

    </div>
  );
}

export default App;
