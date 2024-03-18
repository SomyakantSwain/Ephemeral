// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });
gsap.from(".nlink", {
  stagger: 0.2,
  z: -70,
  duration: 4,
  ease: Power4,
  opacity: 0,
});
Shery.textAnimate(".heading h1" /* Element to target.*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 7,
  duration: 7,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
gsap.from(".anim2", {
  y: 10,
  duration: 2,
  stagger: 0.3,
  ease: Expo,
  opacity: 0,
});
Shery.imageEffect(".imgntext img", {
  style: 3, //Select Style
  debug: false, // Debug Panel
  config: {
    uFrequencyX: { value: 22.14, range: [0, 100] },
    uFrequencyY: { value: 11.45, range: [0, 100] },
    uFrequencyZ: { value: 19.85, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 19.76 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.7500101687960473 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.7, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
Shery.imageEffect(".susimagewrapper img", {
  style: 5, //Select Style
  debug: false, // Debug Panel
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.69, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666304451382742 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
gsap.from(".imgntext img", {
  y: "7",
  opacity: 0,
  duration: 7,
  ease: Expo,
});
Shery.imageEffect(".imff", {
  style: 5, //Select Style
  debug: false, // Debug Panel
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.69, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.6666304451382742 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,

  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 3,
});
Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 3,
});

document
  .querySelector(".ftext button")
  .addEventListener("mouseover", function () {
    const h1 = document.querySelector("#ftexth1");
    h1.style.opacity = 0.2;

    gsap.to(".future video", {
      opacity: 1,
      duration: 1,
      ease: Power4,
    });
  });
document
  .querySelector(".ftext button ")
  .addEventListener("mouseleave", function () {
    const h1 = document.querySelector("#ftexth1");
    h1.style.opacity = 0.7;
    gsap.to(".future video", {
      opacity: 0,
      duration: 1,
      ease: Power4,
    });
  });
Shery.imageEffect("#bimg ", {
  style: 5,
  gooey: true,
  debug: false,
  config: {
    a: { value: 0.69, range: [0, 30] },
    b: { value: -0.88, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.8085182579046037 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.09, range: [0, 0.5] },
    shapeRadius: { value: 0.02, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 3.46, range: [1, 15] },
    durationOut: { value: 0.62, range: [0.1, 5] },
    durationIn: { value: 1.56, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.34, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.76, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 34 } },
    discard_threshold: { value: 0.4, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.26, range: [0, 2] },
    noise_scale: { value: 6.11, range: [0, 100] },
  },
});
