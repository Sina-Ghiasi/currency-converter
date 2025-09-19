# Currency Converter

![GitHub Stars](https://img.shields.io/github/stars/Sina-Ghiasi/currency-converter?style=flat&color=brightgreen)
![GitHub Issues](https://img.shields.io/github/issues/Sina-Ghiasi/currency-converter?style=flat&color=blue)
![GitHub License](https://img.shields.io/github/license/Sina-Ghiasi/currency-converter?style=flat&color=orange)
![GitHub Repo Size](https://img.shields.io/github/repo-size/Sina-Ghiasi/currency-converter?style=flat&color=purple)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Sina-Ghiasi/currency-converter?style=flat&color=cyan)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat)
![React](https://img.shields.io/badge/React-purple?logo=react&logoColor=white&style=flat)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Implementation & Approach](#implementation--approach)
4. [Demo](#demo)
5. [Getting Started](#getting-started)
6. [Usage](#usage)
7. [License](#license)

---

## Overview

- Gets currency ratios from a **Settings page** for flexibility.
- Uses **default ratios** as a fallback approach.
- Uses **base currency** for a simple conversion approach.
- Refactored state management: replaced multiple `useState`s with `useReducer` to better manage **related states** and simplify logic.
- Folder and component structure is **maintainable and scalable** for future features.

---

## Features

- 🔄 Convert between multiple currencies (default: USD → IRR).
- 💾 Persist user data in local storage (entered ratios and theme preference).
- 🌙 Dark theme support that respects `prefers-color-scheme`.
- 🎨 Responsive design for mobile and desktop.
- ⚡ Fast and lightweight using Vite + React.
- 🟢 Modern UI/UX with clear feedback (toasts instead of alerts).
- ⚙️ Settings page to configure currency ratios.
- 🛠️ Future-proof and maintainable folder structure.

---

## Implementation & Approach

This section outlines how the project was implemented and the approach taken:

- 🧩 **Component-based architecture**: Clear separation of `Header`, `Footer`, `ConverterForm`, and `Settings` for maintainability and scalability.
- 🔄 **State management**: Centralized using `useReducer` to manage currency amounts, selected currencies, and user settings.
- 🚨 **Local storage persistence**: Ensures user-entered data and preferences (like ratios and theme) are preserved across sessions.
- 🌙 **Modern UI/UX**: Dark/light theme support respects system preferences. Real-time feedback is provided using toast notifications instead of traditional alerts.
- ⚙️ **Flexible design**: Base currency and ratio logic are easily extendable, allowing additional currencies in the future.
- 🗂️ **Maintainable folder structure**: Organized for easy scaling, making it simple to add features without cluttering the codebase.

---

## Demo

Check out the live demo: [Currency Converter Demo](https://currency-converter-sable-nine-63.vercel.app/)

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
git clone https://github.com/Sina-Ghiasi/currency-converter.git
cd currency-converter
npm install
npm run dev
```
