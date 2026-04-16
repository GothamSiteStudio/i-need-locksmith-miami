# תוכנית עבודה מפורטת - I Need Locksmith Miami
# Website Rebuild - Complete Task List

**תאריך יצירה:** אפריל 2026
**מקורות:** MASTER-PLAN.md, seo-rebuild-plan.md, content-strategy.md, ui-ux-accessibility-performance-plan.md
**לקוח:** Menashe - I Need Locksmith Miami
**טלפון:** (786) 813-0495

---

## סטטוס כללי

| שלב | תיאור | סטטוס |
|-----|-------|-------|
| שלב 0 | תכנון ומסמכי אסטרטגיה | הושלם |
| שלב 1 | הכנה ותשתית | בתהליך |
| שלב 2 | Technical SEO + Design System | לא התחיל |
| שלב 3 | בניית תוכן - עדיפות 1 | בתהליך (homepage בלבד) |
| שלב 4 | בניית תוכן - עדיפות 2 | לא התחיל |
| שלב 5 | Scale - דפי אזור + בלוג | לא התחיל |
| שלב 6 | Growth - תוכן שוטף | לא התחיל |

---

## שלב 0: תכנון (הושלם)

- [x] מחקר מילות מפתח מלא
- [x] ארכיטקטורת אתר ומבנה URL
- [x] מפרט On-Page SEO לכל סוג דף
- [x] מפרט תוכן לכל סוג דף
- [x] מערכת עיצוב (Design System)
- [x] תבניות עמודים (Wireframes)
- [x] אסטרטגיית E-E-A-T
- [x] הנחיות קופירייטינג
- [x] תכנית Schema Markup
- [x] אסטרטגיית קישורים פנימיים
- [x] מחקר אזורי שירות (142 מיקומים ברדיוס 35 מייל)
- [x] סיפור העסק - מנשה, 5+ שנים, מומחה בהחלפת מנעולים ובטיחות

---

## שלב 1: הכנה ותשתית

