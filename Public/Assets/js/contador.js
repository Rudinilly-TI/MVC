
var cond = true;
c = 10;
function Inicio(){
if (cond) {
if(c > 0){
c = c-1;
var cont = document.getElementById('contador');
cont.innerText = c;
setTimeout('Inicio()',1000);
}else{

	//document.getElementById('contador').style.font = "50px Arial Black";
	document.getElementById('contador').innerHTML = "<img width='200' height='140' src='img/img.jpeg'>";
}
}
}
function botao(){
	if(cond == true){
	document.getElementById('botao1').innerText = "Destravar";
	cond = false
}else{
	cond = true
	document.getElementById('botao1').innerText = "Travar"
}
}

function voltar(){
var r = document.getElementById('contador').innerText;	
if (cond) {
if(r > 0){
r = r-1;
var con = document.getElementById('contador');
con.innerText = r;
setTimeout('voltar()',1000);
}else{

	//document.getElementById('contador').style.font = "50px Arial Black";
	document.getElementById('contador').innerHTML = "<img width='200' height='140' src='img/img.jpeg'>";

}
}
}
