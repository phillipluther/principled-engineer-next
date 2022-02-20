import DateFormatter from './date-formatter';
import Link from 'next/link';

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
}) => {
  return (
    <article>
      <header>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <DateFormatter dateString={date} />
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <img src={coverImage} alt={`Cover Image for ${title}`} />
        </Link>
      </header>
      <section>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </section>
    </article>
  );
};

export default PostPreview;
