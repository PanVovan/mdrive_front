import axios from 'axios'
import {API_FILE_URL} from "../../../config";

export const getFiles = async (dirId) => {
    try {
        let url = `${API_FILE_URL}api/getfiles`
        // if (dirId) {
        //     url = `${API_FILE_URL}api/getfiles?parent=${dirId}`
        // }
        // if (sort) {
        //     url = `${API_FILE_URL}api/getfiles?sort=${sort}`
        // }
        // if (dirId && sort) {
        //     url = `${API_FILE_URL}api/getfiles?parent=${dirId}&sort=${sort}`
        // }
        let response = await axios.get(url, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        });
        return response.data.data
    } catch (e) {
        alert(e.response.data.message)
    }
}


export const createDir = async (dirId, name) => {
    try {
        const response = await axios.post(`${API_URL}api/files`,{
            name,
            parent: dirId,
            type: 'dir'
        }, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const uploadFile = async (file, dirId) =>  {
    try {
        const formData = new FormData()
        formData.append('file', file)
        if (dirId) {
            formData.append('parent', dirId)
        }
        const uploadFile = {name: file.name, progress: 0, id: Date.now()}
        const response = await axios.post(`${API_URL}api/files/upload`, formData, {
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                if (totalLength) {
                    uploadFile.progress = Math.round((progressEvent.loaded * 100) / totalLength)
                }
            }
        });
        return response.data
    } catch (e) {
        alert(e?.response?.data?.message)
    }
}


export const downloadFile = async (file) => {
    const response = await fetch(`${API_URL}api/files/download?id=${file._id}`,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    if (response.status === 200) {
        const blob = await response.blob()
        const downloadUrl = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadUrl
        link.download = file.name
        document.body.appendChild(link)
        link.click()
        link.remove()
    }
    return response
}

export const deleteFile = async (file) => {
    try {
        const response = await axios.delete(`${API_URL}api/files?id=${file._id}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        alert(response.data.message)
    } catch (e) {
        alert(e?.response?.data?.message)
    }
}

export const searchFiles = async (search) => {
    try {
        const response = await axios.get(`${API_URL}api/files/search?search=${search}`,{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return response.data
    } catch (e) {
        alert(e?.response?.data?.message)
    }

}