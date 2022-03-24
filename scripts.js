gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({ //viewport
    scroller: ".container"
  });

gsap.to(".second", {
    scrollTrigger: {
      trigger: ".second",
      toggleActions: "restart pause", //restart when it enters the viewport , pause when it leaves
    }, 
    duration: 1, 
    backgroundColor: "#D8BFD8", 
    ease: "none" //just linear scroll
  });
gsap.to(".second p", { //text moves(goes down)
    scrollTrigger: ".second", 
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

