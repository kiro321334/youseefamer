import { readdirSync, writeFileSync, readFileSync } from "fs";
import { execFileSync } from "child_process";
import { imageSize } from "image-size";
import path from "path";

const root = "public/projects";
const VID = [".mp4", ".webm"];
const IMG = [".jpg", ".jpeg", ".png", ".webp"];
const nat = (a, b) => a.localeCompare(b, undefined, { numeric: true });
const out = {};

for (const d of readdirSync(root, { withFileTypes: true }).filter((d) =>
  d.isDirectory(),
)) {
  out[d.name] = readdirSync(path.join(root, d.name))
    .sort(nat)
    .flatMap((file) => {
      const ext = path.extname(file).toLowerCase();
      const full = path.join(root, d.name, file);
      const src = `/projects/${d.name}/${file}`;
      if (file.startsWith("cover") || file.endsWith("-poster.jpg")) return [];
      if (IMG.includes(ext)) {
        const { width: w, height: h } = imageSize(readFileSync(full));
        return [{ t: "image", src, w, h }];
      }
      if (VID.includes(ext)) {
        const [w, h] = execFileSync("ffprobe", [
          "-v",
          "error",
          "-select_streams",
          "v:0",
          "-show_entries",
          "stream=width,height",
          "-of",
          "csv=p=0",
          full,
        ])
          .toString()
          .trim()
          .split(",")
          .map(Number);
        return [
          { t: "video", src, w, h, poster: src.replace(ext, "-poster.jpg") },
        ];
      }
      return [];
    });
}
writeFileSync("data/media.json", JSON.stringify(out, null, 2));
console.log(
  "done:",
  Object.entries(out)
    .map(([k, v]) => `${k}=${v.length}`)
    .join(" | "),
);
