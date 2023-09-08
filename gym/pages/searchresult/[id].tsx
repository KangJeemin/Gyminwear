import { useRouter } from 'next/router';

const Test = () => {
    const router= useRouter();
    const { id } = router.query

    return(
        <div>이거슨 테스트. {id}</div>
    )
}

export default Test