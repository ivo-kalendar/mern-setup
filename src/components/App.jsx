import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../styles/App.css'

// SERVER COMPONENT

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/ivo-kalendar" target="_blank">
          <img src="/logo.svg" className="logo" alt="Ivo Kalendar logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ivo Kalendar React Setup</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Ivo and React logos to learn more
      </p>
    </>
  )
}