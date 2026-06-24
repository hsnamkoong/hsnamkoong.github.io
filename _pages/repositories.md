---
layout: page
permalink: /repositories/
title: Code & Data
nav_title: Resources
description: I am passionate about building empirical foundations for methodological progress. My group leads open-source projects, benchmarks, and data releases based on our research.
nav: true
nav_order: 5

_styles: >
  .post-header {
    margin-bottom: 1rem;
  }
  .post-title {
    font-size: clamp(2.1rem, 3.5vw, 3.25rem);
    line-height: 1.05;
  }
  .post-description {
    max-width: 900px;
    line-height: 1.45;
  }
  .post article > p {
    max-width: 900px;
    line-height: 1.5;
    font-size: 0.98rem;
  }
  .post article > h2 {
    font-size: 0.86rem;
    margin-top: 1.9rem;
    margin-bottom: 0.9rem;
  }
  .method-note {
    border-left: 4px solid var(--global-theme-color);
    padding: 0.45rem 0 0.45rem 0.8rem;
    margin: 0.8rem 0 1.5rem;
    max-width: 900px;
    font-size: 0.92rem;
    line-height: 1.45;
  }
  .release-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin: 0.75rem auto 2rem;
    max-width: 920px;
  }
  .release-card {
    display: grid;
    grid-template-columns: 150px minmax(0, 1fr);
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    overflow: hidden;
    background: var(--global-card-bg-color);
    min-height: 132px;
  }
  .release-card img {
    width: 100%;
    height: 100%;
    min-height: 132px;
    object-fit: cover;
    object-position: left center;
    display: block;
    border-right: 1px solid var(--global-divider-color);
  }
  .release-card img.release-card-img-contain {
    object-fit: contain;
    object-position: center;
    padding: 0.5rem;
    background: #eef5fb;
  }
  .release-card img.release-card-img-focus {
    object-position: top center;
  }
  .release-card-body {
    padding: 0.85rem 0.95rem 0.95rem;
  }
  .release-card h3 {
    font-size: 1.08rem;
    margin: 0 0 0.4rem;
  }
  .release-card p {
    font-size: 0.88rem;
    line-height: 1.45;
    margin-bottom: 0.8rem;
  }
  .release-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
  .release-actions a {
    border: 1px solid var(--global-divider-color);
    border-radius: 6px;
    padding: 0.22rem 0.55rem;
    color: var(--global-text-color) !important;
    font-size: 0.82rem;
    line-height: 1.3;
    background: var(--global-bg-color);
  }
  .release-actions a:hover {
    border-color: var(--global-theme-color);
    color: var(--global-theme-color) !important;
    text-decoration: none;
  }
  @media (max-width: 640px) {
    .release-card {
      grid-template-columns: 1fr;
    }
    .release-card img {
      height: 8.5rem;
      min-height: 0;
      border-right: 0;
      border-bottom: 1px solid var(--global-divider-color);
    }
  }
---

The GitHub pins below are the primary index of our open-source work. This page also highlights larger public releases with companion datasets or project pages.

<div class="method-note">
  <strong>Methodological context:</strong> <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6974119">Empirical Rigor Through Benchmarking in Operations Research</a> describes the philosophy behind building reusable empirical artifacts.
</div>

## Flagship releases

<div class="release-grid">
  <div class="release-card">
    <img src="/assets/img/mbabench-model-thumb.png" alt="MBABench financial spreadsheet benchmark preview">
    <div class="release-card-body">
      <h3>MBABench</h3>
      <p>End-to-end financial spreadsheet tasks for evaluating professional-quality agent workflows.</p>
      <div class="release-actions">
        <a href="https://arxiv.org/abs/2605.22664">Paper</a>
        <a href="/news/mbabench-v1/">Blog</a>
        <a href="https://github.com/namkoong-lab/MBABench">Code</a>
        <a href="https://huggingface.co/datasets/namkoong-lab/mbabench-modeloff">Data</a>
        <a href="https://mbabench.org/">Website</a>
      </div>
    </div>
  </div>
  <div class="release-card">
    <img src="/assets/img/latentgym-overview-thumb.png" alt="LatentGym Task 10 cross-task learning example" class="release-card-img-focus">
    <div class="release-card-body">
      <h3>LatentGym</h3>
      <p>A controllable testbed for cross-task experiential learning with latent structure.</p>
      <div class="release-actions">
        <a href="https://arxiv.org/abs/2606.15306">Paper</a>
        <a href="https://dakshmittal30.github.io/LatentGym-Experiential-Learning/">Blog</a>
        <a href="https://github.com/namkoong-lab/LatentGym">Code</a>
        <a href="https://huggingface.co/collections/namkoong-lab/latentgym-6a22ddf5339b7ef0423934c6">Data</a>
      </div>
    </div>
  </div>
  <div class="release-card">
    <img src="/assets/img/synthtools-framework-thumb.png" alt="SynthTools top-down tool generation overview" class="release-card-img-focus">
    <div class="release-card-body">
      <h3>SynthTools</h3>
      <p>A framework for scaling synthetic tool environments for agent development and evaluation.</p>
      <div class="release-actions">
        <a href="https://arxiv.org/abs/2511.09572">Paper</a>
        <a href="https://github.com/namkoong-lab/SynthTools">Code</a>
        <a href="https://github.com/namkoong-lab/SynthTools/blob/main/task_content.jsonl">Data</a>
        <a href="https://github.com/namkoong-lab/SynthTools">Website</a>
      </div>
    </div>
  </div>
  <div class="release-card">
    <img src="/assets/img/bela-exploratory-thumb.png" alt="BELA exploratory without context example" class="release-card-img-focus">
    <div class="release-card-body">
      <h3>In-context experiential learning</h3>
      <p>A repeated product-recommendation benchmark for studying agents that improve from interaction.</p>
      <div class="release-actions">
        <a href="https://arxiv.org/abs/2511.22130">Paper</a>
        <a href="https://github.com/namkoong-lab/interactive-benchmark">Code</a>
        <a href="https://www.experiential-learning-benchmark.com/">Website</a>
      </div>
    </div>
  </div>
</div>

## Repositories

{% if site.data.repositories.repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
