import {useState, useEffect} from 'react'
import {getRamdonFact} from '../services/facts'
export function useCatFact() {
  const [fact, setFact] = useState('')
  const getRamdonFactAndUpdate = () =>{
    getRamdonFact().then(data => {
      setFact(data)
    })
  }
  useEffect(() => {
    getRamdonFactAndUpdate()
  
  }, []) 


  return {fact, getRamdonFactAndUpdate}
}