const cardArray = [
    {
        name: "Asuna",
        img: "img/Asuna Yuuki.png"
    },
    {
        name: "Erza",
        img: "img/Erza Scarlet.png"
    },
    {
        name: "Kurumi",
        img: "img/Kurumi Tokisaki.png"
    },
    {
        name: "Makima",
        img: "img/Makima.png"
    },
    {
        name: "Mikasa",
        img: "img/Mikasa Ackerman.png"
    },
    {
        name: "Rias",
        img: "img/Rias Gremory.png"
    },
    {
        name: "Zero",
        img: "img/Zero Two.png"
    },
    // SEPARATION
    {
        name: "Makima",
        img: "img/Makima.png"
    },
    {
        name: "Mikasa",
        img: "img/Mikasa Ackerman.png"
    },
    {
        name: "Rias",
        img: "img/Rias Gremory.png"
    },
    {
        name: "Zero",
        img: "img/Zero Two.png"
    },
    {
        name: "Asuna",
        img: "img/Asuna Yuuki.png"
    },
    {
        name: "Erza",
        img: "img/Erza Scarlet.png"
    },
    {
        name: "Kurumi",
        img: "img/Kurumi Tokisaki.png"
    },
    {
        name: "Rias",
        img: "img/Rias Gremory.png"
    }
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('height', '180px');
        card.setAttribute('width', '180px');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);

        gridDisplay.append(card);
    }
}

createBoard();


function checkMatch() {
    const cards = document.querySelectorAll('img');

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[cardsChosenIds[0]].setAttribute('src', 'img/Match.gif');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/Match.gif');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'img/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'img/blank.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];
}


function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}





















