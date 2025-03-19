import CategoryList from "./CategoryList";
import PromoBanner from "./PromoBanner";
import SearchBar from "./SearchBar";

export default function Sidebar() {
  return (
    <div className="w-[366px] sticky top-[88px] max-h-[90vh] overflow-y-auto">
      <SearchBar />
      <CategoryList />
      <div className="flex flex-col gap-8">
        <PromoBanner type="tag" />
        <PromoBanner />
      </div>
    </div>
  );
}
