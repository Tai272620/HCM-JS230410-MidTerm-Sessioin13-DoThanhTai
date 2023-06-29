import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { UpdateTask } from '../redux/todoSlice';

function ModalUpdateTask({task}) {
    const [show, setShow] = useState(false);

    const [editTask, setEditTask] = useState(task.task)

    const [editStatus, setEditStatus] = useState(task.status ? "Complete" : "Incomplete");

    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} style={{backgroundColor: "#f0f0f0", color:"black"}}>
                <span className="material-symbols-outlined">
                    edit
                </span>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <select name="" id="" value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className='select'>
                                <option value="Incomplete">Incomplete</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {handleClose()
                        if (editStatus === "Complete") {
                            dispatch(UpdateTask({...task, task: editTask, status: true}))
                            setEditStatus("Incomplete")
                        } else if (editStatus === "Incomplete") {
                            dispatch(UpdateTask({...task, task: editTask, status: false}))
                            setEditStatus("Incomplete")
                        }
                    }}>
                        Update Task
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateTask;