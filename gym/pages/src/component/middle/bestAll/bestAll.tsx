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
    useEffect(()=>{
        getDatabaseData()

    },[])
    const getDatabaseData = async () => {
        try{
                const res = await axios.get("/api/test");
                console.log(res.data)
                setItem(res.data)
                console.log(getitem[0])
        }
        catch(e){
            console.log(e)
        }
     }
 const items:Item[] =[
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
    },
    {
        brandName:'본투윈',
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'₩'
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
                            <span id={styles.bestAll_item_itemBrandName}><h4>{item.brandName.toString()}</h4></span>
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