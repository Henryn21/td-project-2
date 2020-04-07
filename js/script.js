/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

let studentsList=document.querySelectorAll(".student-item");//store student li's
let items=10;//items per page

//parameters: list:list of students, page:current page
//hides all list items, except at the index range (start-end)
function showPage(list, page){
   let start=(page*items)-items;
   let end=page*items;
   console.log("Start end",start , end);
   let total=list.length;//length of list
   //loop through whole list
   for(let i=0;i<total;i++){
      if(i<end&&i>=start){//if index is at the start and under the end 
         // console.log(list[i], i);//display it
         list[i].style.display="";
      }
      else{//else hide it
         // console.log("Hidden",list[i], i);
         list[i].style.display="none";
      }
   }
}
//a function to call showPage using the selected button(page number)
function appendPageLinks(){
   let links=studentsList.length/items+1;//# of pages is groups of 10 extra //+1 for loop to run on last few under 10
   let buttonBox=document.createElement('div');//holds buttons
   buttonBox.className="pagination";
   let buttonList=document.createElement('ul');
   buttonBox.appendChild(buttonList);
   document.querySelector(".page").appendChild(buttonBox);
   //create buttons
   for(let i=1;i<links;i++){//for each link, add a button with the number
      let buttonLink=document.createElement('a');
      let button=document.createElement('li');
      buttonLink.innerHTML=i;//set text to page number "i"
      //TEST SOLUTION FOR "active"
      buttonLink.className="bl"
      //add event listner
      buttonLink.addEventListener("click", () =>{//eventlistener on <a> //e = a?
         clearActive(buttonLink);
         buttonLink.className="active";
         showPage(studentsList, i);
      });  
      //add to DOM
      button.appendChild(buttonLink);
      buttonList.appendChild(button);
      
   }
   //set first page to active
   //buttonList button buttonLink//doesnt work
   buttonList.firstChild.firstChild.className="active";

}
//array for storing all links
let linkArray= document.querySelectorAll();
console.log(linkArray);
//a is the a element clicked
function clearActive(a){
   a.parentNode
   //failed solution
   // for(let i=0;i<linkArray.length;i++){
   //    linkArray[i].classList.remove("active");     
   // }
}

appendPageLinks();
//shows first page
showPage(studentsList, 1);
