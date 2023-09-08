import { useRouter } from 'next/router';

const Test = () => {
    const router= useRouter();
    const idx = router.query.id

    return(
        <div>
        <p style={{color:'black'}}>zz</p>
            <br/>
        <p style={{color:'black'}}>zz</p>
        <br/>
        <p style={{color:'black'}}>zz</p>
        <br/>
        <p style={{color:'black'}}>zz</p>
        <br/>
        <p style={{color:'black'}}>zz</p>
        <p style={{color:'black'}}>id는 {idx}</p>

        </div>
    )
}

export default Test