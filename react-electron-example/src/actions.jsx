export async function initGetPost() {
  const resData = await fetch("http://localhost:3001/posts?_limit=5&_page=0");
  const count = await resData.headers.get("X-Total-Count");
  const json = await resData.json();
  return { count, json };
}

export function getPostById(id) {
  return fetch("http://localhost:3001/posts?id=" + id).then(res => res.json());
}

export async function createPost(newData) {
  const exists = await getPostById(newData.id);
  if (!exists.length) {
    fetch("http://localhost:3001/posts", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(newData),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response));
  }
}
