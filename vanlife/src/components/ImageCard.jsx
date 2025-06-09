import { useState } from 'react';

function ImageCard({ src, alt }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="image-card">
      <img src={src} alt={alt} />
        <div className="like-button"></div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default ImageCard;
