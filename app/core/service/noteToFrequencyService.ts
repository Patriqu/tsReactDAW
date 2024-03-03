function mapNotesToFrequencies() : Map<string, number> {
    const noteFrequencies = new Map<string, number>();
    const referenceFrequency = 440; //A4
    const twelfthRootOfTwo = Math.pow(2, 1/12);
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    for (let octave = 3; octave <= 8; octave++) {
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i] + octave;
            const halfStepsFromReference = (octave - 4) * 12 + i - 9; // A4 is the 9th note in the 4th octave
            const frequency = referenceFrequency * Math.pow(twelfthRootOfTwo, halfStepsFromReference);
            noteFrequencies.set(note, frequency);
        }
    }
    return noteFrequencies;
}

function getFrequencyForNote(note: string) : number | undefined {
    const noteFrequencies = mapNotesToFrequencies();
    return noteFrequencies.get(note);
}