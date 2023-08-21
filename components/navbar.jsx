import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 max-w-full bg-[#0f172a] opacity-[0.98]">
      <nav className="flex justify-between mx-auto py-5 max-w-5xl px-4">
        <Link href="/" alt="home page">
          Home
        </Link>
        <div className="space-x-6 text-[18] font-medium">
          <Link href="/books" alt="book summary page"
          >
            Books
          </Link>
          <Link href="/about" alt="about page">
            About
          </Link>
          <Link href="/contact" alt="contact page">
            Contact
          </Link>
        </div>
      </nav>
      <div className="w-[100%] h-[0.08px] opacity-10 bg-white m-0"></div>
    </div>
  );
}
