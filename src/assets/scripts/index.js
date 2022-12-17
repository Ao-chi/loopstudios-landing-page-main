const cardContainer = document.querySelector(".creations__cards");
const navClose = document.querySelector("#navClose");
const navOpen = document.querySelector("#navOpen");
const mobileNav = document.querySelector("#navMobile");
const fadeRight = document.querySelector(".nav-mobile .navigation__list");

// image gallery data
const data = [
    {
        id: 1,
        text: "Deep Earth",
    },
    {
        id: 2,
        text: "Night Arcade",
    },
    {
        id: 3,
        text: "Soccer Team VR",
    },
    {
        id: 4,
        text: "The grid",
    },
    {
        id: 5,
        text: "From up above VR",
    },
    {
        id: 6,
        text: "Pocket borealis",
    },
    {
        id: 7,
        text: "The curiosity",
    },
    {
        id: 8,
        text: "Make it fisheye",
    },
];

window.addEventListener("load", () => {
    let a = window.innerWidth;
    if (a <= 992) {
        mobile();
    } else if (a >= 992) {
        createGallery();
    }
});

function openNav(e) {
    e.preventDefault();
    if (!mobileNav.classList.contains("show")) {
        mobileNav.classList.toggle("show");
        // document.body.classList.add("fixed");
        fadeRight.classList.add("fade-right");
    }
}

function closeNav(e) {
    e.preventDefault();
    if (mobileNav.classList.contains("show")) {
        mobileNav.classList.toggle("show");
        fadeRight.classList.remove("fade-right");

        //document.body.classList.remove("fixed");
    }
}
navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);

function createGallery() {
    data.forEach(({ id, text }) => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "creations__image";
        imgContainer.id = `creationsImg-${id}`;

        imgContainer.innerHTML = `
                <div class="creations__overlay"></div>
                <div class="creations__imgContainer">
                    <img class="creations__img" id="img-${id}" src="/images/desktop/image-desktop-${id}.jpg" alt="image-${id}" />
                </div>
                <div class="creations__text" id="cardTitle-${id}">
                <h2>${text}</h2></div>
                `;

        cardContainer.appendChild(imgContainer);
    });
}

function mobile() {
    data.forEach(({ id, text }) => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "creations__image";
        imgContainer.id = `creationsImg-${id}`;

        imgContainer.innerHTML = `
                <div class="creations__overlay"></div>
                <div class="creations__imgContainer">
                    <img class="creations__img" id="img-${id}" src="/images/mobile/image-mobile-${id}.jpg" alt="image-${id}" />
                </div>
                <div class="creations__text" id="cardTitle-${id}">
                <h2>${text}</h2></div>
                `;

        cardContainer.appendChild(imgContainer);
    });
}

// function to remove gallery
function removeGallery() {
    const item = document.querySelectorAll(".creations__image");
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

const sectionItem = document.querySelectorAll("section");

// document.body.addEventListener("scroll", () => {
//     let bodyPos = document.body.scrollTop;
//     let bodyHeight = window.innerHeight;
//     let bodyBotPos = bodyPos + bodyHeight;

//     //console.log(bodyHeight);
//     for (let i = 0; i < sectionItem.length; i++) {
//         const a = sectionItem[i];
//         let elHeight = a.offsetHeight;
//         let elTopPos = a.offsetTop;
//         let botPos = elHeight + elTopPos;
//         if (botPos <= bodyBotPos) {
//             // console.log("hey");
//             a.classList.add("show");
//         } else {
//             a.classList.remove("show");
//         }
//     }
// });

// fade in animation
// window.addEventListener("scroll", revealContent);

function revealContent() {
    for (let i = 0; i < sectionItem.length; i++) {
        const a = sectionItem[i];
        let bodyHeight = window.innerHeight;
        let reveal = a.getBoundingClientRect().top;
        let revealPoint = 200;

        if (reveal <= bodyHeight - revealPoint) {
            a.classList.add("show");
        } else {
            a.classList.remove("show");
        }
        // console.log(reveal);
    }
}

const navFixed = document.querySelector("#heroHeader");
let lastKnownScrollPosition = 0;
let ticking = false;

function revealNav(scrollPos) {
    if (window.scrollY >= 100) {
        navFixed.classList.add("sticky");
    } else {
        navFixed.classList.remove("sticky");
    }
}

window.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    // console.log(lastKnownScrollPosition);
    if (!ticking) {
        window.requestAnimationFrame(() => {
            revealNav(lastKnownScrollPosition);
            revealContent();
            ticking = false;
        });

        ticking = true;
    }
});
