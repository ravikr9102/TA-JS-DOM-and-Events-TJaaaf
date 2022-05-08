let container = document.querySelector('.GOT-container');
let input = document.querySelector(".search-bar");


let allPeople = got.houses.reduce((acc,cv) =>{
    acc = acc.concat(cv.people);
    return acc;
},[]);

let allTags = got.houses.map((house) => house.name);


function createUI(data){
    container.innerHTML = "";
    data.forEach((people) =>{
        let div = document.createElement("div")
        div.classList.add("card");
        let img= document.createElement("img")
        img.src = people.image;
        let h2 = document.createElement("h2")
        h2.innerText = people.name;
        let p = document.createElement("p");
        p.innerText = people.description;
        let button = document.createElement("button");
        button.classList.add("btn");
        button.href = people.wikiLink;
        button.innerText = "Know More"

        div.append(img,h2,p,button);
        container.append(div);
    })
    createTag(allTags)
}

function createTag(tags){
    let div = document.createElement("div");
    
   tags.forEach((e) => {
        let btn = document.createElement("button");
        btn.innerText = e;
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.marginLeft = "25px";
        btn.style.marginTop = "10px";
        btn.style.border = "none";
        btn.style.borderRadius = "4px";
        btn.style.padding = "5px";
        div.append(btn);
        btn.addEventListener("click",()=>{
            let gotPeople = got.houses.find((house) => house.name ==e).people || [];
            createUI(gotPeople);
        });
       
    });
    container.prepend(div);
}


function handleSearch(event){
    let txt = event.target.value
    let filtered = allPeople.filter((p) => p.name.includes(txt));
    createUI(filtered);
}

input.addEventListener("input", handleSearch)
createUI(allPeople);