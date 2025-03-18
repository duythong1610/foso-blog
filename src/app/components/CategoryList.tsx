import { categories } from "@/data/categories";

export default function CategoryList() {
  return (
    <>
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-6 mt-8">Danh Mục</h2>
        <ul className="flex flex-col gap-4">
          {categories.map((category) => (
            <li key={category.id} className="over:underline cursor-pointer">
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                <span>{category.postCount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
