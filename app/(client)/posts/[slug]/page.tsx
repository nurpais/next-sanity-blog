'use client';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import Image from 'next/image';

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
    <div className="prose">
      <h1>{post?.title}</h1>
      <p>{new Date(post?.publishedAt).toDateString()}</p>

      <PortableText value={post?.body} components={PortableComponents} />
    </div>
  );
};

export default page;
