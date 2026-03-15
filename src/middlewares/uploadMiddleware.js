import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqeName = Date.now() + path.extname(file.originalname);
    cb(null, uniqeName);
  },
});

const fileFilter = function (req, file, cb) {
  const allowedTypes = ["application/pdf"];

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb("Only PDF files are accepted", false);
  }
};

const upload = multer({ storage, fileFilter });
export default upload;
