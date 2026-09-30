# Ajay avatar generation guide

Use this guide for future Ajay avatar, character, pose, expression, clothing, and art-style requests in this project. The selected character is a friendly, stylized 3D cartoon version of Ajay.

## Canonical references

1. **Identity and selected 3D style:** `public/assets/portraits/ajay-3d-character-reference.png`. Use this for the face, hair, beard, eyes, smile, skin tone, proportions, and 3D character treatment. This is the primary reference for every new Ajay character image.
2. **Upper-body design and pointing pose:** `public/assets/portraits/ajay-3d-pointing-left.png`. Use this for the orange shirt, black square smartwatch, body scale, arms, and established pointing-left gesture. It is also a second identity check for new poses.
3. **Original pointing gesture:** `public/assets/portraits/ajay-avatar.png`. This is the earlier 2D site asset. Use it only when the exact gesture or composition needs checking; do not let its 2D rendering replace the selected 3D look.

The original `AJAY.HEIC` photo is private and is not stored in the public assets. These two new PNGs are the durable project references; do not rely on conversation history or files in Codex's generated-images folder.

## How to make another asset

- Provide the identity reference to the image tool every time. Also provide the upper-body reference for new poses or clothing so the character stays consistent.
- If the user supplies a new pose image, label it **pose only**. Keep Ajay's identity from the canonical reference. Do not adopt the pose image's face, clothing, or art style unless requested.
- For a different art style, use the identity reference for likeness and explicitly describe the new style. The selected 3D treatment is the default when no other style is specified.
- Preserve recognizable adult facial structure, swept-up black hair, full black beard and moustache, warm brown eyes, friendly smile, and warm medium skin tone. Keep the orange shirt and black smartwatch by default when visible, unless the user requests a change.
- Make reusable character cutouts with a transparent background. Leave enough room around hair, hands, and elbows; check that the requested gesture and anatomy are correct.
- Save approved outputs beside these references with descriptive names such as `ajay-3d-waving.png`. Keep the canonical references intact unless the user explicitly selects a replacement.
- When useful, inspect the result at thumbnail size as well as full size, especially the face, hands, and transparent edges.

## Prompt scaffold

> Image 1 is Ajay's canonical identity and 3D character reference. Preserve the same recognizable adult face, swept-up black hair, full beard, warm brown eyes, smile, warm medium skin, and friendly stylized 3D proportions. Image 2 is the established upper-body character reference. [If present: Image 3 is a pose reference only.] Create Ajay [doing the requested action] in [the requested style, or the same 3D cartoon style]. Keep the orange shirt and black square smartwatch unless changed by the request. Include the whole gesture with correct anatomy, clean cutout edges, and actual transparency. No extra people, text, logo, or watermark.
