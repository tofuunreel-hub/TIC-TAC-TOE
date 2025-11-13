console.log('Hello world !');

let player1EL = document.querySelector('#player1');
let player2EL = document.querySelector('#player2');

let player1ItemEL = document.querySelector('#player1 .item');
let player1NameEL = document.querySelector('#player1 .name');
let player1ScoreEL = document.querySelector('#player1 .score');

let player2ItemEL = document.querySelector('#player2 .item');
let player2NameEL = document.querySelector('#player2 .name');
let player2ScoreEL = document.querySelector('#player2 .score');

let msgEL = document.querySelector('#msg');
let gridEL = document.querySelector('.grid');

player1ItemEL.innerHTML = 'X';
player1ScoreEL.innerHTML = '0';
player1NameEL.innerHTML = 'Joueur 1';

player2ScoreEL.innerHTML = '0';
player2ScoreEL.innerHTML = '0';
player2NameEL.innerHTML = 'Joueur 2';