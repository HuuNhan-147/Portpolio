import { BlogPost } from '../types';

export const reactHooksPost: BlogPost = {
  id: 7,
  title: "React Hooks: Cuộc cách mạng trong React",
  slug: "react-hooks",
  excerpt: "Tìm hiểu về useState, useEffect, useContext và custom hooks để viết Functional Components mạnh mẽ.",
  content: `# React Hooks: Viết React Component sạch hơn

React Hooks, giới thiệu trong phiên bản 16.8, đã thay đổi hoàn toàn cách chúng ta viết React. Không còn Class Component, không còn \`this\`, không còn Lifecycle methods rắc rối.

## 1. useState: Quản lý trạng thái

Trước đây, state chỉ có trong Class Component. Giờ đây:

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Bấm tôi
      </button>
    </div>
  );
}
\`\`\`

## 2. useEffect: Xử lý Side Effects

Thay thế cho \`componentDidMount\`, \`componentDidUpdate\`, và \`componentWillUnmount\`.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Gọi API khi component mount hoặc userId thay đổi
    fetch(\`https://api.example.com/users/\${userId}\`)
      .then(response => response.json())
      .then(data => setUser(data));
      
    // Cleanup function (tương đương componentWillUnmount)
    return () => {
      console.log("Cleanup...");
    };
  }, [userId]); // Dependency array

  if (!user) return "Loading...";
  return <h1>{user.name}</h1>;
}
\`\`\`

## 3. useContext: Chia sẻ dữ liệu toàn cục

Giúp tránh việc truyền props qua quá nhiều cấp (Prop Drilling).

\`\`\`javascript
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div style={{ background: theme === 'dark' ? '#333' : '#FFF' }}>Themed Toolbar</div>;
}
\`\`\`

## 4. Custom Hooks

Bạn có thể tự viết Hooks để tái sử dụng logic. Ví dụ hook \`useWindowWidth\`:

\`\`\`javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}
\`\`\`

## Kết luận

Hooks giúp component nhỏ gọn, dễ đọc và dễ test hơn. Nếu bạn đang bắt đầu với React năm 2024, hãy bắt đầu ngay với Hooks và Functional Components.`,
  category: "Frontend",
  tags: ["React", "Hooks", "Frontend", "JavaScript"],
  author: "Huu Nhan",
  date: "2024-12-09",
  readTime: "10 phút",
  featured: false,
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
