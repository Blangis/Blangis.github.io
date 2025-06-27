const grid = document.getElementById('cells');

for (let i=0; i<800; i++){
    const cell = document.createElement('div')
    cell.className='cell';
    grid.appendChild(cell);
}