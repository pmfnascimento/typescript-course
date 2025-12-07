import Header from './components/Header'
import CourseGoals from './components/CourseGoals'
import goalsImg from './assets/goals.jpg'
function App() {

  return (
    <main>
    <Header image={{src: goalsImg, alt: 'A list of goals'}}>
      <h1>Hello World Children!</h1>
    </Header>
    <CourseGoals goals={[
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
        ]} />
    </main>
  )
}

export default App
