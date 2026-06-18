import { Link } from 'react-router-dom'
import { Star, ShoppingCart, Plus } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="card group">
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            product.badge === 'Best Seller' ? 'bg-secondary-500' :
            product.badge === 'Organic' ? 'bg-green-600' :
            product.badge === 'Premium' ? 'bg-gold' :
            product.badge === 'New' ? 'bg-purple-600' :
            product.badge === 'Healthy' ? 'bg-teal-600' :
            'bg-primary-600'
          }`}>
            {product.badge}
          </span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{product.discount}%
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1 hover:text-primary-600 transition">{product.name}</h3>
        </Link>
        <p className="text-sm text-gray-500 mb-2">{product.unit}</p>
        <div className="flex items-center gap-1 mb-3">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through ml-2">₹{product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition shadow-md hover:shadow-lg"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
