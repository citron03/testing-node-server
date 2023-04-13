import path from "path";
import moment from "moment";

const __dirname = path.resolve();
const outputPath = path.join(__dirname, "dist");

console.log(`time stamp ${moment().format()} - "${outputPath}"`);

export { outputPath };
