 var target = document.getElementById("willDis");
 var back = document.getElementById("back");
 var em = document.getElementById("qbootstrap-contact");
 var loc =document.getElementById("location");
function emailClick(){
        target.style.display = "none";
        back.style.display = "block";
        em.style.display ="block";
        console.log( back.style.display);
        console.log(target.style.display);
         console.log(em.style.display);
        
}
function backClick(){
           back.style.display="none";
           em.style.display ="none";
           target.style.display="block";
           loc.style.display="none";
           console.log(em.style.display);
           console.log(back.style.display);
            console.log(target.style.display);
}
function alertGO(){
        alert("massage was send")
}
function goTel(){
        alert("096 969 2446");
}
function locationClick(){
        loc.style.display="block";
        target.style.display = "none";
        back.style.display = "block";
}