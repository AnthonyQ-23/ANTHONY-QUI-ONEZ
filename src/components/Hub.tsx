import { motion } from 'framer-motion'
import { Shirt, ShoppingBag } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  description: string
}

interface HubProps {
  onCategorySelect: (categoryId: string, categoryName: string) => void
  cartCount: number
  onOpenCart: () => void
}

const CATEGORIES: Category[] = [
  {
    id: 'camisetas',
    name: 'Camisetas',
    icon: <Shirt size={64} />,
    color: 'from-blue-600 to-blue-400',
    description: 'Camisetas premium 100% algodón',
  },
  {
    id: 'pantalones',
    name: 'Pantalones',
    icon: <Shirt size={64} />,
    color: 'from-purple-600 to-purple-400',
    description: 'Pantalones cómodos y elegantes',
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    icon: <ShoppingBag size={64} />,
    color: 'from-pink-600 to-pink-400',
    description: 'Complementos y accesorios premium',
  },
]

export function Hub({ onCategorySelect, cartCount, onOpenCart }: HubProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen bg-primary flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-8 border-b border-accent/20">
        <div>
          <h1 className="text-5xl font-bold text-secondary">ANTHONY</h1>
          <p className="text-accent text-lg font-semibold">Catálogo Premium</p>
        </div>
        <button
          onClick={onOpenCart}
          className="relative bg-accent hover:bg-accent/90 text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
        >
          <ShoppingBag size={24} />
          Mi Pedido
          {cartCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
            >
              {cartCount}
            </motion.span>
          )}
        </button>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategorySelect(category.id, category.name)}
              className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              {/* Fondo con gradiente */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Efecto de blur en hover */}
              <div className="absolute inset-0 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-300" />

              {/* Contenido */}
              <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
                {/* Icono */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {category.icon}
                </motion.div>

                {/* Nombre */}
                <h2 className="text-4xl font-bold mb-3 text-center">
                  {category.name}
                </h2>

                {/* Descripción */}
                <p className="text-white/80 text-center text-sm px-4 mb-6">
                  {category.description}
                </p>

                {/* Botón de acción */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="bg-white/20 border-2 border-white px-6 py-2 rounded-lg text-white font-semibold group-hover:bg-white group-hover:text-primary transition-all duration-300"
                >
                  Explorar →
                </motion.div>
              </div>

              {/* Línea decorativa en hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-white origin-left"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-accent/20 p-6 text-center text-muted">
        <p className="text-sm">🔥 Catálogo Interactivo • Explora nuestras colecciones en 3D</p>
        <p className="text-xs mt-2">© 2026 Anthony Quiñonez. Todos los derechos reservados.</p>
      </div>
    </motion.div>
  )
}
