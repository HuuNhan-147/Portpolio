import { BlogPost } from '../types';

export const websocketJsPost: BlogPost = {
  id: 9,
  title: "Xây dựng ứng dụng Real-time với WebSocket và Node.js",
  slug: "websocket-javascript",
  excerpt: "Hướng dẫn từng bước xây dựng ứng dụng Chat Real-time đơn giản sử dụng WebSocket và Node.js.",
  content: `# Xây Dựng Ứng Dụng Real-time Với WebSocket và Node.js

Bạn muốn xây dựng ứng dụng chat, thông báo realtime hay game online? WebSocket chính là chìa khóa. Khác với HTTP (Client hỏi - Server trả lời), WebSocket cho phép kết nối hai chiều liên tục.

## Hướng Dẫn Từng Bước: Xây Dựng Ứng Dụng Chat

Chúng ta sẽ tạo một ứng dụng Chat đơn giản.

### Bước 1: Cài Đặt Môi Trường

1.  Cài đặt Node.js.
2.  Khởi tạo dự án: \`npm init -y\`
3.  Cài đặt thư viện \`ws\`: \`npm install ws\`

### Bước 2: Tạo Server WebSocket (server.js)

\`\`\`javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

console.log("Server started on port 8080");

server.on('connection', socket => {
  console.log('Client connected');

  socket.on('message', message => {
    console.log(\`Received: \${message}\`);
    // Gửi tin nhắn cho tất cả client khác
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(\`Anonymous: \${message}\`);
      }
    });
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});
\`\`\`

### Bước 3: Tạo Client Chat (index.html)

\`\`\`html
<!DOCTYPE html>
<html>
<body>
    <h2>WebSocket Chat</h2>
    <input type="text" id="messageInput" placeholder="Nhập tin nhắn...">
    <button onclick="sendMessage()">Gửi</button>
    <ul id="messages"></ul>

    <script>
        const ws = new WebSocket('ws://localhost:8080');

        ws.onmessage = (event) => {
            const li = document.createElement('li');
            li.textContent = event.data;
            document.getElementById('messages').appendChild(li);
        };

        function sendMessage() {
            const input = document.getElementById('messageInput');
            ws.send(input.value);
            input.value = '';
        }
    </script>
</body>
</html>
\`\`\`

### Bước 4: Chạy thử

1.  Mở terminal: \`node server.js\`
2.  Mở file \`index.html\` trên 2 tab trình duyệt khác nhau.
3.  Chat thử và thấy tin nhắn xuất hiện tức thì!

## Kết luận

WebSocket mở ra khả năng tương tác thời gian thực tuyệt vời cho web. Kết hợp với Node.js, bạn có thể xây dựng các ứng dụng chat, dashboard monitoring, hay game multiplayer một cách dễ dàng.`,
  category: "JavaScript",
  tags: ["WebSocket", "Node.js", "Real-time", "JavaScript"],
  author: "Huu Nhan",
  date: "2024-12-07",
  readTime: "15 phút",
  featured: false,
  image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
