import React, { useState, useEffect, useContext } from 'react';
import styles from './bestBottom.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { AuthContext } from '@/public/context/authcontext';
import convertWon from '@/pages/src/module/convertWon';

interface Item {
    brandname: string;
    image: string;
    productname: string;
    price: number;
    url: string;
    likecount: number;

    // Add other properties here if needed
}

const BestBottom: React.FC = () => {
    const {hambergerState,searchState} = useContext(AuthContext)
    const [getDatabase, setGetDatabase] = useState<Item[]>([]);
    const router = useRouter();
    async function fetchData() {
        try {
            const response = await axios.get("/api/bestbottom");
            const data: Item[] = response.data; // Assuming response.data is an array of items
            setGetDatabase(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id={styles.bestBottom}
        style={{
        }}
        >
            <div id={styles.bestBottom_topText}>
                <h3 id={styles.bestBottom_text}>이번 주 인기 짐웨어</h3>
            </div>
            <div id={styles.bestBottom_itemContainer_flexNowrap}>
                <div id={styles.bestBottom_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {getDatabase.map((object, index) => (
                        <span key={index} id={styles.bestBottom_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.bestBottom_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bestBottom_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestBottom_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestBottom_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.bestBottom_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BestBottom;
