import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desk: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 576 },
    items: 6
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4
  }
};

function ScrollableBar({children}: {children: React.ReactNode}) {
    return (
        <Carousel responsive={responsive} containerClass='w-full flex gap-3 p-4'>
            {children}
        </Carousel>
    );
}

export default ScrollableBar;