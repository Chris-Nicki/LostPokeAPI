# **README - Pokemon Search Website** 
This is a Pokemon search website to find your lost pokemon, that retrieves information about Pokemon using the Pokeapi (https://pokeapi.co/). Users can enter a Pokemon's name or ID in the search bar, and the website will display details about the searched Pokemon.

## **Features:**

Search for Pokemon by name or ID:


![Search Bar](<static/images/Screenshot 2024-06-17 073111.png>)

Display Pokemon's name, type, image, abilities, weight, and top move

![card](<static/images/Screenshot 2024-06-17 073104.png>)

Technologies:

HTML: Defines the structure of the website content.
CSS : Styles the visual appearance of the website.
JavaScript: Handles user interaction and data fetching from the Pokeapi.
Running the Website:


## **Explanation of the Code:**

The code defines several functions:
handleSubmit: Handles the search form submission, retrieves Pokemon data, and displays it.
fetchPokemonData: Fetches Pokemon data from the Pokeapi using the provided search term.
displayPokemon: Creates the HTML structure for displaying the retrieved Pokemon information.
Delete Card: Potentially handles deleting displayed Pokemon cards.

GitHub Repository for actual code: https://github.com/Chris-Nicki/LostPokeAPI.git

##  **Further Enhancements:**

Implement error handling for invalid search terms or API failures.
Improve the user interface with CSS styling.
Add features like filtering Pokemon by type or generation.
Consider storing and managing searched Pokemon information for a more interactive experience (requires additional backend development).