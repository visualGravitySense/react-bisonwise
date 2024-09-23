Here’s your README guide in English:

---

# Beauty Salon Courses - React Vite Bootstrap Project

![Project Image](https://link-to-your-image.com) <!-- Add a project image for visual reference -->

## 📖 Project Description

This project is a web application for viewing and filtering beauty salon courses. It is built with **React**, using **Vite** for fast builds and **Bootstrap** for styling.

It features a stylish interface with modern components, including:
- Thematic design with light/dark mode switching.
- A user-friendly course list with category filtering.
- A student testimonials block.
- Current offers and discounts.

## 🛠 Technologies

- **React** — JavaScript library for building user interfaces.
- **Vite** — Fast front-end build tool.
- **Bootstrap** — CSS framework for styling and grid system.
- **SCSS** — CSS preprocessor for better organization and extending styles.

## 🚀 Features

- 🚩 **Homepage**: Features a modern design hero section and student testimonials.
- 🔍 **Course Filtering**: Users can filter courses by categories (e.g., manicure, hair care, makeup).
- 🌓 **Dark/Light Mode**: Toggle between light and dark themes.
- 💬 **User Reviews**: Interactive student reviews section.
- 🎁 **Offers and Discounts**: Display current deals and special courses.

## 📦 Installation and Setup

To run the project on your local machine, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/beauty-courses.git
cd beauty-courses
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in the browser.

## 🛠 Project Structure

- `/src`
  - `/components` — React components like `HeroSection`, `CourseList`, `Testimonials`.
  - `/styles` — SCSS files for component styling.
  - `/pages` — Application pages (`Home`, `Courses`, `Login`, etc.).
  - `/assets` — Media files (images, icons, etc.).
- `/public` — Public files accessible at the root level.

## 📚 Development Guidelines

### 1. Adding New Components

- React components should be organized in the `components` folder. Each component has its own SCSS file for styling.
- Use **React Bootstrap** for basic UI components and the grid system.

### 2. Working with SCSS

- Use variables and mixins to maintain consistency in styles. Variables can be found in `src/styles/variables.scss`.
- Global styles and shared variables can be updated in the files within the `styles` folder.

### 3. Themes and Styling

- Dark and light theme support is implemented in the `App.jsx` component. Use the `.dark-mode` and `.light-mode` CSS classes to switch between styles.

## 📈 Roadmap

- Add personalized course recommendations block.
- Improve SEO optimization for course pages.
- Integrate a payment gateway for course purchases.

## 💡 Developer Information

When adding a new component or feature, follow these steps:

1. Create a new branch:
   ```bash
   git checkout -b feature/feature-name
   ```

2. Write clean, readable code following [Clean Code](https://github.com/ryanmcdermott/clean-code-javascript) principles.

3. Add comments to complex code sections and update the documentation in this README for new features.

4. Merge your feature branch to the main branch:
   ```bash
   git checkout main
   git pull origin main
   git merge feature/feature-name
   git push origin main
   ```

## 👥 Contributing

Contributions are welcome! To contribute to the project:

1. Fork this repository.
2. Create your branch (`git checkout -b feature/yourFeature`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push to your branch (`git push origin feature/yourFeature`).
5. Create a pull request.

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

### Additional Tips:

- **Use markdown**: README is written in Markdown format. Use headers, lists, links, and images to make the text readable.
- **Document everything**: Include code snippets to show how to use key features.
- **Keep it updated**: It’s important to keep the documentation current as the project evolves.

By following this structure, your README will look professional and provide all the necessary information for users and fellow developers!

