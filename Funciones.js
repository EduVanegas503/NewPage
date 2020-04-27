var move = document.getElementById("f1");

var velocidad = 15;
var mLeft = 0;
var mTop = 0;
var sec = 0;

var frames=["https://tse2.mm.bing.net/th?id=OIP.0NCULXDynTNMrFBPvAFAigHaHa","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUj6CD5-pRbBE4TwwpCsCvrnZlQkt4bLvfoyGUeUAVnsXtRtwF&usqp=CAU"]

function movimientoD(){
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

/* Otra forma de hacer lo mismo*/

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
}