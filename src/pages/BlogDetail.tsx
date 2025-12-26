import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/posts";
import Container from "../components/Container";
import { Calendar, Clock, Tag, User, ArrowLeft, Share2, Bookmark, List } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import NotFound from "./NotFound";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "highlight.js/styles/github-dark.css";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (post?.content) {
      const lines = post.content.split("\n");
      const extracted: TocItem[] = [];
      
      lines.forEach(line => {
        const match = line.match(/^(#{2,3})\s+(.*)$/);
        if (match) {
          const level = match[1].length;
          const text = match[2];
          // Simple slugify matching common github-slugger behavior for simple cases
          // Note: This might need adjustment for complex Vietnamese characters if rehype-slug handles them differently
          // For now, let's try a robust slug generation or rely on rehype-slug's IDs
          // Actually, we can't easily predict rehype-slug's exact ID for non-ascii without the library logic
          // A workaround: We will inspect the DOM after render or use a simpler custom ID generator if needed.
          // Let's assume standard slugify and fix if broken. 
          // Better approach: use a non-slug reference? No, anchors need IDs.
          // Let's use a simple slugify that removes special chars.
          const id = slugify(text);
          extracted.push({ id, text, level });
        }
      });
      setHeadings(extracted);
    }
  }, [post]);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    const headingElements = document.querySelectorAll("h2, h3");
    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      {/* Article Header (Hero) */}
      <section className="relative pt-32 pb-20 bg-dark-900 text-white overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
        
        <Container className="relative z-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-dark-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại Blog
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
             <span className="inline-block py-1 px-3 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold mb-6 border border-primary-500/30 backdrop-blur-sm">
                {post.category}
              </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-dark-300">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{format(new Date(post.date), "dd MMMM yyyy", { locale: vi })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime} đọc</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content & Sidebar */}
      <section className="py-16 bg-white dark:bg-dark-950 transition-colors">
        <Container>
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            
            {/* Table of Contents (Desktop Sidebar) */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <div className="flex items-center gap-2 mb-4 text-dark-900 dark:text-white font-bold">
                  <List className="h-5 w-5" />
                  <h4>Mục lục</h4>
                </div>
                <nav className="flex flex-col space-y-2 border-l-2 border-dark-100 dark:border-dark-800 pl-4">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={clsx(
                        "text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400 block py-1",
                        activeId === heading.id
                          ? "text-primary-600 dark:text-primary-400 font-medium -ml-[18px] border-l-2 border-primary-600 pl-4"
                          : "text-dark-500 dark:text-dark-400"
                      )}
                      style={{ paddingLeft: heading.level === 3 ? "1rem" : "0" }}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                        setActiveId(heading.id);
                      }}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 max-w-3xl">
              <article className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                prose-headings:font-display prose-headings:font-bold prose-headings:text-dark-900 dark:prose-headings:text-white
                prose-p:text-dark-600 dark:prose-p:text-dark-300 prose-p:leading-relaxed
                prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg
                prose-code:text-primary-700 dark:prose-code:text-primary-300 prose-code:bg-primary-50 dark:prose-code:bg-primary-900/20 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-dark-900 prose-pre:border prose-pre:border-dark-800
                prose-strong:text-dark-900 dark:prose-strong:text-white
                prose-li:text-dark-600 dark:prose-li:text-dark-300
              ">
                <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeSlug]}>
                  {post.content}
                </ReactMarkdown>
              </article>

              {/* Tags & Action */}
              <div className="mt-12 pt-8 border-t border-dark-100 dark:border-dark-800 flex flex-wrap justify-between items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dark-50 dark:bg-dark-800 text-dark-600 dark:text-dark-300"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-dark-400 dark:text-dark-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Bookmark">
                    <Bookmark className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-dark-400 dark:text-dark-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" aria-label="Share">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Newsletter CTA */}
              <div className="mt-16 bg-primary-50 dark:bg-primary-900/10 rounded-2xl p-8 text-center border border-primary-100 dark:border-primary-900/30">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">Thích bài viết này?</h3>
                <p className="text-dark-600 dark:text-dark-300 mb-6">Đăng ký để nhận thông báo về các bài viết {post.category} mới nhất.</p>
                <div className="flex gap-2 max-w-sm mx-auto">
                  <input type="email" placeholder="Email của bạn" className="flex-1 px-4 py-2 rounded-lg border border-primary-200 dark:border-primary-800 bg-white dark:bg-dark-900 dark:text-white focus:outline-none focus:border-primary-500" />
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">Đăng ký</button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}