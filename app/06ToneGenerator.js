const frequencySlider = document.getElementById('frequencySlider');
const frequencyNumber = document.getElementById('frequencyNumber');
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

//listeners adicionados para a caixa de número
// Sincronizar o slider com a caixa de número
frequencySlider.addEventListener('input', (event) => {
    const freq = parseFloat(event.target.value).toFixed(1);
    frequencyValue.textContent = freq;
    frequencyNumber.value = freq;
    if (oscillator) {
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    }
});

// Novo listener para sincronizar a caixa de número com o slider
frequencyNumber.addEventListener('input', (event) => {
    let freq = parseFloat(event.target.value);
    if (isNaN(freq)) freq = 200; // valor padrão
    freq = Math.min(Math.max(freq, 20), 500); // limitar entre 20 e 500 Hz
    freq = freq.toFixed(0);
    frequencySlider.value = freq;
    frequencyValue.textContent = freq;
    if (oscillator) {
        oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
    }
});
