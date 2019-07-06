module.exports = function solveSudoku(matrix) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {

            if (!matrix[row][col]) {
                for (var k = 1; k <= 9; k++) {
                    if (addNum(matrix, row, col, k)) {
                        matrix[row][col] = k;

                        if (solveSudoku(matrix)) {
                            return matrix;
                        }

                        matrix[row][col] = 0;
                    }
                }

                return false;
            }
        }
    }

    return matrix;
};

function addNum(matrix, i, j, k) {

    var a, b;

    for (a = 0; a <= 8; a++) {
        if (a !== i && matrix[a][j] === k) {
            return false;
        }
    }

    for (a = 0; a <= 8; a++) {
        if (a !== j && matrix[i][a] === k) {
            return false;
        }
    }

    var y = Math.floor(i / 3) * 3,
        x = Math.floor(j / 3) * 3;

    for (a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
            if (a !== i && b !== j && matrix[y + a][x + b] === k) {
                return false;
            }
        }
    }

    return true;
}