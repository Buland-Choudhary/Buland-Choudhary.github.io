/* ============================================================================
 *  RENDERER
 *  ----------------------------------------------------------------------------
 *  Reads PORTFOLIO_DATA (from data.js) and builds the HTML for each section.
 *  You normally never need to touch this file — edit data.js instead.
 *
 *  This script is loaded at the end of <body>, BEFORE the vendor scripts, so
 *  the DOM is fully populated before Isotope / VenoBox / Typed.js initialise.
 * ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO_DATA;
  if (!D) return;

  // Escape text destined for HTML so quotes/brackets in content can't break markup.
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Write `html` into the element with the given id, if that element exists.
  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  /* ---- Interests ---- */
  function renderInterests() {
    var html = (D.interests || []).map(function (it, i) {
      // Preserve the template's responsive top-margin rhythm.
      var cls = "col-lg-3 col-md-4";
      if (i >= 4) cls += " mt-4";
      else if (i >= 1) cls += " mt-4 mt-md-0";
      return (
        '<div class="' + cls + '">' +
          '<div class="icon-box">' +
            '<i class="' + esc(it.icon) + '" style="color: ' + esc(it.color) + ';"></i>' +
            '<h3>' + esc(it.name) + '</h3>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    fill("interests-container", html);
  }

  /* ---- Education (cards) ---- */
  function renderEducation() {
    var html = (D.education || []).map(function (e) {
      var awards = (e.awards || []).map(function (a) {
        return '<li>' + esc(a) + '</li>';
      }).join("");
      return (
        '<div class="col-lg-6 col-md-6 d-flex" data-aos="fade-up">' +
          '<div class="edu-card">' +
            '<div class="edu-thumb">' +
              '<img src="' + esc(e.image) + '" alt="' + esc(e.school) + '">' +
            '</div>' +
            '<div class="edu-body">' +
              '<span class="edu-degree">' + esc(e.degree) + '</span>' +
              '<h4 class="edu-school">' + esc(e.school) + '</h4>' +
              '<div class="edu-awards-label"><i class="bx bx-award"></i> Awards</div>' +
              '<ul class="edu-awards">' + awards + '</ul>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    fill("education-container", html);
  }

  /* ---- Courses ---- */
  function renderCourses() {
    var html = (D.courses || []).map(function (c) {
      var issuer = c.issuer ? '<span class="course-issuer">' + esc(c.issuer) + '</span>' : "";
      var detail = c.detail ? '<p class="course-detail">' + esc(c.detail) + '</p>' : "";
      return (
        '<div class="col-lg-3 col-md-6 portfolio-item filter-app">' +
          '<div class="course-card">' +
            '<div class="course-icon"><i class="' + esc(c.icon || "ri-book-open-line") + '"></i></div>' +
            '<h4 class="course-title">' + esc(c.title) + '</h4>' +
            detail +
            issuer +
          '</div>' +
        '</div>'
      );
    }).join("");
    fill("courses-container", html);
  }

  /* ---- Experience (vertical timeline) ---- */
  function renderExperience() {
    var items = (D.experience || []).map(function (x) {
      var bullets = (x.bullets || []).map(function (b) {
        return '<li>' + esc(b) + '</li>';
      }).join("");
      var company = x.url
        ? '<a href="' + esc(x.url) + '" target="_blank">' + esc(x.company) + '</a>'
        : esc(x.company);
      var location = x.location
        ? '<span class="timeline-location"><i class="bx bx-map"></i> ' + esc(x.location) + '</span>'
        : "";
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot"></div>' +
          '<div class="timeline-content">' +
            '<span class="timeline-period">' + esc(x.period) + '</span>' +
            '<h4 class="timeline-company">' + company + '</h4>' +
            '<div class="timeline-meta">' +
              '<span class="timeline-role">' + esc(x.role) + '</span>' +
              location +
            '</div>' +
            '<ul class="timeline-bullets">' + bullets + '</ul>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    fill("experience-container", '<div class="timeline">' + items + '</div>');
  }

  /* ---- Projects (cards with tech badges + action buttons) ---- */
  function renderProjects() {
    var html = (D.projects || []).map(function (p) {
      var tags = (p.tags || []).map(function (t) {
        return '<span class="project-tag">' + esc(t) + '</span>';
      }).join("");

      var actions =
        '<a href="projects/detail.html?id=' + encodeURIComponent(p.id) + '" ' +
           'data-gall="portfolioDetailsGallery" data-vbtype="iframe" ' +
           'class="venobox btn-proj btn-proj-primary" title="Project Details">' +
          '<i class="bx bx-info-circle"></i> Details' +
        '</a>';
      if (p.github) {
        actions += '<a href="' + esc(p.github) + '" target="_blank" class="btn-proj btn-proj-ghost">' +
                     '<i class="bx bxl-github"></i> Code</a>';
      }
      if (p.demo) {
        actions += '<a href="' + esc(p.demo) + '" target="_blank" class="btn-proj btn-proj-ghost">' +
                     '<i class="bx bx-link-external"></i> Live</a>';
      }

      var date = p.date
        ? '<div class="project-date"><i class="bx bx-calendar"></i> ' + esc(p.date) + '</div>'
        : "";
      return (
        '<div class="col-lg-4 col-md-6 portfolio-item filter-app">' +
          '<div class="project-card">' +
            '<div class="project-thumb">' +
              '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '">' +
            '</div>' +
            '<div class="project-body">' +
              '<h4 class="project-title">' + esc(p.title) + '</h4>' +
              date +
              '<div class="project-tags">' + tags + '</div>' +
              '<div class="project-actions">' + actions + '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    fill("projects-container", html);
  }

  /* ---- Skills ---- */
  function renderSkills() {
    var html = (D.skills || []).map(function (grp) {
      var imgs = (grp.items || []).map(function (s) {
        var w = (s.width != null) ? ' width="' + esc(s.width) + '"' : "";
        return '<img src="' + esc(s.src) + '" alt="' + esc(s.alt) + '" height="' + esc(s.height) + '"' + w + '>';
      }).join("\n              ");
      return (
        '<div class="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style="background:#fff">' +
          '<h4 style="text-align:left;color:#09203a">' + esc(grp.group) + '</h4>' +
          '<p style="text-align:left;">' + imgs + '</p>' +
        '</div>'
      );
    }).join("");
    fill("skills-container", html);
  }

  renderInterests();
  renderEducation();
  renderCourses();
  renderExperience();
  renderProjects();
  renderSkills();
})();
