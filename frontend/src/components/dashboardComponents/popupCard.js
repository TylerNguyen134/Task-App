import React, { useRef } from 'react';
import axios from 'axios';
import './popup.css';

function ProjectPopup({ project, onClose, onProjectUpdated }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const targetDateRef = useRef();
    const statusRef = useRef();
    const completedRef = useRef();

    if (!project) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProject = {
            ...project,
            //title: titleRef.current.value.trim(),
            description: descriptionRef.current.value.trim(),
            targetDate: targetDateRef.current.value.trim(),
            status: statusRef.current.value.trim(),
            completed: completedRef.current.checked,
        };
        try {
            await axios.put(`http://localhost:3000/project/${project._id}`, updatedProject);
            if (onProjectUpdated) onProjectUpdated(updatedProject);
            onClose();
        } catch (error) {
            alert('Failed to update project.');
        }
    };

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <h2 className='popup-title'>
                    {project.title}
                </h2>
                <form className='popup-form' onSubmit={handleSubmit}>
                    <label>
                        Description
                        <textarea
                            defaultValue={project.description}
                            ref={descriptionRef}
                        />
                    </label>
                    <label>
                        Target Date
                        <input
                            type='text'
                            defaultValue={project.targetDate}
                            ref={targetDateRef}
                        />
                    </label>
                    <label>
                        Status
                        <select
                            defaultValue={project.status}
                            ref={statusRef}
                        >
                            <option value="wish list">Wish List</option>
                            <option value="in progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="vaulted">Vaulted</option>
                        </select>
                    </label>
                    <label>
                        Completed
                        <input
                            type='checkbox'
                            defaultChecked={project.completed}
                            ref={completedRef}
                        />
                    </label>
                    <div className='popup-actions'>
                        <button type='submit'>Save</button>
                        <button type='button' onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProjectPopup;