import { motion } from 'framer-motion'
import { PRODUCT_CATEGORIES } from '../data/products'

interface HubProps {
  onCategorySelect: (categoryId: string) => void
}

export const Hub: React.FC<HubProps> = ({ onCategorySelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-[#2a2a2a] relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-secondary"
        >
          Catálogo de Ropa
        </motion.h1>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted mb-16"
        >
          Explora nuestras colecciones de forma inmersiva
        </motion.p>

        {/* Grid de categorías */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-6"
        >
          {PRODUCT_CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategorySelect(category.id)}
              className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Fondo del botón */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Contenido */}
              <div className="relative h-full flex flex-col items-center justify-center gap-3 p-4">
                <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <span className="text-base md:text-lg font-semibold text-secondary group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </span>
              </div>

              {/* Borde animado */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-2xl group-hover:border-accent transition-colors duration-300"></div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
