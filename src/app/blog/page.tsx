import BlogHero from "@/app/components/BlogHero";
import BlogList from "@/app/components/BlogList";
import Sidebar from "@/app/components/Sidebar";

export default function BlogPage() {
  return (
    <div className="">
      <div>
        <BlogHero />
      </div>

      <div className="max-w-[1440px] m-auto pb-[200px]">
        <div className="flex gap-8">
          <BlogList />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
