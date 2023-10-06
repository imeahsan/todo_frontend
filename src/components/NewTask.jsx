import {useState} from "react";
import axios from "axios";

export const NewTask = () => {
    const [task, setTask] = useState();

    const handleClick = () => {

    }
    const handleSubmit = (e) => {
        if (task) {
            alert(task)
            axios.post("http://localhost:3100/todo", {task}).then((res) => {
                console.log(res.data)
                setTask("")
            })
        }
        e.preventDefault()

    }
    return (
        <>
            <div className="newTaskInputs">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="taskInput taskInputs" style={styles} required={true} value={task}
                           onChange={e => setTask(e.target.value)}
                           placeholder="Enter Task"
                    />
                    <button type="submit" style={btnStyle} className="taskInputs">+</button>
                </form>

            </div>
        </>
    )
}

const btnStyle = {
    width: 48,
    height: 48,
    borderRadius: "50px",
    border: "none",

    color: "brown",
    fontSize: "30px"

}
const styles = {
    width: "80%",
    margin: 5,
    height: 36,
    alignSelf: "center"
}