import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />

      <div className="w-full max-w-4xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/index" className="text-gray-500 hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/about" className="text-gray-500 hover:text-gray-600 transition">
            
              About
            
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/DebopriyaDebRoy">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/DDR13GIT">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCVxQuVHJo8JZe_etepm5lXg">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4"></div>
      </div>
    </footer>
  );
}
