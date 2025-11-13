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

let msgEL = document.querySelector('#msg');
let gridEL = document.querySelector('.grid');

let currentPlayer = 1;

player1ItemEL.innerHTML = 'X';
player1ScoreEL.innerHTML = '0';
player1NameEL.innerHTML = 'Joueur 1';

player2ScoreEL.innerHTML = 'O';
player2ScoreEL.innerHTML = '0';
player2NameEL.innerHTML = 'Joueur 2';

listColEl.forEach({el => 
    colEl.addEventListener('click', (event) => {
        console.log('click !', event.target.innerHTML);
        msgEL.innerHTML = "";
        msgEL.classList.remove('danger');
        msgEL.classList.remove('success');

        if (event.target.innerHTML = "") {
            if (currentPlayer == 1) {
                event.target.innerHTML = player1ItemEL.innerHTML;
                currentPlayer = 2;
            } else {
                event.target.innerHTML = player2ItemEL.innerHTML;
                currentPlayer = 1;
            }
        }else {
            msgEL.innerHTML = "Vous ne pourvez pas jouer ici !";
            msgEL.classList.add('danger');
    })
})