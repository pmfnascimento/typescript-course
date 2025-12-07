import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
function App() {

  return (
    <>
    <Header image={{src: goalsImg, alt: 'A list of goals'}} />
    </>
  )
}

export default App
