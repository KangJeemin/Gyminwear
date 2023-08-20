import React, { useState, useEffect } from 'react';
import styles from './bestAll.module.css';
import axios from 'axios';

interface Item {
    brandName: string;
    itemName: string;
    itemPrice: number | string;
}

const BestAll: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        getDatabaseData();
    }, []);

    const getDatabaseData = async () => {
        try {
            const response = await axios.get("/api/test");
            const data = response.data; // 데이터 추출

            const updatedItems: Item[] = data.map((itemData: any) => ({
                brandName: itemData.brandName,
                itemName: "헤리코든 오버핏", // 여기서 원하는 이름을 할당하거나 itemData에서 추출해 사용
                itemPrice: `${itemData.itemPrice}₩`,
            }));

            setItems(updatedItems);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div id={styles.bestAll}>
            {/* ... */}
            {items.map((item, index) => (
                <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                    {/* ... */}
                    <span id={styles.bestAll_item_itemBrandName}><h4>{item.brandName}</h4></span>
                    <span id={styles.bestAll_item_itemName}><h5>{item.itemName}</h5></span>
                    <span id={styles.bestAll_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                </span>
            ))}
            {/* ... */}
        </div>
    );
};

export default BestAll;
