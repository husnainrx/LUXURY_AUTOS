const buyVehicles = [
    {
        id: 1,
        name: "Mercedes-Benz S-Class",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "The epitome of luxury and innovation with cutting-edge technology and unparalleled comfort.",
        price: "PKR 26,500,000",
        brand: "mercedes",
        type: "luxury",
        year: 2023,
        specs: {
            engine: "V8 Hybrid",
            transmission: "Automatic",
            mileage: "12,500 km",
            fuel: "Hybrid"
        }
    },
    {
        id: 2,
        name: "BMW 7 Series",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Executive luxury sedan with sophisticated design and powerful performance.",
        price: "PKR 24,300,000",
        brand: "bmw",
        type: "luxury",
        year: 2023,
        specs: {
            engine: "V6 TwinPower",
            transmission: "Automatic",
            mileage: "8,200 km",
            fuel: "Petrol"
        }
    },
    {
        id: 3,
        name: "Porsche 911 Turbo S",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Legendary sports car with breathtaking performance and daily usability.",
        price: "PKR 57,500,000",
        brand: "porsche",
        type: "sports",
        year: 2024,
        specs: {
            engine: "V8 Twin Turbo",
            transmission: "Automatic",
            mileage: "3,200 km",
            fuel: "Petrol"
        }
    },
    {
        id: 4,
        name: "Range Rover Autobiography",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "The ultimate luxury SUV with unparalleled refinement and all-terrain capability.",
        price: "PKR 29,200,000",
        brand: "range rover",
        type: "suv",
        year: 2023,
        specs: {
            engine: "V8 Supercharged",
            transmission: "Automatic",
            mileage: "18,700 km",
            fuel: "Petrol"
        }
    },
    {
        id: 5,
        name: "Audi A8 L",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Progressive design meets innovative technology in this flagship luxury sedan.",
        price: "PKR 24,600,000",
        brand: "audi",
        type: "luxury",
        year: 2023,
        specs: {
            engine: "V6 TFSI",
            transmission: "Automatic",
            mileage: "15,300 km",
            fuel: "Petrol"
        }
    },
    {
        id: 6,
        name: "Toyota Land Cruiser V8",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "The ultimate off-road luxury SUV with legendary reliability and premium comfort.",
        price: "PKR 32,800,000",
        brand: "toyota",
        type: "suv",
        year: 2023,
        specs: {
            engine: "V8 Diesel",
            transmission: "Automatic",
            mileage: "22,300 km",
            fuel: "Diesel"
        }
    }
];

const rentalVehicles = [
    {
        id: 1,
        name: "Mercedes-Benz S-Class",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Experience ultimate luxury with our flagship S-Class rental.",
        dailyRate: "PKR 45,000",
        weeklyRate: "PKR 280,000",
        specs: {
            seats: "5",
            transmission: "Automatic",
            fuel: "Hybrid",
            features: "Premium Sound, Massage Seats"
        }
    },
    {
        id: 2,
        name: "BMW 7 Series",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Executive luxury for business trips and special occasions.",
        dailyRate: "PKR 42,000",
        weeklyRate: "PKR 260,000",
        specs: {
            seats: "5",
            transmission: "Automatic",
            fuel: "Petrol",
            features: "Executive Lounge, Panoramic Roof"
        }
    },
    {
        id: 3,
        name: "Porsche 911 Carrera",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Iconic sports car experience for the ultimate driving enthusiast.",
        dailyRate: "PKR 65,000",
        weeklyRate: "PKR 400,000",
        specs: {
            seats: "4",
            transmission: "Automatic",
            fuel: "Petrol",
            features: "Sport Chrono, Premium Package"
        }
    },
    {
        id: 4,
        name: "Range Rover Autobiography",
        image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        description: "Luxury SUV perfect for family trips and off-road adventures.",
        dailyRate: "PKR 38,000",
        weeklyRate: "PKR 240,000",
        specs: {
            seats: "7",
            transmission: "Automatic",
            fuel: "Petrol",
            features: "All-Terrain, Rear Entertainment"
        }
    }
];


