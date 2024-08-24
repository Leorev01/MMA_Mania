export default function Filter({label, values, handleChange, name}){
    return(
        <>
            <label htmlFor={name}>{label}</label>
            <select onChange={handleChange} name={name}>
                {values.map(value => <option key={value} value={value.toLowerCase()}>{value}</option>)}
            </select>
        </>
    )
}