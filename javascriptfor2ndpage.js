function fun(){
document.getElementById('myDropdown').classList.toggle('show');
document.getElementById('mony').style.display = "block";
}

function fun1(){
document.getElementById('myDropdown1').classList.toggle('show');
document.getElementById('mony').style.display = "block";}

function fun2(){
document.getElementById('myDropdown2').classList.toggle('show');
document.getElementById('mony').style.display = "block";}

function fun3(){
document.getElementById('myDropdown3').classList.toggle('show');
document.getElementById('mony').style.display = "block";}

function fun4(){
document.getElementById('myDropdown4').classList.toggle('show');
document.getElementById('mony').style.display = "block";}

function fun5(){
document.getElementById('myDropdown5').classList.toggle('show');
document.getElementById('mony').style.display = "block";}

var sum=0;
var t="";

      function add(r,name)
            {
                console.log(r);
                var a=parseInt(r);
console.log(a);
                sum+=a;
console.log(sum);
   t+= name+" = "+r+"<br>"
                document.getElementById("para").innerHTML = t;
				document.getElementById("namewala").innerHTML = t;
write();
            }
function write()
{document.getElementById("demo1").innerHTML=sum+" rs";
document.getElementById("namewala2").innerHTML=sum +" rs";}

function funn(){
document.getElementById('this').style.display ="none";

}
function funend(){
	if(sum == 0)
	alert('you dont selected anything');
else
document.getElementById('this').style.display ="block";
}

function dosomething(){
	
	if(numcheck == 1 && namecheck == 1 && landmarkcheck ==1 && emailcheck ==1)
	{var k="";
	k ="  name= "+namee+"\n";
	k+="  number= "+numberr+"\n";
	k+="  email= "+emailll+"\n";
	k+="  address= "+landmarkk;
	alert(k);}	
	else{
			alert('your order has not been submitted');
			return false;
	}
	
			   
	}
function reset(){
sum=0;
t='No items';
document.getElementById("demo1").innerHTML=sum+" rs";
document.getElementById("namewala2").innerHTML=sum +" rs";
document.getElementById("para").innerHTML = t;
				document.getElementById("namewala").innerHTML = t;
t='';
}
var numberr;
var numcheck;
var namee;
var namecheck
var emailll;
var emailcheck;
var landmarkk;
var landmarkcheck;
function num(){
	var x= document.getElementById('number');
	var k =x.value.length;
	numberr=x.value;
	if(k == 10){
		numcheck=1;
	document.getElementById('no').innerHTML='<span style="color:green">Valid Number</span>';}
	else{
		numcheck=0;
	document.getElementById('no').innerHTML='<span style="color:red">In Valid Number</span>';}
	
}
function emaill(){
	var x= document.getElementById('mailing');
	emailll =x.value;
	var reg=/^([A-Za-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})$/;
	if(reg.test(emailll)){
		emailcheck=1;
	document.getElementById('mail').innerHTML='<span style="color:green">Valid email</span>';}
	else{
		emalicheck=0;
	document.getElementById('mail').innerHTML='<span style="color:red">In Valid email</span>';}
}
function landmark(){
	var x= document.getElementById('address');
	landmarkk =x.value;
	var near = x.value.indexOf('near');
	if(near != -1){landmarkcheck=1;
	document.getElementById('add').innerHTML='<span style="color:green">Valid adress</span>';}
	else{landmarkcheck=0;
	document.getElementById('add').innerHTML='<span style="color:red">enter landmark,like near landmark name</span>';}
}
function naming(){
	var x= document.getElementById('name');
	namee=x.value;
	var n1 = x.value.indexOf('Binod');
	var n2 = x.value.indexOf('binod');
	var n2 = /[0-9]/g;
	if( x.value.match(n2)){namecheck=0;
	document.getElementById('nam').innerHTML='<span style="color:red">invalid</span>';}
	else{namecheck=1;
	document.getElementById('nam').innerHTML='<span style="color:green">hey </span>'+x.value+'<span style="color:green">,have a nice day</span>';}
}

function delete_this_item(strr,price){

//var regex =  new RegExp(strr,'m'); // correct way
var k=t.indexOf(strr);

if(k == -1)
alert('dosent,exsist');

else
{
if(sum >= price)
{
 t=t.replace(strr,'');
 
 sum -= price;
 document.getElementById("para").innerHTML = t;
	document.getElementById("namewala").innerHTML = t;
 document.getElementById("demo1").innerHTML=sum+" rs";
document.getElementById("namewala2").innerHTML=sum +" rs";
}
}
}
function hideit(){
	document.getElementById('hiding').style.display="none";
}
function hideitnot(){
	document.getElementById('hiding').style.display="block";
}