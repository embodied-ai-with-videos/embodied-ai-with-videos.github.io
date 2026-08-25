"use client";

import syllabus from "./syllabus.md?raw";

type Section = { title: string; body: string };
type Lecture = { number: number; title: string; description?: string; body: string };

const courseDescription =
  "How can an intelligent agent learn physical skills from internet-scale video? This course connects observational learning for robotics with the latest advances in machine learning to extract and predict useful cues from video datasets.";

const classDates = [
  ["Sep 1", "Sep 3"],
  ["Sep 8", "Sep 10"],
  ["Sep 15", "Sep 17"],
  ["Sep 22", "Sep 24"],
  ["Sep 29", "Oct 1"],
  ["Oct 6", "Oct 8"],
  ["Oct 13", "Oct 15"],
  ["Oct 20", "Oct 27"],
  ["Oct 29", "Nov 3"],
  ["Nov 5", "Nov 10"],
  ["Nov 12", "Nov 17"],
  ["Nov 19", "Dec 1"],
  ["Dec 3", "Dec 8"],
  ["Dec 10"],
];

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function inlineMarkdown(value: string) {
  return escapeHtml(value)
    .replace(
      /\[([^\]]+)\]\((https?:\/\/(?:[^()]|\([^()]*\))+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1<span aria-hidden="true">↗</span></a>',
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/(^|\s)\*([^*]+)\*/g, "$1<em>$2</em>");
}

function markdownToHtml(markdown: string) {
  const lines = markdown.trim().split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let list: "ul" | "ol" | null = null;

  const flushParagraph = () => {
    if (paragraph.length) html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (list) html.push(`</${list}>`);
    list = null;
  };

  lines.forEach((line) => {
    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    const bullet = line.match(/^[-*]\s+(.+)$/);
    const numbered = line.match(/^\d+\.\s+(.+)$/);

    if (!line.trim()) {
      flushParagraph();
      closeList();
    } else if (line.trim() === "---") {
      flushParagraph();
      closeList();
    } else if (heading) {
      flushParagraph();
      closeList();
      const level = Math.min(4, heading[1].length + 1);
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
    } else if (line.startsWith(">")) {
      flushParagraph();
      closeList();
      html.push(`<blockquote>${inlineMarkdown(line.replace(/^>\s?/, ""))}</blockquote>`);
    } else if (bullet || numbered) {
      flushParagraph();
      const nextList = bullet ? "ul" : "ol";
      if (list !== nextList) {
        closeList();
        list = nextList;
        html.push(`<${list}>`);
      }
      html.push(`<li>${inlineMarkdown((bullet || numbered)![1])}</li>`);
    } else {
      closeList();
      paragraph.push(line.trim());
    }
  });

  flushParagraph();
  closeList();
  return html.join("");
}

function splitSections(markdown: string): Section[] {
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];
  return matches.map((match, index) => ({
    title: match[1].trim(),
    body: markdown
      .slice(match.index! + match[0].length, matches[index + 1]?.index ?? markdown.length)
      .trim(),
  }));
}

