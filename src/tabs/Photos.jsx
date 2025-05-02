import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import { getPhotos } from '../apiService/photos';
import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';

const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const [isLoadinge, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [hesMoreImags, setHesMoreImags] = useState(false);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      setIsLoading(true);

      try {
        const data = await getPhotos(query, page);
        console.log(data);
        setHesMoreImags(page < Math.ceil(data.total_results / data.per_page));
        setImages([...images, ...data.photos]);
      } catch (error) {
        console.log(error);
      } finally {
        // setTimeout(() => {
        //   setIsLoading(false);
        // }, 2000);

        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const getQuery = inputValue => {
    setQuery(inputValue);
    setError(false);
    setPage(1);
    setImages([]);
  };
  const hendleClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form mode="search" onSubmit={getQuery} />
      <PhotosGallery images={images} />

      {images.length === 0 && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}

      {hesMoreImags && <Button onClick={hendleClick}>load more</Button>}
      {isLoadinge && <Loader />}
    </>
  );
};

export default Photos;
