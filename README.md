
# 📝 React Blog App

A simple blog application built using **React.js** and **React Router** that allows users to create, read, and delete blog posts. The app uses a fake REST API provided by `json-server`.

## 🚀 Features

- View a list of all blog posts
- Create a new blog post
- View blog post details
- Delete a blog post
- Route-based navigation using React Router
- Uses custom hooks (like `useFetch`) for data fetching

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router DOM, HTML, CSS
- **Backend (Mock API)**: JSON Server
- **Custom Hooks**: `useFetch` for data fetching

## 📁 Project Structure

```
project/
│
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── Create.js
│   │   ├── BlogDetails.js
│   │   ├── BlogList.js
│   │   └── NotFound.js
│   ├── useEffect.js        # Custom hook for fetching data
│   └── index.js
├── db.json                 # Mock database for JSON Server
├── package.json
└── README.md
```

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the JSON Server**

You need to have `json-server` installed globally or as a dev dependency:

```bash
npm install -g json-server
```

Start the server:

```bash
json-server --watch db.json --port 8000
```

4. **Start the React development server**

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✍️ Main Components Overview

### 🔹 `Home.js`

- Fetches and displays all blogs using the `useFetch` custom hook.
- Uses `BlogList` component to list each blog.

### 🔹 `Create.js`

- Form to create a new blog post.
- On submit, sends a POST request to JSON Server.

### 🔹 `BlogDetails.js`

- Fetches a single blog using the ID from URL params.
- Allows deleting the blog via a DELETE request.

### 🔹 `BlogList.js`

- Receives blog data as props and displays each blog in a preview.

### 🔹 `Navbar.js`

- Navigation bar with links to Home and Create Blog pages.

### 🔹 `NotFound.js`

- Fallback route for non-existent paths.

---

## 🧪 Example Blog Data (db.json)

```json
{
  "blogs": [
    {
      "title": "My First Blog",
      "body": "Welcome to my blog app!",
      "author": "Mario",
      "id": 1
    }
  ]
}
```

---

## 🔧 Custom Hook - useFetch

Custom React hook (`useEffect.js`) to fetch data and handle loading/error states:

```js
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw Error("Could not fetch data");
        return res.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};
```

---


