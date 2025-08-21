import { prisma } from "../lib/prisma";

async function main() {
  // Create user
  const user = await prisma.user.create({
    data: {
      name: "Alice Musician",
      email: "alice@example.com",
      image: "https://i.pravatar.cc/150?img=3",
    },
  });

  // Create band
  const band = await prisma.band.create({
    data: {
      name: "The Sonopsis Experience",
      description: "Demo band",
      image: "https://picsum.photos/200/200",
      memberships: {
        create: {
          userId: user.id,
          role: "owner",
        },
      },
    },
  });

  // Create lyric idea (no project, use bandId and userId)
  await prisma.lyricIdea.create({
    data: {
      title: "Verse 1",
      content: "This is the first verse of our demo song.",
      bandId: band.id,
      userId: user.id,
    },
  });

  // Create clip (use fileUrl, not url)
  await prisma.clip.create({
    data: {
      title: "Guitar Riff",
      fileUrl: "https://sample-videos.com/audio/mp3/crowd-cheering.mp3",
      duration: 10,
      bandId: band.id,
      userId: user.id,
    },
  });

  console.log("Seed complete ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
