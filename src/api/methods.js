import axios from 'axios'
import host from './host'

/**
 * Get
 * @param { string } url 
 * @param { object } params 
 */
export function Get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(host + url)
            .then(response => {

            })
            .catch(err => {
                
            })
    })
}

export function Post() {
    return new Promise((resolve, reject) => {
        
    })
}

export function Delete() {
    return new Promise((resolve, reject) => {
        
    })
}

export function Put() {
    return new Promise((resolve, reject) => {
        
    })
}

export function setParams() {

}

export default axios