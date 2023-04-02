import React from 'react'
import Todo from './Todo';


const Todos = ({array}) => {

//console.log(array);
  return (
    <div>{array.map((todo)=>{
        return (
            <Todo name={todo}/>
        )
    })}</div>
  )
}

export default Todos