import { Link } from "react-router-dom";

export default function Card({ listing }) {
  const {
    name = "Cozy Hillside Cottage",
    location = "Manali, Himachal Pradesh",
    price = 2800,
    rating = 4.8,
    reviews = 42,
    tags = ["Mountain View", "WiFi", "Kitchen"],
    emoji = "🏔️",
    available = true,
  } = listing || {};

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-forest-100 hover:shadow-md transition-shadow group">
      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-forest-200 to-forest-400 flex items-center justify-center">
        <span className="text-7xl">{emoji}</span>
        {!available && (
          <div className="absolute inset-0 bg-stone/40 flex items-center justify-center">
            <span className="bg-white text-stone font-medium text-sm px-3 py-1 rounded-full">
              Fully Booked
            </span>
          </div>
        )}
        {available && (
          <div className="absolute top-3 right-3 bg-forest-600 text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Available
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display font-semibold text-stone text-lg leading-snug group-hover:text-forest-700 transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 text-sm">
            <span className="text-clay-500">★</span>
            <span className="font-medium text-stone">{rating}</span>
            <span className="text-stone/50">({reviews})</span>
          </div>
        </div>

        <p className="text-sm text-stone/60 mb-3">📍 {location}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-forest-50 text-forest-700 px-2 py-0.5 rounded-full border border-forest-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-forest-50">
          <div>
            <span className="text-xl font-display font-bold text-forest-700">
              ₹{price.toLocaleString()}
            </span>
            <span className="text-stone/50 text-sm"> / night</span>
          </div>
          <Link
            to="/login"
            className="px-4 py-1.5 bg-clay-500 hover:bg-clay-600 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}

// Card component exported successfully
