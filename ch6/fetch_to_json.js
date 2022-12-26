// GET 요청
fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("http://localhost:3000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

fetch("http://localhost:3000/comments/1?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json));

// POST 요청
fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "The Great",
        author: "Jeremy",
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// PUT 요청
fetch("http://localhost:3000/posts/2", {
    method: "PUT",
    body: JSON.stringify({
        id: 2,
        title: "The Great Jeremy",
        author: "Jeremy",
        }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

// DELETE 요청
fetch("http://localhost:3000/posts/2", {
    method: "DELETE",
});