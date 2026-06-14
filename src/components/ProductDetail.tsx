import { motion } from 'framer-motion'
import { ChevronLeft, ShoppingBag, RotateCw } from 'lucide-react'
import { useState } from 'react'
import { Product } from '../data/products'

interface ProductDetailProps {
  product: Product
  onBack: () => void
  onAddToCart: (product: Product, size: string) => void
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0])
  const [isRotating, setIsRotating] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2000)
  }

  const handleRotate = () => {
    setIsRotating(!isRotating)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-[#2a2a2a] relative overflow-hidden p-6"
    >
      {/* Botón Atrás */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ x: -5 }}
        onClick={onBack}
        className="absolute top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 bg-accent hover:bg-opacity-90 text-primary rounded-lg font-semibold transition-all duration-300"
      >
        <ChevronLeft size={20} />
        Atrás
      </motion.button>

      <div className="w-full max-w-5xl">
        {/* Encabezado */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            {product.name}
          </h2>
          <p className="text-muted text-lg">{product.description}</p>
        </motion.div>

        {/* Contenedor principal - Imagen y Detalles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Imagen con zoom detallado */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Imagen principal */}
            <motion.div
              animate={{ rotate: isRotating ? 360 : 0 }}
              transition={{ duration: isRotating ? 3 : 0, loop: isRotating }}
              className="w-full aspect-square rounded-2xl overflow-hidden border-4 border-accent/50 hover:border-accent transition-colors duration-300 bg-black/20"
            >
              <img
                src={product.detailImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Botón de rotación */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRotate}
              className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isRotating
                  ? 'bg-accent text-primary'
                  : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
              }`}
            >
              <RotateCw size={20} />
              {isRotating ? 'Rotación activa' : 'Rotar prenda'}
            </motion.button>
          </motion.div>

          {/* Detalles del producto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8 pt-8 md:pt-0"
          >
            {/* Precio */}
            <div>
              <p className="text-muted text-sm mb-2">Precio</p>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="text-5xl font-bold text-accent"
              >
                ${product.price}
              </motion.div>
            </div>

            {/* Selector de tallas */}
            <div>
              <p className="text-secondary font-semibold mb-4">
                Talla disponible: <span className="text-accent">{selectedSize}</span>
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-3"
              >
                {product.sizes.map((size) => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-accent text-primary'
                        : 'bg-transparent border-2 border-accent text-accent hover:bg-accent/10'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Botón Añadir al Pedido */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4 mt-4"
            >
              <ShoppingBag size={24} />
              Añadir al Pedido
            </motion.button>

            {/* Descripción adicional */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-4 bg-white/5 rounded-lg border border-accent/20"
            >
              <p className="text-sm text-muted">
                ✓ Envío gratis a partir de 2 prendas<br />
                ✓ Devoluciones gratuitas en 30 días<br />
                ✓ Garantía de calidad premium
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Notificación de añadido al carrito */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNotification ? 1 : 0,
          y: showNotification ? 0 : -20,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-8 right-8 bg-accent text-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 pointer-events-none"
      >
        <ShoppingBag size={20} />
        ¡Añadido al pedido!
      </motion.div>
    </motion.div>
  )
}
