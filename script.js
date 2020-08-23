let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");


function toggelStyleAfterClick(){
	this.classList.toggle("done");
}

// or
// for (let i=0; i<li.length;i++){
// 	li[i].addEventListener("click", function(){
// 		this.classList.toggle("done");
// 	})
// }

for(let i=0;i<li.length; i++){
		li[i].addEventListener("click", toggelStyleAfterClick);
		li[i].insertAdjacentHTML("beforeend", "<button class='delBtn'>Delete</button>");

	}

let btnDelete = document.querySelectorAll(".delBtn");

	for (let i=0; i<btnDelete.length; i++){
	btnDelete[i].addEventListener("click", removeParent);
}

function removeParent(evn){
	evn.target.removeEventListener("click", removeParent);
	evn.target.parentNode.remove();
}


// or 
// btnDelete.forEach(btnDelete=> {
//    btnDelete.addEventListener('click', function(event) { ul.removeChild(event.target.parentElement)});
// });





function inputLength(){
	return input.value.length;
}

function createListElement(){
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";	
	li.addEventListener("click", toggelStyleAfterClick);
	  // or 
	  // function toggelStyleAfterClick() {
      //   li.classList.toggle("done");
      // }
      // li.addEventListener("click", toggelStyleAfterClick);
 //    let newDelBtn = document.createElement("button");
	// newDelBtn.appendChild(document.createTextNode("Delete"));
	// newDelBtn.setAttribute("class","newDelBtn");
	// li.appendChild(newDelBtn);
	// ul.appendChild(li);
	// newDelBtn.onclick = removeParent;

	li.insertAdjacentHTML("beforeend", "<button class='newDelBtn'>Delete</button>");
	let newDelBtn = document.querySelector(".newDelBtn");
	newDelBtn.addEventListener("click", removeParent);
}

function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
}
	}
	


function addListAfterKeydown(event){
	if(inputLength()>0 && event.keyCode ===13){
		createListElement();
	}
}





button.addEventListener("click", addListAfterClick);


input.addEventListener("keydown", addListAfterKeydown);


