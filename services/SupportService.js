import AsyncStorage from '@react-native-async-storage/async-storage'
import { ErrorService } from './ErrorService'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'

function SupportFactory() {
  function handleResponse(response) {
    return response.data
  }

  function handleError(error) {
    return error.response
  }

  function resolvePromise(response) {
    ErrorService.setRequestData(ErrorService.generateRequestData(response))
    return Promise.resolve(handleResponse(response))
  }

  function rejectPromise(error) {
    return Promise.reject(handleError(error))
  }

  return {
    handleResponse: handleResponse,
    handleError: handleError,
    resolvePromise: resolvePromise,
    rejectPromise: rejectPromise
  }
}

export const SupportService = new SupportFactory()