import React from 'react';
import styles from './CellStyles.module.css';

interface ICell {
  serialNumber: number,
  onClickHandler: () => void
}

function Cell({ serialNumber, onClickHandler }: ICell) {
  return (
    <div role="none" className={styles.cell} onClick={onClickHandler}>
      { serialNumber }
    </div>
  );
}

export default Cell;
