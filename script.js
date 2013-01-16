// created by talhakkas date:14.01.2013-

function addElement() {

  var ni = document.getElementById('myDiv');

  var numi = document.getElementById('theValue');

  var num = (document.getElementById('theValue').value -1)+ 2;

  numi.value = num;
  
  var divIdName = 'input' + num;

  var newdiv = document.createElement('input');

  newdiv.setAttribute('type','textline');
  newdiv.setAttribute('id',divIdName);
  newdiv.setAttribute('value','');

  br = document.createElement('br');
  br.setAttribute('id',"br" + divIdName);
  ni.appendChild(br);
  ni.appendChild(newdiv);

}

function removeElement() {

  var ni = document.getElementById('myDiv');

  var numi = document.getElementById('theValue');

  var divIdName = 'input' + (numi.value);
  var num = (numi.value - 1);
  if(num == -1)
    return;
  numi.value = num;
  

  var newdiv = document.getElementById(divIdName);
  ni.removeChild(newdiv);
  ni.removeChild(document.getElementById("br" + divIdName));

}
function test(A,X){
	var N = A[0].length - 1;
	var M = A.length;
	var Y = new Array();
    for (var i = 0; i < M; i++){
		var total = 0;
		for (var j = 0; j < N; j++){
			total += A[i][j] * parseFloat(X[j]);
		}
		Y[i] = total;
		if(Math.abs(total - A[i][N]) > 0.00000001){
			console.log(JSON.stringify(Y));
			return false;
		}		
	}
    console.log(JSON.stringify(Y));
	return true;
}
function makeT1(){
addElement();
addElement();

document.getElementById('input0').value = "[1,0,1,0]";
document.getElementById('input1').value = "[1,2,0,5]";
document.getElementById('input2').value = "[1,4,6,3]";
}

function makeT2(){

addElement();
addElement();
addElement();
addElement();
document.getElementById('input0').value = "[1,3,4,0]";
document.getElementById('input1').value = "[1,4,5,10]";
document.getElementById('input2').value = "[1,4,6,11]";
document.getElementById('input3').value = "[2,4,6,1]";
document.getElementById('input4').value = "[2,6,8,0]";
}
function makeT3(){

addElement();
addElement();
document.getElementById('input0').value = "[1,6,4,0]";
document.getElementById('input1').value = "[4,2,1,8]";
document.getElementById('input2').value = "[12,1,1,23]";
}
function makeT4(){

addElement();
addElement();
addElement();
document.getElementById('input0').value = "[1,2,3,4,5]";
document.getElementById('input1').value = "[4,3,2,1,1]";
document.getElementById('input2').value = "[1,1,2,2,8]";
document.getElementById('input3').value = "[2,2,1,1,12]";
}
function makeT4(){

addElement();
addElement();
addElement();
document.getElementById('input0').value = "[1,2,3,6]";
document.getElementById('input1').value = "[2,1,4,7]";
document.getElementById('input2').value = "[-1,-1,2,0]";
document.getElementById('input3').value = "[-2,-2,4,0]";
}

function eval() {  
  var A = new Array(); 
  var X = new Array();
  var num = (document.getElementById('theValue').value -1) + 2;
  for (var i = 0 ; i < num; i++){
	var numi = document.getElementById('input' + i);
	var myObject = JSON.parse(numi.value);
	A[i] = new Array();
	for(var j = 0 ; j < myObject.length; j++){
		 A[i][j] = parseFloat(myObject[j]);
	}
  }
  var radios = document.getElementsByName('method');
  var ni = document.getElementById('aa');
  var Test = A
	if (radios[0].checked) {
		var z = cramer(A)
		console.log(JSON.stringify(z));
		console.log(JSON.stringify(test(A,z)));
	}else if (radios[1].checked) {
		createDiv("Gaus y�ntemi i�in �ncelikle k�segen formuna getirmeliyiz"+ "\n","K�segen Formma getirme i�in http://w2.anadolu.edu.tr/aos/kitap/IOLTP/2286/unite09.pdf");
		createDiv("K�segen halinden �nce" + stringfyMatrix(A,"Matris")+ "\n", "Matrisin ilk hali");
		
		factorDirectLU(A);
		substitute(A,X);
		console.log(JSON.stringify(X));
		console.log(JSON.stringify(test(Test,X)));
	}else{
		alert('L�tfen bir metod se�iniz')
	}
}

