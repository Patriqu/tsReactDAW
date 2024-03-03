export function createSupersawOscillators() {
    const audioContext = new AudioContext();
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.01;
    gainNode.connect(audioContext.destination);

    const oscillatorNode = audioContext.createOscillator();
    oscillatorNode.type = 'sawtooth';
    oscillatorNode.frequency.value = 440;
    oscillatorNode.connect(gainNode);

    const oscillatorNode2 = audioContext.createOscillator();
    oscillatorNode2.type = 'sawtooth';
    oscillatorNode2.frequency.value = 440;
    oscillatorNode2.detune.value = 10;
    oscillatorNode2.connect(gainNode);

    const oscillatorNode3 = audioContext.createOscillator();
    oscillatorNode3.type = 'sawtooth';
    oscillatorNode3.frequency.value = 440;
    oscillatorNode3.detune.value = -10;
    oscillatorNode3.connect(gainNode);

    return Array.of(oscillatorNode, oscillatorNode2, oscillatorNode3);
}
