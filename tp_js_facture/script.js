function resultat(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a)* Number(b);
    t3.value = c;
    var d = document.getElementById("t5").value;
    var e = document.getElementById("t6").value;
    var f = Number(d)* Number(e);
    t7.value = f;
    var i = document.getElementById("t9").value;
    var j = document.getElementById("t10").value;
    var k = Number(i)* Number(j);
    t11.value = k;

    var l = document.getElementById("t3").value;
    var m = document.getElementById("t7").value;
    var n = document.getElementById("t11").value;
    var o = Number(l)+ Number(m)+ Number(n);
    t13.value = o;
}
function réinitialiser(){
document.getElementById("t1").value=""
document.getElementById("t2").value=""
document.getElementById("t3").value=""
document.getElementById("t5").value=""
document.getElementById("t6").value=""
document.getElementById("t7").value=""
document.getElementById("t9").value=""
document.getElementById("t10").value=""
document.getElementById("t11").value=""
document.getElementById("t4").value=""
document.getElementById("t44").value=""
document.getElementById("t444").value=""
document.getElementById("t13").value=""
}
