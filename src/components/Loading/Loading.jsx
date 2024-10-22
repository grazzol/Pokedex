import s from "./Loading.module.css"

export function Loading() {
    return (
        <div className={`${s.loop} ${s.cubes}`}>
            <div className={`${s.item} ${s.cubes}`}></div>
            <div className={`${s.item} ${s.cubes}`}></div>
            <div className={`${s.item} ${s.cubes}`}></div>
            <div className={`${s.item} ${s.cubes}`}></div>
            <div className={`${s.item} ${s.cubes}`}></div>
            <div className={`${s.item} ${s.cubes}`}></div>
        </div >
    )
}