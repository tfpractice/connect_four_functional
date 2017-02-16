import 'jasmine-expect';
import { Graph, } from 'graph-curry';
const { fromElements, nodes, } = Graph;

import { Filter, Grid, } from 'game_grid';
const { colNodes, } = Grid;
const { cIDs, rIDs, } = Filter;

import { board, genNodes, nodesByPlayer, playerGraph, winComp, } from 'src/board';
import { claim, player, } from 'src/player';

const dick = player('Dick');
const jane = player('Jane');
const myBoard = board(...genNodes());
const myNodes = nodes(myBoard);
const col0 = colNodes(myBoard)(0);
const col1 = colNodes(myBoard)(1);
const [ c0r0, c0r1, c0r2, c0r3, c0r4, c0r5 ] = col0;
const [ c1r0, c1r1, c1r2, c1r3, c1r4, c1r5 ] = col1;

describe('Board', () => {
  describe('default', () => {
    it('is a grid with 7 columns and 6 rows', () => {
      expect(myBoard instanceof Map).toBeTrue();
      expect(cIDs(nodes(myBoard)).length).toBe(7);
      expect(rIDs(nodes(myBoard)).length).toBe(6);
    });
  });

  describe('nodesByPlayer', () => {
    it('returns an array of nodes with a speacified player', () => {
      expect(nodesByPlayer(myBoard)()).toBeArray();
    });
  });

  describe('playerGraph', () => {
    it('returns a graph of all nodes claimed by a player', () => {
      expect(playerGraph(myBoard)(jane) instanceof Map).toBeTrue();
    });
  });

  describe('winComp', () => {
    it('checks if the players component has more than three', () => {
      expect(winComp(myBoard, 3)).toBeTrue();
    });
  });
});
