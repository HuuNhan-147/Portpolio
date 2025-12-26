import { BlogPost } from '../types';

export const nodeEventLoopPost: BlogPost = {
  id: 4,
  title: "Hiểu về JavaScript bất đồng bộ - Event Loop",
  slug: "nodejs-event-loop",
  excerpt: "Khám phá cơ chế Event Loop: Trái tim giúp Node.js và JavaScript xử lý hàng ngàn request đồng thời dù chỉ chạy trên một luồng duy nhất.",
  content: `# Hiểu về JavaScript bất đồng bộ – Event Loop

Event Loop là gì và hoạt động thế nào? Đây là câu hỏi cốt lõi để hiểu tại sao Node.js đơn luồng lại mạnh mẽ đến vậy. Nếu như ở PHP hay Java, mỗi request sinh ra một thread mới, tốn tài nguyên, thì Node.js sử dụng Event Loop để xử lý hàng ngàn request với chỉ một thread.

## 1. Các khái niệm cơ bản

Để hiểu Event Loop, chúng ta cần nắm vững quản lý bộ nhớ trong JS:

### 1.1 Stack (Call Stack)
Stack là vùng nhớ ngăn xếp (LIFO - Last In First Out) dùng để thực thi các hàm.
*   Khi một hàm được gọi, nó được đẩy vào Stack.
*   Khi hàm chạy xong (return), nó được lấy ra khỏi Stack.

![Event Loop Stack](https://topdev.vn/blog/wp-content/uploads/2018/12/event-loop.png)

Ví dụ: Hàm \`Foo\` gọi hàm \`Bar\`. \`Foo\` dừng lại đợi \`Bar\` chạy xong. \`Bar\` xong thì mới đến lượt \`Foo\` tiếp tục.

### 1.2 Heap
Vùng nhớ dùng để chứa kết quả tạm thời, cấp phát động object...

### 1.3 Event Queue (Callback Queue)
Hàng đợi (FIFO - First In First Out) chứa các sự kiện hoặc callback đã hoàn thành và đang **chờ được thực thi**.

## 2. Event Loop là gì?

Event Loop là cơ chế giúp Javascript thực hiện **concurrent model** (mô hình đồng thời) dù chỉ có một luồng duy nhất.

Bí mật nằm ở **Web APIs** (trên Browser) hoặc **C++ APIs/libuv** (trên Node.js).
*   JS Runtime (V8) chỉ có 1 luồng.
*   Nhưng Web APIs (xử lý AJAX, Timeout, DOM Event) chạy đa luồng bên ngoài Runtime.

## 3. Quy trình hoạt động

Event Loop thực chất là một vòng lặp vô tận:

\`\`\`javascript
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
\`\`\`

**Quy tắc vàng:** Event Loop chỉ đưa callback từ Queue vào Stack khi **Stack đã hoàn toàn rỗng**.

### Ví dụ phân tích:

\`\`\`javascript
console.log("1. Start");

setTimeout(() => {
    console.log("2. Timeout");
}, 0);

console.log("3. End");
\`\`\`

**Luồng chạy:**
1.  \`console.log("1. Start")\` -> Đẩy vào Stack -> Chạy -> Xong -> Ra khỏi Stack.
2.  \`setTimeout(..., 0)\` -> Đẩy vào Stack. Đây là hàm của Web API. Browser sẽ "bấm giờ" (0ms).
3.  Web API đếm xong ngay lập tức -> Đẩy callback \`console.log("2. Timeout")\` vào **Event Queue**.
4.  Lúc này, Stack tiếp tục chạy dòng 3: \`console.log("3. End")\`.
5.  Stack trống. **Event Loop** nhìn thấy Stack trống -> Lấy callback từ Queue đẩy vào Stack.
6.  \`console.log("2. Timeout")\` được chạy.

**Kết quả:**
\`\`\`
1. Start
3. End
2. Timeout
\`\`\`

## 4. Tại sao Browser bị treo? (Block the Event Loop)

Vì cơ chế **Run-to-completion** (chạy đến khi xong): Một hàm đang chạy trong Stack sẽ không thể bị dừng lại.
Nếu bạn viết một vòng lặp vô tận \`while(true)\` hoặc tính toán quá nặng trên luồng chính:
-> Stack không bao giờ rỗng.
-> Event Loop không thể đẩy sự kiện click chuột, render UI vào Stack.
-> **Browser bị đơ (Not Responding).**

Trong Node.js, điều này làm server không thể nhận request mới. Do đó: **Không bao giờ chặn Event Loop.**

## Kết luận

Hiểu Event Loop giúp bạn viết code bất đồng bộ hiệu quả và tránh các lỗi treo ứng dụng. Hãy luôn đẩy các tác vụ nặng ra Worker Thread hoặc xử lý bất đồng bộ hợp lý.

---
*Hình ảnh và nội dung tham khảo từ TopDev.*`,
  category: "JavaScript",
  tags: ["Node.js", "JavaScript", "Event Loop", "Async"],
  author: "Huu Nhan",
  date: "2024-12-12",
  readTime: "9 phút",
  featured: false,
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
