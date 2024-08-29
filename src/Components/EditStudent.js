// EditStudent.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const EditStudent = () => {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/students/${id}`)
            .then(response => response.json())
            .then(data => setStudent(data));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/students/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student),
        })
            .then(response => response.json())
            .then(data => console.log(data));
    };

    return (
        <div>
            <h1>Edit Student</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={student.name || ''}
                        onChange={e => setStudent({ ...student, name: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={student.email || ''}
                        onChange={e => setStudent({ ...student, email: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Roll Number:
                    <input
                        type="text"
                        value={student.rollno || ''}
                        onChange={e => setStudent({ ...student, rollno: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditStudent;
