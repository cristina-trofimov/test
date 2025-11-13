import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Hello, this is a test</h1>
        <button style={{ marginRight: '10px', fontSize: '16px' }} onClick={() => alert('Button clicked!')}>Click Me</button>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Visit Example
        </a>
      </div>
    </>
  )
}

export default App