const header = document.getElementById('main-header');
const navMenu = document.getElementById('nav-menu');
const mobileMenu = document.getElementById('mobile-menu');
const buyContainer = document.getElementById('buy-vehicles');
const rentalContainer = document.getElementById('rental-vehicles');
const tradeForm = document.getElementById('trade-form');


const priceFilter = document.getElementById('price-filter');
const brandFilter = document.getElementById('brand-filter');
const typeFilter = document.getElementById('type-filter');
const yearFilter = document.getElementById('year-filter');
const resetFilters = document.getElementById('reset-filters');

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});


if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}


function renderBuyVehicles(vehicles = buyVehicles) {
    if (!buyContainer) return;
    
    buyContainer.innerHTML = '';
    
    if (vehicles.length === 0) {
        buyContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No vehicles found</h3>
                <p>Try adjusting your filters to see more results</p>
            </div>
        `;
        return;
    }
    
    vehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.className = 'vehicle-card';
        vehicleCard.innerHTML = `
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
                <div class="vehicle-badge">Premium</div>
            </div>
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p>${vehicle.description}</p>
                <div class="vehicle-specs">
                    <div class="spec-item">
                        <i class="fas fa-cog"></i>
                        <span>${vehicle.specs.engine}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${vehicle.specs.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-road"></i>
                        <span>${vehicle.specs.mileage}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>${vehicle.specs.fuel}</span>
                    </div>
                </div>
                <div class="vehicle-price">${vehicle.price}</div>
                <div class="vehicle-actions">
                    <button class="btn" onclick="inquiry('${vehicle.name}', 'buy')">Inquire</button>
                    <button class="btn btn-secondary" onclick="scheduleTestDrive('${vehicle.name}')">Test Drive</button>
                </div>
            </div>
        `;
        buyContainer.appendChild(vehicleCard);
    });
}


function renderRentalVehicles() {
    if (!rentalContainer) return;
    
    rentalContainer.innerHTML = '';
    
    rentalVehicles.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.className = 'vehicle-card';
        vehicleCard.innerHTML = `
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
                <div class="vehicle-badge">Available</div>
            </div>
            <div class="vehicle-info">
                <h3>${vehicle.name}</h3>
                <p>${vehicle.description}</p>
                <div class="vehicle-specs">
                    <div class="spec-item">
                        <i class="fas fa-users"></i>
                        <span>${vehicle.specs.seats} Seats</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${vehicle.specs.transmission}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>${vehicle.specs.fuel}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-star"></i>
                        <span>${vehicle.specs.features}</span>
                    </div>
                </div>
                <div class="rental-price">
                    <div class="daily-rate">${vehicle.dailyRate}/day</div>
                    <div class="weekly-rate">${vehicle.weeklyRate}/week</div>
                </div>
                <div class="vehicle-actions">
                    <button class="btn" onclick="rentVehicle('${vehicle.name}')">Rent Now</button>
                    <button class="btn btn-secondary" onclick="inquiry('${vehicle.name}', 'rent')">Details</button>
                </div>
            </div>
        `;
        rentalContainer.appendChild(vehicleCard);
    });
}


function filterBuyVehicles() {
    const priceValue = priceFilter.value;
    const brandValue = brandFilter.value;
    const typeValue = typeFilter.value;
    const yearValue = yearFilter.value;

    const filtered = buyVehicles.filter(vehicle => {
  
        if (priceValue !== 'all') {
            const price = parseInt(vehicle.price.replace(/[^\d]/g, ''));
            if (priceValue === '0-5000000' && price > 5000000) return false;
            if (priceValue === '5000000-15000000' && (price <= 5000000 || price > 15000000)) return false;
            if (priceValue === '15000000-30000000' && (price <= 15000000 || price > 30000000)) return false;
            if (priceValue === '30000000+' && price <= 30000000) return false;
        }

      
        if (brandValue !== 'all' && vehicle.brand !== brandValue) return false;

       
        if (typeValue !== 'all' && vehicle.type !== typeValue) return false;

        
        if (yearValue !== 'all' && vehicle.year !== parseInt(yearValue)) return false;

        return true;
    });

    renderBuyVehicles(filtered);
}


function validateForm() {
    let isValid = true;
    const errors = {};


    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
        el.textContent = '';
    });


    const make = document.getElementById('vehicle-make');
    const model = document.getElementById('vehicle-model');
    const year = document.getElementById('vehicle-year');
    const mileage = document.getElementById('vehicle-mileage');
    const condition = document.getElementById('vehicle-condition');
    const email = document.getElementById('owner-email');
    const phone = document.getElementById('owner-phone');

    if (!make.value.trim()) {
        errors.make = 'Vehicle make is required';
        isValid = false;
    }

    if (!model.value.trim()) {
        errors.model = 'Vehicle model is required';
        isValid = false;
    }

    if (!year.value || year.value < 1990 || year.value > 2024) {
        errors.year = 'Please enter a valid year (1990-2024)';
        isValid = false;
    }

    if (!mileage.value || mileage.value < 0) {
        errors.mileage = 'Please enter valid mileage';
        isValid = false;
    }

    if (!condition.value) {
        errors.condition = 'Please select vehicle condition';
        isValid = false;
    }

    if (!email.value || !isValidEmail(email.value)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
    }

    if (!phone.value || !isValidPhone(phone.value)) {
        errors.phone = 'Please enter a valid phone number';
        isValid = false;
    }


    Object.keys(errors).forEach(key => {
        const errorElement = document.getElementById(`${key}-error`);
        if (errorElement) {
            errorElement.textContent = errors[key];
            errorElement.style.display = 'block';
        }
    });

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}


function inquiry(vehicleName, type) {
    showNotification(`Thank you for your interest in the ${vehicleName}! Our team will contact you shortly regarding ${type === 'buy' ? 'purchase' : 'rental'} details.`, 'success');
}

function scheduleTestDrive(vehicleName) {
    showNotification(`Test drive scheduled for ${vehicleName}! Our representative will contact you to confirm the appointment.`, 'success');
}

function rentVehicle(vehicleName) {
    showNotification(`Excellent choice! You've selected the ${vehicleName} for rental. Our rental team will contact you to complete the booking process.`, 'success');
}


function showNotification(message, type = 'info') {

    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}


if (priceFilter) {
    priceFilter.addEventListener('change', filterBuyVehicles);
}
if (brandFilter) {
    brandFilter.addEventListener('change', filterBuyVehicles);
}
if (typeFilter) {
    typeFilter.addEventListener('change', filterBuyVehicles);
}
if (yearFilter) {
    yearFilter.addEventListener('change', filterBuyVehicles);
}

if (resetFilters) {
    resetFilters.addEventListener('click', () => {
        priceFilter.value = 'all';
        brandFilter.value = 'all';
        typeFilter.value = 'all';
        yearFilter.value = 'all';
        renderBuyVehicles();
        showNotification('Filters have been reset', 'info');
    });
}


if (tradeForm) {
    tradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const formData = {
                make: document.getElementById('vehicle-make').value,
                model: document.getElementById('vehicle-model').value,
                year: document.getElementById('vehicle-year').value,
                mileage: document.getElementById('vehicle-mileage').value,
                condition: document.getElementById('vehicle-condition').value,
                features: document.getElementById('vehicle-features').value,
                email: document.getElementById('owner-email').value,
                phone: document.getElementById('owner-phone').value
            };

        
            showNotification(`Thank you for submitting your ${formData.year} ${formData.make} ${formData.model}! Our valuation team will contact you at ${formData.email} within 24 hours with a competitive offer.`, 'success');
            
       
            tradeForm.reset();
        }
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    renderBuyVehicles();
    renderRentalVehicles();
    

    setActiveNavigation();
    
    if (document.getElementById('sort-by')) {
        initializeBuyPage();
    }
    
    
    if (document.querySelector('.faq-question')) {
        initializeContactPage();
    }
   
    if (document.querySelector('.stats-section')) {
        initializeAboutPage();
    }
});

function setActiveNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


function initializeBuyPage() {
    const sortSelect = document.getElementById('sort-by');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            filterAndSortVehicles();
        });
    }


    const fuelFilter = document.getElementById('fuel-filter');
    if (fuelFilter) {
        fuelFilter.addEventListener('change', filterAndSortVehicles);
    }


    updateResultsCount(buyVehicles.length);
}

function filterAndSortVehicles() {
    const priceValue = document.getElementById('price-filter').value;
    const brandValue = document.getElementById('brand-filter').value;
    const typeValue = document.getElementById('type-filter').value;
    const yearValue = document.getElementById('year-filter').value;
    const fuelValue = document.getElementById('fuel-filter').value;
    const sortValue = document.getElementById('sort-by').value;

    let filtered = buyVehicles.filter(vehicle => {
        if (priceValue !== 'all') {
            const price = parseInt(vehicle.price.replace(/[^\d]/g, ''));
            if (priceValue === '0-5000000' && price > 5000000) return false;
            if (priceValue === '5000000-15000000' && (price <= 5000000 || price > 15000000)) return false;
            if (priceValue === '15000000-30000000' && (price <= 15000000 || price > 30000000)) return false;
            if (priceValue === '30000000+' && price <= 30000000) return false;
        }

        if (brandValue !== 'all' && vehicle.brand !== brandValue) return false;
        if (typeValue !== 'all' && vehicle.type !== typeValue) return false;
        if (yearValue !== 'all' && vehicle.year !== parseInt(yearValue)) return false;

        if (fuelValue !== 'all' && vehicle.specs.fuel.toLowerCase() !== fuelValue) return false;

        return true;
    });


    filtered = sortVehicles(filtered, sortValue);

    renderBuyVehicles(filtered);
    updateResultsCount(filtered.length);
}

