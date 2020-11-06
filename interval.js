function intervalConstruction(arr) {
    if(arr.length < 2 || arr.length  > 3) {
        throw new Error("Illegal number of elements in input array");
    }
    const [interval, note, direction = "asc"] = arr;
    const notes = {
        C: 2,
        D: 2,
        E: 1,
        F: 2,
        G: 2,
        A: 2,
        B: 1
    };
    const notesDsc = {
        B: 2,
        A: 2,
        G: 2,
        F: 1,
        E: 2,
        D: 2,
        C: 1
    };
    const intervals = {
        m2: [1, 2],
        M2: [2, 2],
        m3: [3, 3],
        M3: [4, 3],
        P4: [5, 4],
        P5: [7, 5],
        m6: [8, 6],
        M6: [9, 6],
        m7: [10, 7],
        M7: [11, 7],
        P8: [12, 8]
    };  
    const [subtones, offset] = intervals[interval];
    const notesArray = Object.entries(notes);
    const noteIndex = notesArray.findIndex(([key, value]) => key === note[0]);
    const notesArrayDsc = Object.entries(notesDsc);
    const noteIndexDsc = notesArrayDsc.findIndex(([key, value]) => key === note[0]);
    let united;
    let resultNoteWithAccidentals;
    if (direction === "asc") {
        const resultIndex = noteIndex - 1 + offset;
        let resultNote =
            notesArray[
                resultIndex > notesArray.length ?
                resultIndex - notesArray.length :
                resultIndex
            ];
        if (resultIndex > notesArray.length) {
            united = [...notesArray.slice(noteIndex, notesArray.length), ...notesArray.slice(notesArray[0], notesArray.indexOf(resultNote))];
        } else {
            united = notesArray.slice(noteIndex, notesArray.indexOf(resultNote));
        }
        let sumSubtones = united.flat()
            .filter((e, i) => (i % 2))
            .reduce(function (a, b) {
                return a + b;
            }, 0);
        const calcResultNoteWithAccidentals = () => {
            switch (subtones - sumSubtones) {
                case 1:
                    resultNoteWithAccidentals = resultNote[0] + '#';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNote[0] + '##';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNote[0] + 'b';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNote[0] + 'bb';
                    break;
                default:
                    resultNoteWithAccidentals = resultNote[0];
            }
        };
        if ([note][0][1] === undefined) {
            calcResultNoteWithAccidentals();
        } else if ([note][0][1] === 'b') {
            switch (subtones - sumSubtones - 1) {
                case 1:
                    resultNoteWithAccidentals = resultNote[0] + '#';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNote[0] + '##';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNote[0] + 'b';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNote[0] + 'bb';
                    break;
                default:
                    resultNoteWithAccidentals = resultNote[0];
            }
        } else if ([note][0][1] === '#') {
            switch (subtones - sumSubtones + 1) {
                case 1:
                    resultNoteWithAccidentals = resultNote[0] + '#';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNote[0] + '##';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNote[0] + 'b';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNote[0] + 'bb';
                    break;
                default:
                    resultNoteWithAccidentals = resultNote[0];
            }
        }
    } else {
        const resultIndexDsc = noteIndexDsc - 1 + offset;
        let resultNoteDsc =
            notesArrayDsc[
                resultIndexDsc >= notesArrayDsc.length ?
                resultIndexDsc - notesArrayDsc.length :
                resultIndexDsc
            ];
        let united;
        if (resultIndexDsc > notesArrayDsc.length) {
            united = [...notesArrayDsc.slice(noteIndexDsc, notesArrayDsc.length), ...notesArrayDsc.slice(notesArrayDsc[0], notesArrayDsc.indexOf(resultNoteDsc))];
        } else {
            united = notesArrayDsc.slice(noteIndexDsc, notesArrayDsc.indexOf(resultNoteDsc));
        }
        let sumSubtones = united.flat()
            .filter((e, i) => (i % 2))
            .reduce(function (a, b) {
                return a + b;
            }, 0);
        const calcResultNoteWithAccidentals = () => {
            switch (subtones - sumSubtones) {
                case 1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'b';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'bb';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '#';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '##';
                    break;
                default:
                    resultNoteWithAccidentals = resultNoteDsc[0];
            }
        };
        if ([note][0][1] === undefined) {
            calcResultNoteWithAccidentals();
        } else if ([note][0][1] === 'b') {
            switch (sumSubtones - subtones - 1) {
                case 1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '#';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '##';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'b';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'bb';
                    break;
                default:
                    resultNoteWithAccidentals = resultNoteDsc[0];
            }
        } else if ([note][0][1] === '#') {
            switch (subtones - sumSubtones + 1) {
                case 1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '#';
                    break;
                case 2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + '##';
                    break;
                case -1:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'b';
                    break;
                case -2:
                    resultNoteWithAccidentals = resultNoteDsc[0] + 'bb';
                    break;
                default:
                    resultNoteWithAccidentals = resultNoteDsc[0];
            }
        }
    }
    return resultNoteWithAccidentals;
}

