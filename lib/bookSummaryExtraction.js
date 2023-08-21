// Third party imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const bookSummaryDirectory = path.join(process.cwd(), 'book-summary');

export const getSortedBookSummary = () => {
    const fileNames = fs.readdirSync(bookSummaryDirectory);
    const allBookSummaryData = fileNames.map((fileName) => {
        //Remove markdow file as string
        const id = fileName.replace(/\.md$/, '');

        //reading markdown file as string
        const fullPath = path.join(bookSummaryDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');

        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContent);
        
        //combine the data with  id
        return {
            id,
            ...matterResult.data
        };
    });

    //Sort Book summary date

    return allBookSummaryData.sort((a, b) => a.date < b.date? 1: -1)
}

export async function getBooksummary(id) {
    const fullPath = path.join(bookSummaryDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');

    // use gray-matter to parse the post metadata seciton
    const matterResult = matter(fileContent);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml

    return {
        id, 
        contentHtml,
        ...matterResult
    }
}