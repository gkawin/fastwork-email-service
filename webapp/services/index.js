import axios from 'axios'

export const fetch = axios.create({
  timeout: 10000,
  headers: {
    'content-type': 'application/json'
  },
  baseURL: 'http://localhost:9100/api'
})

export const submitCampaign = async (mailto = '') => {
  try {
    return await fetch.post('/mailto', { mailto })
  } catch (error) {
    return { status: 'fail', message: error.message || 'unexpected error' }
  }
}