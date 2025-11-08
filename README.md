# Cart App - React Learning Project

Un proyecto de carrito de compras desarrollado con React para aprender los conceptos fundamentales del framework y preparar la base para una futura integración con Spring Boot.

## 🎯 Objetivo del Proyecto

Este proyecto fue desarrollado como parte de mi aprendizaje en React, enfocándose en:
- Manejo de estado con hooks y useReducer
- Enrutamiento con React Router
- Gestión de datos locales con localStorage
- Arquitectura de componentes reutilizables
- Preparación para integración con backend Spring Boot

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca principal
- **React Router DOM 7.9.5** - Enrutamiento SPA
- **Vite 7.1.7** - Herramienta de build y desarrollo
- **ESLint** - Linting y calidad de código
- **Prettier** - Formateo de código

### Herramientas de Desarrollo
- **Vite** - Dev server con HMR (Hot Module Replacement)
- **ESLint** - Análisis estático de código
- **Prettier** - Formateo automático

## 📁 Arquitectura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Navbar.jsx       # Barra de navegación
│   ├── CartView.jsx     # Vista del carrito
│   ├── CatalogView.jsx  # Vista del catálogo
│   └── CatalogItem.jsx  # Item individual del catálogo
├── hooks/               # Custom hooks
│   └── useItemsCart.js  # Lógica del carrito
├── reducer/             # Gestión de estado
│   ├── itemsReducer.js  # Reducer del carrito
│   └── itemsActions.js  # Acciones del carrito
├── routes/              # Configuración de rutas
│   └── CartRoutes.jsx   # Rutas de la aplicación
├── services/            # Servicios de datos
│   └── productService.js # Manejo de productos
├── data/                # Datos mock
│   └── product.js       # Lista de productos
└── CartApp.jsx          # Componente principal
```

## 🏗️ Cómo se Desarrolló el Proyecto

### 1. **Configuración Inicial**
- Creación del proyecto con Vite usando el template de React
- Configuración de ESLint y Prettier para mantener código limpio
- Instalación de React Router para navegación SPA

### 2. **Diseño de la Arquitectura**
Se implementó un patrón de arquitectura basado en:
- **Separación de responsabilidades**: Componentes, hooks, reducers y servicios
- **Custom Hooks**: Encapsulación de lógica de negocio
- **Patrón Reducer**: Gestión centralizada del estado del carrito

### 3. **Gestión de Estado**
```javascript
// useReducer para manejar el estado complejo del carrito
const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);
```

#### Implementación del Reducer Pattern:
- **Actions**: Definición de acciones (Add, Update, Delete)
- **Reducer**: Lógica pura para transformaciones de estado
- **Dispatch**: Envío de acciones desde componentes

### 4. **Persistencia de Datos**
```javascript
// Persistencia con localStorage
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
```

### 5. **Enrutamiento**
Implementación de SPA (Single Page Application) con:
- Rutas dinámicas `/catalog` y `/cart`
- Navegación programática
- Renderizado condicional basado en estado

### 6. **Componentes Desarrollados**

#### `useItemsCart` (Custom Hook)
- **Responsabilidad**: Gestión completa del carrito
- **Funcionalidades**:
  - Agregar productos
  - Actualizar cantidades
  - Eliminar productos
  - Persistencia automática

#### `CartView` & `CatalogView`
- **Responsabilidad**: Presentación de datos
- **Props drilling**: Paso de handlers desde el componente principal

#### `CartRoutes`
- **Responsabilidad**: Configuración de rutas
- **Renderizado condicional**: Diferentes vistas según el estado del carrito

## 🔧 Funcionalidades Implementadas

- [x] **Catálogo de productos** con lista mock
- [x] **Agregar productos al carrito**
- [x] **Actualizar cantidades automáticamente**
- [x] **Eliminar productos del carrito**
- [x] **Persistencia en localStorage**
- [x] **Navegación entre vistas**
- [x] **Responsive design básico**
- [x] **Manejo de estado centralizado**

## 🎓 Conceptos de React Aplicados

### Hooks Utilizados
- `useState` - Estado local en componentes
- `useReducer` - Estado complejo del carrito
- `useEffect` - Persistencia y efectos secundarios

### Patrones Implementados
- **Component Composition** - Composición de componentes
- **Props Drilling** - Paso de datos entre componentes
- **Custom Hooks** - Reutilización de lógica
- **Controlled Components** - Componentes controlados

### Arquitectura
- **Separation of Concerns** - Separación de responsabilidades
- **Single Responsibility** - Un componente, una responsabilidad
- **DRY Principle** - Evitar repetición de código

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 📝 Lecciones Aprendidas

- **Gestión de estado**: useReducer vs useState para estado complejo
- **Performance**: Importancia de la memoización y evitar re-renders innecesarios
- **Arquitectura**: Beneficios de separar lógica de presentación
- **Persistencia**: Gestión de datos locales y sincronización

---

**Nota**: Este proyecto está en desarrollo activo y será expandido con integración Spring Boot para crear una aplicación full-stack completa.
