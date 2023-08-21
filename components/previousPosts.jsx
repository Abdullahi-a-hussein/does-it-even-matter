import Link from "next/link";

import { tagColors } from "../constants/constants";

const randColor = () => {
    return tagColors[Math.floor(Math.random() * 3 )]
    
}


const Post = ({ id, title, description, date, tags, uId}) => {
  return (
    <Link href={`/${uId}`} className="flex mt-5 w-[70%] tracking-wide hover:shadow-sm hover:shadow-[#55617d]">
      <p className="pt-5 mr-3 font-bold text-[26px]">{id}</p>
      <div className="w-full">
        <h2
            className="font-bold text-[24px]"
            >{title}</h2>
        <p className="text-[14px]">{description}</p>
        <p>
          {tags.map((tag) => (
            <span className={`${randColor()} font-mono opacity-40 text-[14px]`}>#{tag} </span>
          ))}
        </p>
        <p className="font-thin text-[12px] text-[#3cdbff]">{date}</p>
        <div className="w-[100%] h-[0.08px] opacity-10 bg-white mt-1"></div>
      </div>
    </Link>
  );
};

export default function Posts({ posts }) {
  return (
    <>
      <h2
      
      className="font-black text-[38px] mt-10">Previous Blog Posts</h2>
      <hr />
      {posts.map((post) => (
        <Post
          id={post.id}
          title={post.title}
          description={post.description}
          date={post.date_created}
          tags={post.tags}
          uId={post.uId}
        />
      ))}
    </>
  );
}
