const About = () => {
  return (
    <div id="about" className="w-full h-1/2 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-purple-500 my-5">About Us</h1>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full md:w-[600px] lg:w-[700px] md:h-96 lg:h-120"
          src="https://www.youtube.com/embed/aIGY7fsT-NY?si=V7mOcp7EWZrMU4Ul"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
