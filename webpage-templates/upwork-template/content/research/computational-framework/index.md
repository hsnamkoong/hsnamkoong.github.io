---
title: II. Computational framework for decision-making
order: 3
---
### Auto-differentiable discrete event simulation

Typical operational decision-making problems (e.g., queueing, inventory management) are often distinguished by two characteristics: i) the dynamics of the system are relatively simple and ii) action space is combinatorially large. Despite their flexibility, black-box reinforcement learning methods are unreliable and require prohibitive amounts of data. We develop auto-differentiable simulators that can directly optimize policies at scale and showcase the promise of this algorithmic development paradigm on the benchmark problems we develop.

{{<cite page="/citations/auto-differentiable-discrete" view="4" >}}

### **Adaptive experimentation at scale**

Adaptive data collection can significantly improve data efficiency. Standard algorithms are primarily designed to satisfy good upper bounds on their performance (regret bounds), but do not model important operational constraints and are challenging to implement due to infrastructural/organizational difficulties. Instead of the typical theory-driven paradigm, we leverage computational tools and empirical benchmarking for algorithm development. Our proposed framework models practical instances in online platforms and social networks involving a handful of reallocation epochs in which outcomes are measured in batches. 

{{<cite page="/citations/distilled-thompson-sampling" view="4" >}}
{{<cite page="/citations/adaptive-experimentation" view="4" >}}


To model short-horizon problems, we must design algorithms that optimize instance-specific constants, instead of relying on regret bounds that only hold in the large horizon limit. We develop a computation-driven adaptive experimentation framework that can flexibly handle batching. Our main observation is that normal approximations, which are universal in statistical inference, can also guide the design of adaptive algorithms. Instead of the typical theory-driven paradigm, we leverage computational tools and empirical benchmarking for algorithm development. Our approach significantly improves statistical power over standard methods, even when compared to Bayesian bandit algorithms (e.g., Thompson sampling) that require full distributional knowledge of individual rewards. Overall, we expand the scope of adaptive experimentation to settings that are difficult for standard methods, involving limited adaptivity, low signal-to-noise ratio, and unknown reward distributions.**** 

![arm_diagram.png](/research/arm_diagram.png)

    {{< youtube CLzRcOw9eyk >}}