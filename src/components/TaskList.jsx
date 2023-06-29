import React from 'react'
import { useSelector } from 'react-redux'
import { randomId } from '@mieuteacher/meomeojs'
import Task from './Task'



export default function TaskList(props) {
    const todoStore = useSelector(state => state.todo)

    function filterData(arrayData) {
      let result = []
      if (props.filterStatus == null || props.filterStatus == "All") {
        result = arrayData
      }
      if (props.filterStatus == "true") {
        result = arrayData.filter(item => item.status == true )
      }
      if (props.filterStatus == "false") {
        result = arrayData.filter(item => item.status == false )
      }
      return result
    }
  return (
    <div>  
        {todoStore?.length > 0 ? (filterData(todoStore).map((task) => <Task task={task} key={randomId()}/>)) : (<div className='noTask'>NO TODOS</div>)}
    </div>
  )
}
