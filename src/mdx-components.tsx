import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    };
}

export function MdxLayout({ children, title, tags }: { children: React.ReactNode; title: string; tags: number[] }) {
    // Create any shared layout or styles here
    return (
        <main className="flex min-h-full max-w-screen-sm mx-auto flex-col px-4">
            <div className="flex items-center space-x-3">
                <Link href="/" className="rounded-2xl border border-[#C2C2C2] bg-[F7F7F7] px-2.5 py-1 text-[#AFAFAF] text-[13px]">
                    ← Home
                </Link>
                <h1 className="text-[28px] font-bold">{title}</h1>
            </div>

            <div className="flex items-center my-8 flex-wrap text-nowrap">
                {tags.map((tag) => (
                    <div key={`offer_${tag}`} className="flex items-center gap-x-1 font-light">
                        <div className="border border-[#D9700F] bg-[#D9700F] bg-opacity-25 w-6 h-6 rounded-lg" />
                        <span className="text-gray-500 text-[13px]">{tag}</span>
                    </div>
                ))}
            </div>
            <article className="prose">{children}</article>
        </main>
    );
}
