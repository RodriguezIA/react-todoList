import './App.css'
import { useStore } from './store/doList'
import { CiFilter   } from 'react-icons/ci'
import { Task } from './components/Task'
import { CreateButton } from './components/Button/CreateButton'
import { Divider } from './components/Divider/Divider'

function App() {
  const { list } = useStore()


  return (
    <>
      <div className='container'>
        <div>
          <h1 className='title'> 📁 TO-DO</h1>
          <Divider />
          {/* Buttons space */}
          <div className='button-area'>
            <CreateButton />
            <button className='button'> <CiFilter className='icon' /> Filters</button>
          </div>  
        </div>
        <div className='list'>
          <ul>
            {list.map((l, index) => (
              <Task key={index} task={l}  /> 
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
