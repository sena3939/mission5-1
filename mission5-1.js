async function getData() {
    var id = Math.floor(Math.random()*1025);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    let img = document.getElementById("img");
    img.src = data.sprites.front_default;
    let name = document.getElementById("name");
    name.innerText = `name: ${data.name}`;
    let type = document.getElementById("type");
    type.innerText = "types:"
    for(var i=0; i<data.types.length; i++){
        type.innerText += ` ${data.types[i].type.name}`
    }
    let height = document.getElementById("height");
    height.innerText = `height: ${data.height/10} m`;
    let weight = document.getElementById("weight");
    weight.innerText = `weight: ${data.weight/10} kg`;
}