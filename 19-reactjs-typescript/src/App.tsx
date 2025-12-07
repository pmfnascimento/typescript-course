import Header from './components/Header'
import CourseGoals from './components/CourseGoals'
import goalsImg from './assets/goals.jpg'
import { useState } from 'react'
import NewGoal from './components/NewGoal';
function App() {

  const [goals, setGoals] = useState([
      {
        id: 1, 
        title: 'Learn TS', 
        description: 'Learn TS from the groud up'
      },
      {
        id: 2, 
        title: 'Pratice TS', 
        description: 'Pratice working with TypeScript'
      }
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prevGoals) =>
      prevGoals.concat({ id: Math.random(), title: text, description: summary })
    );
  }

  return (
    <main>
    <Header image={{src: goalsImg, alt: 'A list of goals'}}>
      <h1>Hello World Children!</h1>
    </Header>
    <NewGoal onAdd={handleAddGoal} />
    <CourseGoals goals={goals} onDelete={handleDeleteGoal}/>
    </main>
  )
}

export default App
