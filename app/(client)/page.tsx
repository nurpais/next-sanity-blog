import { client } from '@/sanity/lib/client';
import type { Post } from '../@types/Post';
import PostCard from '../components/PostCard';

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
    <div>
      <h1 className="mb-8">Articles</h1>

      <div className="space-y-4">
        {posts?.length > 0 && posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
}
