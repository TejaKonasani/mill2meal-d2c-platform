import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, ShoppingCart, User, Menu, X, ChevronDown, MapPin, Phone } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  const categories = [
    { name: 'Rice & Millets', slug: 'rice-millets' },
    { name: 'Dals & Pulses', slug: 'dals-pulses' },
    { name: 'Cooking Oils', slug: 'cooking-oils' },
    { name: 'Spices & Masalas', slug: 'spices-masalas' },
    { name: 'Flours & Atta', slug: 'flours-atta' },
    { name: 'Dry Fruits & Nuts', slug: 'dry-fruits-nuts' },
    { name: 'Healthy Snacks', slug: 'healthy-snacks' },
    { name: 'Ghee & Honey', slug: 'ghee-honey' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary-800 text-white text-sm py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><MapPin size={14} /> Free delivery on orders above ₹499</span>
            <span className="flex items-center gap-1"><Phone size={14} /> +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/stores" className="hover:text-primary-200 transition">Store Locator</Link>
            <Link to="/bulk-orders" className="hover:text-primary-200 transition">Bulk Orders</Link>
            <Link to="/franchise" className="hover:text-primary-200 transition">Franchise</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(true)} className="lg:hidden p-2">
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-primary-800 leading-tight">Mill2Meal</h1>
              <p className="text-[10px] text-gray-500 -mt-1">Fresh from Mill to Table</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for rice, dal, oils, spices..."
                className="w-full px-5 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-primary-500 focus:bg-white transition"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(true)} className="lg:hidden p-2 text-gray-700">
              <Search size={22} />
            </button>
            <Link to="/account" className="hidden sm:flex items-center gap-2 p-2 text-gray-700 hover:text-primary-600 transition">
              <User size={22} />
              <span className="hidden md:inline text-sm font-medium">Account</span>
            </Link>
            <Link to="/cart" className="relative flex items-center gap-2 p-2 text-gray-700 hover:text-primary-600 transition">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
              <span className="hidden md:inline text-sm font-medium">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block border-t border-gray-100 bg-white">
        <div className="container-custom">
          <ul className="flex items-center gap-1">
            {categories.map(cat => (
              <li key={cat.slug}>
                <Link
                  to={`/category/${cat.slug}`}
                  className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/monthly-essentials" className="block px-4 py-3 text-sm font-semibold text-secondary-600 hover:bg-secondary-50 rounded-lg transition">
                Monthly Essentials
              </Link>
            </li>
            <li>
              <Link to="/subscriptions" className="block px-4 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 rounded-lg transition">
                Subscriptions
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-white p-4 lg:hidden">
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setIsSearchOpen(false)} className="p-2"><X size={24} /></button>
            <form onSubmit={handleSearch} className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-primary-500"
                autoFocus
              />
            </form>
          </div>
          <div className="px-2">
            <p className="text-sm text-gray-500 mb-3">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {['Basmati Rice', 'Toor Dal', 'Groundnut Oil', 'Almonds', 'Ghee'].map(term => (
                <button
                  key={term}
                  onClick={() => { setSearchQuery(term); navigate(`/search?q=${term}`); setIsSearchOpen(false) }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="font-heading font-bold text-primary-800">Mill2Meal</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-2"><X size={24} /></button>
            </div>
            <nav className="p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</p>
              {categories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
                >
                  {cat.name}
                </Link>
              ))}
              <hr className="my-4" />
              <Link to="/monthly-essentials" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-secondary-600 font-semibold">Monthly Essentials</Link>
              <Link to="/subscriptions" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-primary-600 font-semibold">Subscriptions</Link>
              <hr className="my-4" />
              <Link to="/account" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-gray-700">My Account</Link>
              <Link to="/orders" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-gray-700">My Orders</Link>
              <Link to="/stores" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-gray-700">Store Locator</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-gray-700">About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-3 px-3 text-gray-700">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
