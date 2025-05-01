import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
// import PhotosGallery from '../components/PhotosGallery/PhotosGallery';

const Photos = () => {
  //
  const getQuery = inputValue => {
    console.log('Form submit:', inputValue); // має вивести значення інпуту під час сабміту форми
  };

  return (
    <>
      <Form mode="search" onSubmit={getQuery} />

      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};

export default Photos;
