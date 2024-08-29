// DeleteStudent.js
import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteStudent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/students/${id}`);
            navigate('/'); // Redirect to the student list page after deletion
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div>
            <h1>Delete Student</h1>
            <p>Are you sure you want to delete this student?</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteStudent;
