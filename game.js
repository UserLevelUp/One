var game = {
    init: function() {
        // 1. how many users
        // 2. names of users
        // 3. switch to game_loop mode
    },
    game_loop: function () {
        // Shuffle
        // Deal
        // inner game loop player turns
        //      Command to user
        //      Respoonse from user
        //      Check for uno
        //      Check for action card
        //      Check for game win
        // end inner loop
        // total points of win for other player held cards
    },
    addPlayer: function(name)
    {

    },
    deal: function() { 
        // deal the deck
    },
    shuffle: function() {
        // sort 
    },
    player: [],
    cards: [],
    gameModes: ["initializing", "shufling", "dealing", "player_turn", "player_action"],
    mode: null,


};

game.init();  // initialize the game
