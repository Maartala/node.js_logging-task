import { mkdir } from "node:fs/promises";
import { writeFile } from "node:fs/promises";
import { existsSync, appendFile } from "node:fs";

export const login = () => {

    try {
        if (existsSync("logs/log.txt")) {
            console.log("folder and file already exist");
        }
        else {
            mkdir("./logs")
            writeFile("./logs/log.txt", "hi");
            console.log("folder and file created");
        }
    } catch (error) {
        console.error(error);
    }

    let myData = "halloNochmal";

    appendFile("logs/log.txt", "\n" + myData, function (err) {
        if (err) throw err;
        console.log('saved');
    });

}

