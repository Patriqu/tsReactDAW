function generatePeriodicWave(type: OscillatorType, frequency: number = 440, numberOfHarmonics: number = 0) {
    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.01;
    gainNode.connect(audioContext.destination);
    const oscillator = audioContext.createOscillator();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 2);
}

export function generateSinWave() {
    generatePeriodicWave('sine', getFrequencyForNote("A4"));
}
export function generateSquareWave() {
    generatePeriodicWave('square', getFrequencyForNote("A4"));
}
export function generateTriangleWave() {
    generatePeriodicWave('triangle', getFrequencyForNote("A4"));
}
export function generateSawtoothWave() {
    generatePeriodicWave('sawtooth', getFrequencyForNote("A4"));
}

