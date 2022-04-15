function ValidSudoku(testcase, board){
  let items = 0;
  let totalItems = 0;
  const messages = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        typeof board[i][j] !== 'number' ||
        board[i][j] > 9
      ){
        return 'Invalid';
      }
      items++;
      totalItems += board[i][j];
    }
  }

  let boardLength = board.length;
  if ( items !== (boardLength * 9) ){
    return 'Invalid';
  }

  if ( totalItems !== ( testcase * 405 )) {
    return  'Invalid';
  }

  for (let x = 0; x < testcase; x++) {
    messages.push('Valid')
  }

  return messages;
};

const param1 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 4, 3, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
  [2, 8, 6, 9, 4, 5, 1, 7, 3],
  [7, 1, 4, 6, 3, 2, 9, 5, 8],
  [9, 3, 5, 7, 8, 1, 4, 2, 6],
  [4, 2, 7, 3, 5, 6, 8, 1, 9],
  [6, 5, 8, 1, 9, 7, 3, 4, 2],
  [1, 9, 3, 4, 2, 8, 7, 6, 5],
  [3, 6, 1, 5, 7, 9, 2, 8, 4],
  [5, 4, 2, 8, 1, 3, 6, 9, 7],
  [8, 7, 9, 2, 6, 4, 5, 3, 1],
];

console.log(ValidSudoku(2, param1));