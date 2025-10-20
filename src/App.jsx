import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ClickSpark from './components/ClickSpark'
import ShinyText from './components/ShinyText'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ClickSpark
      sparkColor="#646cff"
      sparkSize={8}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.2}
    >
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ShinyText
        text="BinhDepZai 2000"
        speed={2}
        className="main-title"
        style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          margin: '1rem 0'
        }}
      />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click anywhere to see spark effects! Click on the Vite and React logos to learn more
      </p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '', borderRadius: '8px' }}>
        <h3>ClickSpark Configuration Options:</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li><code>sparkColor</code>: Color of the sparks (default: '#fff')</li>
          <li><code>sparkSize</code>: Size of each spark line (default: 10)</li>
          <li><code>sparkRadius</code>: How far sparks travel (default: 15)</li>
          <li><code>sparkCount</code>: Number of sparks per click (default: 8)</li>
          <li><code>duration</code>: Animation duration in ms (default: 400)</li>
          <li><code>easing</code>: Animation easing ('linear', 'ease-in', 'ease-out', 'ease-in-out')</li>
          <li><code>extraScale</code>: Additional scaling factor (default: 1.0)</li>
        </ul>
      </div>
    </ClickSpark>
  )
}

export default App
