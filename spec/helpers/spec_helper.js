beforeAll(function() {
    require('jasmine-expect');
    app = require('../../index');
    GT = require('functional_graph_theory');
    GG = require('game_grid');
    // ({ Utils: { Strings: STR }, } = GT);
    // ({ Cell, Grid, GameGraph, Player: GP, Game } = GG);
    ({ Node, Board, Player, Game, Utils } = app);
    ({ Commands: Comms, Strings: STR } = Utils);
});

beforeEach(function() {});