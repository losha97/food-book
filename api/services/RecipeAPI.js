import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from '../ApiConfig'
import { SupportService } from '../../services/SupportService'

function RecipeAPIFactory() {
  let url = `http://taco-randomizer.herokuapp.com/`
  return {
    getAll(fullTaco) {
      const requestOptions = {
        method: 'GET',
        url: `${url}/random/`,
        params: {
          'full-taco': fullTaco
        }
      }
      
      return axiosInstance(requestOptions)
        .then(response => { return SupportService.resolvePromise(response) })
        .catch(error => { return SupportService.rejectPromise(error) })
    },
    contributors(recipeType, recipeSlug) {
      const requestOptions = {
        method: 'GET',
        url: `${url}/contributors/${recipeType}/${recipeSlug}/`
      }
      
      return axiosInstance(requestOptions)
        .then(response => { return SupportService.resolvePromise(response) })
        .catch(error => { return SupportService.rejectPromise(error) })
    },
    userContributions(username) {
      const requestOptions = {
        method: 'GET',
        url: `${url}/contributions/${username}/`
      }
      
      return axiosInstance(requestOptions)
        .then(response => { return SupportService.resolvePromise(response) })
        .catch(error => { return SupportService.rejectPromise(error) })
    }
  }
}

export const RecipeAPI = new RecipeAPIFactory()