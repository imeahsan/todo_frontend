import {Task} from "./Task";

export const TodoList = (props) => {

    return (
        <div className="todo-list">
            {props.tasks?props.tasks.map(t=>(
                <Task Task={t.Task}/>
            )):<p>No tasks added</p>}
        </div>
    )
}
