CRIPTIFY CHAT — Real-time Encrypted Chat App

Welcome to SecureShare, a simple and private chat app built using HTML, CSS, JavaScript, and Firebase.
It lets you sign up, log in, and chat with other registered users — safely and in real-time.

🚀 How to Use
1️⃣ Open the App

Launch the project using Live Server in VS Code or by opening index.html in your browser.

You’ll see the Home Page — from here, you can Sign Up or Log In.

2️⃣ Sign Up (First Time Users)

Click the Sign Up button.

Enter your Name, Email, and Password.

Once you sign up successfully, you’ll be automatically redirected to the CHAT Page.

Now you are on  the Chat Page and start messaging.

✅ Your account is created and saved securely in Firebase Authentication.

3️⃣ Log In (Existing Users)

Click the Login button.

Enter the same Email and Password you used while signing up.

If your credentials are correct, you’ll be logged in instantly and redirected to the chat interface.

4️⃣ Chat in Real Time

After logging in, you’ll see a list of users who are also registered.

Click on any user’s name to start chatting.

Type your message and hit Send ➤ it appears instantly in the chat window.

Messages are sent and received in real-time, securely stored in Firebase Firestore.

5️⃣ File Sharing 

You can upload small images or files less than 1 mb.

Files are encrypted before being sent and automatically decrypted when received.

This keeps your data private and protected.

6️⃣ Logging Out

Click the Logout button (usually on the top-right corner).

You’ll be signed out and taken back to the Home Page.

🛠️ Features

🔐 Secure user login and authentication (Firebase Auth)

⚡ Real-time chat powered by Firestore

🧩 End-to-end message encryption

📁 File sharing support (if allowed)

🎨 Clean and simple user interface

⚠️ Notes

This is a demo version — use it only for testing or hackathon presentation.

If you refresh the chat page, you stay logged in until you click Logout.

Both users must be registered with valid Firebase accounts to chat.

👨‍💻 Example Workflow

User A signs up → “a@example.com
”

User B signs up → “b@example.com
”

Both log in → see each other in the chat list

User A selects User B → sends a message

Both see messages instantly 🔥

🪄 Quick Tips

Use strong passwords while signing up.

Keep Firebase project in test mode for now.

If file upload gives an error, continue chatting with text (it’s still real-time).

❤️ Created With

HTML, CSS, and JavaScript and database firebase

Firebase Authentication & Firestore

CryptoJS (for encryption)
