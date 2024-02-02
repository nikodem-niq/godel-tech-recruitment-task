const generateFlexGrid = (rows, columns, width, height) => {
    const gridWrapper = document.querySelector(".gridWrapper");

    // Container of cells
    for(let i=0; i<columns; i++) {
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.id = `column_${i+1}`;
        container.style.flexDirection = 'column';
        container.style.width = `${width}px`;
        for (let j = 0; j < rows; j++) {
            const cell = document.createElement('div');
            cell.style.width = `${width}px`;
            cell.style.height = `${height}px`;
            cell.style.border = '1px solid black';
            container.appendChild(cell);
        }
        gridWrapper.appendChild(container);
    }
}

generateFlexGrid(gridRows, gridColumns, cellWidth, cellHeight);