import YouTubeVideo from "./YoutubeVideo";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-1/2 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl text-purple-500 my-5">About Us</h1>
      <div className="aspect-w-16 aspect-h-9">
        <YouTubeVideo />
      </div>
    </div>
  );
};

export default About;
