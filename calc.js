var x = document.getElementById('x');
var y = document.getElementById('y');
var result = document.getElementById('resultf');
var form = document.getElementById('percentage');
form.addEventListener('submit',function(event){
    if(!x.value||!y.value){
        alert("Enter Valid Value in the field");
    }else{
        var x1 = parseFloat(x.value);
        var y1 = parseFloat(y.value); 
        
        var res = x1/y1;
        var percentage = res*100;
        
        result.innerText="Result: "+ percentage + "%";
        event.preventDefault();
        
    }
  
    
});

