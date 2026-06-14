# 🛍️ Catálogo de Ropa Interactivo - ANTHONY QUIÑONEZ

Un catálogo de ropa premium con una experiencia inmersiva inspirada en Prezi con 3 niveles de zoom fluido. Construido con **React**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** y **Lucide React**.

## 🎯 Características Principales

- **Experiencia de Zoom Inmersivo**: Navega a través de 3 niveles de profundidad
  1. **Nivel 1 (Hub)**: Pantalla de inicio con categorías principales
  2. **Nivel 2 (Categoría)**: Carrusel de productos con vista del modelo
  3. **Nivel 3 (Detalle)**: Vista cercana del tejido con selector de tallas

- **Animaciones Fluidas**: Transiciones suaves usando Framer Motion
- **Interactividad Completa**: Rotación de prendas, selector de tallas, carrito de compras
- **Diseño Responsive**: Adaptado para desktop y dispositivos móviles
- **Código 100% Editable**: Cambia fácilmente productos, precios e imágenes

## 🚀 Inicio Rápido

### 1. Clonar el Repositorio

```bash
git clone https://github.com/AnthonyQ-23/ANTHONY-QUI-ONEZ.git
cd ANTHONY-QUI-ONEZ
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar el Servidor de Desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173` 🚀

### 4. Construir para Producción

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
ANTHONY-QUI-ONEZ/
├── src/
│   ├── components/
│   │   ├── Hub.tsx              # Pantalla de inicio con categorías
│   │   ├── CategoryView.tsx      # Carrusel de productos
│   │   └── ProductDetail.tsx     # Detalle del producto con rotación
│   ├── data/
│   │   └── products.ts           # ⭐ EDITABLE: Datos de productos
│   ├── App.tsx                   # Componente principal
│   ├── App.css                   # Estilos personalizados
│   ├── index.css                 # Estilos globales
│   └── main.tsx                  # Entry point
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── index.html
└── README.md
```

## 📝 Editar Productos

### Ubicación: `src/data/products.ts`

Los productos están organizados en un array centralizado y fácil de editar:

```typescript
export const PRODUCTS: Product[] = [
  {
    id: 'camiseta-1',
    category: 'camisetas',
    name: 'Camiseta Premium Negra',
    price: 29.99,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image: 'https://images.unsplash.com/photo-...',
    modelImage: 'https://images.unsplash.com/photo-...',
    detailImage: 'https://images.unsplash.com/photo-...',
    description: 'Camiseta de algodón 100% puro...',
  },
  // ... más productos
]
```

### Cómo Cambiar Imágenes:

1. Abre `src/data/products.ts`
2. Busca el producto que quieres editar
3. Cambia los valores de `image`, `modelImage` y `detailImage` por nuevas URLs de Unsplash o tu servidor

### Agregar un Nuevo Producto:

```typescript
{
  id: 'nuevo-producto-1',
  category: 'camisetas',
  name: 'Tu Producto',
  price: 49.99,
  sizes: ['S', 'M', 'L', 'XL'],
  image: 'https://tuimagen.com/producto.jpg',
  modelImage: 'https://tuimagen.com/modelo.jpg',
  detailImage: 'https://tuimagen.com/detalle.jpg',
  description: 'Descripción de tu producto',
}
```

## 🎨 Personalizar Colores

### Ubicación: `tailwind.config.ts` y `src/index.css`

Colores actuales:
- **Primary** (fondo): `#1a1a1a` (Negro)
- **Secondary** (texto): `#ffffff` (Blanco)
- **Accent** (acentos): `#ff6b6b` (Rojo coral)
- **Muted** (muted text): `#666666` (Gris)

Para cambiar, edita en `tailwind.config.ts`:

```typescript
colors: {
  primary: '#1a1a1a',      // Cambia aquí
  secondary: '#ffffff',    // Cambia aquí
  accent: '#ff6b6b',       // Cambia aquí
  muted: '#666666',        // Cambia aquí
}
```

## 📦 Dependencias Principales

```json
{
  "react": "^18.3.1",
  "framer-motion": "^11.0.8",
  "lucide-react": "^0.408.0",
  "tailwindcss": "^4.0.0"
}
```

## 🎬 Flujo de Navegación

```
Hub (Categorías)
    ↓ (Click en categoría)
CategoryView (Carrusel de productos)
    ↓ (Click en "Ver Detalles")
ProductDetail (Rotación, tallas, compra)
    ↓ (Click en "Atrás")
Vuelve a CategoryView
    ↓ (Click en "Atrás")
Vuelve al Hub
```

## ⌨️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint del código
npm run lint
```

## 🌟 Características de Animación

- ✨ Zoom suave entre niveles
- 🔄 Rotación interactiva de prendas
- 📊 Indicadores de posición en carrusel
- 🛒 Badge del carrito con notificaciones
- 🎯 Hover effects en botones
- 💫 Fade-in y scale animations

## 🔧 Tecnologías Usadas

- **React 18** - Interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de compilación rápida
- **Tailwind CSS v4** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Lucide React** - Iconografía
- **@tailwindcss/vite** - Plugin de Tailwind para Vite

## 📱 Responsive Design

La aplicación es completamente responsive:
- **Desktop**: Experiencia completa
- **Tablet**: Diseño adaptado
- **Mobile**: Interfaz optimizada

## 🎓 Guía de Uso

### Para Clientes/Visitantes:
1. Abre el catálogo
2. Haz clic en una categoría para explorar
3. Navega por los productos con los botones de navegación
4. Haz clic en "Ver Detalles" para ver más información
5. Selecciona una talla y haz clic en "Añadir al Pedido"
6. Abre el carrito haciendo clic en el badge

### Para Desarrolladores:
1. Edita productos en `src/data/products.ts`
2. Personaliza colores en `tailwind.config.ts`
3. Modifica animaciones en `src/App.css`
4. Ajusta componentes en `src/components/`

## 📞 Soporte

Si tienes preguntas sobre cómo editar el catálogo, consulta la sección "📝 Editar Productos" arriba.

---

**Hecho con ❤️ por Anthony Quiñonez**

Última actualización: Junio 2026
