let favoriteMovies = [
    "The Notebook",
    "How to Lose a Guy in 10 days",
    "The Devil wears Prada",
    "13 Going on 30",
    "She's All That",
    "10 Things I Hate About You",
    "Legally Blonde",
    "Little Women"
];

console.log(`My Favorite Movies ^-^`);

let index = 0;
while (index < favoriteMovies.length) {
    console.log(`${index + 1}. ${favoriteMovies[index]}`);
    index++;
}