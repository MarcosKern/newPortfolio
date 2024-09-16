import { useEffect, useState } from "react"
import "./taskbar.css"

export default function Taskbar() {
  const [time, setTime] = useState('')
  const [fullDate, setFullDate] = useState('')

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const hour = dateObject.getHours()
      const minute = dateObject.getMinutes()
      const day = dateObject.getDate()
      const month = dateObject.getMonth()
      const year = dateObject.getFullYear()

      const currentTime = `${hour}:${minute}`
      const currentDate = `${day}/${(month + 1 <= 9) ? `0${month + 1}` : month + 1}/${year}`
      
      setTime(currentTime)
      setFullDate(currentDate)
    }, 1000)

  }, [])
  return(
    <footer className="taskbar">
      <div></div>
      <div className="date">
        <p>{time}</p>
        <p>{fullDate}</p>
      </div>
    </footer>
  )
}