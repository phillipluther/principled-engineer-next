import fs from 'fs';
import klaw from 'klaw-sync';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');
const assetsDir = path.join(process.cwd(), 'public/assets');

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
  cover?: string;
  cover_credit?: string;
  cover_credit_link?: string;
  cover_alt?: string;
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
  klaw(postsDir, { nodir: true }).filter(({ path: filepath }) => /\.mdx?/.test(filepath));

export const copyPostAssets = (postDir) => {
  klaw(postDir, { nodir: true }).forEach(({ path: filepath }) => {
    // ignore markdown
    if (/\.mdx?/.test(filepath)) {
      return;
    }

    const { base: filename } = path.parse(filepath);
    const destDir = path.join(assetsDir, filename);

    fs.mkdirSync(assetsDir, { recursive: true });
    fs.cpSync(filepath, path.join(assetsDir, filename));
  });
};

/**
 * TODO: this'll get nuts and costly; implement some kind of simple caching strategy
 */
export async function getPostData(id: string) {
  const allPostData = getAllPostData();
  const postData = allPostData.find(({ slug }) => slug === id);

  return {
    ...postData,
    id,
  };
}

export const getAllPostData = (sortFunc = null): PostProps[] => {
  const markdownFiles = getPostFiles();
  const postsData = markdownFiles.map(({ path: filepath }) => {
    const { dir: currentDir } = path.parse(filepath);
    const fileContents = fs.readFileSync(filepath, 'utf8');
    const { content: markdown, data: metadata } = matter(fileContents);
    const slug = metadata.slug || path.parse(filepath).name;

    const postData = {
      ...(metadata as PostProps),
      markdown,
      slug,
    };

    copyPostAssets(currentDir);

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
