import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Tag } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  readTime: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("vi-VN")}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.id}`} className="text-balance">
            {post.title}
          </Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 text-pretty">{post.excerpt}</p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          Đọc thêm
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