function about(){
clearScreen();
createDiv("<b>Kim Yazdi :</b> Talha B�y�kakkaslar","",true);
createDiv("<b>Neden Yazdi :</b> Lineer Cebir Dersi �devi olarak yazdi","",true);
createDiv("<b>Ders Hocasi Kimdi :</b> Sedat Akleylek","",true);
createDiv("<b>Hangi Konularda  :</b> Cramer Metod ve Gauss Metodu","",true);
createDiv("<b>K�ssegenlestirme   :</b> V  sonlu boyutlu bir vekt�r uzayi ve   T :  V  ?  V   bir lineer d�n�s�m olsun.  V nin �yle bir tabani olsun ki,  T  nin bu tabana g�re  A  matrisi k�segen matris olsun.Bu durumda  T  ye k�segenlestirilebilir denir","",true);
createDiv("� Iki satirin yerlerini degistirmek(A islemine karsilik).","",true);
createDiv("� Bir satiri sifirdan farkli bir sayi ile �arpmak(B islemine karsilik). ","",true);
createDiv("� Bir satirin bir sayi ile �arpimini baska bir satira toplamak(C islemine karsilik). ","",true);
createDiv("Lineer denklem sistemindeki  denklemlerden herhangi birinin iki tarafinin sifirdan farkli bir sayiyla b�l�nmesi veya  �arpilmasi denklemi degistirmez. Yine bu  denklemlerden ikisinin birbiriyle toplanmasi veya �ikartilmasi lineer denklem takiminin ��z�m�n� degistirmez.","",true);
createDiv("Gauss eliminasyon y�nteminde diyagonal altindaki elemanlarin sifirlanmasi i�in yapilan aik/akk b�lme isleminin sonucu, diyagonalin altinda sifir olmasi gereken elemanin yerine yazildigi taktirde, sonu�ta �st-��gensel olmasi gereken matrisin diyagonal altinda yeni bir matris olusur. ","",true); 
createDiv("<b>Gauss Jordan Metodu </b>Gauss-eliminasyon y�ntemindeki geri-s�p�rme asamasi �st-��gensellestirme asamasiyla birlestirilebilir. ","",true); 
createDiv("<b>Cramer Metodu </b>Bilinmeyen sayisi denklem sayisina esit olan dogrusal denklem sstemi AX = B bi�iminde verilmis olsun. Sistemin ��z�m� i�in su durumlar s�z konusudur","",true); 
createDiv("A = (aij)nxn katsayilar matrisi olmak �zere","",true); 
createDiv("I. det(A) != 0 ise, sistemin tek ��z�m� vardir. Bu ��z�m xj = Deltaj/det(A)   j=1,2...n bi�imindedir. Burada deltaj. Amatrisinde j. sutun yerine B matrisi yazilarak elde edilen matrisin determinantidir. Bu sekilde AX=B sisteminin ��z�m�n�n verilmesine <b>Cramer Y�ntemi</b> denir","",true); 
createDiv("II det(A)=0 ve deltaj=0, f=1,2...n ise AX=B sisteminin sonsuz �oklukta ��z�m� vardir","",true);
createDiv("III det(A)=0 ve en az bir f i�in deltaj != 0 ise, AX=B sisteminin hi� bir ��z�m� yoktur","",true); 

}
function clearScreen(){
var sc = document.getElementById("aa"); 
var pr = sc.parentNode;
pr.removeChild(sc);
var el = document.createElement("p"); 
el.id = "aa";
pr.appendChild(el); 
}  
function createDiv(text, help,t) { 
var parent = document.getElementById("aa"); 
var divTag = document.createElement("div"); 
divTag.id = "div1";
if(t)divTag.setAttribute("align", "left"); 
else divTag.setAttribute("align", "center"); 
divTag.setAttribute("title", help); 
divTag.style.margin = "0px auto"; 
divTag.className = "dynamicDiv"; 
divTag.innerHTML = text; 
parent.appendChild(divTag); 
}
function stringfyMatrix(A,x,d){
var str = "";
str +="</br>"
if(d)
	str += "Det (" + x+ ")" + " = " + det(A);
str +="</br>"
for(var i=0; i<A.length; i++){
	str += stringifyRow(A[i]);
	str += "</br>";
}str +="</br>"
return str;
}
function stringifyRow(num){
var str = "[";

for(var i=0; i<num.length; i++){
str += stringifyNum(num[i]) 
if ((i+1) < num.length) str += ",";
}
str += "]";
return  str
}
function stringifyNum(num){
var str = "";
var prob = 1000
num = Math.round(num*prob)/prob;
	if(Math.floor(num) == num){
		return str + num
	}else{
		var noo = Math.floor(num)
		var top = num - noo
		top *= prob
		gc = gcd(top,prob);
		top /= gc
		bottom = prob / gc;
		top += noo * bottom
		str += "(" + top + "/" + bottom + ")"
		return str
	}
}
function gcd(x, y) {
	console.log(x + " " + y)
	while (y != 0) {
		var z = x % y;
		x = y;
		y = z;
	}
	console.log(x)
	return x;
}

function serbestDegisken(A){
  if(A.length < A[0].length -1){
		var a = A[0].length
  		createDiv( a -1 + " degisken i�in "+ A.length +" denklem vermissiniz" +"\n"+"verilmeyen degiskenlerin yerine serbest degisken olarak 1 atayacagiz");
		for(var i = A.length; i< a -1; i++){
			var temp = new Array();
			for(var j = 0; j< a; j++){
			temp[j] = 0
			}
			temp[i] = 1
			temp[a -1] = 1
			console.log(" " + ( a ))
			A[i]=temp
		}
  }
  return A
}