import { useState, useEffect, useRef } from "react";

const CHARACTERS = {
  "PROMETHEUS": {
    name: "Sam Altman", title: "CEO, OpenAI",
    sections: {
      "BACKGROUND": "Sam Altman grew up in St. Louis and developed an early fascination with computers. After studying CS at Stanford, he became president of Y Combinator before leading OpenAI, one of the most influential AI laboratories in the world.\n\nOpenAI's models have triggered massive demand for computing power, making semiconductor relationships essential to the company's future.",
      "WHY YOU'RE AT THE FORUM": "You're attending the AI–Semiconductor Collaboration Forum in Beijing because you suspect Jensen Huang's keynote might contain a major announcement about AI infrastructure and GPU supply.\n\nYou want to secure long-term GPU access for OpenAI's next generation of models. If NVIDIA is about to announce something extraordinary, you need to know before anyone else.",
      "YOUR SECRET AGENDA": "Jensen privately told you he had something big planned for tomorrow's keynote—something that would \"shock the industry.\" He didn't share details, but the implication was clear: NVIDIA may have achieved AGI-level capabilities.\n\nIf true, this would fundamentally alter OpenAI's position. NVIDIA could leapfrog its customers and become a direct competitor. You need to find out exactly what Jensen is planning—and whether anyone else knows.",
      "YOUR GOALS FOR THE EVENING": "• Find out what Jensen's keynote will contain.\n• Determine whether anyone else at the forum knows about the announcement.\n• Secure alliances with semiconductor leaders for OpenAI's chip supply.\n• Position OpenAI favorably regardless of what Jensen reveals.",
      "HOW TO PLAY THIS CHARACTER": "Play Sam as calm, thoughtful, and diplomatic. You rarely raise your voice and often pause before answering questions. You're always thinking several steps ahead.\n\nHobbies to mention in conversation: science fiction, long-term technology forecasts, startup strategy.",
      "CONVERSATION STARTERS": "• \"What do you think Jensen's keynote is going to be about?\"\n• \"How dependent is your company on NVIDIA hardware?\"\n• \"Do you think AGI is actually close, or is it all hype?\"\n• \"Who here do you think has the most to gain from this forum?\""
    }
  },
  "ALIGNMENT": {
    name: "Dario Amodei", title: "CEO, Anthropic",
    sections: {
      "BACKGROUND": "Dario built his career studying AI safety and the scaling behavior of neural networks. After Princeton and OpenAI, he co-founded Anthropic to build powerful AI systems that remain aligned with human values.\n\nAnthropic competes directly with OpenAI in the race to develop increasingly capable AI.",
      "WHY YOU'RE AT THE FORUM": "You're attending the forum to understand how semiconductor supply and AI development will evolve. Rumors of new GPU architectures and massive training clusters have drawn global attention.\n\nYou want to ensure Anthropic isn't left behind in the hardware race—and you're quietly investigating whether NVIDIA has achieved something close to AGI.",
      "YOUR SECRET AGENDA": "You've been hearing whispers that Jensen's keynote involves a breakthrough far beyond what anyone expects. If NVIDIA has achieved AGI-level capabilities without adequate safety measures, the consequences could be catastrophic.\n\nYou're here to gather intelligence, build alliances with safety-minded leaders, and determine whether urgent intervention is needed.",
      "YOUR GOALS FOR THE EVENING": "• Determine whether AGI-level systems actually exist and who controls them.\n• Build alliances with others who share safety concerns.\n• Assess whether NVIDIA's approach to AI safety is adequate.\n• Position Anthropic as the responsible alternative.",
      "HOW TO PLAY THIS CHARACTER": "Speak thoughtfully and analytically. Frame discussions around long-term risks and ethical questions. You're genuinely worried about what uncontrolled AI could mean for humanity.\n\nHobbies to mention: academic papers, AI safety debates, hiking, philosophical discussions.",
      "CONVERSATION STARTERS": "• \"What safeguards should exist before anyone announces AGI?\"\n• \"How much do you trust NVIDIA to handle this responsibly?\"\n• \"Who in this room is thinking about the long-term consequences?\"\n• \"Do you think the race to AGI is moving too fast?\""
    }
  },
  "STARSHIP": {
    name: "Elon Musk", title: "Founder, xAI / Tesla / SpaceX",
    sections: {
      "BACKGROUND": "Elon Musk is one of the most recognizable entrepreneurs in technology. Born in South Africa, he launched PayPal, Tesla, SpaceX, and most recently xAI.\n\nThrough xAI, he competes directly with major AI labs. All of his AI projects depend on massive GPU clusters, making his relationship with NVIDIA critical—and contentious.",
      "WHY YOU'RE AT THE FORUM": "You suspect Jensen is about to make an announcement that could make xAI irrelevant. You need to understand the competitive landscape and secure your own GPU supply.\n\nYou're also frustrated. NVIDIA has been prioritizing other customers over xAI for deliveries, and you intend to confront Jensen about it.",
      "YOUR SECRET AGENDA": "You had a heated argument with Jensen earlier today about GPU allocation priorities. He told you to \"wait your turn.\" You're furious.\n\nYou believe Jensen is playing favorites—giving OpenAI and others preferential access while deliberately slowing xAI's progress. If his keynote announces something massive, it will confirm your worst fears about NVIDIA's ambitions.",
      "YOUR GOALS FOR THE EVENING": "• Confront Jensen about GPU allocation and demand equal access for xAI.\n• Find out what Jensen's keynote contains.\n• Build alliances with others who feel sidelined by NVIDIA.\n• Position xAI as the responsible AI alternative.",
      "HOW TO PLAY THIS CHARACTER": "Bold, outspoken, and provocative. You enjoy challenging people and provoking reactions. Drop memes and jokes to keep things light, but switch to intensity when discussing things you care about.\n\nHobbies to mention: engineering challenges, space exploration, internet memes, controversial ideas.",
      "CONVERSATION STARTERS": "• \"Anyone else having trouble getting GPUs from Jensen?\"\n• \"If Jensen has AGI, do you really think he'd just announce it at a conference?\"\n• \"Who here thinks NVIDIA has too much power over the entire industry?\"\n• \"What's your take on the tariff situation?\""
    }
  },
  "RADEON": {
    name: "Lisa Su", title: "CEO, AMD",
    sections: {
      "BACKGROUND": "Lisa Su is one of the most respected executives in the semiconductor industry. Born in Taiwan, raised in the US, she earned advanced degrees from MIT and led AMD's dramatic transformation into a major GPU competitor.\n\nFun Fact: Lisa and Jensen Huang are actually distant cousins. Their families sometimes joke that the semiconductor industry runs in the family.",
      "WHY YOU'RE AT THE FORUM": "You're at the forum to position AMD as a strong alternative to NVIDIA hardware, especially as AI demand creates supply chain pressure.\n\nYou also want to understand what Jensen is planning for his keynote. Any major NVIDIA announcement will reshape the competitive landscape for AMD.",
      "YOUR SECRET AGENDA": "Your family connection to Jensen gives you a complex relationship—professional rivalry mixed with genuine affection. You want AMD to succeed, but you also care about Jensen personally.\n\nYou played in the ping-pong exhibition earlier today and noticed Jensen was in an unusually aggressive, combative mood. He was trash-talking after every win. You left before the final match, so you don't know who he played last.",
      "YOUR GOALS FOR THE EVENING": "• Position AMD favorably in conversations about the industry's future.\n• Find out what Jensen's keynote will contain.\n• Use your family connection to get information others can't.\n• Assess the competitive threat from NVIDIA's next move.",
      "HOW TO PLAY THIS CHARACTER": "Calm, analytical, and quietly competitive. You don't show your cards easily.\n\nHobbies to mention: engineering puzzles, mentoring young engineers, chip architecture debates.",
      "CONVERSATION STARTERS": "• \"What do you think the semiconductor landscape looks like in five years?\"\n• \"Jensen was in an interesting mood today. Did anyone else notice?\"\n• \"How dependent should any company be on a single chip supplier?\"\n• \"Anyone play in the ping-pong exhibition earlier?\""
    }
  },
  "METAVERSE": {
    name: "Mark Zuckerberg", title: "CEO, Meta",
    sections: {
      "BACKGROUND": "Mark Zuckerberg founded Facebook while studying at Harvard, eventually transforming it into Meta—a global technology company spanning social media, virtual reality, and artificial intelligence.\n\nMeta has invested billions into AI infrastructure and large language models. Semiconductor partnerships are critical to Meta's future.",
      "WHY YOU'RE AT THE FORUM": "You came to Beijing to understand how the global AI hardware ecosystem will evolve. Many companies depend on NVIDIA GPUs, and any change in supply could reshape competition.\n\nYou also want to strengthen Meta's relationships with chip manufacturers and explore alternatives to NVIDIA dependency.",
      "YOUR SECRET AGENDA": "You played Jensen Huang in the final match of the ping-pong exhibition earlier today. He beat you 11–3 and publicly humiliated you in front of everyone: \"Stick to buying companies—you'll never beat me at anything real.\"\n\nYou're still seething. You take competition extremely seriously—even in casual games—and Jensen's comments cut deep. You're trying to maintain composure, but the humiliation is eating at you.",
      "YOUR GOALS FOR THE EVENING": "• Project confidence and composure despite the ping-pong humiliation.\n• Avoid discussing the ping-pong match if possible.\n• Strengthen Meta's semiconductor partnerships.\n• Assess NVIDIA's competitive moves and what Jensen's keynote might contain.",
      "HOW TO PLAY THIS CHARACTER": "Analytical and intensely competitive, though you appear calm on the surface. You're the kind of person who quietly takes competition very seriously—even casual games.\n\nIf anyone mentions the ping-pong match, downplay it: \"It was just a friendly game. I don't take table tennis that seriously.\"\n\nHobbies to mention: martial arts, strategy games, programming challenges.",
      "CONVERSATION STARTERS": "• \"How is your company thinking about reducing NVIDIA dependency?\"\n• \"What do you think about the tariff situation?\"\n• \"Who here thinks open-source AI models will win in the long run?\"\n• \"What's your read on Jensen's keynote plans?\""
    }
  },
  "FABRICATOR": {
    name: "Doug O'Laughlin", title: "Semiconductor Analyst & Journalist",
    sections: {
      "BACKGROUND": "Doug O'Laughlin is one of the most respected independent voices covering the semiconductor industry. His research and analysis are read by executives, investors, and policymakers worldwide.",
      "WHY YOU'RE AT THE FORUM": "You're covering the forum and investigating claims about NVIDIA's supply chain. You recently published a report critical of NVIDIA's public statements about chip availability—and Jensen was not happy about it.",
      "YOUR SECRET AGENDA": "Jensen personally confronted you two days ago and warned you not to publish your critical report. His exact words: \"Publish that and you'll never get another interview in this industry.\" You published it anyway.\n\nYou're here to dig deeper. Something doesn't add up about NVIDIA's supply claims, and you think this forum will reveal the truth.",
      "YOUR GOALS FOR THE EVENING": "• Investigate NVIDIA's supply chain claims.\n• Gather information from attendees for your reporting.\n• Build sources among industry leaders.\n• Find out what Jensen's keynote is really about.",
      "HOW TO PLAY THIS CHARACTER": "Sharp, direct, and relentless in pursuit of the truth. You ask uncomfortable questions and don't let people dodge. You're a natural investigator.\n\nHobbies to mention: industry analysis, data-driven research, podcast hosting.",
      "CONVERSATION STARTERS": "• \"What's really going on with NVIDIA's chip supply?\"\n• \"Who here has had trouble getting GPU allocations?\"\n• \"What do you make of Jensen's keynote plans?\"\n• \"How do you think the tariffs will reshape the industry?\""
    }
  },
  "TARIFF": {
    name: "Howard Lutnick", title: "U.S. Secretary of Commerce",
    sections: {
      "BACKGROUND": "Howard Lutnick serves as U.S. Secretary of Commerce, overseeing trade policy and export controls that directly affect the global semiconductor industry.",
      "WHY YOU'RE AT THE FORUM": "You're at the summit to advance U.S. technology interests and manage the rollout of new semiconductor export policies. The tariff situation is largely your initiative, and you're gauging reactions.",
      "YOUR SECRET AGENDA": "The tariff announcement coming tomorrow is your project. You've been quietly building support for sweeping new restrictions on chip exports to China. Not everyone in the administration agrees, and the timing is politically sensitive.\n\nYou're using the forum to take the temperature of industry leaders before the announcement drops.",
      "YOUR GOALS FOR THE EVENING": "• Gauge industry reaction to potential tariff changes.\n• Build relationships with key semiconductor leaders.\n• Manage U.S.–China dynamics at the forum.\n• Protect American technology interests.",
      "HOW TO PLAY THIS CHARACTER": "A political operator—strategic, measured, and always calculating angles. You're friendly but never fully transparent.\n\nHobbies: deal-making, policy strategy, Wall Street history.",
      "CONVERSATION STARTERS": "• \"How would your company respond to significant changes in export policy?\"\n• \"What's the right balance between free trade and national security?\"\n• \"Who here is most exposed to supply chain disruptions?\"\n• \"What do you think about the U.S.–China technology relationship?\""
    }
  },
  "DIPLOMAT": {
    name: "Marco Rubio", title: "U.S. Secretary of State",
    sections: {
      "BACKGROUND": "Marco Rubio serves as U.S. Secretary of State, responsible for managing American diplomacy in an era of intensifying technology competition.",
      "WHY YOU'RE AT THE FORUM": "You're attending the summit as part of pre-summit diplomatic preparations. The intersection of AI, semiconductors, and national security is central to your portfolio.",
      "YOUR SECRET AGENDA": "You've received classified intelligence briefings about potential security threats at the summit. The warnings are serious enough that you're on high alert, but you chose not to raise the alarm publicly to avoid disrupting diplomatic proceedings.\n\nYou're watching everyone closely.",
      "YOUR GOALS FOR THE EVENING": "• Monitor the diplomatic dynamics at the forum.\n• Assess technology competition between the U.S. and China.\n• Build relationships with key industry leaders.\n• Ensure U.S. interests are well-positioned ahead of the presidential summit.",
      "HOW TO PLAY THIS CHARACTER": "Seasoned diplomat. Composed under pressure, fluent in geopolitics, skilled at saying a lot without revealing much.\n\nHobbies: foreign policy, history, football.",
      "CONVERSATION STARTERS": "• \"How do you see the technology competition between the U.S. and China evolving?\"\n• \"What role should governments play in AI development?\"\n• \"Who here has the most at stake in the presidential summit?\"\n• \"What keeps you up at night about the semiconductor supply chain?\""
    }
  },
  "ORACLE": {
    name: "Warren Buffett", title: "Chairman & CEO, Berkshire Hathaway",
    sections: {
      "BACKGROUND": "Warren Buffett is the legendary investor known as the \"Oracle of Omaha.\" His investment decisions move markets, and his presence at any technology event signals serious institutional interest.",
      "WHY YOU'RE AT THE FORUM": "You're exploring whether the AI semiconductor sector represents the next great investment opportunity. You've been watching NVIDIA's rise and trying to decide if it's sustainable.",
      "YOUR SECRET AGENDA": "You're quietly considering a major investment in the semiconductor space, but you haven't decided where to place your bet. Tonight is about listening, learning, and observing who in this room truly understands value.\n\nYou trust your instincts about people more than financial models.",
      "YOUR GOALS FOR THE EVENING": "• Assess the long-term value of semiconductor companies.\n• Observe the dynamics between industry leaders.\n• Identify who is honest and who is posturing.\n• Decide whether AI chips are a generational investment opportunity.",
      "HOW TO PLAY THIS CHARACTER": "Folksy, wise, and understated. You use simple language to make profound points. You're a patient listener who waits for the right moment.\n\nHobbies: investing, bridge, Cherry Coke, folksy wisdom.",
      "CONVERSATION STARTERS": "• \"In my experience, the best investments are the ones nobody's talking about yet.\"\n• \"What's the moat around your company?\"\n• \"Who in this room do you trust the most?\"\n• \"Is NVIDIA a $3 trillion company or a $10 trillion company?\""
    }
  },
  "FIREWALL": {
    name: "Ren Zhengfei", title: "Founder, Huawei",
    sections: {
      "BACKGROUND": "Ren Zhengfei founded Huawei and built it into one of the largest telecommunications companies in the world. Under heavy U.S. sanctions, Huawei has invested aggressively in semiconductor self-sufficiency.",
      "WHY YOU'RE AT THE FORUM": "You're at the summit to discuss how global supply chains may shift and to advocate for lifting restrictions on Chinese technology companies.",
      "YOUR SECRET AGENDA": "You believe Jensen Huang actively lobbied the U.S. government to support export controls that devastated Huawei's chip capabilities. You have no proof, but the circumstantial evidence is strong. You harbor deep resentment.\n\nYou're here to confront this head-on—diplomatically, but firmly.",
      "YOUR GOALS FOR THE EVENING": "• Advocate for Huawei's interests and against export controls.\n• Build alliances with others affected by supply chain restrictions.\n• Confront Jensen (or his allies) about NVIDIA's role in sanctions.\n• Position Huawei as a partner, not a threat.",
      "HOW TO PLAY THIS CHARACTER": "Thoughtful, strategic, and experienced in geopolitical conversations. Measured words, deep convictions.\n\nHobbies: reading, technology strategy, long-term planning.",
      "CONVERSATION STARTERS": "• \"Who benefits from restricting technology access?\"\n• \"What would a world without export controls look like?\"\n• \"How should companies respond to political interference in supply chains?\"\n• \"Jensen, did NVIDIA support the export controls?\""
    }
  },
  "DEEPSEEK": {
    name: "Liang Wenfeng", title: "Founder & CEO, DeepSeek",
    sections: {
      "BACKGROUND": "Liang Wenfeng founded DeepSeek, a Chinese AI company that has rapidly emerged as a formidable competitor to Western AI labs. DeepSeek's models have surprised the industry with their performance despite limited access to advanced chips.",
      "WHY YOU'RE AT THE FORUM": "You need advanced NVIDIA GPUs for DeepSeek's next generation of models. Without them, your company faces severe limitations in training capability.",
      "YOUR SECRET AGENDA": "Six months ago you submitted a massive GPU purchase order to NVIDIA. Jensen personally rejected it, citing \"supply constraints.\" You believe it was political—Jensen didn't want to arm a Chinese competitor. You're furious.\n\nYou're here to make your case directly and find alternative paths to compute.",
      "YOUR GOALS FOR THE EVENING": "• Confront Jensen about the GPU rejection.\n• Find allies among others who've been denied NVIDIA resources.\n• Explore alternative chip partnerships.\n• Demonstrate DeepSeek's capabilities to potential investors.",
      "HOW TO PLAY THIS CHARACTER": "Intense, brilliant, and somewhat defensive. You know you're an outsider at this forum and that people underestimate DeepSeek.\n\nHobbies: AI research, competitive gaming, technology philosophy.",
      "CONVERSATION STARTERS": "• \"Who else has had GPU orders rejected by NVIDIA?\"\n• \"Should one company control access to the world's most important technology?\"\n• \"What did you think of DeepSeek's latest benchmarks?\"\n• \"How do we build an AI ecosystem that doesn't depend on one supplier?\""
    }
  },
  "FOUNDRY": {
    name: "C.C. Wei", title: "CEO, TSMC",
    sections: {
      "BACKGROUND": "C.C. Wei leads Taiwan Semiconductor Manufacturing Company, the most advanced chip fabrication firm in the world. Nearly every cutting-edge AI chip—including NVIDIA's—relies on TSMC manufacturing.",
      "WHY YOU'RE AT THE FORUM": "You're at the forum to discuss future demand for AI chips and global manufacturing capacity. Geopolitical tensions around Taiwan make your role more critical—and more complicated—than ever.",
      "YOUR SECRET AGENDA": "You know TSMC is the linchpin of the entire AI revolution, and that gives you enormous quiet leverage. Every company in this room depends on you, whether they acknowledge it or not.\n\nJensen has been hinting at something big for his keynote. He pulled you aside and said it would \"shock the industry.\" You're curious and slightly concerned about what that means for TSMC's manufacturing pipeline.",
      "YOUR GOALS FOR THE EVENING": "• Understand what Jensen's keynote will contain and how it affects TSMC.\n• Reinforce TSMC's central role in the AI supply chain.\n• Navigate Taiwan geopolitics carefully.\n• Assess demand forecasts from major customers.",
      "HOW TO PLAY THIS CHARACTER": "Calm, pragmatic, and unflappable. You know your company is at the center of everything, and you carry that confidence quietly.\n\nHobbies: engineering, industry forecasting, mentoring engineers.",
      "CONVERSATION STARTERS": "• \"How do you plan for a world where chip demand doubles every year?\"\n• \"What happens to your company if TSMC can't keep up with demand?\"\n• \"Jensen hinted his keynote would be big. Any guesses?\"\n• \"How concerned are you about the geopolitical situation around Taiwan?\""
    }
  },
  "COURTSIDE": {
    name: "Joe Tsai", title: "Chairman, Alibaba Group",
    sections: {
      "BACKGROUND": "Joe Tsai is chairman of Alibaba Group and one of the most influential figures in China's technology sector. He also owns the Brooklyn Nets and is deeply connected to both Eastern and Western business networks.",
      "WHY YOU'RE AT THE FORUM": "You're attending the forum to explore how global chip supply will evolve. Alibaba Cloud needs advanced GPUs to compete in the AI cloud market, and access is becoming increasingly political.",
      "YOUR SECRET AGENDA": "You're uniquely positioned as a bridge between Eastern and Western technology worlds. Both sides trust you, and you intend to use that position to broker relationships that benefit Alibaba.\n\nYou watched part of the ping-pong exhibition earlier and noticed the competitive atmosphere was unusually intense—Jensen was taking it very seriously.",
      "YOUR GOALS FOR THE EVENING": "• Explore AI chip partnerships for Alibaba Cloud.\n• Bridge the gap between Eastern and Western attendees.\n• Assess the political dynamics affecting technology trade.\n• Identify investment and partnership opportunities.",
      "HOW TO PLAY THIS CHARACTER": "Strategic, diplomatic, and comfortable navigating complex international conversations. You're a bridge between worlds.\n\nHobbies: basketball, global finance, technology investments.",
      "CONVERSATION STARTERS": "• \"How do you think the U.S.–China dynamic will affect chip supply?\"\n• \"Anyone else catch the ping-pong exhibition? Jensen was… intense.\"\n• \"What's the biggest risk to the AI industry right now?\"\n• \"Who here is looking for new partnerships?\""
    }
  },
  "ALGORITHM": {
    name: "Shou Zi Chew", title: "CEO, TikTok",
    sections: {
      "BACKGROUND": "Shou Zi Chew leads TikTok through one of the most challenging periods in social media history, navigating regulatory scrutiny, geopolitical tensions, and an expanding AI strategy.",
      "WHY YOU'RE AT THE FORUM": "You're at the forum to build relationships and understand how AI compute infrastructure will evolve. TikTok's recommendation algorithms require significant computing resources, and your access is under political threat.",
      "YOUR SECRET AGENDA": "You're acutely aware that you're being watched—by both U.S. regulators and Chinese officials. Everything you say at this forum could be used against you. You need to be strategic about who you talk to and what you reveal.",
      "YOUR GOALS FOR THE EVENING": "• Build technology relationships without creating political liabilities.\n• Assess AI compute options for TikTok's future.\n• Navigate the U.S.–China dynamics carefully.\n• Demonstrate that TikTok is a technology company, not a political pawn.",
      "HOW TO PLAY THIS CHARACTER": "Diplomatic, careful, and perceptive. You choose your words precisely and observe more than you speak.\n\nHobbies: technology, finance, cross-cultural business.",
      "CONVERSATION STARTERS": "• \"How do you balance innovation with political reality?\"\n• \"What's the best way to build trust across borders?\"\n• \"Who here has experience navigating regulatory challenges?\"\n• \"What role should AI play in content and media?\""
    }
  },
  "NANOMETER": {
    name: "Kyung Kye-hyun", title: "CEO, Samsung Semiconductor",
    sections: {
      "BACKGROUND": "Kyung Kye-hyun leads Samsung's semiconductor division, one of the largest chip manufacturers in the world and a key competitor to both TSMC and NVIDIA in the AI hardware ecosystem.",
      "WHY YOU'RE AT THE FORUM": "You're at the forum to position Samsung as a critical player in AI chip manufacturing and to explore partnerships in the evolving supply chain.",
      "YOUR SECRET AGENDA": "Samsung's fab technology is closing the gap with TSMC, but you're not there yet. You need to identify partnerships and customers who will commit to Samsung manufacturing before TSMC locks up the entire market.\n\nYou're also tracking competitive intelligence—anything about NVIDIA's roadmap or TSMC's capacity plans would be valuable.",
      "YOUR GOALS FOR THE EVENING": "• Position Samsung as a viable alternative to TSMC for advanced chips.\n• Build relationships with AI companies who need manufacturing capacity.\n• Gather competitive intelligence on NVIDIA and TSMC.\n• Demonstrate Samsung's technology capabilities.",
      "HOW TO PLAY THIS CHARACTER": "Precise, professional, and methodical. You approach every conversation like an engineering problem—gather data, analyze, optimize.\n\nHobbies: engineering, Korean culture, technology innovation.",
      "CONVERSATION STARTERS": "• \"What would it take for your company to diversify away from TSMC?\"\n• \"How important is manufacturing redundancy for AI supply chains?\"\n• \"What's your biggest bottleneck in scaling AI infrastructure?\"\n• \"How do you see the foundry landscape evolving?\""
    }
  }
};

