import express,{Request,Response} from 'express'
const router = express.Router()
const fs = require('fs');
const pathRouter = `${__dirname}`

const removeExtension = (fileName: string): any => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file: string) => {
  const withOutExt:string = removeExtension(file);
  const skipe = ["index"].includes(withOutExt);
  if (!skipe) {
    router.use(`/${withOutExt}`, require(`./${withOutExt}`));
    console.log("---->", withOutExt);
  }
});


router.get("*", (req:Request, res:Response) => {
  res.status(404).send({ Error: "Not Found" });
});

module.exports = router;
