const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4">{overview}</p>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-0.5 md:py-2.5 px-2.5 md:px-9 text-lg rounded-lg hover:bg-opacity-80">▶️ Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-2.5 px-9 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;