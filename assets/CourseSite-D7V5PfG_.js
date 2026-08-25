import{r as e}from"./framework-DjPHiq1u.js";var t=`# EN.601.439/639 — Embodied AI with Web-Scale Video Data

## Proposed lecture-by-lecture reading map

Prepared August 2, 2026. This is designed for a mixed advanced-undergraduate / graduate course. It deliberately assigns one common **core** paper per meeting, then provides **background** and **frontier** choices for lecture preparation, graduate depth, and student presentations.

### Reading labels

- **Core** — everyone reads; use for the pre-class response.
- **Background** — textbook, tutorial, or foundational paper; assign selected sections rather than the whole item.
- **Frontier / presentation pool** — optional before Week 9; student-led paper choices during Weeks 9–12.
- **[F]** foundational or field-defining; **[R]** recent peer-reviewed work; **[P]** current preprint or very recent conference paper whose status/content should be rechecked before the semester.

For undergraduate students, require the core paper's abstract, introduction, key method figure, and experiments. Graduate students should read the full core paper and one comparison paper. A single common paper per meeting keeps discussion coherent; the larger lists below are primarily for lecture preparation and presentation selection.

---

## Week 1 — Foundations: Learning as Prediction

### Lecture 1 — Course introduction; embodied intelligence; why web data now?

**Related Readings**

- **[F]** Lake et al., [Building Machines That Learn and Think Like People](https://arxiv.org/abs/1604.00289), *Behavioral and Brain Sciences*, 2017.
- **[F]** Sutton, [The Bitter Lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html), 2019.
- **[F]** Brooks, [Intelligence Without Representation](https://people.csail.mit.edu/brooks/papers/representation.pdf), *Artificial Intelligence*, 1991.

### Lecture 2 — Cognitive science primer: perception–action loop, predictive planning, inductive biases

**Reading After Class**

- **[F]** Gergely et al., [Rational Imitation in Preverbal Infants](https://www.nature.com/articles/415755a), *Nature*, 2002.

**Related Readings**

- **[F]** Smith and Gasser, [The Development of Embodied Cognition: Six Lessons from Babies](https://pubmed.ncbi.nlm.nih.gov/15811218/), *Artificial Life*, 2005.
- **[F]** Clark, [Whatever Next? Predictive Brains, Situated Agents, and the Future of Cognitive Science](https://doi.org/10.1017/S0140525X12000477), *Behavioral and Brain Sciences*, 2013.
- **[R]** Mahon, [What Is Embodied About Cognition?](https://pmc.ncbi.nlm.nih.gov/articles/PMC4405253/), *Language, Cognition and Neuroscience*, 2015.
- **[F]** Brooks, [Elephants Don’t Play Chess](https://people.csail.mit.edu/brooks/papers/elephants.pdf), *Robotics and Autonomous Systems*, 1990.

---

## Week 2 — Foundations: Imitation Learning and Reinforcement Learning

### Lecture 3 — Imitation learning

**Related Readings**

- **[F]** Ross et al., [A Reduction of Imitation Learning and Structured Prediction to No-Regret Online Learning](https://proceedings.mlr.press/v15/ross11a.html), AISTATS 2011.
- **[R]** Zhao et al., [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705), RSS 2023.
- **[R]** Chi et al., [Diffusion Policy: Visuomotor Policy Learning via Action Diffusion](https://arxiv.org/abs/2303.04137), RSS 2023.
- **[R]** Bharadhwaj et al., [RoboAgent: Generalization and Efficiency in Robot Manipulation via Semantic Augmentations and Action Chunking](https://arxiv.org/abs/2309.01918), ICRA 2024.
- **[R]** Haldar et al., [BAKU: An Efficient Transformer for Multi-Task Policy Learning](https://arxiv.org/abs/2406.07539), NeurIPS 2024.
- **[R]** Brohan et al., [RT-1: Robotics Transformer for Real-World Control at Scale](https://www.roboticsproceedings.org/rss19/p025.html), RSS 2023.

### Lecture 4 — Reinforcement learning

**Related Readings**

- **[F]** Sutton and Barto, [Reinforcement Learning: An Introduction, 2nd ed.](http://incompleteideas.net/book/the-book-2nd.html), Chapters 3–6 and 13 selectively.
- **[R]** Kostrikov et al., [Offline Reinforcement Learning with Implicit Q-Learning](https://openreview.net/forum?id=68n2s9ZJWF8), ICLR 2022.
- **[F]** Haarnoja et al., [Soft Actor-Critic](https://proceedings.mlr.press/v80/haarnoja18b.html), ICML 2018.
- **[F]** Kumar et al., [Conservative Q-Learning for Offline Reinforcement Learning](https://proceedings.neurips.cc/paper/2020/hash/0d2b2061826a5df3221116a5085a6052-Abstract.html), NeurIPS 2020.
- **[F]** Kalashnikov et al., [Scalable Deep Reinforcement Learning for Vision-Based Robotic Manipulation](https://proceedings.mlr.press/v87/kalashnikov18a.html), CoRL 2018.

---

## Week 3 — Learning via Observation and Interaction

### Lecture 5 — The nature of Web Videos and Challenges in Using them

**Related Readings**

- **[R]** Grauman et al., [Ego4D: Around the World in 3,000 Hours of Egocentric Video](https://openaccess.thecvf.com/content/CVPR2022/html/Grauman_Ego4D_Around_the_World_in_3000_Hours_of_Egocentric_Video_CVPR_2022_paper.html), CVPR 2022.
- **[F]** Damen et al., [Scaling Egocentric Vision: The EPIC-KITCHENS Dataset](https://arxiv.org/abs/1804.02748), ECCV 2018.
- **[F]** Miech et al., [HowTo100M: Learning a Text-Video Embedding by Watching Hundred Million Narrated Video Clips](https://arxiv.org/abs/1906.03327), ICCV 2019.
- **[R]** Grauman et al., [Ego-Exo4D: Understanding Skilled Human Activity from First- and Third-Person Perspectives](https://openaccess.thecvf.com/content/CVPR2024/html/Grauman_Ego-Exo4D_Understanding_Skilled_Human_Activity_from_First-_and_Third-Person_Perspectives_CVPR_2024_paper.html), CVPR 2024.
- **[P]** Chen et al., [Action100M: A Large-scale Video Action Dataset](https://arxiv.org/abs/2601.10592), 2026.

### Lecture 6 — Behavioral Priors, self-supervised video representation learning, active exploration

**Reading After Class**

- **[P]** Sharma et al., [Contrastive Action-Image Pre-training for Visuomotor Control](https://arxiv.org/abs/2606.17256), 2026.

**Related Readings**

- **[F]** Sermanet et al., [Time-Contrastive Networks: Self-Supervised Learning from Video](https://arxiv.org/abs/1704.06888), ICRA 2018.
- **[R]** Nair et al., [R3M: A Universal Visual Representation for Robot Manipulation](https://arxiv.org/abs/2203.12601), CoRL 2022.
- **[R]** Ma et al., [VIP: Towards Universal Visual Reward and Representation via Value-Implicit Pre-Training](https://arxiv.org/abs/2210.00030), ICLR 2023.
- **[R]** Bahl et al., [Affordances from Human Videos as a Versatile Representation for Robotics](https://arxiv.org/abs/2304.08488), CVPR 2023.
- **[F]** Pathak et al., [Curiosity-Driven Exploration by Self-Supervised Prediction](https://arxiv.org/abs/1705.05363), ICML 2017.
- **[F]** Pinto and Gupta, [Supersizing Self-Supervision: Learning to Grasp from 50K Tries and 700 Robot Hours](https://arxiv.org/abs/1509.06825), ICRA 2016.

---

## Week 4 — Extracting Motion from Video

### Lecture 7 — Extracting Motion from Video

> Optical flow; segmentation and tracking; 3D scene flow, dynamic scenes, occlusion, and camera motion

**Reading After Class**

- **[P]** Thakkar et al., [Forecasting Motion in the Wild](https://arxiv.org/abs/2604.01015), 2026.
- **[R]** Wang et al., [DUSt3R: Geometric 3D Vision Made Easy](https://arxiv.org/abs/2312.14132), CVPR 2024.
- **[P]** Nam et al., [TrackCraft3R: Repurposing Video Diffusion Transformers for Dense 3D Tracking](https://arxiv.org/abs/2605.12587), 2026.

**Related Readings**

- **[F]** Teed and Deng, [RAFT: Recurrent All-Pairs Field Transforms for Optical Flow](https://arxiv.org/abs/2003.12039), ECCV 2020.
- **[F]** Horn and Schunck, [Determining Optical Flow](https://doi.org/10.1016/0004-3702(81)90024-2), *Artificial Intelligence*, 1981.
- **[R]** Karaev et al., [CoTracker3: Simpler and Better Point Tracking by Pseudo-Labelling Real Videos](https://arxiv.org/abs/2410.11831), 2024.
- **[R]** Ravi et al., [SAM 2: Segment Anything in Images and Videos](https://arxiv.org/abs/2408.00714), ICLR 2025.
- **[R]** Bharadhwaj et al., [Track2Act: Predicting Point Tracks from Internet Videos Enables Generalizable Robot Manipulation](https://arxiv.org/abs/2405.01527), ECCV 2024.
- **[R]** Teed and Deng, [RAFT-3D: Scene Flow Using Rigid-Motion Embeddings](https://arxiv.org/abs/2012.00726), CVPR 2021.
- **[R]** Teed and Deng, [DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras](https://arxiv.org/abs/2108.10869), NeurIPS 2021.
- **[P]** Wang et al., [VGGT: Visual Geometry Grounded Transformer](https://arxiv.org/abs/2503.11651), CVPR 2025.
- **[P]** Xiao et al., [SpatialTrackerV2: Advancing 3D Point Tracking with Explicit Camera Motion](https://openaccess.thecvf.com/content/ICCV2025/html/Xiao_SpatialTrackerV2_Advancing_3D_Point_Tracking_with_Explicit_Camera_Motion_ICCV_2025_paper.html), ICCV 2025.
- **[P]** Bharadhwaj and Jangir, [MotionForesight: Re-purposing Video Models for Future 3D Scene-Flow Prediction](https://arxiv.org/abs/2607.16192), 2026 preprint.
- **[R]** Li et al., [NovaFlow: Zero-Shot Manipulation via Actionable Flow from Generated Videos](https://arxiv.org/abs/2510.08568), ICRA 2026.

### Lecture 8 — Reconstruction of Bodies, Hands, and Objects

> 3D human body reconstruction and generation; hands and objects in 3D; contact and interaction reconstruction

**Reading After Class**

- **[P]** Wang et al., [EgoInfinity: A Web-Scale 4D Hand-Object Interaction Data Engine for Any-View Robot Retargeting and Video-to-Action Robot Learning](https://arxiv.org/abs/2606.17385), 2026 preprint.
- **[P]** Bansal et al., [Towards In-the-Wild Egocentric 3D Hand-Object Pose Estimation](https://arxiv.org/abs/2606.30598), ECCV 2026.
- **[R]** Soraki et al., [ObjectForesight: Predicting Future 3D Object Trajectories from Human Videos](https://arxiv.org/abs/2601.05237), ECCV 2026.

**Related Readings**

- **[F]** Loper et al., [SMPL: A Skinned Multi-Person Linear Model](https://files.is.tue.mpg.de/black/papers/SMPL2015.pdf), SIGGRAPH Asia 2015.
- **[F]** Kanazawa et al., [End-to-End Recovery of Human Shape and Pose](https://openaccess.thecvf.com/content_cvpr_2018/html/Kanazawa_End-to-End_Recovery_of_CVPR_2018_paper.html), CVPR 2018.
- **[R]** Goel et al., [Humans in 4D: Reconstructing and Tracking Humans with Transformers](https://shubham-goel.github.io/4dhumans/), ICCV 2023.
- **[R]** Shin et al., [WHAM: Reconstructing World-Grounded Humans with Accurate 3D Motion](https://wham.is.tue.mpg.de/), CVPR 2024.
- **[R]** Shen et al., [GVHMR: World-Grounded Human Motion Recovery via Gravity-View Coordinates](https://zju3dv.github.io/gvhmr/), SIGGRAPH Asia 2024.
- **[R]** Li et al., [Controllable Human-Object Interaction Synthesis](https://lijiaman.github.io/projects/chois/), ECCV 2024.
- **[F]** Romero et al., [Embodied Hands: Modeling and Capturing Hands and Bodies Together](https://mano.is.tue.mpg.de/), SIGGRAPH Asia 2017.
- **[R]** Pavlakos et al., [Reconstructing Hands in 3D with Transformers](https://geopavlakos.github.io/hamer/), CVPR 2024.
- **[R]** Fan et al., [ARCTIC: A Dataset for Dexterous Bimanual Hand-Object Manipulation](https://arctic.is.tue.mpg.de/), CVPR 2023.
- **[R]** Fan et al., [HOLD: Category-Agnostic 3D Reconstruction of Interacting Hands and Objects from Video](https://arxiv.org/abs/2311.18448), CVPR 2024.
- **[P]** Zhang et al., [HaWoR: World-Space Hand Motion Reconstruction from Egocentric Videos](https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_HaWoR_World-Space_Hand_Motion_Reconstruction_from_Egocentric_Videos_CVPR_2025_paper.html), CVPR 2025.

---

## Week 5 — Reconstruction of Bodies, Hands, and Objects

### Lecture 9 — Student-led presentations and discussions

### Lecture 10 — Guest Lecture I

---

## Week 6 — Video Generation

### Lecture 11 — Video Generation

> Video generation: diffusion, transformers, and latent video models

**Reading After Class**

- **[R]** Patel et al., [Robotic Manipulation by Imitating Generated Videos Without Physical Demonstrations](https://arxiv.org/abs/2507.00990), ICLR 2026.
- **[R]** Bharadhwaj et al., [Gen2Act: Human Video Generation in Novel Scenarios Enables Generalizable Robot Manipulation](https://proceedings.mlr.press/v305/bharadhwaj25a.html), CoRL 2025.

**Related Readings**

- **[F]** Ho et al., [Video Diffusion Models](https://arxiv.org/abs/2204.03458), NeurIPS 2022.
- **[F]** Rombach et al., [High-Resolution Image Synthesis with Latent Diffusion Models](https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html), CVPR 2022.
- **[F]** Peebles and Xie, [Scalable Diffusion Models with Transformers](https://arxiv.org/abs/2212.09748), ICCV 2023.
- **[R]** Bar-Tal et al., [Lumiere: A Space-Time Diffusion Model for Video Generation](https://arxiv.org/abs/2401.12945), 2024.
- **[R]** Du et al., [Learning Universal Policies via Text-Guided Video Generation](https://arxiv.org/abs/2302.00111), NeurIPS 2023.

### Lecture 12 — Student-led presentations and discussions

---

## Week 7 — World Models

### Lecture 13 — World Models

> World models for planning and control

**Reading After Class**

- **[R]** Jang et al., [DreamGen: Unlocking Generalization in Robot Learning through Video World Models](https://proceedings.mlr.press/v305/jang25a.html), CoRL 2025.
- **[P]** Zhou et al., [Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization](https://arxiv.org/abs/2608.26103), 2026.
- **[P]** [World Action Models Are Zero-Shot Policies](https://arxiv.org/abs/2602.15922), 2026.

**Related Readings**

- **[F]** Finn and Levine, [Deep Visual Foresight for Planning Robot Motion](https://arxiv.org/abs/1610.00696), ICRA 2017.
- **[F]** Ha and Schmidhuber, [World Models](https://worldmodels.github.io/), 2018.
- **[F]** Hafner et al., [Learning Latent Dynamics for Planning from Pixels](https://arxiv.org/abs/1811.04551), ICML 2019.
- **[R]** Hafner et al., [Mastering Diverse Domains through World Models](https://arxiv.org/abs/2301.04104), 2023.
- **[R]** Hansen et al., [TD-MPC2: Scalable, Robust World Models for Continuous Control](https://arxiv.org/abs/2310.16828), ICLR 2024.
- **[R]** Wu et al., [DayDreamer: World Models for Physical Robot Learning](https://proceedings.mlr.press/v205/wu23c.html), CoRL 2023.
- **[R]** Zhu et al., [Unified World Models: Coupling Video and Action Diffusion for Pretraining on Large Robotic Datasets](https://www.roboticsproceedings.org/rss21/p015.html), RSS 2025.
- **[P]** Zhang et al., [Qwen-RobotWorld Technical Report: Unifying Embodied World Modeling through Language-Conditioned Video Generation](https://arxiv.org/abs/2606.17030), 2026.
- **[P]** Chen et al., [ABot-PhysWorld: Interactive World Foundation Model for Robotic Manipulation with Physics Alignment](https://arxiv.org/abs/2603.23376), 2026.
- **[P]** NVIDIA et al., [Cosmos 3: Omnimodal World Models for Physical AI](https://arxiv.org/abs/2606.02800), 2026.
- **[P]** Bagchi et al., [Walk through Paintings: Egocentric World Models from Internet Priors](https://arxiv.org/abs/2601.15284), ECCV 2026.
- **[P]** Lee et al., [μ₀: A Scalable 3D Interaction-Trace World Model](https://arxiv.org/abs/2606.13769), 2026.

### Lecture 14 — Student project proposal pitches

---

## Week 8 — VLMs for Manipulation and Navigation

### Lecture 15 — VLMs for Robotics and VLAs

> Vision-language models for manipulation and navigation

**Reading After Class**

- **[R]** Ahn et al., [Do As I Can, Not As I Say: Grounding Language in Robotic Affordances](https://say-can.github.io/), CoRL 2022.
- **[R]** Zitkovich et al., [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://proceedings.mlr.press/v229/zitkovich23a.html), CoRL 2023.
- **[P]** Yang et al., [EgoVLA: Learning Vision-Language-Action Models from Egocentric Human Videos](https://arxiv.org/abs/2507.12440), 2025.

**Related Readings**

- **[R]** Open X-Embodiment Collaboration, [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://robotics-transformer-x.github.io/), ICRA 2024.
- **[R]** Driess et al., [PaLM-E: An Embodied Multimodal Language Model](https://arxiv.org/abs/2303.03378), ICML 2023.
- **[F]** Radford et al., [Learning Transferable Visual Models from Natural Language Supervision](https://arxiv.org/abs/2103.00020), ICML 2021.
- **[R]** Shah et al., [ViNT: A Foundation Model for Visual Navigation](https://arxiv.org/abs/2306.14846), CoRL 2023.
- **[R]** Sridhar et al., [NoMaD: Goal Masked Diffusion Policies for Navigation and Exploration](https://general-navigation-models.github.io/nomad/), ICRA 2024.
- **[R]** Cheng et al., [NaVILA: Legged Robot Vision-Language-Action Model for Navigation](https://research.nvidia.com/labs/lpr/publication/navila2024/), RSS 2025.
- **[R]** Black et al., [π0.5: A Vision-Language-Action Model with Open-World Generalization](https://proceedings.mlr.press/v305/black25a.html), CoRL 2025.
- **[F]** Shridhar et al., [CLIPort: What and Where Pathways for Robotic Manipulation](https://arxiv.org/abs/2109.12098), CoRL 2021.
- **[R]** Kareer et al., [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221), ICRA 2025.

### Lecture 16 — Student-led presentations and discussions

---

## Week 9 — One/Few-Shot Human Imitation

### Lecture 17 — One/Few-Shot Human Imitation

> Robot learning from one/few-shot human imitation and Real2Sim2Real

**Reading After Class**

- **[F]** Bahl et al., [WHIRL: In the Wild Human Imitating Robot Learning](https://www.roboticsproceedings.org/rss18/p026.html), RSS 2022.
- **[P]** Pan et al., [SPIDER: Scalable Physics-Informed Dexterous Retargeting](https://arxiv.org/abs/2511.09484), 2025.
- **[R]** Park et al., [DemoDiffusion: One-Shot Human Imitation Using Pre-Trained Diffusion Policy](https://arxiv.org/abs/2506.20668), ICRA 2026.

**Related Readings**

- **[R]** Torne et al., [Reconciling Reality through Simulation: A Real-to-Sim-to-Real Approach for Robust Manipulation](https://roboticsconference.org/2024/program/papers/15/), RSS 2024.
- **[R]** Zhao et al., [DexMachina: Functional Retargeting for Bimanual Dexterous Manipulation](https://arxiv.org/abs/2505.24853), ICML 2026.
- **[P]** Jangir et al., [RobotArena∞: Scalable Robot Benchmarking via Real-to-Sim Translation](https://arxiv.org/abs/2510.23571), 2025 preprint.
- **[R]** Wang et al., [MimicPlay: Long-Horizon Imitation Learning by Watching Human Play](https://arxiv.org/abs/2302.12422), CoRL 2023.
- **[R]** Sridhar et al., [RICL: Adding In-Context Adaptability to Pre-Trained Vision-Language-Action Models](https://proceedings.mlr.press/v305/sridhar25a.html), CoRL 2025.
- **[P]** Chen et al., [Dexterous Manipulation Policies from RGB Human Videos via 3D Hand-Object Trajectory Reconstruction](https://arxiv.org/abs/2602.09013), 2026.
- **[P]** Mu et al., [DexImit: Learning Bimanual Dexterous Manipulation from Monocular Human Videos](https://roboticsconference.org/program/papers/3/), RSS 2026.

### Lecture 18 — Student-led presentations and discussions

---

## Week 10

### Lecture 19 — Robot Learning from Web Video and Its Limits

> Beyond videos: multimodal representations, tactile sensing, and transfer

**Reading After Class**

- **[P]** Song et al., [OPENTOUCH: Bringing Full-Hand Touch to Real-World Interaction](https://arxiv.org/abs/2512.16842), 2025.
- **[P]** Mao et al., [VibeAct: Vibration to Actions for Contact-Rich Reactive Robot Dexterity](https://arxiv.org/abs/2606.27344), 2026.
- **[P]** Niu et al., [T-Rex: Tactile-Reactive Dexterous Manipulation](https://arxiv.org/abs/2606.17055), 2026.

**Related Readings**

- **[F]** Lee et al., [Making Sense of Vision and Touch: Self-Supervised Learning of Multimodal Representations for Contact-Rich Tasks](https://arxiv.org/abs/1810.10191), ICRA 2019.
- **[R]** Higuera et al., [Sparsh: Self-supervised touch representations for vision-based tactile sensing](https://arxiv.org/abs/2410.24090), CoRL 2024.
- **[R]** Guzey et al., [Dexterity from Smart Lenses: Multi-Fingered Robot Manipulation with In-the-Wild Human Demonstrations](https://arxiv.org/abs/2511.16661), ICRA 2026.
- **[P]** He et al., [ForceBand: Learning Forceful Manipulation with sEMG](https://arxiv.org/abs/2606.26093), 2026.

### Lecture 20 — Student-led presentations and discussions

---

## Week 11 — Robot Learning from Web Video and Its Limits

### Lecture 21 — Student-led presentations and discussions

### Lecture 22 — Guest Lecture II

---

## Week 12 — Embodied AI beyond Robotics

### Lecture 23 — Embodied AI beyond Robotics

> Wearables, augmented reality, prediction, and continual egocentric assistants

**Reading After Class**

- **[R]** Wang et al., [HoloAssist: An Egocentric Human Interaction Dataset for Interactive AI Assistants](https://openaccess.thecvf.com/content/ICCV2023/html/Wang_HoloAssist_an_Egocentric_Human_Interaction_Dataset_for_Interactive_AI_Assistants_ICCV_2023_paper.html), ICCV 2023.
- **[R]** Yang et al., [EgoLife: Towards Egocentric Life Assistant](https://openaccess.thecvf.com/content/CVPR2025/html/Yang_EgoLife_Towards_Egocentric_Life_Assistant_CVPR_2025_paper.html), CVPR 2025.
- **[P]** Chen et al., [Flowing from Reasoning to Motion: Learning 3D Hand Trajectory Prediction from Egocentric Human Interaction Videos](https://arxiv.org/abs/2512.16907), ECCV 2026.

**Related Readings**

- **[R]** Datta et al., [Episodic Memory Question Answering](https://openaccess.thecvf.com/content/CVPR2022/papers/Datta_Episodic_Memory_Question_Answering_CVPR_2022_paper.pdf), CVPR 2022.
- **[R]** Liu et al., [Joint Hand Motion and Interaction Hotspots Prediction From Egocentric Videos](https://openaccess.thecvf.com/content/CVPR2022/html/Liu_Joint_Hand_Motion_and_Interaction_Hotspots_Prediction_From_Egocentric_Videos_CVPR_2022_paper.html), CVPR 2022.
- **[P]** Xu et al., [Towards Continual Egocentric Activity Recognition: A Multi-modal Egocentric Activity Dataset for Continual Learning](https://arxiv.org/abs/2301.10931), 2023.
- **[R]** Bao et al., [HandsOnVLM: Vision-Language Models for Hand-Object Interaction Prediction](https://openreview.net/forum?id=ehhMFjKnWm), *Transactions on Machine Learning Research*, 2025.

### Lecture 24 — Student-led presentations and discussions

---

## Week 13

### Lecture 25 — Guest Lecture III

### Lecture 26 — Project presentations I

---

## Week 14

### Lecture 27 — Project presentations II

---

## Grading

1. **Paper presentation and discussion (20%)**
2. **In-class participation (10%)**
3. **In-class quiz (15%):** There will be N random pen-and-paper quizzes. The best N-1 quizzes will be used for grading. Quizzes will take place in the middle of lectures and will be 10 minutes long.
4. **Assignment (15%):** There will be one take-home assignment with no or minimal coding. The assignment will focus on design and critical thinking.
5. **Project (40%):** Proposal presentation (5%), one-page proposal document (5%), final presentation (15%), and final report/paper (15%). Project groups may include 1–3 students. No exceptions.

---

## Expectations

### Paper presentation

Students will present papers in groups of two. A strong presentation should not only summarize the paper's key contributions, but also provide insight and perspective on the strengths and weaknesses of the approach; contextualize the paper in relation to work published both before and after it; and analyze the approach separately from the experiments and results. Students must create their own slides and may not reuse anyone else's slides, including the authors' slides.

### AI Policy

Students may use AI to help understand papers or course concepts. They may not use AI to create presentation slides, complete the assignment, or write the project report.

---

## Recommended course-site structure

For each meeting, publish the same seven fields:

1. **Topic and two learning objectives**
2. **Core reading** — one paper
3. **Background** — selected chapter/tutorial or foundational paper
4. **Frontier / presentation choices** — no more than three visible by default
5. **Reading prompt** — key idea, strongest evidence, limitation, one question
6. **Materials** — slides, code/notebook, dataset links
7. **Status tags** — foundational, peer-reviewed recent, or current preprint; undergraduate/graduate depth

Keep the full bibliography on a separate “Reading library” page with filters for \`motion\`, \`3D\`, \`human reconstruction\`, \`video generation\`, \`RL\`, \`world models\`, \`VLM/VLA\`, \`navigation\`, \`manipulation\`, \`human-to-robot\`, \`evaluation\`, and \`data curation\`.

## Curriculum edits to make before publishing

1. Use one official title consistently. The supplied draft alternates between **Embodied AI with Web-Scale Video Data** and **Embodied Multimodal AI with Web-Scale Data**.
2. Rename Week 7 to **Imitation Learning and VLM Foundations** and replace the filler lecture with Lecture 7B above.
3. Add offline RL explicitly to Week 6A; otherwise a stated course emphasis lacks a scheduled home.
4. Describe Weeks 1–8 as the **instructor-led core** and Weeks 9–13 as the **seminar/project phase**, rather than “first half” and “second half”; they are not equal in calendar length.
5. Keep a single common core paper per meeting. Two or more required full papers per class will be too much for a mixed undergraduate/graduate roster and will weaken discussion quality.
6. Freeze foundational readings early, but refresh the Week 11–12 pool shortly before the semester and again before students choose papers.

## Suggested reading-response rubric

Use a 150–250 word response with four labeled sentences or bullets:

- **Claim** — the paper’s central claim in the student’s own words.
- **Evidence** — the most convincing experiment or analysis.
- **Gap** — a limitation, missing baseline, or unsupported generalization.
- **Question** — one question that could drive class discussion.

For seminar presentations, add a one-slide reproducibility card: data availability, code/checkpoints, compute/hardware, number of real-world trials, variance/confidence intervals, and known failure cases.
`,n=e(),r=`How can an intelligent agent learn physical skills from internet-scale video? This course connects observational learning for robotics with the latest advances in machine learning to extract and predict useful cues from video datasets.`,i=[[`Sep 1`,`Sep 3`],[`Sep 8`,`Sep 10`],[`Sep 15`,`Sep 17`],[`Sep 22`,`Sep 24`],[`Sep 29`,`Oct 1`],[`Oct 6`,`Oct 8`],[`Oct 13`,`Oct 15`],[`Oct 20`,`Oct 27`],[`Oct 29`,`Nov 3`],[`Nov 5`,`Nov 10`],[`Nov 12`,`Nov 17`],[`Nov 19`,`Dec 1`],[`Dec 3`,`Dec 8`],[`Dec 10`]],a=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function o(e){return a(e).replace(/\[([^\]]+)\]\((https?:\/\/(?:[^()]|\([^()]*\))+)\)/g,`<a href="$2" target="_blank" rel="noreferrer">$1<span aria-hidden="true">↗</span></a>`).replace(/\*\*([^*]+)\*\*/g,`<strong>$1</strong>`).replace(/`([^`]+)`/g,`<code>$1</code>`).replace(/(^|\s)\*([^*]+)\*/g,`$1<em>$2</em>`)}function s(e){let t=e.trim().split(`
`),n=[],r=[],i=null,a=()=>{r.length&&n.push(`<p>${o(r.join(` `))}</p>`),r=[]},s=()=>{i&&n.push(`</${i}>`),i=null};return t.forEach(e=>{let t=e.match(/^(#{2,4})\s+(.+)$/),c=e.match(/^[-*]\s+(.+)$/),l=e.match(/^\d+\.\s+(.+)$/);if(!e.trim())a(),s();else if(e.trim()===`---`)a(),s();else if(t){a(),s();let e=Math.min(4,t[1].length+1);n.push(`<h${e}>${o(t[2])}</h${e}>`)}else if(e.startsWith(`>`))a(),s(),n.push(`<blockquote>${o(e.replace(/^>\s?/,``))}</blockquote>`);else if(c||l){a();let e=c?`ul`:`ol`;i!==e&&(s(),i=e,n.push(`<${i}>`)),n.push(`<li>${o((c||l)[1])}</li>`)}else s(),r.push(e.trim())}),a(),s(),n.join(``)}function c(e){let t=[...e.matchAll(/^##\s+(.+)$/gm)];return t.map((n,r)=>({title:n[1].trim(),body:e.slice(n.index+n[0].length,t[r+1]?.index??e.length).trim()}))}function l(e){let t=[...e.matchAll(/^### Lecture (\d+)\s+[—-]\s+(.+)$/gm)];return t.map((n,r)=>{let i=e.slice(n.index+n[0].length,t[r+1]?.index??e.length).trim(),a=i.match(/^>\s+(.+)$/m)?.[1]?.trim();return{number:Number(n[1]),title:n[2].trim(),description:a,body:i.replace(/^>\s+.+\n?/,``).trim()}})}function u(e){let t=new Set([`Core`,`Anchor`,`Background / lecture preparation`,`Background / comparison papers`,`Background — selected sections`,`Frontier / comparison papers`,`Frontier / dataset papers`,`Student presentation pool`,`Data companion — skim before class`,`Evaluation companion — short required critique`,`Comparison papers`,`Required debate pair`,`Additional evidence cards`,`Application readings`,`Reading After Class`,`Related Readings`]);return e.split(`
`).filter(e=>{let n=e.trim();if(!n||/^###\s+/.test(n)||/^-\s+/.test(n))return!0;let r=n.match(/^\*\*([^*]+)\*\*$/);return!!(r&&t.has(r[1]))}).map(e=>e.replace(/((?:19|20)\d{2}(?:\s+preprint)?)(?:\.\s+|\s+—\s+).+$/,`$1.`)).join(`
`).replace(/\*\*\[[FRP]\]\*\*\s*/g,``).replace(/^\*\*Core\*\*$/gm,`**Read before class**`).replace(/^\*\*Anchor\*\*$/gm,`**Anchor reading**`).replace(/^\*\*Background \/ lecture preparation\*\*$/gm,`**Additional context**`).replace(/^\*\*Background \/ comparison papers\*\*$/gm,`**Additional context**`).replace(/^\*\*Background \/ comparison papers\*\*$/gm,`**Additional context**`).replace(/^\*\*Background — selected sections\*\*$/gm,`**Selected background**`).replace(/^\*\*Frontier \/ comparison papers\*\*$/gm,`**Further reading**`).replace(/^\*\*Frontier \/ dataset papers\*\*$/gm,`**Datasets and further reading**`).replace(/^\*\*Student presentation pool\*\*$/gm,`**Presentation choices**`).replace(/^\*\*Data companion — skim before class\*\*$/gm,`**Skim before class**`).replace(/^\*\*Evaluation companion — short required critique\*\*$/gm,`**Short critique**`).replace(/^\*\*Comparison papers\*\*$/gm,`**Further reading**`).replace(/^\*\*Required debate pair\*\*$/gm,`**Debate readings**`).replace(/^\*\*Additional evidence cards\*\*$/gm,`**Additional evidence**`).replace(/\n{3,}/g,`

