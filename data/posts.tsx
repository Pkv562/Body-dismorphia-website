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
          There is a moment that happens in front of mirrors, phone screens, and reflective windows that most of us never talk
          about. It&apos;s that split second between looking and judging, that automatic scan for what needs fixing, what doesn&apos;t
          measure up, what should be hidden.
        </p>
        <p>When was the last time you looked at yourself without that voice kicking in?</p>
        <div className="pull">
          For most Filipino youth, that voice isn&apos;t just internal. It&apos;s also inherited. It&apos;s historical. It&apos;s algorithmic.
          And it&apos;s killing our capacity to simply exist in our own bodies without surveillance.
        </div>
        <h2>The Crisis in Numbers</h2>
        <p>
          Statistics don&apos;t lie, not even when we do lie to ourselves in front of the mirror every morning. Recent statistics
          gathered across the country showed that <strong>52% of 18- to 24-year-old Filipinos suffer from detrimental effects on
          their life satisfaction due to their concerns with their body image</strong>. That&apos;s not only above the average; it&apos;s
          also much higher than the global figure for this age group.
        </p>
        <p>
          Let&apos;s process this for a second: more than half of this country&apos;s youth are going about their lives with a shadow over
          their heads due to their own concerns with their own appearance.
        </p>
        <p>
          Of course, this doesn&apos;t happen in an instant. There&apos;s a process to this, and it starts with the seeds sown in early
          adolescence, between ages 12 to 13, when the brain becomes hypersensitive to social cues. It&apos;s during this period that
          Filipino youth are going through what can be called a &quot;dual landscape,&quot; where they are not only subjected to globalized
          digital media&apos;s standards of beauty but are also subjected to traditional comments from their own communities.
        </p>
        <p>It&apos;s a perfect storm. And most of us never saw it coming.</p>
        <h2>Defining the Terrain</h2>
        <p>
          But before we go any further, let&apos;s be more specific about what we&apos;re talking about.
        </p>
        <p>
          Body Image is not Vanity. It is a complex, multidimensional construct that includes how you see your body, what you think
          about your body, and how you feel about your body. When this is disordered, it may lead to the development of a
          <strong> Body Dysmorphic Disorder (BDD)</strong>, which is a preoccupation with perceived defects in appearance that are not
          visible to anyone else, resulting in significant interference with social, academic, and professional functioning.
        </p>
        <p>
          This is not &quot;being insecure.&quot; BDD is a mental health disorder. It is a preoccupation that takes up hours of the day.
          Checking the mirror is no longer just checking the mirror. Comparison is no longer just comparison.
        </p>
        <p>And then, of course, we have our unique layers that add complexity to the recognition and treatment of BDD.</p>
        <h2>The Weight of Hiya</h2>
        <p>
          There are particular mechanisms in Filipino culture that make body image difficulties more difficult to articulate and
          tackle. There is hiya, or shame as a means of social regulation. There is kapwa, or shared identity that makes your body
          public property, subject to comment. There is the understanding that you need to &quot;take constructive criticism&quot; about your
          appearance without complaint, without being labeled as maarte or pikon.
        </p>
        <p>
          The research outlines what happens when these cultural elements interact with contemporary influences: symbolic
          annihilation. When you do not see successful, popular Filipinos who look like you, when the faces in movies, in social
          media, and in beauty pageants represent a &quot;Mestiza&quot; ideal that is genetically impossible for most Filipinos, you
          internalize that your &quot;real&quot; features are &quot;dirty, ugly, poor.&quot;
        </p>
        <p>Your body becomes something to apologize for.</p>
        <h2>Why This Series Exists</h2>
        <p>
          We&apos;re building this site because the conversation has been a long time coming. Over the course of our next three posts,
          we&apos;ll discuss where these standards come from, how these standards show up in people&apos;s lives from childhood through young
          adulthood, and what we can actually do to change this, individually, interpersonally, and structurally.
        </p>
        <p>
          This isn&apos;t about &quot;just loving yourself.&quot; That&apos;s not a solution when the issue is structural. This is about understanding
          the structure of shame so we can begin to tear it down.
        </p>
        <h2>Your Challenge This Week</h2>
        <p>
          If you identify with any of these, your compulsive checking, your commentary on your own family, your dependence on
          filters, don&apos;t worry. We&apos;re not asking you to fix this yet. Just acknowledge.
        </p>
        <p>
          Acknowledge the number of times you check your screen to check your reflection. Acknowledge what crosses your mind when you
          catch a glimpse of a reflective surface. Acknowledge the faces you see celebrated and the ones you don&apos;t.
        </p>
        <p>The act of acknowledgment itself is the first act of resistance.</p>
        <p>
          For before we can begin to alter what we see when we look into the mirror, before we can begin to alter what&apos;s reflected
          back to us, we need to understand what this mirror has been created with. And believe us, it wasn&apos;t created by us. And it
          certainly wasn&apos;t created for us.
        </p>
        <p>
          <strong>Next up:</strong> We will explore the historical underpinnings of beauty standards for Filipinos. Binukot practices
          before colonialism, racialized beauty standards under Spanish rule, American cultural imperialism, and the billion-dollar
          industry of skin whitening. The construction of shame has deep roots.
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
          I stumbled upon my mom&apos;s old magazines dating back to the 1990s. Every single page, every single magazine cover, featured
          light-skinned, high-nose-bridged, slender people. Nobody looked like that in my neighborhood. Nobody looked like my Lola.
          Nobody looked like me.
        </p>
        <p>This wasn&apos;t an accident. This was designed.</p>
        <p>
          In order to understand the 52% of Filipino youth dealing with body image concerns, we need to dig deep and understand the
          roots. The research indicates that there is a historical path that shows that the current standard of beauty wasn&apos;t
          originally part of the local landscape. It was brought, enforced, and embraced through colonialism.
        </p>
        <h2>The Pre-Colonial Seed: Binukot</h2>
        <p>
          But prior to the coming of the colonizers, there was already a class aspect to physical appearance. The practice of
          binukot, where girls were kept hidden in houses to preserve their pale complexion and features, already established that
          pale skin, like that of the moon, signified class. You did not work in the sun. You did not sweat. You did not have to
          work.
        </p>
        <p>It was not yet race, but it was class. And it already established the idea that lighter is better.</p>
        <h2>Spanish Rule: Racial Hierarchy (1565-1898)</h2>
        <p>
          The Spanish made class distinction into racial caste. The pecking order was clear: the Peninsulares at the top, the
          Mestizos in the middle, and the Indios at the bottom.
        </p>
        <p>
          Your distance from whiteness determined your worth, your access to education, your right to &quot;civilization.&quot; Fair skin was
          the mark of power. The model was biological, essential, and hereditary.
        </p>
        <h2>American Era: Benevolent Assimilation (1898-1946)</h2>
        <p>
          The Americans brought with them a new weapon: mass media. &quot;Benevolent assimilation&quot; brought the Philippines an influx of
          Western movies, magazines, and advertisements. The heroes were white. The beauty standards were white. Progress itself was
          white.
        </p>
        <p>
          Filipinos were taught to equate Western features with modernity, with economic development, with global competitiveness. It
          became the template, the means to buy your way into with whitening creams and feature alteration.
        </p>
        <h2>The Present: A $9.67 Billion Industry</h2>
        <p>
          Today, the skin whitening business in the Philippines is a multi-billion dollar business, nearing a value of 10 billion
          dollars. Consider what that really means: billions of pesos spent to try and overcome what nature gave us, to try and
          attain a form of beauty that less than 1% of the population naturally possess.
        </p>
        <p>
          The study describes this as a form of Colonial Mentality, a form of internalized oppression, where the people of the colony
          consider their own ethnicity to be inferior. This is not history. This is current events. This is happening.
        </p>
        <p>
          Consider the types of people being cast as the lead roles in the teleseryes, or the types of women being celebrated as the
          Philippine representatives to Miss Universe. Consider the ideal of the &quot;Mestiza&quot; woman, light-skinned, nose upturned,
          thin. This represents a form of symbolic annihilation of the rest of the population. When you don&apos;t see yourself
          represented as successful or beautiful, you come to realize that your natural state of being is somehow inadequate.
        </p>
        <h2>The Digital Acceleration</h2>
        <p>
          So, while colonialism may have laid the groundwork, social media is the gasoline poured on the fire.
        </p>
        <p>
          The Philippines is the social media capital of the world, with citizens averaging more than four hours of social media use
          daily. In those four hours, the youth of the Philippines is engaging with content from social media platforms that were
          created with the intent to prioritize &quot;visually pleasing&quot; content, which, according to the algorithm, means &quot;slim,
          fair-skinned, muscular-ideal.&quot;
        </p>
        <p>
          There is a phenomenon called the 90-Second Effect, which states that after 90 seconds of viewing TikTok videos with the
          theme of appearance-ideal, body satisfaction is reduced and self-objectification is increased.
        </p>
        <div className="pull">Ninety seconds. One video. One scroll.</div>
        <h2>The Mechanics of Distortion</h2>
        <p>There are several mechanisms by which social media works:</p>
        <p>
          <strong>Upward Social Comparison:</strong> You compare your unedited, everyday life to highly edited, filtered, and
          professionally lit content. The odds are already stacked against you.
        </p>
        <p>
          <strong>Digital Dysmorphia:</strong> With the help of AI filters, you can &quot;correct&quot; your features in real-time. You can make
          your nose smaller, your skin smoother, your eyes bigger. You&apos;re creating a digital version of yourself that doesn&apos;t exist.
          When you look into a real mirror, the disconnect is jarring.
        </p>
        <p>
          <strong>Selfitis:</strong> Obsessive-compulsive selfie-taking and editing. The key thing to note here is not the amount of
          time spent on phones, but the level of dependence. When your sense of self-worth comes from validation on social media,
          you&apos;ve outsourced your identity to an algorithm.
        </p>
        <p>For young Filipino women, this means a drive for thinness. For young Filipino men, this means muscular-ideal internalization.</p>
        <h2>The Family Layer: Puna Culture</h2>
        <p>
          But we shouldn&apos;t lay all the blame on social media. The research found that puna, or comments on physical appearance, is an
          integral part of Filipino culture.
        </p>
        <p>
          &quot;Ang taba mo na.&quot; &quot;Tumanda ka.&quot; &quot;Ang itim mo.&quot; These are comments that are often intended as endearment, but they cast
          long shadows of shame that last well past childhood. The child dubbed &quot;Tabachoy&quot; or &quot;Negra&quot; grows up with these labels as
          part of their identity.
        </p>
        <p>
          In the past, these comments were part of kapwa, or shared identity, and were intended to promote social unity. But in our
          world of dual identity, they are seen as judgment. Being fat means you failed, not that you were successful. Being dark
          means you didn&apos;t work hard enough to be light.
        </p>
        <p>
          One of the strongest predictors of eating disorders and physical perfectionism is domestic shaming. You learn that your
          worth in your family depends on how you look.
        </p>
        <h2>The Economic Enforcement</h2>
        <p>
          But perhaps most insidiously, these standards are not only social but also economic. For example, job postings in the
          Philippines specify &quot;pleasing personality&quot; (read: beauty and light skin), a minimum height requirement (5&apos;2&quot; to 5&apos;4&quot;),
          and a requirement to include a photo in a resume.
        </p>
        <p>Your economic survival is tied to your ability to approximate this ideal of Mestiza. The stakes are rent, food, and opportunity.</p>
        <h2>Connecting the Threads</h2>
        <p>
          So we have: colonial history providing the ideal, digital media amplifying it 24/7, family culture normalizing comments
          about it, and economic systems mandating compliance with it.
        </p>
        <div className="pull">No wonder 52% of young Filipinos are struggling. This isn&apos;t individual failure. This is systemic drowning.</div>
        <p>
          The evidence is clear: body dysmorphia and appearance anxiety in the Philippines are not personal issues. They are
          completely understandable reactions to a culture that has never let us feel at home in our own skin.
        </p>
        <p>
          <strong>Next:</strong> We will illustrate this architecture in motion, showing how this process plays out across childhood,
          adolescence, and young adulthood. Because before we can start to think about how to solve this, we must confront the
          reality of the harm. And the reality is devastating.
        </p>
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
          I was fourteen when my tita gave me a nickname. &quot;Tabachoy,&quot; she said with a chuckle, squeezing my cheek as if I still had
          the features of a toddler. It was meant to be affectionate, cute. Everyone around us was laughing.
        </p>
        <p>I never wore shorts for three years.</p>
        <p>
          This is how it lives, in the small moments that become architecture, in the comments that become identity, in the silence
          that becomes shame. The research we have covered shows us the mechanisms: colonial history, digital platforms, family
          culture, economic enforcement. But what does it look like in the Tuesday afternoon, in the bedroom at 2 AM, in the job
          interview?
        </p>
        <p>We are left with three scenarios today based on the research. These are not individual people, but the patterns are documented, measured, real.</p>
        <h2>Childhood: The Schema Forms</h2>
        <div className="scenario">
          At eight years old, Mara is already familiar with TikTok videos featuring makeup tutorials. She knows the term &quot;skincare
          routine.&quot; She has already asked her mother thrice to buy products that would &quot;fix&quot; her pores. Today, she refuses to go to
          school until she looks at herself in the mirror four times.
        </div>
        <p>
          Research on 8- to 10-year-old Filipino children found that media pressure at this age directly correlates with body
          dissatisfaction and low self-esteem. These are not teenagers. These are young children who are developing their appearance
          schema, or their underlying beliefs about the importance of looks that will define their self-concepts for decades to come.
        </p>
        <p>
          What is particularly disheartening is that parents do not notice the alarm bells. A child asking for a skincare routine is
          cute. A child fussing over their outfit is fashionable. We do not recognize the signs of media influence because we have not
          been taught to recognize the signs.
        </p>
        <p>
          And then, of course, there&apos;s the family comments themselves, the puna that we talked about in the last post. Even when they
          are intended in jest, even when they are intended in love, comments about the child&apos;s body in childhood are bullying, and
          they lead to internalized criticism. Mara is eight years old, and she thinks that something needs to be done about her real
          face.
        </p>
        <h2>Adolescence: The Disorder Onset</h2>
        <div className="scenario">
          The sixteen-year-old boy posted a picture an hour ago. The picture has been given twelve likes. His last post had garnered
          forty-seven. The boy has deleted his picture. The boy is in his room. He has been there for the last two hours, editing his
          picture that he is about to post. He needs to finish his homework. He hasn&apos;t eaten dinner. He is contemplating whether he
          should go to school the next day because he is having a breakout and is too ugly to be seen.
        </div>
        <p>
          This is the stage when Body Dysmorphic Disorder emerges. The research on the behavior of sixteen- to eighteen-year-old active
          social media users in the Philippines revealed that <strong>47.5% of the variance in BDD was explained by body image and
          social comparison</strong>.
        </p>
        <p>
          The teenage brain is hypersensitive to social cues, craving validation, seeking to define self-worth by how others reflect
          back. The dual landscape of digitalized world standards and traditional family feedback is a recipe for disaster.
        </p>
        <p>
          Jao&apos;s behavior is a clear example of a cycle that research has revealed: post, no validation, deletion, more intense
          editing, compulsive checking, social withdrawal. Young Filipino women experience it as a drive for thinness. Young Filipino
          men experience it as muscular-ideal internalization. Both lead to disordered eating, supplement taking, and gym obsession.
        </p>
        <p>Jao is sixteen. He thinks his economic and social future hangs on looks he cannot naturally attain.</p>
        <h2>Young Adulthood: The Economic Enforcement</h2>
        <div className="scenario">
          Twenty-two-year-old Alex is preparing for a job interview. Alex has spent three hours selecting an appropriate attire for the
          interview. Alex has practiced a smile in front of the mirror. Alex is thinking about altering the resume photo to make
          themself lighter-skinned. Alex has even spent time thinking about the costs of nose fillers. Alex is qualified for the
          position. Alex is also terrified that physical appearance disqualifies them before even speaking.
        </div>
        <p>
          The research has shown that Physical Appearance Perfectionism peaks in this age group because Philippine job markets demand
          aesthetic standards. The standards are clear: pleasing personality, height requirements, and resume photos.
        </p>
        <p>
          The message is clear: economic survival in the Philippine job market is dependent on one&apos;s ability to emulate the Mestiza
          beauty standard. For LGBTQ+ youth in this category, their body image concerns are characterized as unbearable because of the
          need to deal with additional levels of social judgment.
        </p>
        <p>Alex is twenty-two years old. Alex is thinking about making a permanent change to their body for an entry-level job.</p>
        <h2>The Common Threads</h2>
        <p>
          <strong>The Recursive Checking:</strong> Phone dependency creates a recursive surveillance state.
        </p>
        <p>
          <strong>The Dual Landscape:</strong> There is both digital pressure, filters, algorithms, influencers, and traditional
          pressure, family comments, traditional norms, religious norms. There is no single source to rebel against.
        </p>
        <p>
          <strong>The Internalization:</strong> The comments of others become your own inner voice. The tita&apos;s &quot;Tabachoy&quot; becomes the
          voice you hear when you wake up at 2 AM.
        </p>
        <p>
          <strong>The Functional Impact:</strong> This is not merely feeling bad. This is skipping school, missing opportunities,
          relationship strain, and social isolation.
        </p>
        <h2>The Research Validation</h2>
        <ul>
          <li>Childhood body shame is linked to adult eating disorders.</li>
          <li>Social media addiction is linked to BDD symptoms among teens.</li>
          <li>Employment discrimination based on appearance is linked to Physical Appearance Perfectionism.</li>
          <li>LGBTQ+ youth exhibit higher rates of depression and anxiety related to appearance.</li>
        </ul>
        <p>
          If you recognize yourself in Mara, Jao, or Alex, you are not making your experiences up. You are not too sensitive. You are
          responding to the culture that has made your body a constant site of evaluation and improvement.
        </p>
        <h2>Sitting With the Reality</h2>
        <p>
          We began this series by posing a question: just observe. Observe the checking, comparing, and filtering. If you&apos;ve been
          paying attention to the series, you might be feeling a bit fatigued by now. This is a hard truth to carry.
        </p>
        <p>
          The research is a vital validation: we know you&apos;re not alone in experiencing this phenomenon because it&apos;s been studied,
          measured, and acknowledged as a legitimate mental health crisis among the youth of the Philippines.
        </p>
        <div className="pull">
          You are not alone in this struggle. You are not weak for fighting through it.
        </div>
        <p>
          We don&apos;t want to leave you hanging in the struggle, though. Next, we&apos;ll be looking into the solutions: the institutional,
          familial, and personal levels on how to combat and move forward from this. Not just love yourself. Actual strategies on how
          to alter what we see when we look into the mirror.
        </p>
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
          We&apos;ve walked through some tough landscapes together.
        </p>
        <p>
          We&apos;ve identified the problem: 52% of Filipino youth struggling with body image issues, rates higher than the global
          average, a mental health crisis in plain sight. We&apos;ve analyzed the architecture: centuries of colonialism, social media
          platforms engineered for comparison, family dynamics that encourage commentary, economic systems that mandate compliance.
        </p>
        <p>
          And then we reach the inevitable question: What do we do about it? &quot;Love yourself&quot; is not a plan when the system is broken.
          Personal self-esteem is no match for historical trauma, social media amplification, and economic marginalization. We need to
          develop strategies to combat the underlying issues we&apos;ve identified.
        </p>
        <p>The research suggests some specific strategies to combat body image issues in Filipino youth. This is our path forward.</p>
        <h2>Institutional Interventions</h2>
        <p>
          <strong>Media Literacy as Armor:</strong> The research points to South Korea&apos;s BodyThink program as an example to be adapted
          and implemented in the Philippines. Filipino students can be taught to critically read ads for whitening cream products and
          understand the historical and economic rationale behind colorism.
        </p>
        <p>
          Being media literate is not about rejecting beauty culture altogether. It is about recognizing that the imperfections beauty
          products promise to fix were invented to sell those products in the first place.
        </p>
        <p>
          <strong>School-Based Mental Health Services:</strong> The research focuses on building the mental health system within the
          schools to identify issues earlier and normalize seeking help.
        </p>
        <p>
          <strong>Policy and Legal Advocacy:</strong> Local ordinances against pleasing personality requirements exist, but
          implementation remains inconsistent. Reporting violative hiring practices matters because appearance discrimination makes
          economic survival dependent on looks.
        </p>
        <h2>Familial and Cultural Shifts</h2>
        <div className="tip-box">
          <strong>Calling in:</strong> &quot;Tita, when you comment on my weight, it makes me feel insecure. I know you don&apos;t mean to hurt
          me, but I need you to stop.&quot;
        </div>
        <p>
          Family culture doesn&apos;t change with confrontation alone. The research recommends calling in, gentle but firm boundary-setting
          that bridges intent and impact. This approach honors kapwa while honoring individual needs.
        </p>
        <p>
          There is also an emerging movement to embrace Morena beauty, tan skin, indigenous features, natural hair, as something to
          be celebrated. This is symbolic affirmation. When you see successful, beautiful people who look like you, the message of
          inadequacy loses its hold.
        </p>
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
              <td>National Center for Mental Health (NCMH)</td>
              <td>+63 2 8893 7603</td>
              <td>24/7 crisis intervention, free consultation</td>
            </tr>
            <tr>
              <td>In Touch Community Services</td>
              <td>0917-565-2036</td>
              <td>Youth-focused counseling, 24/7 crisis line</td>
            </tr>
            <tr>
              <td>Philippine Mental Health Association</td>
              <td>mentalhealthph.org</td>
              <td>Online psychosocial support, safe spaces</td>
            </tr>
            <tr>
              <td>#MentalHealthPH</td>
              <td>@mentalhealthph</td>
              <td>Digital advocacy, mental health directory</td>
            </tr>
            <tr>
              <td>UPD PsychServ</td>
              <td>psycserv.upd@up.edu.ph</td>
              <td>Free counseling for university students</td>
            </tr>
            <tr>
              <td>Natasha Goulbourn Foundation</td>
              <td>0917-899-USAP (8727)</td>
              <td>Crisis helpline, mental health education</td>
            </tr>
          </tbody>
        </table>
        <p>These aren&apos;t just for crisis. They&apos;re for ongoing support, for processing, for building resilience. Using them is strength, not weakness.</p>
        <h2>Daily Practices for Resistance</h2>
        <p>
          <strong>Curate Your Feed Intentionally:</strong> Unfollow accounts that make you compare. Follow accounts with diverse body
          representation. The algorithm takes cues from your actions.
        </p>
        <p>
          <strong>Practice Noticing Without Judgment:</strong> When you catch yourself comparing your appearance or checking your
          reflection, just notice it. This is the beginning of creating space between stimulus and response.
        </p>
        <p>
          <strong>Challenge Puna When You Hear It:</strong> Even if it&apos;s not directed at you. Make it uncomfortable to body shame.
        </p>
        <p>
          <strong>Reconnect With Pre-Colonial Strength:</strong> Your ancestors survived colonization. Your body is connected to your
          strength, not just your shame.
        </p>
        <h2>The Reframe</h2>
        <div className="pull">
          A society where the Filipino child looks in the mirror and does not see a list of flaws to be corrected, but rather a
          reflection of a heritage that is diverse, resilient, and beautiful in and of itself.
        </div>
        <p>
          The mirror we want to inherit is not the mirror built by colonizers, polished by algorithms, and enforced by economic
          anxiety. Your body is not a project to complete. It&apos;s a home to live in. The mirror reflects what we look like. The mirror
          doesn&apos;t reflect who we are.
        </p>
        <h2>Series Conclusion</h2>
        <p>
          In four posts, we&apos;ve walked through the crisis from its symptoms to its causes, its effects, and its possible remedies. The
          data is scary. The past is burdensome. The present hurts.
        </p>
        <p>
          But the research also tells us this: we are becoming more aware, more mobilized, more resourced, and more empowered against
          puna, employment discrimination, and narrow beauty ideals. The mirror we are looking at can and will change.
        </p>
        <p>Maraming salamat for reading. Take care of yourselves. Take care of each other.</p>
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
