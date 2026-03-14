export type VlogEpisode = {
  id: string;
  epNum: string;
  epTag: string;
  title: string;
  desc: string;
  url: string;
};

export const vlogs: VlogEpisode[] = [
  {
    id: "ep-01",
    epNum: "EP. 01",
    epTag: "Episode 1 · Panel Discussion",
    title: "What Are We Actually Looking At? - Intro to BDD",
    desc: "An introduction to body image issues and mental health stigma among Filipino youth, defining BDD and the cultural forces at play.",
    url: "https://youtube.com/watch?v=PLACEHOLDER1",
  },
  {
    id: "ep-02",
    epNum: "EP. 02",
    epTag: "Episode 2 · Deep Dive",
    title: "The Architecture of Shame - Colonialism and the Digital Feed",
    desc: "Tracing Philippine beauty standards from pre-colonial practices through the skin-whitening industry and algorithmic amplification.",
    url: "https://youtube.com/watch?v=PLACEHOLDER2",
  },
  {
    id: "ep-03",
    epNum: "EP. 03",
    epTag: "Episode 3 · Stories",
    title: "Puna, Hiya, and the Weight of Words",
    desc: "Real scenarios of how body image anxiety manifests across childhood, adolescence, and young adulthood.",
    url: "https://youtube.com/watch?v=PLACEHOLDER3",
  },
  {
    id: "ep-04",
    epNum: "EP. 04",
    epTag: "Episode 4 · Solutions",
    title: "Do Not Be Afraid to Ask for Help",
    desc: "Evidence-based solutions, media literacy, and mental health resources available to Filipino youth today.",
    url: "https://youtube.com/watch?v=PLACEHOLDER4",
  },
];
