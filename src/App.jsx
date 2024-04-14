import './App.css'
import { useStore } from './store/doList'
import { useState } from 'react'

function App() {
  const { list, setItemList, checkItemList } = useStore()
  const [inputValue, setInputValue] = useState('')

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

  return (
    <>
      <div className='container'>
        <div>
          <h1>Todo List</h1>
          <input 
            type="text"
            value={inputValue}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress} 
          />
        </div>
        <div>
          <ul>
            {list.map((l, index) => (
              <li key={index}>
                <input
                  type='checkbox'
                  checked={l.isDone}
                  onChange={() => hanldeCheckTask(index)} 
                />
                {l.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
