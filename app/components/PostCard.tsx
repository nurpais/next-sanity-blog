import Link from 'next/link';
import { Post } from '../@types/Post';
import { CommonProps } from '../@types/common';
import { Card } from './Card';
import { formatDate } from '../lib/formatDate';

interface PostCardProps extends CommonProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  console.log(post?.publishedAt);
  return (
    <Card as="article">
      <Card.Title href={`/posts/${post.slug.current}`}>{post.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={post.publishedAt} decorate>
        {formatDate(post?.publishedAt)}
      </Card.Eyebrow>
      <Card.Description>{post.excerpt}</Card.Description>
      <Card.Cta>Read post</Card.Cta>
    </Card>
  );
};

export default PostCard;
