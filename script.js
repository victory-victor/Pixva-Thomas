// Initialize Lenis
const lenis = new Lenis({
    duration: 1.2,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('.elem').forEach(elem =>{
    let tl = gsap.timeline()
    let image = elem.querySelector('img')
    let xTransform = gsap.utils.random(-100, 100)
    tl
    .set(image, {
        transformOrigin: `${xTransform <= 0 ? 0 : '100%'}`,
    },"start")
    .to(image,{
        scale: 0,
        ease: 'none',
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
            trigger: image,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    },"start")
    .to(elem,{
        xPercent: xTransform,
        ease: 'none',
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
            trigger: image,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        }
    })
})