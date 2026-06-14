import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Product, getProductsByCategory } from '../data/products'

interface CategoryViewProps {
  categoryId: string
  categoryName: string
  onProductSelect: (product: Product) => void
  onBack: () => void
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  categoryId,
  categoryName,
  onProductSelect,
  onBack,
}) => {
  const products = getProductsByCategory(categoryId)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1))
  }

  const currentProduct = products[currentIndex]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
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

      {/* Encabezado */}
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-secondary mb-8 pt-16 text-center"
      >
        {categoryName}
      </motion.h2>

      {/* Contenedor del producto */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Imagen del producto */}
        <motion.div
          key={currentProduct.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-accent/50 hover:border-accent transition-colors duration-300">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Información del producto */}
        <motion.div
          key={`info-${currentProduct.id}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-1/2 flex flex-col gap-6"
        >
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-2">
              {currentProduct.name}
            </h3>
            <p className="text-muted text-lg">{currentProduct.description}</p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-bold text-accent">
              ${currentProduct.price}
            </span>
            <span className="text-muted">USD</span>
          </div>

          {/* Botón para ver detalles */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onProductSelect(currentProduct)}
            className="btn-primary mt-4 text-lg py-4"
          >
            Ver Detalles y Comprar
          </motion.button>
        </motion.div>
      </div>

      {/* Controles de navegación */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handlePrevious}
          className="p-3 bg-accent hover:bg-opacity-90 text-primary rounded-full transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <div className="flex gap-2">
          {products.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8 }}
              animate={{
                scale: index === currentIndex ? 1.2 : 0.8,
                backgroundColor: index === currentIndex ? '#ff6b6b' : '#666666',
              }}
              transition={{ duration: 0.3 }}
              className="w-3 h-3 rounded-full cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleNext}
          className="p-3 bg-accent hover:bg-opacity-90 text-primary rounded-full transition-all duration-300"
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>

      {/* Indicador de posición */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute top-8 right-8 text-muted text-sm"
      >
        {currentIndex + 1} / {products.length}
      </motion.div>
    </motion.div>
  )
}
