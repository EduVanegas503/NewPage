var move = document.getElementById("f1");

var velocidad = 15;
var mLeft = 0;
var mRight = 0;

function movimientoD(){
    move.style.display = "block";
    mLeft += velocidad;
    move.style.marginLeft = mLeft+"px" ;
}

function movimientoA(){
    
}


document.addEventListener("keydown",function(movD){
    if(movD.keyCode == "68"){movimientoD();}
})

document.addEventListener("keydown",function(movA){
    if(movA.keyCode == "65"){movimientoA();}
})