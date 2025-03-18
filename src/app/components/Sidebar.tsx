import CategoryList from "./CategoryList";
import PromoBanner from "./PromoBanner";
import SearchBar from "./SearchBar";

export default function Sidebar() {
  return (
    <div className="w-[366px] sticky h-screen top-[88px]">
      <SearchBar />
      <CategoryList />
      <PromoBanner />
    </div>
  );
}
