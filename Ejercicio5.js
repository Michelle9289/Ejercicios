let people = ["María", "Dani", "Luis", "Juan", "Camila"];
let namLis = [];
let listLuis = [];
function ListNom(){
    for (let i = 0; i < people.length; i++) {
        const name = people[i];
        namLis.push(`<li class="list-group-item list-group-item-danger">${name}</li>`);
    }
    document.getElementById("List").innerHTML = namLis.join("");
}

function delDani(){
    delDani = people.splice(1,1);
    document.getElementById("delDan").innerHTML = `Se ha eliminado a ${delDani}`;
}

function delJuan(){
    delJuan = people.splice(2,1);
    document.getElementById("delJuan").innerHTML = `Se ha eliminado a ${delJuan}`;
}


function moveLuis(){
    delLuis = people.splice(1,1);
    addLuis = people.unshift("Luis");

    for (let i = 0; i < people.length; i++) {
        const name2 = people[i];
        listLuis.push(`<li class="list-group-item list-group-item-danger">${name2}</li>`);
    }
    document.getElementById("moveLuis").innerHTML = listLuis.join("");
}