import React, { useState, useRef, useEffect } from 'react';
import styles from './topComponent.module.css';
import TopComponent1 from './topComponent1';

interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent: React.FC = () => {

  const [showComponent, setshowComponent] = useState(0);
  const items:Item[] =[
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    },
    {
        brandName:"brontowin",
        itemName:"헤리코든 오버핏",
        itemPrice:44000+'원'
    }
    
 ]
 
  


  
  return (
    <div>
      {showComponent === 0 ? (
        <TopComponent1/>
      ): null}
    </div>
  );
};

export default TopComponent;
