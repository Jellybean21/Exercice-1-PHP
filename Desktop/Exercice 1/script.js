var textsmall= document.getElementById('modified');
var size= "24px";

textsmall.addEventListener("click", sizechange);

function sizechange(){
if (this.style.fontSize ==  "14px" || this.style.fontSize == ''){
    this.style.fontSize = size;
} else {
    this.style.fontSize = "14px";
}

}
