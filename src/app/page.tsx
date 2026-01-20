export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Custom WP Site
          </h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Built With:</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <strong>Next.js</strong> - React framework for frontend and backend
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <strong>Node.js</strong> - JavaScript runtime
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <strong>PostgreSQL</strong> - Relational database
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <strong>TypeScript</strong> - Type-safe development
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <strong>Tailwind CSS</strong> - Utility-first styling
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">API Endpoints</h3>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/users</code> - User management</li>
                <li><code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">/api/posts</code> - Post management</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-sm">
                <li>✨ RESTful API routes</li>
                <li>🗃️ PostgreSQL integration</li>
                <li>🎨 Tailwind CSS styling</li>
                <li>📱 Responsive design</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Get started by editing <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">src/app/page.tsx</code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
