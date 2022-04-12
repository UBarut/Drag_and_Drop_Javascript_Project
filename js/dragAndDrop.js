
/*var dragValue;

function move(id){
    var element = document.querySelector("#obje1");
    element.style.position = "absolute";
    element.onmousedown = function(e){
        dragValue = element;
    }
}
document.onmouseup = function(e){
    dragValue = null;
}
document.onmousemove = function(e){
    var x = e.pageX;
    var y = e.pageY;

    dragValue.style.left = x+(x-dragValue.offsetLeft) + "px";
    dragValue.style.top = y+(y-dragValue.offsetTop) + "px";
}*/
let itemX , itemY;


const stuff = document.querySelectorAll(".stuff-pic");
let area = document.getElementById("shape-area");
const area2 = document.querySelectorAll(".shape-area");

let dragableStuff = null;
let dragableStuffRotate = null;
let newX,newY;
let newStuff=false,  selectedCheck=false;
let idCounter = 1;
let topGap,leftGap;

stuff.forEach((x) =>{
    x.addEventListener("dragstart", DragStart);
    x.addEventListener("dragstart", ClickBody);
    x.addEventListener("dragend", DragEnd);
});
function DragStart(e){
    dragableStuff = this.cloneNode(true);
    //dragableStuff = this;
    dragableStuff.style.position = "absolute";
    dragableStuff.style.height = "auto";
    dragableStuff.style.width = "auto";
    dragableStuff.style.maxHeight= "none";
    dragableStuff.style.maxWidth= "none";
    dragableStuff.style.minHeight= "none";
    dragableStuff.style.maxWidth= "none";
    dragableStuff.classList.add("inArea");
    console.log("drag start");
}
function clicked(){
    //console.log(this);
    dragableStuff= this;
    
}
function DragEnd(){
    dragableStuff = null;
    //console.log("drag end");
}

    area.addEventListener("dragenter", DragEnter);
    area.addEventListener("dragover", DragOver);
    area.addEventListener("dragleave", DragLeave);
    area.addEventListener("drop", DragDrop);
    area.addEventListener("mouseover", MouseOver);
    area.addEventListener("click", Click);

function DragOver(e){
    e.preventDefault();
}
function DragEnter(e){
    topGap = (e.pageY-(dragableStuff.offsetTop+area.offsetTop));
    leftGap = (e.pageX-(dragableStuff.offsetLeft+area.offsetLeft));
    if(topGap<0){
        topGap=0;
    }
    if(leftGap<0){
        leftGap=0;
    }
    //console.log("drag enter");
}
function DragLeave(){
    //console.log("drag leave");
}
function DragDrop(e){
    dragableStuff.style.top = e.pageY - area.offsetTop + "px";
    dragableStuff.style.left = e.pageX - area.offsetLeft + "px";
    dragableStuff.setAttribute("id", idCounter);
    console.log(e.pageX);
    console.log(area.offsetLeft);
    idCounter++;
    this.appendChild(dragableStuff);
    //console.log("drag drop");
}
function MouseOver(e){
    //console.log("mouseover");
    for (let index = 0; index < this.children.length; index++) {
        if(e.target.id == this.children[index].id){
            dragableStuff= this.children[index];
        }
        
    }
}
function Click(e){
    //console.log(selectedCheck);
    if(selectedCheck==true){
        if(e.target.style.filter == "none"){
           //console.log("gölge yok");
            for (let index = 0; index < this.children.length; index++) {
                if(this.children[index].style.filter != "none"){
                    this.children[index].style.filter = "none";
                    dragableStuff.style.filter = "drop-shadow(0px 5px 15px rgba(0,173,181, 0.6))";
                    dragableStuffRotate = dragableStuff;
                    selectedCheck=true;
                    //console.log("başkasında gölge var");
                }
            }
        } 
        else if(e.target.style.filter != "none"){
            dragableStuff.style.filter = "none";
            dragableStuffRotate = null;
            selectedCheck=false;
            //console.log("gölge var");
        }
    }
    else if(selectedCheck == false){
        if(e.target != area){
            dragableStuff.style.filter = "drop-shadow(0px 5px 15px rgba(0,173,181, 0.6))";

            dragableStuffRotate = dragableStuff;
            selectedCheck=true;
            //console.log("gölge yap");
        }
    }
    //console.log("click");
    
}

var inputRotate = document.querySelector("#rotate-text");
let allButtonRotate = document.querySelectorAll(".btn-forward");

