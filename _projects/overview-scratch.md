---
layout: page
title: research highlight
description: with background image
img: assets/img/12.jpg
importance: 7
category: work
related_publications: true
---

# AI-driven decision-making

My research develops AI-driven approaches to decision-making, with a particular emphasis on trustworthy and responsible learning methods. This requires an interdisciplinary approach spanning several fields including machine learning, operations research, and statistics. 

<h2> Research philosophy and methodology  </h2>

The standard algorithmic development paradigm for decision-making relies on theoretical performance guarantees and as a result, often ignore important operational constraints or are non-performant in practice. While theoretical insights can provide invaluable principles, their successful operationalization requires recognizing and internalizing the limitations of crude approximations and unverifiable assumptions we put in place for mathematical convenience. 

My research group identifies central intellectual bottlenecks in real-world problems, and resolve them by building computational and data-centric foundations borne out of mathematical principles. Our research methodology aims to connect two disparate yet complementary worldviews:

- theoretical and computational tools from statistical learning, optimization, applied probability, and casual inference
- rigorous empirical benchmarking practices arising from the AI research community’s data-centric approach.

I take inspiration from Von Neumann’s perspective on mathematical sciences, which I paraphrase below:

<blockquote style="font-size: 1em;">
    As a mathematical discipline travels far from its empirical source only indirectly inspired from ideas coming from 'reality', it is beset with grave dangers that it will develop along the line of least resistance and become more and more purely aestheticizing. This need not be bad if the discipline is under the influence of researchers with an exceptionally well-developed taste, but the only general remedy is the rejuvenating return to the source: the reinjection of directly empirical ideas. I am convinced that this is a necessary condition to conserve the freshness and the vitality of the subject, and that this will remain so in the future. (Click here for the [full article](/assets/pdf/TheMathematician.pdf).)
</blockquote>

I am fortunate to be able to learn from the well-developed taste of my wonderful colleagues. Concurrent to this personal education, I (try to) inject empirical ideas to formulate research directions to increase the impact of my research.


<style>
    details summary {
        font-size: 2em; /* H2 font size */
        font-weight: bold;
    }
</style>


<details>
    <summary> I. Trustworthy AI  </summary>
    <p> 
    <h5 style="padding-bottom: 10px;"></h5>
    Modern data collection systems acquire data from heterogeneous sources, and classical approaches that optimize average-case performance yield brittle AI systems. They fail to

    - make good predictions on underrepresented groups
    - generalize to new environments, even those similar to that seen during training
    - be robust to adversarial examples and long-tailed inputs.

    Yes, even the largest models trained on the entirety of the internet! 

    Despite recent successes, lack of understanding on the failure modes of AI systems highlights the need for models that i) reliably work and ii) rigorous evaluation schemes and diagnostics that maintain their quality. We take a holistic “industrial engineering” view of AI systems, studying them from data collection to deployment & monitoring.

    <h5 style="padding-bottom: 20px;"></h5>
    <div class="d-flex justify-content-center">
        <div class="text-center">
            {% include figure.liquid loading="eager" path="assets/img/ai-overview.jpg" title="AI Overview" class="img-fluid rounded z-depth-1 w-50" %}
        </div>
    </div>
    <div class="caption">
        <strong> Process view of AI: </strong>
        Methodological development in ML largely focuses on model training. Taking a system-level view, my research  identifies bottlenecks in the process and algorithms to resolve them. 
    </div>
    <h5 style="padding-bottom: 20px;"></h5>


    <h3> Building a language defining distribution shifts </h3>

    Different distribution shifts require different solutions. Understanding *why* model performance worsened is a fundamental step for informing subsequent methodological and operational interventions. Heterogeneity in data helps robustness, but the cost of data collection is often a binding constraint. We build a nuanced modeling language for quantifying data heterogeneity (or lack thereof), and use it to make optimally allocate limited resources in the AI production pipeline. To learn more, watch the following tutorial and take a look at the following two papers.

    <h5 style="padding-bottom: 20px;"></h5>

    <h5><a href="https://nips.cc/virtual/2023/tutorial/73953" target="_blank">NeurIPS 2023 Tutorial</a></h5>

    <div class="d-flex justify-content-center">
        <div class="text-center">
        <!-- 
            <p style="font-size: 1.3em;"><a href="https://nips.cc/virtual/2023/tutorial/73953" target="_blank"><strong>NeurIPS 2023 Tutorial</strong></a></p> 
            -->
            <a href="https://nips.cc/virtual/2023/tutorial/73953" target="_blank">
                <img src="/assets/img/neurips-tutorial-2023.png" alt="Watch the tutorial" width="460" height="130" border="10" />
            </a>
        </div>
    </div>

    <h5 style="padding-bottom: 20px;"></h5>

    <h5> Selected Papers </h5>
    <div class="publications">
        {% bibliography -q @*[key=CaiNaYa23]* %}
    </div>

    <div class="publications">
        {% bibliography -q @*[key=LiuWaCuNa24]* %}
    </div>

    <h5 style="padding-bottom: 20px;"></h5>

    <h3> Foundations of distributional robustness </h3>

    Our vision is to build robust and reliable learning procedures that make decisions with a guaranteed level of performance over its inputs. My Ph.D. thesis built the statistical
    {% cite NamkoongDu16, DuchiGlNa21, DuchiNa21 %}, and computational {% cite NamkoongDu16 %} foundations of robust machine learning. As robustness is a central topic spanning across multiple fields, my subsequent works have developed robust algorithms for deep learning {% cite SinhaNaVoDu18, VolpiNaSeDuMuSa18 %}, causal inference {% cite YadlowskyNaBaDuTi21, JeongNa22 %}, reinforcement learning {% cite NamkoongKeYaBr20 %}, and safety evaluation of autonomous vehicles {% cite OKellySiNaDuTe18 %}. These works have led to new approaches toward fairness by characterizing fundamental connections between robustness and fairness {% cite HashimotoSrNaLi18, DuchiHaNa22, LiNaXi24 %}. Watch my talk (@ Google Brain, 2021) and the following two representative papers to learn more.

    <h5 style="padding-bottom: 20px;"></h5>

    {% include video.liquid path="https://www.youtube.com/embed/DRlF5sdCkKY?si=d1t8-_HYudo-K1qY" class="img-fluid rounded z-depth-1 w-50"%}
    

    <div class="publications">
        {% bibliography -q @*[key=DuchiNa21]* %}
    </div>
    <div class="publications">
        {% bibliography -q @*[key=DuchiHaNa22]* %}
    </div>
    </p>
