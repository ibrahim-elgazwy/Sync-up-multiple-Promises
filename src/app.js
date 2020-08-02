import { addTable } from './create-table';

let initData = {};
let showUsers = document.getElementById("show-users");
let showPosts = document.getElementById("show-posts");
let showComments = document.getElementById("show-comments");

let fetchData = [
  fetch('https://jsonplaceholder.typicode.com/users'),
  fetch('https://jsonplaceholder.typicode.com/posts'),
  fetch('https://jsonplaceholder.typicode.com/comments')
];

Promise.all(fetchData)
.then(async function(results){
  debugger
  let data = {
    users: await results[0].json(),
    posts: await results[1].json(),
    comments: await results[2].json()
  };
  return data;
})
.then(result => initData = result)
.catch(err => console.log(err));

function getUsers(){
  let header = [ 'id', 'name', 'username', 'email', 'phone']
  addTable(header, initData.users);
}

function getPosts(){
  let header = ['userId', 'id', 'title', 'body']
  addTable(header, initData.posts);
}

function getComments(){
  let header = ['postId', 'id', 'name', 'email', 'body']
  addTable(header, initData.comments);
}

showUsers.addEventListener("click", getUsers);
showPosts.addEventListener("click", getPosts);
showComments.addEventListener('click', getComments);

