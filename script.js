document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const osLinks = document.querySelectorAll('.os-link');
    const activityLinks = document.querySelectorAll('.activity-link');
    const caseLinks = document.querySelectorAll('.case-link');
    const sections = document.querySelectorAll('.content-section');
    const osSections = document.querySelectorAll('.os-section');
    const activitySections = document.querySelectorAll('.activity-section');
    const caseSections = document.querySelectorAll('.case-section');

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
                
                // Update nav links to remove active from all links (Windows Installation is not clickable)
                navLinks.forEach(l => l.classList.remove('active'));
            }
        });
    });

    // Handle activity link clicks in dropdown
    activityLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all activity sections
            hideAllActivitySections();
            
            // Show the selected activity section
            const targetId = this.getAttribute('href').substring(1);
            const targetActivitySection = document.getElementById(targetId);
            if (targetActivitySection) {
                targetActivitySection.classList.add('active');
                
                // Ensure Laboratory Activities section is active
                const labSection = document.getElementById('laboratory-activities');
                if (labSection) {
                    labSection.classList.add('active');
                }
                
                // Update nav links to remove active from all links (Laboratory Activities is not clickable)
                navLinks.forEach(l => l.classList.remove('active'));
            }
        });
    });

    // Handle case link clicks in dropdown
    caseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide all case sections
            hideAllCaseSections();
            
            // Show the selected case section
            const targetId = this.getAttribute('href').substring(1);
            const targetCaseSection = document.getElementById(targetId);
            if (targetCaseSection) {
                targetCaseSection.classList.add('active');
                
                // Ensure Case Study section is active
                const caseSection = document.getElementById('case-study');
                if (caseSection) {
                    caseSection.classList.add('active');
                }
                
                // Update nav links to remove active from all links (Case Study is not clickable)
                navLinks.forEach(l => l.classList.remove('active'));
            }
        });
    });

    // Helper function to hide all OS sections
    function hideAllOSSections() {
        osSections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Helper function to hide all activity sections
    function hideAllActivitySections() {
        activitySections.forEach(section => {
            section.classList.remove('active');
        });
    }

    // Helper function to hide all case sections
    function hideAllCaseSections() {
        caseSections.forEach(section => {
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
