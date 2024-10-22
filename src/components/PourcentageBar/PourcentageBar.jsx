import s from "./PourcentageBar.module.css"
import { MAX_STAT } from "../../const/PokemonsStatsMax"

export function PourcentageBar({ stats }) {

    function toPourcentage(stat, type) {
        let pourcentage = 0;

        switch (type) {
            case "attack":
                pourcentage = (stat * 100) / MAX_STAT.attack
                break;
            case "hp":
                pourcentage = (stat * 100) / MAX_STAT.hp
                break;
            case "defense":
                pourcentage = (stat * 100) / MAX_STAT.defense
                break;
            case "specialattack":
                pourcentage = (stat * 100) / MAX_STAT.specialattack
                break;
            case "specialdefense":
                pourcentage = (stat * 100) / MAX_STAT.specialdefense
                break;
            case "speed":
                pourcentage = (stat * 100) / MAX_STAT.speed
                break;
            default:
                break;
        }

        return pourcentage;

    }

    function whatColor(pourcentage) {
        if (pourcentage < 33) {
            return "red";
        } else if (pourcentage > 33 && pourcentage < 66) {
            return "orange";
        } else {
            return "green"
        }
    }

    return (
        <div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>HP</p></span>
                <span><p>{stats.base.HP}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.HP, "hp"), backgroundColor: whatColor(toPourcentage(stats.base.HP, "hp")) }}></div>
                </div>
            </div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>Attack</p></span>
                <span><p>{stats.base.Attack}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.Attack, "attack"), backgroundColor: whatColor(toPourcentage(stats.base.Attack, "attack")) }}></div>
                </div>
            </div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>Defense</p></span>
                <span><p>{stats.base.Defense}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.Defense, "defense"), backgroundColor: whatColor(toPourcentage(stats.base.Defense, "defense")) }}></div>
                </div>
            </div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>Special attack</p></span>
                <span><p>{stats.base.specialattack}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.specialattack, "specialattack"), backgroundColor: whatColor(toPourcentage(stats.base.specialattack, "specialattack")) }}></div>
                </div>
            </div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>Special defense</p></span>
                <span><p>{stats.base.specialdefense}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.specialdefense, "specialdefense"), backgroundColor: whatColor(toPourcentage(stats.base.specialdefense, "specialdefense")) }}></div>
                </div>
            </div>
            <div className={s.containerProgressBar}>
                <span className={s.title}><p>Speed</p></span>
                <span><p>{stats.base.Speed}</p></span>
                <div className={s.progressBg}>
                    <div className={s.progress} style={{ width: toPourcentage(stats.base.Speed, "speed"), backgroundColor: whatColor(toPourcentage(stats.base.Speed, "speed")) }}></div>
                </div>
            </div>
        </div>

    )
}