import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react'
import { Product } from '../data/products'

interface ProductDetailProps {
  product: Product
  onBack: () => void
  onAddToCart: (product: Product, size: string) => void
}

export function ProductDetail({
  product,
  onBack,
  onAddToCart,
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [isAdded, setIsAdded] = useState(false)

  const handleRotate = (direction: 'left' | 'right') => {
    setRotation(prev => {
      const newRotation = direction === 'left' ? prev - 45 : prev + 45
      return newRotation % 360
    })
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedSize)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-primary flex flex-col overflow-hidden"
    >
      {/* Header con botón Atrás */}
      <div className="flex items-center justify-between p-8 border-b border-accent/20">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-accent hover:text-secondary transition-colors duration-300 group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
          <span className="text-lg font-semibold">Atrás</span>
        </button>
        <h1 className="text-3xl font-bold text-secondary flex-1 text-center">
          Detalles del Producto
        </h1>
        <div className="w-24" />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 overflow-y-auto">
        {/* Sección izquierda: Visualización 3D interactiva */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          {/* Visor 3D con rotación */}
          <div className="relative w-full h-96 flex items-center justify-center mb-8 bg-gradient-to-b from-accent/5 to-transparent rounded-lg overflow-hidden">
            <motion.img
              src={product.detailImage}
              alt={product.name}
              animate={{ rotateY: rotation }}
              transition={{ duration: 0.6 }}
              className="w-80 h-80 object-cover rounded-lg shadow-2xl"
              style={{
                perspective: '1200px',
              }}
            />

            {/* Indicador de rotación */}
            <div className="absolute top-4 right-4 bg-accent/20 backdrop-blur px-3 py-1 rounded-full text-xs text-secondary">
              {rotation}°
            </div>
          </div>

          {/* Controles de rotación */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleRotate('left')}
              className="px-6 py-3 bg-accent/20 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-semibold"
            >
              ← Girar Izquierda
            </button>
            <button
              onClick={() => handleRotate('right')}
              className="px-6 py-3 bg-accent/20 border border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300 font-semibold"
            >
              Girar Derecha →
            </button>
          </div>

          {/* Imagen del modelo completo */}
          <div className="w-full flex justify-center">
            <img
              src={product.modelImage}
              alt="Modelo vistiendo"
              className="w-full max-w-sm h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </motion.div>

        {/* Sección derecha: Información y compra */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          {/* Información del producto */}
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-4">
              {product.name}
            </h2>

            <div className="mb-6">
              <p className="text-5xl font-bold text-accent mb-2">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-muted text-lg">{product.description}</p>
            </div>

            {/* Características del tejido */}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-secondary mb-3">
                Características
              </h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> 100% Algodón Premium
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Tejido Sostenible
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Duradero y Cómodo
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span> Garantía de Calidad
                </li>
              </ul>
            </div>

            {/* Selector de tallas */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Selecciona tu Talla
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-accent text-primary border-2 border-accent'
                        : 'bg-primary border-2 border-secondary/30 text-secondary hover:border-accent'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de cantidad */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Cantidad
              </h3>
              <div className="flex items-center gap-4 bg-accent/10 border border-accent/30 rounded-lg p-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-accent hover:text-secondary transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="text-secondary font-semibold text-xl w-8 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-accent hover:text-secondary transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Botón de compra */}
          <motion.button
            onClick={handleAddToCart}
            animate={{ scale: isAdded ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className={`w-full py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 ${
              isAdded
                ? 'bg-green-600 text-white'
                : 'bg-accent text-primary hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/50'
            }`}
          >
            <ShoppingCart size={24} />
            {isAdded ? '¡Añadido al Pedido!' : 'Añadir al Pedido'}
          </motion.button>

          {/* Información de envío */}
          <div className="text-center text-muted text-sm mt-4">
            📦 Envío gratis en pedidos mayores a $100
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
