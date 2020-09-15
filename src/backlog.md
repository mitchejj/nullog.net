---
layout: page.njk
templateEngineOverride: njk,md
title: backlog
isIndex: true
---
{# <!-- entry.data.{what is in the frontmatter } --!> #}
<div class="-ml-6 -mr-6">
<ul class="">
{%- for entry in collections.backlog | reverse -%}
    <li>
        <span class="text-center w-3/12 text-gray-600 text-xs inline-block">{{ entry.date | short_date }}</span>
        <span class="align-top w-8/12 inline-block"><a href="{{ entry.url }}" class="text-xl border-b border-gray-500 text-blue-600">{{ entry.data.title }}</a></span>
    </li>
{%- endfor -%}
</ul>
</div>
