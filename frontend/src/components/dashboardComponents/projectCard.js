// Component for reusable project card structure

function ProjectCard({ title, description, targetDate, milestones, status, completed }) {
    // Creating card structure using passed props
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Target Date: {targetDate}</p>
            <p>Status: {status}</p>
            <p>Completed: {completed ? "Yes" : "No"}</p>
            <div>
                <strong>Milestones:</strong>
                <ul>
                    {milestones && milestones.map(milestone => (
                        <li key={milestone._id}>
                            {milestone.title} {milestone.completed ? "(Done)" : ""}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;