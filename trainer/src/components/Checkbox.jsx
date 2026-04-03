export default function Checkbox({ exercise, onCheck }) {
    return (
        <>
            <label>{exercise}</label>
            <input onChange={onCheck} type="checkbox" name={exercise} id={exercise} />
            <br />
        </>
    )
}