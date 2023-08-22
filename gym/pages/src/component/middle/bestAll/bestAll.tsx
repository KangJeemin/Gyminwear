import React, { useState , useEffect} from 'react'
import styles from './bestAll.module.css'
import axios from 'axios'

const BestAll:React.FC = () =>{
    const [getitem,setItem] = useState([]);
    useEffect(() => {
        // Define an async function within the useEffect to fetch data
        async function fetchData() {
            try {
                const response = await axios.get("/api/test");
                const data = response.data; // Extract the data property from the response
                setItem(data); // Update the state with the fetched data
            } catch (error) {
                console.error(error);
            }
        }

        // Call the async function to fetch data
        fetchData();
    }, []); // Empty dependency array means this effect runs only once after the initial render

    useEffect(()=>{
        
    },[getitem])
 
    return(
        <div id={styles.bestAll}> 
            <div id={styles.bestAll_topText}>
                <h3 id={styles.bestAll_text}>이번 주 인기 상품</h3>
            </div>
            <div id={styles.bestAll_itemContainer_flexNowrap}>
                <div id={styles.bestAll_itemContainer} className={`${styles.grid_2x2} ${styles.flex_scrollSet}`}>
                        <span  id={styles.bestAll_item_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                          <span id={styles.bestAll_item_imageSize}></span>
                          <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                            <span id={styles.bestAll_item_itemBrandName}><h4>{getitem[0]}</h4></span>
                            <span id={styles.bestAll_item_itemName}><h5>itemName</h5></span>
                            <span id={styles.bestAll_item_itemPrice}><h5>itemPrice</h5></span>
                          </span>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default BestAll;