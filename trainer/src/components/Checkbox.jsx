export default function Checkbox({ exercise, onCheck }) {
    //   
    return (
        <>
        <div>
            <input onChange={onCheck} type="checkbox" name={exercise} id={exercise} />
            <label htmlFor={exercise}>{exercise}</label>
        </div>
        </>
    )
}