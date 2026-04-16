/* ============================================
   I NEED LOCKSMITH MIAMI - Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // ─── Loading Screen ───
  const loader = document.getElementById('loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('is-hidden');
        // Remove from DOM after animation
        loader.addEventListener('transitionend', function () {
          loader.remove();
        }, { once: true });
      }, 1400);
    });
  }

  // ─── Header Scroll Effect ───
  const header = document.getElementById('header');
  let lastScroll = 0;

  function onScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    // Header background
    if (header) {
      if (scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    // Back to top button
    var backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (scrollY > 600) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }

    // Sticky mobile CTA
    var stickyCta = document.getElementById('sticky-cta');
    if (stickyCta) {
      if (scrollY > 400) {
        stickyCta.classList.add('is-visible');
      } else {
        stickyCta.classList.remove('is-visible');
      }
    }

    lastScroll = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial call

  // ─── Back to Top ───
  var backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Mobile Navigation ───
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('is-active');
      mobileNav.classList.toggle('is-open', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Mobile sub-menu toggles
    var toggles = mobileNav.querySelectorAll('.mobile-nav__toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var sub = this.nextElementSibling;
        var isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        if (sub) {
          sub.classList.toggle('is-open', !isExpanded);
        }
      });
    });

    // Close mobile nav on link click
    var mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-active');
        mobileNav.classList.remove('is-open');
        mobileNav.setAttribute('aria-hidden', 'true');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Desktop Dropdown (keyboard) ───
  var dropdownBtns = document.querySelectorAll('.nav__link--dropdown');
  dropdownBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
    });

    // Close on escape
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        this.setAttribute('aria-expanded', 'false');
        this.focus();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    dropdownBtns.forEach(function (btn) {
      if (!btn.parentElement.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ─── Scroll Reveal (Intersection Observer) ───
  var revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-left, .reveal-right, .stagger-children');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything
    revealElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ─── FAQ Accordion ───
  var faqQuestions = document.querySelectorAll('.faq__question');
  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      var answer = document.getElementById(this.getAttribute('aria-controls'));
      var isExpanded = this.getAttribute('aria-expanded') === 'true';

      // Close all other FAQs
      faqQuestions.forEach(function (q) {
        if (q !== question) {
          q.setAttribute('aria-expanded', 'false');
          var otherAnswer = document.getElementById(q.getAttribute('aria-controls'));
          if (otherAnswer) {
            otherAnswer.hidden = true;
          }
        }
      });

      // Toggle current
      this.setAttribute('aria-expanded', !isExpanded);
      if (answer) {
        answer.hidden = isExpanded;
      }
    });
  });

  // ─── Counter Animation ───
  var counters = document.querySelectorAll('.counter');

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    var duration = 2000;
    var startTime = null;
    var startValue = 0;
    var isDecimal = target % 1 !== 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quad
      var eased = 1 - (1 - progress) * (1 - progress);
      var current = startValue + (target - startValue) * eased;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }

  // ─── Hero Particles ───
  var canvas = document.getElementById('hero-particles');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = 50;
    var mouseX = 0;
    var mouseY = 0;

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '196, 30, 36' : '240, 180, 0'
      };
    }

    function initParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(function (p, i) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ', ' + p.opacity + ')';
        ctx.fill();

        // Draw connections
        for (var j = i + 1; j < particles.length; j++) {
          var p2 = particles[j];
          var dx = p.x - p2.x;
          var dy = p.y - p2.y;
          var dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(148, 163, 184, ' + (0.06 * (1 - dist / 120)) + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    initParticles();
    drawParticles();

    window.addEventListener('resize', function () {
      resizeCanvas();
      initParticles();
    });

    // Mouse interaction
    var heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.addEventListener('mousemove', function (e) {
        var rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        // Push nearby particles
        particles.forEach(function (p) {
          var dx = mouseX - p.x;
          var dy = mouseY - p.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.vx -= dx * 0.001;
            p.vy -= dy * 0.001;
          }
        });
      });
    }
  }

  // ─── Form Handling ───
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic client-side validation
      var name = form.querySelector('#name');
      var phone = form.querySelector('#phone');
      var service = form.querySelector('#service');
      var valid = true;

      [name, phone, service].forEach(function (field) {
        if (field && !field.value.trim()) {
          field.style.borderColor = 'var(--color-error)';
          valid = false;
        } else if (field) {
          field.style.borderColor = '';
        }
      });

      // Phone validation
      if (phone && phone.value) {
        var phoneClean = phone.value.replace(/\D/g, '');
        if (phoneClean.length < 10) {
          phone.style.borderColor = 'var(--color-error)';
          valid = false;
        }
      }

      if (!valid) return;

      // Show loading state
      var submitBtn = form.querySelector('.form__submit');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with real endpoint)
      setTimeout(function () {
        form.innerHTML = '<div style="text-align: center; padding: var(--space-8);">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2" style="margin: 0 auto var(--space-4);">' +
          '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' +
          '<h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-text-bright); margin-bottom: 0.5rem;">Thank You!</h3>' +
          '<p style="color: var(--color-text-secondary);">We\'ll call you within 15 minutes.</p>' +
          '</div>';
      }, 1500);
    });

    // Clear error styling on input
    var inputs = form.querySelectorAll('.form__input, .form__select, .form__textarea');
    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        this.style.borderColor = '';
      });
    });
  }

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── Phone number formatting ───
  var phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var val = this.value.replace(/\D/g, '');
      if (val.length >= 6) {
        this.value = '(' + val.substring(0, 3) + ') ' + val.substring(3, 6) + '-' + val.substring(6, 10);
      } else if (val.length >= 3) {
        this.value = '(' + val.substring(0, 3) + ') ' + val.substring(3);
      }
    });
  }

})();
