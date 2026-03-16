export type VlogEpisode = {
  id: string;
  epNum: string;
  epTag: string;
  title: string;
  desc: string;
  url: string;
  thumbnail?: string;
};

export const vlogs: VlogEpisode[] = [
  {
    id: "ep-01",
    epNum: "EP. 01",
    epTag: "Episode 1 · Documentary",
    title: "Mirrors Unbroken",
    desc: "A single documentary-style episode using split-screens, motion graphics, and voice to trace colonial roots, digital pressure, family shaming, and economic appearance bias.",
    url: "https://youtu.be/23w_dFj9ncU",
    thumbnail: "/vlog-ep01-thumb.png",
  },
];
