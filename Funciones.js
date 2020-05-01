
var player = document.getElementById("cuadrito");
var stm = document.getElementById("estamina")
var stmValue = 120;
var stmLess =0;
var stmPlus = 10;
var velocidad = 15;
var mLeft = 20;
var mTop = 150;
var sec = 0;
var tiempo = 0;


window.onload = document.onkeydown = function code(llave){
    var thecode= llave.keyCode
    console.log(thecode);
}

document.addEventListener("keydown", function move(tecla){
    var code = tecla.keyCode;
    if(code == "68" /*D*/){
        mLeft +=velocidad;
        player.style.marginLeft = mLeft + "px";
    }
    if(code == "65" /*A*/){
        mLeft -=velocidad;
        player.style.marginLeft = mLeft + "px";
    }
    if(code == "83" /*S*/){
        mTop +=velocidad;
        player.style.marginTop = mTop + "px";
    }
    if(code == "87" /*W*/){
        mTop -=velocidad;
        player.style.marginTop = mTop + "px";
    }
    if(code == "16"  /*Shift*/){
        stmLess = 5;
        stmValue -= stmLess
        stm.style.width= stmValue +"px";
        stm.style.marginRight = stmLess + "px";}
        
})

function moveENE(){

}

/*function movimientoD(){
    sec++;
    if(sec==2){
        sec=0;
    }
    move.src = frames[sec];
    mLeft +=velocidad;
    move.style.marginLeft = mLeft+"px" ;
}

function movimientoA(){
    mLeft -= velocidad;
    move.style.marginLeft= mLeft+"px";    
}

function movimientoW(){
  mTop -=velocidad;
  move.style.marginTop=mTop+"px";
}

function movimientoS(){
    mTop +=velocidad;
    move.style.marginTop= mTop+"px";
}


document.addEventListener("keydown",function(mov){
    if(mov.keyCode == "39"){movimientoD();}
    if(mov.keyCode == "37"){movimientoA();}
    if(mov.keyCode == "40"){movimientoS();}
    if(mov.keyCode == "38"){movimientoW();}
})

/* Otra forma de hacer lo mismo

var cuadro = document.getElementById("cuadrito");

var vel = 15;
var x = 0;
var y = 160;
var jump=0;

window.onload =function code(){
        document.onkeydown = teclas;
}

function teclas(event){
   var thecode = event.keyCode
    console.log(thecode);
            if(thecode == "68"){
            x+=vel;
            cuadro.style.marginLeft = x+"px";}
            if(thecode == "65"){
                x-=vel;
                cuadro.style.marginLeft= x+"px";
            }
            if(thecode == "83"){
                y+=vel;
                cuadro.style.marginTop= y+"px";
            }
            if(thecode == "87"){
                y-=vel;
                cuadro.style.marginTop = y+"px";
            }
}*/