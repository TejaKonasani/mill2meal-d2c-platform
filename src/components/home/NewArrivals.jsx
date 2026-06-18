import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../common/ProductCard'
import { products } from '../../data/products'

export default function NewArrivals() {
  const newProducts = products.filter(p => p.badge === 'New' || p.badge === 'Healthy').slice(0, 4)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">Latest additions to our collection</p>
          </div>
          <Link to="/category/healthy-snacks" className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold hover:gap-2 transition-all">
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
