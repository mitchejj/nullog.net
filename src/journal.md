---
layout: layout/base.hbs
templateEngineOverride: njk,md
title: learning journal
---
<ul class=" mx-6">
{%- for entry in collections._journal | reverse -%}
    <li>
        <span class="text-gray-600 text-xs">{{entry.date | short_date }}</span>
        <a href="{{ entry.url }}" class="text-xl border-b border-gray-500 text-blue-600">{{ entry.data.title }}</a>
    </li>
{%- endfor -%}
</ul>

