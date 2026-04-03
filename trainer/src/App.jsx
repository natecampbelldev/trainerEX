import { useCallback, useState } from "react"
import Wizard from "./components/Wizard"
import Exercise from "./components/Exercise"
import Tracker from "./components/Tracker"


export default function App() {
  const [appState, setAppState] = useState(0)
  const [selection, setSelection] = useState('')

  const stateChange = useCallback(()=> {
    setAppState(1)
  })
  
  const handleWorkoutSelection = useCallback((workoutDetails)=>{
    setAppState(2)
    setSelection(workoutDetails)
  })

  const handleComplete = useCallback(()=>{
    setAppState(3)
  })


  return (
    <main>
      {appState === 0 && (
        <>
          <h1>Trainer EX</h1>
          <button id="start" onClick={stateChange}>Start Training</button>
        </>
      )
      }
      {appState === 1 && <Wizard onWorkoutSelected={handleWorkoutSelection}/>}
      {appState === 2 && <Exercise onCompletion={handleComplete} workout={selection} />}
      {appState === 3 && <Tracker />}
    </main>
  )
}