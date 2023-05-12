const {getPostsByPages,createPost,updatePost,deletePost,getPostById} = require('../controllers/postController');
const {authenticateToken} = require('../JWT/JWT_authenticate');

exports.postRouters = (app)=>{
    app.get('/posts', getPostsByPages);
    app.get('/posts/:id', getPostById);
    app.post('/posts/create', createPost);
    app.put('/posts/update/:id', authenticateToken, updatePost);
    app.delete('/posts/delete/:id', authenticateToken, deletePost);
}