</details>

<br/>

<details>
    <summary> II. Computational frameworks for decision-making  </summary>
    <p> 
    
    <h5 style="padding-bottom: 10px;"></h5>
        Decision-making problems in OR/MS concerns the optimal allocation of scarce resources. We build scalable computational frameworks for learning operational decisions by leveraging i) auto-differentiable simulators, and ii) empirically rigorous benchmarking. Our goal is to build a algorithmic development paradigm based on computation rather than theoretical approximations. 

    <h5 style="padding-bottom: 10px;"></h5>

    <h3> Adaptive experimentation at scale </h3>

    Adaptive data collection can significantly improve data efficiency. Standard algorithms are primarily designed to satisfy good upper bounds on their performance (regret bounds), but do not model important operational constraints and are challenging to implement due to infrastructural/organizational difficulties. Instead of the typical theory-driven paradigm, we leverage computational tools and empirical benchmarking for algorithm development. Our proposed framework models practical instances in online platforms and social networks involving a handful of reallocation epochs in which outcomes are measured in batches. 

    <div class="publications">
        {% bibliography -q @*[key=NamkoongDaBa24]* %}
    </div>
    
    <div class="publications">
        {% bibliography -q @*[key=CheNa23]* %}
    </div>
        
    <strong> TLDR; </strong> Starting with my one-year stint at Meta's adaptive
                  experimentation team, I've been pondering on how
                  bandit algorithms are largely designed by
                  theoreticians to achieve good regret bounds and are
                  rarely used in practice due to the difficulty of
                  implementation and poor empirical performance. In
                  this work, we focus on underpowered, short-horizon,
                  and large-batch problems that typically arise in
                  practice. 
                  
                  We use large batch normal approximations
                  to derive an MDP formulation for deriving the
                  optimal adaptive design. Our optimization formulation allows the
                  use of standard computational tools in ML for designing adaptive
                  algorithms.
                  Our approach significantly improves statistical power over standard 
                  methods, even when compared to Bayesian bandit algorithms 
                  (e.g., Thompson sampling) that require full distributional knowledge 
                  of individual rewards. Overall, we expand the scope of 
                  adaptive experimentation to settings that are difficult 
                  for standard methods, involving limited adaptivity, 
                  low signal-to-noise ratio, and unknown reward distributions.
        
        <h5 style="padding-bottom: 20px;"></h5>
        <div class="d-flex justify-content-center">
            <div class="text-center">
                {% include figure.liquid loading="eager" path="/assets/img/arm-diagram.png" title="AES" class="img-fluid rounded z-depth-1 w-50" %}
            </div>
        </div>
        <div class="caption">
            To model short-horizon problems, we must design algorithms that optimize instance-specific constants, 
            instead of relying on regret bounds that only hold in the large horizon limit.
             We develop a computation-driven adaptive experimentation framework that can flexibly handle batching. Our main observation is that normal approximations, which are universal in statistical inference, can also guide the design of adaptive algorithms. Instead of the typical theory-driven paradigm, we use PyTorch and empirical benchmarking for algorithm development.
        </div>
        <h5 style="padding-bottom: 20px;"></h5>
            
    {% include video.liquid path="https://www.youtube.com/embed/CLzRcOw9eyk?si=8v_F9ODlpHC588Ei" class="img-fluid rounded z-depth-1 w-50"%}

    <h5 style="padding-bottom: 20px;"></h5>
    <h3> Auto-differentiable discrete event simulation </h3>

    Typical operational decision-making problems (e.g., queueing, inventory management) are often distinguished by two characteristics: i) the dynamics of the system are relatively simple and ii) action space is combinatorially large. Despite their flexibility, black-box reinforcement learning methods are unreliable and require prohibitive amounts of data. We develop auto-differentiable simulators that can directly optimize policies at scale and showcase the promise of this algorithmic development paradigm on the benchmark problems we develop.

    <!-- - E. Che, J. Dong, and H. Namkoong. Auto-differentiable discrete event simulation for queuing network control. Working paper, 2024. -->

    </p>
