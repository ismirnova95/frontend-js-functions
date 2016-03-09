var arr1 = [10.5, 45, 55.2, 100, 66, 99];   
var a = arr1[0];   
var i;     
var index = 0; 
var result = 0;
 
function min(arr1) {   
  for(i = 0; i < arr1.length; i++){   
    if (a > arr1[i]){   
      a = arr1[i];   
    } 
      if (typeof arr1[i] === 'number') { 
      result = result + arr1[1]; 
      }    
  }    
  return a;   
};   

console.log(min(arr1));  

function max(arr1) {   
   
  for(i = 0; i < arr1.length; i++){   
    if (a < arr1[i]){   
      a = arr1[i];   
    }  
        if (typeof arr1[i] === 'number') { 
      result = result + arr1[i]; 
        }    
  }    
  return a;   
};   

console.log(max(arr1));  

function sum(arr1) { 
  if (typeof arguments[index] === 'number') { 
      result = result + arguments[index]; 
  }       
    
    for (var i = 0; i < arr1.length; i++) { 
  a += arr1[i]; 
    }
       
  return a;    
};    
    
    
console.log(sum(arr1)); 