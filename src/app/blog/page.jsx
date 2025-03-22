import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";

const BlogPage = () => {
  return (
    <div>
      <Banner  pageTitle={"Blog Posts"}/>
      <BlogSection  itemsLimit={6} />
    </div>
  );
};

export default BlogPage;
