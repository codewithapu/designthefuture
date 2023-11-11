// import React, { useRef } from 'react';

// const BadgeGenerator = () => {
//   const userImageRef = useRef<HTMLImageElement>(null);
//   const previewRef = useRef<HTMLImageElement>(null);

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = function (event) {
//         userImageRef.current?.setAttribute('src', event.target?.result as string);
//       };
//       reader.readAsDataURL(e.target.files[0]);
//     }
//   };

//   const generateBadge = () => {
//     if (userImageRef.current) {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');

//       if (ctx) {
//         const userImage = userImageRef.current;

//         // Set canvas size to user image dimensions
//         canvas.width = userImage.width;
//         canvas.height = userImage.height;

//         // Draw user image on canvas
//         ctx.drawImage(userImage, 0, 0);

//         // Load badge image
//         const badgeImage = new Image();
//         badgeImage.src = '/badge.png'; // Using the badge image from the public folder

//         badgeImage.onload = () => {
//           // Draw badge image on top of the user image
//           ctx.drawImage(badgeImage, 0, 0, userImage.width, userImage.height);

//           // Set preview of the generated badge
//           if (previewRef.current) {
//             previewRef.current.src = canvas.toDataURL('image/png');
//           }
//         };
//       }
//     }
//   };

//   return (
//     <div>
//         <br /><br /><br /><br /><br /><br /><br />
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       <img ref={userImageRef} alt="User Image" />
//       <button onClick={generateBadge}>Generate Badge</button>
//       <div>
//         <p>Preview:</p>
//         <img ref={previewRef} alt="Badge Preview" />
//       </div>
//     </div>
//   );
// };

// export default BadgeGenerator;

// badgeGenerator.tsx



// badgeGenerator.tsx

import BadgeGenerator from "./components/BadgeGenerator";

export default function Badge(){
    return(
        <>
        <br /><br /><br /><br /><br /><br /><br /><br />
        <BadgeGenerator/>
        </>
    )
}