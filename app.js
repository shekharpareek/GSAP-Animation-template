window.onload = (event) => {
  console.log("page is fully loaded");

  // Function for Heading Text
  function outputFloatingtext() {
    anime.timeline({ loop: false }) // Changed loop to true for continuous animation
      .add({
        targets: '.welcome-txt>div span',
        scale: [4, 1],
        opacity: [0, 1],
        color: ["black"],
        duration: 3000,
        delay: (el, i) => 95 * i,
      });
  }

  outputFloatingtext();

  let myTimeout = setTimeout(scaleMe,3000);

  function scaleMe() {
    // Initialize the gsap timeline
    let T1 = gsap.timeline({ repeat: 0, repeatDelay: 1 }); 

    // First animation
    T1.to(".bubbles svg", {
      opacity: 1.7,
      duration:2,
    });

    T1.to(".bubbles svg", {
      duration:3,
      scale: 150,
      ease: "slow(0.7,0.7,false)",
      display: "inline",
    });

    // Second animation
    T1.to(
      ".onload-container",
      {
        duration:4,
        delay:2.0,
        backgroundColor: "#D8BFD8",
      },
      1
    ).addLabel("secondAnimation");

    // Chaining the second animation
    T1.to(
      ".bubble svg",
      {
        duration:3,
        scale: 300,
        ease: "slow(0.7,0.7,false)",
      },
      "secondAnimation"
    );

    T1.to(
      ".container",
      {
        opacity: 0,
        duration:1,
        display: "none",
      },
      3.5
    ).addLabel("thirdAnimation");

    T1.to(
      ".onload-container",
      {
        duration:1,
        display:"none",
      },
      "thirdAnimation"
    );

    T1.to(".container", {
      duration: 1,
      display: "none",
    }).addLabel("forthAnimation"); 

    T1.to("main", {
      duration: 1,
      display: "block",
    }).addLabel("forthAnimation"); 

    // Animation for HOME PAGE
   
    // Animation for hanging women

  T1.to(".morph-img",{
    duration:1,
    y:-213,
    ease: "slow(0.7,0.7,false)",
  })
  T1.fromTo(".obj",{
    opacity:0,
    duration:0.1
  })
  }
  // custom ease for golu-mouth animation
  gsap.registerEase("customEase", customBezier);

  function customBezier(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  let T2 = gsap.timeline({ 
    scrollTrigger: {
    trigger: 'main',
    start: 'top, bottom',
    end: 'end',
    scrub: true,
  }});
  let T3 = gsap.timeline({
    scrollTrigger:{
      trigger:".rounded-cards-content",
      start:"center",
    }
  });
  T2.from(".obj--4",{
    rotation:358,
  },{
      rotation:15, 
      duration: 5,
      ease: "customEase",
    });
    T2.fromTo(".rotate",{
      rotation:20,
    ease: Power0.easeNone, 
    transformOrigin: '50% 0%',
    });
};


