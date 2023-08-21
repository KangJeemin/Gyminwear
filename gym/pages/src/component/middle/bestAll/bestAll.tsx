import React, { useState , useEffect} from 'react'
import styles from './bestAll.module.css'
import axios from 'axios'

interface Item {
    brandName:any
    itemName:string
    itemPrice:number|string
}

const BestAll:React.FC = () =>{
    const [getitem,setItem] = useState<Item[]>([]);
    useEffect(() => {
        // Define an async function within the useEffect to fetch data
        async function fetchData() {
            try {
                const response = await axios.get("/api/test");
                const data = await response.data; // Extract the data property from the response
                setItem(data[0]); // Update the state with the fetched data
            } catch (error) {
                console.error(error);
            }
        }

        // Call the async function to fetch data
        fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial render

    useEffect(()=>{
        console.log(getitem)
    },[getitem])
    
 const items:Item[] =[
    {
        brandName:getitem,
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩',

    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩',
    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩',
    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩',
    }
    
 ]
 
 
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h3 id={styles.bestAll_text}>이번 주 인기 상품</h3>
            </div>
            <div id={styles.bestAll_itemContainer_flexNowrap}>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h4>{getitem[0]}</h4></span>
                            <span id={styles.bestAll_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestAll_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h5>{item.brandName.toString()}</h5></span>
                            <span id={styles.bestAll_item_itemName}><h5>{item.itemName}</h5></span>
                            <span id={styles.bestAll_item_itemPrice}><h5>{item.itemPrice}</h5></span>
                          </span>
                        </span>
                    ))}
                </div>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                    {items.map((item, index) => (
                        <span key={index} id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h3>{item.brandName.toString()}</h3></span>
                            <span id={styles.bestAll_item_itemName}><h4>{item.itemName}</h4></span>
                            <span id={styles.bestAll_item_itemPrice}><h4>{item.itemPrice}</h4></span>
                          </span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestAll;