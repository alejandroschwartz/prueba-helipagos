# Prueba de consultar API y autenticaión de Helipagos

Aplicación que consume datos de una API de Star Wars para mostrar un listado de Personajes, Planetas y Naves, pudiendo paginar los resultados, filtrar por nombre y ver página de detalles. Tambien poseé un login a traves de la API de Helipagos. La aplicaión se realizó para usarla en mobile o desktop.  

Link al proyecto: [https://prueba-helipagos.vercel.app/](https://prueba-helipagos.vercel.app/)

![](https://res.cloudinary.com/dhdhpvhkg/image/upload/c_scale,q_80,w_1280/v1731636599/examen/prueba-helipagos-2.webp)



## Descripción de las tareas a desarrollar

La aplicación deberá implementar las siguientes funcionalidades base: 

1. **Listado de Personas:** Se mostrará un listado de personas obtenidas desde la API de SWAPI. Se deberá incluir la capacidad de buscar personas por nombre y ver el detalle de cada una.

2. **Listado de Planetas:** Se deberá implementar una lista de planetas, con una funcionalidad de búsqueda por nombre y la capacidad de ver detalles de cada planeta.

3. **Listado de Naves (Starships):** La aplicación mostrará un listado de naves, permitiendo búsquedas específicas por nombre y visualización del detalle de cada nave.

4. **Conexión con Helipagos API:** Se deberá de realizar una conexión con la autenticación de Helipagos y generar la intercepción HTTP correspondiente para el manejo del access token



## Criterios de Evaluación

1. **Uso de la tecnología seleccionada:**
Evaluación de las habilidades para estructurar la aplicación usando componentes, servicios e interfaces en Angular o en React usando componentes, hooks y actions. Se valorará la organización del código siguiendo principios de arquitectura limpia (screaming architecture).

2. **Hooks/Directivas Custom:**
Creación y uso de hooks o directivas personalizadas para extender la funcionalidad de la aplicación.

3. **Pruebas Unitarias:**
Implementación de pruebas unitarias que cubran al menos el 60% de la aplicación.

4. **Servicios e Interfaz de Usuario:**
Implementación de servicios preparados para la conexión con la API y manipulación de datos.

5. **Interfaz de Usuario:**
La interfaz debe ser intuitiva, con un diseño visualmente atractivo.



## Desarrollo e instalación del proyecto

El proyecto lo realicé con Next.js 14, utilizando React y la librería de estilos Tailwind. La version de npm es v20.17.0

### Para instalarlo, ejecutar:

```bash
# para instalar las dependencias
npm i

# para correr la aplicación en local
npm run dev

# para buildear aplicación en modo desarrollo
npm run build
```

Corre en el puerto [http://localhost:3000](http://localhost:3000)

### Test unitarios con Jest y Testing Library

Para ver los test, ejecutar por consola:

```bash
# para correr los test
npm test
```

### Test E2E con Cypress

Para ver los test, ejecutar por consola:

```bash
# levantar la app en localhost:3000 con
npm run dev

# correr en otra terminal comando de test para levantar el desarrollo
npm run cypress:open

# correr en otra terminal comando de test para levantar en produción, para CI/CD
npx cypress run
```

### Manejo de ramas (Branches) y Pull Requests

Seguí el modelo de repositorios y ramas basado en gitflow, sacando ramas desde main para luego realizar el merge al mismo.

Ver mas en detalle en [https://github.com/alejandroschwartz/prueba-helipagos/branches/all](https://github.com/alejandroschwartz/prueba-helipagos/branches/all)



## Detalles extras

- Verfique los rendimientos de lighthouse: Para tener el mejor rendimiento tanto para el usuario como para el posicionamiento SEO en Google.

![](https://res.cloudinary.com/dhdhpvhkg/image/upload/c_scale,q_80,w_1280/v1731636599/examen/prueba-helipagos-1.webp)
