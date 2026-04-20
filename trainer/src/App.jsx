import { useCallback, useState } from "react"
import Wizard from "./components/Wizard"
import Exercise from "./components/Exercise"
import Tracker from "./components/Tracker"


export default function App() {
  const [appState, setAppState] = useState(0)
  const [selection, setSelection] = useState('')

  const stateChange = async (formData) => {
    const data = formData.get('username')
    console.log(data);

    const request = await fetch(`http://localhost:3030/${data}`)
    if (request.ok) {
      console.log('we did it');
      const user = await request.json()
      console.log(user);
      localStorage.setItem('tracking', JSON.stringify(user))
      setAppState(1)
    } else {

      console.log('error somewhere');
    }

  }

  const handleWorkoutSelection = useCallback((workoutDetails) => {
    setAppState(2)
    setSelection(workoutDetails)
  })

  const handleComplete = useCallback(() => {
    setAppState(3)
  })


  return (
    <main>
      {appState === 0 && (
        <>
          <h1>Trainer EX</h1>
          <form action={stateChange}>
            <label htmlFor="username">Sign In</label>
            <br />
            <input type="text" name="username" id="username" />
            <button id="start" type="submit">Start Training</button>
          </form>
        </>
      )
      }
      {appState === 1 && <Wizard onWorkoutSelected={handleWorkoutSelection} />}
      {appState === 2 && <Exercise onCompletion={handleComplete} workout={selection} />}
      {appState === 3 && <Tracker />}
    </main>
  )
}