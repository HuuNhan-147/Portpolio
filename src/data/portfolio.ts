import avatarImage from '../assets/1_Cao Hữu Nhân.jpg';
import aboutImage from '../assets/2_Cao Hữu Nhân.png';
import ecomImage from '../assets/NodeXStore.png';

export const personalInfo = {
  name: "Cao Hữu Nhân",
  role: "Developer Intern",
  email: "caohuunhanhoabinh2003@gmail.com",
  phone: "0377913722",
  location: "TP.Thủ Đức, TP.HCM",
  github: "https://github.com/HuuNhan-147",
  avatar: avatarImage,
  aboutImage: aboutImage,
  slogan: "No matter how hard it is, I get it done.",
  about: "Sinh viên năm cuối chuyên ngành Công nghệ phần mềm tại HUTECH (GPA 3.42/4.0). Đam mê phát triển Backend và Web3, có tư duy logic tốt và tinh thần ham học hỏi.",
  detailedBio: `Tên tôi là Cao Hữu Nhân, hiện là sinh viên năm cuối chuyên ngành Công nghệ phần mềm tại Đại học Công Nghệ TP.HCM (HUTECH). Tôi đang trên hành trình hoàn thiện những năm cuối của quãng đời đại học và chuẩn bị bước vào con đường sự nghiệp với vai trò Developer Intern, tập trung vào lĩnh vực Backend Web Development và các công nghệ hiện đại liên quan đến Web2 và Web3.

Niềm yêu thích công nghệ và lập trình của tôi hình thành từ sớm, đặc biệt là sự hứng thú với cách các hệ thống phía sau vận hành: từ xử lý dữ liệu, xây dựng API cho đến đảm bảo tính bảo mật và hiệu năng của ứng dụng. Chính điều đó đã thôi thúc tôi theo đuổi ngành Công nghệ thông tin, nơi tôi có cơ hội học tập và rèn luyện các kiến thức nền tảng về JavaScript, C#, TypeScript, cũng như các framework và công nghệ như Node.js, Express.js, ASP.NET Core, NestJS, React.js và Next.js.

Trong suốt quá trình học tập, tôi luôn cố gắng cân bằng giữa kết quả học thuật và việc tự học, thực hành thông qua các dự án cá nhân. Tôi tin rằng kiến thức chỉ thực sự có giá trị khi được áp dụng vào thực tế. Vì vậy, tôi đã chủ động xây dựng nhiều dự án, tiêu biểu là website bán hàng điện tử với kiến trúc RESTful API, xác thực JWT, phân quyền người dùng, tích hợp thanh toán VNPay và chatbot AI hỗ trợ khách hàng. Bên cạnh đó, tôi cũng tham gia phát triển một dApp truy xuất nguồn gốc tài khoản game trên blockchain, nơi tôi có cơ hội tiếp cận sâu hơn với Smart Contract, Solidity, EVM-compatible blockchain, IPFS và tích hợp ví phi tập trung.

Trong công việc và học tập, tôi luôn đề cao chất lượng kết quả hơn lời nói. Tôi có khả năng làm việc nhóm tốt, tư duy logic rõ ràng và tinh thần trách nhiệm cao. Trong nhiều dự án, tôi thường được các thành viên tin tưởng giao vai trò điều phối hoặc dẫn dắt nhóm, nhờ khả năng phân tích vấn đề, đưa ra giải pháp và hỗ trợ đồng đội hoàn thành mục tiêu chung. Tôi đặc biệt hứng thú với quá trình cùng cả nhóm tìm ra hướng đi đúng và tối ưu cho từng bài toán kỹ thuật.

Bên cạnh thời gian dành cho lập trình, tôi cũng trân trọng những khoảng lặng cá nhân để suy nghĩ, học hỏi và làm mới bản thân. Tôi tin rằng việc không ngừng học hỏi, kể cả khi đối mặt với những vấn đề khó khăn, chính là cách tốt nhất để trưởng thành trong lĩnh vực công nghệ luôn thay đổi từng ngày.

Ở thời điểm hiện tại, tôi mong muốn được làm việc trong một môi trường trẻ trung, năng động và sẵn sàng hướng dẫn, nơi tôi có thể tiếp tục học hỏi, trau dồi kỹ năng chuyên môn và từng bước khẳng định giá trị của bản thân trên con đường trở thành một Backend / Fullstack Developer trong tương lai. Tôi luôn sẵn sàng đón nhận thử thách mới, bởi với tôi: dù khó, tôi vẫn sẽ làm cho đến khi hoàn thành.`
};

