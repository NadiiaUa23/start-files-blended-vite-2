import PhotosGalleryItem from '../components/PhotosGalleryItem/PhotosGalleryItem';
import Grid from '../components/Grid/Grid';
import GridItem from '../components/GridItem/GridItem';

const PhotosGallery = () => {
  return (
    <Grid>
      <GridItem>
        <PhotosGalleryItem />
      </GridItem>
    </Grid>
  );
};
export default PhotosGallery;
