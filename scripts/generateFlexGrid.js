const generateFlexGrid = (rows, columns, width, height) => {
    const gridWrapper = document.querySelector(".gridWrapper");

    // Container of cells
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = `${columns * width}px`;

    // Cells
    for (var i = 0; i < rows * columns; i++) {
        const cell = document.createElement('div');
        cell.style.width = `${width}px`;
        cell.style.height = `${height}px`;
        cell.style.border = '1px solid black';
        container.appendChild(cell);
    }

    gridWrapper.appendChild(container);
}

generateFlexGrid(gridRows, gridColumns, cellWidth, cellHeight);