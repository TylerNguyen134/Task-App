import './projectCard.css';
// Component for reusable project card structure

function ProjectCard({ title, description, targetDate, milestones, status, completed }) {
    // Conditional header coloring based on project status
    const headerStyle =  {
         backgroundColor: status === 'wish list' ? '#333F63' : '#838BC2'
    };
 


    // Creating card structure using passed props
    return (
        <div className="project-card">
            <div className="project-card-header" style={headerStyle}>
                <h3 className="project-card-title">{title}</h3>
                <button
                    className="edit-btn"
                    aria-label="Edit Project"
                >
                    <i className='bx bx-edit'></i>
                </button>

            </div>
            <div className="project-card-body">
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
        </div>
    );
}

export default ProjectCard;