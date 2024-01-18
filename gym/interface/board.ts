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
    data: Array<boardInfo>;
  };

export interface commentInfo {
  commentid: number;
  parentcommentid: string | null;
  postid: number;
  nickname: string;
  content: string;
  date: string;
  modifydate: string | null;
}

export interface readInfo {
    postid: number
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
  };