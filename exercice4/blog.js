class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  toJSON() {
    return JSON.stringify(this);
  }

  static fromJSON(json) {
    const data = JSON.parse(json);
    return new User(data.username, data.email, data.password);
  }
}

class Post {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  toJSON() {
    return JSON.stringify(this);
  }

  static fromJSON(json) {
    const data = JSON.parse(json);
    return new Post(data.title, data.description, data.author);
  }
}

class Blog {
  constructor() {
    this.users = [];
    this.posts = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addPost(post) {
    this.posts.push(post);
  }

  getPostsByUser(username) {
    return this.posts.filter(post => post.author === username);
  }

  getAllPosts() {
    return this.posts;
  }
}

let blog = new Blog();
let currentUser = null;

function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("postForm").style.display = "none";
}

function showSignup() {
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("postForm").style.display = "none";
}

function showMyBlogs() {
  if (currentUser) {
    let posts = blog.getPostsByUser(currentUser.username);
    let postsList = document.getElementById("postsList");
    postsList.innerHTML = '<h3 class="posts-title">Mes Posts</h3>';
    posts.forEach(post => {
      postsList.innerHTML += `<div class="post"><h3>${post.title}</h3><p>${post.description}</p></div>`;
    });
  } else {
    alert("Veuillez vous connecter d'abord.");
  }
}

function showAllPosts() {
  let posts = blog.getAllPosts();
  let postsList = document.getElementById("postsList");
  postsList.innerHTML = '<h3 class="posts-title">Posts Récents</h3>';
  posts.forEach(post => {
    postsList.innerHTML += `<div class="post"><h3>${post.title}</h3><p>${post.description}</p></div>`;
  });
}

function submitPost() {
  let title = document.getElementById("postTitle").value;
  let description = document.getElementById("postDescription").value;

  if (!title || !description) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  if (currentUser) {
    let post = new Post(title, description, currentUser.username);
    blog.addPost(post);
    alert("Post submitted!");
    document.getElementById("postTitle").value = ""; // Vider le champ titre
    document.getElementById("postDescription").value = ""; // Vider le champ description
    showAllPosts();
  } else {
    alert("Veuillez vous connecter d'abord.");
  }
}

function login() {
  let username = document.getElementById("loginUsername").value;
  let password = document.getElementById("loginPassword").value;

  if (!username || !password) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  let user = blog.users.find(user => user.username === username && user.password === password);
  if (user) {
    currentUser = user;
    alert("Login successful!");
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("postForm").style.display = "block";
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect.");
  }
}

function signup() {
  let username = document.getElementById("signupUsername").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  if (!username || !email || !password) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  let user = new User(username, email, password);
  blog.addUser(user);
  alert("Inscription réussie !");
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}
