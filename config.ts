import * as fs from "fs";
import * as path from "path";

export class Config {
    public static GetToken(): string {
        return fs.readFileSync(path.join(__dirname, '../secret/token.txt'), {
            encoding: 'utf8',
        })
    }

    public static GetPVCCategory(): string {
        return fs.readFileSync(path.join(__dirname, '../config/pvc-category.txt'), {
            encoding: 'utf8'
        })
    }

    public static GetInviteURL(): string {
        return fs.readFileSync(path.join(__dirname, '../config/invite-url.txt'), {
            encoding: 'utf8'
        })
    }
}