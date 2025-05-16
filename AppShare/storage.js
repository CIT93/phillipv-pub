const getLS = () => {
  const retriveArr = localStorage.getItem("gun")
  if (retriveArr !== null) {
    try {
      return JSON.parse(retriveArr);
    } catch (error) {
      return [];
    }
  } else {
    return [];
  }
}

const gunData = getLS();

const saveLS = gunData => {
  const serializedArr = JSON.stringify(gunData)
  localStorage.setItem("gun", serializedArr)
}

export { gunData, saveLS, getLS }

