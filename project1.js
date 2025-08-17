function cirleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      duration: 2,
      ease: Expo.easeInOut,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      delay: -1,
    });
}

function circleFlatter() {
  var xscale = 1;
  var yscale = 1;
  var xprev = 0;
  var yprev = 0;
  window.addEventListener("mousemove", function (dets) {
    var xdiff = dets.clientX - xprev;

    var ydiff = dets.client - yprev;
    xprev = dets.clientX;
    yprev = dets.clientY;

    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

    cirleMouseFollower(xscale, yscale);
    console.log(xdiff, ydiff);
  });
}

circleFlatter();
firstPageAnim();
cirleMouseFollower();
