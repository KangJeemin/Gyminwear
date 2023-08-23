import React, { useState, useEffect } from 'react';
import styles from './bestAll.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
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

const BestAll: React.FC = () => {
    const [getDatabase, setGetDatabase] = useState<Item[]>([]);
    const router = useRouter();

    async function fetchData() {
        try {
            const response = await axios.get("/api/test");
            const data: Item[] = response.data; // Assuming response.data is an array of items
            setGetDatabase(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
        console.log(getDatabase)
    }, []);
    useEffect(() => {
        
        console.log(getDatabase)
    }, [getDatabase]);
    return (
        <div id={styles.bestAll}>
            <div id={styles.bestAll_topText}>
                <h3 id={styles.bestAll_text}>이번 주 인기 상품</h3>
            </div>
            <div id={styles.bestAll_itemContainer_flexNowrap}>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {getDatabase.map((object, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.bestAll_item_imageSize}>
                                <Image
                                    src='/image/physicalcrown/매쉬_럭비져지.jpeg'
                                    alt='이미지 표시 불가'
                                    layout='fixed'
                                    width={80}
                                    height={45}
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestAll_item_itemBrandName}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestAll_item_itemName}><h5>{object.productname}</h5></span>
                                <span id={styles.bestAll_item_itemPrice}><h5>{object.price}</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestAll;
