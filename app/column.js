const Node = require('./node');
const { isFree } = Node;

const next = (nodes) => nodes.find(isFree);

module.exports = { next };