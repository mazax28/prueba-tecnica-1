import { API_FACT_URL } from "../constants"
export async function getRamdonFact(){
    const response = await fetch(API_FACT_URL)
    const json = await response.json()
    const data = json.fact
    return data
} 