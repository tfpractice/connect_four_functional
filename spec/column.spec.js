describe('Column', function() {
	beforeAll(function() {
		console.log('\n.........Column Spec.........');
		({ Column: Col } = app);
	});

	beforeEach(function() {
		// myColumn = Col.spawn();
		c0r0 = Node.spawn(0, 0);
		c0r1 = Node.spawn(0, 1);
		c0r2 = Node.spawn(0, 2);
		c0r3 = Node.spawn(0, 3);
		c0r4 = Node.spawn(0, 4);
		c0r5 = Node.spawn(0, 5);
		cNodes0 = [c0r0, c0r1, c0r2, c0r3, c0r4, c0r5];
	});

	describe('next', function() {
		it('returns the next free node', function() {
			expect(Col.next(cNodes0)).toBe(c0r0);
		});
	});

	describe('hasFree', function() {
		it('checks if any of the nodes are free', function() {
			expect(Col.hasFree(cNodes0)).toBeTrue();
		});
	});

	// describe('columns', function() {
	//     it('returns an array of columns', function() {
	//         // console.log(Column.columns(myColumn));
	//         expect(Column.columns(myColumn)).toBeArray();
	//     });
	// });
});