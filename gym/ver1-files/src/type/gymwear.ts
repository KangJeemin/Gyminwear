type gymWearItem = {
    brandname: string;
    image:string;
    productname:string;
    price:number;
    url:string;
    likecount:number;
  }
type searchResultCount = {
    C:number
  }
type GymItemProps = {
  gymitem:[]
}
type SearchResultProps = {
  item: []
  count : number
}
export type {searchResultCount}
export type {gymWearItem}
export type {GymItemProps}
export type {SearchResultProps}