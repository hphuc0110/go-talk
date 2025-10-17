import { BlogCard } from "./blog-card"

const blogPosts = [
  {
    id: "star-method",
    title: "Tiếng Anh – Từ kỹ năng bổ trợ thành kỹ năng cốt lõi trong tuyển dụng",
    image: "/images/1.webp",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },
  {
    id: "experience-storytelling",
    title: " Lợi thế cạnh tranh của ứng viên thành thạo tiếng Anh trong kỷ nguyên AI",
    image: "/images/2.webp",
    category: "Kỹ năng giao tiếp",
    readTime: "6 phút đọc",
  },
  {
    id: "tell-me-about-yourself",
    title: "Thời đại AI: Sinh viên Công nghệ – Kỹ thuật cần biết gì để không bị “đào thải”?",
    image: "/images/3.webp",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  {
    id: "ky-nang-cot-loi",
    title: "Tiếng Anh – Từ Kỹ Năng Bổ Trợ Thành Kỹ Năng Cốt Lõi Trong Tuyển Dụng",
    image: "/images/4.webp",
    category: "Phỏng vấn",
    readTime: "8 phút đọc",
  },
  {
    id: "khoang-cach-nang-luc",
    title: "Khoảng cách giữa năng lực tiếng Anh và cơ hội nghề nghiệp tại Việt Nam",
    image: "/images/5.webp",
    category: "Phỏng vấn",
    readTime: "7 phút đọc",
  },
  {
    id: "4-yeu-to",
    title: "4 Yếu Tố Giúp GoTalk Khác Biệt Trong Học Tiếng Anh Phỏng Vấn",
    image: "/images/6.webp",
    category: "Phỏng vấn",
    readTime: "5 phút đọc",
  },


]

export function BlogGrid() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bài viết mới nhất</h2>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition-colors">
            Tất cả
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