function splitLectures(markdown: string): Lecture[] {
  const matches = [...markdown.matchAll(/^### Lecture (\d+)\s+[—-]\s+(.+)$/gm)];

  return matches.map((match, index) => {
    const rawBody = markdown
      .slice(match.index! + match[0].length, matches[index + 1]?.index ?? markdown.length)
      .trim();
    const description = rawBody.match(/^>\s+(.+)$/m)?.[1]?.trim();

    return {
      number: Number(match[1]),
      title: match[2].trim(),
      description,
      body: rawBody.replace(/^>\s+.+\n?/, "").trim(),
    };
  });
}

function cleanWeekBody(body: string) {
  const readingHeadings = new Set([
    "Core",
    "Anchor",
    "Background / lecture preparation",
    "Background / comparison papers",
    "Background — selected sections",
    "Frontier / comparison papers",
    "Frontier / dataset papers",
    "Student presentation pool",
    "Data companion — skim before class",
    "Evaluation companion — short required critique",
    "Comparison papers",
    "Required debate pair",
    "Additional evidence cards",
    "Application readings",
    "Reading After Class",
    "Related Readings",
  ]);

  const papersOnly = body
    .split("\n")
    .filter((line) => {
      const trimmed = line.trim();
      if (!trimmed || /^###\s+/.test(trimmed) || /^-\s+/.test(trimmed)) return true;
      const heading = trimmed.match(/^\*\*([^*]+)\*\*$/);
      return Boolean(heading && readingHeadings.has(heading[1]));
    })
    .map((line) =>
      line.replace(
        /((?:19|20)\d{2}(?:\s+preprint)?)(?:\.\s+|\s+—\s+).+$/,
        "$1.",
      ),
    )
    .join("\n");

  return papersOnly
    .replace(/\*\*\[[FRP]\]\*\*\s*/g, "")
    .replace(/^\*\*Core\*\*$/gm, "**Read before class**")
    .replace(/^\*\*Anchor\*\*$/gm, "**Anchor reading**")
    .replace(/^\*\*Background \/ lecture preparation\*\*$/gm, "**Additional context**")
    .replace(/^\*\*Background \/ comparison papers\*\*$/gm, "**Additional context**")
    .replace(/^\*\*Background \/ comparison papers\*\*$/gm, "**Additional context**")
    .replace(/^\*\*Background — selected sections\*\*$/gm, "**Selected background**")
    .replace(/^\*\*Frontier \/ comparison papers\*\*$/gm, "**Further reading**")
    .replace(/^\*\*Frontier \/ dataset papers\*\*$/gm, "**Datasets and further reading**")
    .replace(/^\*\*Student presentation pool\*\*$/gm, "**Presentation choices**")
    .replace(/^\*\*Data companion — skim before class\*\*$/gm, "**Skim before class**")
    .replace(/^\*\*Evaluation companion — short required critique\*\*$/gm, "**Short critique**")
    .replace(/^\*\*Comparison papers\*\*$/gm, "**Further reading**")
    .replace(/^\*\*Required debate pair\*\*$/gm, "**Debate readings**")
    .replace(/^\*\*Additional evidence cards\*\*$/gm, "**Additional evidence**")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default function CourseSite() {
  const sections = splitSections(syllabus);
  const weeks = sections.filter((section) => section.title.startsWith("Week "));
  const openingWeeks = weeks.slice(0, 3);
  const laterLectures = weeks.slice(3).flatMap((week) => splitLectures(week.body));
  const meetingDates = classDates.flat();
  const grading = sections.find((section) => section.title === "Grading");
  const expectations = sections.find((section) => section.title === "Expectations");

  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="site-name" href="#top">
          <img src="/university.shield.rgb.blue.png" alt="" width="42" height="42" />
          <span>The Johns Hopkins University</span>
        </a>
      </nav>

      <header className="course-intro" id="course">
        <p className="course-code">EN.601.439 / 639 · Fall 2026</p>
        <p className="course-logistics">
          📍 Hodson Hall 305 · 🕒 Tuesdays and Thursdays, 4:30–5:45 PM
        </p>
        <h1>Embodied AI with Web-Scale Video Data</h1>
        <p className="course-description">{courseDescription}</p>
        <div className="course-team" aria-label="Course team">
          <div className="lead-instructor">
            <span>Instructor</span>
            <strong>
              <a href="https://homangab.github.io/" target="_blank" rel="noreferrer">
                Homanga Bharadhwaj
              </a>
            </strong>
            <p>
              <b>Assistant Professor</b><br />
              Department of Computer Science<br />
              Data Science and AI Institute<br />
              Laboratory of Computational Sensing and Robotics
            </p>
          </div>
          <div className="course-assistants">
            <div>
              <span>Teaching Assistant</span>
              <strong>
                <a href="https://kartik-3004.github.io/portfolio/" target="_blank" rel="noreferrer">
                  Kartik Narayan
                </a>
              </strong>
              <p>PhD student in Computer Science</p>
            </div>
            <div>
              <span>Course Assistant</span>
              <strong>
                <a
                  href="https://scholar.google.com/citations?user=tgvhuC4AAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nitik Jain
                </a>
              </strong>
              <p>MSE student in Robotics</p>
            </div>
          </div>
        </div>
      </header>

      <section className="weeks" id="weeks">
        <div className="week-list">
          {openingWeeks.map((week, index) => {
            const title = week.title.match(/^Week \d+\s+[—-]\s+(.+)$/)?.[1];

            return (
              <article className="week" key={week.title}>
                <div className="week-meta">
                  <div className="week-label">Lectures {index * 2 + 1}–{index * 2 + 2}</div>
                  <div className="week-dates" aria-label={`Class dates: ${classDates[index].join(" and ")}`}>
                    {classDates[index].map((date) => (
                      <span className="week-date" key={date}>{date}</span>
                    ))}
                  </div>
                </div>
                <div className="week-main">
                  {title ? <h3>{title}</h3> : null}
                  <div
                    className="week-content"
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(cleanWeekBody(week.body)) }}
                  />
                </div>
              </article>
            );
          })}
          {laterLectures.map((lecture) => {
            const date = meetingDates[lecture.number - 1];

            return (
              <article className="week lecture-row" key={`lecture-${lecture.number}`}>
                <div className="week-meta">
                  <div className="week-label">Lecture {lecture.number}</div>
                  <div className="week-dates" aria-label={`Class date: ${date}`}>
                    <span className="week-date">{date}</span>
                  </div>
                </div>
                <div className="week-main">
                  <h3>{lecture.title}</h3>
                  {lecture.description ? (
                    <p className="lecture-description">{lecture.description}</p>
                  ) : null}
                  {lecture.body ? (
                    <div
                      className="week-content"
                      dangerouslySetInnerHTML={{ __html: markdownToHtml(cleanWeekBody(lecture.body)) }}
                    />
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {grading ? (
        <section className="grading" id="grading" aria-labelledby="grading-title">
          <div className="grading-inner">
            <div className="week-label">Assessment</div>
            <div className="grading-main">
              <h2 id="grading-title">Grading</h2>
              <div
                className="grading-content"
                dangerouslySetInnerHTML={{ __html: markdownToHtml(grading.body) }}
              />
            </div>
          </div>
        </section>
      ) : null}

      {expectations ? (
        <section className="expectations" id="expectations" aria-labelledby="expectations-title">
          <div className="expectations-inner">
            <h2 className="week-label" id="expectations-title">Expectations</h2>
            <div
              className="expectations-content"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(expectations.body) }}
            />
          </div>
        </section>
      ) : null}

      <footer>
        <p>Johns Hopkins University · Department of Computer Science</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
