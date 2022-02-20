import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <section>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </ul>
    </section>
  );
};

export default PostList;
