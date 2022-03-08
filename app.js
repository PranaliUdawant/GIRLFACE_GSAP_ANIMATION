gsap.from(".mouth1", {
    y: 9,
    duration: 2,
    repeat: -1,
    yoyo: true
})
gsap.to(".lseye , .rseye", {
    scale: 0.5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    transformOrigin: "50% 50%"
})
gsap.from(".main", {
    y: -500,
    duration: 2,
    ease: "bounce.out"
})