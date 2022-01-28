class Deck {
    constructor(initialDeck) {
        //create deck
        this.deck = initialDeck;

        //shuffle deck
        this.shuffle(this.deck);

        this.discardPile = [];
    }

    draw(a) {
        if (a > this.deck.length + this.discardPile.length) {
            console.error('Not Enough cards');
        }

        let drawnCards = [];
        if (a > this.deck.length) {
            drawnCards = this.deck;
            console.log(drawnCards);
            this.deck = this.discardPile;
            this.shuffle(this.deck);
            this.discardPile = [];
            drawnCards = drawnCards.concat(this.deck.splice(0, a - drawnCards.length));
            console.log(drawnCards);
        } else {
            drawnCards = this.deck.splice(0, a);
        }
        return drawnCards;
    }

    discardCards(a) {
        this.discardPile = this.discardPile.concat(a);
    }

    combine() {
        this.deck = this.deck.concat(this.discardPile.splice(0));
        this.shuffle(this.deck);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}