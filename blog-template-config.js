// Blog Template Configuration
const blogTemplateConfig = {
    // Template placeholders to replace
    placeholders: {
        '{{BLOG_TITLE}}': '',
        '{{BLOG_DESCRIPTION}}': '',
        '{{BLOG_KEYWORDS}}': '',
        '{{BLOG_SLUG}}': '',
        '{{BLOG_IMAGE}}': '',
        '{{BLOG_CATEGORY}}': '',
        '{{CATEGORY_ICON}}': '',
        '{{PUBLISH_DATE}}': '',
        '{{MODIFIED_DATE}}': '',
        '{{TABLE_OF_CONTENTS}}': '',
        '{{BLOG_CONTENT}}': '',
        '{{RELATED_POSTS}}': ''
    },

    // Sample blog data structure
    sampleBlog: {
        title: "Your Blog Title Here",
        description: "A comprehensive guide to...",
        keywords: "keyword1, keyword2, keyword3",
        slug: "your-blog-slug",
        image: "blog-image.webp",
        category: "Development",
        categoryIcon: "fas fa-code",
        publishDate: "2025-01-15T10:00:00+00:00",
        modifiedDate: "2025-01-15T10:00:00+00:00",
        content: `
            <section id="introduction" class="mb-12">
                <h2 class="text-3xl font-bold mb-6 text-blue-400">
                    <i class="fas fa-rocket mr-3"></i>Introduction
                </h2>
                <p class="text-lg text-gray-300 mb-6 leading-relaxed">
                    Your blog content goes here...
                </p>
            </section>
        `,
        relatedPosts: [
            {
                title: "Related Post 1",
                description: "Brief description...",
                category: "Development",
                categoryColor: "green-500",
                slug: "related-post-1"
            },
            {
                title: "Related Post 2",
                description: "Brief description...",
                category: "DevOps",
                categoryColor: "blue-500",
                slug: "related-post-2"
            }
        ]
    },

    // Generate related posts HTML
    generateRelatedPostsHTML: function (posts) {
        return posts.map(post => `
            <article class="related-blog-card bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-all cursor-pointer">
                <div class="flex items-center space-x-3 mb-2">
                    <div class="w-2 h-2 bg-${post.categoryColor} rounded-full"></div>
                    <span class="text-xs text-gray-400">${post.category}</span>
                </div>
                <h4 class="font-semibold text-white mb-2 text-sm">
                    ${post.title}
                </h4>
                <p class="text-gray-400 text-xs">
                    ${post.description}
                </p>
            </article>
        `).join('');
    }
};

// Usage example:
// const blogHTML = generateBlogFromTemplate(blogTemplateConfig.sampleBlog);