---
layout: page.njk
templateEngineOverride: njk,md
title: weblog
---
<ul class="">
{%- for entry in collections.weblog | reverse -%}
    <li class="">
        <span class="text-center w-3/12 text-gray-600 text-xs inline-block">{{ entry.date | short_date }}</span>
        <span class="align-top w-8/12 inline-block"><a href="{{ entry.url }}" class="text-xl border-b border-gray-500 text-blue-600">{{ entry.data.title }}</a></span>
    </li>
{%- endfor -%}
</ul>
