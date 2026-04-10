function buscarPokemon(){
    const nombre = document.getElementById("nombrePokemon").value;


    if(nombre == ''){
        alert("Ingresa el nombre de un pokemon")
        return
    }
    document.getElementById("loading").style.display = "block";
        fetch("https://pokeapi.co/api/v2/pokemon/" + nombre) .then(response => {
    if(!response.ok){
        throw new Error("Pokemon no encontrado")
    }
    return response.json()
}).then(data => mostrarPokemon(data)).catch(error => {
    document.getElementById("loading").style.display = "none"
    alert("Pokemon no encontrado")
   
})

}


function mostrarPokemon(data){
document.getElementById("loading").style.display = "none";
const resultado = document.getElementById("resultado");
   resultado.innerHTML = `
    <h2>Nombre: ${data.name}</h2>
    <img src="${data.sprites.front_default}">
    <h2>Tipo: ${data.types[0].type.name}</h2>
    <h2>Peso: ${data.weight}</h2>
    <h2>Altura: ${data.height}</h2>
    `;


}
