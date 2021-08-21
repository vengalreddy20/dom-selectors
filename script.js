document.title="dom-basics";
console.log(document.title);



//dom-selectors
//1.getElementById
//2.getElementsByClassName
//3.getElementsByTagName
//4.querySelector
//5.querySelectorAll

//getElementById

let heading=document.getElementById("access");
console.log(heading);

//getElementsByClassName
let heading1=document.getElementsByClassName("access101");
for(let i=0;i<heading1.length;i++){
    console.log(heading1[i]);

}


//getElementBYTagName
let heading2=document.getElementsByTagName("p");
for(let i=0;i<heading1.length;i++){
    console.log(heading2[i]);

}

//querySelector
let heading3=document.querySelector("p");
console.log(heading3);

//querySelectorAll

let heading4=document.querySelectorAll(".access101");
for(let i=0;i<heading4.length;i++){
    console.log(heading4);
}

//dom-navigation

let parentel=document.getElementById("parent");
console.log(parentel);
console.log(parentel.children);
console.log(parentel.childNodes);
console.log(parentel.firstChild);
console.log(parentel.lastChild);
console.log(parentel.firstElementChild);
console.log(parentel.lastElementChild);
console.log(parentel.parentElement);

let midel=document.getElementById("access");
console.log(midel.nextSibling);
console.log(midel.previousSibling);
console.log(midel.nextElementSibling);
console.log(midel.previousElementSibling);


