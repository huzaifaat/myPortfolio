import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const avatarData = await readFile(join(process.cwd(), "public", "avatar.jpg"));
  const avatarBase64 = `data:image/jpeg;base64,${avatarData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img
          src={avatarBase64}
          width={64}
          height={64}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}
