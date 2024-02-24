import Link from "next/link"
import { useRouter } from "next/navigation"

const NavigationTest = () => {
    const router = useRouter()
    const handleClick = ()=>{
         console.log("clicked")
         router.refresh("/")
    }
  return (
    <div>
        <Link href="/" prefetch ={false}>click here</Link>
        <button onClick={handleClick}> write and redirect</button>
    </div>
  )
}

export default NavigationTest