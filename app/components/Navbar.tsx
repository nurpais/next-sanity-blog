import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-center items-center h-16 w-full">
        <Link href="/">Blog</Link>
      </div>
    </div>
  );
};

export default Navbar;
