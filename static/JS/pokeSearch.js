
async function handleSubmit(event){
    event.preventDefault();

    const search = event.target.search.value;
    console.log(search);

    const pokemonData = await fetchPokemonData(search);
    console.log(pokemonData)

    displayPokemon(pokemonData)
}

async function fetchPokemonData(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return await response.json()
}

function displayPokemon(pokemon) {

    const id = Math.floor(Math.random() * 100000)
    const capitalizedName = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`;
    const html = `<div class="container d-flex flex-direction-column align-content-between   p-4 mx-auto card" id="card">
                        
                            <div class="d-flex justify-content-between align-items-baseline m-3 topCard">
                                <div class="name">
                                <h1>${pokemon.name}</h1>
                                </div>
                              
                                <div class="d-flex flex-row align-items-baseline type">
                                <h5>Type: 
                                <h4>${pokemon.types[0].type.name}
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                            <div class="d-flex justify-content-center" id="cardBorder" >
                                
                                <img src=${pokemon.sprites.front_default} class="img-fluid" id="image" alt=${pokemon.name}>
                            </div>
                            </div>
                            <div class="mt-3 mt-d-0 ms-md-3">
                                <div class="d-flex flex-row abilities">
                                    
                                    <p>Abilities: ${pokemon.abilities[0].ability.name},
                                        ${pokemon.abilities[1].ability.name}
                                    </p>
                                </div>
                                <p>Weight: ${pokemon.weight} lbs.
                                <p>Top Move: ${pokemon.moves[0].move.name}
                                                
                                </p>
                                <button onclick=deleteCard(${id}) class="btn btn-outline-info">Delete</button>
                            </div>
                        
                    </div>                        
                `;
    const card = document.createElement('div');
    card.setAttribute('id',id)
    card.innerHTML =html;

    const display = document.getElementById("pokeCard");
    display.appendChild(card);
}

function deleteCard(cardId) {
  const cardElement = document.getElementById(cardId);
  if (cardElement) {
    cardElement.parentNode.removeChild(cardElement);
  } else {
    console.error("Card with ID", cardId, "not found");
  }
}