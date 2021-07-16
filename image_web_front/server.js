const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

//이미지 저장되는 위치 설정
let uploadDir = path.join( __dirname , './public/upload_img' );

//multer 셋팅
let storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, uploadDir );
    },
    filename :  (req, file, callback) => {
        callback(null, 'img-' + Date.now() + '.'+ file.mimetype.split('/')[1] );
    }
});

let upload = multer({ storage: storage });

const app = express();
const port = 7000;

app.use(cors())

app.get('/' , (_ , res) => {
  res.send('Image upload server')
})

app.post('/uploads', upload.single('imageUpload') , (req,res)=>{
  res.json({
    image_url : req.file.filename
  })
});

app.listen(port, () => {
  console.log('Express listening on port', port);
})
