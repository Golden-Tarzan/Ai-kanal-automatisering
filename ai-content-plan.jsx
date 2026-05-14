import { useState } from "react";

const phases = [
  {
    id: 1,
    emoji: "🎯",
    title: "VÄLJ DIN NISCH",
    subtitle: "Dag 1–2",
    color: "#FF6B35",
    steps: [
      {
        title: "Använd Nische Scoring Matrix",
        details: [
          "Lista 5 potentiella nichar",
          "Betygsätt varje nisch 1–5 på: Kunskap, Passion, Innehållsmängd, Minst ansträngning, Popularitet",
          "Välj den med högst totalpoäng",
        ],
      },
      {
        title: "Bästa AI-vänliga nichar (från Niche Cheat Sheet)",
        details: [
          "💰 Finance/Business — hög RPM, massor av AI-innehåll",
          "📜 History — evergreen, lätt att automatisera",
          "🚀 Space/Technology — stor publik, bildmaterial finns",
          "💪 Personal Development — tidlöst, hög engagemang",
          "🌍 Geopolitics — stor publik, bra för klipp",
        ],
      },
      {
        title: "Hitta lönsam sub-nisch",
        details: [
          "Sök på YouTube: [nisch] + faceless channel",
          "Filtrera: 'Senaste år', sortera på visningar",
          "Hitta kanaler med FÅ prenumeranter men MÅNGA visningar — det är din guldgruva",
          "Analysera deras 5 mest sedda videos — det är ditt innehållsmönster",
        ],
      },
    ],
  },
  {
    id: 2,
    emoji: "🛠️",
    title: "VERKTYG & KANALSETUP",
    subtitle: "Dag 3–5",
    color: "#4ECDC4",
    steps: [
      {
        title: "Skapa YouTube-kanalen",
        details: [
          "Välj ett kanalnamn som passar nischen (ex: 'HistoryVault', 'WealthCodex')",
          "Ladda upp kanalkonst + ikon (generera med Midjourney eller Canva AI)",
          "Skriv en SEO-optimerad kanalbeskrivning med Claude",
          "Aktivera monetisering-spårning — mål: 1000 prenumeranter + 4000 timmar",
        ],
      },
      {
        title: "2026 AI Tool Stack — installera dessa",
        details: [
          "✍️ Claude.ai — script, beskrivningar, SEO-titlar, captions",
          "🎙️ ElevenLabs — AI-röst (ersätter voice over artist)",
          "🎬 InVideo AI eller Pictory — AI-videoeditor (ersätter videoredigerare)",
          "🖼️ Canva AI + Adobe Firefly — thumbnails (ersätter designer)",
          "✂️ Opus Clip — automatisk klippning av långa videos till shorts",
          "📅 Metricool eller Buffer — automatisk schemaläggning",
          "📊 VidIQ — YouTube SEO-optimering",
          "📋 Notion — innehållskalender (ersätter Trello)",
        ],
      },
      {
        title: "Sätt upp Notion Content Board",
        details: [
          "Skapa kolumner: Idéer → Manus klart → Röst klar → Video klar → Klipp klara → Schemalagd → Publicerad",
          "Lägg till fält: Titel, Nyckelord, Plattform, Publiceringstid",
          "Koppla till Google Drive för fillagring",
        ],
      },
    ],
  },
  {
    id: 3,
    emoji: "🤖",
    title: "AI VIDEOPIPELINE",
    subtitle: "Dag 6–10 (första videon)",
    color: "#A78BFA",
    steps: [
      {
        title: "STEG 1 — Idé & Research (Claude)",
        details: [
          "Prompt: 'Du är en expert YouTube-strateg för [nisch]-kanaler. Ge mig 10 videoidéer med hög CTR-potential. Varje idé ska ha: titel, hook-mening, och varför den skulle prestera bra.'",
          "Välj den bästa idén baserat på sökvolym i VidIQ",
          "Be Claude om djupgående research: 'Researcha fakta om [ämne] och ge mig 10 fascinerande punkter med källhänvisningar'",
        ],
      },
      {
        title: "STEG 2 — Manus (Claude med HVR Method)",
        details: [
          "Prompt: 'Skriv ett 1500-ords YouTube-manus om [ämne] för en faceless kanal. Strukturera det med: Hook (0–30 sek som skapar nyfikenhet), Value (kärnan av berättelsen, faktatung), Retention (avslut som får dem att titta vidare). Undvik ord som kan demonetiseras.'",
          "Granska och godkänn manuset",
          "Kolla att inga förbjudna ord används (Demonetized Words PDF som guide)",
        ],
      },
      {
        title: "STEG 3 — AI-röst (ElevenLabs)",
        details: [
          "Gå till ElevenLabs.io → Speech Synthesis",
          "Välj en röst som matchar din nisch (professionell, auktoritativ för finance; mystisk för history)",
          "Klistra in manuset → generera → ladda ner MP3",
          "Tips: Välj 'Stability: 0.5' och 'Clarity: 0.75' för naturligt ljud",
        ],
      },
      {
        title: "STEG 4 — AI-videoediting (InVideo AI eller Pictory)",
        details: [
          "Ladda upp manuset + röstfilen till InVideo AI",
          "Välj 'YouTube Explainer' mall",
          "AI väljer automatiskt B-roll klipp som matchar manuset",
          "Regler: Max 3–5 sek per klipp (håller tempo), HD/4K-klipp, inga vattenstämplar",
          "Lägg till bakgrundsmusik (låg volym, royalty-free)",
          "Exportera i 1920x1080 (16:9) för YouTube",
        ],
      },
      {
        title: "STEG 5 — AI-thumbnail (Canva AI)",
        details: [
          "Öppna Canva → YouTube Thumbnail (1280x720)",
          "Använd Magic Media: 'Dramatic close-up of [ämne] for a YouTube thumbnail, high contrast, photorealistic'",
          "Tumregler: Max 4 ord text, ljust & mättat, ingen text i nedre högra hörn",
          "Skapa 2–3 varianter → A/B-testa med VidIQ",
        ],
      },
    ],
  },
  {
    id: 4,
    emoji: "✂️",
    title: "AI KLIPPNING & SOCIAL MEDIA",
    subtitle: "Samma dag som videon är klar",
    color: "#F59E0B",
    steps: [
      {
        title: "Automatisk klippning med Opus Clip",
        details: [
          "Ladda upp den färdiga YouTube-videon till Opus Clip",
          "Välj: 'Auto-identify viral moments'",
          "Opus Clip genererar automatiskt 5–10 klipp på 30–90 sekunder",
          "AI lägger till undertexter, emojis och score för varje klipp",
          "Välj de 3–5 klipp med högst 'Virality Score'",
        ],
      },
      {
        title: "Plattformsanpassning — så här skiljer det sig",
        details: [
          "📱 YouTube Shorts: 9:16 vertical, max 60 sek, snabb hook i 1:a sekunden, undertexter ALLTID",
          "🎵 TikTok: 9:16 vertical, 15–60 sek, trendig text overlay, energetisk start",
          "📸 Instagram Reels: 9:16 vertical, 30–90 sek, estetisk öppning, CTA i slutet",
          "👥 Facebook: Kan vara horisontell (16:9) eller vertikal, längre format ok (1–3 min)",
          "Opus Clip exporterar automatiskt rätt format per plattform",
        ],
      },
      {
        title: "SEO-optimerade captions (Claude)",
        details: [
          "Prompt: 'Skriv en [TikTok/Instagram/YouTube Shorts]-caption för en video om [ämne]. Inkludera: en hook-mening, 2–3 meningar med värde, CTA, och 10 relevanta hashtags. Anpassa tonen för [plattform]-publiken.'",
          "Generera unik caption för varje plattform — aldrig samma text",
          "Hashtag-strategi: 3 stora (#history #finance), 4 mellanstora (#historyfacts), 3 nischade (#forgottenhistory)",
        ],
      },
    ],
  },
  {
    id: 5,
    emoji: "📅",
    title: "AUTOMATISK PUBLICERING",
    subtitle: "Sätt upp en gång, kör automatiskt",
    color: "#10B981",
    steps: [
      {
        title: "Optimala publiceringstider per plattform",
        details: [
          "🔴 YouTube: Tis–Tor kl. 14–16 (din tidzon) — YouTube promotar nya videos aktivt dessa tider",
          "🎵 TikTok: Mån, Tis, Fre kl. 06–09 eller 19–23 — hög aktivitet morgon & kväll",
          "📸 Instagram: Mån, Ons, Fre kl. 11–13 eller 19–21",
          "👥 Facebook: Ons–Fre kl. 13–15",
        ],
      },
      {
        title: "Automatisera med Metricool",
        details: [
          "Koppla alla dina sociala konton till Metricool",
          "Ladda upp alla klipp med färdiga captions",
          "Schemalägg direkt i Metricool — ett klick publicerar till alla plattformar",
          "Aktivera 'Best Time to Post' funktionen — AI väljer optimal tid automatiskt",
          "Sätt upp veckoschema: 1 lång YouTube-video + 3–5 shorts/klipp per vecka",
        ],
      },
      {
        title: "YouTube SEO med VidIQ (innan publicering)",
        details: [
          "Analysera din titel i VidIQ — sikta på Keyword Score 70+",
          "Lägg till 8–12 tags baserade på VidIQ-förslag",
          "Skriv en 200+ ords beskrivning med Claude: primärt keyword i första meningen",
          "Lägg till kapitel-timestamps i beskrivningen — ökar viewer retention",
          "Välj rätt kategori och lägg till cards/end screens",
        ],
      },
    ],
  },
  {
    id: 6,
    emoji: "📈",
    title: "OPTIMERING & SKALNING",
    subtitle: "Löpande, från vecka 2+",
    color: "#EC4899",
    steps: [
      {
        title: "Veckovisa metrics att kolla (YouTube Studio)",
        details: [
          "Click-through Rate (CTR): Under 4%? Byt thumbnail och titel",
          "Average View Duration: Under 40%? Stärk hook i manus",
          "Subscriber Conversion Rate: Kolla vilket video-ämne ger flest prenumeranter",
          "Impressions: Ökar de? Om inte — testa nytt thumbnail-format",
        ],
      },
      {
        title: "Testa, förbättra, repetera (TEST-metoden)",
        details: [
          "Byt thumbnail på videos som underpresterar — enkel fix, stor effekt",
          "Testa olika titelformat: 'Hur X...' vs 'Den sanna historien om...' vs 'X dollars hemlighet'",
          "Kolla vilka klipp som presterar bäst på TikTok — gör fler videos i samma format",
          "Aldrig ändra för mycket på en gång — testa EN variabel i taget",
        ],
      },
      {
        title: "Skala upp när du hittar vinnare",
        details: [
          "En video presterar bra? Gör 5 liknande videos direkt",
          "Öka till 2 YouTube-videos/vecka när pipeline är stabil",
          "Starta en andra kanal i liknande nisch med samma AI-pipeline",
          "Klipp som går viralt → reposta om 30 dagar med ny caption",
        ],
      },
      {
        title: "Monetisering milstolpar",
        details: [
          "🎯 1000 prenumeranter + 4000 timmar → YouTube AdSense",
          "💰 10k följare på TikTok → TikTok Creator Fund",
          "🤝 5k–10k prenumeranter → Börja pitcha sponsorer i nischen",
          "📈 Lägg till affiliate-länkar i YouTube-beskrivningar från dag 1",
        ],
      },
    ],
  },
];

