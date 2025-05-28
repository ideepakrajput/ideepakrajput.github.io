function generateBlogFromTemplate(blogData) {
    // Read the template file
    let template = `<!-- Your template HTML here -->`;

    // Replace placeholders
    template = template.replace(/\{\{BLOG_TITLE\}\}/g, blogData.title);
    template = template.replace(/\{\{BLOG_DESCRIPTION\}\}/g, blogData.description);
    template = template.replace(/\{\{BLOG_KEYWORDS\}\}/g, blogData.keywords);
    template = template.replace(/\{\{BLOG_SLUG\}\}/g, blogData.slug);
    template = template.replace(/\{\{BLOG_IMAGE\}\}/g, blogData.image);
    template = template.replace(/\{\{BLOG_CATEGORY\}\}/g, blogData.category);
    template = template.replace(/\{\{CATEGORY_ICON\}\}/g, blogData.categoryIcon);
    template = template.replace(/\{\{PUBLISH_DATE\}\}/g, blogData.publishDate);
    template = template.replace(/\{\{MODIFIED_DATE\}\}/g, blogData.modifiedDate);
    template = template.replace(/\{\{BLOG_CONTENT\}\}/g, blogData.content);

    // Generate related posts HTML
    const relatedPostsHTML = blogTemplateConfig.generateRelatedPostsHTML(blogData.relatedPosts);
    template = template.replace(/\{\{RELATED_POSTS\}\}/g, relatedPostsHTML);

    return template;
}

// List of blog categories with their icons
const blogCategories = {
    'Development': 'fas fa-code',
    'DevOps': 'fas fa-server',
    'Git & Version Control': 'fab fa-git-alt',
    'JavaScript': 'fab fa-js-square',
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'Database': 'fas fa-database',
    'Tutorial': 'fas fa-graduation-cap',
    'Tips & Tricks': 'fas fa-lightbulb'
};