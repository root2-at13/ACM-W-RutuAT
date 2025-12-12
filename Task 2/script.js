// Book Reviews Data
const books = [
    {
        id: 1,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "classics",
        cover: "https://covers.openlibrary.org/b/id/8235657-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.8 },
            { source: "NY Times", rating: 5.0 }
        ]
    },
    {
        id: 2,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        genre: "fantasy",
        cover: "https://covers.openlibrary.org/b/id/8598015-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.0 },
            { source: "Amazon", rating: 4.5 },
            { source: "Publisher's Weekly", rating: 4.0 }
        ]
    },
    {
        id: 3,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "mystery",
        cover: "https://covers.openlibrary.org/b/id/8255113-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.2 },
            { source: "Amazon", rating: 4.5 },
            { source: "NY Times", rating: 4.5 }
        ]
    },
    {
        id: 4,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "contemporary",
        cover: "https://covers.openlibrary.org/b/id/12607979-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.8 },
            { source: "BookPage", rating: 5.0 }
        ]
    },
    {
        id: 5,
        title: "1984",
        author: "George Orwell",
        genre: "classics",
        cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.7 },
            { source: "Guardian", rating: 5.0 }
        ]
    },
    {
        id: 6,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "mystery",
        cover: "https://covers.openlibrary.org/b/id/8741409-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.0 },
            { source: "Amazon", rating: 4.4 },
            { source: "NY Times", rating: 4.0 }
        ]
    },
    {
        id: 7,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        genre: "fiction",
        cover: "https://covers.openlibrary.org/b/id/8842075-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.8 },
            { source: "NY Times", rating: 4.5 }
        ]
    },
    {
        id: 8,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        genre: "historical",
        cover: "https://covers.openlibrary.org/b/id/8570896-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.8 },
            { source: "Guardian", rating: 5.0 }
        ]
    },
    {
        id: 9,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "fiction",
        cover: "https://covers.openlibrary.org/b/id/10908348-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.8 },
            { source: "Kirkus", rating: 4.5 }
        ]
    },
    {
        id: 10,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "fantasy",
        cover: "https://covers.openlibrary.org/b/id/8589643-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.7 },
            { source: "Publisher's Weekly", rating: 4.5 }
        ]
    },
    {
        id: 11,
        title: "Normal People",
        author: "Sally Rooney",
        genre: "contemporary",
        cover: "https://covers.openlibrary.org/b/id/8730688-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.0 },
            { source: "Amazon", rating: 4.3 },
            { source: "NY Times", rating: 4.5 }
        ]
    },
    {
        id: 12,
        title: "All the Light We Cannot See",
        author: "Anthony Doerr",
        genre: "historical",
        cover: "https://covers.openlibrary.org/b/id/8226548-L.jpg",
        reviews: [
            { source: "Goodreads", rating: 4.5 },
            { source: "Amazon", rating: 4.7 },
            { source: "NY Times", rating: 5.0 }
        ]
    }
];

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star">★</span>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<span class="star">★</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star empty">★</span>';
    }
    
    return starsHTML;
}

// Format genre for display
function formatGenre(genre) {
    return genre.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// Display books
function displayBooks(booksToDisplay) {
    const grid = document.getElementById('booksGrid');
    
    if (!grid) return; // Exit if not on home page
    
    if (booksToDisplay.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
                <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: var(--primary-burgundy); margin-bottom: 1rem;">No Books Found</h2>
                <p style="color: var(--medium-text);">Try selecting a different genre</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = booksToDisplay.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title} cover" class="book-cover-img" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22300%22%3E%3Crect fill=%22%237c2d28%22 width=%22200%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2280%22 fill=%22rgba(255,255,255,0.3)%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 font-family=%22serif%22%3E${book.title.charAt(0)}%3C/text%3E%3C/svg%3E';">
            </div>
            <div class="book-content">
                <div class="book-genre">${formatGenre(book.genre)}</div>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                <div class="book-reviews">
                    ${book.reviews.map(review => `
                        <div class="review-source">
                            <span class="source-name">${review.source}</span>
                            <div class="rating">
                                <div class="stars">${generateStars(review.rating)}</div>
                                <span class="rating-value">${review.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Filter books by genre
function filterBooks() {
    const genreFilter = document.getElementById('genreFilter');
    if (!genreFilter) return;
    
    const selectedGenre = genreFilter.value;
    
    const filtered = selectedGenre === 'all' 
        ? books 
        : books.filter(book => book.genre === selectedGenre);
    
    displayBooks(filtered);
}

// Initialize the page
function init() {
    // Display all books on home page
    const booksGrid = document.getElementById('booksGrid');
    if (booksGrid) {
        displayBooks(books);
        
        // Setup genre filter
        const genreFilter = document.getElementById('genreFilter');
        if (genreFilter) {
            genreFilter.addEventListener('change', filterBooks);
        }
    }
    
    // Setup contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

// Handle contact form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const form = event.target;
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }
    
    // Simulate form submission
    // In a real application, this would send data to a server
    setTimeout(() => {
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 500);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}