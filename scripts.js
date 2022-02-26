gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    scroller: ".container"
  });

gsap.to(".second", {
    scrollTrigger: {
      trigger: ".second",
      toggleActions: "restart pause",
    }, 
    duration: 1, 
    backgroundColor: "#D8BFD8", 
    ease: "none"
  });
gsap.to(".second p", {
    scrollTrigger: ".orange", 
    duration: 1, 
    y:70
  });

gsap.to(".third", {
    scrollTrigger: {
      trigger: ".third",
      toggleActions: "restart pause",
    }, 
    duration: 1, 
    backgroundColor: "#C0C0C0", 
    ease: "none"
  });

gsap.to(".fourth", {
    scrollTrigger: {
        trigger: ".fourth",
        toggleActions: "restart pause",
      }, 
      duration: 1, 
      backgroundColor: "#FFFFE0", 
      ease: "none"
});

