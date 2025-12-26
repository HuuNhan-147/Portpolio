import { BlogPost } from '../types';

export const springSecurityPost: BlogPost = {
  id: 8,
  title: "Spring Security: Bảo mật ứng dụng Java",
  slug: "spring-security",
  excerpt: "Hướng dẫn tích hợp Spring Security để xác thực và phân quyền cho ứng dụng Spring Boot.",
  content: `# Spring Security: Lá chắn thép cho ứng dụng Java

Bảo mật là ưu tiên hàng đầu. Spring Security là tiêu chuẩn de-facto để bảo vệ các ứng dụng dựa trên Spring.

## 1. Tại sao chọn Spring Security?

*   **Xác thực (Authentication)**: Xác định người dùng là ai (Login).
*   **Phân quyền (Authorization)**: Kiểm soát người dùng được phép làm gì (Role-based access).
*   **Bảo vệ chống tấn công**: Tích hợp sẵn phòng chống CSRF, Session Fixation...

## 2. Cài đặt

Thêm dependency vào \`pom.xml\`:

\`\`\`xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
\`\`\`

Ngay sau khi thêm, ứng dụng của bạn sẽ tự động yêu cầu đăng nhập với user mặc định là \`user\` và password được sinh ra trong console.

## 3. Cấu hình cơ bản

Tạo class \`SecurityConfig\`:

\`\`\`java
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/home", "/public/**").permitAll() // Cho phép truy cập công khai
                .requestMatchers("/admin/**").hasRole("ADMIN") // Chỉ Admin mới vào được
                .anyRequest().authenticated() // Còn lại phải đăng nhập
            )
            .formLogin(form -> form
                .loginPage("/login") // Trang login tùy chỉnh
                .permitAll()
            )
            .logout(logout -> logout.permitAll());
            
        return http.build();
    }
}
\`\`\`

## 4. UserDetailsService

Để lấy user từ Database thay vì in-memory, hãy implement \`UserDetailsService\`:

\`\`\`java
@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            
        return new org.springframework.security.core.userdetails.User(
            user.getUsername(), 
            user.getPassword(), 
            Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    }
}
\`\`\`

## Kết luận

Spring Security tuy có đường cong học tập hơi cao lúc đầu, nhưng nó cung cấp sự linh hoạt tuyệt đối để bảo vệ ứng dụng của bạn từ cơ bản đến nâng cao (OAuth2, JWT, LDAP...).`,
  category: "Java Backend",
  tags: ["Spring Boot", "Spring Security", "Java", "Auth"],
  author: "Huu Nhan",
  date: "2024-12-08",
  readTime: "12 phút",
  featured: false,
  image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};