`).trim()}function d(){let e=c(t),a=e.filter(e=>e.title.startsWith(`Week `)),o=a.slice(0,3),d=a.slice(3).flatMap(e=>l(e.body)),f=i.flat(),p=e.find(e=>e.title===`Grading`),m=e.find(e=>e.title===`Expectations`);return(0,n.jsxs)(`main`,{id:`top`,children:[(0,n.jsx)(`nav`,{className:`site-nav`,"aria-label":`Primary navigation`,children:(0,n.jsxs)(`a`,{className:`site-name`,href:`#top`,children:[(0,n.jsx)(`img`,{src:`/university.shield.rgb.blue.png`,alt:``,width:`42`,height:`42`}),(0,n.jsx)(`span`,{children:`The Johns Hopkins University`})]})}),(0,n.jsxs)(`header`,{className:`course-intro`,id:`course`,children:[(0,n.jsx)(`p`,{className:`course-code`,children:`EN.601.439 / 639 · Fall 2026`}),(0,n.jsx)(`p`,{className:`course-logistics`,children:`📍 Hodson Hall 305 · 🕒 Tuesdays and Thursdays, 4:30–5:45 PM`}),(0,n.jsx)(`h1`,{children:`Embodied AI with Web-Scale Video Data`}),(0,n.jsx)(`p`,{className:`course-description`,children:r}),(0,n.jsxs)(`div`,{className:`course-team`,"aria-label":`Course team`,children:[(0,n.jsxs)(`div`,{className:`lead-instructor`,children:[(0,n.jsx)(`span`,{children:`Instructor`}),(0,n.jsx)(`strong`,{children:(0,n.jsx)(`a`,{href:`https://homangab.github.io/`,target:`_blank`,rel:`noreferrer`,children:`Homanga Bharadhwaj`})}),(0,n.jsxs)(`p`,{children:[(0,n.jsx)(`b`,{children:`Assistant Professor`}),(0,n.jsx)(`br`,{}),`Department of Computer Science`,(0,n.jsx)(`br`,{}),`Data Science and AI Institute`,(0,n.jsx)(`br`,{}),`Laboratory of Computational Sensing and Robotics`]})]}),(0,n.jsxs)(`div`,{className:`course-assistants`,children:[(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`span`,{children:`Teaching Assistant`}),(0,n.jsx)(`strong`,{children:(0,n.jsx)(`a`,{href:`https://kartik-3004.github.io/portfolio/`,target:`_blank`,rel:`noreferrer`,children:`Kartik Narayan`})}),(0,n.jsx)(`p`,{children:`PhD student in Computer Science`})]}),(0,n.jsxs)(`div`,{children:[(0,n.jsx)(`span`,{children:`Course Assistant`}),(0,n.jsx)(`strong`,{children:(0,n.jsx)(`a`,{href:`https://scholar.google.com/citations?user=tgvhuC4AAAAJ&hl=en`,target:`_blank`,rel:`noreferrer`,children:`Nitik Jain`})}),(0,n.jsx)(`p`,{children:`MSE student in Robotics`})]})]})]})]}),(0,n.jsx)(`section`,{className:`weeks`,id:`weeks`,children:(0,n.jsxs)(`div`,{className:`week-list`,children:[o.map((e,t)=>{let r=e.title.match(/^Week \d+\s+[—-]\s+(.+)$/)?.[1];return(0,n.jsxs)(`article`,{className:`week`,children:[(0,n.jsxs)(`div`,{className:`week-meta`,children:[(0,n.jsxs)(`div`,{className:`week-label`,children:[`Lectures `,t*2+1,`–`,t*2+2]}),(0,n.jsx)(`div`,{className:`week-dates`,"aria-label":`Class dates: ${i[t].join(` and `)}`,children:i[t].map(e=>(0,n.jsx)(`span`,{className:`week-date`,children:e},e))})]}),(0,n.jsxs)(`div`,{className:`week-main`,children:[r?(0,n.jsx)(`h3`,{children:r}):null,(0,n.jsx)(`div`,{className:`week-content`,dangerouslySetInnerHTML:{__html:s(u(e.body))}})]})]},e.title)}),d.map(e=>{let t=f[e.number-1];return(0,n.jsxs)(`article`,{className:`week lecture-row`,children:[(0,n.jsxs)(`div`,{className:`week-meta`,children:[(0,n.jsxs)(`div`,{className:`week-label`,children:[`Lecture `,e.number]}),(0,n.jsx)(`div`,{className:`week-dates`,"aria-label":`Class date: ${t}`,children:(0,n.jsx)(`span`,{className:`week-date`,children:t})})]}),(0,n.jsxs)(`div`,{className:`week-main`,children:[(0,n.jsx)(`h3`,{children:e.title}),e.description?(0,n.jsx)(`p`,{className:`lecture-description`,children:e.description}):null,e.body?(0,n.jsx)(`div`,{className:`week-content`,dangerouslySetInnerHTML:{__html:s(u(e.body))}}):null]})]},`lecture-${e.number}`)})]})}),p?(0,n.jsx)(`section`,{className:`grading`,id:`grading`,"aria-labelledby":`grading-title`,children:(0,n.jsxs)(`div`,{className:`grading-inner`,children:[(0,n.jsx)(`div`,{className:`week-label`,children:`Assessment`}),(0,n.jsxs)(`div`,{className:`grading-main`,children:[(0,n.jsx)(`h2`,{id:`grading-title`,children:`Grading`}),(0,n.jsx)(`div`,{className:`grading-content`,dangerouslySetInnerHTML:{__html:s(p.body)}})]})]})}):null,m?(0,n.jsx)(`section`,{className:`expectations`,id:`expectations`,"aria-labelledby":`expectations-title`,children:(0,n.jsxs)(`div`,{className:`expectations-inner`,children:[(0,n.jsx)(`h2`,{className:`week-label`,id:`expectations-title`,children:`Expectations`}),(0,n.jsx)(`div`,{className:`expectations-content`,dangerouslySetInnerHTML:{__html:s(m.body)}})]})}):null,(0,n.jsxs)(`footer`,{children:[(0,n.jsx)(`p`,{children:`Johns Hopkins University · Department of Computer Science`}),(0,n.jsx)(`a`,{href:`#top`,children:`Back to top ↑`})]})]})}export{d as default};