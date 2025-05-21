import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomInt(16).toString(16);
          const fileName = `${fileHash}-${file.originalname}`;

          callback(null, fileName);
        },
      }),
    };
  },
};
