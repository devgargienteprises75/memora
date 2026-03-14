import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3001/api/item"
})

export async function saveItem(url, title){
    const res = await api.post("/save", {
        url,
        title
    })

    return res.data
}