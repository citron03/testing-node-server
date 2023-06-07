import path from "path";
import moment from "moment";

const outputPath = path.join(__dirname, "dist");

// console.log(`time stamp ${moment().format()} - "${outputPath}"`);

class time {
  private now: string;
  constructor() {
    this.now = moment().format();
  }
  getTime() {
    return this.now;
  }
}

const t = new time();
console.log("time", t.getTime());

export { outputPath };
