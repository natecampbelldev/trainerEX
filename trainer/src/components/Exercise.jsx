import { useState } from "react"
import Checkbox from "./Checkbox"

const exercises = {
    shoulders: ['upright rows', 'forward raise', 'lateral raise', 'shoulder press'],
    arms: ['tricep pullover', 'curl', 'tricep kickback', 'rotations'],
    chest: ['push-up', 'pec fly', 'dips', 'lawnmower'],
    single: ['forawrd lunge', 'side lunge', 'Romanian Deadlift', 'Bulgarian Squat'],
    double: ['squats', 'bridge', 'crossover step-up', 'calf raise'],
    core1: ['climbers', 'leg raise', 'plank', 'flutter kick', 'scissor', 'over the mountain'],
    core2: ['6in hold', 'Adduction', 'skaters', 'ski abs', 'oblique climbers', 'Russian Twist'],
    agility1: ['jump rope', 'sprints', 'tuck jumps', 'box jumps', 'shuffle'],
    agility2: ['t-drill', 'jump, shuffle, sprint', 'burpee', 'double box jump', 'squat jump']
}

const warmup = ['hip cross', 'bicycle', 'hand walk', 'side bend', 'high knee', 'jumping jacks', 'skips']

export default function Exercise({ onCompletion, workout }) {

    const [stage, setStage] = useState(0);
    const [completed, setCompleted] = useState(0)


    const exerciseMap = exercises[workout]


    const handleChecks = () => {
        setCompleted(c => c + 1)
        if (completed + 1 === warmup.length) {
            setStage(1)
        }
        if (completed + 1 === warmup.length + exerciseMap.length) {
            setStage(2)
        }
        if (completed + 1 === warmup.length + exerciseMap.length + exercises.agility1.length) {
            onCompletion()
        }
    }

    return (
        <section>
            {stage === 0 && <>
                <h2>Warm Up</h2>
                {warmup.map(w => <Checkbox exercise={w} onCheck={handleChecks} />)}
            </>
            }
            {stage === 1 && <>
                <h2>{workout.toUpperCase()}</h2>
                {exerciseMap.map(w => <Checkbox exercise={w} onCheck={handleChecks} />)}
            </>
            }
            {stage === 2 && <>
                <h2>Agility</h2>
                {exercises.agility1.map(w => <Checkbox exercise={w} onCheck={handleChecks} />)}
            </>
            }

        </section>)

}