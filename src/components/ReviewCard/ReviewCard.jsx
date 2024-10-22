import s from "./ReviewCard.module.css"

export function ReviewCard({ review }) {

    return (
        <div className={s.card_container}>
            <p className={s.card_content}>{review.content}</p>
            <p className={s.card_author}>posted by : {review.author}</p>
        </div>
    )
}