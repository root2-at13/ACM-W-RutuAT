# The Book Nook - Book Review Website

A sophisticated book review website with a library aesthetic, featuring elegant typography and warm burgundy tones.

## 🎨 Design Features

- **Aesthetic**: Library/bookstore inspired with sophisticated, minimalistic design
- **Color Scheme**: Rich burgundy tones (#7c2d28) with cream and beige backgrounds
- **Typography**: 
  - Cormorant Garamond (headings)
  - EB Garamond (subheadings)
  - Lora (body text)

## 📁 Project Structure

```
book-nook/
├── index.html      # Home page with book reviews grid
├── about.html      # About page featuring Rutu A T
├── contact.html    # Contact form page
├── styles.css      # All styling (CSS variables, responsive design)
└── script.js       # Book data, filtering, and form handling
```

## 📖 Pages

### Home Page (index.html)
- Hero section with site title
- Genre filter dropdown
- Grid display of 12 books
- Each book shows:
  - Title and author
  - Genre classification
  - Multiple review sources with star ratings (Goodreads, Amazon, NY Times, etc.)

### About Page (about.html)
- Introduction to The Book Nook
- Featured: **Rutu A T** as the curator
- Site philosophy and values
- Sidebar with additional information
- Literary quotes

### Contact Page (contact.html)
- Contact form with fields:
  - Name
  - Email
  - Subject dropdown
  - Message textarea
- Form validation
- Success/error messages
- Additional information cards

## 🚀 Setup & Usage

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No installation required**: All files are self-contained
3. **All pages work**: Navigate between pages using the navigation menu

## 📚 Book Collection

The site features 12 carefully selected books across various genres:
- Classics (Pride and Prejudice, 1984)
- Fantasy (The Night Circus, The Name of the Wind)
- Mystery (Gone Girl, The Silent Patient)
- Contemporary (Normal People, The Seven Husbands of Evelyn Hugo)
- Historical Fiction (All the Light We Cannot See, The Song of Achilles)
- Fiction (Where the Crawdads Sing, Project Hail Mary)

Each book displays ratings from 2-3 different review sources.

## 🎯 Key Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Genre filtering system
- ✅ Multi-source book ratings
- ✅ Smooth animations and hover effects
- ✅ Working contact form with validation
- ✅ Elegant library aesthetic
- ✅ Accessible navigation

## 🎨 Color Palette

```css
--primary-burgundy: #7c2d28
--secondary-burgundy: #9d3f3a
--light-burgundy: #b85450
--dark-burgundy: #5a1f1c
--cream: #f5f1e8
--off-white: #faf8f3
--warm-beige: #e8dcc8
```

## 📝 Customization

To add more books, edit the `books` array in `script.js`:

```javascript
{
    id: 13,
    title: "Your Book Title",
    author: "Author Name",
    genre: "classics", // or fiction, mystery, fantasy, etc.
    reviews: [
        { source: "Goodreads", rating: 4.5 },
        { source: "Amazon", rating: 4.8 }
    ]
}
```

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 About the Curator

**Rutu A T** - A passionate reader who has curated these book recommendations with care and thoughtfulness. Each review comes from genuine appreciation and careful consideration.

## 📄 License

This project is open for personal and educational use.

---

**The Book Nook** - Your sanctuary for literary discovery
