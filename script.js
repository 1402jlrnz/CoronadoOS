document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const osLinks = document.querySelectorAll('.os-link');
    const activityLinks = document.querySelectorAll('.activity-link');
    const caseLinks = document.querySelectorAll('.case-link');
    const sections = document.querySelectorAll('.content-section');
    const osSections = document.querySelectorAll('.os-section');
    const activitySections = document.querySelectorAll('.activity-section');
    const caseSections = document.querySelectorAll('.case-section');

    // Helper functions
    function hideAllOSSections() {
        osSections.forEach(section => section.classList.remove('active'));
    }
    function hideAllActivitySections() {
        activitySections.forEach(section => section.classList.remove('active'));
    }
    function hideAllCaseSections() {
        caseSections.forEach(section => section.classList.remove('active'));
    }

    // Make dropdown trigger spans non-clickable (no navigation)
    document.querySelectorAll('.dropdown > .nav-link').forEach(trigger => {
        trigger.style.cursor = 'default';
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // Handle main nav link clicks (HOME and ABOUT ME only)
    navLinks.forEach(link => {
        if (!link.hasAttribute('href')) return;

        link.addEventListener('click', function(e) {
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            hideAllOSSections();
            hideAllActivitySections();
            hideAllCaseSections();

            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Handle OS submenu link clicks
    osLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            sections.forEach(s => s.classList.remove('active'));
            hideAllOSSections();
            hideAllActivitySections();
            hideAllCaseSections();
            navLinks.forEach(l => l.classList.remove('active'));

            const targetId = this.getAttribute('href').substring(1);
            const targetOSSection = document.getElementById(targetId);
            if (targetOSSection) {
                targetOSSection.classList.add('active');
                document.getElementById('windows-installation').classList.add('active');
            }
        });
    });

    // Handle activity submenu link clicks
    activityLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            sections.forEach(s => s.classList.remove('active'));
            hideAllOSSections();
            hideAllActivitySections();
            hideAllCaseSections();
            navLinks.forEach(l => l.classList.remove('active'));

            const targetId = this.getAttribute('href').substring(1);
            const targetActivitySection = document.getElementById(targetId);
            if (targetActivitySection) {
                targetActivitySection.classList.add('active');
                document.getElementById('laboratory-activities').classList.add('active');
            }
        });
    });

    // Handle case submenu link clicks
    caseLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            sections.forEach(s => s.classList.remove('active'));
            hideAllOSSections();
            hideAllActivitySections();
            hideAllCaseSections();
            navLinks.forEach(l => l.classList.remove('active'));

            const targetId = this.getAttribute('href').substring(1);
            const targetCaseSection = document.getElementById(targetId);
            if (targetCaseSection) {
                targetCaseSection.classList.add('active');
                document.getElementById('case-study').classList.add('active');
            }
        });
    });

    // Default: show home
    const homeLink = document.querySelector('a[href="#home"]');
    const homeSection = document.getElementById('home');
    if (homeLink && homeSection) {
        homeLink.classList.add('active');
        homeSection.classList.add('active');
    }
});