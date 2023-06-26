import ImageSlider from "./hero2";
const Hero = () => {
  const slides = [
      { url: "http://www.myinceptiontech.com/img/slide/slide-1.jpg", caption: 'first'},
      { url: "http://www.myinceptiontech.com/img/slide/slide-2.jpg",caption : 'second' },
      { url: "http://www.myinceptiontech.com/img/slide/slide-3.jpg", caption : 'third' },
    ];
  const containerStyles = {
    width: "100%",
    height: "800px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Hero;

