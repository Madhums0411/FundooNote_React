import axios from "axios";
import React from "react";

const configure = {
    headers: {
        //Authorization : localStorage.getItem('token')
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }

}
export const CreateNoteAPI = (data) => {
    let response = axios.post('https://localhost:44315/api/Notes/Create', data, configure)
    console.log(response)
    return response;
}

export const GetNoteAPI = () => {
    let response = axios.get('https://localhost:44315/api/Notes/GetAll', configure)
    console.log(response)
    return response;
}
export const archieveapi=(noteobj) => {
 let response = axios.put(`https://localhost:44315/api/Notes/Archive?NoteId=${noteobj}`,noteobj,configure)
 console.log(response)
 return response;
}

// export const ArchiveAPI = (id) => {
//     let response = axios.put(`https://localhost:44315/api/Notes/Archive?NotesId=${id.notesId}`,id.notesId, configure)
//     console.log(response)
//     return response;
// }

export const ColorUpdateAPI = (data) => {
    let colors=(data.color).replace("#","%23")
    let response = axios.put(`https://localhost:44315/api/Notes/Colour?notesId=${data.notesId}&Colour=${colors}`,data, configure)
    console.log(response)
    return response;
}

export const updatenoteapi=(noteobj) => {
    console.log("noteobj update = ",noteobj)
    let response = axios.put(`https://localhost:44315/api/Notes/Update?NotesId=${noteobj.notesId}`,noteobj,configure)
    console.log(response)
    return response;
}
export const trashnoteapi=(noteobj) => {
    let response = axios.put(`https://localhost:44315/api/Notes/Trash?NoteId=${noteobj}`,noteobj,configure)
    console.log(response)
    return response;
   }