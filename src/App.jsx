import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'


function App() {
  const {fact, getRamdonFactAndUpdate} = useCatFact()
  const imgUrl = useCatImage({fact})
  
  const handleClick = () => {
    getRamdonFactAndUpdate()
  }

  return (
    <>
    <main>
      <button onClick={handleClick}>Change cat</button>
      <div className="img_container">
      {
          imgUrl !== ''
          ? <img src={imgUrl} alt='cat' />
          : <p>Loading...</p>
      }
      </div>
        {
          fact
          ? <p>{fact}</p>
          : <p>Loading...</p>
        }
      
    </main>
     
    </>
  )
}

export default App
