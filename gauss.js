 //created by talhakkas date:14.01.2013-
function singular(A) {
  alert("Matris Singular oldugu için çözümü veremiyoruz.");
  var ni = document.getElementById('aa');
  createDiv(ni, "Singular matris"+ stringfyMatrix(A, "Matris") + "\n", "Singular denklem 0*X = 5 gibi anlamsiz denklemlerdir");
  return -1;
}

//  Attempt to factor the matrix A as A = LU using direct
//  Gauss elimination (without row interchanges).
function factorDirectLU(A) {
  var ni = document.getElementById('aa');
  var n = A[0].length - 1;
  var m = A.length;
  var j, k, pivot, multiplier;
  for (var k = 0; k < n - 1; k++) {
	createDiv(ni, (k+1) + ". Asama" + "\n", "Basamak formuna gelene kadar her bir sutunun alt kisimlari 0 a esitlenecek");
	A=cleanMatrix(A);
	m = A.length;
	
	var max_row = k;
    for (var j = k; j < m; j++){
        if (Math.abs(A[j][k]) > Math.abs(A[max_row][k]))
            max_row = j;
    }
	// swap max row with row i of [A:y]
	
	createDiv(ni, "R"+(max_row + 1) +"<---->"+ "R" + (k+1) + "\n","Satirlarini yer degistiriyoruz");
    for (var t = k; t <= n ; t++){
		var tmp       = A[k][t];
		A[k][t]       = A[max_row][t];
		A[max_row][t] = tmp;
    }
	
    var pivot = A[k][k];
    if (pivot == 0)return singular(A);
	for (var i = k + 1; i < m; i++) {
       var multiplier = A[i][k]/pivot;
		createDiv(ni, "R"+(i + 1) + "<---" + "R" + (i+1) + "- (" + multiplier +"* R" + (k+1) + ")\n","R"+(i + 1) + " satirindan " + multiplier + " adet " + "R" + (k+1)+ " sutununu çikartiyoruz");
	   A[i][k] = 0;
      for (var j = k + 1; j < n+1; j++) A[i][j] -= multiplier*A[k][j]
    }
	
	for(var i = 0; i < m; i++){
		var val = true;
		for(var j = 0; j < n; j++){
			if(A[i][j] != 0) val=false;
		}
		if(val){
			if(A[i][n] == 0) {
				createDiv(ni, (i + 1)+". satiri yok ediyoruz" + stringfyMatrix(A, "Matris") + "\n","Tüm degerleri 0 olan bir denklemin (0*X = 0) hiç bir anlami olmadigindan çikartilir");
				A.splice(i);
				m = A.length;
			}else{
				return singular(A);
			}
		}
	} 
	createDiv(ni, (k+1) + ". degisken elemine edildiginde" + stringfyMatrix(A, "Matris") + "\n", "Bu islemler uygulandiginda matrisin hali");
  }
  // Test a[n-1,n-1].
  console.log(n);
  if (A[n-1][n-1] == 0) return singular(A)
  if (n != A.length) factorDirectLU(A,1)
  return 0;
}

//  Solve  Ax = y after A has been factored as A = LU.
function substitute(A,X){
    var j, k;
    var N = A[0].length - 1;
    var M = A.length;
    var ni = document.getElementById('aa');
    for (var j = N - 1; j >= 0; j--)
    {
        var sum = 0.0;
        for (var k = j+1; k < M; k++)
            sum += A[j][k]*X[k];

        X[j] = (A[j][N] - sum)/A[j][j];
		createDiv(ni, (j+1) + ". degisken  = " + X[j] + "\n", "Basamak formunda en alt basamaktan baslayarak yukari çikacagiz");

    }
}    
function createDiv(parent, text, help) { 
var divTag = document.createElement("div"); 
divTag.id = "div1";
divTag.setAttribute("align", "center"); 
divTag.setAttribute("title", help); 
divTag.style.margin = "0px auto"; 
divTag.className = "dynamicDiv"; 
divTag.innerHTML = text; 
parent.appendChild(divTag); 
} 
function cleanMatrix(A){
var ni = document.getElementById('aa');
for(var i=0; i<A.length;i++){
	for(var j=i+1; j<A.length; j++){
		if(similar(A[i],A[j])){
			createDiv(ni, (j + 1)+". satiri "+(i+1)+". satirla ayni oldugu için yok ediyoruz" + stringfyMatrix(A, "Matris") + "\n", "Ayni olan iki denklemin matriste yeri yoktur");
			A.splice(j);
		}
	}
}
return A
}
function similar(a,b){
var val = a.lenght == b.lenght;
var mul = null;
for(var i=0; i<b.length && val; i++){
   if (b[i]!= 0 && a[i] != 0){
	   if(mul != null){
			val = a[i]/b[i] == mul;
		}else{
			mul = a[i]/b[i] ;
		}
	}else{
		val = !(b[i]!= 0 || a[i] != 0);
	}
}
return val;
}