import { useEffect, useState } from 'react'
import './App.css'
import { API_FACT_URL, API_CAT_URL} from './constants'

function App() {
  const [change, setChange] = useState(false)
  const [fact, setFact] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  
  const handleClick = () => {
    setChange(prevChange => !prevChange)
  }

  useEffect(() => {
    setImgUrl('')
    async function getRamdonFact(){
        const response = await fetch(API_FACT_URL)
        const json = await response.json()
        const data = json.fact
        setFact(data)
    } 

    getRamdonFact()

  }, [change])

  useEffect(() => {
    const phrase = fact.split(' ')[0]

    const newApiUrl = `${API_CAT_URL}${phrase}`
    console.log('newApiUrl:', newApiUrl)
    setImgUrl(newApiUrl)
  },[fact])


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
