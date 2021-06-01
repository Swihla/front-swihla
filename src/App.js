import {useState, useEffect} from 'react'

function App() {
  const [message, setMessage] = useState("Api call working not working")
  useEffect(() => {
    fetch('http://localhost:3040/home')
      .then(res => res.json())
      .then(res => setMessage(res.message))
  }, [])
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
