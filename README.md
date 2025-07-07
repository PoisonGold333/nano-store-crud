# 📱 Nano Store CRUD - Mi Proyecto de Angular II

¡Hola! Soy Álvaro Dorado y este es mi proyecto final del curso de Angular II en Parquesoft.

## ¿Qué es este proyecto?

Es una aplicación para manejar productos de una tienda (como un inventario básico). Puedes agregar, ver, editar y eliminar productos. Lo hice con Angular para el frontend y usé el backend que nos dio el profesor en NestJS.

## 🛠️ Tecnologías que usé

- **Angular 19** - Para la parte visual (frontend)
- **NestJS** - Backend que nos dio el profesor
- **MongoDB Atlas** - Base de datos en la nube (gratis!)
- **PrimeNG** - Para que se vea bonito
- **TypeScript** - Porque Angular lo usa

## 🚀 ¿Cómo lo ejecuto?

### Paso 1: Clonar mi proyecto

```bash
git clone <mi-repositorio>
cd nano-store-crud
```

### Paso 2: Configurar el backend del profesor

```bash
cd nano-store
npm install
```

Crear un archivo `.env` con esto:

```
MONGODB_URI=mongodb+srv://alvaroDorado:Admin123@cluster0.ewvnnij.mongodb.net/nano-store?retryWrites=true&w=majority
```

Ejecutar el backend:

```bash
nest start
```

### Paso 3: Ejecutar mi frontend

En otra terminal:

```bash
cd .. # volver a la carpeta principal
npm install
ng serve -o
```

¡Listo! Debería abrirse en http://localhost:4200

## 💾 ¿Qué hace la aplicación?

- **Crear productos**: Llenar un formulario y guardar
- **Ver productos**: Lista todos los productos de la base de datos
- **Editar productos**: Cambiar cualquier dato de un producto
- **Eliminar productos**: Borrar productos que ya no quiero

## 📝 Estructura del producto

Cada producto tiene:

```javascript
{
  title: "iPhone 14",           // Nombre
  description: "Teléfono...",   // Descripción
  price: 999,                   // Precio
  discountPercentage: 12.5,     // Descuento %
  rating: 4.8,                  // Calificación
  stock: 50,                    // Cantidad
  brand: "Apple",               // Marca
  category: "smartphones",      // Categoría
  thumbnail: "url-imagen"       // Imagen
}
```

## 🐛 Problemas que tuve y cómo los resolví

### Error de CORS

Al principio no me funcionaba porque Angular (puerto 4200) no podía hablar con NestJS (puerto 3000).

**Solución**: Agregué esto en `nano-store/src/main.ts`:

```typescript
app.enableCors({
  origin: "http://localhost:4200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
});
```

### Puerto 3000 ocupado

A veces el puerto estaba ocupado por otro proceso.

**Solución**:

```bash
taskkill /f /im node.exe
```

### MongoDB no conectaba

Al principio puse mal la URL de conexión.

**Solución**: Usar exactamente la URL que me dieron en class.

## 📂 Archivos importantes

```
mi-proyecto/
├── nano-store/              # Backend del profesor
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── product/     # Mi componente principal
│   │   └── services/
│   │       └── product.service.ts  # Para conectar con API
│   └── styles.css           # Estilos globales
├── package.json
└── README.md               # Este archivo
```

## 🎯 Lo que aprendí

- Cómo conectar Angular con un backend real
- Usar MongoDB Atlas (antes solo había usado MySQL)
- Componentes standalone de Angular (son más fáciles!)
- PrimeNG para interfaces bonitas
- Manejar errores con try-catch y observables
- CORS y por qué es importante
- Git para versionar mi código

## 🤔 Dificultades que enfrenté

1. **CORS**: Me tomó tiempo entender por qué no funcionaba
2. **Observables**: Al principio me confundían, pero ya los entiendo mejor
3. **Validaciones**: Hacer que funcionen tanto en frontend como backend
4. **PrimeNG**: Aprender a usar los componentes nuevos

## 🚀 Mejoras que haría

- Agregar paginación (solo sé lo básico)
- Subir imágenes reales (ahora solo URLs)
- Agregar más validaciones
- Hacer que se vea mejor en celular
- Agregar filtros y búsqueda

## 📱 Screenshots

(Aquí pondría capturas de pantalla si supiera cómo subirlas a GitHub 😅)

## 🙏 Agradecimientos

- Al profesor por el backend y las explicaciones
- A mis compañeros del curso por ayudarme cuando me trabé
- A Stack Overflow por salvarme la vida varias veces
- A ChatGPT por explicarme los errores raros

## 📞 Contacto

Si tienes preguntas o quieres ver mi código:

- **GitHub**: [mi-usuario]
- **Email**: alvaro.dorado@email.com
- **WhatsApp**: Solo si es urgente 😄

---

**Nota**: Este es mi primer proyecto full-stack real. Sé que no es perfecto, pero funciona y aprendí mucho haciéndolo. ¡Espero que les guste! 🚀

_PD: Si encuentran bugs, por favor díganme cómo arreglarlos 😅_
