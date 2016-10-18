describe('Player', function () {
    beforeAll(function () {
        //console.log('\n.........Player Spec.........');
        ({ Player: PR, Node } = app);
    });

    beforeEach(function () {
        dick = Player.spawn('Dick');
        jane = Player.spawn('Jane');
        myBoard = Board.spawn();
        myNodes = Board.nodes(myBoard);
        col0 = [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5] = byCol(
         myBoard)(0);
        col1 = [c1r0, c1r1, c1r2, c1r3, c1r4, c1r5] = byCol(
         myBoard)(1);
    });

    describe('spawn', () => {
        it('returns an object with a ', () => {
            expect(dick).toBeObject();
        });
    });
    describe('name ', () => {
        it('retrieves the name attribute', () => {
            expect(PR.name(dick)).toBe('Dick');
        });
    });

    describe('score ', () => {
        it('retrieves the score attribute', () => {
            expect(PR.score(dick)).toBe(0);
        });
    });
    describe('resetScore ', () => {
        it('retrieves the resetScore attribute', () => {
            PR.resetScore(dick);
            expect(PR.score(dick)).toBe(0);
        });
    });
    describe('incrementScore ', () => {
        it('retrieves the incrementScore attribute', () => {
            PR.resetScore(dick);
            expect(PR.score(dick)).toBe(0);
        });
    });
    describe('decrementScore ', () => {
        it('retrieves the decrementScore attribute', () => {
            PR.resetScore(dick);
            expect(PR.score(dick)).toBe(0);
        });
    });
    describe('claim', () => {
        it('sets the object player attribute to the Player',
         function () {
            let nd00 = Node.spawn(0, 0);
            PR.claim(dick)(nd00);
            PR.claim(dick)();
            expect(nd00.player).toBe(dick);
        });
    });

    describe('rowComps,', function () {
        it('returns the rowComponents claimed by the player',
         function () {
            Board.nodesByRow(myBoard)(3).map(Player.claim(
             dick));
            Board.nodesByRow(myBoard)(5).map(Player.claim(
             dick));
            //console.log([...PR.rowComps(dick)(myBoard)].map(STR.pathString));
            //console.log(PR.rowComps(dick)(myBoard).size);
        });
    });

    describe('colComps,', function () {
        it('returns the rowComponents claimed by the player',
         function () {
            Board.nodesByColumn(myBoard)(3).map(Player.claim(
             dick));
            Board.nodesByColumn(myBoard)(5).map(Player.claim(
             dick));
			//console.log([...PR.colComps(dick)(myBoard)].map(STR.pathString));
			//console.log(PR.colComps(dick)(myBoard).size);
        });
    });

    describe('posComps,', function () {
        it('returns the rowComponents claimed by the player',
         function () {
            Board.nodesByColumn(myBoard)(3).map(Player.claim(
             dick));
            Board.nodesByRow(myBoard)(5).map(Player.claim(
             dick));
            Board.nodesByPVector(myBoard)(3, 5).map(
             Player.claim(dick));
            // console.log([...PR.posComps(dick)(myBoard)].map(STR.pathString));
            // console.log(PR.posComps(dick)(myBoard).size);
        });
    });

    describe('negComps,', function () {
        it('returns the rowComponents claimed by the player',
         function () {
            Board.nodesByColumn(myBoard)(3).map(Player.claim(
             dick));
            Board.nodesByRow(myBoard)(5).map(Player.claim(
             dick));
            Board.nodesByNVector(myBoard)(3, 5).map(
             Player.claim(dick));
            // col1.map(Player.claim(dick));
            //console.log([...PR.negComps(dick)(myBoard)].map(STR.pathString));
            //console.log(PR.negComps(dick)(myBoard).size);
        });
    });
});
