var move = document.getElementById("f1");

var velocidad = 15;
var mLeft = 0;

function movimientoD(){
    move.style.display = "block";
    mLeft += velocidad;
    move.style.marginLeft = mLeft+"px" ;
}

function movimientoA(){
    mLeft -= velocidad;
    move.style.marginLeft= mLeft+"px";    
}


document.addEventListener("keydown",function(movD){
    if(movD.keyCode == "68"){movimientoD();}
    if(movD.keyCode == "65"){movimientoA();}
})