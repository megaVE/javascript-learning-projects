let nomes = ["Ryuberto", "Math", "Vinicius", "Rozalyna", "Rydzanne"];
let a;

for(a = 0; a < nomes.length; a++){
    if(nomes[a] === "Vinicius")
        a = nomes.length;
}

if(a === nomes.length+1)
    console.log("Imię znalezione!");
else
    console.log("Imię nie zostało znalezione!");