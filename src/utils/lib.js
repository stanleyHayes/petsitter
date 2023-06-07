import {PET_SITTER_DATA} from "./data";

const getStorage = (key, defaultValue = null) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : defaultValue
}

const setStorage = (key, value) => {
    localStorage.setItem(key, value);
}


const getFAQsByCategory = category => {
    return PET_SITTER_DATA.FAQs.filter(faq => faq.category === category);
}

export {getStorage, setStorage, getFAQsByCategory}