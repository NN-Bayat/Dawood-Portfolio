const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navBar = document.querySelector("header nav");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

const activePage = () => {
    const header = document.querySelector("header");
    const barsBox = document.querySelector(".bars_box");

    header.classList.remove("active");
    setTimeout(() => {
        header.classList.add("active");
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    barsBox.classList.remove("active");
    setTimeout(() => {
        barsBox.classList.add("active");
    }, 1100);

    sections.forEach(section => {
        section.classList.remove("active");
    });

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');
};

navLinks.forEach((link, inx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains("active")) {
            activePage();

            link.classList.add("active");

            setTimeout(() => {
                sections[inx].classList.add("active")
            }, 1100);
        };
    });
});

logoLink.addEventListener("click", () => {
    if (!navLinks[0].classList.contains("active")) {
        activePage();

        navLinks[0].classList.add("active");

        setTimeout(() => {
            sections[0].classList.add("active")
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll(".resume_btn");

resumeBtns.forEach((btn, inx) => {
    btn.addEventListener("click", () => {
        const resumeDetails = document.querySelectorAll(".resume_detail");

        resumeBtns.forEach(btn => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[inx].classList.add("active");
    });
});

const arrowRight = document.querySelector(".portfolio_box .navigation .arrow_right");
const arrowLeft = document.querySelector(".portfolio_box .navigation .arrow_left");

let index = 0;

const activePortolio = () => {
    const imgSlide = document.querySelector(".portfolio_carousel .img_slide");
    const porfolioDetails = document.querySelectorAll(".portfolio_detail");

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    porfolioDetails.forEach(detail => {
        detail.classList.remove("active");
    });
    porfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove("disabled");
    } else {
        index = 5;
        arrowRight.classList.add("disabled");
    }

    activePortolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove("disabled");
    } else {
        index = 0;
        arrowLeft.classList.add("disabled");
    }

    activePortolio();
});

