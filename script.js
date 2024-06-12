let titles = ['Hausaufgabe'];
let notes = ['Matheheft Seite 17, Aufgabe 12 a und b'];
load()


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

    content.innerHTML += `
    <div class="contentbox">
        <div id="pinImage2"><img src="./img/pin.png" alt=""></div>
        <div class="titleContent"><b>${title}:</b></div>
        <div class="noteContent"><p>${note}</p></div>
        <div id="trashImg"><img src="./img/recycle-bin.png" alt="" onclick="deleteItem(${[i]})"></div>
    </div>
    `;
    clearInputs();
    }
    
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('note').value = '';
}

function addNote() {
    let title = document.getElementById('title').value;
    let note = document.getElementById('note').value;

    if (title == '' || note == '') {
        alert("Bitte Titel und Note hinzufügen!")
    } else {
    titles.push(title);
    notes.push(note);
    render();
    save();
    }
}

function deleteItem(i) {
    titles.splice(i, 1);
    notes.splice(i, 1);
    render();
    save();
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes', notesAsText);
}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');
    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }
}