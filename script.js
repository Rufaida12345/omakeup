 // Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Course Filtering
    const levelFilter = document.getElementById('level-filter');
    const categoryFilter = document.getElementById('category-filter');
    const coursesContainer = document.getElementById('courses-container');
    
    if (levelFilter && categoryFilter && coursesContainer) {
        function filterCourses() {
            const level = levelFilter.value;
            const category = categoryFilter.value;
            const courses = coursesContainer.querySelectorAll('.course-card');
            
            courses.forEach(course => {
                const courseLevel = course.getAttribute('data-level');
                const courseCategory = course.getAttribute('data-category');
                
                const levelMatch = level === 'all' || courseLevel === level;
                const categoryMatch = category === 'all' || courseCategory === category;
                
                if (levelMatch && categoryMatch) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            });
        }
        
        levelFilter.addEventListener('change', filterCourses);
        categoryFilter.addEventListener('change', filterCourses);
    }
    
    // Product Filtering
    const productCategory = document.getElementById('product-category');
    const priceRange = document.getElementById('price-range');
    const productsContainer = document.querySelector('.products-grid');
    
    if (productCategory && priceRange && productsContainer) {
        function filterProducts() {
            const category = productCategory.value;
            const price = priceRange.value;
            const products = productsContainer.querySelectorAll('.product-card');
            
            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                const productPrice = parseInt(product.getAttribute('data-price'));
                
                let categoryMatch = category === 'all' || productCategory === category;
                let priceMatch = true;
                
                if (price !== 'all') {
                    if (price === '0-20') {
                        priceMatch = productPrice >= 0 && productPrice <= 20;
                    } else if (price === '20-50') {
                        priceMatch = productPrice > 20 && productPrice <= 50;
                    } else if (price === '50-100') {
                        priceMatch = productPrice > 50 && productPrice <= 100;
                    } else if (price === '100+') {
                        priceMatch = productPrice > 100;
                    }
                }
                
                if (categoryMatch && priceMatch) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
        
        productCategory.addEventListener('change', filterProducts);
        priceRange.addEventListener('change', filterProducts);
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
                icon.classList.remove('active');
            } else {
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                    ans.previousElementSibling.querySelector('i').classList.remove('active');
                });
                
                answer.classList.add('active');
                icon.classList.add('active');
            }
        });
    });
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // In a real application, you would send this to a server
            // For this demo, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add to Cart Buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // In a real application, you would add to cart
            // For this demo, we'll show an alert
            alert(`${productName} has been added to your cart!`);
        });
    });
    
    // Newsletter Form
    const newsletterForms = document.querySelectorAll('form');
    
    newsletterForms.forEach(form => {
        if (form.querySelector('input[type="email"]') && form.querySelector('button[type="submit"]')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                alert(`Thank you for subscribing with ${email}! You'll receive our newsletter soon.`);
                this.reset();
            });
        }
    });
})