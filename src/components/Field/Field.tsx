import React from 'react';
import Cell from '@comp/Cell/Cell';
import getRowsColumnsLayout from './getRowsColumnsLayout';
import styles from './FieldStyles.module.css';

interface IFieldProps {
  rows: number,
  columns: number,
}

function Field({ rows, columns }: IFieldProps) {
  const rowsColumnsArray = getRowsColumnsLayout(rows, columns);
  const onClickHandler = (serialNumber: number) => {
    console.log(serialNumber);
  };

  return (
    <div>
      {
        rows && columns
          ? rowsColumnsArray.map((row) => (
            <div className={styles.fieldRow} key={row[0]}>
              {
                row.map(
                  (cell) => (
                    <Cell
                      serialNumber={cell}
                      onClickHandler={() => onClickHandler(cell)}
                      key={cell}
                    />
                  ),
                )
              }
            </div>
          ))
          : <div>Nothing to render</div>
      }
    </div>
  );
}

export default Field;
