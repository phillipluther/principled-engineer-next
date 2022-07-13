import fs from 'fs';
import klaw from 'klaw-sync';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export type PostProps = {
  id: string;
  markdown: string;
  title: string;
  author: string;
  slug: string;
  summary?: string;
  published: string;
  tags?: string[];
  keywords?: string[];
  series?: string;
};

export const sortObjByProp = (obj: { [key: string]: any }, prop: string) =>
  obj.sort(({ [prop]: a }: { [key: string]: any }, { [prop]: b }: { [key: string]: any }) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    }

    return 0;
  });

export const getPostFiles = () =>
  klaw(postsDir, { nodir: true }).filter(({ path: filename }) => /\.mdx?/.test(filename));

/**
 * TODO: this'll get nuts and costly; implement some kind of simple caching strategy
 */
export function getPostData(id: string) {
  const allPostData = getAllPostData();
  const postData = allPostData.find(({ slug }) => slug === id);

  return {
    id,
    ...postData,
  };
}

export const getAllPostData = (sortFunc = null): PostProps[] => {
  const markdownFiles = getPostFiles();
  const postsData = markdownFiles.map(({ path: filepath }) => {
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const { content: markdown, data: metadata } = matter(fileContents);
    const slug = metadata.slug || path.parse(filepath).name;

    const postData = {
      ...metadata,
      markdown,
      slug,
    };

    return postData;
  });

  return sortFunc ? sortFunc(postsData) : sortObjByProp(postsData, 'date');
};

export const getPostPathParams = () => {
  const allPostData = getAllPostData();

  return allPostData.map(({ slug: id }) => {
    return {
      params: { id },
    };
  });
};
