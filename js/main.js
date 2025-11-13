console.log('Hello world !');

let player1EL = document.querySelector('#player1');
let player2EL = document.querySelector('#player2');

let player1ItemEL = document.querySelector('#player1 .item');
let player1NameEL = document.querySelector('#player1 .name');
let player1ScoreEL = document.querySelector('#player1 .score');

let player2ItemEL = document.querySelector('#player2 .item');
let player2NameEL = document.querySelector('#player2 .name');
let player2ScoreEL = document.querySelector('#player2 .score');

let listColEl = document.querySelectorAll('.col');
let cola1El = document.querySelector('.a1');
let colb1El = document.querySelector('.b1');
let colc1El = document.querySelector('.c1');
let cola2El = document.querySelector('.a2');
let colb2El = document.querySelector('.b2');
let colc2El = document.querySelector('.c2');
let cola3El = document.querySelector('.a3');
let colb3El = document.querySelector('.b3');
let colc3El = document.querySelector('.c3');

let msgEL = document.querySelector('#msg');
let gridEL = document.querySelector('.grid');

let currentPlayer = 0;
let PlayersItems = ["X", "O"]
let Playersscores = [0, 0];
let win = false

player1ItemEL.innerHTML = PlayersItems[0];
player1ScoreEL.innerHTML = PlayersScores[0];
player1NameEL.innerHTML = 'Joueur 1';

player2ScoreEL.innerHTML = PlayersItems[1];
player2ScoreEL.innerHTML = PlayersScores[1];
player2NameEL.innerHTML = 'Joueur 2';

const verif = () => {
    if (cola1El.innerHTML == PlayersItems[currentPlayer] &&
        colb1El.innerHTML == PlayersItems[currentPlayer] &&
        colc1El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (cola2El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colc2El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (cola3El.innerHTML == PlayersItems[currentPlayer] &&
        colb3El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (cola1El.innerHTML == PlayersItems[currentPlayer] &&
        cola2El.innerHTML == PlayersItems[currentPlayer] &&
        cola3El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (colb1El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colb3El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (colc1El.innerHTML == PlayersItems[currentPlayer] &&
        colc2El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (cola1El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colc3El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    if (cola3El.innerHTML == PlayersItems[currentPlayer] &&
        colb2El.innerHTML == PlayersItems[currentPlayer] &&
        colc1El.innerHTML == PlayersItems[currentPlayer]) {
        return true;
    }
    return false;
};

listColEl.forEach(ColEl => {
    ColEl.addEventListener('click', (event) => {
        console.log('click !', event.target.innerHTML);
        msgEL.innerHTML = "";
        msgEL.classList.remove('danger');
        msgEL.classList.remove('success');

        if (!win) {
            if (event.target.innerHTML = "") {
                if (currentPlayer == 0) {
                    event.target.innerHTML = player1ItemEL.innerHTML;
                } else {
                    event.target.innerHTML = player2ItemEL.innerHTML;
                }
                win = verif();

                if (win) {
                    msgEL.innerHTML = "Player" + (currentPlayer + 1) + "gagne"
                    msgEL.classList.add("success");

                    PlayersScore[currentPlayer] ++;
                    player1ScoreEL.innerHTML = PlayersScores[0];
                    player2ScoreEL.innerHTML = PlayersScores[1];
                } else {
                    if (currentPlayer == 0) {
                        currentPlayer = 1;
                    } else {
                        currentPlayer = 0;
                    }
                }
            } else {
                msgEL.innerHTML = "Vous ne pourvez pas jouer ici !";
                msgEL.classList.add('danger');
            }
        } else {
            msgEL.innerHTML = "Partie terminer !";
            msgEL.classList.add("danger")
        }
    })
});