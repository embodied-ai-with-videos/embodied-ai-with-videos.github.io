import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete course outline", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Embodied AI with Web-Scale Video Data/);
  assert.match(html, /src="\/university\.shield\.rgb\.blue\.png"/);
  assert.match(html, /<span>The Johns Hopkins University<\/span>/);
  assert.match(html, /How can an intelligent agent learn physical skills/);
  assert.match(html, /href="https:\/\/homangab\.github\.io\/"[^>]*>Homanga Bharadhwaj<\/a>/);
  assert.match(html, /href="https:\/\/kartik-3004\.github\.io\/portfolio\/"[^>]*>Kartik Narayan<\/a>/);
  assert.match(html, /href="https:\/\/scholar\.google\.com\/citations\?user=tgvhuC4AAAAJ&amp;hl=en"[^>]*>Nitik Jain<\/a>/);
  assert.match(html, /Kartik Narayan<\/a><\/strong><p>PhD student in Computer Science<\/p>/);
  assert.match(html, /Nitik Jain<\/a><\/strong><p>MSE student in Robotics<\/p>/);
  assert.match(html, /📍 Hodson Hall 305/);
  assert.match(html, /🕒 Tuesdays and Thursdays, 4:30–5:45 PM/);
  assert.match(html, /Assistant Professor<\/b><br\/>Department of Computer Science<br\/>Data Science and AI Institute<br\/>Laboratory of Computational Sensing and Robotics/);
  assert.doesNotMatch(html, /<span>Format<\/span>/);
  assert.doesNotMatch(html, /Opening discussion|internet-scale next-token prediction produced broad linguistic competence/i);
  assert.equal((html.match(/class="week"/g) ?? []).length, 3);
  assert.equal((html.match(/class="week lecture-row"/g) ?? []).length, 21);
  assert.equal((html.match(/class="week-date"/g) ?? []).length, 27);
  assert.match(html, /Class dates: Sep 1 and Sep 3/);
  assert.match(html, /Class date: Oct 20/);
  assert.match(html, /Class date: Oct 27/);
  assert.match(html, /Class date: Nov 19/);
  assert.match(html, /Class date: Dec 1/);
  assert.match(html, /Class date: Dec 10/);
  assert.match(html, /Lecture <!-- -->7/);
  assert.match(html, /Lecture <!-- -->27/);
  assert.match(html, /Lectures <!-- -->1<!-- -->–<!-- -->2/);
  assert.match(html, /Lectures <!-- -->3<!-- -->–<!-- -->4/);
  assert.match(html, /Lectures <!-- -->5<!-- -->–<!-- -->6/);
  assert.doesNotMatch(html, /Week <!-- -->\d+/);
  assert.match(html, /<h3>Extracting Motion from Video<\/h3><p class="lecture-description">Optical flow; segmentation and tracking; 3D scene flow, dynamic scenes, occlusion, and camera motion<\/p>/);
  assert.match(html, /Foundations: Learning as Prediction/);
  assert.match(html, /Reading After Class/);
  assert.match(html, /Rational Imitation in Preverbal Infants/);
  assert.match(html, /TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking/);
  assert.match(html, /Cosmos 3: Omnimodal World Models for Physical AI/);
  assert.match(html, /T-Rex: Tactile-Reactive Dexterous Manipulation/);
  assert.match(html, /Project presentations I/);
  assert.doesNotMatch(html, /Guest Lecture \+ Student-Led Seminar|Project Presentations<\/h3>/);
  assert.match(html, /<section class="grading" id="grading"/);
  assert.match(html, /Paper presentation and discussion \(20%\)/);
  assert.match(html, /In-class participation \(10%\)/);
  assert.match(html, /N random pen-and-paper quizzes/);
  assert.match(html, /best N-1 quizzes will be used for grading/);
  assert.match(html, /Assignment \(15%\)/);
  assert.match(html, /one take-home assignment/);
  assert.match(html, /Project \(40%\)/);
  assert.match(html, /Project groups may include 1–3 students\. No exceptions\./);
  assert.match(html, /<section class="expectations" id="expectations"/);
  assert.match(html, /<h2 class="week-label" id="expectations-title">Expectations<\/h2>/);
  assert.match(html, /<h4>Paper presentation<\/h4>/);
  assert.match(html, /groups of two/);
  assert.match(html, /may not reuse anyone else's slides, including the authors' slides/);
  assert.match(html, /<h4>AI Policy<\/h4>/);
  assert.match(html, /may not use AI to create presentation slides, complete the assignment, or write the project report/);
});

