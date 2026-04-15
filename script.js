document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const osLinks = document.querySelectorAll('.os-link');
    const sections = document.querySelectorAll('.content-section');
    const osSections = document.querySelectorAll('.os-section');

    // Handle main navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // If clicking Windows Installation, show the first OS section by default
                if (targetId === 'windows-installation') {
                    hideAllOSSections();
                    const firstOSSection = document.querySelector('.os-section');
                    if (firstOSSection) {
                        firstOSSection.classList.add('active');
                    }
                }
            }
        });
    });

    // Handle OS link clicks in dropdown
    osLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all OS sections
            hideAllOSSections();
            
            // Show the selected OS section
            const targetId = this.getAttribute('href').substring(1);
            const targetOSSection = document.getElementById(targetId);
            if (targetOSSection) {
                targetOSSection.classList.add('active');
                
                // Ensure Windows Installation section is active
                const windowsSection = document.getElementById('windows-installation');
                if (windowsSection) {
                    windowsSection.classList.add('active');
                }
                
                // Update nav links to show Windows Installation as active
                navLinks.forEach(l => l.classList.remove('active'));
                const windowsLink = document.querySelector('a[href="#windows-installation"]');
                if (windowsLink) {
                    windowsLink.classList.add('active');
                }
            }
        });
    });

    // Helper function to hide all OS sections
    function hideAllOSSections() {
        osSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Set home as default active section
    const homeLink = document.querySelector('a[href="#home"]');
    const homeSection = document.getElementById('home');
    
    if (homeLink && homeSection) {
        homeLink.classList.add('active');
        homeSection.classList.add('active');
    }
});
