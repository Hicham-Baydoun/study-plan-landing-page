import { FaBook, FaRobot, FaChartLine, FaRoad } from 'react-icons/fa'

const features = [
  { icon: FaBook, title: "Personalized study plans", description: "Tailored learning paths based on your goals and preferences" },
  { icon: FaRobot, title: "AI-driven recommendations", description: "Intelligent suggestions for topics and resources" },
  { icon: FaChartLine, title: "Progress tracking", description: "Visualize your learning journey and achievements" },
  { icon: FaRoad, title: "Adaptive learning paths", description: "Adjusts to your pace and learning style" },
]

export default function Features() {
  return (
    <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-blue-800 dark:text-blue-300">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-100 dark:bg-blue-900 rounded-lg shadow-lg p-6 text-center transition-colors duration-300">
              <feature.icon className="text-3xl md:text-4xl text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">{feature.title}</h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}