import './App.css'
import { useStore } from './store/doList'
import { useState, useEffect } from 'react'
import ConfettiExplosion from 'react-confetti-explosion'

import { CiCirclePlus, CiFilter   } from 'react-icons/ci'
import { Task } from './components/Task'

function App() {
  const { list, setItemList, checkItemList } = useStore()
  const [inputValue, setInputValue] = useState('')
  const [isExploding, setIsExploding] = useState(false)

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      
      const newItem = { value: inputValue, isDone: false };
      setItemList(newItem)
      setInputValue('')



      console.log(list)
    }
  }

  const hanldeCheckTask = (index) => {
    checkItemList(index);
  }

  useEffect(() => {
    const doneItem = list.find(item => item.isDone === true);
    setIsExploding(!!doneItem);
  }, [list]);

  return (
    <>
      <div className='container'>
        <div>
          <h1 className='title'>TO-DO</h1>
          <div className='divider'></div>
          {/* Buttons space */}
          <div className='button-area'>
            <button className='button' id='newtask'> <CiCirclePlus/> New Task</button>
            <button className='button'> <CiFilter/> Filters</button>
          </div>

          {/* <input 
            type="text"
            value={inputValue}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress} 
          /> */}
        </div>
        <div className='list'>
          <ul>
            {list.map((l, index) => (
              <Task key={index} task={l}  /> 
              // <li key={index}>
              //   <input
              //     type='checkbox'
              //     checked={l.isDone}
              //     onChange={() => hanldeCheckTask(index)} 
              //   />
              //   {isExploding && <ConfettiExplosion />}
              //   {l.value}
              // </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
