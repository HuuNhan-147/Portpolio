import { BlogPost } from '../types';

export const javaMultithreadingPost: BlogPost = {
  id: 6,
  title: "Đa luồng trong Java: Từ cơ bản đến nâng cao",
  slug: "java-multithreading",
  excerpt: "Hiểu rõ về Thread, Runnable, ExecutorService và các vấn đề đồng bộ hóa trong Java Multithreading.",
  content: `# Java Multithreading: Hướng dẫn chi tiết

Đa luồng (Multithreading) là một trong những tính năng mạnh mẽ nhất của Java, cho phép thực thi đồng thời nhiều tác vụ để tận dụng tối đa sức mạnh CPU.

## 1. Thread và Runnable

Có hai cách cơ bản để tạo luồng trong Java:

### Extend Thread Class
\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread đang chạy...");
    }
}
MyThread t1 = new MyThread();
t1.start();
\`\`\`

### Implement Runnable Interface
Đây là cách được khuyến khích hơn vì Java không hỗ trợ đa kế thừa.
\`\`\`java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable đang chạy...");
    }
}
Thread t2 = new Thread(new MyRunnable());
t2.start();
\`\`\`

## 2. Vòng đời của Thread (Thread Lifecycle)

Một thread trải qua các trạng thái:
1.  **New**: Mới khởi tạo.
2.  **Runnable**: Đang chạy hoặc sẵn sàng chạy.
3.  **Blocked**: Chờ tài nguyên (Monitor lock).
4.  **Waiting**: Chờ tín hiệu từ thread khác.
5.  **Timed Waiting**: Chờ có thời hạn (Sleep).
6.  **Terminated**: Kết thúc.

## 3. Đồng bộ hóa (Synchronization)

Khi nhiều thread cùng truy cập một tài nguyên, Race Condition có thể xảy ra.

\`\`\`java
class Counter {
    private int count = 0;
    
    // Chỉ một thread được vào hàm này tại một thời điểm
    public synchronized void increment() {
        count++;
    }
}
\`\`\`

## 4. Executor Framework

Thay vì quản lý thread thủ công, hãy dùng ExecutorService để quản lý Thread Pool.

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(5);

for (int i = 0; i < 10; i++) {
    executor.submit(() -> {
        System.out.println("Task executed by " + Thread.currentThread().getName());
    });
}
executor.shutdown();
\`\`\`

## 5. CompletableFuture (Java 8+)

Cách hiện đại để xử lý bất đồng bộ, tương tự Promise trong JavaScript.

\`\`\`java
CompletableFuture.supplyAsync(() -> "Hello")
    .thenApply(s -> s + " World")
    .thenAccept(System.out::println);
\`\`\`

## Kết luận

Multithreading giúp ứng dụng nhanh hơn nhưng cũng phức tạp hơn. Hãy nắm vững các khái niệm cơ bản và sử dụng các công cụ cấp cao như ExecutorService để kiểm soát tốt luồng xử lý.`,
  category: "Java Backend",
  tags: ["Java", "Multithreading", "CompletableFuture", "Performance"],
  author: "Huu Nhan",
  date: "2024-12-10",
  readTime: "15 phút",
  featured: false,
  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};