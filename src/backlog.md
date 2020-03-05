---
layout: layout/base.hbs
templateEngineOverride: njk,md
title: backlog
---
<ul>
{%- for entry in collections.backlog | reverse -%}
    <li>
        <span class="text-gray-600 text-xs">{{ entry.date | short_date }}</span>
        <a href="{{ entry.url }}" class=" border-b border-gray-500 text-blue-600">{{ entry.data.title }}</a> {{ entry.data.subtitle }}
    </li>
{%- endfor -%}
</ul>


