import s from "./SearchBar.module.css"

export function SearchBar({ onChange }) {

    const handleChange = (ev) => {
        onChange(ev.target.value)
    }


    return (
        <div className={s.input_container}>
            <input className={s.input} type="text" placeholder="Filter the pokemon list, ex: Pikachu" onChange={handleChange} />
        </div>
    )
}