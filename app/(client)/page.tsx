import { client } from '@/sanity/lib/client';
import type { Post } from '../@types/Post';
import PostCard from '../components/PostCard';
import { Container } from '../components/Container';

async function getPosts() {
  const query = `
    *[_type == "Post"] {
      title, slug, publishedAt, excerpt,
      tags[]-> {_id, name, slug}
    }
  `;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-center py-10">Articles</h1>

      <div className="mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 ">
          <div className="flex flex-col flex-auto gap-16 w-full">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
