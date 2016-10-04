const spawn = (column = null, row = null) => ({
	column,
	row,
	toString: () =>
		`{ cell::${column}_${row} }`,
});
const column = ({ column }) => column;
const row = ({ row }) => row;
const cellString = ({ column, row }) => `{ cell::${column}_${row} }`;

const colDiff = ({ column: c0 }) => ({ column: c1 }) => (c0 - c1);
const rowDiff = ({ row: r0 }) => ({ row: r1 }) => (r0 - r1);
const tangent = (n0) => (n1) => (rowDiff(n0)(n1)) / (colDiff(n0)(n1));
const angleBetween = (n0) => (n1) =>
	((Math.atan(tangent(n0)(n1)) % Math.PI) + Math.PI) % Math.PI;

const cAdj = (n0) => (n1) => Math.abs(colDiff(n0)(n1)) < 2;
const rAdj = (n0) => (n1) => Math.abs(rowDiff(n0)(n1)) < 2;

const isNeighbor = (n0) => (n1) =>
	x_isEquivalent(n0)(n1) && cAdj(n0)(n1) && rAdj(n0)(n1);

const sameColumn = (n0) => (n1) => Math.abs(colDiff(n0)(n1)) === 0;
const sameRow = (n0) => (n1) => Math.abs(rowDiff(n0)(n1)) === 0;
const samePVector = (n0) => (n1) => angleBetween(n0)(n1) === Math.PI * 0.25;
const sameNVector = (n0) => (n1) => angleBetween(n0)(n1) === Math.PI * 0.75;

const isEquivalent = (c0) => (c1) =>
	colDiff(c0)(c1) === rowDiff(c0)(c1) && rowDiff(c0)(c1) === 0;
const x_isEquivalent = (src) => (alt) => !isEquivalent(src)(alt);

module.exports = {
	spawn,
	column,
	row,
	cellString,
	colDiff,
	rowDiff,
	tangent,
	angleBetween,
	samePVector,
	sameNVector,
	cAdj,
	rAdj,
	isNeighbor,
	isEquivalent,
	x_isEquivalent,
	sameColumn,
	sameRow,
};