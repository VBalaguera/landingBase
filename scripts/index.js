 //this is the Downwards-menu script

function toggleDownwardsMenu() {
    document.getElementById('downwards-menu').classList.toggle('active'); 
}
/*
//this is the scrolling script

function smoothScroll(target, duration) { //where to, how long till we get there
    var target = document.querySelector(target); 
    console.log(target);

    var targetPosition = target.getBoundingClientRect().top; 
    console.log(targetPosition);

    var startPosition = windows.pageYOffset; 
    console.log(startPosition); 

    var distance = targetPosition - startPosition; 
    console.log(distance);

    var startTime = null; 

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime; 
        var timeElapsed = currentTime - startTime; 

        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run); //scrollTo(horizontally, vertically)
        if(timeElapsed < duration) requestAnimationFrame(animation); 
        
    } //this will smooth the whole animation, in theory

    function ease(t, b, c, d) { // https://www.gizma.com/easing/
        t /= d / 2; 
        if (t < 1) return c / 2 * t * t + b; 
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
         
    } //this will EASE the transition

    requestAnimationFrame(animation); 
}

var section1link = document.querySelector('.section1link'); //content between parenthesis may need to be changed to section1link

section1link.addEventListener('click', function(){
    smoothScroll('section1link', 1000); 
}) */





/*

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame 

*/  


const makeNavLinksSmooth = () => { //smoothCrolling
    const navLinks = document.querySelectorAll('.navbar__link'); 

    for(let n in navLinks) {
        if(navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault(); 
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    behavior: 'smooth'
                });
            })
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('main__content');

    window.onscroll = () => {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop; 

        for(let s in sections) {
            if(sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
                const id = sections[s].id;
                document.querySelector('.navbar__link--active').classList.remove('navbar__link--active');

                document.querySelector('a[href*=${id}]').parentNode.classList.add('navbar__link--active'); 
            }
        }
    }
}

// function call for makeNavLinksSmoth

makeNavLinksSmooth(); 

//function call for scrollspy

spyScrolling(); 



//onclick function:

/* function submitFunction() {
    document.getElementById('section3-up-mail-submit').style.color = var(--section3-color);
}

submitFunction();  */


//theme changing script 

var checkbox = document.querySelector('input[name=theme]');

// Apply the cached theme on reload; 



const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        /* document.documentElement.setAttribute('data-theme', 'light') */
        body.classList.replace('dark', 'light'); 
        localStorage.setItem('theme', 'light');
    } else {
        trans()
        /* document.documentElement.setAttribute('data-theme', 'dark') */
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
});

let trans = () => {
    document.documentElement.classList.add('transition'); 
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 500)
}

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

// changes implemented from here: 



/* darkButton.onclick = () => {
/*     body.classList.remove('dark');
    body.classList.add('light');  
    body.classList.replace('dark', 'light'); 
}

lightButton.onclick = () => {
    body.classList.replace('light', 'dark');
} */