function sortVehicles(vehicles, sortBy) {
    switch (sortBy) {
        case 'price-low':
            return vehicles.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
                const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
                return priceA - priceB;
            });
        case 'price-high':
            return vehicles.sort((a, b) => {
                const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
                const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
                return priceB - priceA;
            });
        case 'year-new':
            return vehicles.sort((a, b) => b.year - a.year);
        case 'year-old':
            return vehicles.sort((a, b) => a.year - b.year);
        default:
            return vehicles;
    }
}

function updateResultsCount(count) {
    const resultsElement = document.getElementById('results-count');
    if (resultsElement) {
        resultsElement.textContent = `Showing ${count} premium vehicle${count !== 1 ? 's' : ''}`;
    }
}

function initializeContactPage() {

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
      
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            icon.className = answer.style.display === 'block' ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
            
       
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== question.parentElement) {
                    item.querySelector('.faq-answer').style.display = 'none';
                    item.querySelector('.faq-question i').className = 'fas fa-chevron-down';
                }
            });
        });
    });

    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const errors = {};

 
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
                el.textContent = '';
            });


            const name = document.getElementById('contact-name');
            const email = document.getElementById('contact-email');
            const phone = document.getElementById('contact-phone');
            const subject = document.getElementById('contact-subject');
            const message = document.getElementById('contact-message');

            if (!name.value.trim()) {
                errors.name = 'Full name is required';
                isValid = false;
            }

            if (!email.value || !isValidEmail(email.value)) {
                errors.email = 'Please enter a valid email address';
                isValid = false;
            }

            if (!phone.value || !isValidPhone(phone.value)) {
                errors.phone = 'Please enter a valid phone number';
                isValid = false;
            }

            if (!subject.value) {
                errors.subject = 'Please select a subject';
                isValid = false;
            }

            if (!message.value.trim()) {
                errors.message = 'Please enter your message';
                isValid = false;
            }


            Object.keys(errors).forEach(key => {
                const errorElement = document.getElementById(`${key}-error`);
                if (errorElement) {
                    errorElement.textContent = errors[key];
                    errorElement.style.display = 'block';
                }
            });

            if (isValid) {
                showNotification('Thank you for your message! Our team will contact you within 24 hours.', 'success');
                this.reset();
            }
        });
    }
}


function initializeAboutPage() {

    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.textContent.includes('%') ? '%' : '';
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + suffix;
            }, 20);
        });
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}