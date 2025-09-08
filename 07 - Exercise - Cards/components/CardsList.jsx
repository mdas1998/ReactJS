import Card from "./Card"

function CardsList({ cards }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          userId={card.userId}
          body={card.body}
        />
      ))}
    </div>
  )
}

export default CardsList
