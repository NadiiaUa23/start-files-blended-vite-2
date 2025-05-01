import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';

const images = [
  {
    id: 3573351,
    avg_color: '#374824',
    src: {
      original:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png>',
      large:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940>',
      medium:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350>',
      small:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130>',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
  {
    id: 35733515,
    avg_color: '#374824',
    src: {
      original:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png>',
      large:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940>',
      medium:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350>',
      small:
        '<https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130>',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
];

const Photos = () => {
  //
  const getQuery = inputValue => {
    console.log('Form submit:', inputValue); // має вивести значення інпуту під час сабміту форми
  };

  // console.log([images]);

  return (
    <>
      <Form mode="search" onSubmit={getQuery} />
      <PhotosGallery images={images} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};

export default Photos;
