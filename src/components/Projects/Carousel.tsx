import Carousel from "nuka-carousel"

export const MeltCarousel = () => {
    const slides = [
        ['https://i.imgur.com/bMBWVuc.jpeg','Small Boat with random color adjustments between blue and red every 4-8 random layers gives an excellent banding.'],
        ['https://i.imgur.com/LoV9brW.jpeg','Bottom of vase with random color adjustments between white and black every 2-4 layers. Effect is weighted towards white so that the black does not overpower the results.'],
        ['https://i.imgur.com/c5b5QNW.jpeg','Vase with random changes every 2-4 random layers between red and blue to bring out range of purples.'],
        ['https://i.imgur.com/AHS7JOz.jpeg','Voronoi pencil holder, black and white with random changes every 4-8 layers.'],
        ['https://i.imgur.com/fymr8km.jpeg','Pencil holder gray and white. Settings were random changes every 1-2 layers.'],
        ['https://i.imgur.com/J88kqis.jpeg','Gradient Pencil holder adjustments every 4 layers to slowly shift towards white.'],
        ['https://i.imgur.com/NUiBW5Z.jpeg','Flexi Rex with slow shift from blue to red.'],
        ['https://i.imgur.com/hTvScjP.jpeg','Door Sign with single adjustment halfway through the print to shift from white to gray.']
        
    ];

    const params = {

    }

  return (

    <div style={{margin: '10%' ,width: '75%', height:'400px'}}>
        <h3 className="text-center">3D prints created using MELT.</h3>
        <Carousel autoplay={false} adaptiveHeight = {false} >
            {slides.map((slide) => (
                <div style={{height:'400px'}} className="text-center">
                    <img className="rounded-corners" height='300px' src={slide[0]} key={slide[0]} alt={slide[1]}/>
                    <p>{slide[1]}</p>
                </div>
            ))}
        </Carousel>
    </div>
  );
}

 
