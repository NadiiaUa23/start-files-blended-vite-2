import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(img => (
        <GridItem key={img.id}>
          <PhotosGalleryItem
            avg_color={img.avg_color}
            src={img.src}
            alt={img.alt}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;
