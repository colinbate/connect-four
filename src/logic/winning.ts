import type { Board, Point, Vector } from "./types";
import { ROWS, COLS, NUMBER_TO_WIN } from "./constants";

function outOfBounds(pt: Point) {
  return pt[0] < 0 || pt[0] >= COLS || pt[1] < 0 || pt[1] >= ROWS;
}

function pointAtDistance(point: Point, vector: Vector, distance: number) {
  const pt: Point = [
    point[0] + vector[0] * distance,
    point[1] + vector[1] * distance,
  ];
  return outOfBounds(pt) ? undefined : pt;
}

function checkVector(board: Board, row: number, col: number, vec: Vector) {
  const match = board[col][row];
  let total = 1;
  const oppVec = [vec[0] * -1, vec[1] * -1] as Vector;
  let vecs = [vec, oppVec];

  for (let distance = 1; distance < NUMBER_TO_WIN; distance += 1) {
    const dirs = vecs.length;
    let nextVecs: Vector[] = [];

    for (let v = 0; v < dirs; v += 1) {
      const pt = pointAtDistance([col, row], vecs[v], distance);

      if (pt && board[pt[0]][pt[1]] === match) {
        nextVecs.push(vecs[v]);
        total += 1;
      }
      if (total >= NUMBER_TO_WIN) {
        return true;
      }
    }

    vecs = nextVecs;
  }

  return false;
}

export function checkWin(board: Board, col: number) {
  const row = board[col].length - 1;
  return (
    checkVector(board, row, col, [1, 0]) ||
    checkVector(board, row, col, [1, 1]) ||
    checkVector(board, row, col, [0, 1]) ||
    checkVector(board, row, col, [1, -1])
  );
}
