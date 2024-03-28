// import axios from "axios";
// import React, { useState } from "react";

// function ImageUploader() {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [input, setInput] = useState({
//     imageName: "",
//     imagePath: "",
//   });

//   const hdlChange = (e) => {
//     // อัปเดตทั้งข้อมูลรูปภาพและที่อยู่รูปภาพ
//     if (e.target.type === "file") {
//       const file = e.target.files[0];
//       setSelectedImage(file);
//     } else {
//       setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     }
//   };

//   const hdlSubmit = async (e) => {
//     try {
//       e.preventDefault();

//       const token = localStorage.getItem("token");
      
//       // สร้าง FormData object เพื่อส่งไปยังเซิร์ฟเวอร์
//       const formData = new FormData();
//       formData.append("image", selectedImage);
//       formData.append("imageName", input.imageName);
//       // ตรวจสอบว่ามีข้อมูล imagePath หรือไม่ ถ้ามีก็เพิ่มลงใน FormData
//       if (input.imagePath) {
//         formData.append("imagePath", input.imagePath);
//       }

//       const rs = await axios.post("http://localhost:8889/images/photos", formData, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Create new OK");
//       window.location.reload();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Image Uploader</h2>
//       <form onSubmit={hdlSubmit}>
//         <input
//           type="file"
//           accept="image/*"
//           name="imagePath"
          
//           onChange={hdlChange}
//         />
//         <label>
//           Image Name: 
//           <input
//             type="text"
//             placeholder="Enter image name"
//             name="imageName"
//             value={input.imageName}
//             onChange={hdlChange}
//           />
//         </label>
//         <button type="submit">Upload</button>
//       </form>
//       {selectedImage && (
//         <div>
//           <h3>Selected Image Preview:</h3>
//           <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%' }} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default ImageUploader;

import axios from "axios";
import { useState } from "react";

export default function Newvenue() {
  const [input, setInput] = useState({
    imageName: "",
    imagePath: "",
  });

  const hdlChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();

      if (!input.imageName || !input.imagePath) {
        alert("กรอกข้อมูลให้ครบ");
        return;
      }
      const token = localStorage.getItem("token");
      const rs = await axios.post("http://localhost:8889/images/photos", input, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Create new OK");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="p-10 border w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto rounded-lg mt-10 bg-gradient-to-r bg-gray-300 shadow-md">
        <div className="text-3xl mb-6 font-bold text-center text-blue-600">เพิ่มรูป</div>
        <div className="p-12 border w-full md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto rounded-lg mt-10 bg-gradient-to-r bg-gray-300/100 shadow-md">
          <form onSubmit={hdlSubmit}>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">ชื่อ</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full "
                name="imageName"
                value={input.imageName}
                onChange={hdlChange}
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">เพิ่มรูป</span>
              </div>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                placeholder="กรอกที่อยู่รูปภาพ .jpg"
                className="input input-bordered w-full "
                name="imagePath"
                value={input.imagePath}
                onChange={hdlChange}
              />
            </label>
            <br />
            <div>
              <button className="btn px-4 btn-info hover:bg-blue-700 text-sm font-semibold text-gray-600 mb-1">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
