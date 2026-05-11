# 🎬 MovieCloudebd

A fast, responsive movie website built with pure HTML, CSS & JavaScript. Monetized with Adsterra smart links.

## 🚀 Features

- 🎬 Movie cards with posters, ratings, genre badges
- 🔍 Search movies in real-time
- 🏷️ Filter by genre (Action, Drama, Comedy, Thriller, Sci-Fi, Animation)
- 📥 Download modal with Adsterra smart link
- 📢 3 Ad banner placements (top, middle, bottom)
- 📱 Fully responsive (mobile + desktop)
- ⚡ No frameworks — pure HTML/CSS/JS

## 📁 File Structure

```
MovieCloudebd/
├── index.html       # Main page
├── style.css        # All styles
├── app.js           # Movies data + logic
└── README.md        # This file
```



## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository named `MovieCloudebd`
2. Upload all files (`index.html`, `style.css`, `app.js`, `README.md`)
3. Go to **Settings → Pages**
4. Set source to `main` branch, root folder
5. Your site will be live at: `https://yourusername.github.io/MovieCloudebd`

## ➕ How to Add New Movies

Open `app.js` and add a new object inside the `movies` array:

```javascript
{
  id: 13,                          // unique number
  title: "Movie Title",
  year: 2025,
  genre: "action",                 // action / drama / comedy / thriller / sci-fi / animation
  rating: 8.0,
  desc: "Short description here.",
  poster: "https://your-image-url.jpg",
  isNew: true                      // shows NEW badge
},
```

## 📄 License

For personal/educational use. Respect copyright laws in your country.

---

Made with ❤️ by FA Shishir | MovieCloudebd
