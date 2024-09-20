const playerContainer = document.getElementById("playerContainer");
const navButtons = document.querySelectorAll(".nav-btn");
const playerData = {
    goalkeepers: ["MONIO.jpg", "FRED.webp", "OMUCHE.webp"],
    defenders: ["PRINCE.webp", "SAM.webp", "STEPHEN.webp", "OJOK.jpg", "ELVIS.jpg", "OSOI.jpg", "OKIRING.webp", "SHAMALA.webp",],
    midfielders: ["BARAZA.jpg", "EMMANUEL.jpg", "MAZA.jpg", "ODIRA.jpg", "ONDEKO.jpg", "OSCAR.jpg", "OUMA.jpg", "CHETAMBE.webp", "GERRY.webp", "JOSEPH.webp"],
    strikers: ["MASAFU.jpg", "OKELLO.jpg", "NZEI.jpg", "WANGAI.jpg", "ERICK.webp", "FELIX.webp", "SIJE.webp"],
    staff: ["EDWIN.jpg", "BONDIA.jpg", "ISAAC.jpg", "PAUL.jpg", "ATINDI.jpg"]
};

function loadPlayers(category) {
    playerContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    playerData[category].forEach((player, index) => {
        const playerFrame = document.createElement("div");
        playerFrame.classList.add("player-frame");
        playerFrame.style.animationDelay = `${index*.1}s`;
        const playerImage = document.createElement("img");
        playerImage.src = `./public/team/team-profile/${category}/${player}`;
        playerImage.alt = `${category} ${index+1}`;
        playerImage.onerror = function() {
            this.src = "./public/shop3.jpg"
        };
        const playerInfo = document.createElement("div");
        playerInfo.classList.add("player-info");
        const playerName = document.createElement("div");
        playerName.classList.add("player-name");
        playerName.textContent = `Player ${index+1}`;
        const playerPosition = document.createElement("div");
        playerPosition.classList.add("player-position");
        playerPosition.textContent = category.slice(0, -1).charAt(0).toUpperCase() + category.slice(1, -1);
        playerInfo.appendChild(playerName);
        playerInfo.appendChild(playerPosition);
        playerFrame.appendChild(playerImage);
        playerFrame.appendChild(playerInfo);
        fragment.appendChild(playerFrame)
    });
    playerContainer.appendChild(fragment)
}
navButtons.forEach(button => {
    button.addEventListener("click", () => {
        navButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        loadPlayers(button.dataset.category)
    })
});
loadPlayers("goalkeepers");