---
layout: distill
title: "Agents That Never Stop Learning"
nav_title: Agenda
permalink: /current-agenda/
description: "My current research agenda on continually learning agents. My research group builds AI systems that build persistent state, learn from experience through experiential learning, and improve over their lifetime."
nav: true
nav_order: 3

bibliography: mybib.bib

toc:
  - name: Why scaling alone is not enough
  - name: Intellectual bottlenecks
    subsections:
      - name: Memory
      - name: Data efficiency
      - name: Ambiguity and active exploration
  - name: Proposed approach
    subsections:
      - name: End-to-end memory
      - name: Pathwise gradients
      - name: Environments that require exploration
  - name: Recent artifacts
  - name: Closing thoughts

_styles: >
  .post.distill d-title {
    min-height: auto;
    padding-top: 0.75rem;
    padding-bottom: 0.9rem;
  }
  .post.distill d-title h1 {
    font-size: clamp(2rem, 3.8vw, 3.35rem);
    line-height: 1.08;
    max-width: 900px;
    margin-bottom: 0.75rem;
  }
  .post.distill d-title p {
    font-size: clamp(1rem, 1.55vw, 1.2rem);
    line-height: 1.45;
    max-width: 720px;
  }
  .post.distill d-article {
    padding-top: 1.25rem;
  }
  .trajectory-figure {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 1rem;
    margin: 1.5rem auto;
    max-width: 820px;
    background: var(--global-card-bg-color);
  }
  .trajectory-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
    align-items: stretch;
  }
  .trajectory-node {
    min-height: 7.5rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 0.75rem;
  }
  .trajectory-node strong {
    display: block;
    margin-bottom: 0.35rem;
    font-size: 0.92rem;
  }
  .trajectory-node span {
    display: block;
    font-size: 0.82rem;
    line-height: 1.35;
    color: var(--global-text-color-light);
  }
  .node-memory { border-top: 4px solid #2a9d8f; }
  .node-belief { border-top: 4px solid #3a6ea5; }
  .node-action { border-top: 4px solid #c77d28; }
  .node-feedback { border-top: 4px solid #8b5cf6; }
  .node-update { border-top: 4px solid #c44e52; }
  .bottleneck-grid, .artifact-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
    margin: 1.25rem 0 1.5rem;
  }
  .bottleneck, .artifact-card {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 0.95rem;
    background: var(--global-card-bg-color);
  }
  .bottleneck h4, .artifact-card h4 {
    margin-top: 0;
    font-size: 1rem;
  }
  .bottleneck p, .artifact-card p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .system-stack {
    border-left: 4px solid var(--global-theme-color);
    padding-left: 1rem;
    margin: 1rem 0 1.5rem;
  }
  .system-stack p {
    margin-bottom: 0.8rem;
  }
  .agenda-aside {
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 1rem;
    margin: 1.25rem 0;
    background: var(--global-card-bg-color);
  }
  .agenda-aside p:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    .trajectory-row, .bottleneck-grid, .artifact-grid {
      grid-template-columns: 1fr;
    }
    .trajectory-node {
      min-height: auto;
    }
  }
---

Imagine an omnipresent assistant that understands who you are, anticipates what you need, and acts on your behalf by maintaining a single, evolving model of your life over years. Going from an AI that responds when prompted to this kind of assistant requires going well beyond scaling current methods.

A lifelong assistant would need to build personalization over time: accumulating memory across many small interactions, distinguishing stable preferences from temporary context, and adapting when a user's circumstances change. The feedback signal is sparse and often delayed: users rarely provide full labels for what mattered, why a recommendation was useful, or how today's decision will affect needs months later. Building agents with that kind of persistent personalization requires architectural commitments that current prompt-response systems mostly avoid: rapid memory formation and selective retrieval, continuously maintained state, and mechanisms for learning from delayed or ambiguous outcomes.

This is the core of my current agenda: *continual learning agents*. I want to build AI systems that do not reset after each conversation, but instead accumulate *experience*, use experiential learning to maintain useful state, and become more capable as they interact with a user, organization, or environment over time.

The diagram below is the basic loop I have in mind: the agent remembers what has happened, maintains beliefs about the current situation, acts, observes feedback, and then changes its future behavior through experience.

<d-figure>
  <figure class="trajectory-figure">
    <div class="trajectory-row">
      <div class="trajectory-node node-memory">
        <strong>Memory</strong>
        <span>What has happened, what matters, and what should be forgotten.</span>
      </div>
      <div class="trajectory-node node-belief">
        <strong>Belief state</strong>
        <span>Goals, constraints, latent preferences, and unresolved uncertainty.</span>
      </div>
      <div class="trajectory-node node-action">
        <strong>Action</strong>
        <span>Ask, search, recommend, schedule, draft, or decide.</span>
      </div>
      <div class="trajectory-node node-feedback">
        <strong>Feedback</strong>
        <span>Human responses, task outcomes, environmental changes.</span>
      </div>
      <div class="trajectory-node node-update">
        <strong>Change behavior</strong>
        <span>The agent uses experience to act differently next time.</span>
      </div>
    </div>
  </figure>
  <figcaption>A lifetime-learning agent needs a persistent loop: remember, maintain belief state, act, observe feedback, and change behavior through experience.</figcaption>
</d-figure>

## Why scaling alone is not enough

Consider a first-time parent. Events unfold through a branching decision tree over years, with each node depending on the resolution of previous uncertainties. Which pediatrician takes our insurance and has availability this month? The daycare waitlist says six months; should we put our name down at three places simultaneously? If so, which ones are near the office versus near home? How does that interact with the possibility that we might move this spring? A family member offered to help for two weeks; should that be scheduled right after birth or saved for when the spouse goes back to work?

Each of these decisions depends on the others, and they are laden with private preferences that no model can infer from a single prompt. A current chatbot can answer “what should I look for in a daycare?” with encyclopedic thoroughness. But the actual problem is not a single question; it is the web of interdependencies among them. A useful assistant would remember that the family is considering a move, track which uncertainties have resolved, notice when time-sensitive actions approach their deadlines, and reason that the daycare decision depends on the moving decision, which depends on the lease renewal deadline, which interacts with the budget after parental leave.

One might hope scaling would eventually bridge this gap. The bottleneck, however, is not the breadth of the model's knowledge, but its inability to maintain and reason over a particular user's state across time. We will see substantial progress within the scaling paradigm: competent tool use, longer reasoning chains, and increasingly capable agents with access to calendars, files, and APIs. But those capabilities do not by themselves produce agents that operate in vast action spaces that change daily, proactively identifying which dimensions matter to the user based on personal taste, financial situation, and family dynamics.

No amount of pretraining data can teach a model the daycare waitlist status for a specific family in a specific city. These are private, dynamic, context-dependent facts that exist only in the user's life and can only be learned through interaction. Scaling produces ever more knowledgeable encyclopedias. It does not automatically produce a system that tracks the state of your world and reasons about what to do next.

## Intellectual bottlenecks

Today's training regime does not equip models to deal with ambiguous situations that are long-horizon, context-limited, and genuinely costly to interact with. Personalization is the canonical instance of this problem. Each interaction with a user reveals only a sliver of their preferences, and asking the wrong question wastes a scarce resource: the user's attention and patience. The system must learn to actively explore and resolve uncertainty, not merely retrieve and generate.

We want to build an AI system that maintains a persistent, structured representation of the user's life: goals, constraints, uncertainties, and dependencies among them. Where the current paradigm forces the user to serve as the sole integrating intelligence across a hundred chat threads, a state-aware system takes over that burden. It knows that the daycare question is connected to the potential move, which is connected to the commute calculation. It tracks which uncertainties have been resolved and which remain open. It prioritizes actions that are time-sensitive or gate downstream decisions.

<div class="bottleneck-grid">
  <div class="bottleneck">
    <h4>1. Memory</h4>
    <p>Agents need persistent, structured memory: not only transcripts, but compact representations of goals, constraints, open questions, and decision-relevant facts.</p>
  </div>
  <div class="bottleneck">
    <h4>2. Data efficiency</h4>
    <p>Human interaction is costly. Agents must learn from sparse feedback by exploiting structure in the planning problem rather than relying only on black-box reward signals.</p>
  </div>
  <div class="bottleneck">
    <h4>3. Active exploration</h4>
    <p>Personalization is partially observed. Agents need to identify latent structure, ask informative questions, and time actions around real constraints.</p>
  </div>
</div>

### Memory

LLMs have no real episodic memory. The context window functions like working memory, but it is limited and transient. There is no mechanism to form, consolidate, and selectively retrieve new memories after training. Retrieval-augmented generation is an attempt to bolt on a separate database, but the architectural mismatch is deep: storage, retrieval, and reasoning are typically trained separately, so the model cannot learn end-to-end what to store, when to recall it, or how a retrieval decision affected downstream task performance.

A lifetime-learning agent needs a memory architecture where storage, consolidation, and retrieval are part of the learning system itself. Over repeated interactions, the raw episodic record becomes unwieldy. The system must learn to compress experiences into compact, reusable semantic representations, such as learning that a family prioritizes outdoor time and short commutes rather than storing only the verbatim transcript where those preferences were discussed. This transition from episodic to semantic memory must be learned so the system discovers what level of abstraction best serves downstream decision-making.

Our work on exchangeable sequence modeling and autoregressive stochastic modeling develops foundations for learning from structured sequences of experience <d-cite key="MittalLiYeGuNa25,MittalZhDoNa25"></d-cite>.

### Data efficiency

We need reinforcement learning algorithms that are dramatically more sample-efficient than what we have today. Current RL methods that underpin post-training, including REINFORCE-style policy gradients and their descendants, are fundamentally zeroth-order: they treat the agent's entire reasoning process as a black box, observe a scalar reward at the end, and use it to nudge enormous numbers of parameters. This is extraordinarily slow and wasteful. The data efficiency of these estimators deteriorates with planning horizon, which is fatal for personalization problems whose horizons are months to years.

The alternative is to exploit structure in the agent's planning problem. If an agent maintains beliefs over a user's latent state and selects actions to reduce uncertainty, the process is not arbitrary. Beliefs update from prior information and new observations; rewards can often measure value of information, such as reduction in posterior uncertainty; and many of the relevant operations have differentiable structure. The research challenge is to make use of that structure rather than throwing away information and relying only on Monte Carlo returns.

This connects to our work on optimization-driven adaptive experimentation, adaptive labeling, and differentiable simulation for operational decision-making <d-cite key="CheJiNaWa24,MittalMaJoNa25,CheDoNa24"></d-cite>.

### Ambiguity and active exploration

A central challenge in personalization is its partially observable nature. The user's preferences, context, and goals constitute a latent state that can only be inferred through strategic questioning and observation. A competent assistant must recognize critical dimensions, form beliefs, update them as uncertainties resolve on specific timelines, and prioritize actions that are time-sensitive or gate downstream decisions.

This is the stark contrast with current systems that treat each conversation turn as an independent prediction problem. Many AI systems are trained on prompts that have clear solutions, or on simulated environments that are expensive to make realistic but do not capture the actual skill of learning what matters in a user's life. The goal is not to train on the most faithful implementation of every website or workflow. The goal is to teach agents a general algorithm for sequentially gathering information and acting under uncertainty.

Our recent work on adaptive elicitation, repeated product-recommendation environments, and LatentGym builds testbeds where agents must learn through interaction rather than solve one prompt in isolation <d-cite key="WangZoZeNa25,YangChYeNa25,MittalCaYeYeWuChCaKoZeNa26"></d-cite>.

## Proposed approach

A lifetime-learning assistant is best viewed as an RL engine acting in the world: a belief state over the user and environment, a memory system that updates online, and an adaptive experimentation engine that chooses what to learn next. The foundational thesis is to meta-learn the learning algorithm, not merely the model. Rather than training ever-larger models on static datasets, we want to train an algorithm that can rapidly adapt to new users, new contexts, and new tasks at deployment time.

<div class="system-stack">
  <p><strong>Memory:</strong> form, consolidate, retrieve, and forget experiences in service of future decisions.</p>
  <p><strong>Belief updates:</strong> maintain uncertainty over latent goals, preferences, constraints, and unresolved environmental state.</p>
  <p><strong>Adaptive experimentation:</strong> choose questions and actions that are informative, timely, and useful for downstream decisions.</p>
  <p><strong>Evaluation:</strong> measure whether the agent improves over trajectories, not only whether it answers one prompt.</p>
</div>

### End-to-end memory

Transformers are powerful reasoning engines over whatever is present in working memory. But they lack the functional equivalent of a hippocampal system for encoding new experiences, consolidating them, and selectively retrieving them when contextually relevant. Our proposal is to study memory modules that interface directly with the representational space used for ongoing reasoning. There should be no format mismatch between memory and cognition: storage and retrieval should operate in the same substrate that the agent uses to reason.

A concrete direction is to interleave the transformer with memory layers that can read, gate, and write. The agent's hidden states query memory; learned gates control how much retrieved content blends into the residual stream; and output representations are committed to memory through learned updates. Because the operations are differentiable, gradients from downstream objectives can flow through retrieval decisions and storage decisions. The system can learn what to recall and what to remember.

Operationally, each memory layer can be thought of as performing three steps. In the <em>read</em> step, current hidden states query an external memory through cross-attention. In the <em>gate</em> step, learned parameters control how much retrieved content enters the residual stream. In the <em>write</em> step, output representations are committed back to memory through attention-weighted updates, with a learned novelty signal deciding what is worth storing. This is the basic loop current RAG systems lack: the memory system is not merely a lookup table, but part of the agent's trainable cognition.

Memory consolidation is equally important. Since memory grows with every interaction, the system must compress it to preserve high-value entries while merging or forgetting low-value ones. The natural goal is for a transition from episodic to semantic memory to emerge: repeated interactions about a parent eventually become compact representations of preferences, constraints, and unresolved decisions.

### Pathwise gradients

Current post-training methods for language agents often use binary or scalar outcomes to update huge models. But the agent's planning problem often has exploitable structure. Consider an agent who maintains implicit beliefs over a user's latent state and selects actions to reduce uncertainty. The dynamics of this process are governed by belief updates; the reward may be a differentiable function of uncertainty reduction; and the entire inner loop can sometimes be represented as a computational graph.

We formalize this style of problem as a Markov decision process over belief states. At each step, the agent selects an action, observes a response, updates its belief, and receives a reward that reflects the value of information gained. When the transition and reward functions are differentiable operations on continuous belief representations, we can backpropagate through the trajectory of decisions rather than relying only on high-variance Monte Carlo estimators.

The hard part is that language actions are discrete. We need smoothing approximations, straight-through estimators, and careful engineering that preserve useful gradients through discrete choices. The broader point is that algorithm design should exploit known structure in the problem rather than treating the entire agent as a black box. Our prior work on smoothed autodifferentiation for long-horizon operational problems points to the scale of sample-efficiency gains that may be possible <d-cite key="CheDoNa24,CheJiNaWa24"></d-cite>.

One way to make this concrete is to replace hard token choices with temperature-controlled softmax relaxations during training, while using straight-through estimators to preserve the forward behavior of discrete decisions. This is not a magic trick; it is an engineering compromise that lets gradients flow through the parts of the trajectory where the planning problem has structure. The hope is to obtain the kind of variance reduction that is impossible when the entire trajectory is treated as an opaque string of sampled tokens.

### Environments that require exploration

We need training environments that are simple enough to build at scale but complex enough to require genuine exploration. The capability target is not memorizing answers; it is identifying which dimensions of a problem are important and determining which information would resolve future uncertainty.

For the new-parent example, this means simulating users with different family structures, geographies, financial situations, and latent preferences about parenting philosophy, work-life balance, and risk tolerance. The agent trained in this environment should learn not the answer to any specific parenting question, but the algorithm for figuring out what matters to a specific parent and acquiring that information efficiently.

These environments do not need to be perfect replicas of reality. A simulator should teach the algorithmic skill of long-term planning and active information gathering. That skill can generalize across domains if the environments capture the right latent structure and interaction costs. Our prior work on personalization benchmarks and adaptive elicitation gives us hard-earned lessons toward scaling to the complexity and open-endedness required for general personalization <d-cite key="ZolloSiYeLiNa24,LiChNaPe25,WangZoZeNa25"></d-cite>.

This is also why I am skeptical of environments that try to reproduce every surface detail of a web application. Humans do not learn to interact with the web by clicking every possible button in a perfect simulation of LinkedIn. We need environments that teach the algorithmic pattern: infer what matters, gather the information efficiently, and transfer that skill to a new interface or workflow.

## Recent artifacts

Benchmarks should be scientific instruments. They should expose the failure modes that matter for deployment and make progress measurable. For agentic systems, that means evaluating long-horizon adaptation, structured artifacts, and the quality of the process by which the artifact was produced.

<div class="artifact-grid">
  <div class="artifact-card">
    <h4>MBABench</h4>
    <p>Evaluates whether agents can produce professional financial workbooks rather than answer isolated spreadsheet questions <d-cite key="YenPoGeMeFaShLiBaDuLiGuNa26"></d-cite>.</p>
  </div>
  <div class="artifact-card">
    <h4>LatentGym</h4>
    <p>Gives controlled latent structure so we can measure whether agents explore, infer, and exploit across related tasks <d-cite key="MittalCaYeYeWuChCaKoZeNa26"></d-cite>.</p>
  </div>
  <div class="artifact-card">
    <h4>SynthTools</h4>
    <p>Studies how to scale synthetic tool environments for agent development <d-cite key="CastellaniYeMiYeNa25"></d-cite>.</p>
  </div>
</div>

<div class="img l-body">
  <div class="publications">
      {% bibliography -q @*[key=YenPoGeMeFaShLiBaDuLiGuNa26]* %}
      {% bibliography -q @*[key=MittalCaYeYeWuChCaKoZeNa26]* %}
      {% bibliography -q @*[key=CastellaniYeMiYeNa25]* %}
      {% bibliography -q @*[key=WangZoZeNa25]* %}
      {% bibliography -q @*[key=YangChYeNa25]* %}
  </div>
</div>

## Closing thoughts

The agenda above addresses three bottlenecks as an integrated system. Differentiable memory gives the agent the capacity to maintain persistent, structured representations of a user's life. Pathwise and structured learning methods provide the sample efficiency needed to learn from sparse, costly feedback. Ambiguity-rich environments provide the curriculum that teaches agents to ask the right questions, resolve the right uncertainties, and time their actions around real-world constraints.

Together, these pillars are the infrastructure for continual learning agents: systems that maintain state, learn from experience, and improve across a long relationship with a user or organization. Foundation models have given us the raw material: broad world knowledge and linguistic competence. What remains are scientific breakthroughs that demand principled algorithms, serious engineering ambition, and the intellectual honesty to let empirical reality guide the theory.

If we get this right, the result will be a fundamental change in how people navigate the complexity of modern life.
