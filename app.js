//fetch json data
let response = await fetch("/data.json");
let WeekArray = await response.json();


 const weekDays = document.querySelectorAll(".weekdays");

 console.log("cow")
 


  weekDays.forEach(element => {
     const children = element.children
     for (let i = 0; i < WeekArray.length; i++){
       
        let amount = WeekArray[i].amount

        // for ouput value in $$

        children[i].lastElementChild.textContent = "$" + amount

        // had to multiple height cause height was too small 
        
        let bar = children[i].firstElementChild.nextElementSibling
         bar.style.height = (amount * 2) + "px"

         //to show ouput on hover 


         bar.addEventListener( "mouseover" , function(e){
            
          if (e.target.tagName != "SPAN"){
            return
          }
          else{
          e.target.nextElementSibling.classList.toggle("show-output")
          
        }
         })
     }

    
 });



