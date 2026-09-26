const symbols = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍒", "🍒"];
let isLocked = false;

for (let i = symbols.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = symbols[i];
    symbols[i] = symbols[j]; 
    symbols[j] = temp;
}


const gameBoard = document.getElementById("gameBoard");
let firstCard = null;

for (let i = 0; i < symbols.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    gameBoard.appendChild(card);

    card.dataset.symbol = symbols[i];

    card.addEventListener("click", function () {
        if (isLocked === true){
            return;
        }

        card.textContent = card.dataset.symbol;
        card.classList.add("flipped");

        if (firstCard === null){
            firstCard = card;
        } else {
           isLocked = true;

           if (firstCard.dataset.symbol === card.dataset.symbol) {
               firstCard = null;
               isLocked = false;
               } else {
                 setTimeout(function()  {
                    card.textContent = "";
                    card.classList.remove("flipped");

                    firstCard.textContent = "";
                    firstCard.classList.remove("flipped");

                    firstCard = null;
                    isLocked = false;
                  }, 800);
                }
        }

    });

}

