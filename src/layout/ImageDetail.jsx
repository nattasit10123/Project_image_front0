import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ImageDetail() {
  const { id } = useParams(); // ใช้ Hook useParams เพื่อรับพารามิเตอร์ id ของภาพ
  const [imageDetail, setImageDetail] = useState(null);

  useEffect(() => {
    async function fetchImageDetail() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:8889/images/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setImageDetail(response.data);
      } catch (error) {
        console.error("Error fetching image detail:", error);
      }
    }

    fetchImageDetail();
  }, [id]);

  if (!imageDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{imageDetail.imageName}</h2>
      <img src={imageDetail.imagePath} alt={imageDetail.imageName} />
      {/* เพิ่มรายละเอียดภาพอื่น ๆ ตามต้องการ */}
    </div>
  );
}

export default ImageDetail;
