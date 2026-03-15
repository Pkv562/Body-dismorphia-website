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
    slug: "mirrors-unbroken",
    tag: "Narrative Blog Post",
    readTime: "9 min read",
    date: "March 2026",
    title: "Mirrors Unbroken",
    subtitle: "How Colonial Ships, TikTok Filters, Family Tables, and Job Ads All Broke the Same Mirror",
    topic:
      "A narrative reflection on body dysmorphia, colonial beauty standards, family pressure, algorithmic distortion, and recovery among Filipino youth",
    excerpt:
      "Body dysmorphia in the Philippines is not a personal failing. It is an architectural inheritance built by colonial history, family pressure, labor discrimination, and algorithmic beauty standards.",
    cardTag: "Narrative Blog Post · 9 min read",
    body: (
      <>
        <p>
          I used to think my reflection was just mine. A private insecurity I could fix with one more cream, one more filter, one
          more skipped meal. Then I realized the mirror was never mine to begin with. It was built in 1565, renovated by
          Hollywood, crowdsourced by aunties, and optimized by algorithms. Its name is body dysmorphia in the Philippines, and it
          is not a personal failing. It is an architectural inheritance.
        </p>

        <h2>The Foundation</h2>
        <p>
          The foundation was laid the moment Spanish ships arrived. They brought a hierarchy of faces: indios at the bottom,
          mestizos in the middle, full-blooded peninsulares at the top. Proximity to whiteness became worth itself. Before that,
          we already had the binukot, young women kept indoors so their skin stayed pale as moonlight, proof that their families
          did not need them in the fields. Colorism had a local name before it had a foreign one. Three centuries of Spanish rule
          turned pale skin into civilization, God, and education. The Americans added moving pictures: Monroe, Taylor, the promise
          that modernity itself wore white skin. Suddenly economic advancement had a face, and it was not ours.
        </p>

        <h2>The Screen</h2>
        <p>
          Fast-forward to today. A <strong>$9.67 billion skin-whitening industry</strong>. <strong>Fifty-two percent of young Filipinos</strong>
          saying body-image worries destroy their happiness. BDD starting at ages 12 to 13, precisely when we are most porous to
          the world&apos;s gaze. Tanned skin becomes dirty, flat noses undeveloped, short stature primitive. Symbolic annihilation:
          when you never see your own features celebrated as successful or beautiful, you learn your existence is a mistake that
          needs correcting.
        </p>
        <p>
          Then the renovation arrived: the screen. Four hours a day we live inside social media. Ninety seconds of reels is enough
          to crash body satisfaction. Filters create a digital self that does not exist; the bathroom mirror shows its imperfect
          twin. Researchers call it digital dysmorphia. Smartphone dependency, not family pressure or school stress, is the single
          strongest predictor of distortion among Filipino adolescents. The algorithms know exactly what to feed us: slim, fair,
          muscular, the colonial ideal now running on machine learning. Post, low likes, interpret it as personal failure, edit
          harder, restrict food harder, repeat. <strong>Forty-seven point five percent of BDD variability in 16-to-18-year-olds</strong>
          is explained by this loop. We are responding exactly as the system was designed to make us respond.
        </p>

        <h2>The Dinner Table</h2>
        <p>
          But the screen is only the renovation. The original architecture still stands at the dinner table. &quot;Tumaba ka.&quot; &quot;Ang
          itim mo.&quot; &quot;Para kang toothpick.&quot; We smile and call it puna, affectionate observation. It is actually hiya, shame as
          social control; kapwa, your body belongs to the group; and utang na loob, you cannot correct elders. Domestic shaming is
          the strongest predictor of eating disorders in Filipino youth. The people meant to love us unconditionally teach us our
          bodies are conditional. The nickname &quot;Tabachoy&quot; or &quot;Negra&quot; becomes identity. Decades later we are still starving or
          scrubbing away words spoken when we were twelve.
        </p>

        <h2>The Paycheck</h2>
        <p>
          The final mirror is the one that pays the bills. Job ads still list pleasing personality, code for fair skin, slim
          build, minimum height, youth. Height requirements for customer service, age caps at 25, mandatory photos. Physical
          Appearance Perfectionism correlates straight to anxiety, depression, and, for LGBTQ+ youth, something researchers simply
          call unbearable. Your paycheck, the message says, depends on your cheekbones.
        </p>

        <h2>The Reframe</h2>
        <p>
          I used to think the only way out was individual willpower. Delete all filters. Starve harder. Bleach more. But Mirrors
          Unbroken taught me something better: the mirror was never the problem; the reflection we were forced to see was. And
          reflections can be changed.
        </p>
        <div className="pull">Our bodies were never the problem. The mirror was.</div>

        <h2>The Quiet Revolution</h2>
        <ul>
          <li>Keep one photograph of a Filipino who changed history without changing their face. Let it live in your mind like a flag.</li>
          <li>Delete just one filter, the one you reach for most. Spend one day without it and notice how your body feels, not how it looks.</li>
          <li>Name the puna phrase that followed you since childhood, then say out loud: &quot;This was said to me. It is not me.&quot;</li>
          <li>
            Save one hotline or website to your phone right now. <a href="https://mentalhealthph.org" target="_blank" rel="noreferrer">mentalhealthph.org</a>
            is a good place to start. Use it at 3 a.m. when hiya hits hardest.
          </li>
          <li>
            Speak gently but clearly the next time someone comments on your body. Calling in instead of calling out protects not just
            you, but every cousin listening in the next room.
          </li>
        </ul>

        <p>
          The Morena movement is already doing it, creators celebrating brown skin, flat noses, indigenous features not despite
          being Filipino, but because we are Filipino. Brands are following. Laws in places like San Juan are banning pleasing
          personality requirements. The architecture is cracking.
        </p>
        <p>
          Four centuries of ships, screens, family tables, and job ads tried to tell us our bodies were wrong. Tonight we answer
          with one honest reflection: our bodies were never the problem. The mirror was.
        </p>
        <p>The reflection we did not choose ends here.</p>
        <p>The one we reclaim starts now.</p>
        <p>Maraming salamat.</p>
        <p>See yourself clearly.</p>

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
];

export const postBySlug = Object.fromEntries(posts.map((post) => [post.slug, post]));
