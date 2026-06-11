var lamp = document.getElementById("lamp");

var isLighton = true;

lamp.addEventListener("click", function(){
    if(isLighton){
        lamp.src="assets/lamp_off.png";
        lamp.alt="Lâmpada apagada"
        document.body.style.background = "radial-gradient(circle, white 8%, black 100%)"
    }
    else{
        lamp.src="assets/lamp_on.png";
        lamp.alt="Lâmpada acesa"
        document.body.style.background = "radial-gradient(circle, white 8%, yellow 100%)"
    }
    isLighton = !isLighton
})