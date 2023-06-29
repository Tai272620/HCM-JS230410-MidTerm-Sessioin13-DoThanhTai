import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { RemoveTask, UpdateStatusTask, UpdateTask } from '../redux/todoSlice'
import ModalUpdateTask from './ModalUpdateTask';

export default function Task({ task }) {
    const dispatch = useDispatch();
    const [isCompleted, setIsCompleted] = useState(task.status)

    useEffect(() => {
        setIsCompleted(task.status)
    },[task.status])

    return (
        <div className='task-container'>
            <div className='task'>
                <div className='task-left'>
                    <input type="checkbox" className='check' checked={isCompleted} value={isCompleted} onChange={() => {setIsCompleted(!isCompleted)
                        dispatch(UpdateStatusTask({
                            id: task.id,
                            task: task.task,
                            status: !isCompleted,
                            time: task.time
                        }))    
                }
                } />
                    <div>
                        <p style={isCompleted ? { textDecoration: "line-through" } : {}}>{task.task}</p>
                        <p>{task.time}</p>
                    </div>
                </div>

                <div className='task-right'>
                    <button onClick={() => dispatch(RemoveTask(task.id))}><span className="material-symbols-outlined delete-btn">
                        delete
                    </span></button>
                    <button className='edit-btn'>
                        <ModalUpdateTask task={task} />
                    </button>
                </div>
            </div>
        </div>

    )
}
