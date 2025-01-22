import { useState, useEffect } from 'react'
import { API_CAT_URL } from '../constants'
export function useCatImage({fact}) {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    const phrase = fact.split(' ')[0]
    const newApiUrl = `${API_CAT_URL}${phrase}`
    setImgUrl(newApiUrl)

  },[fact])

  return imgUrl
}