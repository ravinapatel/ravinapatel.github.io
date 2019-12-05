const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('nav-links li');

    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    //Animate Links
    navLinks.forEach((link, index) => {
        console.log(index);
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        console.log(index/7);
    });
}

const portSlide = () => {
    const csimages = document.querySelector('.cs-row');
    const designimages = document.querySelector('.illustration-row');
    const designcontainer = document.querySelector('.design');
    const cs = document.querySelector('.cs-link');
    const design = document.querySelector('.design-link');
    const line = document.querySelector('.line');

    /*Moves to design portfolio*/
    design.addEventListener('click',()=>{
        design.classList.toggle('active');
        cs.classList.toggle('inactive');

        csimages.classList.toggle('cs-inactive');
        csimages.style.animation = `csLeft 1s`;

        line.style.animation = `lineRight 1s`;
        line.classList.toggle('line-active');

        designimages.classList.toggle('design-active');
        designimages.style.animation = `designLeft 1s`;

        designcontainer.classList.toggle('design-active');
        designcontainer.style.animation = `designLeft 1s`;

    });

    /*Moves to cs portfolio*/
    cs.addEventListener('click',()=>{
        // cs.classList.toggle('cs-link-active');
        // design.classList.toggle('design-link-inactive');
        design.classList.toggle('active');
        cs.classList.toggle('inactive');

        csimages.classList.toggle('cs-inactive');
        csimages.style.animation = `csRight 1s`;

        line.style.animation = `lineLeft 1s`;
        line.classList.toggle('line-active');

        designimages.classList.toggle('design-active');
        designimages.style.animation = `designRight 1s`;

        designcontainer.classList.toggle('design-active');
        designcontainer.style.animation = `designRight 1s`;

    });


    // cs.addEventListener('click',()=>{
    //     if (csimages.className == 'cs-inactive'){
    //         csimages.classList.toggle('cs-inactive');
    //         csimages.style.animation = `csRight 1s`;
    //
    //         line.style.animation = `lineLeft 1s`;
    //         line.classList.toggle('line-active');
    //         // line.style.left = document.getElementById('cs-link').style.left;
    //
    //         designimages.classList.toggle('design-active');
    //         designimages.style.animation = `designRight 1s`;
    //
    //         designcontainer.classList.toggle('design-active');
    //         designcontainer.style.animation = `designRight 1s`;
    //     }
    //     else {
    //         document.write(csimage.className);
    //     }
    // });


    /*when cs is active, move cs-images and design images left*/
}

navSlide();
portSlide();