test("keeps the published page minimal and removes reading-status tags", async () => {
  const [response, css] = await Promise.all([
    render(),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const html = await response.text();

  assert.doesNotMatch(html, /Foundational|Field-defining work|Peer-reviewed research shaping|Fast-moving frontier/i);
  assert.doesNotMatch(html, /Teaching emphasis|\[F\]|\[R\]|\[P\]/i);
  assert.doesNotMatch(html, /Suggested comparison axis|Organizing figure|Recommended trio|Debate motions|week-description/i);
  assert.doesNotMatch(html, /representation learned from video|direct continuous-action VLA|save for a final-weeks revisit/i);
  assert.doesNotMatch(html, /Search the syllabus|All weeks|Core curriculum|Seminar phase|Expand \/ collapse/i);
  assert.doesNotMatch(html, /class="nav-links"/);
  assert.match(html, /MotionForesight: Re-purposing Video Models for Future 3D Scene-Flow Prediction/);
  assert.match(html, /RoboAgent: Generalization and Efficiency in Robot Manipulation/);
  assert.match(html, /HandsOnVLM: Vision-Language Models for Hand-Object Interaction Prediction/);
  assert.match(html, /OPENTOUCH: Bringing Full-Hand Touch to Real-World Interaction/);
  assert.match(html, /ForceBand: Learning Forceful Manipulation with sEMG/);
  assert.doesNotMatch(html, /Towards Generalizable Zero-Shot Manipulation via Translating Human Interaction Plans/);
  assert.match(html, /Elephants Don’t Play Chess/);
  assert.match(html, /What Is Embodied About Cognition\?/);
  assert.match(html, /href="https:\/\/doi\.org\/10\.1016\/0004-3702\(81\)90024-2"/);
  assert.equal((html.match(/Building Machines That Learn and Think Like People/g) ?? []).length, 1);
  assert.doesNotMatch(html, /A Call for Embodied AI|Predictive Processing in Cognitive Robotics/);
  assert.match(html, /RT-1: Robotics Transformer for Real-World Control at Scale/);
  assert.match(html, /π0\.5: A Vision-Language-Action Model with Open-World Generalization/);
  assert.match(html, /Dexterous Manipulation Policies from RGB Human Videos via 3D Hand-Object Trajectory Reconstruction/);
  assert.doesNotMatch(html, /via 4D Hand-Object Trajectory Reconstruction|www\.pi\.website\/research\/pi05/);
  assert.doesNotMatch(css, /\.label-card|\.phase-tag|\.search-box|\.phase-filter/);
});

test("keeps the repository README intentionally minimal", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  assert.equal(
    readme,
    "# Embodied AI with Web-Scale Video Data\n\nCourse website for EN.601.439/639 at Johns Hopkins University.\n",
  );
});

test("publishes the full site from the repository root for GitHub Pages", async () => {
  const rootHtml = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(rootHtml, /Embodied AI with Web-Scale Video Data/);
  assert.match(rootHtml, /class="course-team"/);
  assert.match(rootHtml, /Lecture\s*(?:<!-- -->)?27/);
  assert.match(rootHtml, /href="\.\/assets\//);
  assert.doesNotMatch(rootHtml, /<h1>embodied-ai-with-videos<\/h1>/i);
});

test("structures the revised 27-meeting schedule", async () => {
  const syllabus = await readFile(new URL("../app/syllabus.md", import.meta.url), "utf8");
  const courseSchedule = syllabus.split(/^## Recommended course-site structure$/m)[0];
  const lectureMatches = [...courseSchedule.matchAll(/^### Lecture (\d+) — ([^\n]+)$/gm)];
  assert.deepEqual(lectureMatches.map((match) => Number(match[1])), Array.from({ length: 27 }, (_, index) => index + 1));
  assert.doesNotMatch(courseSchedule, /^### Lecture \d+[AB] /m);

  const getLecture = (number) => {
    const match = courseSchedule.match(
      new RegExp(`^### Lecture ${number} — ([^\\n]+)\\n([\\s\\S]*?)(?=\\n(?:### Lecture ${number + 1} —|---|## ))`, "m"),
    );
    return { title: match?.[1] ?? "", body: match?.[2] ?? "" };
  };

  const lecture7 = getLecture(7);
  assert.equal(lecture7.title, "Extracting Motion from Video");
  assert.match(lecture7.body, /^> Optical flow; segmentation and tracking; 3D scene flow, dynamic scenes, occlusion, and camera motion$/m);
  assert.match(lecture7.body, /Track2Act: Predicting Point Tracks/);
  assert.match(lecture7.body, /RAFT-3D: Scene Flow Using Rigid-Motion Embeddings/);

  const lecture8 = getLecture(8);
  assert.equal(lecture8.title, "Reconstruction of Bodies, Hands, and Objects");
  assert.match(lecture8.body, /^> 3D human body reconstruction and generation; hands and objects in 3D; contact and interaction reconstruction$/m);
  assert.match(lecture8.body, /SMPL: A Skinned Multi-Person Linear Model/);
  assert.match(lecture8.body, /ObjectForesight: Predicting Future 3D Object Trajectories/);

  for (const number of [9, 10]) {
    const lecture = getLecture(number);
    assert.equal(lecture.title, number === 9 ? "Student-led presentations and discussions" : "Guest Lecture I");
    assert.doesNotMatch(lecture.body, /\*\*Related Readings\*\*|^- /m);
  }

  const expectedTitles = new Map([
    [11, "Video Generation"],
    [13, "World Models"],
    [15, "VLMs for Robotics and VLAs"],
    [17, "One/Few-Shot Human Imitation"],
    [19, "Robot Learning from Web Video and Its Limits"],
    [21, "Student-led presentations and discussions"],
    [22, "Guest Lecture II"],
    [23, "Embodied AI beyond Robotics"],
    [24, "Student-led presentations and discussions"],
    [27, "Project presentations II"],
  ]);
  for (const [number, title] of expectedTitles) assert.equal(getLecture(number).title, title);

  for (const number of [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 15, 17, 19, 23]) {
    const lecture = getLecture(number);
    assert.equal((lecture.body.match(/\*\*Related Readings\*\*/g) ?? []).length, 1);
    assert.match(lecture.body, /^- /m);
  }

  const expectedPostClassCounts = new Map([
    [2, 1],
    [6, 1],
    [7, 3],
    [8, 3],
    [11, 2],
    [13, 3],
    [15, 3],
    [17, 3],
    [19, 3],
    [23, 3],
  ]);
  for (const [number, expectedCount] of expectedPostClassCounts) {
    const lecture = getLecture(number);
    const postClassSection = lecture.body.match(
      /^\*\*Reading After Class\*\*\n\n([\s\S]*?)(?=\n\n\*\*Related Readings\*\*)/m,
    )?.[1] ?? "";
    assert.equal((postClassSection.match(/^- /gm) ?? []).length, expectedCount);
  }

  for (const number of [9, 10, 12, 14, 16, 18, 20, 21, 22, 24, 25, 26, 27]) {
    assert.doesNotMatch(getLecture(number).body, /\*\*Related Readings\*\*|^- /m);
  }

  assert.match(getLecture(5).body, /Ego4D: Around the World in 3,000 Hours of Egocentric Video/);
  assert.match(getLecture(6).body, /R3M: A Universal Visual Representation/);
  assert.match(getLecture(11).body, /Gen2Act: Human Video Generation in Novel Scenarios Enables Generalizable Robot Manipulation/);
  assert.match(getLecture(13).body, /World Action Models Are Zero-Shot Policies/);
  assert.match(getLecture(17).body, /WHIRL: In the Wild Human Imitating Robot Learning/);
  assert.match(getLecture(23).body, /EgoLife: Towards Egocentric Life Assistant/);

  const signupPaperUrls = [
    "https://arxiv.org/abs/2606.17256",
    "https://arxiv.org/abs/2604.01015",
    "https://arxiv.org/abs/2312.14132",
    "https://arxiv.org/abs/2503.11651",
    "https://arxiv.org/abs/2510.08568",
    "https://arxiv.org/abs/2605.12587",
    "https://arxiv.org/abs/2606.17385",
    "https://arxiv.org/abs/2606.30598",
    "https://arxiv.org/abs/2601.05237",
    "https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_HaWoR_World-Space_Hand_Motion_Reconstruction_from_Egocentric_Videos_CVPR_2025_paper.html",
    "https://arxiv.org/abs/2507.00990",
    "https://proceedings.mlr.press/v305/jang25a.html",
    "https://arxiv.org/abs/2608.26103",
    "https://arxiv.org/abs/2602.15922",
    "https://arxiv.org/abs/2606.02800",
    "https://arxiv.org/abs/2601.15284",
    "https://say-can.github.io/",
    "https://proceedings.mlr.press/v305/black25a.html",
    "https://arxiv.org/abs/2410.24221",
    "https://proceedings.mlr.press/v229/zitkovich23a.html",
    "https://arxiv.org/abs/2507.12440",
    "https://arxiv.org/abs/2511.09484",
    "https://arxiv.org/abs/2505.24853",
    "https://arxiv.org/abs/2302.12422",
    "https://www.roboticsproceedings.org/rss18/p026.html",
    "https://arxiv.org/abs/2506.20668",
    "https://proceedings.mlr.press/v305/sridhar25a.html",
    "https://arxiv.org/abs/2602.09013",
    "https://roboticsconference.org/program/papers/3/",
    "https://arxiv.org/abs/2512.16842",
    "https://arxiv.org/abs/2606.27344",
    "https://arxiv.org/abs/2606.13769",
    "https://arxiv.org/abs/2606.17055",
    "https://arxiv.org/abs/2512.16907",
    "https://openaccess.thecvf.com/content/ICCV2023/html/Wang_HoloAssist_an_Egocentric_Human_Interaction_Dataset_for_Interactive_AI_Assistants_ICCV_2023_paper.html",
    "https://openaccess.thecvf.com/content/CVPR2025/html/Yang_EgoLife_Towards_Egocentric_Life_Assistant_CVPR_2025_paper.html",
  ];
  assert.equal(signupPaperUrls.length, 36);
  for (const url of signupPaperUrls) {
    assert.equal(courseSchedule.split(url).length - 1, 1, `expected one signup-paper link: ${url}`);
  }

  const discussionSessions = (courseSchedule.match(/^### Lecture \d+ — Student-led presentations and discussions$/gm) ?? []).length;
  const proposalPitchSessions = (courseSchedule.match(/^### Lecture 14 — Student project proposal pitches$/gm) ?? []).length;
  assert.equal(discussionSessions + proposalPitchSessions, 8);
  assert.match(courseSchedule, /^## Week 14$/m);
  assert.doesNotMatch(courseSchedule, /^## Week 15$/m);
  assert.doesNotMatch(syllabus, /\[[^\]\n]*\([^)\n]+\)\]\(https?:\/\//);

  const urls = syllabus.match(/https?:\/\/[^)]+/g) ?? [];
  assert.equal(new Set(urls).size, urls.length);
});

test("uses post-class and related reading headings consistently", async () => {
  const syllabus = await readFile(new URL("../app/syllabus.md", import.meta.url), "utf8");
  const courseSchedule = syllabus.split(/^## Recommended course-site structure$/m)[0];
  const lectureSections = courseSchedule.split(/^### Lecture /m).slice(1);

  for (const lecture of lectureSections) {
    const paperCount = (lecture.match(/^- /gm) ?? []).length;
    const readingHeadingCount = (lecture.match(/^\*\*Related Readings\*\*$/gm) ?? []).length;
    const postClassHeadingCount = (lecture.match(/^\*\*Reading After Class\*\*$/gm) ?? []).length;
    const otherStandaloneHeadings = lecture.match(
      /^\*\*(?!Related Readings\*\*$|Reading After Class\*\*$)[^*]+\*\*$/gm,
    ) ?? [];

    assert.equal(readingHeadingCount, paperCount > 0 ? 1 : 0);
    assert.ok(postClassHeadingCount <= 1);
    assert.deepEqual(otherStandaloneHeadings, []);
    assert.doesNotMatch(lecture, /^-[^\n]+\n\s*\n(?=- )/m);
  }
});
