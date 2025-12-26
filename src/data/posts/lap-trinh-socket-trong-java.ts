import { BlogPost } from '../types';

export const javaSocketPost: BlogPost = {
  id: 1,
  title: "Lập Trình Socket Cơ Bản Với TCP/IP Trong Java",
  slug: "lap-trinh-socket-trong-java",
  excerpt: "Hướng dẫn chi tiết về lập trình Socket TCP/IP trong Java: Từ khái niệm cơ bản, mô hình OSI/TCP đến xây dựng ứng dụng Chat Client-Server thực tế.",
  content: `# Lập Trình Socket Cơ Bản Với TCP/IP Trong Java

Socket được biết đến là cánh cửa giao tiếp giữa hai tiến trình ứng dụng. Socket hỗ trợ nhiều ngôn ngữ (C, java, perl, python,…) cũng như nhiều platform (*nix, Windows,…). Socket được viết bằng các ngôn ngữ khác nhau và chạy trên bất kỳ platform nào đều có thể giao tiếp với nhau.

Trong bài viết này mình gửi đến các bạn khái niệm cơ bản về Socket cũng như cách lập trình Socket với các loại giao thức.

![Mô hình kết nối Socket](https://s3-hfx03.fptcloud.com/codelearnstorage/Upload/Blog/lap-trinh-socket-voi-tcpip-trong-java-63732476941.2382.jpg)

## 1. Tổng quan về Socket

Trong hệ thống mạng máy tính tồn tại những mô hình tham chiếu có kiến trúc phần tầng (OSI, TCP/IP…) nhằm hỗ trợ chức năng trao đôi thông tin giữa các ứng dụng ở nhiều máy tính khác nhau.

Dữ liệu bên gửi sẽ được đóng gói (**Encapsulation**) từ tầng trên đến tầng cuối là tầng vật lí (**Physical Layer**), sau đó nhờ tầng vật lí này chuyển dữ liệu đến tầng vật lí máy bên nhận, bên nhận tiến hành giải mã (**decapsulation**) gói dữ kiện từ tầng dưới lên tầng trên cùng, là tầng ứng dụng (**application layer**).

Ở đây, **Socket** chính là cửa giao tiếp giữa tầng ứng dụng và tầng giao vận (**Transport layer**). Nói cách khác, Socket là giao diện do ứng dụng tạo ra trên máy trạm, quản lí bởi hệ điều hành qua đó các ứng dụng có thể gửi/nhận thông điệp đến/từ các ứng dụng khác.

Ở đó, Socket sẽ được ràng buộc với một mã số cổng (**Port Number**) để giúp tầng giao vận định danh được ứng dụng nhận/gửi thông điệp.

![Transport Layer](https://s3-hfx03.fptcloud.com/codelearnstorage/Media/Default/Users/tria3ltt_40gmail_2Ecom/socketJavaImage/Annotation%202020-08-08%20132406.jpg)

Các bạn có thể thấy ở hình ảnh trên, tầng giao vận có 2 phương thức là **TCP** (Transmission Control Protocol) và **UDP** (User Datagram Protocol), như vậy socket cơ bản là có 2 loại:
*   **Stream Socket**: sử dụng TCP truyền dòng bytes.
*   **Datagram Socket**: sử dụng UDP truyền gói tin.

Với ngôn ngữ lập trình Java, chúng ta được cung cấp 3 loại khác nhau của sockets:
1.  **Stream Socket (TCP)**: Tạo luồng dữ liệu hai chiều, đáng tin cậy, có trình tự và không trùng lặp, dữ liệu chỉ được gửi/nhận khi có đã có liên kết. Dùng với \`Socket\` Class của java.
2.  **Datagram Socket (UDP)**: Có thể nhận dữ liệu không theo tình tự, trùng lặp. Dùng với \`DatagramSocket\` Class.
3.  **Multicast Socket**: cho phép dữ liệu được gửi đến nhiều bên nhận một lúc. Dùng với \`MulticastSocket\` Class.

Socket được hỗ trợ trên nhiều ngôn ngữ như C, Java, Pearl, Python,…. Sau đây là một ví dụ lập tình socket với Java.

## 2. Lập trình TCP Socket với Java

Trong bài viết này mình sẽ nói về lập trình Socket sử dụng TCP. Đúng như tính chất của TCP chúng ta cần có liên kết 2 chiều trước khi server và client có thể trao đổi thông điệp với nhau.

*   Ban đầu, phía server tạo Socket được ràng buộc với một cổng (port number) để chờ nhận yêu cầu từ phía client.
*   Tiếp đến phía client yêu cầu server bằng cách tạo một Socket TCP trên máy kèm với địa chỉ IP và port number của tiến tình tương ứng trên máy server.

![Mô hình Client-Server TCP](https://s3-hfx03.fptcloud.com/codelearnstorage/Media/Default/Users/tria3ltt_40gmail_2Ecom/socketJavaImage/Annotation%202020-08-08%20160941.jpg)

Khi client tạo Socket, client TCP tạo liên kết với server TCP và chờ chấp nhận kết nối từ server. TCP cung cấp dịch vụ truyền dòng tin cậy và có thứ tự giữa client và server, giữa máy chủ và máy nhận chỉ có 1 địa chỉ IP duy nhất. Thêm vào đó, mỗi thông điệp truyền đi đều có xác nhận trả về.

### Ứng dụng ví dụ: Chat đơn giản
**Miêu tả ứng dụng:**
1.  Client đọc dòng văn bản nhập từ bàn phím người dùng , gửi tới server qua Socket
2.  Server đọc các dòng văn bản gửi từ Socket
3.  Server sẽ chuyển lại dòng văn bản kèm theo “Server accepted” tới phía client qua Socket
4.  Client đọc dòng văn bản từ socket và in ra dòng văn bản nhận được từ server

Chúng ta có thể thấy rằng mỗi phía server và client đều có 2 luồng dữ liệu, một luồng ra Socket để gửi thông điệp và một luồng vào từ Socket để nhận thông điệp, như vậy với mỗi bên mình có hai biến input và output (\`inFromServer\`, \`outToServer\` và \`inFromClient\`, \`outToClient\`).

![Luồng dữ liệu](https://s3-hfx03.fptcloud.com/codelearnstorage/Media/Default/Users/tria3ltt_40gmail_2Ecom/socketJavaImage/Annotation%202020-08-08%20132421.jpg)

### Code phía Server (serverTCP.java)

\`\`\`java
package socket;
import java.io.*;
import java.net.Socket;
import java.net.ServerSocket;

public class serverTCP {
    public static void main(String argv[]) throws Exception {
        String sentence_from_client;
        String sentence_to_client;
        
        // Tạo socket server, chờ tại cổng '6543'
        ServerSocket welcomeSocket = new ServerSocket(6543);
        
        while(true) {
            // Chờ yêu cầu từ client
            Socket connectionSocket = welcomeSocket.accept();
            
            // Tạo input stream, nối tới Socket
            BufferedReader inFromClient = new BufferedReader(
                new InputStreamReader(connectionSocket.getInputStream()));
            
            // Tạo outputStream, nối tới socket
            DataOutputStream outToClient = new DataOutputStream(
                connectionSocket.getOutputStream());
            
            // Đọc thông tin từ socket
            sentence_from_client = inFromClient.readLine();
            sentence_to_client = sentence_from_client + " (Server accepted!)" + '\\n';
            
            // Ghi dữ liệu ra socket
            outToClient.writeBytes(sentence_to_client);
            
            // Trong thực tế nên xử lý close connection hoặc dùng try-with-resources
        }
    }
}
\`\`\`

Ở đây mình tạo 2 biến String để nhận và gửi dữ liệu cho/từ phía client, và một biến của \`ServerSocket\` để chờ liên kết từ phía client, với số cổng là một số ngẫu nhiên lớn hơn 1024 (trong một số hệ thống yêu cầu đặc quyền quản trị để ràng buộc số cổng < 1024), ở đây mình chọn **6543**.

Tiếp theo trong vòng lặp \`while(true)\` để serversocket luôn chấp nhận liên kết từ client. \`connectionSocket\` được tạo ra khi có client kết nối thành công qua \`accept()\`.

### Code phía Client (clientTCP.java)

\`\`\`java
package socket;
import java.io.*;
import java.net.Socket;

public class clientTCP {
    public static void main(String argv[]) throws Exception {
        String sentence_to_server;
        String sentence_from_server;
        
        // Tạo Inputstream(từ bàn phím)
        System.out.print("Input from client: ");
        BufferedReader inFromUser = new BufferedReader(new InputStreamReader(System.in));
        
        // Lấy chuỗi ký tự nhập từ bàn phím
        sentence_to_server = inFromUser.readLine();
        
        // Tạo socket cho client kết nối đến server qua IP address và port number
        // "127.0.0.1" là localhost
        Socket clientSocket = new Socket("127.0.0.1", 6543);
        
        // Tạo OutputStream nối với Socket
        DataOutputStream outToServer = new DataOutputStream(clientSocket.getOutputStream());
        
        // Tạo inputStream nối với Socket
        BufferedReader inFromServer = new BufferedReader(
            new InputStreamReader(clientSocket.getInputStream()));
        
        // Gửi chuỗi ký tự tới Server thông qua outputStream
        outToServer.writeBytes(sentence_to_server + '\\n');
        
        // Đọc tin từ Server thông qua InputSteam
        sentence_from_server = inFromServer.readLine();
        
        // Print kết quả ra màn hình
        System.out.println("FROM SERVER: " + sentence_from_server);
        
        // Đóng liên kết socket
        clientSocket.close();
    }
}
\`\`\`

Mình cũng có 2 biến String để nhận và gửi dòng văn bản. Nhận văn bản được nhập từ bàn phím cho biến \`sentence_to_server\` qua biến \`inFromUser\`. Tiếp theo là tạo một socket bên client hướng liên kết tới địa chỉ IP “localhost” và cổng 6543 giống với số cổng Server.

Sau khi server nhận dòng văn bản, xử lí và chuyển lên socket, biến \`sentence_from_server\` sẽ nhận dòng văn bản đó thông qua phương thức \`readLine()\`.

![Kết quả chạy chương trình](https://s3-hfx03.fptcloud.com/codelearnstorage/Media/Default/Users/tria3ltt_40gmail_2Ecom/socketJavaImage/Annotation%202020-08-08%20163442.jpg)

Để chạy được ví dụ này chúng ta cần run file java phía server trước để thiết lập server socket, sau đó run file java phía client.

## 3. Lời kết

Qua bài này, mình và các bạn đã tìm hiểu khái niệm về socket cũng như cách lập trình socket với TCP trong java. Về cơ bản lập trình Socket trong các ngôn ngữ lập trình khác không có nhiều khác biệt, việc viết các chương trình giao tiếp như vậy trong nhiều ngôn ngữ khác nhau giúp các bạn luyện tập tốt hơn trong quá trình học tập.

Chúc các bạn thành công trên con đường học tập!`,
  category: "Java Networking",
  tags: ["Java", "Socket", "Network", "TCP"],
  author: "Huu Nhan",
  date: "2024-12-15",
  readTime: "15 phút",
  featured: true,
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
