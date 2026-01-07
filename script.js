function addtaskbtn(){
    let  myinput=document.getElementById("userinput").value;
    if(myinput === ""){
        alert("Pleas enter your task!")
     ul.style.display="none";
    }
    let  ul=document.getElementById("ul");
    let li =document.createElement("li");
    li.innerHTML +=`<div class="list-item">
    <span>${myinput}</span>
    <button class="delete-btn" onclick="deleteme(this)">Delete</button>
    </div>
    `;
    ul.appendChild(li);   
    document.getElementById("userinput").value =""; 
}
function deleteme(button){
 let dltbtn = button.parentElement;
      dltbtn.remove();
      
}
