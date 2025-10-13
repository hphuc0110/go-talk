"use client"

import { useState } from "react"

export function CurriculumSection() {
  const modules = [
    {
      number: 1,
      title: "THE “TELL ME ABOUT YOURSELF” MASTERCLASS",
      subtitle: "Giới thiệu bản thân ngắn gọn, chuyên nghiệp, có dấu ấn cá nhân.",
      color: "bg-gray-700",
      details: [
        "Ứng dụng cấu trúc POWER để định hình bài nói rõ ràng",
        "Luyện từ vựng mạnh, động từ hành động",
        "Điều chỉnh ngữ điệu & ánh mắt để tạo ấn tượng đầu tiên",

      ],
    },
    {
      number: 2,
      title: "THE STAR STORYTELLING WORKSHOP",
      subtitle: "Biết cách kể lại kinh nghiệm & thành tựu ấn tượng.",
      color: "bg-gray-700",
      details: [
        "Vận dụng framework STAR để kế chuyện logic",
        "Biến task thành impact bằng ngôn ngữ kết quả",
        "Thể hiện vai trò cá nhân nổi bật trong team",

      ],
    },
    {
      number: 3,
      title: "HANDLING DIFFICULT & BEHAVIORAL QUESTIONS",
      subtitle: "Ứng biến với những câu hỏi khó thông minh & chiến lược.",
      color: "bg-gray-700",
      details: [
          "Nåm mindset khi gặp câu hỏi bầy (lương, điểm yếu, thất bại...)",
          "Luyện cách trả lời rõ – khéo – không né tránh",
          "Sử dụng ngôn ngữ tích cực, mang tính xây dựng",

      ],
    },
    {
      number: 4,
      title: "ADVANCED SCENARIOS",
      subtitle: "Giao tiếp tự tin bằng cả lời nói & ngôn ngữ cơ thể.",
      color: "bg-gray-700",
      details: [
       "Luyện ngữ điệu dứt khoát, kiểm soát tốc độ nói",
      "Tập ánh mắt - tư thế - cử chỉ chuyên nghiệp",
      "Biết pause đúng lúc để tạo trọng tâm & sự kết nối",

      ],
    },
    {
      number: 5,
      title: "THE FINAL 10% STRATEGY, SALARY & FOLLOW-UP",
      subtitle: "Kết thúc cuộc phỏng vấn bằng điểm nhấn chuyên nghiệp.",
      color: "bg-gray-700",
      details: [
        "Biết đặt câu hỏi ngược thể hiện tư duy chủ động",
        "Học cách close và khẳng định mức độ phù hợp với vị trí",
        "Truyền tải mong muốn rõ ràng nhưng không gây áp lực",

      ],
    },
  ]

  const [selected, setSelected] = useState<number | null>(null)

  const toggle = (number: number) => {
    setSelected(selected === number ? null : number) // click lần 2 sẽ đóng lại
  }

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#3264C3] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Lộ trình 5+1
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT <span className="text-[#3264C3]">KHÓA HỌC</span>
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-[#3264C3]">TIẾNG ANH</h3>
        </div>

        {/* Module list with expandable details */}
        <div className="space-y-4">
          {modules.map((module) => (
            <div key={module.number}>
              {/* Module header */}
              <div
                onClick={() => toggle(module.number)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-500 
                  ${selected === module.number ? "bg-[#3264C3] text-white" : `${module.color} text-white`}
                  hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-sm font-bold text-white">
                    {module.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                    <p className="text-sm opacity-80">{module.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Details (only show if selected) */}
              {selected === module.number && (
                <div className="bg-white rounded-lg p-6 mt-2 mb-6 text-gray-900 shadow-md animate-in fade-in slide-in-from-top-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#3264C3] text-white rounded flex items-center justify-center text-sm font-bold">
                      {module.number}
                    </div>
                    <div>
                      <h4 className="font-bold">{module.subtitle}</h4>
                      <p className="text-sm text-gray-600">{module.title}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    {module.details.map((text, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-[#3264C3] rounded-full mt-2 flex-shrink-0"></div>
                        <p>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
