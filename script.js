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
document.getElementById('input0').value = "[1,3,4,0]";
document.getElementById('input1').value = "[4,2,1,5]";
document.getElementById('input2').value = "[12,1,1,3]";
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
  
  var ni = document.getElementById('myDiv');
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
  if(A.length < A[0].length -1){
  		alert(A[0].length -1 + " degisken için "+ A.length +" denklem vermissiniz" +"\n"+"lütfen n adet bilinmeyen için en az n adet denklem verniz");
		return;
  }
	if (radios[0].checked) {
		var z = cramer(A)
		console.log(JSON.stringify(z));
		console.log(JSON.stringify(test(A,z)));
	}else if (radios[1].checked) {
		createDiv(ni,"Gaus yöntemi için öncelikle kösegen formuna getirmeliyiz"+ "\n","Kösegen Formma getirme için http://w2.anadolu.edu.tr/aos/kitap/IOLTP/2286/unite09.pdf");
		createDiv(ni,"Kösegen halinden önce" + stringfyMatrix(A,"Matris")+ "\n", "Matrisin ilk hali");
		
		factorDirectLU(A);
		substitute(A,X);
		console.log(JSON.stringify(X));
		console.log(JSON.stringify(test(Test,X)));
	}else{
		alert('Lütfen bir metod seçiniz')
	}
}
function stringfyMatrix(A,x,d){

var str = "";
str +="</br>"
if(d)
	str += "Det (" + x+ ")" + " = " + det(A);
str +="</br>"
for(var i=0; i<A.length; i++){
	str += JSON.stringify(A[i]);
	str += "</br>";
}str +="</br>"
return str;
}
