# תכנית UI/UX, נגישות וביצועי אתר - I Need Locksmith Miami

**אתר:** ineedlocksmithmiami.com
**עסק:** I Need Locksmith Miami
**טלפון:** (786) 813-0495
**אזור שירות:** Miami-Dade County
**תאריך:** אפריל 2026

---

## תוכן עניינים

1. [מערכת עיצוב (Design System)](#1-מערכת-עיצוב-design-system)
2. [תבניות עמודים ו-Wireframes](#2-תבניות-עמודים-wireframes)
3. [Mobile-First ואסטרטגיית מובייל](#3-mobile-first)
4. [CRO - אופטימיזציית המרות](#4-cro-אופטימיזציית-המרות)
5. [נגישות WCAG 2.1 AA](#5-נגישות-wcag-21-aa)
6. [Core Web Vitals וביצועים](#6-core-web-vitals-וביצועים)
7. [סטאק טכני ותשתית](#7-סטאק-טכני-ותשתית)
8. [צ'קליסט לפני השקה](#8-צ'קליסט-לפני-השקה)

---

## 1. מערכת עיצוב (Design System)

### 1.1 פלטת צבעים

עסק מנעולנות חירום צריך לשדר: **אמון**, **דחיפות**, **מקצועיות**, **זמינות**.

#### צבעים ראשיים (Primary)

| שם | HEX | RGB | שימוש | רגש |
|----|-----|-----|-------|------|
| **Navy Trust** | `#1B3A5C` | 27, 58, 92 | רקע כהה, header, footer, כותרות | אמון, מקצועיות, יציבות |
| **Action Orange** | `#E8641A` | 232, 100, 26 | כפתורי CTA ראשיים, badges דחופים, טלפון | דחיפות, פעולה, אנרגיה |
| **Clean White** | `#FFFFFF` | 255, 255, 255 | רקע ראשי, טקסט על כהה | ניקיון, מרחב |

#### צבעים משניים (Secondary)

| שם | HEX | שימוש |
|----|-----|-------|
| **Steel Blue** | `#4A7FB5` | קישורים, כפתורים משניים, accent elements |
| **Safety Green** | `#2E8B57` | badges חיוביים ("Licensed", "4.9 Rating"), confirmations |
| **Light Gray** | `#F5F7FA` | רקע sections חלופיים (zebra striping) |
| **Medium Gray** | `#6B7B8D` | טקסט משני, captions, placeholder |
| **Dark Text** | `#1A1A2E` | טקסט גוף ראשי |
| **Urgent Red** | `#D32F2F` | emergency badges בלבד ("Open Now", "24/7"), לא לשגיאות |
| **Border Gray** | `#DDE2E8` | גבולות כרטיסים, dividers |

#### Contrast Ratios (WCAG AA Compliance)

| שילוב | Ratio | עובר AA? |
|--------|-------|----------|
| Dark Text (#1A1A2E) על White (#FFF) | 16.75:1 | כן (AAA) |
| Navy (#1B3A5C) על White (#FFF) | 9.87:1 | כן (AAA) |
| White (#FFF) על Navy (#1B3A5C) | 9.87:1 | כן (AAA) |
| White (#FFF) על Action Orange (#E8641A) | 3.28:1 | לא - לכפתורים: טקסט לבן 18px bold+ בלבד |
| Dark Text (#1A1A2E) על Light Gray (#F5F7FA) | 14.8:1 | כן (AAA) |
| White (#FFF) על Safety Green (#2E8B57) | 4.58:1 | כן (AA Large) |

**כלל:** כפתור CTA כתום (#E8641A) ישתמש בטקסט לבן רק ב-18px bold ומעלה (עובר AA Large Text). לטקסט רגיל - השתמש ב-Dark Text על רקע כתום.

#### מצבי צבע (Color States)

```
Action Orange - Default:   #E8641A
Action Orange - Hover:     #CC5515
Action Orange - Active:    #B34A12
Action Orange - Focus:     #E8641A + 3px outline #1B3A5C

Navy Trust - Default:      #1B3A5C
Navy Trust - Hover:        #15304D
Navy Trust - Active:       #0F243D

Steel Blue - Default:      #4A7FB5
Steel Blue - Hover:        #3A6A9E
Steel Blue - Visited:      #6B4F8A
```

---

### 1.2 טיפוגרפיה (Typography Scale)

#### משפחות גופנים

| תפקיד | גופן | סיבה | Fallback |
|--------|-------|-------|----------|
| **כותרות (Headings)** | Inter | נקי, מודרני, תמיכה מלאה ב-Latin, קריאות גבוהה | system-ui, -apple-system, sans-serif |
| **גוף טקסט (Body)** | Inter | עקביות, קריאות מעולה ב-16px, variable font | system-ui, -apple-system, sans-serif |
| **טלפון / מספרים** | Inter Tight | צפיפות מספרית מותאמת, tabular numerals | Inter, system-ui, sans-serif |

**הערה:** שימוש בגופן יחיד (Inter) עם weights שונים מפחית HTTP requests, מפשט את ה-font stack, ומשפר ביצועים.

#### סקאלת גדלים (Type Scale) - Mobile-First

| Token | Mobile (px/rem) | Desktop (px/rem) | Weight | Line Height | שימוש |
|-------|----------------|-------------------|--------|-------------|-------|
| `--text-display` | 36 / 2.25rem | 56 / 3.5rem | 800 | 1.1 | Hero H1 בלבד |
| `--text-h1` | 28 / 1.75rem | 40 / 2.5rem | 700 | 1.2 | H1 דפים פנימיים |
| `--text-h2` | 24 / 1.5rem | 32 / 2rem | 700 | 1.25 | כותרות sections |
| `--text-h3` | 20 / 1.25rem | 24 / 1.5rem | 600 | 1.3 | כותרות תת-sections |
| `--text-h4` | 18 / 1.125rem | 20 / 1.25rem | 600 | 1.35 | כותרות כרטיסים |
| `--text-body` | 16 / 1rem | 18 / 1.125rem | 400 | 1.6 | טקסט גוף ראשי |
| `--text-body-sm` | 14 / 0.875rem | 16 / 1rem | 400 | 1.5 | טקסט משני, captions |
| `--text-caption` | 12 / 0.75rem | 14 / 0.875rem | 400 | 1.4 | labels, legal text |
| `--text-cta` | 16 / 1rem | 18 / 1.125rem | 700 | 1.2 | טקסט כפתורים |
| `--text-phone` | 20 / 1.25rem | 24 / 1.5rem | 700 | 1.2 | מספר טלפון |
| `--text-phone-hero` | 28 / 1.75rem | 36 / 2.25rem | 800 | 1.1 | טלפון ב-hero |

#### כללי טיפוגרפיה

- **גוף טקסט מינימום 16px** - תמיד, בכל breakpoint
- **אורך שורה מקסימלי:** 65-75 תווים (ch) - `max-width: 72ch` על פסקאות
- **ריווח פסקאות:** `margin-bottom: 1.5em`
- **ריווח כותרות:** `margin-top: 2em; margin-bottom: 0.75em`
- **אין ALL CAPS** על פסקאות שלמות - רק על labels קצרים (max 3 מילים)
- **Font-display: swap** - תמיד, למניעת FOIT

---

### 1.3 מערכת ריווח (Spacing System)

#### סקאלה (8px Base)

| Token | ערך | שימוש |
|-------|-----|-------|
| `--space-1` | 4px | ריווח פנימי מינימלי, gap בין icon לטקסט |
| `--space-2` | 8px | padding פנימי קטן, gap בין items |
| `--space-3` | 12px | padding כרטיסים פנימי (mobile) |
| `--space-4` | 16px | gap בין כרטיסים, padding sections (mobile) |
| `--space-5` | 24px | padding כרטיסים (desktop), gap sections |
| `--space-6` | 32px | ריווח בין sections (mobile) |
| `--space-7` | 48px | ריווח בין sections (desktop) |
| `--space-8` | 64px | padding sections גדולים (desktop) |
| `--space-9` | 80px | ריווח בין sections מרכזיים |
| `--space-10` | 96px | ריווח hero/footer |

#### Container Widths

| Token | ערך | שימוש |
|-------|-----|-------|
| `--container-sm` | 640px | תוכן צר (בלוג, FAQ) |
| `--container-md` | 960px | תוכן בינוני (service pages) |
| `--container-lg` | 1200px | תוכן מלא (homepage) |
| `--container-xl` | 1400px | hero full-width |

#### Grid System

- **12-column grid** ב-desktop (1200px container)
- **Gap:** 24px (desktop), 16px (mobile)
- **Service cards:** 4-column grid desktop, 2-column tablet, 1-column mobile
- **Blog grid:** 3-column desktop, 2-column tablet, 1-column mobile

---

### 1.4 ספריית רכיבים (Component Library)

#### A. כפתורים (Buttons)

```
Button Primary (CTA):
  - Background: #E8641A
  - Text: #FFFFFF, 18px bold
  - Padding: 16px 32px
  - Border-radius: 8px
  - Min-height: 48px (touch target)
  - Min-width: 200px
  - Hover: #CC5515, transform: translateY(-1px), shadow
  - Active: #B34A12
  - Focus: 3px outline #1B3A5C, offset 2px
  - Icon: phone icon left (for call CTAs)

Button Secondary:
  - Background: transparent
  - Border: 2px solid #1B3A5C
  - Text: #1B3A5C, 16px 600
  - Padding: 14px 28px
  - Border-radius: 8px
  - Min-height: 48px
  - Hover: background #1B3A5C, text #FFF

Button Ghost (Tertiary):
  - Background: transparent
  - Text: #4A7FB5, 16px 600
  - Padding: 12px 16px
  - Hover: underline, background rgba(74,127,181,0.08)
  - Use: in-content links, "Learn more"

Button Phone (Sticky Mobile):
  - Background: #E8641A
  - Text: #FFF, 16px bold
  - Padding: 14px 24px
  - Border-radius: 24px (pill)
  - Box-shadow: 0 4px 12px rgba(0,0,0,0.25)
  - Width: calc(100% - 32px)
  - Position: fixed bottom 16px
  - z-index: 1000
  - Phone icon + "(786) 813-0495"
  - Tap triggers tel: link
```

#### B. כרטיסי שירות (Service Cards)

```
Service Card:
  Container:
    - Background: #FFFFFF
    - Border: 1px solid #DDE2E8
    - Border-radius: 12px
    - Padding: 24px
    - Hover: shadow 0 8px 24px rgba(27,58,92,0.12), translateY(-4px)
    - Transition: all 0.2s ease
  
  Icon:
    - Size: 48px
    - Color: #E8641A (primary) or #1B3A5C (secondary)
    - Margin-bottom: 16px
  
  Title (H3):
    - Font: 20px/700
    - Color: #1B3A5C
    - Margin-bottom: 8px
  
  Description:
    - Font: 16px/400
    - Color: #6B7B8D
    - Max: 2 lines, then truncate
  
  Service List:
    - 3-4 bullet points
    - Font: 14px
    - Color: #1A1A2E
    - Check icon (#2E8B57) per item
  
  CTA Link:
    - "Learn More >" 
    - Color: #E8641A
    - Font: 16px/600
    - Hover: underline
  
  Entire card is clickable (anchor wraps card)
```

#### C. Hero Section

```
Hero (Homepage):
  Container:
    - Background: linear-gradient(135deg, #1B3A5C 0%, #15304D 100%)
    - Overlay: optional subtle pattern or real photo with dark overlay (70% opacity)
    - Padding: 80px 0 (desktop), 48px 16px (mobile)
    - Min-height: 500px (desktop), auto (mobile)
  
  Content (left-aligned on desktop, centered on mobile):
    - Overline: "24/7 Emergency Locksmith Service" (caption, uppercase, Safety Green)
    - H1: --text-display, #FFFFFF
    - Subtitle: --text-body, #FFFFFF opacity 0.85
    - CTA Group:
      - Primary: "Call (786) 813-0495" (Button Primary + phone icon)
      - Secondary: "Get a Free Quote" (Button Secondary, white border variant)
    - Trust Bar (inline): 
      - [star icon] "4.9 Google Rating"
      - [shield icon] "Licensed & Insured"
      - [clock icon] "15-Min Response"
      - Style: flex row, 14px, white, icon + text
  
  Optional Right Side (desktop only):
    - Hero image: real technician photo or service vehicle
    - Or: floating trust card with quick stats

Hero (Service Page):
  - Smaller: padding 48px 0
  - Background: Navy with subtle gradient
  - Breadcrumbs above H1
  - H1 + subtitle + CTA + trust bar (same pattern, smaller scale)

Hero (Service Area Page):
  - Same as service page
  - Breadcrumbs: Home > Service Areas > [City]
  - H1: "Locksmith Services in [City], Florida"
```

#### D. Trust Bar

```
Trust Bar:
  Container:
    - Background: #FFFFFF or transparent (on dark hero)
    - Border-top: 3px solid #E8641A (when standalone section)
    - Padding: 24px 0
  
  Items (4 items, flex row):
    - Icon: 32px, color varies (see below)
    - Text line 1 (metric): 20px/700, #1B3A5C
    - Text line 2 (label): 14px/400, #6B7B8D
    - Separator: 1px solid #DDE2E8 between items (desktop)
  
  Trust Items:
    1. [shield] "Licensed & Insured" / FL License #XXX
    2. [star] "4.9" / "Google Rating"
    3. [clock] "15-30 Min" / "Response Time"
    4. [calendar] "10+ Years" / "Serving Miami-Dade"
  
  Mobile: 2x2 grid, no separators
```

#### E. Testimonial Card

```
Testimonial Card:
  Container:
    - Background: #F5F7FA
    - Border-radius: 12px
    - Padding: 32px
    - Border-left: 4px solid #E8641A
  
  Quote Icon:
    - Large " (decorative)
    - Color: #E8641A, 48px, opacity 0.3
  
  Quote Text:
    - Font: 18px/400 italic
    - Color: #1A1A2E
    - Line-height: 1.6
  
  Stars:
    - 5 star icons, filled #F5A623
    - Size: 20px
    - Margin-top: 16px
  
  Attribution:
    - Name: 16px/600 #1B3A5C
    - Service type: 14px/400 #6B7B8D
    - Source: "Google Review" + Google icon
    - Margin-top: 12px
```

#### F. FAQ Accordion

```
FAQ Accordion:
  Container:
    - Border: 1px solid #DDE2E8
    - Border-radius: 8px
    - Overflow: hidden
    - Margin-bottom: 8px
  
  Question (button):
    - Background: #FFFFFF
    - Padding: 20px 24px
    - Font: 18px/600 #1A1A2E
    - Display: flex, justify-content: space-between
    - Chevron icon right, rotates 180deg on open
    - Hover: background #F5F7FA
    - Min-height: 48px (touch target)
    - cursor: pointer
    - role="button", aria-expanded="true/false"
    - aria-controls="answer-id"
  
  Answer (panel):
    - id="answer-id"
    - role="region"
    - aria-labelledby="question-id"
    - Background: #FFFFFF
    - Padding: 0 24px 20px
    - Font: 16px/400 #1A1A2E
    - Line-height: 1.6
    - Hidden by default (display:none or max-height:0)
    - Transition: max-height 0.3s ease
    - Contains internal links when relevant
```

#### G. Emergency Banner / Top Bar

```
Emergency Top Bar:
  Container:
    - Background: #1B3A5C
    - Padding: 8px 16px
    - Text: 14px/600 #FFFFFF
    - Text-align: center
    - Display: flex, justify-content: center, align-items: center
    - Position: sticky top (above main header)
  
  Content:
    - [clock icon] "24/7 Emergency Service"
    - Separator: " | "
    - [phone icon] "(786) 813-0495"
    - Phone is <a href="tel:+17868130495"> link
    - Hover on phone: underline
  
  Mobile:
    - Font: 13px
    - Simplified: phone only or "24/7 - Call Now"
```

#### H. Contact Form

```
Contact Form:
  Container:
    - Background: #FFFFFF
    - Border: 1px solid #DDE2E8
    - Border-radius: 12px
    - Padding: 32px
    - Box-shadow: 0 4px 16px rgba(0,0,0,0.06)
  
  Title:
    - "Get a Free Quote"
    - 24px/700 #1B3A5C
    - Subtitle: "We'll respond within 15 minutes"
  
  Fields:
    - Full Name (required)
    - Phone (required, type="tel")
    - Email (optional, type="email")
    - Service Type (required, <select> dropdown)
      Options: Emergency Lockout, Residential, Commercial, 
               Automotive, Safe Services, Other
    - Message (optional, <textarea>, 3 rows)
  
  Field Style:
    - Background: #F5F7FA
    - Border: 1px solid #DDE2E8
    - Border-radius: 8px
    - Padding: 14px 16px
    - Font: 16px (prevents iOS zoom)
    - Focus: border-color #4A7FB5, box-shadow 0 0 0 3px rgba(74,127,181,0.2)
    - Error: border-color #D32F2F, message below in red
    - Label: above field, 14px/600 #1A1A2E, visible always
    - Placeholder: lighter, supplementary only (not replacement for label)
  
  Submit Button:
    - Button Primary style
    - "Send Request" or "Get My Free Quote"
    - Full width on mobile
    - Loading state: spinner, disabled
  
  Privacy note:
    - Below button: "We respect your privacy. No spam, ever."
    - 12px, #6B7B8D
  
  Success state:
    - Green checkmark icon
    - "Thank you! We'll call you within 15 minutes."
    - Font: 18px/600 #2E8B57
```

#### I. Breadcrumbs

```
Breadcrumbs:
  Container:
    - Padding: 12px 0
    - Font: 14px/400
    - Color: #6B7B8D
  
  Items:
    - Links: #4A7FB5, hover underline
    - Separator: " > " or chevron icon
    - Current page: #1A1A2E, not a link, aria-current="page"
  
  Schema:
    - BreadcrumbList structured data on every internal page
  
  Example: Home > Services > Residential Locksmith
```

#### J. Pricing Table

```
Pricing Table:
  Container:
    - Overflow-x: auto (mobile horizontal scroll)
    - Border: 1px solid #DDE2E8
    - Border-radius: 8px
  
  Header Row:
    - Background: #1B3A5C
    - Text: #FFFFFF, 14px/600
    - Padding: 14px 16px
  
  Data Rows:
    - Background: alternating #FFF / #F5F7FA
    - Text: 16px/400 #1A1A2E
    - Padding: 14px 16px
    - Border-bottom: 1px solid #DDE2E8
  
  Price Column:
    - Font: 16px/700 #E8641A
    - Format: "$50 - $100" (range)
  
  Note Row:
    - Span full width
    - Background: #FFF
    - Text: 14px italic #6B7B8D
    - "* Prices are estimates. Call for exact quote."
```

---

### 1.5 מערכת אייקונים (Icon System)

#### ספריית אייקונים

**מקור:** Lucide Icons (open source, MIT license, קל, SVG)
**סיבה:** קווי, נקי, מתאים ל-UI מקצועי, גודל קובץ מינימלי, נגיש

#### אייקונים נדרשים

| קטגוריה | אייקונים | שימוש |
|---------|---------|-------|
| **Navigation** | phone, menu, x, chevron-down, chevron-right, arrow-right | תפריט, CTAs, accordions |
| **Services** | home, building-2, car, alert-triangle, lock, key, shield-check | כרטיסי שירות, headers |
| **Trust** | star, shield, clock, calendar, check-circle, award | trust bar, badges |
| **Contact** | phone, mail, map-pin, message-circle, send | פרטי קשר, טפסים |
| **UI** | plus, minus, external-link, search, loader | accordion, loading states |

#### כללי אייקונים

- **גודל ברירת מחדל:** 24px
- **גודל קטן:** 16px (inline with text)
- **גודל גדול:** 32-48px (feature icons, service cards)
- **צבע:** inherit מהטקסט, או צבע ייעודי (Orange CTA, Navy feature)
- **Stroke width:** 2px (default Lucide)
- **נגישות:** `aria-hidden="true"` על אייקונים דקורטיביים, `role="img" aria-label="..."` על אייקונים בעלי משמעות
- **טעינה:** inline SVG (לא icon font) - פחות requests, יותר נגיש, ניתן לצביעה ב-CSS

---

### 1.6 אסטרטגיית תמונות (Image Strategy)

#### סוגי תמונות נדרשות

| סוג | כמות | פורמט | גודל מקסימלי | שימוש |
|-----|------|-------|-------------|-------|
| **Hero backgrounds** | 3-5 | WebP + AVIF fallback | 200KB max | hero sections |
| **צוות/טכנאים** | 5-8 | WebP | 80KB max | about, trust sections |
| **עבודות (before/after)** | 10-15 | WebP | 100KB max | service pages, gallery |
| **ציוד ורכב** | 3-5 | WebP | 80KB max | about, services |
| **מנעולים/מפתחות** | 10-15 | WebP | 60KB max | service pages, blog |
| **אזורי שירות** | 10-15 | WebP | 100KB max | area pages |
| **לוגו** | 1 | SVG (main) + PNG (fallback) | 10KB SVG | header, footer, OG |
| **Trust badges** | 5-8 | SVG | 5KB each | throughout |
| **OG Image** | 1 per page type | PNG/JPG | 100KB | social sharing |

#### כללי תמונות

```
תמונות - כללים טכניים:
  - פורמט: WebP ראשי, AVIF ל-browsers תומכים, JPEG fallback
  - Responsive: srcset עם 3 גדלים (400w, 800w, 1200w)
  - Sizes attribute: מתאים ל-layout בפועל
  - Lazy loading: loading="lazy" על כל תמונה מתחת ל-fold
  - Hero image: loading="eager", fetchpriority="high"
  - Aspect ratio: width + height attributes על כל <img> (מונע CLS)
  - Alt text: תיאורי, כולל keyword כשרלוונטי, לא "image of..."
  - Compression: 80% quality WebP, 70% quality AVIF
  - Max file size: אף תמונה מעל 200KB
  - CDN: serve דרך Cloudflare CDN עם auto-resize

תמונות - כללי תוכן:
  - מעדיפים תמונות אמיתיות של הצוות, העבודות, הציוד
  - אם stock - רק high quality, realistic, diverse
  - אין watermarks, אין תמונות generic מדי
  - מותגים: תמונות מנעולים אמיתיים (Schlage, Kwikset) שהם מתקינים
  - אזורים: landmarks מזוהים של Miami (אם רלוונטי)
```

---

## 2. תבניות עמודים (Wireframes)

### 2.1 Homepage - מבנה Sections

```
+------------------------------------------------------------------+
| [Emergency Top Bar] 24/7 Emergency | (786) 813-0495               |
+------------------------------------------------------------------+
| [Header] Logo | Nav: Services | Areas | About | Blog | Contact   |
|                                                [Call CTA Button]  |
+------------------------------------------------------------------+
| [Hero Section]                                                    |
|                                                                   |
|  Overline: 24/7 EMERGENCY LOCKSMITH SERVICE                      |
|  H1: Miami's Trusted 24/7 Locksmith Service                      |
|  Subtitle: Licensed & insured locksmith serving all of            |
|            Miami-Dade County. 15-30 minute response.              |
|  [Call (786) 813-0495]  [Get a Free Quote]                       |
|  [star] 4.9 Rating  [shield] Licensed  [clock] 15-Min Response  |
|                                                    [Hero Image]   |
+------------------------------------------------------------------+
| [Trust Bar] Licensed & Insured | 4.9 Google | 15-30 Min | 10+ Yr |
+------------------------------------------------------------------+
| [Problem-Solution Intro]                                          |
|  H2: Professional Locksmith Services in Miami-Dade                |
|  2 paragraphs: problem recognition + solution overview            |
+------------------------------------------------------------------+
| [Services Grid - 4 Cards]                                         |
|  H2: Our Locksmith Services                                      |
|  [Residential] [Commercial] [Automotive] [Emergency]              |
|  Each: icon + H3 + 2 lines + 4 bullets + "Learn More"           |
+------------------------------------------------------------------+
| [How It Works - 3 Steps]                                          |
|  H2: How It Works                                                |
|  [1. Call Us] --> [2. We Dispatch] --> [3. Problem Solved]        |
|  Each: number + icon + title + 1-2 lines                         |
+------------------------------------------------------------------+
| [Why Choose Us - 6 Items]                                         |
|  H2: Why Miami Trusts I Need Locksmith                           |
|  2x3 grid: icon + title + short description                      |
|  (Fast Response, Upfront Pricing, Licensed, Experienced,          |
|   Full Coverage, 24/7)                                            |
+------------------------------------------------------------------+
| [Social Proof Section]                                            |
|  H2: What Our Customers Say                                      |
|  [4.9 stars badge]  "200+ Five-Star Reviews"                     |
|  [Testimonial Slider - 3 cards]                                   |
|  [Read All Reviews - link]                                        |
+------------------------------------------------------------------+
| [Service Areas Map]                                               |
|  H2: Serving All of Miami-Dade County                            |
|  [Static map image OR interactive]  [Grid of 12-15 area links]   |
+------------------------------------------------------------------+
| [Specials Banner]                                                 |
|  [Free Child Rescue] [Military Discount] [Senior Discount]        |
|  [View All Specials]                                              |
+------------------------------------------------------------------+
| [Mini FAQ - 5 Questions]                                          |
|  H2: Frequently Asked Questions                                  |
|  [Accordion x 5]                                                  |
|  [See All FAQs - link]                                            |
+------------------------------------------------------------------+
| [Bottom CTA Section]                                              |
|  Background: Navy                                                 |
|  H2: Need a Locksmith Now?                                       |
|  "Fast, licensed, transparent. We're ready."                      |
|  [Call (786) 813-0495]  [Get a Free Quote]                       |
+------------------------------------------------------------------+
| [Footer]                                                          |
|  Logo | NAP | Hours | Service Links | Area Links                 |
|  Social | License # | Privacy | Terms | Copyright 2026            |
+------------------------------------------------------------------+
| [Mobile Only: Sticky Phone Button - fixed bottom]                 |
+------------------------------------------------------------------+
```

---

### 2.2 Service Page Template

```
+------------------------------------------------------------------+
| [Emergency Top Bar]                                               |
| [Header]                                                          |
+------------------------------------------------------------------+
| [Hero - Compact]                                                  |
|  Breadcrumbs: Home > Services > [Service Name]                   |
|  H1: [Service Name] in Miami-Dade County                         |
|  Subtitle: [1-line service description + key benefit]             |
|  [Call CTA] [Get Quote CTA]                                      |
|  Trust: Licensed | 4.9 Rating | Fast Response                    |
+------------------------------------------------------------------+
| [Service Overview]                                                |
|  H2: About [Service]                                             |
|  2-3 paragraphs: what, who, when, why                            |
|  [Inline CTA: "Need this now? Call (786) 813-0495"]              |
+------------------------------------------------------------------+
| [Services Breakdown - Sub-services]                               |
|  H2: [Service] We Provide                                        |
|  H3 per sub-service (6-8 items)                                   |
|  Each: 2-3 sentences + bullet list of specifics                   |
+------------------------------------------------------------------+
| [How It Works - 3-4 Steps]                                        |
|  Same component as homepage, contextualized                       |
+------------------------------------------------------------------+
| [Pricing Section]                                                 |
|  H2: [Service] Pricing in Miami                                  |
|  [Pricing Table component]                                        |
|  "No hidden fees. Call for exact quote."                          |
+------------------------------------------------------------------+
| [Why Choose Us - Service-Specific]                                |
|  H2: Why Choose Our [Service] Team                               |
|  4 items with proof points specific to this service               |
+------------------------------------------------------------------+
| [Brands/Equipment]                                                |
|  H2: Brands We Service / Work With                               |
|  Logo grid: Schlage, Kwikset, Yale, Medeco, etc.                 |
+------------------------------------------------------------------+
| [Testimonials]                                                    |
|  H2: What Our Customers Say About [Service]                      |
|  [2 Testimonial Cards - service-specific]                         |
+------------------------------------------------------------------+
| [Service Areas for This Service]                                  |
|  H2: We Provide [Service] Across Miami-Dade                      |
|  [Grid of 10-12 area links]                                       |
+------------------------------------------------------------------+
| [FAQ Section - 4-6 Questions]                                     |
|  H2: [Service] FAQ                                               |
|  [Accordion x 4-6]                                                |
+------------------------------------------------------------------+
| [Related Services]                                                |
|  H2: Related Services                                            |
|  [3 Service Cards - linked]                                       |
+------------------------------------------------------------------+
| [Bottom CTA]                                                      |
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 2.3 Service Area Page Template

```
+------------------------------------------------------------------+
| [Emergency Top Bar]                                               |
| [Header]                                                          |
+------------------------------------------------------------------+
| [Hero - Compact]                                                  |
|  Breadcrumbs: Home > Service Areas > [City]                      |
|  H1: Locksmith Services in [City], Florida                       |
|  Subtitle: "Trusted locksmith serving [City] and surrounding      |
|            neighborhoods. 15-30 minute response."                 |
|  [Call CTA] [Request Service CTA]                                |
+------------------------------------------------------------------+
| [About the Area - Unique Content]                                 |
|  H2: About [City]                                                |
|  1-2 paragraphs: area character, property types, security context |
|  Includes local landmarks, neighborhoods                          |
+------------------------------------------------------------------+
| [Services in This Area]                                           |
|  H2: Locksmith Services We Provide in [City]                     |
|  4 cards: Residential | Commercial | Automotive | Emergency      |
|  Each links to service page                                       |
+------------------------------------------------------------------+
| [Why Residents Choose Us]                                         |
|  H2: Why [City] Residents Choose I Need Locksmith                |
|  3-4 benefit items with local context                             |
+------------------------------------------------------------------+
| [Response Time]                                                   |
|  H2: Response Time for [City]                                    |
|  "Average [X] minute response to [City]"                         |
|  Geographic context for response speed                            |
+------------------------------------------------------------------+
| [Google Map Embed]                                                |
|  Centered on [City] area                                          |
+------------------------------------------------------------------+
| [Neighborhoods]                                                   |
|  H2: Neighborhoods We Serve in [City]                            |
|  Grid/list of specific neighborhoods                              |
+------------------------------------------------------------------+
| [Testimonial - Local]                                             |
|  Review from customer in this area or nearby                      |
+------------------------------------------------------------------+
| [Local FAQ - 3-4 Questions]                                       |
|  Accordion with area-specific questions                           |
+------------------------------------------------------------------+
| [Nearby Areas]                                                    |
|  "Also Serving:" [2-3 nearby area links]                         |
+------------------------------------------------------------------+
| [Bottom CTA]                                                      |
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 2.4 About Page

```
+------------------------------------------------------------------+
| [Header]                                                          |
+------------------------------------------------------------------+
| [Hero - Simple]                                                   |
|  Breadcrumbs: Home > About                                       |
|  H1: About I Need Locksmith Miami                                |
|  Real team photo as background/aside                              |
+------------------------------------------------------------------+
| [Our Story]                                                       |
|  H2: Our Story                                                   |
|  2-3 paragraphs: founding, mission, growth in Miami               |
+------------------------------------------------------------------+
| [By the Numbers]                                                  |
|  4 stat counters: 10+ Years | 5,000+ Jobs | 4.9 Rating | 50+ Areas|
+------------------------------------------------------------------+
| [Meet the Team]                                                   |
|  H2: Meet Our Team                                               |
|  Cards: photo + name + role + experience + specialties            |
+------------------------------------------------------------------+
| [Credentials]                                                     |
|  H2: Our Credentials                                             |
|  License, insurance, affiliations, badge logos                    |
+------------------------------------------------------------------+
| [Values]                                                          |
|  H2: What We Stand For                                           |
|  3-4 values with icon + description                               |
+------------------------------------------------------------------+
| [Community]                                                       |
|  H2: Giving Back to Miami                                        |
|  Free child rescue, military/senior discounts, local involvement  |
+------------------------------------------------------------------+
| [Bottom CTA]                                                      |
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 2.5 Contact Page

```
+------------------------------------------------------------------+
| [Header]                                                          |
+------------------------------------------------------------------+
| [Hero - Minimal]                                                  |
|  Breadcrumbs: Home > Contact                                     |
|  H1: Contact I Need Locksmith Miami                              |
+------------------------------------------------------------------+
| [2-Column Layout]                                                 |
|  LEFT: Contact Form component                                    |
|  RIGHT:                                                           |
|    - Phone: (786) 813-0495 (click-to-call)                       |
|    - Email: Ineedlocksmithmiami@gmail.com (mailto)                |
|    - Hours: full schedule                                         |
|    - "Response within 15 minutes"                                 |
|    - Emergency callout box: "Locked Out? Skip the form - Call!"  |
+------------------------------------------------------------------+
| [Google Map - Service Area]                                       |
|  Full-width map showing service coverage                          |
+------------------------------------------------------------------+
| [Service Areas Quick Links]                                       |
|  Grid of 12-15 area links                                        |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 2.6 Blog Post Template

```
+------------------------------------------------------------------+
| [Header]                                                          |
+------------------------------------------------------------------+
| [Breadcrumbs: Home > Blog > [Post Title]]                        |
+------------------------------------------------------------------+
| [Article Header]                                                  |
|  H1: [Post Title]                                                |
|  Author box: [photo] [name] [credentials] | [date] | [updated]  |
+------------------------------------------------------------------+
| [Table of Contents]                                               |
|  Jump links to all H2s                                            |
|  Sticky on desktop sidebar                                        |
+------------------------------------------------------------------+
| [Article Body - max-width: 72ch]                                  |
|  H2/H3 structure                                                  |
|  Images with captions                                             |
|  [In-Content CTA at 1/3]                                          |
|  Tables, bullets, numbered lists                                  |
|  [In-Content CTA at 2/3]                                          |
+------------------------------------------------------------------+
| [FAQ Section within post]                                         |
|  Accordion component, FAQ Schema                                  |
+------------------------------------------------------------------+
| [Service CTA Box]                                                 |
|  "Need [relevant service]? Call (786) 813-0495"                  |
+------------------------------------------------------------------+
| [Related Posts - 3 Cards]                                         |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 2.7 FAQ Page

```
+------------------------------------------------------------------+
| [Header]                                                          |
+------------------------------------------------------------------+
| [Hero - Minimal]                                                  |
|  H1: Frequently Asked Questions About Locksmith Services          |
|  Subtitle: "Find answers to common locksmith questions"           |
|  [Search/Filter bar - optional]                                   |
+------------------------------------------------------------------+
| [Category Navigation - Anchor Links]                              |
|  General | Residential | Commercial | Automotive | Emergency |    |
|  Safes | Pricing                                                  |
+------------------------------------------------------------------+
| [Category: General]                                               |
|  H2: General Locksmith Questions                                 |
|  [Accordion x 7]                                                  |
|  [CTA: "Need help? Call (786) 813-0495"]                         |
+------------------------------------------------------------------+
| [Category: Residential]                                           |
|  H2: Residential Locksmith Questions                             |
|  [Accordion x 5]                                                  |
|  [CTA]                                                            |
+------------------------------------------------------------------+
| ... (repeat per category) ...                                     |
+------------------------------------------------------------------+
| [Bottom CTA]                                                      |
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

## 3. Mobile-First

### 3.1 Breakpoints

| שם | ערך | יעד |
|----|-----|-----|
| `--bp-mobile` | 0 - 639px | טלפונים |
| `--bp-tablet` | 640px - 1023px | טאבלטים, טלפונים גדולים |
| `--bp-desktop` | 1024px - 1399px | מסכים רגילים |
| `--bp-wide` | 1400px+ | מסכים רחבים |

**כלל:** כל CSS נכתב mobile-first. `min-width` media queries בלבד.

### 3.2 כפתור טלפון דביק (Sticky Phone Button)

```
מפרט:
  - מוצג רק ב-mobile (< 1024px)
  - Position: fixed
  - Bottom: 16px
  - Left: 16px, Right: 16px
  - Height: 56px
  - Background: #E8641A
  - Border-radius: 28px (pill)
  - Box-shadow: 0 4px 16px rgba(0,0,0,0.3)
  - z-index: 9999
  - Content: [phone icon] "Call (786) 813-0495"
  - Font: 18px/700 white
  - Element: <a href="tel:+17868130495">
  - Accessible: aria-label="Call I Need Locksmith Miami at 786-813-0495"
  
  התנהגות:
  - נמצא תמיד (לא נעלם ב-scroll)
  - לא מסתיר תוכן קריטי (padding-bottom: 80px על body)
  - לא מוצג ב-desktop (מספיק CTAs בדף)
  - אנימציית כניסה עדינה (fade-in after 1s)
```

### 3.3 Touch Targets

```
כללים:
  - כל אלמנט אינטראקטיבי: מינימום 44x44px (WCAG 2.5.8)
  - כפתורים: מינימום 48x48px (Google recommendation)
  - לינקים בתוך טקסט: padding נוסף 8px vertically
  - תפריט hamburger: 48x48px
  - Accordion headers: min-height 48px
  - Form inputs: min-height 48px
  - רווח בין touch targets: מינימום 8px
  - Phone links: large, padded, obvious
```

### 3.4 ניווט מובייל (Mobile Navigation)

```
Mobile Header:
  - Height: 64px
  - Position: sticky top (אחרי emergency bar)
  - Background: white
  - Content: [Hamburger 48x48] [Logo - centered] [Phone icon 48x48]
  - Phone icon: <a href="tel:+17868130495"> with orange background circle
  - z-index: 9998

Mobile Menu (Drawer):
  - Slide from left, full height
  - Width: 85vw (max 360px)
  - Background: white
  - Overlay: rgba(0,0,0,0.5) on rest of page
  - Close button: [X] 48x48 top-right
  - Items: full-width, 56px height each, 18px font
  - Services: expandable sub-menu (accordion style)
  - Service Areas: expandable sub-menu
  - Bottom: Phone number + CTA button
  - Trap focus inside menu when open (accessibility)
  - Esc key closes menu
  - aria-expanded, aria-controls, role="dialog"
  
  Animation:
  - Open: slide left-to-right, 0.25s ease
  - Close: slide right-to-left, 0.2s ease
  - No scroll on body when menu open (overflow: hidden)
```

### 3.5 Thumb Zone

```
Layout Priorities (thumb-zone friendly):
  - Primary CTAs: bottom-center or bottom-right
  - Phone button: fixed bottom center
  - Navigation: top of screen (reachable via hamburger)
  - Form submit: bottom of form, full width
  - Scroll actions: natural vertical thumb movement
  
  Card tapping:
  - Entire card is tap target (not just text)
  - Visual feedback on tap (scale or opacity change)
  - Min card size: 100% width on mobile
```

### 3.6 Mobile CTA Placement Strategy

```
כל מסך (viewport height) צריך להכיל לפחות CTA אחד:

Hero:        [Call CTA] + [Quote CTA]
After fold:  [Sticky phone button appears]
Mid-page:    [In-content CTA] "Need help? Call now"
Before FAQ:  [CTA banner]
Bottom:      [Full-width CTA section]
Always:      [Sticky phone button - fixed]

אין מצב שמשתמש גולל ולא רואה דרך ליצור קשר.
```

### 3.7 Click-to-Call

```
כל מספר טלפון באתר:
  - Wrapped in: <a href="tel:+17868130495">
  - aria-label="Call I Need Locksmith Miami at 786-813-0495"
  - Visual: phone icon + number
  - Color: #E8641A or white (on dark backgrounds)
  - Font-weight: 700
  - Desktop: displays number, click dials (if supported)
  - Mobile: always triggers phone dialer
  
  מיקומים:
  - Emergency top bar
  - Header (icon on mobile, full number on desktop)
  - Hero section
  - After each content section (in-content CTA)
  - Footer
  - Sticky mobile button
  - Contact page
  - Sidebar (blog)
```

---

## 4. CRO - אופטימיזציית המרות

### 4.1 היררכיית CTA

| רמה | סוג | מיקום | עיצוב | יעד |
|-----|------|-------|-------|-----|
| **Primary** | שיחת טלפון | Hero, Sticky button, Header, Footer | Button Primary (Orange) + phone icon | 70% of conversions |
| **Secondary** | טופס קשר | Hero (alt), Mid-page, Contact page | Button Secondary + form component | 25% of conversions |
| **Tertiary** | ניווט פנימי | In-content links, Related services | Ghost button / text link | 5% (micro-conversions) |

#### CTA Microcopy

```
Primary (Phone):
  Default: "Call (786) 813-0495"
  Emergency pages: "Call Now - We're On Our Way"
  Service pages: "Call for a Free [Service] Estimate"
  After-hours: "Call 24/7 - Emergency Available"

Secondary (Form):
  Default: "Get a Free Quote"
  Service pages: "Request [Service] Estimate"
  Emergency: "Or Request a Callback"

Supporting Microcopy (below CTA):
  "Free estimate, no hidden fees"
  "We respond within 15 minutes"
  "Licensed & insured technicians"
  "Available 24/7 for emergencies"
```

### 4.2 Trust Signals - מיקום ומיפוי

```
Header (כל דף):
  - "Licensed & Insured" text
  - Phone number

Emergency Top Bar (כל דף):
  - "24/7 Emergency Service"
  - Phone number

Hero Section:
  - Trust bar: Rating + License + Response Time + Experience
  - Phone CTA prominent

Below Hero:
  - Trust bar component (standalone)
  - 4 metrics with icons

Mid-Page:
  - Testimonial card(s)
  - Google Reviews badge
  - "5,000+ Jobs Completed"

Service Pages:
  - Brands we service logos
  - Pricing transparency table
  - Service-specific testimonial
  - "How It Works" process

Bottom CTA:
  - "Licensed, Insured & Bonded"
  - Google rating

Footer:
  - FL License number
  - "Insured & Bonded"
  - BBB badge (if applicable)
  - Social media links
```

### 4.3 Social Proof Strategy

```
Google Reviews Widget:
  - Homepage: slider with 3-4 featured reviews
  - Service pages: 1-2 relevant reviews
  - Sidebar (blog): Google rating badge
  - Reviews page: full collection

Implementation:
  - אין embed ישיר של Google widget (heavy, slow)
  - עדיף: static HTML cards with real review text, name, date
  - Schema: Review markup on each
  - Link: "See all reviews on Google" -> Google Maps profile
  - Update: quarterly refresh of featured reviews

Stats / Counters:
  - "4.9 Google Rating" - everywhere
  - "200+ Five-Star Reviews" - homepage, reviews page
  - "10+ Years in Miami" - about, trust bar
  - "5,000+ Locks Serviced" - about, homepage
  - "50+ Neighborhoods Served" - homepage, service areas
  
  Display: animated count-up on scroll-into-view (subtle, once)
  Fallback: static numbers (no JS dependency for content)
```

### 4.4 Urgency Elements (אותנטיים, לא מניפולטיביים)

```
Emergency Pages:
  - "Available Right Now" (if business hours - green dot)
  - "24/7 Emergency Service" badge
  - "Average 15-30 Minute Response" 
  - "Our technician is ready to dispatch"
  
  לא: "HURRY!", "Only 2 technicians left!", fake timers

Service Pages:
  - "Same-Day Service Available"
  - "Free Estimates - No Obligation"
  - "Call Today, Fixed Today"

Specials Page:
  - Real expiration dates on offers
  - "Mention this offer when you call"
  - Seasonal relevance: "Hurricane Season Prep - Book Now"
```

### 4.5 אופטימיזציית טופס (Form Optimization)

```
Design Rules:
  - מקסימום 5 שדות (name, phone, email, service type, message)
  - Phone + Name = required, rest = optional
  - Single column layout (no side-by-side fields on mobile)
  - Labels always visible above fields (not inside as placeholder)
  - Input type matching: type="tel", type="email"
  - Autocomplete attributes: autocomplete="name", "tel", "email"
  - Font size 16px minimum on inputs (prevents iOS zoom)
  - Submit button full-width on mobile
  - Loading state on submit (spinner + disabled)
  - Success message inline (not redirect to new page)
  - Error messages: inline, below field, red text, specific
  
UX Enhancements:
  - Auto-format phone as user types: (___) ___-____
  - Service type dropdown has clear options matching user intent
  - "Emergency Lockout" as first dropdown option
  - Optional message field expands on focus
  - Form appears also in hero section (compact version: name + phone + CTA)
  
Conversion Boosters:
  - Title: "Get a Free Quote" (not "Contact Us")
  - Subtitle: "We respond within 15 minutes"
  - Below submit: "No spam. We respect your privacy."
  - Social proof next to form: "4.9 Rating | Licensed | 24/7"
```

### 4.6 Phone Number Visibility

```
כלל: מספר הטלפון צריך להיות גלוי תוך 2 שניות מכל נקודה באתר

Desktop:
  - Header: full number, right-aligned, orange or navy
  - Hero: large, prominent, in CTA button
  - Mid-page: in CTA sections
  - Footer: full number with icon
  
Mobile:
  - Header: phone icon (circular, orange background)
  - Sticky button: full number, fixed bottom
  - Hero: in CTA button
  - Footer: full number
  
טלפון חייב להיות <a href="tel:"> תמיד.
```

---

## 5. נגישות WCAG 2.1 AA

### 5.1 ניגודיות צבעים (Color Contrast)

```
דרישות:
  - טקסט רגיל (< 18px): contrast ratio >= 4.5:1
  - טקסט גדול (>= 18px bold OR >= 24px): contrast ratio >= 3:1
  - UI components (borders, icons): contrast ratio >= 3:1
  - Focus indicators: >= 3:1 against adjacent colors
  
בדיקות:
  - [ ] כל שילובי צבע נבדקו עם WebAIM Contrast Checker
  - [ ] כפתור Orange CTA: טקסט לבן רק ב-18px bold+ (ratio 3.28:1)
  - [ ] טקסט על רקעי תמונות: overlay כהה 70%+ מבטיח contrast
  - [ ] Focus rings: 3px solid #1B3A5C (contrast 9.87:1 on white)
  - [ ] Placeholder text: #6B7B8D on #F5F7FA (ratio 4.08:1 - AA)
  - [ ] אין שימוש בצבע בלבד להעברת מידע (+ icon/text)
  
  כלים: axe-core, Pa11y, Lighthouse accessibility audit
```

### 5.2 ניווט מקלדת (Keyboard Navigation)

```
דרישות:
  - [ ] כל אלמנט אינטראקטיבי נגיש ב-Tab (כפתורים, לינקים, שדות, accordions)
  - [ ] סדר Tab הגיוני ועוקב אחרי visual order
  - [ ] Skip-to-main-content link כאלמנט ראשון בדף
  - [ ] Enter / Space מפעילים כפתורים ולינקים
  - [ ] Esc סוגר modals, menus, dropdowns
  - [ ] Arrow keys מנווטים בתוך menus, dropdowns, tabs
  - [ ] Focus trap בתוך modals ו-mobile menu drawer
  - [ ] אין focus trap בלתי צפוי שמונע יציאה
  - [ ] Sticky phone button לא חוסם tab order

Focus Indicators:
  - ברירת מחדל: 3px solid #1B3A5C, outline-offset: 2px
  - כפתורים: outline + slight background change
  - לינקים: outline + underline
  - שדות טופס: border-color change + box-shadow
  - Cards: outline around entire card
  - NEVER: outline: none without replacement
  - Custom focus-visible: show focus only on keyboard nav (not mouse clicks)
  
  :focus-visible {
    outline: 3px solid #1B3A5C;
    outline-offset: 2px;
  }
```

### 5.3 קורא מסך (Screen Reader Support)

```
דרישות:
  - [ ] מבנה כותרות הגיוני: H1 אחד בדף, H2-H6 ללא דילוגים
  - [ ] כל תמונה עם alt text תיאורי (לא "image-1.jpg")
  - [ ] תמונות דקורטיביות: alt="" (ריק, לא חסר)
  - [ ] אייקונים דקורטיביים: aria-hidden="true"
  - [ ] אייקונים משמעותיים: role="img" aria-label="..."
  - [ ] טלפון links: aria-label="Call I Need Locksmith Miami at 786-813-0495"
  - [ ] External links: visually-hidden text "(opens in new tab)" OR aria-label
  - [ ] טפסים: <label> מקושר ל-<input> via for/id
  - [ ] שגיאות טופס: aria-invalid="true" + aria-describedby -> error message
  - [ ] שדות חובה: aria-required="true" + visual asterisk
  - [ ] Loading states: aria-live="polite" + aria-busy="true"
  - [ ] Success messages: aria-live="polite"
  - [ ] Breadcrumbs: <nav aria-label="Breadcrumb">
  - [ ] Pagination: <nav aria-label="Pagination">
  - [ ] Ratings: aria-label="4.9 out of 5 stars" (not just star images)
  - [ ] Phone number not broken across elements (read as one unit)

Announcements:
  - Form submission success: aria-live="polite" region updates
  - Accordion open/close: aria-expanded state changes
  - Menu open/close: aria-expanded state changes
  - Page navigation: document title updates
```

### 5.4 ARIA Landmarks

```
Structure for every page:

<body>
  <a class="skip-link" href="#main-content">Skip to main content</a>
  
  <div role="banner" / <header>
    <nav aria-label="Emergency contact">  <!-- Emergency top bar -->
    <nav aria-label="Main navigation">     <!-- Primary nav -->
  </header>
  
  <nav aria-label="Breadcrumb">           <!-- Breadcrumbs -->
  
  <main id="main-content">               <!-- Main content -->
    <article>                             <!-- For blog posts -->
    
    <section aria-label="Our Services">   <!-- Named sections -->
    <section aria-label="Customer Reviews">
    <section aria-label="FAQ">
    <section aria-label="Contact Us">
  </main>
  
  <aside aria-label="Sidebar">           <!-- Blog sidebar -->
  
  <footer role="contentinfo" / <footer>>
    <nav aria-label="Footer navigation">
  </footer>
</body>

כללים:
  - [ ] אין landmarks כפולים ללא aria-label ייחודי
  - [ ] כל <nav> עם aria-label ייחודי
  - [ ] <main> יחיד בדף
  - [ ] <header> ו-<footer> ברמת הדף
  - [ ] sections עם aria-label או aria-labelledby
```

### 5.5 ניהול Focus (Focus Management)

```
Scenarios:

Mobile Menu:
  1. לחיצה על hamburger -> focus moves to first menu item
  2. Focus trapped inside menu (Tab cycles within menu items)
  3. Esc or close button -> focus returns to hamburger button
  4. aria-expanded updates on hamburger button

FAQ Accordion:
  1. Enter/Space on question -> answer opens
  2. aria-expanded="true" on question button
  3. Focus stays on question (doesn't jump to answer)
  4. Shift+Tab from first answer element -> back to question
  5. Space/Enter again -> closes, aria-expanded="false"

Form Submission:
  1. Submit -> loading state (aria-busy="true")
  2. Success -> focus moves to success message (aria-live="polite")
  3. Error -> focus moves to first field with error (aria-invalid="true")
  
Skip Link:
  1. First Tab press shows "Skip to main content" link
  2. Enter jumps to <main id="main-content">
  3. Link visible only on focus (:focus-visible)
  
Page Load:
  - New page: focus at top, screen reader reads page title
  - SPA navigation (if applicable): programmatic focus to H1 of new page
```

### 5.6 Alt Text Strategy

```
כללים:
  - Hero images: alt text describes scene + purpose
    alt="Licensed locksmith technician arriving at Miami residence for emergency lockout service"
  
  - Team photos: alt text includes name and role
    alt="John Smith, lead locksmith technician at I Need Locksmith Miami"
  
  - Service photos: alt text describes the service
    alt="Professional deadbolt installation on residential front door in Brickell, Miami"
  
  - Before/After: describe transformation
    alt="New Schlage B60N deadbolt installed replacing old worn lock on Miami Beach condo door"
  
  - Brand logos: alt="[Brand Name] logo"
    alt="Schlage logo"
  
  - Trust badges: alt="[Badge meaning]"
    alt="Florida State Licensed Locksmith badge"
    alt="4.9 stars Google rating badge for I Need Locksmith Miami"
  
  - Decorative images: alt="" (empty, not omitted)
  - Background images: no alt needed (CSS), but ensure info is in text
  - Maps: alt="Map showing I Need Locksmith Miami service area in Miami-Dade County"
  - Icons: aria-hidden="true" (text companion provides meaning)
  
  כולל keyword כשטבעי, לא כ-stuffing:
    כן: alt="Residential locksmith changing lock on Miami home front door"
    לא: alt="locksmith miami locksmith service miami locksmith"
```

### 5.7 נגישות טפסים (Form Accessibility)

```
כל שדה טופס:

<div class="form-field">
  <label for="phone" id="phone-label">
    Phone Number <span aria-hidden="true">*</span>
    <span class="visually-hidden">(required)</span>
  </label>
  <input 
    type="tel" 
    id="phone" 
    name="phone"
    required
    aria-required="true"
    aria-describedby="phone-help phone-error"
    autocomplete="tel"
    inputmode="tel"
    placeholder="(___) ___-____"
  />
  <span id="phone-help" class="form-help">
    We'll call you back within 15 minutes
  </span>
  <span id="phone-error" class="form-error" role="alert" aria-live="polite">
    <!-- Error message inserted by JS -->
  </span>
</div>

כללים:
  - [ ] כל input עם <label> מקושר (for/id)
  - [ ] Placeholder לא מחליף label (label תמיד visible)
  - [ ] Required fields: aria-required="true" + visual indicator
  - [ ] Error messages: role="alert" + aria-live="polite"
  - [ ] Error state: aria-invalid="true" on field
  - [ ] Help text: aria-describedby pointing to help span
  - [ ] Submit button: descriptive text ("Send Request", not "Submit")
  - [ ] Form: has accessible name via aria-label or aria-labelledby
  - [ ] Success: aria-live region announces submission result
  - [ ] No CAPTCHA barrier (or accessible alternative like honeypot)
```

### 5.8 צ'קליסט נגישות מלא

```
Perceivable:
  - [ ] 1.1.1 Non-text Content: alt text on all images
  - [ ] 1.3.1 Info and Relationships: semantic HTML, proper headings
  - [ ] 1.3.2 Meaningful Sequence: DOM order matches visual order
  - [ ] 1.3.5 Identify Input Purpose: autocomplete attributes
  - [ ] 1.4.1 Use of Color: color is not sole indicator
  - [ ] 1.4.3 Contrast Minimum: 4.5:1 normal, 3:1 large text
  - [ ] 1.4.4 Resize Text: works at 200% zoom
  - [ ] 1.4.10 Reflow: no horizontal scroll at 320px width
  - [ ] 1.4.11 Non-text Contrast: UI components 3:1
  - [ ] 1.4.12 Text Spacing: adjustable without breaking layout

Operable:
  - [ ] 2.1.1 Keyboard: all functionality via keyboard
  - [ ] 2.1.2 No Keyboard Trap: focus can always escape
  - [ ] 2.4.1 Bypass Blocks: skip-to-content link
  - [ ] 2.4.2 Page Titled: unique <title> per page
  - [ ] 2.4.3 Focus Order: logical tab order
  - [ ] 2.4.4 Link Purpose: link text describes destination
  - [ ] 2.4.6 Headings and Labels: descriptive headings
  - [ ] 2.4.7 Focus Visible: custom focus indicators
  - [ ] 2.5.5 Target Size: 44x44px minimum

Understandable:
  - [ ] 3.1.1 Language of Page: lang="en" on <html>
  - [ ] 3.2.1 On Focus: no unexpected changes
  - [ ] 3.2.2 On Input: no unexpected changes
  - [ ] 3.3.1 Error Identification: errors clearly described
  - [ ] 3.3.2 Labels or Instructions: all fields labeled
  - [ ] 3.3.3 Error Suggestion: helpful error messages
  - [ ] 3.3.4 Error Prevention: confirm before submitting

Robust:
  - [ ] 4.1.1 Parsing: valid HTML
  - [ ] 4.1.2 Name, Role, Value: all components accessible
  - [ ] 4.1.3 Status Messages: aria-live for dynamic content
```

---

## 6. Core Web Vitals וביצועים

### 6.1 יעדי ביצועים

| מדד | יעד | Good Threshold | חשוב כי |
|-----|-----|----------------|---------|
| **LCP** (Largest Contentful Paint) | < 2.0s | < 2.5s | מהירות נטענת ראשונית - hero section |
| **INP** (Interaction to Next Paint) | < 150ms | < 200ms | תגובתיות - CTA clicks, accordion opens |
| **CLS** (Cumulative Layout Shift) | < 0.05 | < 0.1 | יציבות - תמונות, fonts, ads לא מזיזים תוכן |
| **FCP** (First Contentful Paint) | < 1.5s | < 1.8s | זמן עד תוכן ראשון |
| **TTFB** (Time to First Byte) | < 400ms | < 800ms | תגובת שרת |
| **Speed Index** | < 3.0s | < 3.4s | מהירות rendering כוללת |
| **Total Page Weight** | < 500KB | < 1MB | bandwidth, especially on mobile |
| **HTTP Requests** | < 30 | < 50 | latency reduction |
| **Lighthouse Performance** | > 90 | > 75 | ציון כולל |
| **Lighthouse Accessibility** | > 95 | > 90 | ציון נגישות |
| **Lighthouse SEO** | > 95 | > 90 | ציון SEO |
| **Lighthouse Best Practices** | > 95 | > 90 | ציון best practices |

### 6.2 אופטימיזציית תמונות

```
פורמט:
  - ראשי: WebP (90%+ browser support)
  - Progressive: AVIF for Chrome/Firefox (40-50% smaller than WebP)
  - Fallback: optimized JPEG (for very old browsers)
  - <picture> element with source fallbacks:
    <picture>
      <source srcset="hero.avif" type="image/avif">
      <source srcset="hero.webp" type="image/webp">
      <img src="hero.jpg" alt="..." width="1200" height="600" loading="lazy">
    </picture>

Responsive (srcset):
  - Hero: 400w, 800w, 1200w, 1600w
  - Cards: 300w, 600w
  - Blog: 400w, 800w
  - Thumbnails: 200w, 400w
  - sizes attribute matching actual layout widths

Compression:
  - WebP: quality 80
  - AVIF: quality 65
  - JPEG fallback: quality 75
  - Max file sizes: hero 200KB, cards 80KB, blog 100KB, thumbnails 30KB

Dimensions:
  - Always include width + height attributes (CLS prevention)
  - Aspect-ratio CSS as fallback

Loading:
  - Hero image: loading="eager", fetchpriority="high"
  - Above-fold images: loading="eager"
  - Below-fold: loading="lazy" (native)
  - Optional: Intersection Observer for critical below-fold

Build Pipeline:
  - Source images in /images/originals/ (full resolution)
  - Build step: auto-generate WebP + AVIF + resize
  - Tool: Sharp (Node.js) or ShortPixel (WordPress plugin)
  - No manual image optimization needed after setup
```

### 6.3 Lazy Loading Strategy

```
מה לטעון lazy:
  - [ ] תמונות מתחת ל-fold: loading="lazy"
  - [ ] Google Maps embeds: load on scroll-into-view (Intersection Observer)
  - [ ] Testimonial slider: images load when section visible
  - [ ] Service area map: load when scrolled to
  - [ ] Brand logos section: lazy
  - [ ] Blog post images: lazy (except hero)
  - [ ] Video embeds (if any): facade pattern (show thumbnail, load player on click)
  - [ ] Google Reviews widget: static HTML, no external embed
  
מה לטעון מיד (eager):
  - [ ] Hero image/background
  - [ ] Logo
  - [ ] Critical above-fold content
  - [ ] Emergency top bar
  - [ ] Header
  
Placeholder strategy:
  - Blur-up: tiny 20px placeholder inline -> swap to full image
  - OR: CSS aspect-ratio box with background-color until image loads
  - Prevents CLS during lazy load
```

### 6.4 Font Loading Strategy

```
שיטה: Critical FOFT (Flash of Faux Text)

1. Preload primary font weight:
   <link rel="preload" href="/fonts/inter-var.woff2" 
         as="font" type="font/woff2" crossorigin>

2. Font-display: swap on @font-face:
   @font-face {
     font-family: 'Inter';
     src: url('/fonts/inter-var.woff2') format('woff2');
     font-display: swap;
     font-weight: 100 900;
   }

3. Use variable font (single file for all weights):
   - inter-var.woff2: ~100KB for all weights
   - vs 6 separate files: ~300KB total
   - Result: 1 HTTP request instead of 6

4. Fallback matching:
   font-family: 'Inter', system-ui, -apple-system, sans-serif;
   - system-ui closely matches Inter metrics
   - Minimal CLS when font swaps

5. Self-host:
   - Do NOT use Google Fonts CDN (privacy, extra DNS lookup)
   - Host from own domain/CDN
   - Fonts in /fonts/ directory
   - Immutable cache headers (1 year)

6. Subset (if needed):
   - Latin subset only (for English site)
   - Remove unused glyphs
   - Can reduce from 100KB to 40KB
```

### 6.5 Critical CSS

```
Strategy:
  1. Extract above-the-fold CSS for each page template
  2. Inline critical CSS in <head> (< 14KB target)
  3. Load remaining CSS asynchronously:
     <link rel="preload" href="/css/main.css" as="style" 
           onload="this.onload=null;this.rel='stylesheet'">
     <noscript><link rel="stylesheet" href="/css/main.css"></noscript>

What goes in critical CSS:
  - Reset/normalize
  - Typography base
  - Header + emergency bar
  - Hero section (layout + colors)
  - Above-fold content structure
  - Trust bar
  - Font-face declarations

What loads deferred:
  - Below-fold sections
  - Animations/transitions
  - FAQ accordion styles
  - Footer styles
  - Print styles
  - Dark mode (if applicable)

Per-template critical CSS:
  - homepage-critical.css (~10KB)
  - service-critical.css (~8KB)
  - area-critical.css (~8KB)
  - blog-critical.css (~7KB)
  - contact-critical.css (~6KB)

WordPress implementation:
  - WP Rocket: auto-generate critical CSS
  - OR: manual with criticalCSS npm package
```

### 6.6 JavaScript Optimization

```
Goals:
  - Total JS: < 100KB (gzipped)
  - No render-blocking JS
  - Defer all non-critical JS
  
Architecture:
  - No jQuery dependency (vanilla JS only)
  - No Elementor frontend JS (if staying WordPress, use lightweight theme)
  - Minimal JS: only for interactive components
  
Required JS Features:
  1. Mobile menu toggle (~1KB)
  2. FAQ accordion (~1KB)
  3. Smooth scroll for anchor links (~0.5KB)
  4. Form validation (~2KB)
  5. Phone number auto-format (~0.5KB)
  6. Lazy loading polyfill (if needed) (~1KB)
  7. Analytics: GA4 tag (~2KB gtag, deferred)
  
Loading Strategy:
  <script src="/js/critical.js" defer></script>     <!-- menu, scroll -->
  <script src="/js/forms.js" defer></script>         <!-- form validation -->
  <script src="/js/analytics.js" async></script>     <!-- GA4 -->

  Inline tiny scripts in HTML for immediate needs:
  - Skip link focus management
  - No-JS class removal

  Dynamic import for optional features:
  - Intersection Observer triggers
  - Map loading script (only when map section is visible)
  
Kill List (Remove from current site):
  - [ ] Elementor frontend.min.js (~200KB+)
  - [ ] Elementor motion effects
  - [ ] Elementor lightbox
  - [ ] Unused WordPress block editor CSS/JS
  - [ ] Emoji detection script (wp-emoji-release.min.js)
  - [ ] jQuery (unless absolutely required by a plugin)
  - [ ] Unused plugin scripts
  - [ ] Font Awesome (if using Lucide inline SVG instead)
```

### 6.7 Caching Strategy

```
Browser Caching (Cache-Control headers):

Static Assets (CSS, JS, fonts, images):
  Cache-Control: public, max-age=31536000, immutable
  (1 year, fingerprinted filenames for cache busting)

HTML Pages:
  Cache-Control: public, max-age=3600, must-revalidate
  (1 hour, allows CDN caching but validates)

Service Worker (optional, PWA):
  - Cache static assets on install
  - Network-first for HTML
  - Offline page with phone number and message

CDN (Cloudflare):
  - Auto-minify HTML, CSS, JS
  - Brotli compression
  - Image optimization (Polish + WebP conversion)
  - Edge caching for static pages
  - APO for WordPress (full page edge caching)
  - Argo Smart Routing (optional, reduces latency)
  
WordPress Caching:
  - Page cache: WP Rocket or LiteSpeed Cache
  - Object cache: Redis (if hosting supports)
  - Database cache: transients cleanup
  - Browser cache: long-lived headers on static assets
  - Preload: crawl sitemap pages to warm cache
```

### 6.8 CDN ואירוח

```
CDN: Cloudflare (Free or Pro plan)
  - DNS + CDN + DDoS protection
  - Edge servers in Miami (Equinix MI1)
  - Auto SSL
  - HTTP/3 support
  - Brotli compression
  - Image optimization (Pro plan)
  - APO for WordPress ($5/mo - major speed boost)

Hosting (see section 7 for full details):
  - Server location: US-East (Miami/Atlanta edge)
  - TTFB target: < 400ms
  - PHP 8.2+ with OPcache
  - LiteSpeed or Nginx web server
  - NVMe SSD storage
```

### 6.9 CLS Prevention Checklist

```
- [ ] All images have width + height attributes
- [ ] Font-display: swap with well-matched fallback
- [ ] No dynamically injected content above fold
- [ ] No ads or popups that shift layout
- [ ] No cookie banners that push content down (use overlay instead)
- [ ] Sticky header has fixed height (doesn't change size)
- [ ] Emergency top bar has fixed height
- [ ] No font-size changes on load
- [ ] Embedded maps have fixed container size
- [ ] Accordion animations use max-height (not height auto)
- [ ] No scroll-linked animations that cause reflow
- [ ] Testimonial slider doesn't change container height
- [ ] Lazy loaded images have placeholder with correct aspect ratio
```

---

## 7. סטאק טכני ותשתית

### 7.1 WordPress vs Static - המלצה

#### השוואה

| קריטריון | WordPress (Lightweight) | Static (Astro/11ty) |
|----------|----------------------|---------------------|
| **מהירות** | טוב עם caching | מצוין מובנה |
| **עדכוני תוכן** | קל (CMS GUI) | דורש deploy |
| **SEO Plugins** | RankMath/Yoast | ידני |
| **Schema** | אוטומטי (plugin) | ידני |
| **30+ area pages** | templates + ACF | templates + data files |
| **Blog management** | מובנה מצוין | אפשרי אבל פחות נוח |
| **עלות תחזוקה** | בינונית (updates) | נמוכה |
| **אבטחה** | דורש תשומת לב | מעולה (static) |
| **Scalability** | טוב | מצוין |

#### המלצה: WordPress Lightweight

**סיבות:**
1. **ניהול תוכן** - 30+ דפי אזור, 12+ דפי שירות, בלוג פעיל = צריך CMS
2. **Plugins ecosystem** - RankMath, WP Rocket, schema = חיסכון בפיתוח
3. **העברה קלה** - אתר קיים WordPress, migration פשוט יותר
4. **בעלי העסק** - יוכלו לעדכן תוכן/מבצעים בעצמם
5. **Templates** - ACF Pro + custom theme = repeatable area/service pages

**תנאי:** חייב להיות lightweight. לא Elementor. לא Divi. לא page builders כבדים.

### 7.2 Theme / Builder

#### המלצה: GeneratePress Pro + GenerateBlocks Pro

| רכיב | בחירה | סיבה |
|------|-------|------|
| **Theme** | GeneratePress Pro | < 30KB, מהיר, נגיש, מבנה נקי, hooks system |
| **Blocks** | GenerateBlocks Pro | Lightweight block components, no bloat |
| **Custom Fields** | ACF Pro | Repeatable templates לservice/area pages |
| **Page Templates** | Custom PHP templates | Full control, no builder overhead |

**למה לא Elementor:**
- Frontend JS/CSS: 200-400KB overhead per page
- DOM: 3-5x more HTML nodes than needed
- CLS issues from dynamic loading
- Accessibility gaps
- Hard to maintain custom a11y

**אלטרנטיבה:** Bricks Builder (if visual builder is required)
- Much lighter than Elementor
- Better code output
- But still heavier than pure theme approach

### 7.3 Plugins נדרשים

| Plugin | תפקיד | עדיפות |
|--------|--------|--------|
| **RankMath Pro** | SEO: meta, schema, redirects, sitemap | קריטי |
| **WP Rocket** | Caching, critical CSS, lazy load, minify | קריטי |
| **ShortPixel** | Image optimization, WebP/AVIF conversion | קריטי |
| **ACF Pro** | Custom fields for service/area templates | קריטי |
| **Gravity Forms** (or WPForms Lite) | Contact form, lead capture | קריטי |
| **GeneratePress Premium** | Theme premium modules | קריטי |
| **GenerateBlocks Pro** | Layout blocks | גבוה |
| **Safe SVG** | SVG upload support for icons/badges | גבוה |
| **Redirection** | 301 redirect management | גבוה |
| **WP-Optimize** | Database cleanup, scheduled | בינוני |
| **Wordfence** (or Sucuri) | Security, firewall | גבוה |
| **UpdraftPlus** | Automated backups | גבוה |
| **Site Kit by Google** | GA4 + GSC integration | בינוני |
| **Perfmatters** (optional) | Script manager, disable bloat | בינוני |

**סה"כ plugins:** 12-14 (target: under 15)

**Kill List - Plugins להסיר:**
- [ ] Elementor + Elementor Pro
- [ ] כל addons של Elementor
- [ ] Hello Elementor theme
- [ ] כל plugins לא בשימוש
- [ ] Duplicate/competing plugins

### 7.4 אירוח למיאמי

#### המלצה: Cloudways (DigitalOcean Premium) או SiteGround

| אפשרות | Cloudways (DO Premium) | SiteGround GrowBig |
|---------|----------------------|---------------------|
| **מחיר** | ~$14/mo (1GB) | ~$15/mo |
| **שרת** | US-East (NYC/Atlanta) | US-East |
| **PHP** | 8.2+ | 8.2+ |
| **Web Server** | Nginx + Varnish | Nginx + SuperCacher |
| **Object Cache** | Redis included | Memcached |
| **SSL** | Free (Let's Encrypt) | Free |
| **CDN** | Cloudflare free integration | Cloudflare free |
| **Backup** | Auto daily | Auto daily |
| **TTFB** | 200-400ms to Miami | 300-500ms to Miami |
| **Staging** | Yes | Yes |
| **SSH** | Yes | Yes |

#### בחירה: **Cloudways (DigitalOcean Premium)**
- שרת NYC = 1,200 miles from Miami (< 20ms network latency)
- Varnish + Redis = excellent TTFB
- Cloudflare APO = pages served from Miami edge
- Scalable: easy to upgrade if traffic grows
- Full server control (PHP settings, caching, etc.)
- Staging environment for testing

#### Stack מלא:
```
Server:      Cloudways (DigitalOcean Premium, 1GB, NYC)
Web Server:  Nginx
PHP:         8.2+
Cache L1:    Varnish (full page)
Cache L2:    Redis (object cache)
Cache L3:    WP Rocket (WordPress page cache)
CDN:         Cloudflare Pro + APO ($25/mo total)
SSL:         Cloudflare (full strict)
DNS:         Cloudflare
Images:      ShortPixel (auto WebP/AVIF)
Backup:      UpdraftPlus (daily -> cloud storage)
Monitoring:  Cloudflare Analytics + GA4 + GSC
Security:    Cloudflare WAF + Wordfence
```

---

## 8. צ'קליסט לפני השקה

### Phase 1: Infrastructure (שבוע 1)

```
- [ ] Cloudways server provisioned (NYC region)
- [ ] WordPress installed, PHP 8.2+
- [ ] Cloudflare DNS configured, SSL active
- [ ] GeneratePress Pro + GenerateBlocks Pro installed
- [ ] ACF Pro installed, field groups created
- [ ] RankMath Pro configured
- [ ] WP Rocket configured (cache, minify, critical CSS)
- [ ] ShortPixel configured (auto WebP)
- [ ] Security: Wordfence, disable XML-RPC, file editing
- [ ] Staging environment ready
```

### Phase 2: Design System Implementation (שבוע 1-2)

```
- [ ] CSS custom properties (colors, fonts, spacing) defined
- [ ] Typography scale implemented
- [ ] Button components built and tested
- [ ] Card components built
- [ ] FAQ accordion built (accessible)
- [ ] Trust bar component built
- [ ] Contact form component built (accessible)
- [ ] Hero section template built
- [ ] Header + emergency bar built (responsive)
- [ ] Footer built
- [ ] Mobile navigation built (accessible)
- [ ] Sticky phone button built
- [ ] Breadcrumbs built with schema
```

### Phase 3: Page Templates (שבוע 2-3)

```
- [ ] Homepage template built and content populated
- [ ] Service page template built
- [ ] Service area page template built
- [ ] About page built
- [ ] Contact page built
- [ ] FAQ page built
- [ ] Blog post template built
- [ ] Reviews page built
- [ ] Specials page built
- [ ] 404 page built
```

### Phase 4: Content Population (שבוע 3-4)

```
- [ ] All 12 service pages content written and published
- [ ] Top 5 service area pages written and published
- [ ] Homepage all sections populated
- [ ] About page with real content + photos
- [ ] FAQ: 35 questions written
- [ ] Contact page complete
- [ ] Specials page with real offers
- [ ] 3-5 blog posts published
```

### Phase 5: Accessibility Audit (שבוע 4)

```
- [ ] axe-core: 0 violations on all templates
- [ ] Pa11y: 0 errors on all templates
- [ ] Keyboard navigation: tested all pages
- [ ] Screen reader: tested with NVDA on all templates
- [ ] Focus indicators: visible on all interactive elements
- [ ] Skip-to-content: working
- [ ] Color contrast: all combinations verified
- [ ] Touch targets: 44px minimum verified
- [ ] Form accessibility: tested with screen reader
- [ ] ARIA landmarks: validated
- [ ] Heading hierarchy: H1-H6 no skips
- [ ] Alt text: all images reviewed
- [ ] Zoom 200%: no content loss or horizontal scroll
- [ ] html-validate: 0 errors
```

### Phase 6: Performance Audit (שבוע 4)

```
- [ ] Lighthouse: > 90 on all metrics (mobile + desktop)
- [ ] PageSpeed Insights: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] WebPageTest: TTFB < 400ms from Miami
- [ ] Total page weight: < 500KB on homepage
- [ ] HTTP requests: < 30 on homepage
- [ ] No render-blocking resources
- [ ] Images: all WebP/AVIF, lazy loaded below fold
- [ ] Font: variable font loaded, swap working
- [ ] Critical CSS: inlined for each template
- [ ] JS: < 100KB total, all deferred
- [ ] Cache headers: correct on all asset types
- [ ] Brotli compression: active
- [ ] CDN: all assets served from Cloudflare edge
- [ ] Mobile: tested on real device (Android + iOS)
```

### Phase 7: Final QA (שבוע 4-5)

```
- [ ] All internal links work (no 404s)
- [ ] All external links work
- [ ] Phone number: click-to-call works on mobile
- [ ] Email link: opens mail client
- [ ] Forms: submit, validate, success message - all work
- [ ] Contact form: notifications received
- [ ] 301 redirects: all old URLs redirected properly
- [ ] Schema: tested in Google Rich Results Test
- [ ] Sitemap: submitted to Google Search Console
- [ ] robots.txt: correct
- [ ] OG images: correct per page (test with FB debugger)
- [ ] Favicon: all sizes present
- [ ] Analytics: GA4 firing on all pages
- [ ] Search Console: verified
- [ ] Mobile: no horizontal scroll on any page
- [ ] Cross-browser: Chrome, Safari, Firefox, Edge
- [ ] Cross-device: iPhone, Android, iPad, Desktop
- [ ] Print stylesheet: basic print friendly
```

---

## נספח: CSS Custom Properties Template

```css
:root {
  /* Colors - Primary */
  --color-navy: #1B3A5C;
  --color-navy-hover: #15304D;
  --color-navy-active: #0F243D;
  --color-orange: #E8641A;
  --color-orange-hover: #CC5515;
  --color-orange-active: #B34A12;
  --color-white: #FFFFFF;
  
  /* Colors - Secondary */
  --color-steel-blue: #4A7FB5;
  --color-steel-blue-hover: #3A6A9E;
  --color-safety-green: #2E8B57;
  --color-light-gray: #F5F7FA;
  --color-medium-gray: #6B7B8D;
  --color-dark-text: #1A1A2E;
  --color-urgent-red: #D32F2F;
  --color-border: #DDE2E8;
  --color-star: #F5A623;
  
  /* Typography */
  --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
  --font-phone: 'Inter Tight', 'Inter', system-ui, sans-serif;
  
  /* Font Sizes - Mobile (base) */
  --text-display: 2.25rem;
  --text-h1: 1.75rem;
  --text-h2: 1.5rem;
  --text-h3: 1.25rem;
  --text-h4: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-cta: 1rem;
  --text-phone: 1.25rem;
  --text-phone-hero: 1.75rem;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 5rem;
  --space-10: 6rem;
  
  /* Containers */
  --container-sm: 640px;
  --container-md: 960px;
  --container-lg: 1200px;
  --container-xl: 1400px;
  
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-pill: 9999px;
  --border-default: 1px solid var(--color-border);
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.06);
  --shadow-lg: 0 8px 24px rgba(27,58,92,0.12);
  --shadow-cta: 0 4px 12px rgba(0,0,0,0.25);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-default: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* Focus */
  --focus-ring: 3px solid var(--color-navy);
  --focus-offset: 2px;
  
  /* Z-index */
  --z-sticky-phone: 9999;
  --z-header: 9998;
  --z-mobile-menu-overlay: 9997;
  --z-mobile-menu: 9998;
  --z-emergency-bar: 9996;
}

/* Desktop overrides */
@media (min-width: 1024px) {
  :root {
    --text-display: 3.5rem;
    --text-h1: 2.5rem;
    --text-h2: 2rem;
    --text-h3: 1.5rem;
    --text-h4: 1.25rem;
    --text-body: 1.125rem;
    --text-body-sm: 1rem;
    --text-caption: 0.875rem;
    --text-cta: 1.125rem;
    --text-phone: 1.5rem;
    --text-phone-hero: 2.25rem;
  }
}
```

---

## נספח: Accessibility Testing Tools

| כלי | סוג | מה בודק | שימוש |
|-----|------|---------|-------|
| **axe-core** | Automated | WCAG violations, ARIA, contrast | `npx axe <url>` |
| **Pa11y** | Automated | WCAG 2.1 AA compliance | `npx pa11y <url>` |
| **Lighthouse** | Automated | Accessibility score + details | Chrome DevTools / CLI |
| **WAVE** | Semi-auto | Visual overlay of a11y issues | Browser extension |
| **html-validate** | Static | HTML validity, ARIA roles | `npx html-validate` |
| **NVDA** | Manual | Screen reader testing | Windows, free |
| **VoiceOver** | Manual | Screen reader testing | macOS/iOS, built-in |
| **Keyboard only** | Manual | Tab order, focus, traps | Tab through every page |
| **Zoom 200%** | Manual | Content reflow | Browser zoom |
| **Color Oracle** | Manual | Color blindness simulation | Desktop app |

---

## נספח: Performance Testing Tools

| כלי | מה בודק | שימוש |
|-----|---------|-------|
| **PageSpeed Insights** | CWV, LCP, INP, CLS | Google online tool |
| **WebPageTest** | TTFB, waterfall, filmstrip | webpagetest.org (from Miami server) |
| **Lighthouse CLI** | All performance metrics | `npx lighthouse <url>` |
| **Unlighthouse** | Full-site Lighthouse | `npx unlighthouse --site <url>` |
| **Yellow Lab Tools** | CSS/JS complexity, DOM depth | `npx yellowlabtools <url>` |
| **Chrome DevTools** | Network, Coverage, Performance | Built-in |
| **Cloudflare Analytics** | Real user metrics, TTFB | Cloudflare dashboard |
| **CrUX Dashboard** | Real user CWV data | Google Data Studio |
| **BundlePhobia** | JS package sizes | bundlephobia.com |
