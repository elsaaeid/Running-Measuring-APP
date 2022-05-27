var hours =0;
var mins =0;
var seconds =0;

$('#start').click(function(){
      startTimer();
});

$('#stop').click(function(){
      clearTimeout(timex);
});

$('#reset').click(function(){
      hours =0;      mins =0;      seconds =0;
  $('#hours','#mins').html('00:');
  $('#seconds').html('00');
});



function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){seconds=0;mins++;
       if(mins>59) {
       mins=0;hours++;
         if(hours <10) {$("#hours").text('0'+hours+':')} else $("#hours").text(hours+':');
        }
                       
    if(mins<10){                     
      $("#mins").text('0'+mins+':');}       
       else $("#mins").text(mins+':');
                   }    
    if(seconds <10) {
      $("#seconds").text('0'+seconds);} else {
      $("#seconds").text(seconds);
      }
     
    
      startTimer();
  },1000);
}



let lapItem = 0;
function myFunction() {
 const li = document.createElement("li");
 const number = document.createElement("span");
 const timeStamp = document.createElement("span");

 li.setAttribute("class", "lap-item");
 number.setAttribute("class", "number");
 timeStamp.setAttribute("class", "time-stamp");

 number.innerText = `#${++lapItem}`;
 timeStamp.innerHTML = `${hours} : ${mins} : ${seconds}`;

li.append(number, timeStamp);

laps.append(li);
};
document.getElementById("lap").addEventListener("click", myFunction);


function clearAll() {
const clearButton = document.getElementById("lap-clear-button");
 laps.innerHTML = '';
 laps.append(clearButton);
}

document.getElementById("lap-clear-button").addEventListener("click", clearAll);



const navItem = document.getElementById("navItem");

function myView(){
  if(navItem.href == "index.html") {
    navItem.style.active = true;
  }
  else{
    navItem.style.active = false;
}
}




  // Toggle functionality
const navItems = document.getElementById("navItems");
  document.querySelector("#barsItem").addEventListener("click", () => {
    if (navItems.style.display === "none") {
      navItems.style.display = "flex";
    } else {
      navItems.style.display = "none";
    }
  });