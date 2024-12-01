var tl = gsap.timeline();

tl.from(".open1_txt", {
    opacity:0,
    delay: .3,
    duration:.5
})

tl.to(".open1", {
    y:-700,
    duration:1,
    delay:.1
})






tl.from(".main_txt, .main_txt2", {
    x:-200,
    opacity:0,
    duration: .5
})