import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { slug: string }
}



export default async function Page({ params }: Props) {
    const page = await getPage(params.slug);
    return (
        <div>
            <h1 className="text-4xl font-bold text-blue-500 py-10">
                {page.title}
            </h1>
            <div className="text-base text-gray-600 mt-6 py-4 border-t border-gray-300 font-serif break-words">
                <PortableText value={page.content} />
            </div>

        </div>
    )
}
