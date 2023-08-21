import figlet from "figlet";
import colors from "colors";
import { ERR,REQ,RES } from "../constants";

export const figletText = (textData: any) => {
  return new Promise((resolve, reject) => {
    let textToPrint;
    let color: any;

    if (textData.type === REQ) {
      textToPrint = `${textData.method} - ${textData.type}`;
      color = colors.cyan;
    }

    if (textData.type === RES) {
      textToPrint = textData.type;
      color = colors.green;
    }

    if (textData.type === ERR) {
      textToPrint = textData.type;
      color = colors.red;
    }

    figlet(textToPrint, (err, data) => {
      if (err) return reject(err);

      console.log(color(data));
      return resolve(data);
    });
  });
};
