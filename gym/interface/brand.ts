export type brandRank = {
    rankid:number
    A:string
    B:string
    C:string
    D:string    
    E:string
    F:string
    G:string
    H:string
    I:string
    J:string
    data:Date   
}

export type brandRankProp = {
    props: Array<brandRankProps>
}

export type brandRankProps = {
    brandname:string
    rank:string | number
    brandUrl:string
}