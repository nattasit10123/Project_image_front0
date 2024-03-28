    import { Link } from "react-router-dom";
    import React, { useState, useEffect } from "react";
    import axios from "axios";
    
    function ImageGallery() {
      const [Image, setImages] = useState([]);
    
      useEffect(() => {
        async function fetchImages() {
          try {
            const token =localStorage.getItem("token");
            const response = await axios.get("http://localhost:8889/images/show", {
              headers: { Authorization: `Bearer ${token}`}
            });
            setImages(response.data.Image ); // ตรวจสอบว่า response.data.images ไม่เป็น null หรือ undefined ก่อนกำหนดค่าให้ images
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        }
    
        fetchImages();
      }, []);
    
      return (
        <div className="container mx-auto px-4">
           <div className="form-control flex items-center justify-center">
           <input type="text" placeholder="Search..." className="input input-bordered w-72  " />
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {Image.map((image) => (
  <div key={image.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
    <Link to={`/images/${image.id}`}>
      <img src={image.imagePath} alt={image.imageName} className="w-full rounded-t-md object-cover h-64" />
    </Link>
    <div className="p-4">
      <p className="text-xl font-semibold mb-2">{image.imageName}</p>
    </div>
  </div>
))}
    
   </div>
 </div>
);
}
    
    export default ImageGallery;
    
    
    
    