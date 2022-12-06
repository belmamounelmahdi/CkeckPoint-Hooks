import { faCircleCheck, faCirclePlus, faEllipsisVertical, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Todo = () => {

    const [tasks, setTasks] = useState([
        {id: 1, value: "Pomodoro work"}
    ])

    const [newTask, setNewTask] = useState("")

    const handelDelete = (id) => {
        console.log(id)
        const tasksCopy = [...tasks]

        const tasksCopyUpdate = tasksCopy.filter((task) => task.id !== id)

        setTasks(tasksCopyUpdate)
    } 

    const handelSubmit = (event) => {
        event.preventDefault();

        const tasksCopy = [...tasks]

        const taskId = new Date().getTime();
        const taskValue = newTask;
        tasksCopy.push({id: taskId, value: taskValue})

        setTasks(tasksCopy)
        setNewTask("")
        setDisplay("flex")
    }
    const handelChange = (event) => {
        setNewTask(event.target.value)
    }
    return ( 
        <div className="todo">
            <div className="head-todo">
                <h4>Tasks</h4>
                <button> <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon> </button>              
            </div>
            <hr /> 
            <div className="content-todo">
                <ul>
                    {tasks.map((task) => 
                    <li key={tasks.id} >
                        {task.value} 
                            <button onClick={() => handelDelete(task.id)}>
                                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                            </button>
                    </li> 
                    )}
                </ul>
            </div>
            <div className="add-task">
                <form action="submit" onSubmit={handelSubmit}>
                    <input value={newTask} type="text" placeholder='What are you working on?' onChange={handelChange}/>
                <button>
                    <FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon>
                    Add Task
                </button>
                </form>

            </div>
        </div>
    );
}

export default Todo;