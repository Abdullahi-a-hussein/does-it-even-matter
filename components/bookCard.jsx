import Link from "next/link";
import Image from "next/image";
// public/images/book-images/thinking-fast-and-slow.jpeg
export default function BookCard({ props }) {
  return (
    <Link 
    href={`/books/${props.id}`}
    className="flex flex-row tracking-wide mb-1 px-3 py-1 hover:shadow-sm hover:shadow-[#55617d]"
    >
      <div className="tracking-wide w-[55%] ">
        <div className="mb-3">
        <h2 
        className="font-bold text-[28px]"
        >{props.title}</h2>
        <p
        className="font-thin text-[12px] text-[#3cdbff] ps-1 mb-5"
        >{props.author}</p>
        </div>
        <p 
            className=""
        >{props.description}</p>
      </div>
      <Image
        src={`/images/book-images/${props.id}.jpeg`}
        width={175 * 1.5}
        height={155 * 1.5}
        alt={props.title}
        className="ml-3 mt-[-5px]"
      />
    </Link>
  );
}
