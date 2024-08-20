# Leave the homepage title empty to use the site title
title: "Home"
date: 2024-03-24
type: landing

sections:
  - block: biography-2
    content:
      title: Hongseok Namkoong
      # Note: `username` refers to the user's folder name in `content/authors/`
      username: admin
  - block: collection
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: post
      # Choose how many pages you would like to display (0 = all pages)
      count: 25
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '1'
  - block: collection
    id: 'research'
    content:      
      title: 'Webpage: Research highlight'
      subtitle: ''
      text: |-
        Date Created: April 13, 2023 3:12 PM
        Status: To Do

        ### AI-driven decision-making

        My research group develops AI-driven approaches to decision-making, with a particular emphasis on robust and reliable learning methods. This requires an interdisciplinary approach spanning several fields including machine learning, operations research, and statistics. 
      # Page type to display. E.g. post, talk, publication...
      page_type: research
      # Choose how many pages you would like to display (0 = all pages)
      count: 25
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: research-compact
      columns: '1' 

  - block: collection
    id: 'papers'
    content:
      title: Publications & preprints
      subtitle: ''
      text: |-
        See also my [Google](https://scholar.google.com/citations?user=dyXX1EgAAAAJ) scholar profile.
      # Page type to display. E.g. post, talk, publication...
      page_type: publication
      # Choose how many pages you would like to display (0 = all pages)
      count: 100
      offset: 0
      order: desc
    design:
      # Choose a layout view
      view: citation
      columns: '1'

  - block: team
    id: team
    content:
      title: Team
      items:
        - name: Ari Boyarsky
          details: Professor of Artificial Intelligence
          # Image path relative to assets/media/ folder
          image: team/ari-boyarsky.png
          link: https://www.ariboyarsky.com/
        - name: Tiffany Cai
          details: Professor of Phychology
          # Image path relative to assets/media/ folder
          image: team/tiffany-cai.jpeg
          link: https://tc2718.github.io/
        - name: Ethan Che
          details: Decision, Risk, and Operations; co-advised with Jing Dong
          # Image path relative to assets/media/ folder
          image: team/ethan-che.jpeg
          link: https://ethche.github.io/
        - name: Lin Fan
          details: Postdoc at Amazon SCOT; co-advised with Garrett van Ryzin and Assaf Zeevi
          # Image path relative to assets/media/ folder
          image: team/lin-fan.jpeg
          link: https://linfanf.github.io/
        - name: AYeong Lee
          details: Decision, Risk, Operations
          # Image path relative to assets/media/ folder
          image: team/ayeong-lee.png
        - name: Yuanzhe Ma
          details: Industrial Engineering and Operations Research; co-advised with Garud Iyengar and Jay Sethuraman
          # Image path relative to assets/media/ folder
          image: team/yuanzhe-ma.jpeg
          link: https://yuanzhe-ma.com/
        - name: Daksh Mittal
          details: Decision, Risk, and Operations
          # Image path relative to assets/media/ folder
          image: team/daksh-mittal.png
          link: https://scholar.google.com/citations?user=ug78g5YAAAAJ&hl=en
        - name: Naimeng Ye
          details: Decision, Risk, and Operations
          # Image path relative to assets/media/ folder
          image: team/naimeng-ye.png
        - name: Yibo Zeng
          details: Industrial Engineering and Operations Research; co-advised with Henry Lam
          # Image path relative to assets/media/ folder
          image: team/yibo-zeng.jpeg
          link: https://scholar.google.com/citations?hl=en&user=4bIBeOgAAAAJ
        - name: Kelly Zhang
          details: Postdoc, co-advised with Daniel Russo
          # Image path relative to assets/media/ folder
          image: team/kelly-zhang.jpeg
          link: https://kellywzhang.github.io/
  - block: collection
    id: teaching
    content:
      title: Teaching
      # Page type to display. E.g. post, talk, publication...
      page_type: teaching
      # Choose how many pages you would like to display (0 = all pages)
      count: 100
      offset: 0
      order: desc
    design:
      # Choose a layout view
      view: teaching-compact
      columns: '1'
---
