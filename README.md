# 🧩 Puzzle

Juego interactivo de rompecabezas con React, TypeScript y SCSS, desarrollado con estructura modular y Vite. Permite seleccionar imagen, nivel (número de piezas) y armar el puzzle mediante drag & drop. Incluye confetti al completar el puzzle, botón para volver a jugar y diseño responsive.

<img alt="Puzzle" src="https://github.com/micazoyolli/puzzle/blob/master/public/assets/screenshot.png" width="500" />

## 🌐 Demo

👉 [Puzzle Demo](https://micazoyolli.github.io/puzzle/)

## 🚀 Tecnologías usadas

- React + TypeScript (ES6+)
- SCSS modular
- Vite
- @dnd-kit/core + @dnd-kit/sortable
- canvas-confetti

## 📦 Estructura del proyecto

```
snake/
├── public/
│   ├── assets/
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── puzzles/
│   ├── components/
│   │   ├── ModalSelector/
│   │   └── PuzzleBoard/
│   ├── styles/
│   │   ├── _global.scss
│   │   └── _variables.scss
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

Abre `http://localhost:5173/puzzle/` para jugar.

## 🧠 Funcionalidad

- Selección de imagen y nivel de dificultad
- Drag & drop con @dnd-kit
- Confetti al completar el puzzle
- Botón para volver a seleccionar imagen y nivel
- Diseño responsive (desktop + mobile)

---

## 👩‍💻 Autora

Una creación de [`<micazoyolli />✨`](https://nadia.dev)
