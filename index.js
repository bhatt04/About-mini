const containerE1 = document.querySelector(".container")


const careers = ["Megha :) ", "Software Developer", "Athlete",  "fueled by cold coffee & curiosity", "Introvert, learning to open up","Craft Enthusiast",];
// "Dreamer, striving to make my parents proud"

let careerIndex = 0;
let characterIndex =0;
updateText()

function updateText(){
    characterIndex++;
    containerE1.innerHTML = `

        <h1> ${careers[careerIndex] === "Megha" ? "Hi, " : ""} 
        I'm ${["A", "I"].includes(careers[careerIndex][0]) ? "an" : ["f", "l", "M"].includes(careers[careerIndex][0]) ? "" : "a"}

        <span> 
            ${careers[careerIndex].slice(0,characterIndex)}
        </span>
        </h1>
    `;
    
    if(characterIndex === careers[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }
    if(careerIndex === careers.length ){
        careerIndex=0; 
    }
    setTimeout(updateText,200);
}



// ${careers[careerIndex].slice(0,1) === "A" ? "an" : "a"} 