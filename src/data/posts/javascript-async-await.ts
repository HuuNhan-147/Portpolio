import { BlogPost } from '../types';

export const jsAsyncAwaitPost: BlogPost = {
  id: 2,
  title: "Tất tần tật về Async/Await trong JavaScript",
  slug: "javascript-async-await",
  excerpt: "Tìm hiểu toàn diện về Async/Await: Cách nó giúp code ngắn gọn hơn, xử lý lỗi tốt hơn và tại sao nó là mảnh ghép hoàn hảo cho Promise.",
  content: `# Tất tần tật về ASYNC/AWAIT trong JavaScript

Async/Await là hai thuật ngữ bạn sẽ gặp thường xuyên khi sử dụng JavaScript hiện đại. Cùng tìm hiểu xem chúng là gì và tại sao chúng lại "lợi hại" đến vậy nhé!

## 1. Async/Await là gì?

[Async/Await](https://topdev.vn/blog/tags/async-await/) được giới thiệu trong ES2017 (ES8) và được xây dựng trên nền tảng của **Promise**. Nó tương thích với tất cả các Promise-based API và giúp việc làm việc với các hàm bất đồng bộ trở nên nhanh chóng, dễ hiểu hơn.

*   **Async (Asynchronous)**: Dùng để khai báo hàm bất đồng bộ. Hàm này sẽ luôn trả về một **Promise**. Nếu hàm trả về giá trị, Promise sẽ được resolved với giá trị đó. Nếu hàm ném ra lỗi, Promise sẽ bị rejected.
*   **Await**: Chỉ có thể được sử dụng bên trong một hàm \`async\`. Nó tạm dừng việc thực thi của hàm \`async\` cho đến khi Promise được giải quyết (resolved) hoặc bị từ chối (rejected). Thay vì dùng \`.then()\`, bạn dùng \`await\` để "đợi" kết quả và nhận nó như một giá trị đồng bộ.

![Async Await Concept](https://topdev.vn/blog/wp-content/uploads/2019/03/async-await-javascript-1024x576.jpg)

## 2. Cú pháp Async/Await

### Khai báo hàm async

\`\`\`javascript
async function myFunction() { 
    // Logic bất đồng bộ bên trong 
}
\`\`\`

Một hàm \`async\` luôn trả về Promise.
\`\`\`javascript
async function hello() { 
    return "Hello World"; 
} 
hello().then(console.log); // Output: "Hello World"
\`\`\`

### Sử dụng await

\`\`\`javascript
let result = await somePromise();
\`\`\`

Cú pháp này giúp tránh việc lồng nhiều \`.then()\`, làm mã nguồn trở nên tuần tự và dễ đọc hơn rất nhiều.

### Ví dụ thực tế: Fetch Data

\`\`\`javascript
async function fetchData() { 
    try { 
        // Đợi Promise từ fetch() được resolved
        let response = await fetch('https://api.example.com/data'); 
        
        // Đợi Promise của response.json() được resolved
        let data = await response.json(); 
        
        // Xử lý dữ liệu sau khi nhận được
        console.log(data); 
    } catch (error) { 
        // Xử lý lỗi nếu xảy ra
        console.error('Lỗi:', error); 
    } 
} 
fetchData();
\`\`\`

## 3. Tại sao Async/Await lại "bá đạo"?

Dưới đây là những ưu điểm vượt trội của Async/Await so với Promise thuần túy.

### Code ngắn và sạch hơn (Clean Code)

Rõ ràng nhất là số lượng code giảm đi đáng kể. Bạn không cần \`.then\`, không cần tạo anonymous function để xử lý response, và không cần đặt tên cho biến \`data\` trung gian mà bạn không thực sự dùng đến.

### Xử lý lỗi (Error Handling)

Async/await cho phép bạn xử lý cả lỗi đồng bộ và bất đồng bộ với cùng một cấu trúc \`try/catch\` quen thuộc.

**Với Promise:**
\`\`\`javascript
const makeRequest = () => {
  try {
    getJSON().then(result => {
      // JSON.parse có thể lỗi, nhưng try/catch bên ngoài KHÔNG bắt được
      const data = JSON.parse(result)
      console.log(data)
    })
    // Phải dùng .catch() riêng
    .catch((err) => console.log(err))
  } catch (err) {
    console.log(err)
  }
}
\`\`\`

**Với Async/Await:**
\`\`\`javascript
const makeRequest = async () => {
  try {
    // JSON.parse lỗi hay getJSON lỗi đều được bắt bởi catch này
    const data = JSON.parse(await getJSON())
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
\`\`\`

### Xử lý câu lệnh điều kiện

Promise chain có thể trở thành ác mộng khi bạn có các logic rẽ nhánh \`if/else\`.

**Promise Hell:**
\`\`\`javascript
const makeRequest = () => {
  return getJSON().then(data => {
    if (data.needsAnotherRequest) {
      return makeAnotherRequest(data).then(moreData => {
        console.log(moreData); return moreData;
      })
    } else {
      console.log(data); return data;
    }
  })
}
\`\`\`

**Async/Await Clean:**
\`\`\`javascript
const makeRequest = async () => {
  const data = await getJSON();
  if (data.needsAnotherRequest) {
    const moreData = await makeAnotherRequest(data);
    console.log(moreData);
    return moreData;
  } else {
    console.log(data);
    return data;
  }
}
\`\`\`

### Xử lý giá trị trung gian (Intermediate Values)

Khi bạn cần gọi \`promise1\`, lấy kết quả gọi \`promise2\`, rồi dùng kết quả CẢ HAI để gọi \`promise3\`. Với Promise chain, bạn phải nest code hoặc dùng \`Promise.all\` một cách gượng ép. Với Async/Await, mọi thứ tự nhiên như code tuần tự:

\`\`\`javascript
const makeRequest = async () => {
  const value1 = await promise1();
  const value2 = await promise2(value1);
  return promise3(value1, value2);
}
\`\`\`

### Error Stack & Debugging

*   **Error Stack**: Khi có lỗi trong chuỗi Promise dài, stack trace thường không chỉ rõ lỗi ở hàm nào trong chuỗi. Với Async/Await, error stack chỉ thẳng vào function chứa lỗi.
*   **Debugging**: Bạn có thể đặt breakpoint ngay tại dòng \`await\` và "step over" nó như một dòng lệnh bình thường. Điều này là không thể với \`.then()\`.

## 4. Chạy song song với Promise.all

Đừng quên rằng \`await\` sẽ chặn luồng thực thi. Nếu hai tác vụ không phụ thuộc nhau, hãy chạy chúng song song!

\`\`\`javascript
async function getData() {
    // Chạy cả 2 request cùng lúc
    let [data1, data2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]);
    console.log(data1, data2);
}
\`\`\`

## Kết luận

Async/Await là mảnh ghép hoàn hảo làm cho Promise trở nên dễ dùng hơn bao giờ hết. Nó giúp code tường minh, dễ debug và dễ bảo trì. Hầu hết các browser hiện đại đều đã hỗ trợ, vì vậy không có lý do gì để không sử dụng nó ngay hôm nay!`,
  category: "JavaScript",
  tags: ["JavaScript", "Async", "Promise", "ES6+"],
  author: "Huu Nhan",
  date: "2024-12-14",
  readTime: "10 phút",
  featured: true,
  image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
