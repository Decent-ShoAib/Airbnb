# 🏡 Airbnb Clone (MERN Stack)

A full-featured **Airbnb Clone** built using the **MERN Stack**.  
Users can create property listings with images, browse all listings, and search by location, title, or landmark — with secure image hosting on **Cloudinary**.

---
<p align="center">
  <img src="https://github.com/user-attachments/assets/46981310-10b9-4d34-b4e2-c8bd41414b51" height="30%" style="margin:5px;" />
  <img src="https://github.com/user-attachments/assets/acb0342c-9244-40e2-83e0-1d26b85add48" width="30%" style="margin:5px;" />
  <img src="https://github.com/user-attachments/assets/239b09cf-9308-4695-aceb-9215ab89e95a" width="30%" style="margin:5px;" />
</p>
---

## ✨ Features

- 👤 **User Listings** — Authenticated users can create their own property listings  
- 📤 **Image Upload** — Upload images via **Multer** and store them on **Cloudinary**  
- 🔍 **Search Functionality** — Search listings by city, title, or landmark  
- 🏘 **Browse All Listings** — View all available properties with images, descriptions, and prices  
- 🖼 **Responsive Gallery** — Property images displayed neatly across all devices  
- 📱 **Responsive Design** — Fully mobile-friendly and works on all screen sizes  

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios
- React Icons
- Tailwind CSS / Custom CSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for file uploads)
- Cloudinary (for image storage)
- dotenv
- CORS

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Decent-ShoAib/Airbnb-clone.git
cd Airbnb

 2️⃣ Install Dependencies

cd backend
npm install
cd frontend
npm install

3️⃣ Setup Environment Variables
Create a .env file inside the backend folder with the following:
# MongoDB connection string
MONGO_URI=your_mongodb_connection_string_here

# Backend server port
PORT=5000

# Cloudinary credentials
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name_here
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here


 4️⃣ Run the Application
Start Backend
cd backend
npm run dev

cd frontend
npm start
