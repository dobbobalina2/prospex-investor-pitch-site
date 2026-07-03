const queries = {
  redzone: {
    question:
      "When this opponent is up one score in Q3, under 7:00, on 2nd-and-medium, what defensive tendencies show up?",
    headline:
      "The deeper the football conditions, the more valuable the answer becomes.",
    answer:
      "Prospex can filter by score state, quarter, clock, down, distance, personnel, formation, field zone, motion, and result, then return the clips that support the tendency.",
  },
  cutup: {
    question: "Show every 2nd-and-6 to 2nd-and-8 snap where they checked to pressure after motion.",
    headline: "Specific football questions become instant, reviewable film sets.",
    answer:
      "The coach defines the exact situation and Prospex turns the query into a cutup: not just by tag, but by context, sequence, and staff terminology.",
  },
  selfscout: {
    question:
      "What tells do we create when the back motions into the formation from trips on 3rd-and-medium?",
    headline: "The same specificity exposes self-scout tells before opponents weaponize them.",
    answer:
      "The self-scout layer preserves program history so recurring alignment, motion, tempo, and concept patterns become searchable across seasons.",
  },
};

function setWorkflow(target) {
  document.querySelectorAll("[data-workflow]").forEach((button) => {
    const isActive = button.dataset.workflow === target;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.querySelectorAll("[data-workflow-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.workflowPanel === target);
  });
}

function setQuery(key) {
  const data = queries[key];
  if (!data) return;

  document.querySelectorAll("[data-query]").forEach((button) => {
    button.classList.toggle("active", button.dataset.query === key);
  });

  document.querySelector("[data-query-question]").textContent = data.question;
  document.querySelector("[data-query-headline]").textContent = data.headline;
  document.querySelector("[data-query-answer]").textContent = data.answer;
}

document.querySelectorAll("[data-workflow]").forEach((button) => {
  button.addEventListener("click", () => setWorkflow(button.dataset.workflow));
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => setQuery(button.dataset.query));
});

document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => window.print());
});

const revealTargets = document.querySelectorAll(
  ".section, .hero-copy, .hero-system, .closing",
);

document.documentElement.classList.add("js-reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
