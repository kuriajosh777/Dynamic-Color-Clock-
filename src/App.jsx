import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import './App.css'

function App() {
  // Store the current date/time in state so React re-renders when it changes
  const [now, setNow] = useState(new Date())

  // Update the time every second; clean up the timer when the component unmounts
  useEffect(() => {
    const timerId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <div className="clock-card">
      <h1 className="clock-title">Color Clock</h1>
      <p className="clock-date">{format(now, 'EEEE, MMMM do, yyyy')}</p>
      <p className="clock-time">{format(now, 'HH:mm:ss')}</p>
    </div>
  )
}

export default App
