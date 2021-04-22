import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from '../ApiConfig'
import { SupportService } from '../../services/SupportService'

function FruitAPIFactory() {
  let url = `https://fruit-facts.herokuapp.com/`
  return {
    get(fruitName) {
      const requestOptions = {
        method: 'GET',
        url: `${url}${fruitName}`
      }
      
      return axiosInstance(requestOptions)
        .then(response => { return SupportService.resolvePromise(response) })
        .catch(error => { return SupportService.rejectPromise(error) })
    }
  }
}

export const FruitAPI = new FruitAPIFactory()