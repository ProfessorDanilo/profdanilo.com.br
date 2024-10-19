const frequencySlider = document.getElementById('frequencySlider');
const frequencyValue = document.getElementById('frequencyValue');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');

// Selecionar o formato da onda
const waveformInputs = document.querySelectorAll('input[name="waveform"]');
let selectedWaveform = 'sine';

waveformInputs.forEach(input => {
    input.addEventListener('change', (event) => {
        selectedWaveform = event.target.value;
    });
});

let audioContext;
let oscillator;

frequencySlider.addEventListener('input', (event) => {
    frequencyValue.textContent = event.target.value;
    if (oscillator) {
        oscillator.frequency.setValueAtTime(event.target.value, audioContext.currentTime);
    }
});

playButton.addEventListener('click', () => {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    oscillator = audioContext.createOscillator();
    oscillator.type = selectedWaveform; // Usar o formato da onda selecionado
    oscillator.frequency.setValueAtTime(frequencySlider.value, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
});

stopButton.addEventListener('click', () => {
    if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
    }
});