### 1.1 החלטות עיצוב
- [x] ניתוח צבעי לוגו (Red #C41E24, Navy #1A2744, Sky Blue #7EC8E3, Gold #F0B400, White)
- [ ] **התאמת Design System לצבעי הלוגו** - עדכון הפלטה בתוכנית UI/UX ובקוד
  - צבע ראשי: Red #C41E24 (במקום Navy #1B3A5C)
  - CTA: Red #C41E24 או Gold #F0B400
  - Navy #1A2744 לרקע כהה / header / footer
  - Sky Blue #7EC8E3 לאקסנטים
  - החלטה: תמה כהה (מותאמת ללוגו, כבר נבנתה) או תמה בהירה?
- [ ] סיום בחירת גופנים (Inter כבר נבחר - לאשר)
- [ ] הכנת Favicon מהלוגו (SVG + PNG fallbacks)

### 1.2 תמונות וחומרים מהלקוח
- [ ] תמונות צוות / טכנאי (מנשה) - placeholder מוכן, יעלה בהמשך
- [ ] תמונות רכב שירות - placeholder מוכן
- [ ] תמונות עבודות (before/after) - placeholder מוכן
- [ ] תמונות ציוד - placeholder מוכן
- [ ] מספר רישיון מנעולנות - כרגע #XXXXX, יעודכן
- [ ] טווחי מחירים לשירותים - יעודכן אחרי שדפי שירות מוקמים

### 1.3 ניקוי אתר קיים
- [ ] מחיקת דף "Hide" (דף יתום)
- [ ] מחיקת פוסט בלוג שמזכיר "Boise" (תוכן מועתק)
- [ ] מפת 301 Redirects:
  - /24-7-professional-locksmith-service/ --> /services/emergency-locksmith/
  - /home-lockouts/ --> /services/residential-locksmith/
- [ ] הסרת כפילויות Emergency / 24-7 / Home Lockouts

### 1.4 Hosting & Infrastructure (לפני WordPress)
- [ ] רכישת hosting: Cloudways (US-East, קרוב למיאמי)
- [ ] הגדרת Cloudflare CDN + SSL
- [ ] WordPress installation
- [ ] רכישת Theme: GeneratePress Pro
- [ ] רכישת Builder: GenerateBlocks Pro
- [ ] רכישת SEO Plugin: RankMath Pro
- [ ] רכישת Caching: WP Rocket
- [ ] רכישת Image Optimization: ShortPixel
- [ ] הסרת Elementor לחלוטין

---

## שלב 2: Technical SEO + Design System

### 2.1 WordPress Setup
- [ ] התקנת והגדרת GeneratePress Pro + child theme
- [ ] התקנת GenerateBlocks Pro
- [ ] התקנת RankMath Pro - הגדרות בסיסיות
- [ ] התקנת WP Rocket - הגדרות cache
- [ ] התקנת ShortPixel - auto WebP/AVIF
- [ ] יצירת custom post types (אם נדרש לאזורי שירות)

### 2.2 Design System Implementation
- [ ] CSS Variables - הגדרת כל משתני העיצוב (צבעים, טיפוגרפיה, ריווח)
- [ ] Typography Scale - Mobile-First (כל הגדלים מ-Display עד Caption)
- [ ] Spacing System (8px base, 10 רמות)
- [ ] Container Widths (sm 640px, md 960px, lg 1200px, xl 1400px)
- [ ] Grid System (12-column)
- [ ] Component Library:
  - [ ] Buttons (Primary, Secondary, Ghost, Phone Sticky)
  - [ ] Service Cards
  - [ ] Testimonial Cards
  - [ ] FAQ Accordion
  - [ ] Trust Bar
  - [ ] Contact Form
  - [ ] Breadcrumbs
  - [ ] Pricing Table
  - [ ] Emergency Top Bar
  - [ ] Hero Section (Homepage, Service, Area)
- [ ] Icon System (Lucide Icons, inline SVG)
- [ ] Color States (hover, active, focus for all interactive elements)

### 2.3 Technical SEO Foundation
- [ ] robots.txt
- [ ] XML Sitemap (pages, posts, service-areas)
- [ ] Schema Markup - sitewide LocalBusiness (Locksmith type)
- [ ] Schema Markup - WebSite + SearchAction
- [ ] BreadcrumbList Schema (כל דף פנימי)
- [ ] Canonical tags (self-referencing) על כל דף
- [ ] HTTPS enforcement + redirect HTTP --> HTTPS
- [ ] www/non-www redirect (בחירה אחת)
- [ ] 404 page design (חיפוש + CTA + קישורים)

### 2.4 Mobile Optimization
- [ ] Responsive breakpoints: 375px, 768px, 1024px, 1440px
- [ ] Sticky phone button (mobile) - fixed bottom
- [ ] Touch targets minimum 44x44px
- [ ] Font size minimum 16px body
- [ ] No horizontal scroll on any breakpoint
- [ ] Mobile menu accessible + ARIA

### 2.5 Performance Targets
- [ ] LCP < 2.0 שניות
- [ ] INP < 150ms
- [ ] CLS < 0.05
- [ ] Page weight < 500KB
- [ ] JS budget < 100KB
- [ ] Mobile PageSpeed score 90+
- [ ] Font-display: swap on all fonts
- [ ] Critical CSS inline
- [ ] Lazy loading on all below-fold images
- [ ] Hero image: loading="eager", fetchpriority="high"

### 2.6 Accessibility (WCAG 2.1 AA)
- [ ] Contrast ratios pass AA on all text combinations
- [ ] All images have meaningful alt text
- [ ] Keyboard navigation works on all interactive elements
- [ ] Skip-to-content link
- [ ] ARIA labels on all icons and interactive elements
- [ ] Focus styles visible (3px outline)
- [ ] No content conveyed by color alone
- [ ] Form labels always visible (not placeholder-only)
- [ ] Error messages associated with fields (aria-describedby)

---

## שלב 3: בניית תוכן - עדיפות 1

### 3.1 Homepage (שכתוב)
- [x] HTML structure עם כל 11 בלוקי תוכן
- [x] Hero Section (H1, subtitle, CTAs, trust signals)
- [x] Trust Bar (Licensed, 4.9 Rating, 15-30 Min, 10+ Years)
- [x] Problem-Solution Intro
- [x] Services Grid (4 כרטיסים: Residential, Commercial, Automotive, Emergency)
- [x] Why Choose Us (6 יתרונות)
- [x] How It Works (3 שלבים)
- [x] Social Proof / Testimonials (3 ביקורות)
- [x] Service Areas Grid (15 אזורים)
- [x] Specials Banner (3 הצעות)
- [x] Bottom CTA + Quote Form
- [x] Schema: LocalBusiness + WebSite
- [ ] **עדכון עיצוב להתאמה ללוגו** (אם צריך שינויים מהתמה הנוכחית)
- [ ] עדכון סיפור העסק (מנשה, 5+ שנים, מומחה החלפת מנעולים)
- [ ] עדכון "10+ Years" ל-"5+ Years" בכל המקומות
- [ ] FAQ Mini Section (4-5 שאלות) - **חסר**
- [ ] Schema: FAQPage (עבור FAQ mini)
- [ ] Open Graph meta tags + OG image
- [ ] Structured breadcrumb (Homepage = root)

### 3.2 דפי שירות (12 דפים)
כל דף שירות צריך: 1,200-1,500 מילים, 12 בלוקי תוכן, 4-6 FAQ, 3+ CTAs, Schema (Service + FAQPage + Breadcrumb)

- [ ] **3.2.1 /services/ (דף אינדקס שירותים)**
  - רשימת כל 12 השירותים עם כרטיסים
  - H1: "Professional Locksmith Services in Miami-Dade"
  - Internal links לכל דף שירות

- [ ] **3.2.2 /services/residential-locksmith/**
  - 1,500 מילים
  - תת-שירותים: lockout, lock change, rekey, smart lock, broken key, door reinforcement, garage, window
  - תוכן ייחודי: סוגי מנעולים נפוצים במיאמי (hurricane-rated), טבלת Rekey vs Replace vs Smart Lock
  - 6 FAQ ספציפיים
  - Home Lockout section (H2 בולט, 200-250 מילים)
  - Schema: Service + FAQPage + Breadcrumb

- [ ] **3.2.3 /services/commercial-locksmith/**
  - 1,500 מילים
  - תת-שירותים: business lockout, high-security locks, master key, panic bar, commercial repair, office lock change, file cabinet, restricted keyway
  - "Industries We Serve" section
  - דרישות קוד אש במיאמי-דייד
  - Comparison: Traditional vs Master Key vs Access Control
  - 5 FAQ ספציפיים

- [ ] **3.2.4 /services/automotive-locksmith/**
  - 1,400 מילים
  - תת-שירותים: car lockout, key replacement, transponder, key fob, ignition, broken key, motorcycle, trunk
  - "Car Brands We Service" grid
  - Transponder vs Smart Key vs Traditional - הסבר
  - טבלת טווחי מחירים לפי סוג מפתח
  - 5 FAQ ספציפיים

- [ ] **3.2.5 /services/emergency-locksmith/**
  - 1,200 מילים (איחוד Emergency + 24-7 + Home Lockouts)
  - תת-שירותים: home/car/business lockout, lock change after break-in, emergency repair, emergency rekey
  - Response Time Commitment + מפת אזורי כיסוי
  - "What to Do While Waiting" tips
  - Emergency Process timeline
  - 5 FAQ ספציפיים

- [ ] **3.2.6 /services/lock-installation-replacement/**
  - 1,200 מילים
  - סוגי מנעולים להתקנה: deadbolts, knob locks, lever locks, smart locks, commercial
  - "When to Replace vs Repair" guide
  - מותגים: Schlage, Kwikset, Yale, Medeco, Baldwin

- [ ] **3.2.7 /services/lock-repair/**
  - 1,200 מילים
  - תת-שירותים: jammed, broken, cylinder, door hardware, latch, deadbolt, commercial, emergency
  - "Signs Your Lock Needs Repair" checklist
  - "Repair vs Replace" decision guide
  - 4 FAQ

- [ ] **3.2.8 /services/rekeying/**
  - 1,200 מילים
  - תת-שירותים: residential, commercial, master rekey, after moving, lost keys, after termination, keyed alike
  - What is rekeying - הסבר
  - Cost comparison: Rekey ($15-30) vs Replace ($50-200)
  - "When Should You Rekey?" scenarios
  - 4 FAQ

- [ ] **3.2.9 /services/key-replacement/**
  - 1,200 מילים
  - תת-שירותים: house key, car key, office key, transponder, key fob, mailbox, padlock
  - טבלת מחירים לפי סוג מפתח
  - "Types of Keys" visual guide
  - "We Cut Keys On-Site" emphasis
  - 4 FAQ

- [ ] **3.2.10 /services/smart-locks/ (חדש)**
  - 1,300 מילים
  - מותגים: August, Yale, Schlage, Kwikset
  - Comparison: WiFi vs Bluetooth vs Z-Wave vs Zigbee
  - Compatible with existing doors
  - Benefits for Airbnb/rental properties
  - 4 FAQ

- [ ] **3.2.11 /services/safe-services/**
  - 1,200 מילים
  - תת-שירותים: opening, combination change, repair, installation, moving, gun safe, commercial, digital
  - סוגי כספות: fire, burglary, gun, floor, wall
  - Trust emphasis: bonded, insured, confidential
  - 4 FAQ

- [ ] **3.2.12 /services/access-control/**
  - 1,300 מילים
  - תת-שירותים: card reader, keypad, biometric, cloud-based, intercom, electric strikes, multi-tenant, integration
  - Comparison table: Keypad vs Card vs Biometric vs Phone
  - Brands: HID, Kisi, Openpath, Salto, Honeywell
  - ROI section
  - 4 FAQ

- [ ] **3.2.13 /services/master-key-systems/ (חדש)**
  - 1,200 מילים
  - Design & installation
  - How master key systems work
  - Benefits for businesses, HOAs, property managers
  - 4 FAQ

### 3.3 דפי אזור שירות - עדיפות 1 (5 דפים מרכזיים)
כל דף: 800-1,000 מילים, 10 בלוקי תוכן, 3-4 FAQ, Google Maps embed, Schema (Service+Area + Breadcrumb)

- [ ] **3.3.1 /service-areas/miami/**
- [ ] **3.3.2 /service-areas/miami-beach/**
- [ ] **3.3.3 /service-areas/hialeah/**
- [ ] **3.3.4 /service-areas/doral/**
- [ ] **3.3.5 /service-areas/coral-gables/**

### 3.4 דפי תמיכה
- [ ] **3.4.1 /about/**
  - 800-1,000 מילים
  - סיפור מנשה: 5+ שנות ניסיון, מומחה בהחלפת מנעולים ובטיחות הבית, ביטחון הלקוח מעל הכל
  - Mission & Values (Reliability, Transparency, Community, Expertise)
  - Meet the Team (ביוגרפיה + placeholder לתמונה)
  - Credentials (רישיון, ביטוח)
  - By the Numbers (5+ years, 4.9 rating, 50+ areas, 24/7)
  - Community (Free Child Rescue, Military/Senior discounts)
  - Schema: Organization

- [ ] **3.4.2 /contact/**
  - 300-400 מילים
  - Contact Info Box (phone, email, hours)
  - Contact Form (name, phone, email, service type, message)
  - Response commitment ("within 15 minutes")
  - Google Maps embed (Miami-Dade coverage)
  - Service Areas quick list + links
  - Emergency CTA
  - Schema: LocalBusiness (enhanced)

- [ ] **3.4.3 /faq/**
  - 2,500-3,000 מילים (35 שאלות)
  - 8 קטגוריות:
    1. General & Pricing (5 שאלות)
    2. Residential (5 שאלות)
    3. Commercial (4 שאלות)
    4. Automotive (5 שאלות)
    5. Emergency (5 שאלות)
    6. Lock Types & Security (4 שאלות)
    7. Smart Locks & Technology (3 שאלות)
    8. Service Areas & Availability (4 שאלות)
  - Accordion UI עם FAQ Schema
  - Internal links לדפי שירות בתוך תשובות
  - CTA אחרי כל קטגוריה

- [ ] **3.4.4 /reviews/**
  - 400-500 מילים + embedded reviews
  - Stats Bar (rating, count, years)
  - 6-10 ביקורות Google מובחרות
  - Reviews by Service category
  - Review Platforms links (Google, Yelp, Facebook)
  - "Leave a Review" CTA
  - Schema: AggregateRating

- [ ] **3.4.5 /specials/**
  - 600-800 מילים
  - Free Child Rescue
  - 15% Off First Installation
  - Military Discount (10%)
  - Senior Discount (10%)
  - Seasonal Offer (hurricane season prep)
  - How to Redeem
  - CTA

- [ ] **3.4.6 /services/ (אינדקס שירותים)**
  - ראה 3.2.1 למעלה

- [ ] **3.4.7 /service-areas/ (אינדקס אזורים)**
  - רשימת כל אזורי השירות מקובצים לפי אזור
  - מפה כללית של Miami-Dade + Broward
  - Links לכל דפי אזור

### 3.5 דף 404
- [ ] עיצוב דף 404 עם:
  - הודעה ידידותית
  - חיפוש
  - קישורים לדפים מרכזיים
  - CTA טלפון

---

## שלב 4: בניית תוכן - עדיפות 2

### 4.1 דפי אזור נוספים - Priority 2 (10 דפים)
כל דף: 800-1,000 מילים ייחודיים, Google Maps, FAQ מקומי

- [ ] /service-areas/brickell/
- [ ] /service-areas/wynwood/
- [ ] /service-areas/kendall/
- [ ] /service-areas/aventura/
- [ ] /service-areas/homestead/
- [ ] /service-areas/coconut-grove/
- [ ] /service-areas/key-biscayne/
- [ ] /service-areas/north-miami/
- [ ] /service-areas/south-miami/
- [ ] /service-areas/little-havana/

### 4.2 פוסטי בלוג ראשונים (5 פוסטים)
כל פוסט: 1,500+ מילים, ToC, Author Box, FAQ section, 2-3 תמונות, Internal links

- [ ] **"How Much Does a Locksmith Cost in Miami? (2026 Price Guide)"**
  - KW: locksmith cost miami
  - Featured Snippet bait: pricing table
- [ ] **"Locked Out of Your House in Miami? Here's What to Do"**
  - KW: locked out of house miami
  - Emergency guide + CTA
- [ ] **"Rekey vs. Change Locks: Which Is Right for You?"**
  - KW: rekey vs change locks
  - Comparison table + decision guide
- [ ] **"7 Signs You Need to Replace Your Door Locks"**
  - KW: when to replace locks
  - Checklist format
- [ ] **"The Complete Guide to Smart Locks for Miami Homes"**
  - KW: smart locks miami
  - Product comparisons, Miami-specific (humidity, saltair)

### 4.3 Schema per-page
- [ ] Service Schema על כל 12 דפי שירות
- [ ] FAQPage Schema על כל דף עם FAQ
- [ ] Article Schema על כל פוסט בלוג
- [ ] Breadcrumb Schema על כל דף פנימי
- [ ] AggregateRating Schema בדף Reviews

### 4.4 Internal Linking Implementation
- [ ] קישורים מדפי שירות לדפי אזור קשורים (2-3 לכל דף)
- [ ] קישורים מדפי שירות לשירותים קשורים (2-3 לכל דף)
- [ ] קישורים מדפי אזור לדפי שירות (3-4 לכל דף)
- [ ] קישורים מדפי אזור לאזורים סמוכים (2 לכל דף)
- [ ] קישורים מבלוג לדפי שירות + אזור (2-3 לכל פוסט)
- [ ] Footer links: כל השירותים + 10 אזורים מרכזיים
- [ ] Sidebar (Blog): Recent posts, service categories, CTA

### 4.5 Image Optimization
- [ ] המרה ל-WebP + AVIF fallback
- [ ] srcset עם 3 גדלים (400w, 800w, 1200w)
- [ ] Lazy loading על כל תמונה מתחת ל-fold
- [ ] Alt text תיאורי + keyword כשרלוונטי
- [ ] Width + Height attributes על כל img (מונע CLS)
- [ ] Max file size: 200KB per image
- [ ] Compression: 80% WebP, 70% AVIF

---

## שלב 5: Scale (חודשים 2-3)

### 5.1 דפי אזור - Tier 1 Remaining (~15 דפים)
- [ ] /service-areas/downtown-miami/
- [ ] /service-areas/midtown-miami/
- [ ] /service-areas/edgewater/
- [ ] /service-areas/design-district/
- [ ] /service-areas/pinecrest/
- [ ] /service-areas/palmetto-bay/
- [ ] /service-areas/cutler-bay/
- [ ] /service-areas/miami-gardens/
- [ ] /service-areas/miami-lakes/
- [ ] /service-areas/sunny-isles-beach/
- [ ] /service-areas/hallandale-beach/
- [ ] /service-areas/surfside/
- [ ] /service-areas/bal-harbour/
- [ ] /service-areas/sweetwater/
- [ ] /service-areas/miami-springs/

### 5.2 דפי אזור - Tier 2 (~15 דפים)
- [ ] /service-areas/fontainebleau/
- [ ] /service-areas/westchester/
- [ ] /service-areas/kendale-lakes/
- [ ] /service-areas/the-hammocks/
- [ ] /service-areas/country-walk/
- [ ] /service-areas/hollywood/
- [ ] /service-areas/miramar/
- [ ] /service-areas/pembroke-pines/
- [ ] /service-areas/davie/
- [ ] /service-areas/fort-lauderdale/
- [ ] /service-areas/weston/
- [ ] /service-areas/plantation/
- [ ] /service-areas/cooper-city/
- [ ] /service-areas/north-miami-beach/
- [ ] /service-areas/opa-locka/

### 5.3 פוסטי בלוג - חודש 2 (5 פוסטים)
- [ ] "Car Key Replacement Cost in Miami: What to Expect"
- [ ] "How to Choose the Right Access Control System for Your Business"
- [ ] "Emergency Locksmith Miami: What to Know Before You Call"
- [ ] "Top 10 Home Security Tips for Miami Residents"
- [ ] "What Is a Master Key System and Does Your Business Need One?"

### 5.4 Google Business Profile Optimization
- [ ] קטגוריה ראשית: Locksmith
- [ ] קטגוריות משניות: Emergency Locksmith Service, Security System Installer
- [ ] תיאור עסק (750 תווים) עם מילות מפתח + אזורים + USPs
- [ ] שירותים - כל שירות עם תיאור
- [ ] מוצרים - שירותים כ"מוצרים" עם מחיר ותמונה
- [ ] תמונות: 20+ (צוות, רכבים, ציוד, עבודות, לוגו, cover)
- [ ] Q&A: 10-15 שאלות ותשובות proactively
- [ ] Google Posts: תבנית לפוסט שבועי
- [ ] Messaging: הפעלת הודעות
- [ ] Booking link לטופס

### 5.5 NAP Citations (15 ספריות מרכזיות)
**עדיפות 1:**
- [ ] Google Business Profile (קיים - לעדכן)
- [ ] Yelp
- [ ] Facebook Business
- [ ] Apple Maps / Apple Business Connect
- [ ] Bing Places
- [ ] BBB

**עדיפות 2:**
- [ ] YellowPages.com
- [ ] Angi (Angie's List)
- [ ] HomeAdvisor
- [ ] Thumbtack
- [ ] Nextdoor Business
- [ ] Foursquare
- [ ] MapQuest

**עדיפות 3:**
- [ ] ALOA (אם חבר)
- [ ] Miami-Dade Chamber of Commerce

### 5.6 Review Generation
- [ ] יצירת קישור ישיר לביקורת Google
- [ ] תבנית SMS/email לשליחה אחרי שירות
- [ ] מענה לכל ביקורת קיימת (חיובית ושלילית) תוך 24 שעות
- [ ] יעד: 5+ ביקורות חדשות בחודש

---

## שלב 6: Growth (חודשים 4-6+)

### 6.1 דפי אזור - Tier 3 (שאר המיקומים)
- [ ] ~20+ דפי אזור נוספים מתוך רשימת 142 המיקומים
- [ ] שכונות Miami: Flagami, Allapattah, Liberty City, Little Haiti, Upper East Side...
- [ ] CDPs: Tamiami, Country Club, Richmond West, Three Lakes, Lakes by the Bay...
- [ ] Broward: Sunrise, Lauderhill, Oakland Park, Tamarac, Coral Springs...

### 6.2 פוסטי בלוג - חודשים 3-6 (15 פוסטים)
- [ ] "Moving to Miami? A Complete Lock Security Checklist"
- [ ] "Transponder Keys Explained: Programming, Cost & Replacement"
- [ ] "Commercial Locksmith Services: What Every Miami Business Owner Should Know"
- [ ] "Safe Buying Guide: How to Choose the Right Safe"
- [ ] "Locksmith Scams in Miami: How to Avoid Them"
- [ ] "Keyless Entry Systems: Pros, Cons & Best Options for 2026"
- [ ] "How Long Does a Locksmith Take? Response Times Explained"
- [ ] "Can a Locksmith Make a Car Key Without the Original?"
- [ ] "Door Lock Types Explained: Which Is Best for Your Home?"
- [ ] "Why You Should Never Use a DIY Lock Pick Kit"
- [ ] "Hurricane Season in Miami: How to Secure Your Home and Business"
- [ ] "Airbnb & Rental Property Lock Solutions in Miami"
- [ ] "What to Do After a Break-In: Miami Homeowner's Guide"
- [ ] "The Difference Between Deadbolts: Single vs Double Cylinder"
- [ ] "Best High-Security Locks for Miami Businesses in 2026"

### 6.3 תחזוקה שוטפת
- [ ] עדכון תוכן רבעוני (refresh dates, prices, stats)
- [ ] Google Posts שבועי ב-GBP
- [ ] Monthly performance review (GSC, GA4, rankings)
- [ ] Seasonal content (hurricane season, holidays)
- [ ] תוכן חדש: 2-4 פוסטי בלוג בחודש

---

## שלב 7: בדיקות לפני השקה (Pre-Launch Checklist)

### 7.1 SEO Checks
- [ ] אין שגיאות 404 פנימיות
- [ ] אין duplicate title tags
- [ ] אין duplicate meta descriptions
- [ ] אין duplicate H1s
- [ ] Canonical tags על כל דף
- [ ] אין orphan pages
- [ ] אין redirect chains
- [ ] Sitemap תקין + submitted ל-GSC + Bing
- [ ] robots.txt תקין

### 7.2 Performance Checks
- [ ] Mobile PageSpeed score 90+
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] אין mixed content (HTTP on HTTPS)

### 7.3 Accessibility Checks
- [ ] Run axe-core on all page types
- [ ] Run Pa11y on all page types
- [ ] Keyboard navigation test
- [ ] Screen reader test (basic)
- [ ] Color contrast check all combinations

### 7.4 Content Checks
- [ ] Spell check all pages
- [ ] Phone number correct on all pages: (786) 813-0495
- [ ] Email correct on all pages
- [ ] NAP consistent across site
- [ ] All internal links working
- [ ] All external links working (blc scan)
- [ ] All images loading + have alt text

### 7.5 Legal
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] Copyright 2026
- [ ] License number displayed (when available)

---

## מה צריך מהלקוח (Menashe) - Checklist

### חובה (לפני השקה):
- [ ] מספר רישיון מנעולנות Florida - **כרגע placeholder**
- [ ] כתובת עסק - SAB או כתובת פיזית?
- [ ] תמונות אמיתיות (15-20 מינימום) - **יעלו בהמשך**
- [ ] טווחי מחירים לשירותים - **יעודכנו אחרי הקמת דפי שירות**
- [x] סיפור העסק - מנשה, 5+ שנים, מומחה החלפת מנעולים, ביטחון הלקוח מעל הכל
- [ ] ביקורות Google - אישור להשתמש בציטוטים
- [ ] מותגי מנעולים שעובדים איתם
- [ ] זמן תגובה ממוצע (15 דק'? 30 דק'?)
- [x] אזורי שירות - כל מיאמי + רדיוס 35 מייל (142 מיקומים)
- [ ] אחריות/Guarantee - האם מציעים?

### רצוי מאוד:
- [ ] מספר עבודות שבוצעו (או הערכה)
- [ ] חברות בארגונים (ALOA, BBB, Chamber)
- [ ] מותגי רכב שמשרתים (לדף Automotive)
- [ ] סוגי כספות שעובדים עליהן
- [ ] מערכות access control שמתקינים

---

## סדר עדיפויות - מה עושים עכשיו?

**המצב הנוכחי:** Homepage (static HTML) בנוי עם תמה כהה. כל שאר הדפים חסרים.

**הצעד הבא:**
1. לסיים החלטת עיצוב (תמה כהה כבר מותאמת ללוגו - להמשיך?)
2. לבנות את 12 דפי השירות (ההשפעה הגבוהה ביותר על SEO)
3. לבנות 5 דפי אזור מרכזיים
4. לבנות דפי תמיכה (About, Contact, FAQ, Reviews)

---

*מסמך זה נוצר מתוך ניתוח של כל מסמכי התכנון: MASTER-PLAN.md, seo-rebuild-plan.md, content-strategy.md, ui-ux-accessibility-performance-plan.md*
