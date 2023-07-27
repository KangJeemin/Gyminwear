import * as React from 'react';
import styles from './header.module.css'
import Image from 'next/image'
import searchIcon from '../../../../public/image/search.png'
import shoppingIcon from '../../../../public/image/shopingBag.png'
import hambergerIcon from '../../../../public/image/hamberger.png'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const header = ()=>{

type Anchor = 'top'

const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );
    return(
        
        <div id={styles.header} className={`${styles.flexColumn}`}>
            <div id={styles.categoryBox} className={`${styles.flexRow}`}>
                <div id={styles.logoBox}></div>
                <div id={styles.centerBox}></div>
                <div id={styles.menuBox}>
                    <div id ={styles.searchBox} className={styles.menuBoxMargin}>
                        <Image
                            src={searchIcon}
                            alt="검색아이콘"
                            layout='fill'
                        />
                    </div>
                    <div id ={styles.shoppingBox} className={styles.menuBoxMargin}>
                        <Image
                            src={shoppingIcon}
                            alt="쇼핑백아이콘"
                            layout='fill'
                        />
                    </div>
                    <div id ={styles.hambergerBox} className={styles.menuBoxMargin}>
                        <Image
                            src={hambergerIcon}
                            alt="햄버거아이콘"
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
            <div id={styles.announcement}>
                <p style={
                    {
                        color:'red',
                    }
                }>오늘의 공지사항!</p>
            </div>
        </div>
    )
}

export default header;