export const skills = {
  languages: ["JavaScript (ES6+)", "C#", "TypeScript", "Solidity", "HTML/CSS"],
  frameworks: ["Node.js", "Express.js", "Nest.js", "ASP.NET Core", "React.js", "Next.js", "TailwindCSS"],
  database: ["MongoDB", "SQL Server", "MySQL"],
  tools: ["Git & GitHub", "VS Code", "Visual Studio"],
  web3: ["Blockchain", "Smart Contract", "MetaMask", "WalletConnect"]
};

export const projects = [
  {
    id: 1,
    title: "Website Bán Hàng Điện Tử",
    duration: "3/2025 - 5/2025",
    description: "Hệ thống thương mại điện tử đầy đủ tính năng với thanh toán VNPay và Chatbot AI.",
    role: "Fullstack Developer",
    tech: ["Node.js", "Express", "MongoDB", "React.js", "TailwindCSS", "VNPay", "Gemini AI"],
    links: {
      github_be: "https://github.com/HuuNhan-147/DA_CNPM.git",
      github_fe: "https://github.com/HuuNhan-147/DACS_FE.git"
    },
    image: ecomImage
  },
  {
    id: 2,
    title: "Pione Game Trace (dApp)",
    duration: "20/10/2025 - 10/11/2025",
    description: "Nền tảng truy xuất nguồn gốc tài khoản game trên Blockchain, đảm bảo minh bạch và chống gian lận.",
    role: "Blockchain Developer",
    tech: ["Solidity", "Hardhat", "Pione Zero Chain", "React Native", "Node.js", "IPFS"],
    links: {
      github: "https://github.com/HuuNhan-147/pionezerochain.git",
      demo: "https://drive.google.com/file/d/1qTGE6BcP77r3XIz-JNFZc5ZLFr-ISBCO/view?usp=drive_link",
      video: "https://youtu.be/IKMXEfBMe0w?feature=shared"
    },
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    award: "🥉 Giải Ba - Pione Dream Hackathon 2025"
  }
];

export const education = {
  school: "Đại học Công Nghệ TP.HCM (HUTECH)",
  major: "Công nghệ phần mềm",
  degree: "Kỹ sư Công nghệ thông tin",
  duration: "2022 - 2026",
  gpa: "3.42/4.0"
};

export const careerGoals = [
  {
    period: "2026 - 2027",
    title: "Backend Developer",
    description: "Phát triển chuyên sâu Backend (RESTful API, bảo mật, hiệu năng). Nghiên cứu Web3 cơ bản."
  },
  {
    period: "2028 - 2030",
    title: "Fullstack Web & Web3 Developer",
    description: "Thành thạo MERN Stack và Web3 dApps. Tích hợp Blockchain vào ứng dụng thực tế."
  },
  {
    period: "2031 - 2036",
    title: "Tech Lead / Project Manager",
    description: "Quản lý đội ngũ, định hướng giải pháp công nghệ Web2/Web3 và chuyển đổi số."
  }
];

export const hackathons = [
  {
    name: "Pione Dream Hackathon 2025",
    role: "Full Stack Developer",
    achievement: "🥉 Giải Ba"
  },
  {
    name: "HDBank Hackathon 2025",
    role: "Full Stack Developer",
    achievement: "Tham gia"
  }
];
