---
layout: page
permalink: /repositories/
title: Code & Data
description: I am passionate about building empirical foundations for methodological progress. My group leads several open-source projects based on our research.
nav: true
nav_order: 5
---

{% if site.data.repositories.repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
