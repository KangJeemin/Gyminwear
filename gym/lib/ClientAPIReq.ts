import type { userInfo,readInfo,boardInfo,commentInfo,commentWrite } from "@/interface/board"
interface UploadImage {
    filename:string,
    contentType:string,
}
interface BodyJSON {
    postid?: number | null
    title?: string;
    viewcount?: number;
    commentcount?: number;
    pagecount?: number;
    commentid?: number;
    parentcommentid?: string | null;
    content?: string;
    date?: string;
    modifydate?: string | null;
    email?:string,
    name?:string,
    password?:string,
    nickname?:string
    filename?:string ,
    contentType?:string ,
}

interface Props {
    url:string,
    // method:"GET" | "POST" | "PUT" | "DELETE",
    method:string,
    BodyJSON:BodyJSON,
}
const ClientAPIReq = ({url,method,BodyJSON} : Props)  =>{
    if(url==="GET"){
        const response = fetch(url)
        return response
    }
    else{
        const response = fetch(url,{
            method:method,
            headers: {
                "Content-Type": "application/json",
                },
            body:JSON.stringify({
                ...BodyJSON
            })
        })
        return response;
    }
    
} 
export default ClientAPIReq;