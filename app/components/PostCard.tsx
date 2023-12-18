import Link from 'next/link';
import { Post } from '../@types/Post';
import { CommonProps } from '../@types/common';

interface PostCardProps extends CommonProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className="font-bold">{post?.title}</h2>

        <p>{post?.excerpt}</p>
        <p className="text-sm text-neutral-500">{new Date(post?.publishedAt).toDateString()}</p>
      </Link>

      <div>
        {post?.tags?.map((tag) => (
          <span key={tag._id}>#{tag?.name}</span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
