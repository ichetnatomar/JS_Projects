import './Card.css'

function Card({ cardTitle, cardDescription }) {
  return <div className="card">
    <h1>{cardTitle}</h1>
    <div>{cardDescription}</div>
  </div>
}
export default Card;