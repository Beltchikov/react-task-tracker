const Task = ({task}) => {
    return (
        <div className ='task'>
            <h3 key={task.id}>{task.text}</h3>
        </div>
    )
}

export default Task