function intervalIdentification(arr) {
    const [noteStart, noteEnd, direction = "asc"] = arr;
    const notes = {
        C: 2,
        D: 2,
        E: 1,
        F: 2,
        G: 2,
        A: 2,
        B: 1
    };
    const notesDsc = { // array of note for dsc direction
        B: 2,
        A: 2,
        G: 2,
        F: 1,
        E: 2,
        D: 2,
        C: 1
    };
    const intervals = {
        m2: [1, 2],
        M2: [2, 2],
        m3: [3, 3],
        M3: [4, 3],
        P4: [5, 4],
        P5: [7, 5],
        m6: [8, 6],
        M6: [9, 6],
        m7: [10, 7],
        M7: [11, 7],
        P8: [12, 8]
    };
    const notesArray = Object.entries(notes);
    const notesArrayDsc = Object.entries(notesDsc);
    const noteIndexStart = notesArray.findIndex(([key, value]) => key === noteStart[0]);
    const noteIndexStartDsc = notesArrayDsc.findIndex(([key, value]) => key === noteStart[0]);
    const noteIndexEnd = notesArray.findIndex(([key, value]) => key === noteEnd[0]);
    const noteIndexEndDsc = notesArrayDsc.findIndex(([key, value]) => key === noteEnd[0]);
    let united; // array from noteStart to noteEnd
    let x; //result subtones
    let y; //result degree
    // variables below for definition accidentals
    let pure1 = noteStart[1] === undefined;
    let pure2 = noteEnd[1] === undefined;
    let b1 = noteStart[1] === 'b' && noteStart.length < 3;
    let b2 = noteEnd[1] === 'b' && noteEnd.length < 3;
    let bb1 = noteStart[1] + noteStart[2] === 'bb';
    let bb2 = noteEnd[1] + noteEnd[2] === 'bb';
    let sharp1 = noteStart[1] === '#' && noteStart.length < 3;
    let sharp2 = noteEnd[1] === '#' && noteEnd.length < 3;
    let sharpsharp1 = noteStart[1] + noteStart[2] === '##';
    let sharpsharp2 = noteEnd[1] + noteEnd[2] === '##';
    let sumSubtones;
    const calcIntervalValuesAsc = () => {
        sumSubtones = united.flat()
            .filter((e, i) => (i % 2))
            .reduce(function (a, b) {
                return a + b;
            }, 0);
        y = united.length + 1;
        if ((pure1 && pure2) || (b1 && b2) || (bb1 && bb2) || (sharp1 && sharp2) || (sharpsharp1 && sharpsharp2)) {
            x = sumSubtones;
        } else if ((pure1 && sharp2) || (b1 && pure2) || (bb1 && b2) || (sharp1 && sharpsharp2)) {
            x = sumSubtones + 1;
        } else if ((pure1 && b2) || (b1 && bb2) || (sharp1 && pure2) || (sharpsharp1 && sharp2)) {
            x = sumSubtones - 1;
        }
    };
    const calcIntervalValuesDsc = () => {
        sumSubtones = united.flat()
            .filter((e, i) => (i % 2))
            .reduce(function (a, b) {
                return a + b;
            }, 0);
        y = united.length + 1;
        if ((pure1 && pure2) || (b1 && b2) || (bb1 && bb2) || (sharp1 && sharp2) || (sharpsharp1 && sharpsharp2)) {
            x = sumSubtones;
        } else if ((pure1 && sharp2) || (b1 && pure2) || (bb1 && b2) || (sharp1 && sharpsharp2)) {
            x = sumSubtones - 1;
        } else if ((pure1 && b2) || (b1 && bb2) || (sharp1 && pure2) || (sharpsharp1 && sharp2)) {
            x = sumSubtones + 1;
        }
    };
    if (direction === "asc") {
        if (noteIndexStart < noteIndexEnd) {
            united = notesArray.slice(noteIndexStart, noteIndexEnd);
            calcIntervalValuesAsc();
        } else {
            united = [...notesArray.slice(noteIndexStart, notesArray.length), ...notesArray.slice(notesArray[0], noteIndexEnd)];
            calcIntervalValuesAsc();
        }
    } else {
        if (noteIndexStartDsc < noteIndexEndDsc) {
            united = notesArrayDsc.slice(noteIndexStartDsc, noteIndexEndDsc);
            calcIntervalValuesDsc();
        } else {
            united = [...notesArrayDsc.slice(noteIndexStartDsc, notesArrayDsc.length), ...notesArrayDsc.slice(notesArrayDsc[0], noteIndexEndDsc)];
            calcIntervalValuesDsc();
        }
    }
    const index = Object.values(intervals).findIndex(([subtones, degree]) => subtones === x && degree === y);
    if (index === -1) {
        throw new Error("Illegal number of elements in input array");
    }
    else {
        return Object.keys(intervals)[index];
    }
}

