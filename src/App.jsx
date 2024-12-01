import { useEffect, useState } from 'react'  
import RequestForm from './components/RequestForm'
 
function App() {
  const [requests, setRequests] = useState([])

  useEffect( () => {
    const getRequests = JSON.parse(localStorage.getItem('requests'))
    if(getRequests) {
      setRequests(getRequests)
    }
  }, [])
  useEffect( () => {
    if(requests.length !== 0) {
      localStorage.setItem('requests', JSON.stringify(requests))
    }
  },[requests])

  const addContents = (item) => {
    setRequests([...requests, item])
  }

  return (
    <>
      <div className="container">
        <h1>Request</h1>
        <RequestForm addContents={addContents} requests={requests} />
      </div>
    </>
  )
}

export default App
