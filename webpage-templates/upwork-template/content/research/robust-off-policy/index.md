---
title: III. Robust off-policy learning
order: 4
---
Engineered approaches to off-policy learning---based on deep learning and simulation optimization---have recently achieved substantial empirical progress but often produce unreliable policies due to their heuristic nature. For these methods to bear fruit and transform applications where experimentation is costly, it is important to avoid deploying policies whose safety cannot be verified. While prediction models can be easily evaluated on previously collected data, assessing decision-making performance requires counterfactual reasoning. Traditional modeling assumptions that allow adjusting prediction models to learn counterfactuals rarely hold in practice. The growth in the nominal volume of data is no panacea: observed data typically only covers a portion of the state-action space, posing challenges in counterfactual learning. Concomitant to unseen data sparsity, shifts in the data distribution are common. Observed decisions depend on unrecorded confounders, and learning good policies requires causal reasoning. Marginalized demographic groups are severely underrepresented; for example, among 10000+ cancer clinical trials the National Cancer Institute funds, fewer than 5% of participants were non-white. 

Our existing statistical language falls woefully short as it relies on unverifiable (and often false) assumptions, and we lack diagnostics that can identify failure modes. We develop data analysis tools that can i) guarantee robust scientific findings and perhaps more importantly, ii) fail in expected ways by highlighting the fundamental epistemic uncertainty in the data.

### External validity

While large-scale randomized studies offer a “gold standard” for internal validity, their external validity can be called into question over spatiotemporal changes in the population, particularly when the treatment effect is heterogeneous across the population. The ACCORD and SPRINT trials offer a prominent example: they studied the effect of treatments to lower blood pressure on cardiovascular disease, but reached opposite conclusions despite exceptionally large sample sizes (5-10K). The mechanism behind the difference could not be explained by experts even ex-post. 

We develop new methods to assess and improve the external validity of RCTs. In particular, we develop sensitivity analysis frameworks that allows researchers to assess the extent to which existing experiments inform the treatment effect in a new target site and quantify an expected range of the policy effect for each new site. 

{{<cite page="/citations/robust-causal-inference" view="4" >}}

### **Unobserved confounding**

Off-policy methods can learn decision policies using the rich reservoir of previously collected (observational) data. A universal assumption that enable counterfactual reasoning requires observed decisions do not depend on any unrecorded confounders that simultaneously affect future states/rewards. This condition is frequently violated in medicine, e-commerce, and public policy, e.g., emergency department patients often do not have an existing record in the hospital’s electronic health system, leaving essential patient-specific information unobserved in subsequent counterfactual analysis. In the presence of unobserved confounding, even with large samples, it is impossible to precisely estimate the performance of the evaluation policy. To guard against spurious counterfactual evaluations, we propose a worst-case approach where we first posit a realistic notion of bounded unobserved confounding that limits the influence of unrecorded variables on observed decisions and develop corresponding worst-case bounds on the reward. 

{{<cite page="/citations/bounds-on-conditional" view="4" >}}

![confounding.png](/research/confounding.png)

### **Unforeseen data sparsity**

A central challenge in observational analysis is that the effective sample size is difficult to gauge. Even when a nominally large dataset is collected, the effective sample size may be prohibitively small when there is little overlap between trajectories seen under the data-generating and proposed policies. Data sparsity becomes more pronounced in modern problems that involve high-dimensional covariates representations; causal identification becomes difficult on parts of the covariate space with limited effective sample size. Existing observational methods are only valid in the large sample limit and silently fail in practical instances, where the effective sample size is limited. 

We propose a new inferential framework that provides always-valid uncertainty quantification. Unlike asymptotic methods, we quantify instance-specific uncertainty that accurately scales with the level of overlap Our proposed counterfactual evaluation paradigm i) provides always-valid uncertainty estimates, spurring engineering progress through rigorous empirical evaluations, and ii) guides the optimal design of experiments based on previously collected (observational) data.

{{< youtube FqdH75RazNQ >}}