import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  tag: string;
  readTime: string;
  date: string;
  title: string;
  subtitle: string;
  topic: string;
  excerpt: string;
  cardTag: string;
  cw?: string;
  body: ReactNode;
};

export const posts: BlogPost[] = [
  {
    slug: "the-mirror-we-inherited",
    tag: "Introduction",
    readTime: "8 min read",
    date: "March 2026",
    title: "The Mirror We Inherited",
    subtitle: "What Are We Actually Looking At?",
    topic: "Introduction to Body Image Issues and Mental Health Stigma Among Filipino Youth",
    cardTag: "Introduction · 8 min read",
    excerpt:
      "For most Filipino youth, the critical inner voice is not just personal. It is inherited. It is historical. It is algorithmic. And it is killing our capacity to simply exist in our own bodies.",
    body: (
      <>
        <p>
          There is a moment that happens in front of mirrors, phone screens, and reflective windows that most of us never talk about.
          It is that split second between looking and judging - that automatic scan for what needs fixing, what does not measure up,
          what should be hidden.
        </p>
        <p>When was the last time you looked at yourself without that voice kicking in?</p>
        <div className="pull">
          For most Filipino youth, that voice is not just personal. It is inherited. It is historical. It is algorithmic. And it is
          killing our capacity to simply exist in our own bodies without surveillance.
        </div>
        <h2>The Crisis in Numbers</h2>
        <p>
          The statistics do not lie, even when our mirrors do. Recent national data reveals that <strong>52% of Filipinos aged 18 to 24
          experience detrimental effects on their life satisfaction due to body image concerns</strong>. This is not just above average - it is
          significantly higher than the global rate for this age group.
        </p>
        <p>
          Let that sink in. More than half of young Filipinos are walking around with a cloud hanging over their daily experience
          because of how they feel about their appearance.
        </p>
        <p>
          But this does not appear overnight. The research traces a clear trajectory: the seeds are planted in early adolescence,
          around ages 12 to 13, when the brain becomes hypersensitive to social feedback.
        </p>
        <h2>Defining the Terrain</h2>
        <p>
          <strong>Body image</strong> is not vanity. It is a complex, multidimensional construct encompassing how you perceive your body,
          what you think about it, and how you feel in it.
        </p>
        <p>
          When this becomes distorted, it can develop into <strong>Body Dysmorphic Disorder (BDD)</strong> - a preoccupation with perceived
          physical defects that others often cannot see, causing substantial impairment in social, academic, and professional
          functioning.
        </p>
        <h2>The Weight of Hiya</h2>
        <p>
          Filipino culture carries specific mechanisms that make body image struggles harder to name and address. There is
          <strong> hiya</strong>, <strong>kapwa</strong>, and the expectation that criticism about appearance should be accepted without pushback.
        </p>
        <h2>Why This Series Exists</h2>
        <p>
          This is not about &quot;just loving yourself.&quot; That is not a strategy when the problem is structural. This is about
          understanding the architecture of shame so we can dismantle it.
        </p>
        <h2>Your Challenge This Week</h2>
        <p>
          Notice how many times you look at your phone to check your appearance. Notice what runs through your head when you see a
          reflective surface. Simply paying attention is the first act of resistance.
        </p>
        <hr />
        <p>
          <em>
            If you are experiencing distress related to body image, resources are available. Contact the National Center for Mental
            Health (NCMH) at <strong>0917-899-USAP (8727)</strong> for 24/7 crisis intervention.
          </em>
        </p>
      </>
    ),
  },
  {
    slug: "architecture-of-shame",
    tag: "History and Digital",
    readTime: "10 min read",
    date: "March 2026",
    title: "The Architecture of Shame",
    subtitle: "How Filipino Beauty Standards Were Built",
    topic: "Historical Roots and Digital Amplification of Body Image Anxiety",
    cardTag: "History and Digital · 10 min read",
    excerpt:
      "Our beauty standards were imported, imposed, and internalized through centuries of colonial contact, then amplified by social media feeds.",
    body: (
      <>
        <p>
          To understand why 52% of Filipino youth struggle with body image, we have to excavate the foundations. Our current beauty
          standards were not native to these islands - they were imported, imposed, and internalized through centuries of colonial
          contact.
        </p>
        <h2>The Pre-Colonial Seed: Binukot</h2>
        <p>
          Before colonizers arrived, there was already a class dimension to appearance. The practice of <strong>binukot</strong> established
          that lighter skin signified high status.
        </p>
        <h2>Spanish Rule and American Era</h2>
        <p>
          Colonial hierarchy transformed class distinction into racial and aspirational systems. Western features were associated with
          power, modernity, and social mobility.
        </p>
        <h2>The Present: A 9.67 Billion Dollar Industry</h2>
        <p>
          The skin whitening industry in the Philippines is worth nearly 10 billion dollars, reflecting a market built on internalized
          inferiority and persistent colonial standards.
        </p>
        <h2>The Digital Acceleration</h2>
        <p>
          The Philippines leads the world in social media usage. Platform algorithms prioritize highly curated appearance-focused
          content, reinforcing harmful comparison loops.
        </p>
        <h2>The Family Layer: Puna Culture</h2>
        <p>
          Household commentary on appearance, often framed as care, can become long-term shame architecture and a predictor of
          disordered eating and perfectionism.
        </p>
        <div className="pull">No wonder 52% of young Filipinos are struggling. This is not individual failure. This is systemic drowning.</div>
        <hr />
        <p>
          <em>
            Based on peer-reviewed research and national statistics. For support, contact NCMH at <strong>0917-899-USAP (8727)</strong>.
          </em>
        </p>
      </>
    ),
  },
  {
    slug: "weight-of-the-mirror",
    tag: "Real Lives",
    readTime: "12 min read",
    date: "March 2026",
    title: "The Weight of the Mirror",
    subtitle: "How Body Image Anxiety Lives in Real Bodies",
    topic: "Real-Life Manifestations Across Developmental Stages",
    cardTag: "Real Lives · 12 min read",
    excerpt:
      "What does body dysmorphia look like in daily life? Three evidence-based scenarios show how shame forms from childhood to adulthood.",
    cw: "Content Warning: Descriptions of disordered eating, self-harm ideation, and emotional distress",
    body: (
      <>
        <div className="cw-note">
          Content Warning: This post includes descriptions of disordered eating, self-harm ideation, and emotional distress.
        </div>
        <p>
          This is how it lives - in comments that become identity, in silence that becomes shame. These are composite stories, but the
          documented patterns are real.
        </p>
        <h2>Childhood: The Schema Forms</h2>
        <div className="scenario">
          Eight-year-old Mara has been watching short-form beauty content for months and now refuses to leave for school without repeated
          mirror checks.
        </div>
        <p>
          Studies of Filipino children show that media pressure directly predicts body dissatisfaction and lower self-esteem at ages as
          young as 8 to 10.
        </p>
        <h2>Adolescence: Disorder Onset</h2>
        <div className="scenario">
          Sixteen-year-old Jao repeatedly posts and deletes photos, spends hours editing his appearance, skips dinner, and avoids school
          after a breakout.
        </div>
        <p>
          Philippine research among social media users aged 16 to 18 found that 47.5% of variability in BDD symptoms can be explained by
          body image and social comparison.
        </p>
        <h2>Young Adulthood: Economic Enforcement</h2>
        <div className="scenario">
          Twenty-two-year-old Alex prepares for a job interview while feeling pressured to alter resume photos and appearance to meet
          hiring expectations.
        </div>
        <p>
          Physical Appearance Perfectionism peaks in this stage where employment systems can reward compliance with narrow standards.
        </p>
        <div className="pull">
          These patterns are documented, measured, and recognized as a genuine mental health crisis among Filipino youth.
        </div>
        <hr />
        <p>
          <em>
            If you recognized yourself in these scenarios, please reach out. NCMH: <strong>0917-899-USAP (8727)</strong> (24/7).
          </em>
        </p>
      </>
    ),
  },
  {
    slug: "reframing-the-reflection",
    tag: "Solutions",
    readTime: "10 min read",
    date: "March 2026",
    title: "Reframing the Reflection",
    subtitle: "Building a New Mirror",
    topic: "Solutions and Pathways Forward",
    cardTag: "Solutions · 10 min read",
    excerpt:
      "Just love yourself is not a systemic solution. This final post maps practical interventions across schools, families, policy, and personal care.",
    body: (
      <>
        <p>
          Just love yourself is not a solution when the problem is systemic. We need institutional, familial, and individual strategies
          that address root causes.
        </p>
        <h2>Institutional Interventions</h2>
        <p>
          Media literacy in schools, stronger school-based mental health services, and real anti-discrimination enforcement are concrete
          protective layers.
        </p>
        <h2>Familial and Cultural Shifts</h2>
        <p>
          Calling in instead of calling out can set boundaries while preserving relationships. Supporting Morena-positive representation
          helps reverse symbolic erasure.
        </p>
        <div className="tip-box">
          <strong>Try this:</strong> &quot;When you comment on my weight, I feel insecure. I know you do not mean harm, but I need that
          to stop.&quot;
        </div>
        <h2>Individual Resources</h2>
        <table className="resource-table">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Contact</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NCMH</td>
              <td>0917-899-USAP (8727)</td>
              <td>24/7 crisis intervention, free consultation</td>
            </tr>
            <tr>
              <td>In Touch Community Services</td>
              <td>0917-565-2036</td>
              <td>Youth-focused counseling, 24/7 crisis line</td>
            </tr>
            <tr>
              <td>UPD PsychServ</td>
              <td>psycserv.upd@up.edu.ph</td>
              <td>Free counseling for university students</td>
            </tr>
          </tbody>
        </table>
        <h2>The Reframe</h2>
        <div className="pull">
          A Filipino child should see not flaws to correct, but a heritage that is diverse, resilient, and beautiful in and of itself.
        </div>
        <p>
          Your body is not a project to complete. It is a home to live in. The mirror shows what you look like. It does not show who you
          are.
        </p>
        <hr />
        <p>
          <em>
            For immediate support: NCMH <strong>0917-899-USAP (8727)</strong> (24/7).
          </em>
        </p>
      </>
    ),
  },
];

export const postBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
