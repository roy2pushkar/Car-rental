type RatingStarsProps = {
  rating: number
}

export default function RatingStars({ rating }: RatingStarsProps) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5

  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <span key={i}>★</span>
        }
        if (i === fullStars && halfStar) {
          return <span key={i}>☆</span>
        }
        return <span key={i} className="text-gray-300">★</span>
      })}
      <span className="ml-2 text-sm text-gray-600">{rating}</span>
    </div>
  )
}
