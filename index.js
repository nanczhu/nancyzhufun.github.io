alert("Hello, world!");

const btn = document.querySelector("bid");

function textChange() {
  const value = '24pt';
  document.getElementById("text").style.propertyName = value;
}

//btn.onclick = textChange;


if(localStorage.getItem('color-mode'))
{
     localStorage.setItem("color-mode", document.getElementById("color-mode"));
}
else {
   setStyle();
}
function setStyle() {
    let rdColor = 'rgb(${random(255)}, ${random(255)}, ${random(255)})';
    document.body.style.backgroundColor = rdColor;
    document.getElementById("color-mode").value = rdcolor;
    htmlElem.style.backgroundColor = '#${rdColor }}';
    localStorage.removeItem("color-mode");
}




