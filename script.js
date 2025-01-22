// let buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", () => {
    
//     if (i == 0) {
//       document.getElementById("img").src = "assets/history.jpg";
//       document.getElementById("header").innerText = "History";
//       document.getElementById("para").innerText =
//         "The history of mountains is the study of how mountains have formed and changed over time. The study of mountains includes the geological processes that formed them, the effects of climate change, and the impact of human activity";
//       buttons[0].classList.add("active");
//       buttons[1].classList.remove("active");
//       buttons[2].classList.remove("active");
//     } 
    
//     else if (i == 1) {
//       document.getElementById("img").src = "assets/vision.jpg";
//       document.getElementById("header").innerText = "Vision";
//       document.getElementById("para").innerText =
//         "The mountains are a place of great natural beauty, with their rugged peaks, dense forests, and sparkling streams. When I was in the mountains, I felt a sense of awe and wonder at the majesty of the landscape around me.";
//       buttons[1].classList.add("active");
//       buttons[0].classList.remove("active");
//       buttons[2].classList.remove("active");
//     } 
    
//     else if (i == 2) {
//       document.getElementById("img").src = "assets/goals.jpg";
//       document.getElementById("header").innerText = "Goals";
//       document.getElementById("para").innerText =
//         "As a compound exercise that utilises multiple muscle groups in your whole body, mountain climbers are an effective way of strengthening your arms, back, shoulders, core and legs.The air was fresh and crisp, and the sun shone brightly in the clear blue sky.";
//       buttons[2].classList.add("active");
//       buttons[1].classList.remove("active");
//       buttons[0].classList.remove("active");
//     }
//   });
// }


const obj =[
  {
    img : "assets/history.jpg",
    header : "History",
    para : 
    "The history of mountains is the study of how mountains have formed and changed over time. The study of mountains includes the geological processes that formed them, the effects of climate change, and the impact of human activity",
  },

  {
    img : "assets/vision.jpg",
    header : "Vision",
    para : 
    "The mountains are a place of great natural beauty, with their rugged peaks, dense forests, and sparkling streams. When I was in the mountains, I felt a sense of awe and wonder at the majesty of the landscape around me.",
},

  {
    img : "assets/goals.jpg",
    header : "Goals",
    para : 
    "As a compound exercise that utilises multiple muscle groups in your whole body, mountain climbers are an effective way of strengthening your arms, back, shoulders, core and legs.The air was fresh and crisp, and the sun shone brightly in the clear blue sky.",
},

]

let button = document.querySelectorAll('button');
let image = document.getElementById('img');
let header = document.getElementById('header');
let para = document.getElementById('para');

for(let i=0;i<button.length;i++){
  button[i].addEventListener("click",()=>
    {
      image.src=obj[i].img;
      header.innerText=obj[i].header;
      para.innerText=obj[i].para;
      button.forEach((nav,index)=>
        {
          if(i==index)
          {
              nav.classList.add('active');
          }
          else
          {
              nav.classList.remove('active');
          }
      })
  });
}

