import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '@/public/context/authcontext';
import styles from './index.module.css';
import Image from 'next/image';
import type { gymWearItem, GymItemProps } from '@/src/type/gymwear';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context.query;
    const res = await fetch(`http://localhost:3000/api/toppage?page=${page}`);
    const data = await res.json();
    console.log(data)
    return { props: { 
        gymitem:data
        
     } };
  }
  const Index = ({gymitem}:GymItemProps) => {
        const router = useRouter();
    return(
        <div id={styles.pc_topContainer}>
            <div id={styles.pc_topLeftBox}></div>
            <div id={styles.pc_topCenterBox}>
                <div id={styles.pc_topCenterMarginBox}></div>
                <div id={styles.pc_topContentBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                   {gymitem.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.pc_topItem_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.pc_topItem_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.pc_topItem_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.pc_topItem_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.pc_topItem_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.pc_topItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
                <div></div>
            </div>
            <div id={styles.pc_topRightBox}></div>
        </div>
    )
}
// const Index= ({gymitem}:GymItemProps) => { 
    
//     const router = useRouter();
//     const {hambergerState,searchState,topAndBottomData,setTopAndBottomData} = useContext(AuthContext)
//     const [pageState,setPageState] = useState<number>(0)   
 
//   return (
//     <div id={styles.topComponent}>
//         <div id={styles.topComponent_topText}  className={styles.text_set_center}>
//           <h3 id={styles.topComponent_text}>Top</h3>
//         </div>
//              <div id={styles.topComponent_itemContainer} className={`${styles.grid_1x2} ${styles.flex_scrollSet}`}>
//                      {gymitem.map((object:gymWearItem, index:number) => (
//                         <span key={index} id={styles.topComponent_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
//                             <span id={styles.topComponent_item_imageSize}>
//                                 <Image
//                                     src={object.image}
//                                     alt='이미지 표시 불가'
//                                     layout='fill'
//                                     onClick={()=>{
//                                         router.push(`${object.url}`)
//                                     }}
//                                     />
//                             </span>
//                             <span id={styles.topComponent_item_textBoxSize} className={`${styles.flex_column}`}>
//                                 <span id={styles.topComponent_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
//                                 <span id={styles.topComponent_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
//                                 <span id={styles.topComponent_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
//                             </span>
//                         </span>
//                     ))}
//             </div>
//         {pageState===0 ? (
//             <div id ={styles.topComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`}>&#60;</span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}>
//                     <span className={styles.color_blue}>1</span>
//                     <span className={styles.color_black}>/2</span>
//                 </span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
//                     setPageState(1)
//                     router.push(`/topPage?page=2`)
//                     window.scrollTo(0, 0);
//                     }}>&#62;</span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//             </div>   
//         ) : pageState===1 ? (
//             <div id ={styles.topComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
//                     setPageState(0)
//                     router.push(`/topPage?page=1`)
//                     window.scrollTo(0, 0);
//                 }}>&#60;</span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}>
//                     <span className={styles.color_blue}>2</span>
//                     <span className={styles.color_black}>/2</span>
//                 </span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
//                     }}>&#62;</span>
//                 <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//             </div>   
//         )
//         //  : pageState===2 ? (
//         //     <div id ={styles.topComponent_navigateContainer} className={`${styles.flex_row} ${styles.justify_content_center}`}>
//         //         <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//         //         <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
//         //             setPageState(1)
//         //             topItemDataAPI(2)
//         //         }}>&#60;</span>
//         //         <span className={`${styles.width_15per} ${styles.text_set_center}`}>
//         //             <span className={styles.color_blue}>3</span>
//         //             <span className={styles.color_black}>/3</span>
//         //         </span>
//         //         <span className={`${styles.width_15per} ${styles.text_set_center} ${styles.color_black}`} onClick={()=>{
//         //             }}>&#62;</span>
//         //         <span className={`${styles.width_15per} ${styles.text_set_center}`}></span>
//         //     </div>   
//         // ) 
//         : null}
//     </div>
    
//   );
// };

export default Index
