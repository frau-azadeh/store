export default function Categories() {
  const categories = [
    { name: "کتونی", icon: "👟" },
    { name: "مجلسی", icon: "👠" },
    { name: "اداری", icon: "🥿" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 my-8">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="bg-gray-100 p-6 rounded-lg flex flex-col items-center"
        >
          <span className="text-4xl mb-2">{cat.icon}</span>
          <p className="text-lg font-semibold">{cat.name}</p>
        </div>
      ))}
    </div>
  );
}
