import * as fs from "fs";
import { parse } from "dotenv";

export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        const isDevelop = process.env.NODE_ENV !== "production";

        if (isDevelop) {
            const envFilePath = __dirname + "/../../.env";
            const exitsPath = fs.existsSync(envFilePath);

            if (!exitsPath) {
                console.log("No existe el archivo dot .env");
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        } else {
            this.envConfig = {
                PORT: process.env.PORT,
            }
        }
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}