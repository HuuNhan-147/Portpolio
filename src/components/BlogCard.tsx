import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { BlogPost } from "../data/types";
import { clsx } from "clsx";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={clsx(
      "group bg-white dark:bg-dark-900 rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-800 transition-all duration-300 hover:shadow-xl hover:shadow-dark-900/5 dark:hover:shadow-black/30 hover:-translate-y-1 h-full flex flex-col",
      featured ? "md:col-span-2 lg:col-span-2 grid md:grid-cols-2 gap-0" : ""
    )}>
      <Link to={`/blog/${post.slug}`} className={clsx("overflow-hidden block relative", featured ? "h-64 md:h-full" : "h-56")}>
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark-900/10 dark:bg-dark-900/40 group-hover:bg-transparent transition-colors" />
      </Link>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
            {post.category}
          </span>
          <div className="flex items-center text-dark-400 dark:text-dark-500 text-sm">
            <Clock className="h-3.5 w-3.5 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="group/title block mb-3">
          <h3 className={clsx(
            "font-display font-bold text-dark-900 dark:text-white group-hover/title:text-primary-600 dark:group-hover/title:text-primary-400 transition-colors",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-dark-500 dark:text-dark-400 mb-6 line-clamp-2 leading-relaxed flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-dark-100 dark:border-dark-800 mt-auto">
          <div className="flex items-center text-sm text-dark-500 dark:text-dark-400">
            <Calendar className="h-4 w-4 mr-2 text-dark-400 dark:text-dark-500" />
            <span>
              {format(new Date(post.date), "dd MMM yyyy", { locale: vi })}
            </span>
          </div>
          
          <Link 
            to={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
          >
            Đọc tiếp
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}