import React, { useState, useEffect } from 'react';
import styles from './bestAll.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { NumericLiteral } from 'typescript';


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
    function moveurl(url:string) {
        router.push(`http://${url}`)
    }
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
                                    src={require('public/image/머슬암드 레드.png')}
                                    alt='이미지 표시 불가'
                                    layout='fixed'
                                    width={80}
                                    height={45}
                                    onClick={()=>{
                                        moveurl('musclearmed.com/product/gymzip-t-shirt/1104/category/403/display/1/')
                                    }}
                                    />
                            </span>
                            <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestAll_item_itemBrandName}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestAll_item_itemName}><h5>itemName</h5></span>
                                <span id={styles.bestAll_item_itemPrice}><h5>itemPrice</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestAll;
