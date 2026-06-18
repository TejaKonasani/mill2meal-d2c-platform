import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '../common/ProductCard'
import { products } from '../../data/products'

export default function BestSellers() {
  const bestSellers = products.filter(p => p.badge === 'Best Seller' || p.rating >= 4.7).slice(0, 4)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="section-title">Best Sellers</h2>
            <p className="section-subtitle">Loved by 50,000+ families</p>
          </div>
          <Link to="/category/rice-millets" className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold hover:gap-2 transition-all">
            View All <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/category/rice-millets" className="btn-outline inline-flex items-center gap-2">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
