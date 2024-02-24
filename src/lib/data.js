//TEMPORARY DATA
const users = [
    {id:1,name:'john'},
    {id:2,name:'jane'},
]
const posts =[
    {id:1,title: 'Post1',body:'........',userId:1},
    {id:2,title: 'Post2',body:'........',userId:2},
    {id:3,title: 'Post3',body:'........',userId:3},
    {id:4,title: 'Post4',body:'........',userId:4},
]
export const getPosts = async (id)=>{
return posts;
}
export const getPost = async(id) =>{
    const post =  posts.find((post) => post.id === parseInt(id));
return post;
}
export const getUser = async(id) => {
    return users.find((user) => user.id === id); 

}