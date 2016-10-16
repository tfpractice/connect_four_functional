const Node = require('./node');
const { isFree } = Node;

const next = (nodes) => nodes.find(isFree);
const hasFree = (nodes) => nodes.some(isFree);

module.exports = { next, hasFree };