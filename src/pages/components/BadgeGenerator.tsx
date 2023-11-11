import React, { useRef } from 'react';

const BadgeGenerator = () => {
  const userImageRef = useRef<HTMLImageElement>(null);
  const previewRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        userImageRef.current?.setAttribute('src', event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const generateBadge = () => {
    if (userImageRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const badgeImage = new Image();
        badgeImage.src = '/badge.png'; // Using the badge image from the public folder

        const userImage = userImageRef.current;
        const aspectRatio = userImage.width / userImage.height;

        badgeImage.onload = () => {
          const badgeWidth = badgeImage.width;
          const badgeHeight = badgeImage.height;

          canvas.width = badgeWidth;
          canvas.height = badgeHeight;

          // Draw the user image on the canvas
          const maxUserImageWidth = badgeWidth * 0.8;
          const maxUserImageHeight = maxUserImageWidth / aspectRatio;

          const x = (badgeWidth - maxUserImageWidth) / 2;
          const y = (badgeHeight - maxUserImageHeight) / 2;

          ctx.drawImage(userImage, x, y, maxUserImageWidth, maxUserImageHeight);

          // Draw the badge image on top
          ctx.drawImage(badgeImage, 0, 0, badgeWidth, badgeHeight);

          if (previewRef.current) {
            previewRef.current.src = canvas.toDataURL('image/png');
          }
        };
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <img ref={userImageRef}/>
      <button onClick={generateBadge}>Generate Badge</button>
      <div>
        <p>Preview:</p>
        <img ref={previewRef} />
      </div>
    </div>
  );
};

export default BadgeGenerator;


