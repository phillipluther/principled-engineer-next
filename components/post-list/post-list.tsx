import PostSummary from '../post-summary';
import classnames from 'classnames';
import { PostProps } from '../../lib/posts';

import styles from './post-list.module.css';

export type PostListProps = {
  title: string;
  postsData: PostProps[];
  headingLevel?: 'h2' | 'h3' | 'h4' | 'h5';
};

const PostList = ({ postsData }: PostListProps) => (
  <section className={classnames(styles.wrapper)}>
    <ul>
      {postsData.map((postData) => (
        <li key={postData.slug}>
          <PostSummary className={styles.summary} {...postData} />
        </li>
      ))}
    </ul>
  </section>
);

export default PostList;
