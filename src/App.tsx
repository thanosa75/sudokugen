import React, { useState, useEffect } from 'react';
import InputComponent from './InputComponent';
import SudokuBoard from './SudokuBoard';
import { generateSudoku } from './sudokuGenerator';
import boardStyles from './SudokuBoard.module.css'; // Assuming this is the path


const App: React.FC = () => {
    const [difficulty, setDifficulty] = useState(20);
    const [boardCount, setBoardCount] = useState(9);
    const [boards, setBoards] = useState<(number | null)[][][]>([]);

    useEffect(() => {
        const generatedBoards = generateSudoku(difficulty, boardCount);
        setBoards(generatedBoards);
        generatedBoards.forEach(board => {
          // Remove cells based on difficulty to create the puzzle
          for (let i = 0; i < difficulty; i++) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
            board[row][col] = null;
          }
        });
    }, [difficulty, boardCount]);

    return (
        <div>
            <h1>Γεννήτρια Sudoku (数独)</h1>
            <InputComponent 
                onDifficultyChange={setDifficulty} 
                onBoardCountChange={setBoardCount}
            />
            <div className={boardStyles.boardcontainer}>
              {boards.map((board, boardIndex) => (
              <SudokuBoard key={boardIndex} board={board} />

            ))}
            </div>
        </div>
    );
}

export default App;
