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

type Anchor = 'top'

export default function Header () {



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
        {['Top', 'Bottom', ].map((text, index) => (
          <ListItem key={text} disablePadding
          onClick={() => {
            if (text === 'Top') {
              console.log('ㅁ');
            }
            toggleDrawer('top', false); // 항목을 클릭한 후 드로어를 닫습니다.
          }}
          >
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
                        <Image onClick={toggleDrawer('top', true)}
                            src={hambergerIcon}
                            alt="햄버거아이콘"
                            layout='fill'
                        />
                        
                        <SwipeableDrawer
                          anchor={'top'}
                          open={state['top']}
                          onClose={toggleDrawer('top', false)}
                          onOpen={toggleDrawer('top', true)}
                        >
                          {/* anchor: 드로어가 열릴 위치를 지정합니다. 이 경우에는 'top'으로 설정되어 있으므로, 드로어가 화면의 위쪽에서 열립니다.
                              open: 드로어의 열림 상태를 나타냅니다. state['top'] 변수의 값을 사용하여 열림 상태를 결정합니다.
                              onClose: 드로어를 닫을 때 실행되는 함수를 지정합니다. toggleDrawer('top', false) 함수가 호출됩니다. toggleDrawer 함수를 통해 state 객체의 'top' 속성을 false로 변경하여 드로어를 닫습니다.
                              onOpen: 드로어를 열 때 실행되는 함수를 지정합니다. toggleDrawer('top', true) 함수가 호출됩니다. toggleDrawer 함수를 통해 state 객체의 'top' 속성을 true로 변경하여 드로어를 엽니다.
                           */}
                          {list('top')}
                         </SwipeableDrawer>
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

