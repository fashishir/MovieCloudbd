// ===== MOVIE DATA =====
const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    year: 2024,
    genre: "sci-fi",
    rating: 8.5,
    desc: "Paul Atreides unites with the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://cdn.cdn-hub.xyz/url?photo=SFZqV2ZORWI3cnZNRzhXVnFPS0paV1lHRFNFVldFVndJWmhLM3VHYW5kMzZtZXBzaWhDRzNGRWh1bU1VcGFuZWpkaVk5dFZ1RDA3blVuS2t6L2VGVzhPWFVham52S3hqcDJBbzFjQnhxaFE9",
      "https://ferocitycandour.com/vvxam4wjt5?key=3f50c12c9e9333216d6e3b6ce0264c22"
    ]
  },
  {
    id: 2,
    title: "Oppenheimer",
    year: 2023,
    genre: "drama",
    rating: 8.9,
    desc: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
    isNew: false,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative2"
    ]
  },
  {
    id: 3,
    title: "The Batman",
    year: 2023,
    genre: "action",
    rating: 7.8,
    desc: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate.",
    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400&q=80",
    isNew: false,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative3"
    ]
  },
  {
    id: 4,
    title: "Poor Things",
    year: 2023,
    genre: "comedy",
    rating: 8.1,
    desc: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative4"
    ]
  },
  {
    id: 5,
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "action",
    rating: 8.3,
    desc: "Deadpool is recruited by the Time Variance Authority and teams up with a variant of Wolverine.",
    poster: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative5"
    ]
  },
  {
    id: 6,
    title: "Inside Out 2",
    year: 2024,
    genre: "animation",
    rating: 7.9,
    desc: "Riley enters adolescence and her emotions must make room for new, more complicated feelings in her mind.",
    poster: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative6"
    ]
  },
  {
    id: 7,
    title: "Alien: Romulus",
    year: 2024,
    genre: "sci-fi",
    rating: 7.3,
    desc: "A group of young space colonizers face the most terrifying life form in the universe.",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative7"
    ]
  },
  {
    id: 8,
    title: "Joker: Folie à Deux",
    year: 2024,
    genre: "thriller",
    rating: 5.8,
    desc: "Arthur Fleck awaits trial for his crimes as the Joker while also discovering love.",
    poster: "https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative8"
    ]
  },
  {
    id: 9,
    title: "Gladiator II",
    year: 2024,
    genre: "action",
    rating: 7.2,
    desc: "Years after witnessing the death of Maximus, Lucius is forced to enter the Colosseum.",
    poster: "https://images.unsplash.com/photo-1552084117-56a987666449?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative9"
    ]
  },
  {
    id: 10,
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genre: "sci-fi",
    rating: 6.9,
    desc: "Many years after the reign of Caesar, a young ape goes on a journey that leads him to question everything.",
    poster: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=400&q=80",
    isNew: true,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative10"
    ]
  },
  {
    id: 11,
    title: "The Holdovers",
    year: 2023,
    genre: "drama",
    rating: 7.9,
    desc: "A curmudgeonly teacher at a New England prep school is forced to spend the holidays with a student who has no home to go to.",
    poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    isNew: false,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative11"
    ]
  },
  {
    id: 12,
    title: "Wonka",
    year: 2023,
    genre: "comedy",
    rating: 6.8,
    desc: "With dreams of opening a shop in a city renowned for its chocolatiers, a young Willy Wonka discovers that the industry is run by a cartel.",
    poster: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80",
    isNew: false,
    downloadLinks: [
      "https://ferocitycandour.com/h1yfigmbuq?key=0c9b23c12764e463d8952a3fb37adc74",
      "https://ferocitycandour.com/h1yfigmbuq?key=alternative12"
    ]
  }
];

// ===== STATE =====
let currentGenre = 'all';
let currentSearch = '';

// ===== RENDER MOVIES =====
function renderMovies() {
  const grid = document.getElementById('moviesGrid');
  const noResults = document.getElementById('noResults');

  let filtered = movies.filter(m => {
    const matchGenre = currentGenre === 'all' || m.genre === currentGenre;
    const matchSearch = m.title.toLowerCase().includes(currentSearch.toLowerCase());
    return matchGenre && matchSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.style.display = 'block';
    return;
  }
  noResults.style.display = 'none';

  filtered.forEach((movie, i) => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      ${movie.isNew ? '<span class="badge-new">NEW</span>' : ''}
      <img class="card-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy"/>
      <div class="card-overlay"><i class="fas fa-download"></i></div>
      <div class="card-info">
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">
          <span>${movie.year}</span>
          <span class="card-rating"><i class="fas fa-star"></i> ${movie.rating}</span>
        </div>
        <span class="card-genre">${movie.genre}</span>
      </div>
    `;
    card.addEventListener('click', () => openModal(movie));
    grid.appendChild(card);
  });
}

// ===== FILTER =====
function setGenre(genre, btn) {
  currentGenre = genre;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMovies();
}

function filterMovies() {
  currentSearch = document.getElementById('searchInput').value;
  renderMovies();
}

// ===== MODAL =====
function openModal(movie) {
  document.getElementById('modalPoster').src = movie.poster;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalYear').textContent = '📅 ' + movie.year;
  document.getElementById('modalGenre').textContent = '🎬 ' + movie.genre.toUpperCase();
  document.getElementById('modalRatingVal').textContent = movie.rating;
  document.getElementById('modalDesc').textContent = movie.desc;
  
  // Set download links
  const downloadBtn1 = document.getElementById('modalDownloadBtn1');
  const downloadBtn2 = document.getElementById('modalDownloadBtn2');
  
  if (movie.downloadLinks && movie.downloadLinks.length >= 1) {
    downloadBtn1.href = movie.downloadLinks[0];
  }
  if (movie.downloadLinks && movie.downloadLinks.length >= 2) {
    downloadBtn2.href = movie.downloadLinks[1];
  }
  
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderMovies);
