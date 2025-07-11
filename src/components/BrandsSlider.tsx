const BrandsSlider = () => {
  const brands = [
    "Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix", "Spotify", "Adobe"
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase" style={{ color: '#F4F3F0' }}>
            Join hundreds of companies that trust Pulse Marketing to amplify their digital presence
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll" style={{ '--scroll-duration': '30s' } as React.CSSProperties}>
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 h-16 flex items-center justify-center min-w-[150px] text-2xl font-bold text-muted-foreground/60 hover:text-primary transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;