</details>
<br/>



<details>
    <summary> III. Robust off-policy learning  </summary>
    <p>    

    Off-policy methods can learn sequential decision policies using the rich reservoir of previously collected (non-experimental / observational) data. Although engineered approaches to off-policy learning have seen much progress—based on deep learning and simulation optimization—they often produce unreliable policies due to their heuristic nature. For these methods to bear fruit and transform applications where experimentation is costly, it is important to avoid deploying policies whose safety cannot be verified. 

    Engineering progress is predicated on rigorous empirical evaluation. While prediction models can be easily evaluated on previously collected data, assessing decision-making performance requires counterfactual reasoning. Traditional modeling assumptions that allow adjusting prediction models to learn counterfactuals rarely hold in practice. The growth in the nominal volume of data is no panacea: observed data typically only covers a portion of the state-action space, posing challenges in counterfactual learning. Concomitant to unseen data sparsity, shifts in the data distribution are common. Observed decisions depend on unrecorded confounders, and learning good policies requires causal reasoning. Marginalized demographic groups are severely underrepresented; for example, among 10000+ cancer clinical trials the National Cancer Institute funds, fewer than 5% of participants were non-white. 

    Our existing statistical language falls woefully short as it relies on unverifiable (and often false) assumptions, and we lack diagnostics that can identify failure modes. We develop data analysis tools that can i) guarantee robust scientific findings and perhaps more importantly, ii) fail in expected ways by highlighting the fundamental epistemic uncertainty in the data.

    {% include video.liquid path="https://www.youtube.com/embed/FqdH75RazNQ?si=yr19pw3ygvcDQtHu" class="img-fluid rounded z-depth-1 w-50"%}

    <h3> External validity </h3>

    While large-scale randomized studies offer a “gold standard” for internal validity, their external validity can be called into question over spatiotemporal changes in the population, particularly when the treatment effect is heterogeneous across the population. The ACCORD and SPRINT trials offer a prominent example: they studied the effect of treatments to lower blood pressure on cardiovascular disease, but reached opposite conclusions despite exceptionally large sample sizes (5-10K). The mechanism behind the difference could not be explained by experts even ex-post. 

    We develop new methods to assess and improve the external validity of RCTs. In particular, we develop sensitivity analysis frameworks that allows researchers to assess the extent to which existing experiments inform the treatment effect in a new target site and quantify an expected range of the policy effect for each new site. 

    <div class="publications">
        {% bibliography -q @*[key=JeongNa22]* %}
    </div>

    <h3> Unobserved confounding </h3>

    Off-policy methods can learn decision policies using the rich reservoir of previously collected (observational) data. A universal assumption that enable counterfactual reasoning requires observed decisions do not depend on any unrecorded confounders that simultaneously affect future states/rewards. This condition is frequently violated in medicine, e-commerce, and public policy, e.g., emergency department patients often do not have an existing record in the hospital’s electronic health system, leaving essential patient-specific information unobserved in subsequent counterfactual analysis. In the presence of unobserved confounding, even with large samples, it is impossible to precisely estimate the performance of the evaluation policy. To guard against spurious counterfactual evaluations, we propose a worst-case approach where we first posit a realistic notion of bounded unobserved confounding that limits the influence of unrecorded variables on observed decisions and develop corresponding worst-case bounds on the reward. 

    <div class="publications">
        {% bibliography -q @*[key=YadlowskyNaBaDuTi22]* %}
    </div>

    <h5 style="padding-bottom: 20px;"></h5>
        <div class="d-flex justify-content-center">
            <div class="text-center">
                {% include figure.liquid loading="eager" path="/assets/img/confounding.png" title="confounding" class="img-fluid rounded z-depth-1 w-50" %}
            </div>
        </div>
        <h5 style="padding-bottom: 20px;"></h5>
            

    <h3> Unforeseen data sparsity </h3>

    A central challenge in observational analysis is that the effective sample size is difficult to gauge. Even when a nominally large dataset is collected, the effective sample size may be prohibitively small when there is little overlap between trajectories seen under the data-generating and proposed policies. Data sparsity becomes more pronounced in modern problems that involve high-dimensional covariates representations; causal identification becomes difficult on parts of the covariate space with limited effective sample size. Existing observational methods are only valid in the large sample limit and silently fail in practical instances, where the effective sample size is limited. 

    We propose a new inferential framework that provides always-valid uncertainty quantification. Unlike asymptotic methods, we quantify instance-specific uncertainty that accurately scales with the level of overlap Our proposed counterfactual evaluation paradigm i) provides always-valid uncertainty estimates, spurring engineering progress through rigorous empirical evaluations, and ii) guides the optimal design of experiments based on previously collected (observational) data.

    </p>
</details>

<br/>


{% bibliography %}

