import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import AccountPage from './pages/AccountPage'
import OrdersPage from './pages/OrdersPage'
import OrderTrackingPage from './pages/OrderTrackingPage'
import SubscriptionsPage from './pages/SubscriptionsPage'
import MonthlyEssentialsPage from './pages/MonthlyEssentialsPage'
import StoreLocatorPage from './pages/StoreLocatorPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import QualityPromisePage from './pages/QualityPromisePage'
import BulkOrdersPage from './pages/BulkOrdersPage'
import FranchisePage from './pages/FranchisePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import ShippingPolicyPage from './pages/ShippingPolicyPage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/orders/:id" element={<OrderTrackingPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/monthly-essentials" element={<MonthlyEssentialsPage />} />
            <Route path="/stores" element={<StoreLocatorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/quality-promise" element={<QualityPromisePage />} />
            <Route path="/bulk-orders" element={<BulkOrdersPage />} />
            <Route path="/franchise" element={<FranchisePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  )
}

export default App
