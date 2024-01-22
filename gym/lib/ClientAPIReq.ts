import type { userInfo,readInfo,boardInfo,commentInfo,commentWrite } from "@/interface/board"
interface MethodType {
    type: "GET" | "POST" | "PUT" | "DELETE" 
}
interface BodyJSON extends userInfo,readInfo,boardInfo,commentInfo,commentWrite{}

interface Props {
    url:string,
    method:MethodType,
    BodyJSON:BodyJSON,
}
const ClientAPIReq = async (props:Props) =>{
    if(props.method.type==="GET"){
        const response = fetch(props.url)
        return response
    }
    else{
        const response = fetch(props.url,{
            method:props.method.type,
            headers: {
                "Content-Type": "application/json",
                },
            body:JSON.stringify({
                ...props.BodyJSON
            })
        })
        return response;
    }
    
} 
export default ClientAPIReq;