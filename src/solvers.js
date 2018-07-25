/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {
  var board = new Board({ n: n });
  var solution = board.rows();

  for (var i = 0; i < solution.length; i++) {
    var row = solution[i];

    for (var j = 0; j < row.length; j++) {
      var square = row[j];
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0; //fixme
  var board = new Board({ n: n });
  // function(combos)
  var putRooks = function (combos) {
    // if combos === n
    if (combos === n) {
      // increment solutionCount
      solutionCount++;
      return;
    }
    // for loop
    for (var i = 0; i < n; i++) {
      // togglepiece(combos, i)
      board.togglePiece(combos, i);
      // check anyROok conflicts
      if (!board.hasAnyRooksConflicts()) {
        putRooks(combos + 1);
      }
      board.togglePiece(combos, i);
    }
  };
  putRooks(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var board = new Board({ n: n });
  var solution = board.rows();

  // for (var i = 0; i < solution.length; i++) {
  //   var row = solution[i];

  var queens = function (combos) {
    //base case
    if (combos === n) {
      return;
    }
    for (var j = 0; j < solution.length; j++) {
      board.togglePiece(combos, j);
      if (board.hasAnyQueensConflicts()) {
        queens(combos + 1);
      }
      board.togglePiece(combos, j);
    }
  };
  // check for empty row
  if (!row.includes(1)) {
    queens(0);
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
