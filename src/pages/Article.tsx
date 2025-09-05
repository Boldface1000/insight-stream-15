import { Calendar, Clock, Eye, MessageCircle, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Article = () => {
  // Mock article data - in production this would be fetched based on the article ID
  const article = {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will reshape how we build digital experiences. From AI-powered development tools to advanced framework capabilities, let's explore the key trends that every developer should be watching.</p>
      
      <h2>AI Integration in Development Workflows</h2>
      <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of the development process. AI-powered code completion, automated testing, and intelligent debugging tools are revolutionizing how developers work, making them more productive and helping them catch errors before they reach production.</p>
      
      <blockquote>
        "The integration of AI in development tools isn't about replacing developers—it's about augmenting their capabilities and allowing them to focus on higher-level problem solving."
      </blockquote>
      
      <h2>The Rise of Web Components</h2>
      <p>Web Components are gaining significant traction as a standard way to create reusable, encapsulated HTML elements. Unlike framework-specific components, Web Components work across all modern browsers and can be used with any JavaScript framework or even vanilla JavaScript.</p>
      
      <h2>Performance-First Development</h2>
      <p>With Core Web Vitals becoming increasingly important for SEO and user experience, performance optimization is no longer optional. Developers are embracing tools and techniques like:</p>
      
      <ul>
        <li>Advanced code splitting and lazy loading strategies</li>
        <li>Edge computing and CDN optimization</li>
        <li>Progressive enhancement techniques</li>
        <li>Real-time performance monitoring</li>
      </ul>
      
      <h2>The Evolution of CSS</h2>
      <p>CSS continues to evolve with powerful new features like container queries, cascade layers, and advanced color functions. These additions are making it easier to create responsive, maintainable stylesheets without relying heavily on JavaScript.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright, with technologies that prioritize developer experience, performance, and user satisfaction. By staying informed about these trends and experimenting with new tools and techniques, developers can build better, faster, and more accessible web applications.</p>
    `,
    author: {
      name: 'Sarah Chen',
      bio: 'Senior Frontend Developer at TechCorp with 8+ years of experience in web development and a passion for emerging technologies.',
      avatar: ''
    },
    publishedAt: 'December 15, 2023',
    readTime: '8 min read',
    views: 12400,
    comments: 89,
    likes: 234,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Performance', 'CSS', 'JavaScript']
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-surface-elevated">
          <div className="content-narrow py-12 md:py-16">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4 text-sm text-content-tertiary">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-brand text-content-inverse rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-subtle rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-brand">
                      {article.author.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-content-primary">
                      {article.author.name}
                    </div>
                    <div className="text-sm text-content-tertiary">
                      {article.author.bio}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-content-tertiary">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{article.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{article.likes}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Article Actions */}
            <div className="flex items-center gap-3 mb-8">
              <Button className="btn-primary">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative">
          <div className="content-container">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="content-narrow py-16 md:py-24">
          <article className="article-content prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border-subtle">
            <h3 className="font-semibold text-content-primary mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 text-sm bg-surface border border-border-primary text-content-secondary rounded-md hover:bg-brand-subtle hover:text-brand transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-surface-elevated">
          <div className="content-narrow py-16">
            <div className="card-elevated p-8">
              <h3 className="font-display text-2xl font-semibold text-content-primary mb-6">
                About the Author
              </h3>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-brand-subtle rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-brand">
                    {article.author.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-content-primary text-lg mb-2">
                    {article.author.name}
                  </h4>
                  <p className="text-content-secondary mb-4">
                    {article.author.bio}
                  </p>
                  <Button className="btn-secondary">
                    Follow Author
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section Placeholder */}
        <section className="content-narrow py-16">
          <div className="text-center card-subtle p-12">
            <MessageCircle className="w-16 h-16 text-content-tertiary mx-auto mb-4" />
            <h3 className="font-display text-2xl font-semibold text-content-primary mb-4">
              Join the Discussion
            </h3>
            <p className="text-content-secondary mb-6 max-w-md mx-auto">
              Connect to Supabase to enable user authentication and commenting system.
            </p>
            <Button className="btn-primary">
              Enable Comments
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;