import * as React from 'react';
import styles from './pcHeader.module.css'
import Image from 'next/image';


const PcMain = () => {
    return(
        <div id='pc_mainContainer'>
            <div id='pc_mainImageContainer'>
                <div id='pc_mainImageContainerLeftBox'></div>
                <div id='pc_mainImageContainerImageBox'>
                    <div id='pc_mainImageContainerImageBoxLeftButton'></div>
                    <div id='pc_mainImageContainerImageBoxImage'></div>
                    <div id='pc_mainImageContainerImageBoxRightButton'></div>
                </div>
                <div id='pc_mainImageContainerRightBox'></div>
            </div>
            <div id='pc_mainImagemargin'></div>
            <div id='pc_mainImage2'></div>
            <div id='pc_mainImagemargin'></div>
            <div id='pc_mainImage3'></div>
        </div>
    )
}

export default PcMain