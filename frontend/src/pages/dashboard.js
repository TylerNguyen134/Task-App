// Main dashboard page for tracking projects and tasks
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProjectCard from "../components/dashboardComponents/projectCard";
import ProjectPopup from "../components/dashboardComponents/popupCard";
import "./dashboard.css";

// Importing api handlers
import { GET } from "../api/projectApi";

// Category containers for different project cards
function CategoryContainer({ title, children }) {
    const [expanded, setExpanded] = useState(true); // State to toggle category expansion

    // Pass in title and children (list of ProjectCard components)
    return (
        <div className="category-container">
            <div className="category-header">
                <h2 className="category-title">{title}</h2>
                <i
                    className={`bx ${expanded ? "bx-chevron-down" : "bx-chevron-up"}`}
                    style={{ cursor: "pointer", fontSize: "1.5rem" }}
                    onClick={() => setExpanded(exp => !exp)}
                ></i>
            </div>
            {/* Only render children (project cards) if expanded */}
            <div className={`category-content${expanded ? " expanded" : " collapsed"}`}>
                {children}
            </div>
        </div>
    );
}

function Dashboard() {
    const [projects, setProjects] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null); // State for popup when click on card

    // Fetch projects from backend API
    useEffect(() => {
        async function fetchProjects() {
            try {
                const data = await GET();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }
        fetchProjects();
    }, []);

    // Handler to update a project in state after editing, automatically renders updated info
    const handleProjectUpdated = (updatedProject) => {
        setProjects(prev =>
            prev.map(p => p._id === updatedProject._id ? updatedProject : p)
        );
        setSelectedCard(null); // Close the popup
    };

    // Filer returned projects objects by status
    const wishListProjects = projects.filter(p => p.status === "wish list");
    const inProgressProjects = projects.filter(p => p.status === "in progress");
    const completedProjects = projects.filter(p => p.status === "completed");
    const vaultedProjects = projects.filter(p => p.status === "vaulted");

    return (
        <div className="projects-board-container">
            {/* This loops through the wishlistProjects array and creates
             a ProjectCard for each project
             it gives a unique key using project._id which is MongoDB"s unique identifier and
             {... project} spreads all properties of the project object as props to ProjectCard component} */}
            <CategoryContainer title="Wish List">
                {wishListProjects.map((project) => (
                    <ProjectCard key={project._id} {...project} onClick={() => setSelectedCard(project)} />
                ))}
            </CategoryContainer>

            <CategoryContainer title="In Progress">
                {inProgressProjects.map((project) => (
                    <ProjectCard key={project._id} {...project} onClick={() => setSelectedCard(project)} />
                ))}
            </CategoryContainer>

            <CategoryContainer title="Completed">
                {completedProjects.map((project) => (
                    <ProjectCard key={project._id} {...project} onClick={() => setSelectedCard(project)} />
                ))}
            </CategoryContainer>

            <CategoryContainer title="Vaulted">
                {vaultedProjects.map((project) => (
                    <ProjectCard key={project._id} {...project} onClick={() => setSelectedCard(project)} />
                ))}
            </CategoryContainer>

            {/* Popup card using useState adn imported from popupCard.js */}
            {selectedCard && (
                <ProjectPopup project={selectedCard} 
                onClose={() => setSelectedCard(null)} 
                onProjectUpdated={handleProjectUpdated}
                />
            )}
        </div>
    );
}

export default Dashboard;