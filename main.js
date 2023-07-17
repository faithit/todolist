document.getElementById("one").style.color="red";
//add a checked on clicking on the list item
 var y= document.querySelector('ul')
 y.addEventListener('click',chck)

 function chck(event){
    if(event.target.tagName=="LI"){
      event.target.classList.toggle('checked');
    }
    false;
 }
//create a new list item on click of button
 function additem(){
    //create a  list item
    const z = document.createElement("li");
    //get the value of the input and add it to the list
    var inputvalue= document.getElementById("myinput").value;
    var t=document.createTextNode(inputvalue)
    //append to the list
    z.appendChild(t)
    document.body.appendChild(z)
  
    if(inputvalue ==''){
        alert("add a  todo item")
    }
    else{
         // Append to list:
       document.getElementById("todolist").appendChild(z)
    }
    //clear the input
    document.getElementById("myinput").value=''
    
   
    var span=document.createElement("span")
    var txt = document.createTextNode("\u00D7");
     span.className="close"
     span.appendChild(txt);
     z.appendChild(span)
    
     for(var i=0;i<close.length;i++){
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
          }
        }
       
 }
 //create a close button and add it to the end of each li item
 var nodelist =document.getElementsByTagName("li")
 for( var i=0;i<nodelist.length;i++){
     var span=document.createElement("span")
     var txt = document.createTextNode("\u00D7");
     span.className="close"
     span.appendChild(txt);
     nodelist[i].appendChild(span)

 }

//click on close button to hide the current list item
var close=document.getElementsByClassName("close")
for(var i=0;i<close.length;i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }


    

 
 