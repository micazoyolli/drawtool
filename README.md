# ✏️ DrawTool

Herramienta interactiva de dibujo con React, TypeScript y SCSS. Incluye selección de herramienta (trazo libre, línea, rectángulo, círculo), ajuste de color y grosor, botones de deshacer, rehacer, limpiar y guardar, todo con una interfaz compacta y responsive.

## 🖼️ Captura

<img alt="DrawTool Screenshot" src="public/assets/screenshot.png" width="300" />

## 🌐 Demo

👉 [DrawTool Demo](https://micazoyolli.github.io/drawtool/)

## 🚀 Tecnologías usadas

- React + TypeScript (ES6+)
- SCSS modular
- Vite
- Lucide-react (íconos)
- Canvas API

## 📁 Estructura del proyecto

```
drawtool/
├── public/
│   ├── assets/
│   ├── manifest.json
│   └── robots.txt
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
├── index.html
├── .gitignore
├── LICENSE
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## ▶️ Uso

```bash
yarn install
yarn dev
```

Abre `http://localhost:5173/drawtool` para probar la herramienta.

## 🧠 Funcionalidad

- Herramientas: trazo libre, línea, rectángulo, círculo
- Selector de color y grosor
- Acciones: deshacer, rehacer, limpiar, guardar
- Diseño responsive para desktop y mobile

---

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
