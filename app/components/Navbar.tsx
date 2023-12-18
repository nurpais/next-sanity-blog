import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex justify-center items-center h-16 w-full ">
        <Link href="/" className="text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Subject Matter
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
