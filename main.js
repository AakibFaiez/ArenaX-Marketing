// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    }
});

// Rating system
const ratingStars = document.querySelectorAll('.rating-input i');
let currentRating = 0;

ratingStars.forEach(star => {
    star.addEventListener('mouseover', function() {
        const rating = this.dataset.rating;
        updateStars(rating);
    });

    star.addEventListener('mouseout', function() {
        updateStars(currentRating);
    });

    star.addEventListener('click', function() {
        currentRating = this.dataset.rating;
        updateStars(currentRating);
    });
});

function updateStars(rating) {
    ratingStars.forEach(star => {
        const starRating = star.dataset.rating;
        if (starRating <= rating) {
            star.classList.remove('bi-star');
            star.classList.add('bi-star-fill', 'active');
        } else {
            star.classList.remove('bi-star-fill', 'active');
            star.classList.add('bi-star');
        }
    });
}

// Feedback form submission
document.querySelector('.feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const court = document.getElementById('courtSelect').value;
    const feedback = document.getElementById('feedback').value;
    
    if (!currentRating) {
        alert('Please select a rating');
        return;
    }

   

    // Reset form
    this.reset();
    currentRating = 0;
    updateStars(0);
    alert('Thank you for your feedback!');
});
