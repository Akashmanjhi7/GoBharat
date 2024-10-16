
function responsivenavbar(){

    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.getElementById('close-menu-button');
    
    // Toggle mobile menu visibility when the button is clicked
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });
    
    // Close mobile menu when the close button is clicked
    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });
    
    // Close mobile menu when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);
        const isClickOnCloseButton = closeMenuButton.contains(event.target);
    
        if (!isClickInsideMenu && !isClickOnButton && !isClickOnCloseButton && !mobileMenu.classList.contains('translate-x-full')) {
            mobileMenu.classList.add('translate-x-full');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) { // 768px is the breakpoint for md: in Tailwind
            mobileMenu.classList.add('translate-x-full');
        }
    });
}

function navbars() {
    const navbar = document.querySelector('#navbar');
    if (navbar) {
        navbar.innerHTML = `   <nav id="navbar" class="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="flex justify-between items-center  w-full ">
                    <div>
                        <!-- Website Logo -->
                        <a href="#" class="flex items-center py-2  px-2">
                            <img src="images/logo.jpg" alt="Logo" class="sm:h-16  h-10 object-cover">
                        </a>
                    </div>
                    <!-- Primary Navbar items -->
                    <div class="hidden md:flex items-center gap-6">
                        <a href="index.html" class="py-4  text-black font-semibold transition duration-300 relative group">
                            <span>Home</span>
                            <span class="absolute left-0 bottom-2 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="about.html" class="py-4  text-black font-semibold transition duration-300 relative group">
                            <span>About</span>
                            <span class="absolute left-0 bottom-2 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="saftey.html" class="py-4  text-black font-semibold transition duration-300 relative group">
                            <span>Saftey</span>
                            <span class="absolute left-0 bottom-2 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="careers.html" class="py-4  text-black font-semibold transition duration-300 relative group">
                            <span>Careers</span>
                            <span class="absolute left-0 bottom-2 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <a href="contact.html" class="py-4  text-black font-semibold transition duration-300 relative group">
                            <span>Contact Us</span>
                            <span class="absolute left-0 bottom-2 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        <div class="px-1"></div>
                        <button class="py-2  px-4 bg-black text-white font-semibold rounded-[30px_30px_5px_30px] transition duration-300">
                            Download App
                        </button>
                    </div>
                </div>
                
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                 <a href="#" class="text-nowrap text-sm pr-4 font-semibold">Download App</a>
                    
                    <button class="outline-none mobile-menu-button">
                        <svg class="w-6 h-6 text-gray-500 hover:text-black"
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- mobile menu -->
        <div class="mobile-menu bg-purple-400 h-screen w-full fixed top-0 right-0 transform translate-x-full transition-transform duration-300 ease-in-out">
            <button class="absolute top-4 right-4 text-black hover:text-gray-600 transition duration-300" id="close-menu-button">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul class="text-[8vh] flex flex-col justify-center items-center py-4 h-full font-semibold">
                <li><a href="/" class="block px-2 py-3 transition duration-300 relative group">
                    <span>Home</span>
                    <span class="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="about.html" class="block px-2 py-4 transition duration-300 relative group">
                    <span>About</span>
                    <span class="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="saftey.html" class="block px-2 py-4 transition duration-300 relative group">
                    <span>Saftey</span>
                    <span class="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="careers.html" class="block px-2 py-4 transition duration-300 relative group">
                    <span>Careers</span>
                    <span class="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a></li>
                <li><a href="contact.html" class="block px-2 py-4 transition duration-300 relative group">
                    <span>Contact Us</span>
                    <span class="absolute left-0 bottom-0 w-0 h-[3px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a></li>
            </ul>
        </div>
    </nav>`;
    } else {
        console.error('Navbar element not found');
    }
}


function footer(){
    const footer = document.querySelector('#footer');
    if (footer) {
        footer.innerHTML = `<footer class="bg-black text-white py-8">
    <div class="container mx-auto flex flex-wrap justify-evenly">
        <div class="w-full sm:w-1/2 md:w-1/5 mb-4">
            <h3 class="text-lg font-semibold mb-4">Download Here</h3>
            <div class="flex space-x-4">
                <a href="#" class="block">
                    <img src="images/svg/play.svg" alt="Get it on Google Play" class="h-10 w-auto">
                </a>
                <a href="#" class="block">
                    <img src="images/svg/appstore.png" alt="Download on the App Store" class="h-10 w-auto">
                </a>
            </div>
        </div>
        <!-- <div class="w-full sm:w-1/2 md:w-1/5 mb-4">
            <h3 class="text-lg font-semibold mb-4">Captain app</h3>
            <div class="flex space-x-4">
                <a href="#" class="block">
                    <img src="path/to/google-play-badge.png" alt="Get it on Google Play" class="h-10 w-auto">
                </a>
            </div>
        </div> -->
        <div class="w-full sm:w-1/2 md:w-1/5 mb-4">
            <h3 class="text-lg font-semibold mb-4">Links</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-gray-300">Home</a></li>
                <li><a href="#" class="hover:text-gray-300">About</a></li>
                <li><a href="#" class="hover:text-gray-300">Safety</a></li>
                <li><a href="#" class="hover:text-gray-300">Careers</a></li>
                <li><a href="#" class="hover:text-gray-300">Contact Us</a></li>
            </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/5 mb-4">
            <h3 class="text-lg font-semibold mb-4">Captain</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-gray-300">Sign Up</a></li>
                <li><a href="#" class="hover:text-gray-300">Login</a></li>
                <li><a href="#" class="hover:text-gray-300">Offers</a></li>
                <li><a href="#" class="hover:text-gray-300">Terms and Conditions</a></li>
                <li><a href="#" class="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/5 mb-4">
            <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
            <div class="flex space-x-4">
                <a href="#" class="block">
                    <img src="icons/facebook (1).png" alt="Facebook" class="h-10 w-auto">
                </a>
               
                <a href="#" class="block">
                    <img src="icons/linkedin (1).png" alt="LinkedIn" class="h-10 w-auto">
                </a>
                <a href="#" class="block">
                    <img src="icons/instagram (2).png" alt="Instagram" class="h-10 w-auto">
                </a>
            </div>
        </div>
    </div>
</footer>`;
    } else {
        console.error('Footer element not found');
    }
}
function captainAndCustomer() {
    const customersBtn = document.getElementById('customersBtn');
    const captainsBtn = document.getElementById('captainsBtn');
    const customersContent = document.getElementById('customersContent');
    const captainsContent = document.getElementById('captainsContent');

    function toggleContent(showContent, hideContent, activeBtn, inactiveBtn) {
        showContent.classList.remove('hidden');
        hideContent.classList.add('hidden');
        activeBtn.classList.add('bg-purple-400');
        activeBtn.classList.remove('border', 'border-zinc-400');
        inactiveBtn.classList.remove('bg-purple-400');
        inactiveBtn.classList.add('border', 'border-zinc-400');
    }

    customersBtn.addEventListener('click', () => 
        toggleContent(customersContent, captainsContent, customersBtn, captainsBtn)
    );

    captainsBtn.addEventListener('click', () => 
        toggleContent(captainsContent, customersContent, captainsBtn, customersBtn)
    );
}

// Wait for the DOM to be fully loaded before executing the function
document.addEventListener('DOMContentLoaded', () => {
    navbars();
    responsivenavbar();
    footer();
    captainAndCustomer();
});
