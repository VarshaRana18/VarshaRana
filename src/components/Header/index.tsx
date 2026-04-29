import Link from "next/link";

export default function Header() {
  return (
    <header className="py-3 px-0 mx-0 mt-3">
      {/* <div>Varsha Rana</div> */}
      <nav className="flex gap-2 items-center justify-around mx-0 px-0">
        <Link
          href="/"
          className="font-mystic text-3xl font-bold  text-violet-300"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="font-mystic text-3xl font-bold text-violet-300"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="font-mystic text-3xl font-bold text-violet-300"
        >
          Blogs
        </Link>
      </nav>
    </header>
  );
}
