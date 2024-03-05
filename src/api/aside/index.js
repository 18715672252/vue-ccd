import cnapi from '../cnapi'
export const queryMenu = (data) => {
  return cnapi.post('/queryMenu', data)
}