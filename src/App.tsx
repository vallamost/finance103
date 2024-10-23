import { BookOpen, DollarSign, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Master Your Money in
              <span className="text-blue-400"> 4 Weeks</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our proven financial education course and learn the essential skills
              to build wealth, manage debt, and secure your financial future.
            </p>
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200 flex items-center mx-auto gap-2">
              Secure Your Spot Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Practical Curriculum</h3>
            <p className="text-gray-400">Expert-crafted lessons focusing on real-world financial scenarios and solutions.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Investment Mastery</h3>
            <p className="text-gray-400">Learn proven strategies for building and managing a successful investment portfolio.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Community Support</h3>
            <p className="text-gray-400">Join a community of like-minded individuals on their journey to financial freedom.</p>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What You'll Learn</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive curriculum covers everything you need to know about personal finance
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Building a Strong Financial Foundation",
              "Smart Budgeting & Saving Strategies",
              "Investment Principles & Portfolio Management",
              "Debt Management & Credit Optimization",
              "Tax Planning & Wealth Preservation",
              "Retirement Planning Essentials"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-lg border border-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 bg-opacity-10 py-16 border-t border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <DollarSign className="w-12 h-12 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Start Your Financial Journey Today</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates who have transformed their financial future
          </p>
          <div className="space-y-4">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-200">
              Enroll Now - Limited Spots Available
            </button>
            <p className="text-sm text-gray-400">30-day money-back guarantee. No risk involved.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 Financial Education Course. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;