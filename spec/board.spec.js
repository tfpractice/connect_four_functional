describe('Board', function() {
    beforeAll(function() {
        console.log('\n.........Board Spec.........');
    });

    beforeEach(function() {
        myBoard = Board.spawn();
    });

    it('is an object', function() {
        // console.log(myBoard);
        // GameGraph.connectAdjacents(myBoard);
        expect(myBoard).toBeObject();
    });
});