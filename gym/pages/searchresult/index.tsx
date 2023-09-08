import { useRouter } from 'next/router';

const Test = () => {
    const router= useRouter();
    const { id } = router.query

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
        <p style={{color:'black'}}>id는 {id}</p>

        </div>
    )
}

export default Test