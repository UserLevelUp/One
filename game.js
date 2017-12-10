var scope = {};  // current scope.  i.e. which game are we currently interested in
var game = {

    // using wikipedia for reference and images 
    // https://en.wikipedia.org/wiki/Uno_(card_game)#/media/File:UNO_cards_deck.svg

    scope: {
        'instanceName': null, // when this game is created give it a name
        'uniqueIdentifier': null,
    }, // this initializes all the game objects and adds players who wish to join
    init: function() {
        let initSteps =
        {
            initCards: function() {
               // add 0 - 9 cards to start with
               scope.colors.forEach(color => {
               for(let i=0;i<10;i++)
               {
                    scope.addCard(i.toString(10), color, i);
               } 
            });
            
            }
                
        };
        initSteps.initCards(); // perform the first step
    },
    addPlayer: function(name)
    {

    },
    addCard: function(name, color, points)
    {

    },
    shuffle: function() {
        // sort 
    },
    deal: function() { 
        // deal the deck
    },
    players: [], // placeholder to initialize new players who want to join game
    colors: ['red', 'yellow', 'green', 'blue'],
    specialCardsWithZero: [     {'type': 'skip', 'points': 20}, 
                                {'type': 'reverse', 'points': 20},
                                {'type': 'plus2', 'points': 20},
                                {'type': 'wild', 'points': 50}
                             ],
    specialCardsWithoutZero: [  {'type': 'skip', 'points': 20}, 
                                {'type': 'reverse', 'points': 20},
                                {'type': 'plus2', 'points': 20},
                                {'type': 'draw4', 'points': 50}
                             ],
    cards: [], // place holder to initialize and use cards
    gameModes: ["initializing", "shufling", "dealing", "player_turn", "player_action"],
    mode: null,
    gameLoop: function()
    {
        scope = this; // this game
        while(scope.continueGame)
        {
           scope.init();  // initialize the game ... see init function above
            // actual game play goes here somewhere...
            /// ...

           // for now lets immediately end the game loop
           scope.continueGame = false;
        }        
    },
    continueGame: true, // currently set to false
};

game.gameLoop(); // begin the game loop