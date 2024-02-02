const gridRows = 20;
const gridColumns = 20;
const cellWidth = 25 // px
const cellHeight = 25 // px

let analyzer,
    bufferLength,
    dataArray;


// DOM Handlers
const audioPlayer = document.querySelector('#audioPlayer');
const audioFile = document.querySelector('#audioFile');