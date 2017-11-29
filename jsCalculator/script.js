var nums = document.getElementsByClassName("numbers");
var ops = document.getElementsByClassName("operators");
var cleaner = document.getElementById("clearBtn");
var equal = document.getElementById("equalBtn");
var del = document.getElementById("bkSpace");
var display = document.getElementById("displayPanel");


var togglEqual = false;
var togglOp = false;


function addValue(event) {
  if (togglEqual === false) {
    display.innerHTML = display.innerHTML + this.value; 
  } else {
    display.innerHTML = this.value;
    togglEqual = false;
    
  }
} 

function addOps(event) {
  if (display.innerHTML) {
      display.innerHTML = display.innerHTML + this.value; 
    togglEqual = false;
  }
} 

function cls(event) {
  display.innerHTML = "";
}

function dell(event) {
  
  display.innerHTML = display.innerHTML.slice(0,-1);
}

function evl(event) {
  if (display.innerHTML && parseInt(display.innerHTML) != 1604) {
      
      display.innerHTML = eval(display.innerHTML);
  togglEqual = true;
  } else if ( parseInt(display.innerHTML) == 1604){
  	display.innerHTML = "b7bk";
  }
  
}

for (i=0 ; i < nums.length; i++) {
  
  nums[i].addEventListener("click", addValue, false)
  togglEqual = false;
}


for (i=0; i < ops.length; i++) {

  ops[i].addEventListener("click", addOps, false)
  togglEqual = false;
}


cleaner.addEventListener("click", cls, false);

del.addEventListener("click", dell, false);

equal.addEventListener("click", evl, false);