const toolStack = [
  { role: "Manus", tool: "Claude.ai", icon: "✍️", cost: "Gratis/20$/mån" },
  { role: "AI-röst", tool: "ElevenLabs", icon: "🎙️", cost: "~22$/mån" },
  { role: "Videoediting", tool: "InVideo AI", icon: "🎬", cost: "~25$/mån" },
  { role: "Thumbnail", tool: "Canva AI", icon: "🖼️", cost: "~13$/mån" },
  { role: "Klippning", tool: "Opus Clip", icon: "✂️", cost: "~19$/mån" },
  { role: "Schemaläggning", tool: "Metricool", icon: "📅", cost: "Gratis/22$/mån" },
  { role: "YouTube SEO", tool: "VidIQ", icon: "📊", cost: "Gratis/10$/mån" },
  { role: "Content Board", tool: "Notion", icon: "📋", cost: "Gratis" },
];

export default function App() {
  const [activePhase, setActivePhase] = useState(null);
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0F",
      color: "#E8E6E3",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0A0A0F 0%, #141420 50%, #0A0A0F 100%)",
        borderBottom: "1px solid #1E1E2E",
        padding: "40px 24px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          fontSize: "11px",
          letterSpacing: "4px",
          color: "#A78BFA",
          marginBottom: "12px",
          textTransform: "uppercase",
          fontFamily: "'Courier New', monospace",
        }}>
          TIMMY IVARSSON · AI CONTENT MACHINE · 2026
        </div>
        <h1 style={{
          fontSize: "clamp(26px, 6vw, 42px)",
          fontWeight: "900",
          margin: "0 0 8px",
          letterSpacing: "-1px",
          lineHeight: 1.1,
          color: "#F5F3F0",
        }}>
          HELAUTOMATISERAD<br />
          <span style={{ color: "#A78BFA" }}>AI-KANAL</span> PLAYBOOK
        </h1>
        <p style={{
          color: "#6B7280",
          fontSize: "14px",
          margin: "12px 0 0",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "1px",
        }}>
          Från noll → publicerad kanal med AI — utan att visa ansiktet
        </p>
      </div>

      <div style={{ padding: "24px 16px", maxWidth: "700px", margin: "0 auto" }}>

        {/* Tool Stack */}
        <div style={{
          background: "#0F0F1A",
          border: "1px solid #1E1E35",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "28px",
        }}>
          <div style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#4ECDC4",
            marginBottom: "14px",
            fontFamily: "'Courier New', monospace",
            textTransform: "uppercase",
          }}>
            ⚡ 2026 AI TOOL STACK
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {toolStack.map((t, i) => (
              <div key={i} style={{
                background: "#141420",
                border: "1px solid #1E1E35",
                borderRadius: "8px",
                padding: "10px 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <span style={{ fontSize: "18px" }}>{t.icon}</span>
                <div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "'Courier New', monospace" }}>{t.role}</div>
                  <div style={{ fontSize: "13px", fontWeight: "bold", color: "#E8E6E3" }}>{t.tool}</div>
                  <div style={{ fontSize: "10px", color: "#4ECDC4" }}>{t.cost}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: "12px",
            padding: "10px 14px",
            background: "rgba(167,139,250,0.08)",
            borderRadius: "8px",
            border: "1px solid rgba(167,139,250,0.2)",
            fontSize: "12px",
            color: "#A78BFA",
            fontFamily: "'Courier New', monospace",
          }}>
            💡 Total kostnad: ~100–120 USD/månad · Första intäkt möjlig inom 90 dagar
          </div>
        </div>

        {/* Phases */}
        {phases.map((phase) => (
          <div key={phase.id} style={{ marginBottom: "16px" }}>
            {/* Phase Header */}
            <button
              onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
              style={{
                width: "100%",
                background: activePhase === phase.id
                  ? `linear-gradient(135deg, ${phase.color}18 0%, #0F0F1A 100%)`
                  : "#0F0F1A",
                border: `1px solid ${activePhase === phase.id ? phase.color + "40" : "#1E1E35"}`,
                borderRadius: "12px",
                padding: "18px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: `${phase.color}20`,
                border: `1px solid ${phase.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                flexShrink: 0,
              }}>
                {phase.emoji}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: phase.color,
                  fontFamily: "'Courier New', monospace",
                  marginBottom: "3px",
                }}>
                  STEG {phase.id} · {phase.subtitle}
                </div>
                <div style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  color: "#F5F3F0",
                  letterSpacing: "-0.3px",
                }}>
                  {phase.title}
                </div>
              </div>
              <div style={{
                color: phase.color,
                fontSize: "18px",
                transform: activePhase === phase.id ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
              }}>›</div>
            </button>

            {/* Phase Content */}
            {activePhase === phase.id && (
              <div style={{
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
                {phase.steps.map((step, si) => (
                  <div key={si}>
                    <button
                      onClick={() => setActiveStep(activeStep === `${phase.id}-${si}` ? null : `${phase.id}-${si}`)}
                      style={{
                        width: "100%",
                        background: activeStep === `${phase.id}-${si}`
                          ? `${phase.color}10`
                          : "#0A0A12",
                        border: `1px solid ${activeStep === `${phase.id}-${si}` ? phase.color + "30" : "#1A1A28"}`,
                        borderRadius: "10px",
                        padding: "14px 16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        textAlign: "left",
                      }}
                    >
                      <div style={{
                        width: "26px",
                        height: "26px",
                        borderRadius: "6px",
                        background: `${phase.color}25`,
                        border: `1px solid ${phase.color}50`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        fontWeight: "bold",
                        color: phase.color,
                        fontFamily: "'Courier New', monospace",
                        flexShrink: 0,
                      }}>
                        {si + 1}
                      </div>
                      <div style={{
                        flex: 1,
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#D1CFC9",
                        letterSpacing: "-0.2px",
                      }}>
                        {step.title}
                      </div>
                      <div style={{
                        color: "#4B5563",
                        fontSize: "14px",
                        transform: activeStep === `${phase.id}-${si}` ? "rotate(90deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}>›</div>
                    </button>

                    {activeStep === `${phase.id}-${si}` && (
                      <div style={{
                        background: "#080810",
                        border: `1px solid ${phase.color}20`,
                        borderTop: "none",
                        borderRadius: "0 0 10px 10px",
                        padding: "14px 16px 14px 54px",
                        marginTop: "-4px",
                      }}>
                        {step.details.map((d, di) => (
                          <div key={di} style={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: di < step.details.length - 1 ? "10px" : 0,
                            alignItems: "flex-start",
                          }}>
                            <div style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: phase.color,
                              flexShrink: 0,
                              marginTop: "7px",
                            }} />
                            <div style={{
                              fontSize: "13px",
                              color: "#9CA3AF",
                              lineHeight: "1.6",
                              fontFamily: d.startsWith('"') ? "'Courier New', monospace" : "inherit",
                              background: d.startsWith('"') ? "rgba(255,255,255,0.03)" : "transparent",
                              padding: d.startsWith('"') ? "6px 10px" : "0",
                              borderRadius: d.startsWith('"') ? "6px" : "0",
                              border: d.startsWith('"') ? "1px solid #1E1E35" : "none",
                            }}>
                              {d}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Weekly Workflow Summary */}
        <div style={{
          background: "#0F0F1A",
          border: "1px solid #1E1E35",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "8px",
        }}>
          <div style={{
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#F59E0B",
            marginBottom: "16px",
            fontFamily: "'Courier New', monospace",
          }}>
            🗓️ VECKOSCHEMA — ÅTA DIG DETTA
          </div>
          {[
            { day: "MÅN", task: "Videoämne + research med Claude + VidIQ keyword research", color: "#FF6B35" },
            { day: "TIS", task: "Skriv manus med Claude → Generera röst i ElevenLabs", color: "#4ECDC4" },
            { day: "ONS", task: "Bygg video i InVideo AI → Skapa thumbnail i Canva", color: "#A78BFA" },
            { day: "TOR", task: "Publicera på YouTube (kl. 14:00) + Kör Opus Clip → 5 klipp", color: "#F59E0B" },
            { day: "FRE", task: "Schemalägg alla klipp i Metricool för helgen", color: "#10B981" },
            { day: "LÖR", task: "Klipp publiceras automatiskt (TikTok, Instagram, Shorts)", color: "#EC4899" },
            { day: "SÖN", task: "Granska metrics → Justera thumbnail/titel om CTR < 4%", color: "#6B7280" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
              marginBottom: i < 6 ? "10px" : 0,
              paddingBottom: i < 6 ? "10px" : 0,
              borderBottom: i < 6 ? "1px solid #141420" : "none",
            }}>
              <div style={{
                minWidth: "38px",
                fontSize: "10px",
                fontWeight: "bold",
                color: item.color,
                fontFamily: "'Courier New', monospace",
                letterSpacing: "1px",
                paddingTop: "2px",
              }}>
                {item.day}
              </div>
              <div style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: "1.5" }}>
                {item.task}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center",
          padding: "24px 0 8px",
          fontSize: "11px",
          color: "#374151",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "1px",
        }}>
          TRYCK PÅ VARJE STEG FÖR DETALJERADE INSTRUKTIONER
        </div>
      </div>
    </div>
  );
}
