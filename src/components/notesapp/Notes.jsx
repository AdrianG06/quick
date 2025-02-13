
import { useState } from 'react'
import NoteList from './NoteList.jsx'

function Notes() {
    return (
        <div>
        <h1>Notes</h1>
        <p>
            This is a simple note-taking app.
        </p>
        <NoteList notes = {notes} />    
        {/* <button onClick{ () => addNote(prompt('Enter a note'))} >Add a note here</button> */}
        </div>

    )
}
export default Notes
