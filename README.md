🏡 Comfy Cabin Explorer

Welcome to Comfy Cabin Explorer — a cozy, modern website that brings your dream cabin vacations to life!
Built using React.js, TailwindCSS, and Framer Motion to create a smooth, animated, and responsive experience.

📸 Project Demo
"Find your perfect cozy cabin with just a few clicks!"

✨ Features:

Elegant "Our Story" section with animated headings and paragraphs

Live counters for unique cabins, locations, happy guests, and ratings

Smooth hover effects on stats

Clean, minimalistic UI

Fast and responsive design

🚀 Tech Stack

Technology	Usage
React.js	Build reusable components
TailwindCSS	Style with utility-first classes
Framer Motion	Add smooth animations
🗂️ Project Structure
bash
Copy
Edit
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
🛠️ How to Install and Run
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/comfy-cabin.git
cd comfy-cabin
Install dependencies:

bash
Copy
Edit
npm install
Run the app locally:

bash
Copy
Edit
npm run dev
# or
npm start
Visit http://localhost:5173 in your browser.

✨ Important Code Example
jsx
Copy
Edit
<motion.div
  initial="initial"
  whileInView="animate"
  custom={0}
  variants={fadeInUpVariants}
  className="inline-block mb-2 px-4 py-1 bg-cabin-100 text-cabin-700 rounded-full text-sm font-medium"
>
  Our Story
</motion.div>
This motion.div smoothly animates the "Our Story" label when it comes into view!

📈 Future Enhancements
🎯 Advanced cabin search and filters

🎨 Dark mode toggle

🧹 Smoother page transitions

💬 Customer reviews carousel

👨‍💻 Author
Made with ❤️ by Sumanjeet Chatterjee

LinkedIn

GitHub

📜 License
This project is licensed under the MIT License.

🌟 Happy Coding and Explore the Comfy Cabins! 🌲🏕️