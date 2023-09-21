import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';
import type { gymWearItem,GymItemProps } from '@/src/type/gymwear';
import { useRouter } from 'next/router';
import convertWon from '@/pages/src/module/convertWon';

const PcTop = (props:GymItemProps) => {
    const router = useRouter();
    return(
        <div id={styles.pc_topContainer}>
            <div id={styles.pc_topLeftBox}></div>
            <div id={styles.pc_topCenterBox}>
                <div id={styles.pc_topCenterMarginBox}></div>
                <div id={styles.pc_topContentBox}>
                   {props.gymitem?(props.gymitem.map((object:gymWearItem, index:number) => (
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
                    ))):null}
                </div>
                <div></div>
            </div>
            <div id={styles.pc_topRightBox}></div>
        </div>
    )
}

export default PcTop