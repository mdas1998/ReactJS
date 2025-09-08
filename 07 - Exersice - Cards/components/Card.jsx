function Card({title, userId, body}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 border border-gray-200">
      <h3 className="font-semibold text-lg text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-4">User #{userId}</p>
      <p className="text-gray-700">{body}</p>
    </div>
  )
}

export default Card