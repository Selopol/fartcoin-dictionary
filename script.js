const dictionary = {
    "fart": "Freaking Amazing Ridiculous Token.",
    "gas": "Gaseous Air Supercharged.",
    "toot": "Totally Outrageous Online Token.",
    "poot": "Probably Overloaded Online Token.",
    "wind": "Why Is No-one Doing?",
    "stinky": "Some Tokens Invested, Not Yet Known.",
    "burp": "Big Unseen Ridiculous Post.",
    "passgas": "Please Ask Seriously, Gas At Stake.",
    "silentbutdeadly": "Some Incredibly Lucrative Emissions Have Evenly Launched Yet.",
    "stomach": "Some Token Making Amazing Coin Hype.",
    "coin": "Crap Over Internet News.",
    "nft": "Not Farting Tokens.",
    "crypto": "Cringe Real-Time Online Ponzi.",
    "pump": "Please Unload My Portfolio.",
    "rug": "Really Unreliable Garbage.",
    "hft": "Hype For Tokens.",
    "moons": "Meme Overloaded Online Nonsense Stocks.",
    "toad": "Totally Overpriced And Dumb.",
    "scam": "Some Cryptos Are Memes.",
    "moon": "Making Our Online Nonsense.",
    "dump": "Doesn't Usually Make Profits.",
    "shiba": "Scalable Hyperactive Blockchain Asset.",
    "doge": "Don't Overestimate Giant Enterprises.",
    "binance": "Billionaires Invest Now And Cryptos Explode.",
    "solana": "So Online, Like Another Network Asset.",
    "ethereum": "Everyone Thinks They Own Real Estate Under My Umbrella, Even Miners.",
    "cardano": "Creating All Real Decentralized Online Networks And Operations."
};

function searchWord() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const definition = dictionary[input];

    const wordTitle = document.getElementById("word-title");
    const wordDefinition = document.getElementById("word-definition");

    if (definition) {
        wordTitle.textContent = input.toUpperCase();
        wordDefinition.textContent = definition;
    } else {
        wordTitle.textContent = "WOAH!";
        wordDefinition.textContent = "We don't have that meme word in the dictionary. Try another one!";
    }
}

function randomWord() {
    const randomKey = Object.keys(dictionary)[Math.floor(Math.random() * Object.keys(dictionary).length)];
    const randomDefinition = dictionary[randomKey];

    document.getElementById("random-word-title").textContent = "Random Word: " + randomKey.toUpperCase();
    document.getElementById("random-word-definition").textContent = randomDefinition;
}
