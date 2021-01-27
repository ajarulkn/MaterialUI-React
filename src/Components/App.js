import './styles.css'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Excercises from './Excercises'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Excercises />
      <Footer />
    </div>
  )
}
