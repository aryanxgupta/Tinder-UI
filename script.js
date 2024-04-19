let users = [
    {
        displayPic: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, California",
        name: "Victoria",
        age: 20,
        interestIcons: [`<i class="ri-music-2-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`, `<i class="ri-restaurant-line flex justify-center items-center"></i>`],
        interests: ["music", "travel", "food"],
        bio: "Adventurous soul with a passion for laughter and good vibes. Lover of spontaneity, hiking trails, and deep conversations over coffee. Let's explore the world together. 🌍",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, New York City",
        name: "Jessica",
        age: 20,
        interestIcons: [`<i class="ri-music-2-fill flex justify-center items-center"></i>`, `<i class="ri-paint-fill flex justify-center items-center">`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Music", "Art", "Travel"],
        bio: "Creative spirit with a love for melodies, canvases, and passport stamps. Let's wander to the rhythm of life. 🎶🎨✈️",
        isFriend: null
    },
    {
        displayPic: "https://plus.unsplash.com/premium_photo-1673957802750-0cc6d052c6d9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Los Angeles",
        name: "Emily",
        age: 20,
        interestIcons: [`<i class="ri-camera-fill flex justify-center items-center"></i>`, `<i class="ri-run-fill flex justify-center items-center"></i>`, `<i class="ri-bowl-fill flex justify-center items-center"></i>`],
        interests: ["Photography", "Yoga", "Cooking"],
        bio: "Capturing moments, finding balance, and savoring flavors. Ready to strike a pose or whip up a feast. 📸🧘‍♀️🍳",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1517240197130-a91cdb7e4173?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Chicago",
        name: "Sarah",
        age: 20,
        interestIcons: [`<i class="ri-article-fill flex justify-center items-center"></i>`, `<i class="ri-paint-fill flex justify-center items-center">`, `<i class="ri-bowl-fill flex justify-center items-center"></i>`],
        interests: ["Reading", "Painting", "Cooking"],
        bio: "Lost in pages, strokes, and recipes. Seeking inspiration in stories, colors, and flavors. Let's create our own narrative. 📚🎨🍲",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1509946458702-4378df1e2560?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Miami",
        name: "Ashley",
        age: 20,
        interestIcons: [`<i class="ri-tree-fill flex justify-center items-center"></i>`, `<i class="ri-goblet-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Hiking", "Wine Tasting", "Travel"],
        bio: "Exploring trails, swirling flavors, and chasing sunsets. Let's embark on adventures both near and far. 🥾🍷✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Austin",
        name: "Megan",
        age: 20,
        interestIcons: [`<i class="ri-run-fill flex justify-center items-center"></i>`,`<i class="ri-quill-pen-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Fitness", "Writing", "Travel"],
        bio: "Sweat, scribble, soar. Embracing the journey of body, mind, and map. Ready for the next chapter. 💪📝✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1516423319032-05e7cda09dba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, San Francisco",
        name: "Rachel",
        age: 20,
        interestIcons: [ `<i class="ri-run-fill flex justify-center items-center"></i>`, `<i class="ri-camera-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Dancing", "Movies", "Travel"],
        bio: "Stepping to the beat, lost in reels, and chasing horizons. Let's dance through life's scenes together. 💃🎬✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1516466474591-85bdcd35ad8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Seattle",
        name: "Lauren",
        age: 20,
        interestIcons: [`<i class="ri-bowl-fill flex justify-center items-center"></i>`, `<i class="ri-paint-fill flex justify-center items-center">`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Cooking", "Painting", "Travel"],
        bio: "Mixing colors, flavors, and destinations. Let's paint our own canvas and savor every journey. 🎨🍳✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1542596593-219c48f174d6?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Denver",
        name: "Natalie",
        age: 20,
        interestIcons: [`<i class="ri-music-2-fill flex justify-center items-center"></i>`, `<i class="ri-camera-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Music", "Photography", "Travel"],
        bio: "Capturing melodies, moments, and memories. Ready to hit the shutter and explore the world's symphony. 🎶📸✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1460493567047-d44949c477ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Nashville",
        name: "Samantha",
        age: 20,
        interestIcons: [`<i class="ri-tree-fill flex justify-center items-center"></i>`, `<i class="ri-article-fill flex justify-center items-center"></i>`, `<i class="ri-suitcase-2-fill flex justify-center items-center"></i>`],
        interests: ["Hiking", "Reading", "Travel"],
        bio: "Lost in trails, tales, and travels. Seeking new chapters and scenic routes. Let's embark on an adventure together. 🏞️📖✈️",
        isFriend: null
    },
    {
        displayPic: "https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        location: "USA, Portland",
        name: "Emily",
        age: 20,
        interestIcons: [`<i class="ri-run-fill flex justify-center items-center"></i>`,`<i class="ri-bowl-fill flex justify-center items-center"></i>`,`<i class="ri-bowl-fill flex justify-center items-center"></i>`],
        interests: ["Yoga", "Travel", "Cooking"],
        bio: "Finding peace on the mat, flavors in the kitchen, and wonder in the world. Let's explore mind, taste, and horizon. 🧘‍♀️🍲✈️",
        isFriend: null
    }
]
let curr = 0; 
let isAnimating = false ; 
function setData(idx){
    document.querySelector(".details h3").textContent = users[idx].location ; 
    document.querySelector(".full-name").textContent = users[idx].name ; 
    document.querySelector(".age").textContent = users[idx].age ; 
    document.querySelector(".bio p").textContent = users[idx].bio ; 
    let cnt = 0  ;
    document.querySelectorAll(".tag").forEach(function(elem){
        elem.querySelector(".icon").innerHTML = users[idx].interestIcons[cnt] 
        elem.querySelector("h3").textContent = users[idx].interests[cnt] ; 
        cnt++ ; 
    })
}
(function setInit(){
    document.querySelector(".main-card img").src = users[curr].displayPic ; 
    document.querySelector(".incoming-card img").src = users[curr+1]?.displayPic ; 
    setData(curr)
    curr = 2 ; 
})() ;

function imageChange(){
    if(!isAnimating){
        isAnimating = true ; 
        var tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false ; 
                let main = document.querySelector(".main-card") 
                let incoming = document.querySelector(".incoming-card")
    
                incoming.classList.remove("z-[2]")
                incoming.classList.add("z-[3]")
                incoming.classList.remove("incoming-card")
    
                main.classList.remove("z-[3]")
                main.classList.add("z-[2]")
                gsap.set(main,{opacity: 1, scale:1})
               
                if(curr === users.length) curr = 0 ;
                document.querySelector('.main-card img').src = users[curr].displayPic ;
                curr++ ; 

                main.classList.remove("main-card")
                incoming.classList.add("main-card")
                main.classList.add("incoming-card")
            }
        }) ; 
        tl.to(".main-card",{
            scale: 1.1, 
            opacity: 0, 
            ease: Circ,
            duration: 0.6
        },'a')
        .from(".incoming-card",{
            scale: 0.9, 
            opacity: 0, 
            ease:Circ, 
            duration: 0.7
        },'a')
    }
}

(function(){
    document.querySelectorAll('.element').forEach(function(elem){
        let div = document.createElement('div')
        div.classList.add(`${elem.classList[1]}-container`, 'overflow-y-hidden', 'overflow-x-scroll') ; 
        div.appendChild(elem)
        document.querySelector('.details').appendChild(div) ; 
    })
})()

document.querySelectorAll("button").
forEach(function(btn){
    btn.addEventListener("click",function(){
        imageChange() 
        setData(curr-1) ; 
        gsap.from('.anime',{
            y: "100%", 
            duration: 0.5, 
            ease: Power4,
        })
    })
})