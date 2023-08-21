import Image from "next/image";
import { latestBlogTitle, lastestBlogIntor } from "../constants/constants";
import latestPostImage from "../public/images/last_post.jpeg"

const imageStyle = {
    border: '1px solid #0f172a',
  }

export default function LastestBlog() {
    return (
        <div className="mt-[50px] tracking-wide leading-8">
            <h2 className="font-black text-[38px] mb-5">
                Latest Blog
            </h2>
            <hr />
            <div className="mt-2 flex justify-between">
                <div className="w-[48%]">
                <h2 className="font-bold text-[24px] mb-5">
                    {latestBlogTitle}
                </h2>
                <p className="font-light text-[15.5px] mb-0">
                    {lastestBlogIntor}
                </p>
                <p className="font-thin text-[12px] text-[#3cdbff]">February 13, 2024</p>
                </div>
                <Image className="mr-5"
                    src={latestPostImage}
                    width={400}
                    height={400}
                    alt="Pen on paper"
                    style={imageStyle} />

            </div>
        </div>
    )
}
