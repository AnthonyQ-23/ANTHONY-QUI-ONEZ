import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Hub } from './components/Hub'
import { CategoryView } from './components/CategoryView'
import { ProductDetail } from './components/ProductDetail'
import { Product } from './data/products'
import './App.css'

type ViewState = 'hub' | 'category' | 'product'

interface CartItem {
  product: Product
  size: string
  quantity: number
}

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('hub')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setViewState('category')
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product)
    setViewState('product')
  }

  const handleAddToCart = (product: Product, size: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.product.id === product.id && item.size === size
      )

      if (existingItem) {
        return prevCart.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { product, size, quantity: 1 }]
    })
  }

  const handleBackToHub = () => {
    setViewState('hub')
    setSelectedCategory('')
    setSelectedProduct(null)
  }

  const handleBackToCategory = () => {
    setViewState('category')
    setSelectedProduct(null)
  }

  return (
    <div className="w-full h-screen bg-primary overflow-hidden">
      <AnimatePresence mode="wait">
        {viewState === 'hub' && (
          <Hub key="hub" onCategorySelect={handleCategorySelect} />
        )}

        {viewState === 'category' && selectedCategory && (
          <CategoryView
            key="category"
            categoryId={selectedCategory}
            categoryName={
              ['camisetas', 'pantalones', 'chaquetas', 'accesorios'].includes(
                selectedCategory
              )
                ? selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)
                : ''
            }
            onProductSelect={handleProductSelect}
            onBack={handleBackToHub}
          />
        )}

        {viewState === 'product' && selectedProduct && (
          <ProductDetail
            key="product"
            product={selectedProduct}
            onBack={handleBackToCategory}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      {/* Badge del carrito (siempre visible) */}
      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-accent text-primary px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
          >
            🛒 {cart.length} artículos
          </button>

          {showCart && (
            <div className="absolute bottom-16 right-0 bg-primary border border-accent rounded-lg p-4 w-64 max-h-96 overflow-y-auto">
              <h3 className="text-secondary font-bold mb-3">Tu Pedido</h3>
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="text-sm text-muted mb-2 pb-2 border-b border-accent/20"
                >
                  <p className="font-semibold text-secondary">
                    {item.product.name}
                  </p>
                  <p>Talla: {item.size}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p className="text-accent font-semibold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t border-accent/20">
                <p className="text-secondary font-bold">
                  Total: $
                  {cart
                    .reduce(
                      (total, item) =>
                        total + item.product.price * item.quantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
