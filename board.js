class Board {
    constructor(piles) {
        this.board = []

        piles.forEach(element => {
            const pile = [];
            game.startingDeck.forEach(e => {
                const card = cards.find(c => c.id == e.cardId)
                for (let i = 0; i < e.qty; i += 1) pile.push(card);
            });
            for (let i = [pile].length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [[pile][i], [pile][j]] = [[pile][j], [pile][i]];
            }
            this.board.push(pile);
        });
    }

    getCost(i) {
        return this.board[i][0].cost;
    }

    take(i) {
        this.board[i].splice(0, 1);
    }
}