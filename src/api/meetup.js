import axios from 'axios'

const URL_NAME = 'gdg-milano'

const api = axios.create({
  baseURL: 'https://api.meetup.com',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export function getEvents() {
  const url = `/2/events?&sign=true&photo-host=public&group_urlname=gdg-milano&page=20`

  return api.get(url)
}
