---
title: I. Trustworthy AI 
order: 2
---
Modern data collection systems acquire data from heterogeneous sources, and classical approaches that optimize average-case performance yield brittle AI systems. They fail to

- make good predictions on underrepresented groups
- generalize to new environments, even those similar to that seen during training
- be robust to adversarial examples and long-tailed inputs.

Yes, even the largest models trained on the entirety of the internet! 

Despite recent successes, lack of understanding on the failure modes of AI systems highlights the need for models that i) reliably work and ii) rigorous evaluation schemes and diagnostics that maintain their quality. We take a holistic “industrial engineering” view of AI systems, studying them from data collection to deployment & monitoring.

![ai-overview.png](/research/ai-overview.png)

### Building a language defining distribution shifts
Different distribution shifts require different solutions. Understanding *why* model performance worsened is a fundamental step for informing subsequent methodological and operational interventions. Heterogeneity in data helps robustness, but the cost of data collection is often a binding constraint. We build a nuanced modeling language for quantifying data heterogeneity (or lack thereof), and use it to make optimally allocate limited resources in the AI production pipeline.


{{<cite page="/citations/diagnosing-model-performance   " view="4" >}}
{{<cite page="/citations/on-the-need-for-a-language" view="4" >}}


[Modeling and Exploiting Data Heterogeneity under Distribution Shifts Tutorial](https://nips.cc/virtual/2023/tutorial/73953)

### Foundations of distributional robustness

Our vision is to build robust and reliable learning procedures that make decisions with a guaranteed level of performance over its inputs. My Ph.D. thesis built the statistical~\cite{NamkoongDu16, DuchiGlNa21, DuchiNa21} and computational

{{<cite page="/citations/learning-models-with" view="4" >}}
{{<cite page="/citations/distributionally-robust" view="4" >}}


{{< youtube DRlF5sdCkKY >}}