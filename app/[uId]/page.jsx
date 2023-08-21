
import { getPostData } from '@/lib/postExtraction';
import parse from 'html-react-parser'

async function GetData({uId}){
    const postData = await getPostData(uId);
    return (
        <div className="post-section mt-10">
        {parse(postData.contentHtml)}
    </div>
    )
}



export default function Page({params}) {
    return (
        <GetData uId={params.uId}/>
    );
}