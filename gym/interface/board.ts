export type witreInfo ={

}

export type boardInfo = {
    postid: number;
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
    pagecount: number;
  };

export type boardProps = {
    data:[
        {
            postid: number;
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
    pagecount: number;
        }
    ]
}
export type boardComponentProps={
    mapcount:number;
    data:[
        {
            postid: number;
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
    pagecount: number;
        }
    ]
}
export type readInfo = {
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
  };