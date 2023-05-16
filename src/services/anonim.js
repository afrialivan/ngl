import axios from 'axios'

const baseUrl = 'https://zeyf3w-3001.csb.app/api/anonim'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

export default { getAll, create }