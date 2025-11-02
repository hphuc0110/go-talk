"use client"

import { useState } from "react"

export function CurriculumSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)
  const [selected, setSelected] = useState<number | null>(null)

  const modules = [
    {
      number: 1,
      title: "THE “TELL ME ABOUT YOURSELF” MASTERCLASS",
      subtitle: "Giới thiệu bản thân ngắn gọn, chuyên nghiệp, có dấu ấn cá nhân.",
      color: "bg-[#4673c9]",
     details: [
        "Ứng dụng cấu trúc POWER để định hình bài nói rõ ràng",
        "Điều chỉnh ngữ điệu &ánh mắt để tạo ấn tượng đầu tiên",
        "Luyện từ vựng mạnh, động từ hành động",
      ],
    },
    {
      number: 2,
      title: "THE STAR STORYTELLING WORKSHOP",
      subtitle: "Biết cách kể lại kinh nghiệm & thành tựu ấn tượng.",
      color: "bg-[#4673c9]",
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
      color: "bg-[#4673c9]",
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
      color: "bg-[#4673c9]",
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
      color: "bg-[#4673c9]",
      details: [
        "Biết đặt câu hỏi ngược thể hiện tư duy chủ động",
        "Học cách close và khẳng định mức độ phù hợp với vị trí",
        "Truyền tải mong muốn rõ ràng nhưng không gây áp lực",

      ],
    },
  ]
  const steps = [
    { number: 1, 
      description: "1 tiếng mỗi ngày.", 
      color: "bg-[#3264C3]" 
    },
    {
      number: 5,
      description: "5 ngày 1 tuần.",
      color: "bg-[#3264C3]",
    },
  ]
  const toggleModule = (number: number) => {
    setSelected(selected === number ? null : number)
  }

  const toggle = (number: number) => {
    setSelected(selected === number ? null : number) // click lần 2 sẽ đóng lại
  }

  return (
    <section className="py-20 bg-white text-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
        <div className="inline-block bg-[#3264C3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-2xl sm:text-3xl font-bold shadow-lg ring-4 ring-yellow-500 ring-offset-4 ring-offset-[#3264C3]">
            Lộ trình 5+1 buổi
          </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto">
          {/* Step Buttons (Mobile) */}
          <div className="md:hidden flex justify-between items-center gap-2 pb-4 w-full">
  {steps.map((step, index) => (
    <div
      key={step.number}
      className="flex flex-col items-center flex-1 w-full mt-8"
    >
      <button
        onClick={() => setActiveStepIndex(index)}
        className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
          activeStepIndex === index
            ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-105 shadow-yellow-400/40"
            : "bg-[#00a7e1] hover:scale-105"
        }`}
      >
        <span className="text-sm sm:text-base font-bold text-white">
          {activeStepIndex > index ? "✓" : step.number}
        </span>
      </button>

    </div>
  ))}
</div>
          {/* Step Buttons (Desktop) */}
          <div className="hidden md:block relative mb-16">
            {/* Thanh nền */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-[#3264C3] rounded-full" />
            {/* Thanh tiến trình */}
            <div
              className="absolute top-8 left-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-700 ease-out shadow-lg shadow-yellow-400/50"
              style={{
                width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
              }}
            />
            {/* Nút step */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center w-1/4">
                  <button
                    onClick={() => setActiveStepIndex(index)}
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-2 ${
                      activeStepIndex === index
                        ? "bg-gradient-to-br from-yellow-400 to-yellow-500 scale-125 -translate-y-2 shadow-yellow-400/50"
                        : activeStepIndex > index
                        ? "bg-gradient-to-br from-green-400 to-green-500 shadow-green-400/30"
                        : "bg-[#3264C3] hover:from-yellow-300 hover:to-yellow-400"
                    }`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {activeStepIndex > index ? "✓" : step.number}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Active Step Detail */}
          <div className="relative ">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute right-1/2 translate-x-1/2 transition-all duration-700 max-w-2xl w-full ${
                  activeStepIndex === index
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div
                  className={`relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl overflow-hidden transition-shadow duration-500`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center shadow-xl">
                        <span className="text-2xl sm:text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.description}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          <div className="relative min-h-[200px]">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`absolute right-1/2 translate-x-1/2 transition-all duration-700 max-w-2xl w-full ${
                  activeStepIndex === index
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
              </div>
            ))}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            BẠN SẼ NHẬN ĐƯỢC HƠN CẢ MỘT <span className="text-[#3264C3]"></span>
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#3264C3]">KHÓA HỌC TIẾNG ANH</h3>
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
                    <h3 className="font-semibold text-sm">{module.title}</h3>
                    <p className="text-sm opacity-80">{module.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Details (only show if selected) */}
              {selected === module.number && (
                <div className="bg-white rounded-lg p-6 mt-2 mb-6 text-blue-900 shadow-md animate-in fade-in slide-in-from-top-4">
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
