import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 text-white pt-16 pb-8 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-2xl text-white">HuuNhan<span className="text-primary-400">.dev</span></span>
            </div>
            <p className="text-dark-300 mb-8 max-w-sm leading-relaxed">
              Chia sẻ kiến thức về lập trình mạng, Java và JavaScript. 
              Nơi tôi ghi lại hành trình học tập và phát triển sự nghiệp.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="p-3 bg-dark-900 rounded-xl hover:bg-primary-600 hover:text-white text-dark-300 transition-all duration-300 hover:-translate-y-1" 
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Khám phá</h3>
            <ul className="space-y-4">
              {[
                { name: "Trang chủ", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Về tôi", href: "/#about" },
                { name: "Liên hệ", href: "/#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-dark-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Chuyên mục</h3>
            <ul className="space-y-4">
              {[
                { name: "Java Networking", href: "/blog?category=Java%20Networking" },
                { name: "JavaScript", href: "/blog?category=JavaScript" },
                { name: "Java Backend", href: "/blog?category=Java%20Backend" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-dark-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center text-dark-400 text-sm">
          <p>© {currentYear} HuuNhan.dev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}