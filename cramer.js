// created by talhakkas date:14.01.2013
function det2(A) {
return A[0][0] * A[1][1] - A[0][1] * A[1][0];
}
function det3(A){
return A[0][0] * det2(sub(A,0,0)) - A[0][1] * det2(sub(A,0,1)) + A[0][2] * det2(sub(A,0,2));
}
function det4(A){
return A[0][0] * det3(sub(A,0,0)) - A[0][1] * det3(sub(A,0,1)) + A[0][2] * det3(sub(A,0,2)) - A[0][3] * det3(sub(A,0,3));
}
function det(A){
var n = A.length;
switch(n){
case 2: return det2(A);
case 3: return det3(A);
case 4: return det4(A);
}
}
function sub(A,r,c){
sy = A.length;
sx = A[0].length;
ne = new Array();
for(var i = 0; i < sy; i++){
	if(i == r) continue;
	temp = new Array();
	for(var j = 0; j < sx; j++){
		if(j == c) continue;
		temp.push(A[i][j]);
	}
	ne.push(temp);
}
return ne
}
function remsub(A,c){
sy = A.length;
sx = A[0].length;
temp = new Array();
for(var j = 0; j < sy; j++){
	temp.push(A[j][c]);
}
return temp;
}
function insertVector(A,V,c){
sy = A.length;
sx = A[0].length;
ne = new Array();
for(var i = 0; i < sy; i++){
	temp = new Array();
	for(var j = 0; j < sx; j++){
		if(j == c) temp.push(V[i]);
		else temp.push(A[i][j]);
	}
	ne.push(temp);
}
return ne
}
function cramer(A){
var n = A[0].length - 1;
var m = A.length;
if (n != m){
	createDiv("Cramer yönteminde gereksiz varsa bu satirlari elemine etmek için kösegen formuna getirmeliyiz"+ "\n", "Cramer Metodu kare matrisler için uygulanir");
	factorDirectLU(A);
}
var res = remsub(A,n);
var mat = sub(A,m,n);
var results = new Array();
var ant = det(mat);
createDiv("Matirslerin determinantlarini aliyoruz \n", "Determinant alma için http://www.matematik.tc/matematik-2-konu-anlatimlari-oku/matris-ve-determinant.html");
createDiv(stringfyMatrix(mat,"Degisken Matrisi",true), "Cramet metodu için http://w2.anadolu.edu.tr/aos/kitap/IOLTP/2286/unite03.pdf");

if(Math.abs(ant) < 0.00001 ){
	alert('determinant sifira çok yakin oldugu için çramer metodu uygulayamiyoruz');
	return false;
}
for(var w = 0; w < n; w++){
	var temp = insertVector(mat,res,w)
	console.log(JSON.stringify(temp) + " " +  w +" "+ ant);
	results.push(det(temp) / ant);
	createDiv( stringfyMatrix(temp, (w+1) +". Matris",true), "Degisken Matrisi Bir matriste degiskenlerin katsayilarinin yerine denklemlerin sonucunun yazilmasi ile bulunur");
	createDiv( (w+1) + ". degisken  = " +det(temp) +"/" +ant+ "="+ det(temp) / ant + "\n", "Cramer Metodunda her bir degisken Degisken Matrisinin determinantinin Esas Matris Determinentina Bölünmesi ile Bulunur");
}
return results;
}
