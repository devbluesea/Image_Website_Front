const express = require('express');
const path = require('path');
const multer = require('multer');
const cors = require('cors');

var imgList;

var fs = require('fs');

fs.readdir('../upload_imgs',function(err,filelist)
	{
		imgList = filelist;
		console.log(filelist);
	}
);

let reload = () => {
	fs.readdir('../upload_imgs',function(err,filelist)
		{
			imgList = filelist;
			console.log(filelist);
		}
	);
};

//let uploadDir = path.join( __dirname , './public/upload_img/' );
let uploadDir = path.join( __dirname , '../upload_imgs' );


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

app.get('/filelist' , (_ , res) => {
	reload();
  res.send(imgList)
})

app.get('/filelist/:filename' , (req , res) => {
	reload();
	fs.readFile(`../upload_imgs/${req.params.filename}`, function (error, data) {
		res.writeHead(200, {'Content-Type': 'image/jpeg'});
		res.end(data);
	});
})

app.post('/uploads', upload.single('imageUpload') , (req,res)=>{
	reload();
  res.json({
    image_url : req.file.filename
  })
});

app.listen(port, () => {
	reload();
  console.log('Express listening on port', port);
})
