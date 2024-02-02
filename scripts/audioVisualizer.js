// Audio input event
const audioAnalyzer = () => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const _analyzer = audioCtx.createAnalyser();
    _analyzer.fftSize = 2048;

    const _bufferLength = _analyzer.frequencyBinCount;
    const _dataArray = new Uint8Array(_bufferLength);
    const source = audioCtx.createMediaElementSource(audioPlayer);
    source.connect(_analyzer);
    source.connect(audioCtx.destination);
    source.onended = () => {
      source.disconnect();
    };

    analyzer = _analyzer;
    bufferLength = _bufferLength;
    dataArray = _dataArray;
  };


// Updating colors
const updateGridColorsBasedOnSoundWaveData= () => {
    const cells = Array.from(document.querySelectorAll('.gridWrapper div')).reverse();
    const columns = gridColumns;
    const columnHeight = gridRows;

    if(audioPlayer.paused) {
        cells.forEach(cell => cell.style.backgroundColor = 'white');
    } else {
        analyzer.getByteFrequencyData(dataArray);
        const sortedDataArray = Array.from(dataArray).sort((a, b) => b - a);

        for (let j=0; j < columns; j++) {
            const value = sortedDataArray[j % bufferLength] / 255;
            const cellsToColor = Math.floor(value * (columnHeight)); 

            for (let i=0; i < columnHeight; i++) {
                // index of cell
                const index = (j * columnHeight + ( columnHeight - 1 - i));
                const cell = cells[index];

                if (i < cellsToColor) {
                    const hue = value * 120;
                    cell.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
                } else {
                    cell.style.backgroundColor = 'white';
                }
            }
        }
    }

    requestAnimationFrame(updateGridColorsBasedOnSoundWaveData);
};



const onChangeAudioHandler = () => {
    const fileUpload = document.querySelector('#audioFile').files[0];
    if (fileUpload) {
        const objectUrl = URL.createObjectURL(fileUpload);
        audioPlayer.src = objectUrl;
        audioPlayer.load();

        audioAnalyzer()
    }
}

audioFile.addEventListener('change', onChangeAudioHandler);

audioPlayer.addEventListener('play', () => {
    if(analyzer) updateGridColorsBasedOnSoundWaveData();
 });
 
 audioPlayer.addEventListener('pause', () => {
    if(analyzer) updateGridColorsBasedOnSoundWaveData();
 });
