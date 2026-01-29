# Frontend & Shopify Development Guidelines

This repository follows a standardized set of coding practices to ensure 
**consistency, performance, and maintainability** across all Shopify and frontend projects.

All contributors are expected to follow the guidelines outlined below.

---

## 📦 Required VS Code Extensions

To maintain consistency and improve productivity, please install the following extensions:

- **BEM Helper** – Write clean and maintainable CSS using BEM methodology  
- **GitLens** – Enhanced Git insights and collaboration  
- **Indent Rainbow** – Visualize indentation levels. 
- **Shopify Liquid** – Syntax highlighting for Liquid files  
- **Shopify Liquid Templates & Snippets** – Predefined snippets for faster development  
- **Better Comments** - For improved commenting system  
- **Liquid** - The essential vscode extension for Liquid  

---

## 📐 Indentation Rules

- Use **2 spaces** for indentation across all files:
  - HTML
  - CSS
  - JavaScript
  - Liquid

---

## 🏷️ Naming Conventions

- **Variables & Functions:** `camelCase`
- **JavaScript Classes:** `PascalCase`
- **CSS / HTML Classes:** `kebab-case` (preferred and mostly used)

> Always use descriptive and meaningful names that clearly explain the purpose.

---

## ♻️ DRY Principle

- Follow the **Don’t Repeat Yourself (DRY)** principle.
- Avoid duplicated logic, markup, or styles.
- Extract reusable code into functions or components when needed.

---

## ⚡ Code Optimization

- Write **clean, efficient, and reusable code**
- Avoid unnecessary calculations or repeated logic
- Keep solutions simple and easy to understand by all developers

---

## 🧠 JavaScript Guidelines

### General Rules
- Write **simple and readable code**
- Avoid unnecessary refactoring or over-engineering
- Code should be easy for any team member to understand

---

### DOM & Structure
- Use **data attributes** for DOM selection
- Use `querySelectorAll` with `forEach` for iteration
- Define **global variables at the top** for shared configurations
- Avoid repetitive structures — write dynamic, reusable code

---

### Styling Control
- ❌ Do not use inline styles in JavaScript  
- ✅ Add or remove CSS classes dynamically

---

### Code Modularity
- Break logic into **small, single-purpose functions**
- Keep functions focused and reusable

---

### JSON Handling
- Use **single quotes (`'`)** for JSON keys
- Be cautious with auto-formatters that convert quotes
- Ensure functionality is not broken due to formatting changes

---

### API Calls
Use `fetch` with appropriate HTTP methods:
- `GET`
- `POST`
- `PUT`

Handle responses and errors properly.

---

## 🧩 Shopify Section Development

### Component-Based Structure
Use **custom elements** for Shopify sections.

```html
<slider-component></slider-component>
````

---

### Stylesheets

Each section must have its **own CSS file**.

```liquid
{{ 'component-slideshow.css' | asset_url | stylesheet_tag }}
```

---

### JavaScript Files

Each section must have a **dedicated JavaScript file**.

```liquid
<script src="{{ 'slider-component.js' | asset_url }}" defer></script>
```

---

### Object-Oriented JavaScript

Use OOP principles for each component.

```js
class SliderComponent extends HTMLElement {
  constructor() {
    super();
    // Component-specific logic
  }
}

customElements.define('slider-component', SliderComponent);
```

---

## 🔍 Pull Request (PR) Process

### Branch Naming

Use descriptive branch names:

* `feature/slider`
* `fix/slider`

---

### Review Requirements

* At least **one approval** is required before merging
* Assign a team member for PR review

---

### PR Review Checklist

* Coding standards followed
* Proper naming conventions
* 2-space indentation enforced
* No `console.log` statements
* No sensitive data exposed (cookies, tokens, etc.)
* Code is optimized and reusable
* Improvements suggested where applicable

---

### Merge Flow

1. Merge into **staging** for QA testing
2. After approval, merge into **live**

---

## ✅ Final Notes

Following these guidelines ensures:

* Consistent code quality
* Better collaboration
* Easier onboarding
* Maintainable and scalable Shopify projects

Happy coding 🚀
