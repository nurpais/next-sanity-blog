'use client';
import { Prose } from '@/app/components/Prose';
import { formatDate } from '@/app/lib/formatDate';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "Post" && slug.current == "${slug}"][0] {
    title, slug, publishedAt, excerpt, body,
    tags[]-> {_id, name, slug}
  }
`;

  const post = await client.fetch(query);
  return post;
}

const PortableComponents = {
  types: {
    image: ({ value }: any) => {
      return <img src={urlForImage(value)} />;
    },
  },
};

const page = async ({ params }: Params) => {
  const post = await getPost(params.slug);

  return (
    <article className="mx-auto max-w-2xl mt-10">
      <header className="flex flex-col">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {post?.title}
        </h1>
        <time
          dateTime={post?.date}
          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(post?.publishedAt)}</span>
        </time>
      </header>

      <Prose className="mt-8" data-mdx-content>
        <PortableText value={post?.body} components={PortableComponents} />
      </Prose>
    </article>
  );
};

export default page;