inputRotate.addEventListener("keyup", RotateEnter);
document.body.addEventListener('click', ClickBody, true);


function RotateEnter(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if(dragableStuffRotate != null){
            dragableStuffRotate.style.transform = "rotate("+inputRotate.value+"deg)";
        }
    }
};

allButtonRotate.forEach((x)=>{
    x.addEventListener("click", function (){
        switch(x.id) {
            case "1":
                dragableStuffRotate.style.transform = "rotate(135deg)";
                break;
            case "2":
                dragableStuffRotate.style.transform = "rotate(180deg)";
                break;
            case "3":
                dragableStuffRotate.style.transform = "rotate(-135deg)";
                break;
            case "4":
                dragableStuffRotate.style.transform = "rotate(90deg)";
                break;
            case "5":
                dragableStuffRotate.style.transform = "rotate(-90deg)";
                break;
            case "6":
                dragableStuffRotate.style.transform = "rotate(45deg)";
                break;
            case "7":
                dragableStuffRotate.style.transform = "rotate(0deg)";
                break;
            case "8":
                dragableStuffRotate.style.transform = "rotate(-45deg)";
                break;
            default:
                break;
          }
    }
    )});

function RotateStuff(){
    switch(x.id) {
        case "1":
          console.log("çalışıyor")
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }
}

let layer = document.querySelectorAll(".input-text")
layer.forEach((x)=>{
    x.addEventListener("keyup", function (e){
        if (e.keyCode === 13) {
            e.preventDefault();
            switch(x.id) {
                case "layer-text":
                    console.log(x.value)
                    dragableStuffRotate.style.zIndex = x.value;
                    break;
                case "name-text":
                    console.log(dragableStuffRotate.value)
                    dragableStuffRotate.setAttribute("value", x.value);
                    break;
                default:
                    break;
            }
        }
    });
})


function ClickBody(e){
    if(e.target.closest("#setting-area") == null && !e.target.className.includes("inArea")){
        console.log("tıklandı closest");
            for (let index = 0; index < area.children.length; index++) {
                console.log("iptal")
                area.children[index].style.filter = "none";
                selectedCheck=false;
            }
    }
    
    /*if(!e.target.className.includes("inArea")){
        console.log("tıklandı includes");
            for (let index = 0; index < area.children.length; index++) {
                console.log("iptal")
                area.children[index].style.filter = "none";
                selectedCheck=false;
            }
    }*/
}


/* Tıkla ve ekle

var button= document.querySelector("#stuffs");
button.addEventListener("click", Ekle);

function Ekle(){
    var img = document.createElement("img");
    img.classList = "stuff-pic inArea";
    img.src = "../picture/koltuk.png";
    img.draggable = true;
    img.style.position = "absolute";
    area.appendChild(img);

}*/


/* Setting Panel Aç/Kapat */

let visibleCheck = document.querySelectorAll(".visible-check");
let openClosePanel = document.querySelector("#open-close");
let settingArea = document.querySelector("#setting-area");
let pageCheck=false;

openClosePanel.addEventListener("click",function (){
    if(visibleCheck[1].style.visibility == "hidden" || pageCheck==false){
        visibleCheck.forEach((x)=>{
            x.style.visibility = "visible";
            x.style.opacity = 1;
        })
        pageCheck=true;
        settingArea.style.bottom = 0+"vh";
        openClosePanel.children[0].classList = "fa fa-angle-down fa-2x";
    }
    else{
        visibleCheck.forEach((x)=>{
            x.style.opacity = 0;
        })
        pageCheck=false;
        settingArea.style.bottom = -12+"vh";
        openClosePanel.children[0].classList = "fa fa-angle-up fa-2x";
    }

});


/* Remove All */

let removeAll = document.querySelector("#remove-all");
let stuff2 = document.getElementsByClassName("inArea");

removeAll.addEventListener("click",function (){
    console.log(stuff2.length);
    while(0 < stuff2.length){
        stuff2[0].remove();
    }
    sayac=0;
});









/* ...Mouseover up down methodu...

//buttonRotate.addEventListener("mousedown", MouseDown);
//buttonRotate.addEventListener("mouseup", MouseUp);
function MouseDown(){
    //console.log("mouse down");
    buttonRotate.addEventListener("mousemove", RotateClick2);
}
function MouseUp(){
    //console.log("mouse up");
    buttonRotate.removeEventListener("mousemove", RotateClick2);
}
function RotateClick2(){
    //console.log("mouse move");
}
*/