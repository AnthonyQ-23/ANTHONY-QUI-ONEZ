// Configuración centralizada de productos - ¡EDITABLE!
// Cambia aquí las imágenes, nombres, precios y tallas sin tocar el código de animaciones

export interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  sizes: string[];
  image: string;
  modelImage: string;
  detailImage: string;
  description: string;
}

export const PRODUCT_CATEGORIES = [
  { id: 'camisetas', name: 'Camisetas', icon: '👕' },
  { id: 'pantalones', name: 'Pantalones', icon: '👖' },
  { id: 'chaquetas', name: 'Chaquetas', icon: '🧥' },
  { id: 'accesorios', name: 'Accesorios', icon: '👜' },
]

export const PRODUCTS: Product[] = [
  // CAMISETAS
  {
    id: 'camiseta-1',
    category: 'camisetas',
    name: 'Camiseta Premium Negra',
    price: 29.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1508422038454-fb282a63c800?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=800&fit=crop',
    description: 'Camiseta de algodón 100% puro con acabado premium',
  },
  {
    id: 'camiseta-2',
    category: 'camisetas',
    name: 'Camiseta Deportiva Azul',
    price: 34.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1618760318138-18d69dd9d10b?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1618760318138-18d69dd9d10b?w=1200&h=800&fit=crop',
    description: 'Camiseta técnica para deportes y actividades',
  },
  {
    id: 'camiseta-3',
    category: 'camisetas',
    name: 'Camiseta Vintage Gris',
    price: 24.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1508422038454-fb282a63c800?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb12dd?w=1200&h=800&fit=crop',
    description: 'Camiseta vintage con estilo retro',
  },

  // PANTALONES
  {
    id: 'pantalon-1',
    category: 'pantalones',
    name: 'Jeans Clásico Negro',
    price: 59.99,
    sizes: ['28', '30', '32', '34', '36', '38'],
    image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=1200&h=800&fit=crop',
    description: 'Jeans clásico de denim 100% algodón',
  },
  {
    id: 'pantalon-2',
    category: 'pantalones',
    name: 'Pantalón Chino Beige',
    price: 54.99,
    sizes: ['28', '30', '32', '34', '36'],
    image: 'https://images.unsplash.com/photo-1473286169288-56861d440af0?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1473286169288-56861d440af0?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1473286169288-56861d440af0?w=1200&h=800&fit=crop',
    description: 'Pantalón chino versátil para cualquier ocasión',
  },
  {
    id: 'pantalon-3',
    category: 'pantalones',
    name: 'Pantalón Deportivo Gris',
    price: 44.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1506629082632-401017062e51?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1506629082632-401017062e51?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1506629082632-401017062e51?w=1200&h=800&fit=crop',
    description: 'Pantalón cómodo y transpirable para deportes',
  },

  // CHAQUETAS
  {
    id: 'chaqueta-1',
    category: 'chaquetas',
    name: 'Chaqueta de Cuero Negro',
    price: 199.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=1200&h=800&fit=crop',
    description: 'Chaqueta de cuero auténtico elegante y duradera',
  },
  {
    id: 'chaqueta-2',
    category: 'chaquetas',
    name: 'Chaqueta Bomber Azul',
    price: 89.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-1543163521-9efcc062db33?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1543163521-9efcc062db33?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1543163521-9efcc062db33?w=1200&h=800&fit=crop',
    description: 'Chaqueta bomber moderna con acabado premium',
  },
  {
    id: 'chaqueta-3',
    category: 'chaquetas',
    name: 'Chaqueta Acolchada Rojo',
    price: 79.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=1200&h=800&fit=crop',
    description: 'Chaqueta acolchada perfecta para invierno',
  },

  // ACCESORIOS
  {
    id: 'accesorio-1',
    category: 'accesorios',
    name: 'Bolsa de Cuero Premium',
    price: 129.99,
    sizes: ['Única'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1200&h=800&fit=crop',
    description: 'Bolsa de cuero genuino con estilo minimalista',
  },
  {
    id: 'accesorio-2',
    category: 'accesorios',
    name: 'Sombrero Elegante Negro',
    price: 49.99,
    sizes: ['Única'],
    image: 'https://images.unsplash.com/photo-1550639524-056b4b37b798?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1550639524-056b4b37b798?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1550639524-056b4b37b798?w=1200&h=800&fit=crop',
    description: 'Sombrero clásico de fieltro de alta calidad',
  },
  {
    id: 'accesorio-3',
    category: 'accesorios',
    name: 'Cinturón de Cuero Marrón',
    price: 39.99,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop',
    modelImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&h=600&fit=crop',
    detailImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=800&fit=crop',
    description: 'Cinturón de cuero genuino con hebilla de metal',
  },
]

// Función auxiliar para obtener productos por categoría
export const getProductsByCategory = (categoryId: string): Product[] => {
  return PRODUCTS.filter(product => product.category === categoryId)
}

// Función auxiliar para obtener un producto por ID
export const getProductById = (productId: string): Product | undefined => {
  return PRODUCTS.find(product => product.id === productId)
}
