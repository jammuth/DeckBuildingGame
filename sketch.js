var game;
var player;
var board;

function preload() {
    game = loadJSON('game.json');
}


function setup() {
    noCanvas();

    cards = game.cards;

    board = new Board(game.piles);

    const initialDeck = [];
    game.startingDeck.forEach(e => {
        const card = cards.find(c => c.id == e.cardId)
        for (let i = 0; i < e.qty; i += 1) initialDeck.push(card);
    });

    player = new Player(initialDeck);

    for (let i = 0; i < 5; i++) {
        player.play(0)
    }
    player.endTurn();
}