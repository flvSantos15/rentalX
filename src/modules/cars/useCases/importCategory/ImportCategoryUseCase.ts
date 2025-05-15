import { parse } from 'csv-parse';
import fs from 'fs';
import { Multer } from "multer";

export class ImportCategoryUseCase {
  execute(file: Multer.File): void {
    const stream = fs.createReadStream(file.path)

    const parseFile = parse()
    
    stream.pipe(parseFile)

    parseFile.on("data", async (line) => {
      const [name, description] = line
    })
  }
}