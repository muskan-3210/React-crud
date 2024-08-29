// StudentList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent'; // Ensure this import is correct

export const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/students')
            .then(response => setStudents(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.age}
                        <Link to={`/edit/${student.id}`}>Edit</Link>
                        <Link to={`/delete/${student.id}`}>Delete</Link>
                    </li>
                ))}
            </ul>
            <CreateStudent /> {/* This should be on a separate page or route */}
        </div>
    );
};
