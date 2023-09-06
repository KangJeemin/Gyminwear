import React, { useState,useContext,useEffect } from 'react'
import styles from './bestTop.module.css'
import { AuthContext } from '@/public/context/authcontext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import convertWon from '@/pages/src/module/convertWon';
import axios from 'axios';

interface Item {
    brandname: string;
    image: string;
    productname: string;
    price: number;
    url: string;
    likecount: number;

    // Add other properties here if needed
}

const BestTop:React.FC = () =>{
    const {hambergerState,searchState} = useContext(AuthContext)
    const [getDatabase, setGetDatabase] = useState<Item[]>([]);
    const router = useRouter();
    async function fetchData() {
        try {
            const response = await axios.get("/api/besttop");
            const data: Item[] = response.data;
            setGetDatabase(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
 
 
    return(
        <div id={styles.bestTop}>
            <div id={styles.bestTop_topText}>
                <h3 id={styles.bestTop_text}>이번 주 인기 짐웨어</h3>
            </div>
            <div id={styles.bestTop_itemContainer_flexNowrap}>
                <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {getDatabase.map((object, index) => (
                        <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.bestTop_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestTop_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestTop_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.bestTop_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
        // <div id={styles.bestTop}> 
        //     <div id={styles.bestTop_topText} className={styles.setTextCenter}>
        //         <h3 id={styles.bestTop_text} >이번 주 인기 상의</h3>
        //     </div>
        //     <div id={styles.bestTop_itemContainer_flexNowrap}>
        //         <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
        //             {items.map((item, index) => (
        //                 <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
        //                   <span id={styles.bestTop_item_imageSize}></span>
        //                   <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
        //                     <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
        //                     <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
        //                     <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
        //                   </span>
        //                 </span>
        //             ))}
        //         </div>
        //         <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
        //             {items.map((item, index) => (
        //                 <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
        //                   <span id={styles.bestTop_item_imageSize}></span>
        //                   <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
        //                     <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
        //                     <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
        //                     <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
        //                   </span>
        //                 </span>
        //             ))}
        //         </div>
        //         <div id={styles.bestTop_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
        //             {items.map((item, index) => (
        //                 <span key={index} id={styles.bestTop_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
        //                   <span id={styles.bestTop_item_imageSize}></span>
        //                   <span id={styles.bestTop_item_textBoxSize} className={`${styles.flex_column}`}>
        //                     <span id={styles.bestTop_item_itemBrandName}><h4>{item.brandName}</h4></span>
        //                     <span id={styles.bestTop_item_itemName}><h5>{item.itemName}</h5></span>
        //                     <span id={styles.bestTop_item_itemPrice}><h5>{item.itemPrice}</h5></span>
        //                   </span>
        //                 </span>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}

export default BestTop;