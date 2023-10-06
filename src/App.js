import './App.css';
import background from "./background.png"
import ProfileImage from "./components/ProfileImage";
import SelectDay from "./components/SelectDay";
import {NewTask} from "./components/NewTask";
import {TodoList} from "./components/TodoList";
import axios from "axios";
import {useEffect, useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const getTasks = () => {
        axios.get("http://localhost:3100/todo").then((res) => {
            console.log(tasks)
            setTasks(res.data)
        })
    }

    useEffect(() => {
        getTasks()
    }, []);


    return (
        <div className="App fullscreen-bg" style={{backgroundImage: `url(${background})`}}>
            <ProfileImage/>S
            <SelectDay/>
            <TodoList tasks={tasks}/>
            <NewTask/>

        </div>
    );
}

export default App;
