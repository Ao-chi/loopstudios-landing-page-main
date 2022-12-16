# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![](./screenshot/desktop.png.jpg)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   SCSS
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   Vanilla JS

### What I learned

I tried to dynamically add the images in the creations section. In this project I learned how destructure objects and arrays. It was challenging for me to switch the images for mobile and desktop version and I know there's more better solution on what I did. Below is how I switch the images on for mobile and desktop version.

Also I learned that scroll eventlistener won't fire if the body ihas an overflow-x: hidden, either you remove it or make the body height into min-height: 100%.

```js
function createGallery() {
    data.forEach(({ id, text }) => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "creations__image";
        imgContainer.id = "creationsImg";

        imgContainer.innerHTML = `
                <div class="creations__overlay"></div>
                <div class="creations__imgContainer">
                    <img class="creations__img" id="img" src="/images/desktop/image-desktop-${id}.jpg" alt="image-${id}" />
                </div>
                <div class="creations__text" id="cardTitle">
                <h2>${text}</h2></div>
                `;

        cardContainer.appendChild(imgContainer);
    });
}

function mobile() {
    data.forEach(({ id, text }) => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "creations__image";
        imgContainer.id = "creationsImg";

        imgContainer.innerHTML = `
                <div class="creations__overlay"></div>
                <div class="creations__imgContainer">
                    <img class="creations__img" id="img" src="/images/mobile/image-mobile-${id}.jpg" alt="image-${id}" />
                </div>
                <div class="creations__text" id="cardTitle">
                <h2>${text}</h2></div>
                `;

        cardContainer.appendChild(imgContainer);
    });
}

// function to remove gallery
function removeGallery() {
    const item = document.querySelectorAll("#creationsImg");
    for (let i = 0; i < item.length; i++) {
        const e = item[i];
        cardContainer.removeChild(e);
    }
}

//displays mobile and desktop versions of gallery if condition matches
const mql = window.matchMedia("(min-width: 992px)");
var containersRemoved = false;

mql.addEventListener("change", (e) => {
    if (e.matches) {
        removeGallery();
        containersRemoved = true;
        if (containersRemoved) {
            createGallery();
            containersRemoved = false;
        }
    } else {
        if (!containersRemoved) {
            removeGallery();
            mobile();
            containersRemoved = true;
        }
    }
});
```

### Continued development

I will continue to practice more using vanilla JS since it's a bit hard for me when I transition on React js on my previous challenges. I still need to learn and work on my vanilla js coding.

### Useful resources

-   (https://stackoverflow.com/questions/20229204/how-to-append-remove-elements-on-resize-without-duplicating-them) - This helped me on not duplicating my appendChild whenever the window resize is fired.

## Author

-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Ao-chi)
