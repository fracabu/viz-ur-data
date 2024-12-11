const AboutSection = () => {
    return (
      <section id="about" className="py-16 bg-card text-card-foreground">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          {/* Titolo */}
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
  
          {/* Descrizione */}
          <p className="text-lg leading-8 text-muted-foreground mb-4">
            At <span className="text-primary font-semibold">Viz-ur-Data</span>, we transform complex data into 
            actionable insights through tailored dashboards designed for professionals in marketing, healthcare, 
            and finance. We believe in the power of clarity to drive impactful decisions.
          </p>
          <p className="text-lg leading-8 text-muted-foreground">
            By combining innovation and user-centric design, we strive to make data visualization accessible 
            and meaningful for everyone.
          </p>
  
          {/* Immagine decorativa */}
          <div className="mt-10 flex justify-center">
            <img
              src="/images/advanced dash screen linear regression.png"
              alt="About Viz-ur-Data"
              className="w-full max-w-lg lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
  