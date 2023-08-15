import '../global.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';

export const metadata = {
  title: 'My First Sanity Project ',
  description: 'My Sanity project Next app with TypeScript and Tailwind CSS ',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-indigo-600 bg-clip-text text-transparent text-4xl font-bold">Sanity io</Link>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline font-serif text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
              >
                {page.title}
              </Link>

            ))}

          </div>
        </header>
        <main className="py-5">{children}</main>
      </body>
    </html>
  )
}