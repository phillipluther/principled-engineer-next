import DateFormatter from './date-formatter';
import PostProps from '../types/post';

const Post = ({ content, coverImage, date, title }: PostProps) => {
  return (
    <article>
      <header>
        <h1>{title}</h1>
        <p>
          <DateFormatter dateString={date} />
        </p>
        <img src={coverImage} alt={`Cover Image for ${title}`} />
      </header>

      <section className="prose" dangerouslySetInnerHTML={{ __html: content }} />

      <footer>
        <p>Supplemental post content</p>
      </footer>
    </article>
  );
};

export default Post;
