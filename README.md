# Gmail Feedback Helper – Chrome Extension

A simple Chrome extension that enables users to suggest reply messages on Gmail with an internal, private feedback workflow.  
This is **not** a shared inbox, **not** a forward, and **not** a reply – just fast and private suggestion sharing.

---

## 🚀 Features

- Detects Gmail page and activates
- Opens a popup to type reply suggestions
- Mock "Save" flow (can be connected to Firebase/Supabase later)
- Built with **Manifest v3**

---

## 📦 Folder Structure

```
gmail-feedback-extension/
│
├── manifest.json       # Chrome extension config
├── background.js       # Installation log
├── content.js          # Runs inside Gmail page
├── popup.html          # UI for suggestions
├── popup.js            # Logic for submission
├── styles.css          # Styling
```

---

## 🧪 How to Use (Locally)

1. Clone or download this repo and unzip it.
2. Go to **chrome://extensions/**
3. Enable **Developer Mode**
4. Click **"Load unpacked"** and select the `gmail-feedback-extension/` folder
5. Navigate to **Gmail**, click the extension icon to open the popup.

---

## 💡 Next Steps / Improvements

- Store feedbacks using Firebase or Supabase
- Show tagged user suggestions only to the tagger
- UI enhancements inside Gmail sidebar (InboxSDK or DOM injection)
- User authentication & tagging



---

## 🔒 Note

This is a demo/MVP to show capability of Gmail-based Chrome extension development. No actual data is sent or stored in this version.
