import * as React from 'react';
import styles from './pcMain.module.css'
import Image from 'next/image';
import type { gymWearItem,GymItemProps } from '@/src/type/gymwear';
import { useRouter } from 'next/router';
import convertWon from '@/pages/src/module/convertWon';
import { GetServerSidePropsContext } from 'next';


export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { page } = context.query;
    const res = await fetch(`http://localhost:3000/api/toppage?page=${page}`);
    const data = await res.json();
    console.log(data)
    return { props: { 
        gymitem:data
        
     } };
  }
const PcTop = ({gymitem}:GymItemProps) => {
    const router = useRouter();
    return(
        <div id={styles.pc_topContainer}>
            <div id={styles.pc_topLeftBox}></div>
            <div id={styles.pc_topCenterBox}>
                <div id={styles.pc_topCenterMarginBox}></div>
                <div id={styles.pc_topContentBox} className={`${styles.grid_5x4} ${styles.flex_scrollSet}`}>
                   {gymitem.map((object:gymWearItem, index:number) => (
                        <span key={index} id={styles.pc_topItem_itemComponent} className={`${styles.padding_1} ${styles.flex_column}`}>
                            <span id={styles.pc_topItem_imageSize}>
                                <Image
                                    src={object.image}
                                    alt='이미지 표시 불가'
                                    layout='fill'
                                    onClick={()=>{
                                        router.push(`${object.url}`)
                                    }}
                                    />
                            </span>
                            <span id={styles.pc_topItem_textBoxSize} className={`${styles.flex_column}`}>
                                <span id={styles.pc_topItem_itemBrandName} className={styles.text_set_center}><h4>{object.brandname}</h4></span>
                                <span id={styles.pc_topItem_itemName} className={styles.text_set_center}><h5>{object.productname}</h5></span>
                                <span id={styles.pc_topItem_itemPrice} className={styles.text_set_center}><h5>{convertWon(object.price)} ₩</h5></span>
                            </span>
                        </span>
                    ))}
                </div>
                <div></div>
            </div>
            <div id={styles.pc_topRightBox}></div>
        </div>
    )
}

export default PcTop