const gridRows = 50;
const gridColumns = 50;
const cellWidth = 15 // px
const cellHeight = 15 // px

let analyzer,
    bufferLength,
    dataArray;


// DOM Handlers
const audioPlayer = document.querySelector('#audioPlayer');
const audioFile = document.querySelector('#audioFile');