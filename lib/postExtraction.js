import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'all-posts')

export const getSortedPostData = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {

        // Remove file extensions
        const uId = fileName.replace(/\.md$/, '');

        //reading markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContent);

        //conbine the data with uId

        return {
            uId,
            ...matterResult.data
        };

    });


     // Sort posts by date
    return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
  
}

export const getAllPostsIds = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
          params: {
            uId: fileName.replace(/\.md$/, ''),
          },
        };
      });
}

export async function getPostData(uId) {
    const fullPath = path.join(postsDirectory, `${uId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      uId,
      contentHtml,
      ...matterResult.data,
    };
  }


