import Card from "@/components/Card";
import FetchPosts from "@/lib/actions";
import Image from "next/image";

type Post = {
  id:string;
  content:string;
  author:string;
}
export default async function Home() {
  const FetchedPosts: Post[] = await FetchPosts()

  return (
   <main>
{/* {FetchedPosts.map((item)=> (
      <div className="flex flex-col mb-2 items-center justify-center" key={item.id}>
       <Card author = {item.author}  content = {item.content} />

      </div>
     
    ))} 
  */}

    <div className=" bg-red-600 flex items-center justify-center mt-5">
        <div className="bg-blue-600 w-[500px] h-[400px]" >
          <Image src={"https://ichef.bbci.co.uk/images/ic/raw/p0nr8w9y.jpg"} width={500} height={300} alt="this is Vercel Logo" />
        </div>
    </div>
   </main>
  );
}
