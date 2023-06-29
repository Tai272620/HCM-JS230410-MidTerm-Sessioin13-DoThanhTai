import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { AddTask } from '../redux/todoSlice';
import { randomId } from '@mieuteacher/meomeojs';

function ModalTask(props) {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleAddTask = ({ id, task, status, time }) => {
    dispatch(AddTask({ id, task, status, time: getCurrentTime()}))
    setTask("") 
  }

  function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    var currentTime = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm + " " + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    return currentTime;
  }

  return (
    <div className='addTodo-container'>
      <h1>TODO LIST</h1>
      <div className='addTodo'>
        <Button variant="primary" onClick={handleShow}>
          ADD TODO
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add Task"
                  autoFocus
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <select name="" id="" value={status} onChange={(e) => setStatus(e.target.value)} className='select'>
                  <option value="Incomplete">Incomplete</option>
                  <option value="Complete">Complete</option>
                </select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => {
              handleClose()
              if (status === "Incomplete") {
                handleAddTask({ id: randomId(), task: task, status: false })
                setStatus("Incomplete")
              } else if (status === "Complete") {
                handleAddTask({ id: randomId(), task: task, status: true })
                setStatus("Incomplete")
              }
            }}>
              Add Task
            </Button>
          </Modal.Footer>
        </Modal>

        <select name="" id="" onChange={(e) => props.setFilterStatus(e.target.value)} className='seclect-filter'>
          <option value={null}>All</option>
          <option value={true}>Complete</option>
          <option value={false}>Incomplete</option>
        </select>
      </div>

    </div>
  );
}

export default ModalTask;