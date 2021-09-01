let jokesContainer=document.querySelector(".jokesContainer");

//generates jokes randomly
async function jokesRandom(){
    try{
        let fetchData=await fetch("https://official-joke-api.appspot.com/jokes/programming/ten");
        let jsObj=await fetchData.json();
        jokesContainer.innerHTML=``
        jokesDisplay(jsObj);
    }catch{

    }
}
//creates div for every joke
function jokesDisplay(array){
    for(let x of array){
        let jokesDiv=document.createElement('div');
        jokesDiv.setAttribute('class','jokesDiv col-11 col-sm-11 col-md-5 col-lg-4 col-xl-3');
        jokesDiv.innerHTML=`
        <h5 class="question">${x.setup}</h5>
        <p class="answer text-center">${x.punchline}</p>`
        jokesContainer.append(jokesDiv)
    }
}
jokesRandom();

//Color change for heading
let heading=document.getElementById("jokehead");
let colorArr=["blue","#FF6347","green","#F4A460"]
let i=0;
function colorChange(){
    heading.style.color = colorArr[i];
    i = (i + 1) % colorArr.length;
}

setInterval(colorChange,1000);


