import * as path from "path";

export function getHikeDirectory() {
    return path.join(__dirname, "..", "..");
}

export function getNodeModulesDirectory() {
    return path.join(getHikeDirectory(), "node_modules");
}
