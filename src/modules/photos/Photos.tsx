import { useEffect } from "react";
import { usePhotoStore, IPhotosState } from "./storePhotos";

export default function Photos() {
  const [photos, loading, error] = usePhotoStore((state: IPhotosState) => [
    state.photos,
    state.loading,
    state.error,
  ]);
  const fetchPhotos = usePhotoStore((state) => state.fetchPhotos);

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Photos</h2>
      {loading && <div>loading...</div>}
      {error && <div>error: {error}</div>}
      {photos.map((photo) => (
        <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
      ))}
    </div>
  );
}
