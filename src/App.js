//external imports
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// internal imports
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';


function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'doctor appointment',
            day: 'march 20th',
            reminder: true,
        },
        {
            id: 2,
            text: 'meeting with friends',
            day: 'march 24th',
            reminder: true,
        },
        {
            id: 3,
            text: 'groceries',
            day: ' march 16th',
            reminder: true,
        }
    ]);

    // add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    };

    // toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
        ))
    }

    return (
        <Router>
            <div className="container" >
                <Header name={'Michael'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks'}
                <Route path='https://www.linkedin.com/in/michael-tung-659b44bb/' component={Footer} />
                <Footer />
            </div>
        </Router>
    )
};

export default App;