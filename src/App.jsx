import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'

function App() {
  const [count, setCount] = useState(0)
  const { counter  } = useSelector( state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <p> count is: { counter }</p>
        <p>
          <button type="button" onClick={ () => dispatch( increment() )}>
            Increment 
          </button> 
          <button type="button" onClick={ () => dispatch ( decrement() )}>
            Decrement
          </button>
          <button type="button" onClick={ () => dispatch (incrementBy(2) )}>
            Increment by 2 
          </button>
        </p>
       
      </div>
     
    </div>
  )
}

export default App
