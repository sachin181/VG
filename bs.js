const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

let { baseUrl, paths } = tsConfig.compilerOptions;
for (path in paths) {
    paths[path][0] = paths[path][0]
        .replace("../src/", `${__dirname}/dist/src/`)
        .replace("./src/", `${__dirname}/dist/vg-docker/src/`)
        .replace(".ts", ".js");
}
console.log({ baseUrl, paths });

const cleanup = tsConfigPaths.register({ baseUrl, paths });

// When path registration is no longer needed
// cleanup();