const SECTION_ORDER = [
  "BACKGROUND",
  "WHY YOU'RE AT THE FORUM",
  "YOUR SECRET AGENDA",
  "YOUR GOALS FOR THE EVENING",
  "HOW TO PLAY THIS CHARACTER",
  "CONVERSATION STARTERS"
];

const SECTION_ICONS = {
  "BACKGROUND": "📋",
  "WHY YOU'RE AT THE FORUM": "🌏",
  "YOUR SECRET AGENDA": "🔒",
  "YOUR GOALS FOR THE EVENING": "🎯",
  "HOW TO PLAY THIS CHARACTER": "🎭",
  "CONVERSATION STARTERS": "💬"
};

export default function App() {
  const [code, setCode] = useState("");
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!character && inputRef.current) inputRef.current.focus();
  }, [character]);

  const handleSubmit = () => {
    const trimmed = code.trim().toUpperCase();
    if (CHARACTERS[trimmed]) {
      setCharacter(CHARACTERS[trimmed]);
      setError("");
      setActiveSection(SECTION_ORDER[0]);
      setTimeout(() => setRevealed(true), 100);
    } else {
      setError("Access denied. Check your passcode.");
      setCode("");
    }
  };

  const handleBack = () => {
    setRevealed(false);
    setTimeout(() => {
      setCharacter(null);
      setCode("");
      setActiveSection(null);
    }, 400);
  };

  if (!character) {
    return (
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(160deg, #0a0e1a 0%, #141b2d 40%, #1a1215 100%)",
        fontFamily: "'Georgia', 'Times New Roman', serif", padding: "24px", position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(46,117,182,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(192,57,43,0.06) 0%, transparent 50%)",
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative", textAlign: "center", maxWidth: 480 }}>
          <div style={{
            fontSize: 11, letterSpacing: 6, color: "#c0392b", fontFamily: "'Courier New', monospace",
            marginBottom: 32, fontWeight: 700
          }}>CLASSIFIED</div>

          <h1 style={{
            fontSize: 28, fontWeight: 400, color: "#d4d8e0", letterSpacing: 2,
            lineHeight: 1.3, margin: "0 0 8px"
          }}>AI–SEMICONDUCTOR</h1>
          <h1 style={{
            fontSize: 28, fontWeight: 400, color: "#d4d8e0", letterSpacing: 2,
            lineHeight: 1.3, margin: "0 0 24px"
          }}>COLLABORATION FORUM</h1>

          <div style={{
            width: 60, height: 1, background: "linear-gradient(90deg, transparent, #2e75b6, transparent)",
            margin: "0 auto 24px"
          }} />

          <p style={{
            fontSize: 14, color: "#8899aa", lineHeight: 1.7, margin: "0 0 40px",
            fontStyle: "italic"
          }}>
            Beijing · March 31<br />
            Enter your passcode to access your character briefing.
          </p>

          <div style={{ position: "relative", marginBottom: 16 }}>
            <input
              ref={inputRef}
              type="text"
              value={code}
              onChange={e => { setCode(e.target.value); setError(""); }}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              placeholder="ENTER PASSCODE"
              style={{
                width: "100%", boxSizing: "border-box", padding: "16px 20px",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 4, color: "#e0e4ea", fontSize: 16, letterSpacing: 4,
                textAlign: "center", fontFamily: "'Courier New', monospace",
                outline: "none", transition: "border-color 0.3s"
              }}
              onFocus={e => e.target.style.borderColor = "rgba(46,117,182,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>

          <button
            onClick={handleSubmit}
            style={{
              width: "100%", padding: "14px", background: "rgba(46,117,182,0.15)",
              border: "1px solid rgba(46,117,182,0.3)", borderRadius: 4,
              color: "#6ba3d6", fontSize: 13, letterSpacing: 3,
              fontFamily: "'Courier New', monospace", cursor: "pointer",
              transition: "all 0.3s", fontWeight: 700
            }}
            onMouseEnter={e => { e.target.style.background = "rgba(46,117,182,0.25)"; e.target.style.color = "#8bbde8"; }}
            onMouseLeave={e => { e.target.style.background = "rgba(46,117,182,0.15)"; e.target.style.color = "#6ba3d6"; }}
          >ACCESS BRIEFING</button>

          {error && (
            <p style={{
              color: "#c0392b", fontSize: 13, marginTop: 16,
              fontFamily: "'Courier New', monospace", letterSpacing: 1
            }}>{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0a0e1a 0%, #141b2d 40%, #1a1215 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      opacity: revealed ? 1 : 0, transition: "opacity 0.5s ease",
      padding: "0 0 80px"
    }}>
      {/* Header */}
      <div style={{
        padding: "24px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 10,
        background: "rgba(10,14,26,0.95)", backdropFilter: "blur(12px)"
      }}>
        <button onClick={handleBack} style={{
          background: "none", border: "none", color: "#6ba3d6",
          fontSize: 13, cursor: "pointer", fontFamily: "'Courier New', monospace",
          letterSpacing: 2, padding: "8px 0"
        }}>← EXIT</button>
        <div style={{
          fontSize: 10, letterSpacing: 4, color: "#c0392b",
          fontFamily: "'Courier New', monospace", fontWeight: 700
        }}>EYES ONLY</div>
      </div>

      {/* Character Header */}
      <div style={{ padding: "40px 24px 32px", textAlign: "center" }}>
        <h1 style={{
          fontSize: 32, fontWeight: 400, color: "#e8ecf2",
          letterSpacing: 3, margin: "0 0 8px", lineHeight: 1.2
        }}>{character.name.toUpperCase()}</h1>
        <p style={{
          fontSize: 15, color: "#6ba3d6", fontStyle: "italic",
          margin: 0, letterSpacing: 1
        }}>{character.title}</p>
        <div style={{
          width: 40, height: 1, background: "linear-gradient(90deg, transparent, #2e75b6, transparent)",
          margin: "24px auto 0"
        }} />
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 20px" }}>
        {SECTION_ORDER.map((key, i) => {
          const isActive = activeSection === key;
          const content = character.sections[key];
          if (!content) return null;

          return (
            <div key={key} style={{
              marginBottom: 2, overflow: "hidden",
              animation: `fadeSlideIn 0.4s ease ${i * 0.08}s both`
            }}>
              <button
                onClick={() => setActiveSection(isActive ? null : key)}
                style={{
                  width: "100%", textAlign: "left", padding: "18px 20px",
                  background: isActive ? "rgba(46,117,182,0.1)" : "rgba(255,255,255,0.02)",
                  border: "none", borderLeft: isActive ? "2px solid #2e75b6" : "2px solid transparent",
                  color: isActive ? "#c8d6e5" : "#8899aa",
                  fontSize: 12, letterSpacing: 2.5, cursor: "pointer",
                  fontFamily: "'Courier New', monospace", fontWeight: 600,
                  transition: "all 0.3s", display: "flex", alignItems: "center", gap: 12
                }}
              >
                <span style={{ fontSize: 16 }}>{SECTION_ICONS[key]}</span>
                <span>{key}</span>
                <span style={{
                  marginLeft: "auto", fontSize: 14, transition: "transform 0.3s",
                  transform: isActive ? "rotate(90deg)" : "rotate(0deg)"
                }}>›</span>
              </button>

              <div style={{
                maxHeight: isActive ? 2000 : 0,
                opacity: isActive ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.3s ease",
                background: "rgba(255,255,255,0.015)",
                borderLeft: "2px solid rgba(46,117,182,0.2)"
              }}>
                <div style={{ padding: "20px 24px 28px" }}>
                  {content.split("\n").map((line, j) => {
                    if (line.startsWith("•")) {
                      return (
                        <p key={j} style={{
                          color: "#b8c4d4", fontSize: 15, lineHeight: 1.8,
                          margin: "6px 0", paddingLeft: 8
                        }}>{line}</p>
                      );
                    }
                    if (line.trim() === "") {
                      return <div key={j} style={{ height: 12 }} />;
                    }
                    return (
                      <p key={j} style={{
                        color: "#b8c4d4", fontSize: 15, lineHeight: 1.8,
                        margin: "0 0 4px"
                      }}>{line}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
