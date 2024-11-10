const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        autoplay:{
            delay:3000,
        },
        loop:true
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
function followMouse() {
    let video_container = document.querySelector('#playmouse');
    let playbtn = document.querySelector('#mouse');
    let video = document.querySelector('#mainvideo'); // Select the video element

    // Show the button on mouse enter
    video_container.addEventListener('mouseenter', function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 0.8,
        });
    });

    // Hide the button on mouse leave
    video_container.addEventListener('mouseleave', function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });
    });

    // Follow the mouse movement
    document.addEventListener('mousemove', function(dets) {
        gsap.to(playbtn, {
            left: dets.x,
            top: dets.y,
            duration: 0.1 // Adding a duration for smooth movement
        });
    });

    // Toggle video mute on click
    video_container.addEventListener('click', function() {
        video.muted = !video.muted;
        if (!video.muted) {
            playbtn.innerText = 'Mute';
        } else {
            playbtn.innerText = 'Unmute';
        }
    });
}
var crsr = document.querySelector("#cursor");
var blr_crsr = document.querySelector("#blur-cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blr_crsr.style.left = dets.x -100 +"px"
    blr_crsr.style.top = dets.y-100 +"px"
})
var all_nav_elems = document.querySelectorAll("#nav h4");
all_nav_elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale =3;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
        
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale =1;
        crsr.style.border = "1px solid #95c11e";
        crsr.style.backgroundColor = "#95c11e";
    })
})


followMouse();
swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()