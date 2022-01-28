class Player {
    constructor(initialDeck) {
        this.character = null;
        this.reset();
        this.deck = new Deck(initialDeck);
        this.hand = [];
        this.addCards(5)
    }
    reset() {
        this.resourceA = 0;
        this.resourceB = 0;
        this.resourceC = 0;
        this.buys = 1;
        this.actions = 1;
        this.fights = 1;
    }

    addResourceA(amount) {
        console.log(`Added ${amount}x Gold`)
        this.resourceA += amount;
    }
    addResourceB(amount) {
        console.log(`Added ${amount}x Ammo`)
        this.resourceB += amount;
    }
    addResourceC(amount) {
        console.log(`Added ${amount}x Damage`)
        this.resourceC += amount;
    }
    addCards(amount) {
        console.log(`Added ${amount}x Cards`)
        this.hand = this.hand.concat(this.deck.draw(amount));
    }
    addBuys(amount) {
        console.log(`Added ${amount}x Buys`)
        this.buys += amount;
    }
    addActions(amount) {
        console.log(`Added ${amount}x Actions`)
        this.actions += amount;
    }
    addFights(amount) {
        this.fights += amount;
    }
    endTurn() {
        let cards = this.hand.splice(0);
        this.deck.discardCards(cards);
        this.addCards(5);
        this.reset();
    }
    gain(card) {
        this.deck.discardCards(card);
    }
    play(index) {
        let card = this.hand.splice(index, 1)[0];
        console.log(`-------------${card.name} played-------------`)
        if (card.effects) {
            card.effects.forEach(element => {
                eval("this." + element);
            });

        }
        this.deck.discardCards(card);
    }
    buy(board, i) {
        let cost = board.getCost(i);
        if (cost < this.resourceA) {
            board.take(i);
        }
    }
}