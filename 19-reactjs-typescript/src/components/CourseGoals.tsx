type Goal = {
    id: number;
    title: string;
    description: string;
}

interface CourseGoalsProps {
    goals: Goal[]
}

function CourseGoals({goals}: CourseGoalsProps) {

    return (
        <ul>
            {goals.map((goal) => 
                <li key={goal.id}>
                    <article>
                        <div>
                            <h2>{goal.title}</h2>
                            <p>{goal.description}</p>
                        </div>
                        <button>Delete</button>
                    </article>
                </li>
            )}
        </ul>
    );
}

export default CourseGoals;