import React from 'react'

const HistoryField = (props) => {
    return (
        <div className="history-field">
            <div>First name: {props.user.first_name}</div>
            <div>Last name: {props.user.last_name}</div>
            <div>Email: {props.user.email}</div>
            <div>Username: {props.user.username}</div>
            <div>Date of birth: {props.user.dob}</div>
            <div>Height: {props.user.height}cm</div>
            <div>Weight: {props.user.weight}kg</div>
            <div>Modifications:</div>
            {
                props.user.notes.map((note) =>
                    <div className='modifications'>
                        <div>Number of mods: {note.modifications}</div>
                        <div>First name: {note.first_name}</div>
                        <div>Last name: {note.last_name}</div>
                        <div>Username: {note.username}</div>
                        <div>Height: {note.height}</div>
                        <div>Weight: {note.weight}</div>
                        <div>Last modified: {note.modified_at}</div>
                    </div>
                )
            }
        </div>
    )
}

export default HistoryField