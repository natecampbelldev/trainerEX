import { useState } from "react"


export default function Wizard({ onWorkoutSelected }) {
    const [workout, setWorkout] = useState('')
    const [step, setStep] = useState(0)

    function step2(input) {
        setWorkout(input)
        setStep(s => s + 1)
    }
    function step3(input) {
        onWorkoutSelected(input)
    }


    return (<>
        <section id="wizard">
            {step === 0 &&
                <>
                    <button id="upper" onClick={(e) => step2(e.target.textContent)}>Upper Body</button>
                    <button id="core" onClick={(e) => step2(e.target.textContent)}>Core</button>
                    <button id="lower" onClick={(e) => step2(e.target.textContent)}>Lower Body</button>
                </>}
            {step === 1 &&
                <>
                    {workout === 'Upper Body' ? (
                        <>
                            <button id="chest" onClick={(e) => step3(e.target.id)}>Chest & Back</button>
                            <button id="arms" onClick={(e) => step3(e.target.id)}>Arms</button>
                            <button id="shoulders" onClick={(e) => step3(e.target.id)}>Shoulders</button>
                        </>
                    ) :
                        workout === "Lower Body" ? (
                            <>
                                <button id="double" onClick={(e) => step3(e.target.id)}>Both Legs</button>
                                <button id="single" onClick={(e) => step3(e.target.id)}>Single Leg</button>
                            </>
                        ) : (
                            null
                        )}
                </>}
        </section>
    </>)
}