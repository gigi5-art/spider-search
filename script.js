const spiderData = {
    "spider-man": {
        title: "Spider-Man",
        text: "A friendly neighborhood superhero known for his spider abilities, web-slinging, and quick reflexes."
    },

    "peter parker": {
        title: "Peter Parker",
        text: "Peter Parker is one of the most famous Spider-Man characters. He is a photographer from Queens who gained spider-like abilities."
    },

    "miles morales": {
        title: "Miles Morales",
        text: "Miles Morales is a Spider-Man from Brooklyn who became part of the wider Spider-Verse."
    },

    "gwen stacy": {
        title: "Gwen Stacy",
        text: "Gwen Stacy is a Spider-hero from another universe, commonly known as Spider-Woman or Ghost-Spider."
    },

    "venom": {
        title: "Venom",
        text: "Venom is a powerful symbiote character closely connected to Spider-Man and Eddie Brock."
    },

    "green goblin": {
        title: "Green Goblin",
        text: "Green Goblin is one of Spider-Man's most recognizable enemies, often associated with Norman Osborn."
    },

    "doctor octopus": {
        title: "Doctor Octopus",
        text: "Doctor Octopus, also known as Doc Ock, is a brilliant scientist and one of Spider-Man's classic villains."
    },

    "mary jane": {
        title: "Mary Jane Watson",
        text: "Mary Jane Watson is one of the most well-known characters in Spider-Man stories."
    },

    "aunt may": {
        title: "Aunt May",
        text: "Aunt May is Peter Parker's aunt and one of the most important people in his life."
    },

    "spider-verse": {
        title: "Spider-Verse",
        text: "The Spider-Verse is a concept involving different Spider-heroes from alternate universes."
    },

    "web shooters": {
        title: "Web Shooters",
        text: "Web shooters are devices associated with Spider-Man that allow him to shoot webbing."
    },

    "daily bugle": {
        title: "Daily Bugle",
        text: "The Daily Bugle is a fictional newspaper connected to Peter Parker and Spider-Man."
    }
};


function searchSpiderVerse() {

    const input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const results = document.getElementById("results");

    results.innerHTML = "";

    if (input === "") {
        results.innerHTML = `
            <div class="no-results">
                <h2>🕷️ SEARCH SOMETHING!</h2>
                <p>Even Spider-Man can't find an empty search.</p>
            </div>
        `;
        return;
    }

    if (spiderData[input]) {

        const result = spiderData[input];

        results.innerHTML = `
            <div class="result-card">
                <h2>${result.title}</h2>
                <p>${result.text}</p>
            </div>
        `;

        return;
    }

    const partialResults = Object.values(spiderData).filter(item =>
        item.title.toLowerCase().includes(input)
    );

    if (partialResults.length > 0) {

        partialResults.forEach(item => {

            results.innerHTML += `
                <div class="result-card">
                    <h2>${item.title}</h2>
                    <p>${item.text}</p>
                </div>
            `;

        });

        return;
    }

    results.innerHTML = `
        <div class="no-results">
            <h2>🕸️ NO RESULTS FOUND</h2>
            <p>
                This search engine only searches the Spider-Verse.
            </p>
            <br>
            <p>
                Nice try, civilian. 🕷️
            </p>
        </div>
    `;
}


function quickSearch(searchTerm) {

    document.getElementById("searchInput").value = searchTerm;

    searchSpiderVerse();
}


document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchSpiderVerse();
        }

    });
