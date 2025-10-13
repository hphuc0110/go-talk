import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Cùng GoTalk ứng dụng mô hình STAR vào trả lời phỏng vấn",
    excerpt:
      "Bí kíp trả lời phỏng vấn ấn tượng với mô hình STAR - một công cụ đơn giản nhưng cực kỳ hiệu quả giúp bạn kể chuyện đúng trọng tâm, rõ ràng và thuyết phục.",
    image: "/images/blog/star-method.webp",
    date: "2024-12-15",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: "Experience không chỉ hỏi quá khứ mà còn hỏi về cách bạn kể lại",
    excerpt:
      "Học cách biến kinh nghiệm làm việc thành câu chuyện thuyết phục trong phỏng vấn. Khám phá nghệ thuật storytelling nghề nghiệp để ghi điểm với nhà tuyển dụng.",
    image: "/images/blog/experience-storytelling.webp",
    date: "2024-12-12",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Tell me about yourself - Câu hỏi tưởng dễ mà khó",
    excerpt:
      "Hướng dẫn chi tiết cách trả lời câu hỏi phỏng vấn phổ biến nhất. Từ chiến lược hỏi lại thông minh đến cấu trúc Present-Past-Future hiệu quả.",
    image: "/images/blog/tell-me-about-yourself.webp",
    date: "2024-12-10",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  {
    id: "power-method",
    title: "Làm chủ nghệ thuật giới thiệu bản thân trong 90 giây",
    excerpt:
      "Khung P.O.W.E.R và Power Verbs giúp bạn biến 90 giây thành cơ hội tạo ấn tượng mạnh mẽ trong phỏng vấn, networking và các tình huống giao tiếp chuyên nghiệp.",
    image: "/images/blog/power-method.webp",
    date: "2024-12-08",
    category: "Kỹ năng giao tiếp",
    readTime: "5 phút đọc",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            Tất cả
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Phỏng vấn
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Kỹ năng giao tiếp
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
