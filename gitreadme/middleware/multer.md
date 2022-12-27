# multer

* `multer` : multi-part 폼 데이터를 처리한다. 쉽게 말해서 클라이언트에서 전송한 파일을 쉽게 업로드할 수 있게 한다.
* 클라이언트로부터 전송된 파일을 디스크 저장장소에 대한 객체를 생성해 업로드 처리를 한다.
    ```js
    const storage = multer.diskStorage({
        destinaion: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, new Date().valueOf() + path.extname(file.originalname));
        }
    });
    const upload = multer({storage: storage});

    app.post('/profile', upload.single('avatar'), (req, res, next) => {
        console.log(req.file);
        console.log(req.body);
    });

    app.post('/photos/upload', upload.array('photos', 12), (req, res, next) => {
        console.log(req.files);
    });
    ```