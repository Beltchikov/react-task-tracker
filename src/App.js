import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctor Appointment',
        day: '05.02 02:30',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting an School',
        day: '06.02 01:30',
        reminder: true
    },
    {
        id:3,
        text: 'Food Shopping',
        day: '07.02 02:30',
        reminder: true
    }
])

  return (
    <div className="container">
      <a href='https://www.youtube.com/watch?v=w7ejDZ8SWv8'>https://www.youtube.com/watch?v=w7ejDZ8SWv8</a>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
