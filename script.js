function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#pages"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#pages" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#pages", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#pages").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    

}
locomotiveScroll()

var tl = gsap.timeline();

tl.from("#page1>h1",{
  delay:0.2,
  opacity:0,
  duration:0.8,
})
.from("#beerbtl",{
  opacity:0,
  duration:0.6,
},)

gsap.to("#beerbtl",{
    scrollTrigger:{
        trigger:"#beerbtl",
        scroller:"#pages",
    //    markers:true,
        pin:true,
        start:"top 10%",
        end:"top -295%",
        scrub:2
    },
    rotate:-15,
})
gsap.to("#beerbtl",{
  scrollTrigger:{
    trigger:"#beerbtl",
    scroller:"#pages",
  //   markers:true,
    start:"top 9%",
    scrub:2,
    end:"top -5%"
  },
  scale:"0.47",
})

gsap.from("#page5img",{
  opacity:0,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page5img",
    scroller:"#pages",
    // markers:true,
    start:"top 30%"
  },
  scale:1.2
})
gsap.from("#page5img2",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page5img2",
    scroller:"#pages",
    // markers:true,
    start:"top 30%"
  },
  scale:0.8,
  duration:0.8,
})
gsap.from("#page5img3",{
  opacity:0,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page5img3",
    scroller:"#pages",
    // markers:true,
    start:"top 28%"
  },
  scale:1.4
})


