
export interface readInfo {
    postid: number;
    title: string;
    nickname: string;
    content: string;
    viewcount: number;
    date: string;
    commentcount: number;
  };
export interface boardInfo extends readInfo {
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
export interface commentProps {
    data: Array<readInfo>;
    commentData: Array<addChildComment>;
  }
export interface addChildComment extends commentInfo {
    child: Array<commentInfo>;
  }

