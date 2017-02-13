import 'jasmine-expect';
import { Graph, } from 'graph-curry';
const { fromElements, nodes, } = Graph;

import { Grid, } from 'game_grid';
const { cIDs, nodesByColumn, rIDs, } = Grid;

import { allComps, board, genNodes, hasFree, initNodes, next, nodesByPlayer,
   playerGraph, splitComps, winComp, } from 'src/board';
import player, { claim, } from 'src/player';

const dick = player('Dick');
const jane = player('Jane');
const myBoard = board(...genNodes());
const myNodes = nodes(myBoard);
const col0 = nodesByColumn(myBoard)(0);
const col1 = nodesByColumn(myBoard)(1);
const [ c0r0, c0r1, c0r2, c0r3, c0r4, c0r5 ] = col0;
const [ c1r0, c1r1, c1r2, c1r3, c1r4, c1r5 ] = col1;

describe('Board', () => {
  describe('default', () => {
    it('is a grid with 7 columns and 6 rows', () => {
      expect(myBoard instanceof Map).toBeTrue();
      expect(cIDs(myBoard).size).toBe(7);
      expect(rIDs(myBoard).size).toBe(6);
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

  describe('next', () => {
    it('returns the next free node', () => {
      expect(next(col0)).toBe(c0r0);
    });
  });

  describe('hasFree', () => {
    it('checks if any of the nodes are free', () => {
      col1.map(claim(dick));
      expect(hasFree(col0)).toBeTrue();
      expect(hasFree(col1)).toBeFalse();
    });
  });
  describe('allComps', () => {
    it('returns an array of components', () => {
      expect(allComps(myBoard)).toBeArray();
    });
  });
  describe('splitComps', () => {
    it('returns a map of all connected components by direction', () => {
      expect(splitComps(myBoard) instanceof Map).toBeTrue();
    });
  });

  describe('winComp', () => {
    it('checks if the players component has more than three', () => {
      expect(winComp(myBoard, 3)).toBeTrue();
    });
  });
});
