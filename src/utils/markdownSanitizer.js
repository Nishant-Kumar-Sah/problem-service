const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown')
function sanitizeMarkdownContent(markedContent) {
    //1. convert Markdown to html
    const convertedHtml = marked.parse(markedContent);
    console.log(convertedHtml)
    //2. sanitize the html 
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    })
    console.log(sanitizedHtml)
    //3. convert sanitized html to markdown  (turndown)  (optional)
    const turndownService = new TurndownService()
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml)
    console.log(sanitizedMarkdown)
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;

