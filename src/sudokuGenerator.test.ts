import { generateSudoku } from './sudokuGenerator';

describe('Sudoku Generator', () => {
    it('should generate a valid Sudoku grid', () => {
        const boards = generateSudoku(20, 1);
        const board = boards[0]; // Get the first board from the generated boards

        // Check if board is of correct size
        expect(board.length).toBe(9);
        board.forEach(row => expect(row.length).toBe(9));

        // Check if board has numbers between 1 and 9
        board.forEach(row => {
            row.forEach(cell => {
                if (cell !== null) { // Ensure the cell is not null before checking its value
                    expect(cell).toBeGreaterThanOrEqual(1);
                    expect(cell).toBeLessThanOrEqual(9);
                }
            });
        });

        // TODO: Additional tests can be added to check the validity of the Sudoku rules
    });
});

