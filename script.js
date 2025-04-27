const dictionary = {
    "fart": "Freaking Amazing Ridiculous Token.",
    "gas": "Gaseous Air Supercharged.",
    "shart": "Silent Hazardous Ass Releasing Toxicity.",
    "blockchain": "A decentralized digital ledger for cryptocurrencies.",
    "bitcoin": "A digital currency, the first to use blockchain technology.",
    "ethereum": "A decentralized platform for building decentralized apps (DApps).",
    "nft": "Non-Fungible Tokens, digital collectibles that represent ownership.",
    "solana": "A high-performance blockchain designed for decentralized applications.",
    "dogecoin": "A cryptocurrency that started as a meme but gained popularity.",
    "memecoin": "Cryptocurrencies inspired by internet memes and jokes.",
    "hype": "A widespread excitement and attention around something trending.",
    "rugpull": "A type of scam where developers abandon a cryptocurrency project.",
    "pump": "A sudden increase in the price of a cryptocurrency, often due to hype.",
    "dump": "A large sell-off of cryptocurrency, leading to a price drop.",
    "hodl": "A term meaning to hold onto cryptocurrency rather than sell, derived from a misspelling.",
    "fomo": "Fear of Missing Out, a common feeling in crypto and meme culture.",
    "whale": "A person or entity who holds a large amount of a cryptocurrency.",
    "bearmarket": "A market condition where prices are falling or expected to fall.",
    "bullmarket": "A market condition where prices are rising or expected to rise.",
    "altcoin": "Any cryptocurrency that isn't Bitcoin.",
    "stablecoin": "A cryptocurrency designed to maintain a stable value, often pegged to a fiat currency.",
    "defi": "Decentralized finance, a movement to create decentralized financial services using blockchain.",
    "staking": "The process of holding cryptocurrency in a wallet to support network operations.",
    "mining": "The process of validating and adding new transactions to the blockchain.",
    "tokenomics": "The study and design of the economic model behind a cryptocurrency token.",
    "smartcontract": "A self-executing contract where the terms of the agreement are directly written into code.",
    "gasfees": "The transaction fees on blockchain networks, often paid in the network's native currency.",
    "decentralized": "A system where control and decision-making are distributed across the network.",
    "dao": "Decentralized Autonomous Organization, a governance model where decisions are made collectively.",
    "stakingreward": "A reward given to participants for staking their cryptocurrency.",
    "airdrops": "The distribution of free tokens or coins to the community, often for promotional purposes.",
    "yieldfarming": "The process of earning rewards by providing liquidity to decentralized finance protocols.",
    "liquidity": "The ease with which an asset can be bought or sold without affecting its price.",
    "fomo": "The fear of missing out, often driving irrational investment decisions.",
    "token": "A unit of value issued on a blockchain, often used for access or utility within a network.",
    "dex": "Decentralized Exchange, a platform for trading cryptocurrencies without a central authority.",
    "nftart": "Art in the form of non-fungible tokens, often sold for high prices.",
    "cryptogems": "Hidden gems in the cryptocurrency market, often undervalued or overlooked.",
    "airdrops": "Free distribution of tokens to community members, often used as marketing.",
    "whitelisting": "The process of allowing certain users to participate in token sales or events.",
    "pumpanddump": "A type of scam where a cryptocurrency's price is artificially inflated before being sold off.",
    "merklehash": "A cryptographic technique used to efficiently and securely verify the integrity of data.",
    "block": "A batch of transactions on a blockchain that is confirmed and added to the ledger.",
    "proofwork": "A consensus algorithm used by Bitcoin to validate transactions through mining.",
    "stakingpool": "A collection of users who pool their crypto assets to increase their staking power.",
    "deflationary": "A cryptocurrency model where the total supply decreases over time.",
    "tokenburn": "The process of permanently removing tokens from circulation to reduce supply.",
    "nftmarketplace": "A digital marketplace where users can buy, sell, and trade NFTs.",
    "nftcollector": "Someone who buys and holds NFTs for investment or enjoyment.",
    "smartcontractauditing": "The process of reviewing a smart contract's code for security vulnerabilities.",
    "blockexplorer": "A tool that allows users to view and track blockchain transactions.",
    "ledger": "A record-keeping system for cryptocurrency transactions, often associated with a blockchain.",
    "lightningnetwork": "A layer 2 scaling solution for Bitcoin that allows for faster and cheaper transactions.",
    "whalealert": "A service that tracks large cryptocurrency transactions, often used by market watchers.",
    "moon": "The term used when a cryptocurrency's price rises dramatically in a short period of time.",
    "toad": "A term for a low-performing cryptocurrency, sometimes used humorously.",
    "shiba": "A popular meme coin inspired by the Shiba Inu dog, often compared to Dogecoin.",
    "sol": "The native cryptocurrency of the Solana blockchain.",
    "ether": "The native cryptocurrency of the Ethereum blockchain.",
    "cryptomining": "The process of verifying transactions on a blockchain and earning cryptocurrency as a reward.",
    "moonbeam": "A parachain on the Polkadot network designed to bring smart contracts to the Polkadot ecosystem.",
    "polkadot": "A multi-chain blockchain platform that facilitates interoperability between different blockchains.",
    "cryptoart": "Digital art that is tokenized and sold as NFTs.",
    "btc": "Abbreviation for Bitcoin, the first and most well-known cryptocurrency.",
    "fiat": "Traditional government-issued currency, like the dollar or euro.",
    "dexaggregator": "A platform that aggregates liquidity from various decentralized exchanges.",
    "flashloan": "A type of loan in decentralized finance (DeFi) that allows borrowing without collateral, typically for arbitrage.",
    "airdrops": "A method of distributing tokens for free to users, often used for marketing purposes.",
    "moonshot": "A term used for investments in cryptocurrencies that are expected to rise exponentially.",
    "dustingattack": "A type of attack in which a small amount of cryptocurrency is sent to a user's wallet to track their activities.",
    "whale": "A person or entity that holds a large amount of cryptocurrency.",
    "gaswars": "A competition where users bid for transaction processing on blockchain networks, driving up gas fees.",
    "degen": "A term used for individuals who engage in high-risk and speculative investments, often in cryptocurrency.",
    "yield": "The return on investment, often expressed as a percentage, earned from staking or farming.",
    "blocktime": "The time it takes for a new block to be added to a blockchain.",
    "validators": "Entities that validate transactions and add them to the blockchain in proof-of-stake networks.",
    "miningrig": "A specialized computer used for cryptocurrency mining.",
    "defispace": "The sector within the cryptocurrency industry focused on decentralized finance.",
    "airdrops": "Tokens distributed for free to community members, often for promotional purposes.",
    "cryptospace": "The broader ecosystem and market involving cryptocurrencies and blockchain projects.",
    "chainlink": "A decentralized oracle network that allows smart contracts to interact with external data sources.",

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
