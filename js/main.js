// event on scroll
function scrollEvents() {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav__link');
    const menu = document.querySelector('.nav__list');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    links.forEach((link) => {
                        const linkHref = link.getAttribute('href').replace('#', '');

                        if (linkHref === entry.target.id) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        },
        {
            //content display value at which the link becomes active
            threshold: 0.8,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav__link')) {
            e.preventDefault();

            const sectionId = e.target.getAttribute('href').replace('#', '');

            window.scrollTo({
                top: document.getElementById(sectionId).offsetTop,
                behavior: 'smooth',
            });
        }
    });
}
scrollEvents();

//animate progress bar
function animateProgressBar() {
    const progress = document.querySelector('.progress__bar');

    //top scroll value
    const scrollValue = document.documentElement.scrollTop;
    //heigth of the whole document
    const documentHeight = document.documentElement.scrollHeight;
    //height of user's screen
    const viewportHeight = document.documentElement.clientHeight;
    //document height - user's screen height
    const height = documentHeight - viewportHeight;
    //% of scroll
    const scrollPercent = (scrollValue / height) * 100;
    //progress bar styles
    progress.style.width = scrollPercent + '%';
}
window.addEventListener('scroll', animateProgressBar);
