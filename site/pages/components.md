---
layout: default
---
<section class="hero hero--landing">
    <div class="row">
        <div class="column column--1">
            <h1 class="title">
                Components
            </h1>
        </div>
    </div>
</section>
<main class="content">
    <div class="components">
        {% for component in site.components %}
            <div class="components_component">
                <div class="card">
                    <div class="card__image" title="{{ component.name }}">
                        <a href="{{ component.url | relative_url }}">
                            <img src="{{ component.image | relative_url }}" />
                        </a>
                    </div>
                    <div class="card__actions">
                        <h4>
                            {{ component.name }}
                        </h4>
                        {% if component.urls %}
                            <div class="component__logos">
                                {% if component.urls.storybook %}
                                    <a href="{{ component.urls.storybook }}" target="_blank" title="Storybook">
                                        <img src="{{ 'assets/images/storybook.png' | relative_url }}" class="component__logo" />
                                    </a>
                                {% endif %}
                                {% if component.urls.github %}
                                    <a href="{{ component.urls.github }}" target="_blank" title="GitHub">
                                        <img src="{{ 'assets/images/github.png' | relative_url }}" class="component__logo" />
                                    </a>
                                {% endif %}
                                {% if component.urls.npm  %}
                                    <a href="{{ component.urls.npm }}" target="_blank" title="Npm">
                                        <img src="{{ 'assets/images/npm.png' | relative_url }}" class="component__logo" />
                                    </a>
                                {% endif %}
                            </div>
                        {% endif %}
                    </div>
                </div>
            </div>
        {% endfor %}
    </div>

</main>

