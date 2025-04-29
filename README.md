# 🏡 Comfy Cabin Explorer

![Made with React](https://img.shields.io/badge/Made%20with-React-blue?style=for-the-badge&logo=react)
![Built with TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Animated with Framer Motion](https://img.shields.io/badge/Animated%20with-Framer%20Motion-ef007c?style=for-the-badge&logo=framer)

---

Welcome to **Comfy Cabin Explorer** — a cozy, modern website that brings your dream cabin vacations to life!  
Built using **React.js**, **TailwindCSS**, and **Framer Motion** to create a **smooth**, **animated**, and **responsive** experience.

---

## 📸 Project Demo

> _"Find your perfect cozy cabin with just a few clicks!"_  

✨ **Features:**  
- Elegant "Our Story" section with animated headings and paragraphs
- Live counters for unique cabins, locations, happy guests, and ratings
- Smooth hover effects on stats
- Clean, minimalistic UI  
- Fast and responsive design  

---

## 🚀 Tech Stack

| Technology      | Usage                           |
|-----------------|---------------------------------|
| **React.js**    | Build reusable components       |
| **TailwindCSS** | Style with utility-first classes |
| **Framer Motion** | Add smooth animations          |

---

## 🗂️ Project Structure

```bash
comfy-cabin/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── OurStory.jsx   # Animated "Our Story" Section
│   ├── variants/
│   │   └── fadeInUpVariants.js  # Animation variants
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 🛠️ How to Install and Run

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/comfy-cabin.git
cd comfy-cabin
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the app locally:**

```bash
npm run dev
# or
npm start
```

4. **Visit** `http://localhost:5173` in your browser.

---

## ✨ Important Code Example

```jsx
<motion.div
  initial="initial"
  whileInView="animate"
  custom={0}
  variants={fadeInUpVariants}
  className="inline-block mb-2 px-4 py-1 bg-cabin-100 text-cabin-700 rounded-full text-sm font-medium"
>
  Our Story
</motion.div>
```
> This `motion.div` smoothly animates the "Our Story" label when it comes into view!

---

## 📈 Future Enhancements
- 🎯 Advanced cabin search and filters
- 🎨 Dark mode toggle
- 🧹 Smoother page transitions
- 💬 Customer reviews carousel

---

## 👨‍💻 Author

Made with ❤️ by **Sumanjeet Chatterjee**

- [LinkedIn](https://linkedin.com)
- [GitHub](https://github.com)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

# 🌟 Happy Coding and Explore the Comfy Cabins! 🌲🏕️

