import axios from 'axios'

export const fetch = axios.create({
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
  baseURL: 'http://localhost:9100/api'
})

export const submitCampaign = async (mailto = '') => {
  try {
    const result = await fetch.post('/mailto', { mailto })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    throw new Error(error.message || 'unexpected error')
  }
}

export const fetchEmailActivities = async () => {
  try {
    const result = await fetch.get('/maillog')
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    throw new Error(error.message || 'unexpected error')
  }
}