# Frontend & Shopify Development Guidelines

This repository follows a standardized set of coding practices to ensure **consistency, performance, accessibility, and maintainability** across all Shopify (Dawn-based) and frontend projects.

All contributors are expected to follow the guidelines outlined below.

---

## 📦 Required VS Code Extensions

To maintain consistency and improve productivity, please install the following extensions:

* **BEM Helper** – Write clean and maintainable CSS using BEM methodology
* **GitLens** – Enhanced Git insights and collaboration
* **Indent Rainbow** – Visualize indentation levels
* **Shopify Liquid** – Syntax highlighting for Liquid files
* **Shopify Liquid Templates & Snippets** – Predefined snippets for faster development
* **Better Comments** – Improved comment readability
* **Liquid** – Essential Liquid language support

---

## 📐 Indentation Rules

* Use **2 spaces** for indentation across all files:

  * HTML
  * CSS
  * JavaScript
  * Liquid

---

## 🏷️ Naming Conventions

* **Variables & Functions:** `camelCase`
* **JavaScript Classes / Custom Elements:** `PascalCase`
* **CSS / HTML Classes:** `bf-kebab-case`

  * `bf` is the project-specific prefix (can be changed per project)

> Always use descriptive and meaningful names that clearly explain the purpose.

---

## ♻️ DRY Principle

* Follow the **Don’t Repeat Yourself (DRY)** principle
* Avoid duplicated logic, markup, or styles
* Extract reusable code into snippets, functions, or components

---

## ⚡ Code Optimization

* Write **clean, efficient, and reusable code**
* Avoid unnecessary calculations or repeated logic
* Prefer clarity over cleverness
* Optimize for maintainability first, performance second

---

## 🧩 Liquid Guidelines

### General Rules

* Keep Liquid **simple and readable**
* Prefer condition-based HTML rendering
* Avoid heavy business logic in templates
* Use snippets for reusable markup
* Use section settings instead of hardcoded values

### Formatting & Style

* Use 2-space indentation
* Use `snake_case` for Liquid variables
* Close all Liquid tags explicitly

```liquid
{% if product.available %}
  <p class="bf-product__status">In stock</p>
{% endif %}
```

---

## 🧠 JavaScript Guidelines

### General Rules

* Write **simple, readable, and predictable code**
* Avoid over-engineering
* Prefer vanilla JavaScript (no jQuery)
* One responsibility per file or class

---

### DOM & Structure

* Use **data attributes** for DOM selection
* Use `querySelectorAll` with `forEach` for iteration
* Define shared constants at the top of the file
* Avoid duplicated DOM queries

---

### Styling Control

* ❌ Do not use inline styles in JavaScript
* ✅ Toggle CSS classes for styling changes

---

### Code Modularity

* Break logic into **small, single-purpose functions**
* Keep functions reusable and testable

---

### Data & JSON Handling

* Use **double quotes (`"`)** for JSON keys and values (JSON standard)
* Be cautious with auto-formatters
* Validate JSON before committing

---

### API Calls

* Use `fetch` with appropriate HTTP methods:
  * `GET`
  * `POST`
  * `PUT`
* Handle errors and loading states properly
* Never expose sensitive tokens on the frontend

---

## 🧩 Shopify Section Development (Dawn)

### Component-Based Structure

* Use **custom elements** for interactive sections
* One section = one component

```html
<slider-component></slider-component>
```

---

### Stylesheets

* Each section must have its **own CSS file**
* Scope styles to the component

```liquid
{{ 'component-slideshow.css' | asset_url | stylesheet_tag }}
```

---

### JavaScript Files

* Each section must have a **dedicated JavaScript file**
* Load scripts with `defer`

```liquid
<script src="{{ 'slider-component.js' | asset_url }}" defer></script>
```

---

### Object-Oriented JavaScript

* Use OOP for section behavior
* One class per component

```js
class SliderComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('slider-component', SliderComponent);
```

---

## ♿ Accessibility (Required)

* Use semantic HTML
* Always provide `alt` text for images
* Maintain proper heading order
* Use buttons for actions, links for navigation

---

## 🔍 Pull Request (PR) Process

### Branch Naming

* `feature/slider`
* `fix/slider`

---

### Review Requirements

* At least **one approval** is required before merging
* Assign a reviewer explicitly

---

### PR Review Checklist

* Coding standards followed
* Proper naming conventions
* 2-space indentation enforced
* No `console.log` statements
* No sensitive data exposed
* Code is reusable and optimized
* Accessibility considered

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
