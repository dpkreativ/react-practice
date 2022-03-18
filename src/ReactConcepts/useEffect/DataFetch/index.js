import React, { useEffect, useState } from 'react';

const DataFetch = () => {
  const [images, setImages] = useState();

  console.log(images);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then((res) => res.json())
      .then((data) => setImages(data.map((el) => el.download_url)));
  }, [setImages]);

  return (
    <div>
      <h1>Fetch data</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {images &&
          images.map((image) => (
            <div>
              <img src={image} style={{ width: 300, height: 200 }} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataFetch;
