// Main dashboard page for tracking projects and tasks
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/dashboardComponents/projectCard';
//import './dashboard.css';

// Importing api handlers
import { GET } from '../api/projectApi';

// Category containers for different project cards
function CategoryContainer({ title, children }) {
    // Pass in title and children (list of ProjectCard components)
    return (
        <div className='category-container'>
            <h2 classNAme='category-title'>{title}</h2>
            <div className="catgory-content">{children}</div>
        </div>
    );
}

function Dashboard() {
    const [projects, setProjects] = useState([]);

    // Fetch projects from backend API
    useEffect(() => {
        async function fetchProjects() {
            try {
                const data = await GET();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }
        fetchProjects();
    }, []);

    // Filer returned projects objects by status
    const wishListProjects = projects.filter(p => p.status === "wish list");
    const inProgressProjects = projects.filter(p => p.status === "in progress");
    const pausedProjects = projects.filter(p => p.status === "paused");
    const completedProjects = projects.filter(p => p.status === "completed");
    const vaultedProjects = projects.filter(p => p.status === "vaulted");

    return (
        <div className='projects-board-container'>
            {/* This loops through the wishlistProjects array and creates
             a ProjectCard for each project
             it gives a unique key using project._id which is MongoDB's unique identifier and
             {... project} spreads all properties of the project object as props to ProjectCard component} */}
            <CategoryContainer title="Wish List">
                {wishListProjects.map((project) => (
                    <ProjectCard key={project._id} {...project} />
                ))}
            </CategoryContainer>

            <div className='in-progress-container'>

            </div>

            <div className='paused-container'>

            </div>

            <div className='completed-container'>

            </div>

            <div className='vaulted-container'>

            </div>
        </div>
    );
}

export default Dashboard;