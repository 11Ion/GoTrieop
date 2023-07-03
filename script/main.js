var button = document.getElementById('scrollTop');

function scrollTop(){
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}
window.onscroll = function(){
    if(window.pageYOffset > 600){
        button.style.display = "flex";
    }
    else{
        button.style.display = "none";
    }
}
button.addEventListener('click', () => {
    scrollTop()
})
document.getElementById("burger").addEventListener("click", function() {
    var mobileNav = document.querySelector(".mobile_nav");
    mobileNav.style.display = "flex";
    mobileNav.classList.remove("animLeft");
    mobileNav.classList.add("animRight");
});

document.getElementById("close_menu").addEventListener("click", function() {
    var mobileNav = document.querySelector(".mobile_nav");
    mobileNav.classList.remove("animRight");
    mobileNav.classList.add("animLeft");

    setTimeout(function() {
        mobileNav.style.display = "none";
    }, 500);
});

function hideMenuOnResize() {
    var mobileNav = document.querySelector(".mobile_nav");
    if (window.innerWidth >= 1024) {
        mobileNav.style.display = "none";
    }
}

document.addEventListener("click", function(event) {
    var mobileNav = document.querySelector(".mobile_nav");
    var targetElement = event.target;

    if (!mobileNav.contains(targetElement) && targetElement.id !== "burger") {
        mobileNav.classList.remove("animRight");
        mobileNav.classList.add("animLeft");

        setTimeout(function() {
            mobileNav.style.display = "none";
        }, 500);
    }
});

window.addEventListener("resize", hideMenuOnResize);
window.addEventListener("load", hideMenuOnResize);

