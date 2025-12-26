import { useState, ChangeEvent } from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import { blogPosts, categories } from "../data/posts";
import { Search, Filter, ChevronDown } from "lucide-react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <>
      <Header 
        title="Blog Lập Trình"
        subtitle="Chia sẻ kiến thức về Java & JavaScript"
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <Container className="py-12">
        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-lg font-medium text-gray-900">Lọc theo:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              
              <div className="relative">
                <select
                  className="appearance-none w-full md:w-48 px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="all">Tất cả chủ đề</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tất cả ({blogPosts.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.name
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        {filteredPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center text-gray-600">
              Hiển thị {filteredPosts.length} bài viết
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Không tìm thấy bài viết</h3>
            <p className="text-gray-600">
              Hãy thử tìm kiếm với từ khóa khác hoặc chọn chủ đề khác
            </p>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Không muốn bỏ lỡ bài viết mới?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Đăng ký nhận bản tin để được thông báo khi có bài viết mới về lập trình mạng, 
            Java và JavaScript. Cam kết không spam!
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email của bạn"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}