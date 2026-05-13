export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-10 text-black">
      <h1 className="text-4xl font-bold mb-10 text-black">
        AI Analytics Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900">
            Users
          </h2>
          <p className="text-3xl mt-4 text-black">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900">
            Sessions
          </h2>
          <p className="text-3xl mt-4 text-black">0</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900">
            Bounce Rate
          </h2>
          <p className="text-3xl mt-4 text-black">0%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold text-gray-900">
            AI Insights
          </h2>
          <p className="mt-4 text-gray-600">
            Waiting for analytics...
          </p>
        </div>

      </div>
    </main>
  );
}