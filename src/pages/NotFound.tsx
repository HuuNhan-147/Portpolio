import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <Container className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="text-center">
        <div className="text-9xl font-bold text-primary-100 mb-4">404</div>
        <div className="text-gray-400 mb-6">
          <Search className="h-16 w-16 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Trang không tìm thấy</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Trang bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc không tồn tại.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Home className="h-5 w-5 mr-2" />
            Về trang chủ
          </Link>
          <Link 
            to="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
          >
            Khám phá Blog
          </Link>
        </div>
      </div>
    </Container>
  );
}