import React from 'react'

const Todo = ({name, key, setArray, list}) => {
  
  const removeElement = (name)=>{
    setArray(list.filter((element)=>{
      return element!=name;
    }))
  }
  
  return (
    <>
        <div className="todoContainer">
            <button onClick={()=>removeElement(name)} className='doneButton'>Done</button>
            <div>{name}</div>
        </div>
    </>
  )
}

export default Todo