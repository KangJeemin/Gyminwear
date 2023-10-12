import styles from './pcCard1.module.css'
import * as React from 'react'


const PcCard1 = () => { 
    
    return(
        <div id={styles.pc_card1Component}>
            <div id={styles.pc_card1ComponentText}>이번주 인기 상품들</div>
            <div id={styles.pc_card1Container} className={`${styles.flexRowOver}`}>
                <span id={styles.pc_card1ContainerLeftButton} className={`${styles.button}`}></span>
                <span id={styles.pc_card1ContainerRightButton} className={`${styles.button}`}></span>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                <div className={styles.card}>z</div>
                {/* {props.gymitem?(props.gymitem.map((object:gymWearItem, index) => (
                        <span key={index} className={`${styles.card}`}>
                            <span id={styles.bestAll_item_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.bestAll_item_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.bestAll_item_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.bestAll_item_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.bestAll_item_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))):null} */}
            </div>
        </div>
    )
}

export default PcCard1;