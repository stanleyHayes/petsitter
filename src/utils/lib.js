const getStorage = (key, defaultValue = null) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue
}

const setStorage = (key, value) => {
    localStorage.setItem(key, value);
}

export {getStorage, setStorage}