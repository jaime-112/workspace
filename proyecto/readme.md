#  Reels Studio - Gestión de Contenido

**Reels Studio** es una aplicación web diseñada para creadores de contenido que necesitan centralizar la gestión de sus producciones audiovisuales. 
---

##  Propósito de la Aplicación
La aplicación resuelve la fragmentación de datos en la producción de contenido mediante un sistema **CRUD**. 
* **Gestión Centralizada:** Permite registrar títulos, duraciones y categorías de forma estructurada.
* **Persistencia en la Nube:** Los datos se sincronizan con **Firebase Firestore**, garantizando que la información esté disponible en cualquier dispositivo.
* **Flujo de Trabajo Dinámico:** Facilita la edición rápida de metadatos y la eliminación de proyectos descartados con feedback instantáneo.

---

##  Elecciones de Estilo y Diseño
Para esta interfaz, se han seleccionado tecnologías que priorizan la velocidad de carga y una estética moderna tipo "Dark Mode".

### 1. Tailwind CSS (Utility-First)
He elegido **Tailwind CSS** como motor principal de estilos por las siguientes razones:
* **Productividad:** Permite construir interfaces complejas sin salir del archivo TSX.
* **Diseño Responsivo:** Implementación nativa de grids adaptativos que aseguran que la app se vea bien en móviles (formato 9:16) y escritorio.
* **Consistencia:** Uso de escalas de colores (`zinc`, `blue`, `red`) que mantienen una armonía visual en toda la app.

### 2. Glassmorphism & Micro-interacciones
* **Efecto de Vidrio:** Se han aplicado clases de `backdrop-blur` y opacidades en los botones para imitar la interfaz de plataformas como Instagram o TikTok.
* **Feedback Visual:** Implementación de estados `hover` con transformaciones (`scale`, `translate`) y sombras con brillo para mejorar la experiencia del usuario al interactuar con las tarjetas de contenido.

### 3. Tipografía y Estética Dark
* **Fuente Inter:** Se ha integrado la fuente **Inter** para maximizar la legibilidad en pantallas digitales.
* **Jerarquía Visual:** Uso de gradientes oscuros para dar profundidad a las miniaturas de los videos, asegurando que el texto sea siempre legible.

---

##  Stack Tecnológico
* **Frontend:** React 18 + TypeScript (Vite).
* **Base de Datos:** Firebase Firestore.
* **Infraestructura:** Dockerizado para desarrollo local.
* **Despliegue:** Preparado para Vercel.

---
