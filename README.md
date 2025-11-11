# To-Do List

> This is a functional and fully interactive To-Do List application. It was developed to master key concepts in JavaScript DOM manipulation and modern CSS layout techniques.
> This project was created as part of learning Front-end fundamentals.
>
> Language of the page: **Polish**
> 

<img 
  src="images/icon.png" 
  alt="To-Do List icon" 
  width="200" 
/>

---

## Demo

**Check the website:** [https://mg-wiewiora.github.io/to-do-list/](https://mg-wiewiora.github.io/to-do-list/)

---

## Functionality

The main goal was to build a full CRUD (Create, Read, Update, Delete) application logic using clean JavaScript.

**Key Features:**

* **Adding Tasks:** Users can add new items to the list via a form input.
* **Toggling Status:** Tasks can be marked as completed (done) or incomplete.
* **Deleting Tasks:** Tasks can be permanently removed from the list.
* **State Management:** The application state (the array of tasks) is managed and modified exclusively in JavaScript.

---

## Technologies:

This project emphasizes clean separation of concerns and modern standards.

* **HTML5:** Semantic structure using `<section>` and clear heading hierarchy.
* **CSS3:** Used for styling and layout.
    * **Layout:** Form layout is managed using **CSS Grid** with a responsive single-column fallback via **Media Queries**.
    * The **Normalize.css** library was used for consistent rendering across browsers.
* **Modern JavaScript:** logic handling all interactivity, state management, and dynamic DOM rendering.

---

## Learning Points & Focus

This project provided practical experience with:

1.  **Advanced JS DOM Manipulation:** Creating, deleting, and updating HTML elements on the fly based on user interaction.
2.  **State Management & Logic:** Defining and manipulating a core data structure (the `tasks` array) separate from the view (HTML).
3.  **Code Structure & Scope:** Writing modular, readable code by using dedicated functions (`addTask`, `render`) and strictly **local** variables.
4.  **Code Structure & Scope:** Applying the **principle of least exposure** by using named, functional blocks (e.g., `addTask`, `render`) and declaring all variables as **local** (`const`/`let`), preventing global scope pollution and improving code predictability.
5.  **Modern CSS Layout:** Implementing a practical **CSS Grid** layout for the form, including **responsive design** using `@media` rules.

---
![gif - how to interact with the page](https://github.com/user-attachments/assets/aa7b686e-55fb-4c5c-bbbf-86ddd7981781)

![gif - responsiveness of the page](https://github.com/user-attachments/assets/f0f5d7b0-89ab-416d-a347-47c613045364)

## Author

**Małgorzata Wiewióra** - [my GitHub profile](https://github.com/mg-wiewiora)
