# 🔐 CRIPTIFY CHAT — Next-Gen Data Encryption and Secure Sharing Platform

Welcome to **CRIPTIFY CHAT**, a **real-time encrypted communication platform** designed to securely transfer files and messages between users.  
It combines **AI-driven encryption**, **Firebase authentication**, and **Firestore real-time updates** to demonstrate how modern encryption and sharing systems can protect user data in the digital age.

---

## 🚩 Problem Statement

### Problem:
Data shared across organizations or cloud platforms is vulnerable to interception and misuse.

### Description:
With the exponential growth of data exchange between enterprises, third parties, and cloud platforms, ensuring **data confidentiality during transmission and storage** is a major challenge.  
Existing encryption methods often fail to balance strong security with performance and usability.  
Additionally, shared data—especially in cloud and collaborative environments—can be accessed or misused by unauthorized entities, leading to compliance violations and reputational damage.

### Background:
The rise of **multi-cloud ecosystems** and **remote work** has expanded the attack surface.  
Advanced technologies like **homomorphic encryption**, **blockchain-based access control**, and **quantum-resistant algorithms** are promising—but practical implementation remains limited.  
CRIPTIFY CHAT demonstrates a **Next-Generation Secure Sharing Platform** that enables seamless, secure communication without compromising performance or usability.

---

## 🎯 Objectives

- ✅ Implement **secure file and message encryption/decryption** using open-source libraries (CryptoJS).  
- ✅ Develop a **simple sharing mechanism** between users or devices with **access control**.  
- ✅ Add **user authentication** before allowing access to encrypted data.  
- ✅ Demonstrate **data integrity checks** using hashing and checksums.  
- ✅ Design an **easy-to-use interface** for file upload, encryption, and chat communication.

---

## ⚙️ Expected Outcomes

- 💬 **Functional prototype** that securely transfers files or messages.  
- 🔐 **Encryption module** that protects data confidentiality and integrity.  
- 🔄 **Real-time communication** powered by Firebase Firestore.  
- 📁 **Successful file sharing** between multiple users with access verification.  
- 🧠 Increased awareness of encryption’s role in secure communication.

---

## 📊 Measurable Indicators

- Encrypts/decrypts files (≤ 10 MB) within **5 seconds**.  
- 100% file integrity verified using **hash comparison**.  
- Demonstrated secure exchange between **2–3 users**.  
- Positive user feedback on **usability and clarity (≥4/5)**.

---

## 🚀 How to Use

### 1️⃣ Launch the App
- Open the project folder in **VS Code**.  
- Run it using **Live Server** or directly open `index.html` in your browser.  
- You’ll see the **Home Page**, which introduces the app and has **Get Started**, **Login**, and **Sign Up** options.

---

### 2️⃣ Sign Up (For New Users)
- Click **Sign Up**.  
- Enter your **Name, Email, and Password**.  
- Once you sign up successfully, your details are securely stored using **Firebase Authentication**.  
- You’ll be automatically redirected to the **Chat Page**.  

---

### 3️⃣ Log In (For Existing Users)
- Click **Login** on the Home Page.  
- Enter your **Email and Password**.  
- Upon successful login, you’ll be redirected to the **real-time chat interface**.

---

### 4️⃣ Real-Time Chat
- The **chat interface** displays all registered users on the left.  
- Click on a user to open a chat window.  
- Type your message and hit **Send ➤**  
- Messages appear instantly for both users in **real-time** using Firebase Firestore.

---

### 5️⃣ Secure File Sharing
- Click the **📎 (Attach)** icon to upload files.  
- Supports **images or documents up to 10 MB**.  
- Files are **encrypted before sending** and **decrypted automatically** on receiving end.  
- Every file transmission is **verified for integrity** using hashing.  

---

### 6️⃣ Notifications
- When a new message or file is received, a **notification dot** appears beside the user’s name in the chat list.  
- This indicates there’s **unread or new activity**.

---

### 7️⃣ Logout
- Click the **Logout** button (top-right corner).  
- You’ll be **redirected to the Home Page (`index.html`)**.  
- This ensures your session is securely closed.

---

## 🧩 Key Features

| Feature | Description |
|----------|-------------|
| 🔐 **User Authentication** | Secure login & signup via Firebase Authentication |
| ⚡ **Real-Time Chat** | Built on Firebase Firestore’s live update feature |
| 📁 **Encrypted File Sharing** | Files are encrypted client-side using CryptoJS |
| 🔄 **Integrity Check** | File hashes are compared before and after upload |
| 🧠 **Access Control** | Only logged-in users can send or receive data |
| 🖥️ **Responsive UI** | Works on desktop and mobile browsers |
| 🔔 **Notifications** | Unread messages and file alerts shown in chat list |
| 🚪 **Logout Functionality** | Secure sign-out redirects users to Home Page |

---

## 🧠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Firebase Firestore & Firebase Authentication  
- **Security:** AES Encryption (CryptoJS)  
- **Hosting:** Netlify / Firebase Hosting (optional)

---

## 💡 Example Workflow

1. **User A** signs up as `a@example.com`  
2. **User B** signs up as `b@example.com`  
3. Both users log in  
4. User A selects User B → sends encrypted message or file  
5. User B instantly receives decrypted content in chat  
6. Both see a notification for new messages 🔔  

---

## 🧾 Notes

- Keep Firebase Firestore in **test mode** during development.  
- Do **not refresh** while sending files to avoid upload interruption.  
- File uploads larger than 10 MB are **automatically restricted**.  
- If you get CORS-related errors, deploy on **Firebase Hosting or Netlify**.  
- Both users must be logged in simultaneously for real-time chat.

---

## ❤️ Built With

- **HTML, CSS, and JavaScript**  
- **Firebase Authentication**  
- **Firebase Firestore**  
- **CryptoJS (AES Encryption)**  
- **Real-time Firebase Listeners**  

---

### 👨‍💻 Team
Developed by Team **Clever Minds**  
Hackathon Project: *Next-Gen Data Encryption and Secure Sharing Platform*

---

