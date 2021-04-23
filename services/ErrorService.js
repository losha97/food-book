import { Alert } from 'react-native'

function ErrorFactory(props) {
  let requestData = {};
  
  function generateRequestData(data) {
    if (!data || !data.config) {
      return {};
    }

    return {
      method: data.config.method,
      url: data.config.url,
      params: data.config.params,
      data: data.config.data
    };
  }

  function getRequestData() {
    return requestData
  }

  function setRequestData(data) {
    requestData = data;
  }

  function createAlert(title, description) {
    Alert.alert(
      title,
      description,
      [{
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "OK"
      }]
    )
  }

  function handleStatus(response) {
    if (!response) {
      return;
    }

    switch(response.status) {
      case 400:
      case 401:
      case 403:
        createAlert('Access Denied', 'You have no access. Please verify your credentials')
        break;
      case 404:
        createAlert('404 Not Found')
        break;
      case 500:
        createAlert('500 Internal Server Error')
        break;
      default:
    }
  }

  return {
    generateRequestData: generateRequestData,
    getRequestData: getRequestData,
    setRequestData: setRequestData,
    handleStatus: handleStatus
  };
}

export const ErrorService = new ErrorFactory()