// sudokuGenerator.ts

type Cell = number | null;
type Board = Cell[][];

const BOARD_SIZE = 9;
const SUBGRID_SIZE = 3;

// Utility function to check if a number can be placed in a specific cell
function isSafe(board: Board, row: number, col: number, num: number): boolean {
    for (let x = 0; x < BOARD_SIZE; x++) {
        if (board[row][x] === num || board[x][col] === num) {
            return false;
        }
    }

    const startRow = row - (row % SUBGRID_SIZE);
    const startCol = col - (col % SUBGRID_SIZE);

    for (let i = 0; i < SUBGRID_SIZE; i++) {
        for (let j = 0; j < SUBGRID_SIZE; j++) {
            if (board[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku(board: Board): boolean {
    let emptyCell = findEmptyCell(board);
    if (!emptyCell) {
        return true;
    }

    const [row, col] = emptyCell;

    for (let num = 1; num <= BOARD_SIZE; num++) {
        if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (solveSudoku(board)) {
                return true;
            }
            board[row][col] = null;
        }
    }

    return false;
}

function findEmptyCell(board: Board): [number, number] | null {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === null) {
                return [i, j];
            }
        }
    }
    return null;
}
export function generateSudoku(difficulty: number, count: number = 1): (number | null)[][][] {
    const generatedBoards: (number | null)[][][] = [];

    for (let i = 0; i < count; i++) {
        const board: (number | null)[][] = Array.from({ length: 9 }, () => Array(9).fill(null));

        // Fill diagonal subgrids
        for (let i = 0; i < BOARD_SIZE; i += SUBGRID_SIZE) {
            fillDiagonalSubgrid(board, i, i);
        }

        // Solve the partially filled board
        solveSudoku(board);
        // Debug: Print the solved grid to the console
        console.log("Solved Sudoku Grid:");
        board.forEach(row => {
            console.log(row.join(" "));
        }); 

        // Push the generated board to the array
        generatedBoards.push(board);
    }

    return generatedBoards;
}

function fillDiagonalSubgrid(board: Board, row: number, col: number) {
    for (let i = 0; i < SUBGRID_SIZE; i++) {
        for (let j = 0; j < SUBGRID_SIZE; j++) {
            let num;
            do {
                num = Math.floor(Math.random() * BOARD_SIZE) + 1;
            } while (!isSafe(board, row + i, col + j, num));
            board[row + i][col + j] = num;
        }
    }
}

