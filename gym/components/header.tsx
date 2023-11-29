import Box from '@mui/material/Box';
import { positions } from '@mui/system';
import Image from 'next/image';
import gyminwearLogo from '../../gym/public/image/gyminwearLogo.png';


export default function Header() {
    return (
        <>
        <Box style={{
            width:"100%",
            height:"7vh",
            backgroundColor:"#F0EACC",
            display:"flex",
            flexDirection: "row"
        }}>
            <Box style={{
            width:"30%",
            height:"100%",
            backgroundColor:"#F0EACC",
            }}></Box>

            <Box style={{
            width:"40%",
            height:"100%",
            backgroundColor:"#F0EACC",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
            }}>
                <Image
                src={gyminwearLogo} 
                alt='이미지 표시 불가'
                width={150}
                height={65} 
                />
            </Box>
            <Box style={{
            width:"30%",
            height:"100%",
            backgroundColor:"#F0EACC",
            }}></Box>
        </Box>
        </>
    )
}