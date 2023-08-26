import { connectDB } from "@/util/database"
import Link from 'next/link'

export default async function list(){
  
  const db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  
  return (
    <div className="list-bg">
      { result.map((v,i)=>
        <div className="list-item" key={i}>
          <Link href={"/detail/"+v._id.toString()}>
            <h4>{v.title}</h4>
          </Link>
          <p>{v.content}</p>
        </div>
      ) }
    </div>
  )
}