let button = document.getElementById("Btn");
let inp = document.getElementById("inp");
let out = document.getElementById("Output");
let checkbox=document.getElementsByClassName("jjk");
var AllTask=[];



function fun1() {
  if (inp.value == "") {
    alert("Please Enter The Task");
  } else {
    let newEle =document.createElement("ul")
   
   var llk= newEle.innerHTML = `<div class="Even">
   <div class="Even-f">
     <input class="jjk" id="o" type="checkbox" />
     <p id="Para">${inp.value}</p>
   </div>
   <svg id=ui xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <line x1="27.3813" y1="9.92054" x2="10.2884" y2="27.2839" stroke="black" stroke-width="0.809318"/>
  <line x1="10.3773" y1="6.91662" x2="27.0043" y2="22.8607" stroke="black" stroke-width="0.809318"/>
</svg>
 </div> ` ;
    AllTask.push(llk)
    out.appendChild(newEle)
    newEle.querySelector("svg").addEventListener("click",remove);
    function remove(){
        newEle.remove();
    }
  }
}







button.addEventListener("click", fun1);

document.addEventListener("keypress",function(event){
  if(event.key == "Enter"){
    fun1(); 
  }
})







