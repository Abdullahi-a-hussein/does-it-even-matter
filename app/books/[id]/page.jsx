
import { getBooksummary } from "@/lib/bookSummaryExtraction"
import parse from 'html-react-parser'


async function BookContent ({id}) {
    const bookConet = await getBooksummary(id);
    return (
        <div className="mt-10">
            {parse(bookConet.contentHtml)}
        </div>
    )
}

export default function Page({params}){
    console.log()
    return (
        <BookContent id={params.id} />
    )
}