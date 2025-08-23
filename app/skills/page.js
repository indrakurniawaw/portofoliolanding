export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white text-black p-16">
      <h1 className="text-5xl font-bold mb-8">My Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">HTML</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">CSS</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">JavaScript</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">React</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Next.js</h2>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Tailwind CSS</h2>
        </div>
        {/* Tambahkan skill lainnya */}
      </div>
    </div>
  );
}
