# ✏️ DrawTool

Herramienta interactiva de dibujo con React, TypeScript y SCSS. Incluye selección de herramienta (trazo libre, línea, rectángulo, círculo), ajuste de color y grosor, botones de deshacer, rehacer, limpiar y guardar, todo con una interfaz compacta y responsive.

<img alt="DrawTool Screenshot" src="public/assets/screenshot.png" width="300" />

## 🌐 Demo

👉 [DrawTool Demo](https://micazoyolli.github.io/drawtool/)

## 🚀 Tecnologías usadas

- React + TypeScript (ES6+)
- SCSS modular
- Vite 8
- Lucide-react (íconos)
- Canvas API
- Node 24
- @micazoyolli/foundation para SEO/build y reduced motion

## 📦 Estructura del proyecto

```
drawtool/
├── public/
│   ├── assets/
│   ├── icons/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── meta.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Canvas/
│   │   └── Sidebar/
│   ├── styles/
│   │   ├── base/
│   │   │   ├── _variables.scss
│   │   │   └── global.scss
│   │   └── components/
│   │       └── App.module.scss
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── .editorconfig
├── .gitignore
├── .nvmrc
├── LICENSE
├── index.html
├── tsconfig.json
├── package.json
└── vite.config.js
```

## ▶️ Uso

```bash
yarn install
yarn dev
yarn lint
yarn typecheck
yarn build
```

Abre `http://localhost:5173/drawtool` para probar la herramienta.

## Despliegue en GitHub Pages

Este proyecto se publica en GitHub Pages desde la rama `gh-pages`. El comando `yarn deploy` compila la aplicación, limpia archivos `.DS_Store` del build y publica `dist/` usando el CLI de Micazoyolli Foundation sin crear commits de despliegue en `main`.

La configuración `base` de Vite debe conservar la subruta del repositorio: `/drawtool/`.

## 🧠 Funcionalidad

- Herramientas: trazo libre, línea, rectángulo, círculo
- Selector de color y grosor
- Acciones: deshacer, rehacer, limpiar, guardar
- Diseño responsive para desktop y mobile

---

## Construido con Micazoyolli Foundation

Este proyecto utiliza [Micazoyolli Foundation](https://github.com/micazoyolli/foundation) como infraestructura compartida. Las mejoras de tooling, estructura y despliegue deben realizarse en Foundation para beneficiar a todos los proyectos que la consumen.

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
