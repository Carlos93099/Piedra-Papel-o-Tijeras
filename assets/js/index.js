const boton1=document.getElementById("btn1")
const boton2=document.getElementById("btn2")
const boton3=document.getElementById("btn3")
const resultado=document.getElementById("resultado")
let y
    
boton1.addEventListener("click", piedra)
boton2.addEventListener("click", papel)
boton3.addEventListener("click", tijeras)

function aleatorio(min=0, max=2) {
    console.log(min, max)
    y=Math.floor(Math.random()*(max-min+1))+min
    return y
}

function piedra() {
    const c=0;
    aleatorio()
    if(c===y) {
        resultado.innerHTML='<div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div> <div><h1>Empataste</h1></div> <div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div>'
    } else if(c<y && y===1) {
        resultado.innerHTML='<div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div> <div><h1>Perdiste :(</h1></div> <div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div>'
    } else if(c<y && y===2) {
        resultado.innerHTML='<div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div> <div><img src="assets/images/ganaste.png" alt="Imagen ganaste" width="180px" height="200px"></div> <div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div>'
    }
 }

function papel() {
    const resultado=document.getElementById("resultado")
    const c=1;
    aleatorio()
    if(c===y) {
        resultado.innerHTML='<div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div> <div><h1>Empataste</h1></div> <div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div>'
    } else if(c>y) {
        resultado.innerHTML='<div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div> <div><img src="assets/images/ganaste.png" alt="Imagen ganaste" width="180px" height="200px"></div> <div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div>'
    } else if(c<y) {
        resultado.innerHTML='<div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div> <div><h1>Perdiste :(</h1></div> <div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div>'
    }
}

function tijeras() {
    const resultado=document.getElementById("resultado")
    const c=2;
    aleatorio()
    if(c===y) {
        resultado.innerHTML='<div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div> <div><h1>Empataste</h1></div> <div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div>'
    } else if(c>y && y===0) {
        resultado.innerHTML='<div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div> <div><h1>Perdiste :(</h1></div> <div><img src="assets/images/piedra.png" alt="Imagen piedra" width="200px" height="200px"></div>'
    } else if(c>y && y===1) {
        resultado.innerHTML='<div><img src="assets/images/tijeras.svg" alt="Imagen tijeras" width="180px" height="200px"></div> <div><img src="assets/images/ganaste.png" alt="Imagen ganaste" width="180px" height="200px"></div> <div><img src="assets/images/papel.png" alt="Imagen papel" width="200px" height="200px"></div>'
    }
}



            /*do {
                var res=parseInt(prompt("Cuantas partidas quieres jugar?"))
                var c1=0, c2=0, c3=0
                var cont1=parseInt(c1), cont2=parseInt(c2), cont3=parseInt(c3)
                var x=0
                
                while(isNaN(res)) {
                    alert("Ingresaste un caracter no numerico")
                    alert("vuelve a intentarlo")
                    res=parseInt(prompt("Cuantas veces quieres jugar"))
                }
                
                for(var i=0; i<res; i++) {
                    var d=true
                    piedraPapelTijeras2()
                    if(d===false) {
                        res++
                        x++
                    }
                }
                
                if(cont1>cont2) {
                    res=res-x
                    alert("ganaste "+cont1+", perdiste "+cont2+" y empataste "+cont3+" de "+res+" partidas")
                    alert("Felicidades, Ganaste")
                } else if(cont2>cont1) {
                    res=res-x
                    alert("ganaste "+cont1+", perdiste "+cont2+" y empataste "+cont3+" de "+res+" partidas") 
                    alert("Perdiste, suerte para la proxima")
                } else if(cont1===cont2 || cont3===res) {
                    res=res-x
                    alert("ganaste "+cont1+", perdiste "+cont2+" y empataste "+cont3+" de "+res+" partidas")
                    alert("Lo siento, empataste la partida")
                }
                
                var res2=prompt("Quieres jugar de nuevo? escribe 1 para si, cualquier otrta variable sera considerada como no")
            } while (res2==1)*/
            