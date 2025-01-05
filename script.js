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


