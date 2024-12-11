function affichagetab() {
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var x = prompt("combien de ligne");
    document.write("<table border=2px width=30%");
    for(let i=0; i<=x+1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function seconnecter(){
    var login = prompt("Nom d'utilisateur");
    var password = prompt("Mot de passe");
    if(login=="admin" && password=="admin"){
        document.write("Bienvenue :" +login);
    }
    else{ alert("Accès refusé")}
}
function seconnecter2() {
    window.location.href = "identification.html";
}
function login() {
    var login = document.getElementById("t1").value;
    var password = document.getElementById("t2").value;
    
    if (login === "admin" && password === "admin") {
        window.location.href = "yes.html"; 
    } else {
        window.location.href = "no.html"; 
    }
}

function seconnecter3() {
    let i = 0;
    do {
        var login = prompt("Nom d'utilisateur");
        var password = prompt("Mot de passe");
        
        if (login === "admin" && password === "admin") {
            document.write("Bienvenue : " + login);
            break;
        } else {
            alert("Accès refusé");
            i += 1;
        }
    } while (i < 3);

    if (i === 3) {
        alert("Délai dépassé");
    }
}

function cdc() {
    var chaine = prompt("Donner un mot");
    document.write(chaine.toUpperCase() + "<br>");
    document.write(chaine.toLowerCase() + "<br>");
    document.write("La chaîne contient " + chaine.length + " caractères <br>");
    document.write("La première lettre est " + chaine.substr(0, 1) + " caractère <br>");
}
function ligne() {
    window.location.href = "ajout.html";
}
function ajouterLigne(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    
    if (a == "" || b == "") {
        alert("Un ou deux champs sont vides");
    } else if (Number(b) < 10 || Number(b) > 20) {
        alert("Âge invalide, il doit être entre 10 et 20");
    } else {
        var table = document.getElementById("myTable"); 
        var newRow = table.insertRow(-1); 
        
        var cell1 = newRow.insertCell(0); 
        var cell2 = newRow.insertCell(1);
        
        cell1.innerHTML = a;  
        cell2.innerHTML = b;  
    }
}
