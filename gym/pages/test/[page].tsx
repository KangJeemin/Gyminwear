import { useRouter } from 'next/router'
 

const See = () => {
  const router = useRouter()
  return (
  <p>hi</p>
  )
}
export async function getServerSideProps() {
  console.log('serversideprops 요청')
}
  
export default See