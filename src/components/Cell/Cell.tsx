import React, { FC } from 'react';
import styles from './CellStyles.module.css';

interface ICellProps {
  serialNumber: number,
  onClickHandler: () => void
}

const Cell: FC<ICellProps> = ({ serialNumber, onClickHandler }) => (
  <div role="none" className={styles.cell} onClick={onClickHandler}>
    { serialNumber }
  </div>
);

export default Cell;
