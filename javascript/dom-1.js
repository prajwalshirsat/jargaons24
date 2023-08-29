function myfunction()
{   
    console.log("test");
    console.log("function called ");
    console.log(document);
    //document =entire web page 
    console.log(typeof document);
    //select element by id from document 
    console.log(document.getElementById("x1"));
   //select element by id from document 
    
    var amount =document.getElementById("x1").value 
    //select element by id and use its value 
    var  roi =document.getElementById("x2").value 
    var duration =document.getElementById("x3").value 

    console.log(amount);

    var p = parseInt(amount);
    var r=parent(roi)
    var n =parseInt(duration);
    r=r/12/100
    n=n*12

    var emi =p*r*(1+r)**n/((1+r)**n-1)
    emi=Math.round(emi);
    console.log(emi);
console.log(document.getElementById("m1"));
document.getElementById("m1");
innerHTML=`&#8377;${emi}`

document.getElementById("m2");
innerHTML=`&#8377;${emi*n}`

document.getElementById("m3");
innerHTML=      `&#8377; ${emi*n-p}`


document.getElementById("m4");
innerHTML=p;

















}