import React from 'react';
import styles from './InputComponent.module.css';

interface Props {
    onDifficultyChange: (value: number) => void;
    onBoardCountChange: (count: number) => void;
}

const InputComponent: React.FC<Props> = ({ onDifficultyChange, onBoardCountChange }) => {
    return (
        <div className={styles.container}>
            <label>Select Difficulty: </label>
            <select onChange={(e) => onDifficultyChange(Number(e.target.value))}>
                <option value="20">Easy</option>
                <option value="30">Medium</option>
                <option value="40">Hard</option>
            </select>

            <label style={{ marginLeft: '20px' }}>Number of Boards: </label>
            <select onChange={(e) => onBoardCountChange(Number(e.target.value))}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
            </select>
        </div>
    );
}

export default InputComponent;
