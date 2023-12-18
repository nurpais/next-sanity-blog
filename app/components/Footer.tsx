const Footer = () => {
  return (
    <footer className="mt-32 text-center relative flex-none">
      <p className="text-sm text-zinc-400 dark:text-zinc-500 py-10">
        &copy; {new Date().getFullYear()} Spencer Sharp. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
