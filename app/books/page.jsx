import BookCard from "@/components/bookCard";
import { getSortedBookSummary } from "@/lib/bookSummaryExtraction";

export default function Page() {
  const booksSummary = getSortedBookSummary();
  return (
    <>

    <div className="mt-10 tracking-wide w-[75%] mb-20">
      <div>
        <h2 className="font-bold text-[38px] mb-5">Book Summaries</h2>
        <p className="mb-3">
          In here, you will find the list of book summaries that I found
          interesting.
        </p>
        <p className="mb-3">
          Please note, these summaries are note exhausitive by any means. It
          will include excerpts that I find informative or interesting.{" "}
        </p>
        <p className="mb-3">
          If you have any questions or you just want to exlore soem the ideas in
          any of the books listed, I'd recommend you read the book. Purchase
          link to all the books is provided under the book summary
        </p>
      </div>
    </div>
    <hr 
        className="mb-5"
      />
      <div>
        {
          booksSummary.map((bookSummary) =>{
            return (
              <BookCard 
              props={bookSummary}
            />
            )
          })
        }
      </div>
    </>
  );
}
