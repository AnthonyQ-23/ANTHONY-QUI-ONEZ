import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { PRODUCTS, Product } from '../data/products'

interface CategoryViewProps {
  categoryId: string
  categoryName: string
  onProductSelect: (product: Product) => void
  onBack: () => void
}

export function CategoryView({
  categoryId,
  categoryName,
  onProductSelect,
  onBack,
}: CategoryViewProps) {
  const categoryProducts = PRODUCTS.filter(p => p.category === categoryId)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentProduct = categoryProducts[currentIndex]

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % categoryProducts.length)
  }

  const handlePrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? categoryProducts.length - 1 : prev - 1
    )
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-primary flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-accent/20">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-accent hover:text-secondary transition-colors duration-300 group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
          <span className="text-lg font-semibold">Atrás</span>
        </button>
        <h1 className="text-3xl font-bold text-secondary flex-1 text-center">
          {categoryName}
        </h1>
        <div className="w-24" />
      </div>

      {/* Contenido del carrusel */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 overflow-hidden">
        {/* Lado izquierdo: Imagen del modelo con producto */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center relative"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={currentProduct.modelImage}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botones de navegación del carrusel */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
            <button
              onClick={handlePrev}
              className="bg-accent/80 hover:bg-accent text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Indicadores de punto */}
            <div className="flex gap-2">
              {categoryProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-accent w-8 h-3'
                      : 'bg-accent/40 w-3 h-3 hover:bg-accent/60'
                  }`}
                  aria-label={`Ir a producto ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="bg-accent/80 hover:bg-accent text-primary p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </motion.div>

        {/* Lado derecho: Información del producto */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-between"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Nombre y precio */}
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-secondary mb-4">
                  {currentProduct.name}
                </h2>
                <p className="text-6xl font-bold text-accent mb-4">
                  ${currentProduct.price.toFixed(2)}
                </p>
                <p className="text-lg text-muted leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              {/* Especificaciones */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-muted text-sm mb-2">Material</p>
                  <p className="text-secondary font-semibold">100% Algodón</p>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-muted text-sm mb-2">Disponibles</p>
                  <p className="text-secondary font-semibold">
                    {currentProduct.sizes.length} Tallas
                  </p>
                </div>
              </div>

              {/* Tallas disponibles preview */}
              <div className="mb-8">
                <p className="text-muted text-sm mb-3">Tallas Disponibles</p>
                <div className="flex gap-2 flex-wrap">
                  {currentProduct.sizes.map(size => (
                    <span
                      key={size}
                      className="bg-accent/20 border border-accent text-secondary px-3 py-1 rounded text-sm font-semibold"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Botón de acción */}
          <motion.button
            onClick={() => onProductSelect(currentProduct)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-accent/50"
          >
            Ver Detalles Completos →
          </motion.button>

          {/* Indicador de posición */}
          <div className="text-center text-muted text-sm mt-4">
            Producto {currentIndex + 1} de {categoryProducts.length}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
