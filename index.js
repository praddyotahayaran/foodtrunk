const navslide = () => {
    const burgerEl = document.querySelector('.burger');
    const navEl = document.querySelector('.nav-list');
    const navListEl = document.querySelectorAll('.nav-list li')

    burgerEl.addEventListener('click', () => {
        // Toggle Nav
        navEl.classList.toggle('nav-active');
        
        // Animate Link
        navListEl.forEach((list, index) => {
            if (list.style.animation) {
                list.style.animation = ''
                
            }else {
                list.style.animation = `navListFade 0.5s ease forwards ${index / 7 + .4}s`;
            }
        })

        // Burger Animation 
        burgerEl.classList.toggle('toggle')
    })
}

navslide()
