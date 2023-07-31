import React, { useState, useRef, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/context'
import TopComponent1 from './topComponent1';
import TopComponent2 from './topComponent2';
import TopComponent3 from './topComponent3';


interface Item {
  brandName: string;
  itemName: string;
  itemPrice: number | string;
}

const TopComponent: React.FC = () => {

  const [showComponent, setshowComponent] = useState(1);
  const {currentPage} = useContext(AuthContext)
  return (
    <div>
      {showComponent === 0 ? (
        <TopComponent1/>
      ): null}
      {showComponent === 1 ? (
        <TopComponent2/>
      ): null}
      {showComponent === 2 ? (
        <TopComponent3/>
      ): null}
    </div>
  );
};

export default TopComponent;
