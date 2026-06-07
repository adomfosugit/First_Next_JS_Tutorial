import Card from "@/components/Card";
import { Products } from "@/Constants";
import FetchPosts from "@/lib/actions";
import Link from "next/link";

type Post = {
  id:string;
  content:string;
  author:string;
}
export default async function Home() {
  const FetchedPosts: Post[] = await FetchPosts()

  return (
   <main>
    {FetchedPosts.map((item)=> (
      <div className="flex flex-col mb-2 items-center justify-center" key={item.id}>
       <Card author = {item.author}  content = {item.content} />

      </div>
     
    ))}
   </main>
  );
}
