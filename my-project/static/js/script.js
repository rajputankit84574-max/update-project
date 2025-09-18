document.addEventListener('DOMContentLoaded', function() {
            // Navigation between pages
            const navLinks = document.querySelectorAll('.nav-link[data-page]');
            const footerLinks = document.querySelectorAll('.footer-section a[data-page]');
            const pageSections = document.querySelectorAll('.page-section');
            
            function showPage(pageId) {
                // Hide all pages
                pageSections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show selected page
                document.getElementById(pageId).classList.add('active');
                
                // Update active nav link
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === pageId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                
                // Scroll to top
                window.scrollTo(0, 0);
            }
            
            // Add event listeners to navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const pageId = this.getAttribute('data-page');
                    showPage(pageId);
                });
            });
            
            // Add event listeners to footer links
            footerLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const pageId = this.getAttribute('data-page');
                    showPage(pageId);
                });
            });
            
            // Collection filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            const collectionItems = document.querySelectorAll('.collection-card');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Show/hide collection items based on filter
                    collectionItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Simple validation
                    if (name && email && subject && message) {
                        // In a real application, you would send this data to a server
                        alert('Thank you for your message! We will get back to you soon.');
                        contactForm.reset();
                    } else {
                        alert('Please fill in all fields.');
                    }
                });
            }
            
            // Product slider functionality
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                    this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                });
            });
            
            // Newsletter form validation
            const newsletterForm = document.querySelector('.newsletter-form');
            
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    const email = emailInput.value.trim();
                    
                    if (validateEmail(email)) {
                        alert('Thank you for subscribing to our newsletter!');
                        emailInput.value = '';
                    } else {
                        alert('Please enter a valid email address.');
                    }
                });
            }
            
            // Email validation function
            function validateEmail(email) {
                const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return re.test(email);
            }
            
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.btn-secondary');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.parentElement.querySelector('h3').textContent;
                    alert(`Added ${productName} to your cart!`);
                });
            });
        });