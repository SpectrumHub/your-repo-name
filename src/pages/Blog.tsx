import Navigation from "@/components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Marketing Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with the latest trends, strategies, and insights in digital marketing
            </p>
          </div>
          
          <div className="text-center py-20">
            <p className="text-muted-foreground">Blog posts coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;