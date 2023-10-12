import React from 'react';
import styles from './InputComponent.module.css';

interface Props {
    onDifficultyChange: (value: number) => void;
    onBoardCountChange: (count: number) => void;
}

const InputComponent: React.FC<Props> = ({ onDifficultyChange, onBoardCountChange }) => {
    return (
        <div className={styles.container}>
            <label>Επίπεδο δυσκολίας: </label>
            <select onChange={(e) => onDifficultyChange(Number(e.target.value))}>
                <option value="20">Εύκολο</option>
                <option value="30">Μέτριο</option>
                <option value="40">Δύσκολο</option>
            </select>

            <label style={{ marginLeft: '20px' }}>Πόσα πινακάκια να φτιάξω: </label>
            <select onChange={(e) => onBoardCountChange(Number(e.target.value))}>
                <option value="3">3</option>
                <option value="6">6</option>
                <option selected value="9">9</option>
            </select>

            <button style={{ marginLeft: '20px' }} onClick={ (e) => window.print() }>Εκτύπωση</button>
        </div>
    );
}

export default InputComponent;
