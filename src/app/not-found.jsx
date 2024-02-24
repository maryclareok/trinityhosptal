import Link from "next/link"
const NotFound = () => {
  return (
    <div><h2>
        NotFound</h2>
        <p>sorry,the page your loooking for does not exist</p>
        <Link href = '/'>Return to home</Link></div>
  )
}

export default NotFound