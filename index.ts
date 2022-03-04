import fs from "fs";
import parseMD from "parse-md";

const fileContents = fs.readFileSync("test.md", "utf8");
const { metadata, content } = parseMD(fileContents);

console.log("metadata", metadata);

console.log("content", content);
