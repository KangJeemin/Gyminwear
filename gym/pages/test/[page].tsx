import { useRouter } from 'next/router'
 

const See = () => {
  const router = useRouter()
  return (
  <p>Post: {router.query.page}</p>
  )
}

export default See