---
layout: layout/base.hbs
templateEngineOverride: njk,md
title: learning journal
---
<ul class="list">
{%- for entry in collections._journal | reverse -%}
    <li><span class="gray f7">{{entry.date | short_date }}</span> <a href="{{ entry.url }}" class="no-underline link grow mid-gray bb bw1 b--light-blue lh-title">{{ entry.data.title }}</a></li>
{%- endfor -%}
</ul>

