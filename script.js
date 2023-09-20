

gsap.from(".p1one",{
    x:"90%",
    scrollTrigger: {
       trigger: ".p1one",
       scroller:"body",
       scrub:2,
    },
})



gsap.from(".p1three",{
    x:"-20%",
    scrollTrigger: {
       trigger: ".p1three",
       scroller:"body",
       scrub:2,
    },
})


const skull = document.querySelector(".p1one .p1skull");
const coffee =document.querySelector(".p1three .p1skull") 
const controller =document.querySelector(".p1two .p1skull")
const p1bottom = document.querySelector(".p1bottom p")
const p1one = document.querySelector(".p1 .p1one")
const p = document.querySelector(".p1one .p1skull  p ")

skull.addEventListener("mouseenter",function(){
    skull.style.color= "green";
    //    controller.style.color= "green";
    //    coffee.style.color="green";
    
    p1bottom.innerHTML = " Heyyyy..!! Want to stand out from the crowdLet us bring your project level.";
    p.style.display ="inherit";
})   ;

skull.addEventListener("mouseleave",function(){
    skull.style.color= "black";
    // controller.style.color= "black";
    // coffee.style.color="black";
    
    p1bottom.innerHTML = "  Want to stand out from the crowd?  Let us bring your project to the next level."
    p.style.display ="none";
    
    
    
})  ;






// --page2--

gsap.from(".page2 p",{
    opacity:0,
    duration : 1,
    y:"10%",
    // width:0,
   
    scrollTrigger:{
        trigger:".page2 p",
        scroller:"body",
        start: "top 70%",
        // markers:true,
    },
})
gsap.from(".page2 button",{
    opacity:0,
    scale : 2,
    duration :1,
   
    scrollTrigger:{
        trigger:".page2 button",
        scroller:"body",
        start: "top 70%",
    },
})


// page3



gsap.to(".p3one",{
   x : "70%",
   scrollTrigger:{
    trigger:".p3one",
    scroller: "body",
    scrub : 1,
   },

})

gsap.to(".p3two",{
    x : "-50%",
    scrollTrigger:{
     trigger:".p3two",
     scroller: "body",
     scrub : 1 ,
    },
 
 })

 gsap.to(".p3three",{
    x : "40%",
    scrollTrigger:{
     trigger:".p3three",
     scroller: "body",
     scrub : 1,
    },
 
 })


 gsap.to(".p3four",{
    x : "-50%",
    scrollTrigger:{
     trigger:".p3four",
     scroller: "body",
     scrub : 1 ,
    },
 
 })


//  .page4


gsap.from(".p4l h1",{
     x:"-50%",
     opacity: 0,
     duration: 2,
     scrollTrigger:{
        trigger:".p4l .p4l-img",
        scroller:"body",
        // markers:true,
     }
})


gsap.from(".p4l .p4l-text",{
    x:"50%",
    opacity: 0,
    duration: 2,
    scrollTrigger:{
       trigger:".p4l .p4l-img",
       scroller:"body",
    //    markers:true,
    }
})

gsap.from(" .p4l-img",{
    x:"-50%",
    opacity: 0,
    duration: 2,
    scrollTrigger:{
       trigger:".p4r .p4r-img",
       scroller:"body",
    //    markers:true,
       start:"top 20%"
    },
})





gsap.from(".p4r .p4r-img",{
    x:"-50%",
    opacity: 0,
    duration: 2,
    scrollTrigger:{
       trigger:".p4l .p4l-img",
       scroller:"body",
    //    markers:true,
    },
})

// const p4img= document.querySelector("p4l-img")
// const p4lul = document.querySelector("p4l-img-hover ul")
// const p3img =document.querySelector("p4r-img")
// const p4rul = document.querySelector("p4r-img-hover ul")

// p4img.addEventListener("mouseenter", function() {
// //   p4lul.style.scale= "2" ,
//      p4lul.style.Color = "red";
    
// });


// page7

gsap.to(".letswork",{
    x:"-20%",
    scrollTrigger:{
        trigger:".letswork",
        scroller : "body",
        scrub: 1,
    }
})

gsap.to(".together",{
    x:"10%",
    scrollTrigger:{
        trigger:".together",
        scroller : "body",
        scrub: 1,
    }
})
