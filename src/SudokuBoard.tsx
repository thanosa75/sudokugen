import React from 'react';
import styles from './SudokuBoard.module.css';

type Board = (number | null)[][];

interface Props {
    board: Board;
}

const SudokuBoard: React.FC<Props> = ({ board }) => {
    return (
        <div className={styles.boardcontainer}>
            <div className={styles.board}>
                {board.flat().map((cell, index) => (
                    <div key={index} className={styles.cell}>
                        {cell || ' '}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SudokuBoard;
