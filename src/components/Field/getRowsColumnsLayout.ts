export default (rows:number, columns: number) => {
  if (!rows || !columns) return [[]];
  const layout = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < columns; j += 1) {
      row.push(i * rows + j + 1);
    }
    layout.push(row);
  }

  return layout;
};
