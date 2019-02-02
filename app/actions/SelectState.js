import { API_URL } from '../config'

const FETCH_STATE_URL = `${API_URL}/api/v1/boundary/states`

const fetchStates = () => {
  return fetch(FETCH_STATE_URL)
  .then((res) => {
    return res.json();
  }).then((result) => {
    return result
  })
}

export { fetchStates }
