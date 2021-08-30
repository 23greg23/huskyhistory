// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// You can use a ScrollTrigger in a tween or timeline
gsap.to(".b", {
  x: 400,
  rotation: 360,
  scrollTrigger: {
    trigger: ".b",
    start: "top center",
    end: "top 100px",
    scrub: true,
    markers: true,
    id: "scrub"
  }
});


// Or you can attach a tween or timeline to a ScrollTrigger later
const anim = gsap.to(".c", {
  x: 400,
  rotation: 360,
  duration: 3
});

ScrollTrigger.create({
  trigger: ".c",
  animation: anim,
  // Uncomment these to see how they affect the ScrollTrigger
  // markers: true,
  // start: "top center",
  // end: "top 100px",
  // toggleClass: "active",
  // pin: true,
  // scrub: 1,
  // onUpdate: self => {
  //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  // }
});