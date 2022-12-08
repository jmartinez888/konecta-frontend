export const RequestGet = (url) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:4000${url}`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(reject);
    })
}

export const RequestPost = () => {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:4000/courses")
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(reject);
    })
}