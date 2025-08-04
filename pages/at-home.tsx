# NEW CHAT PROMPT: "At Home" Page for Phillip Collins

## CONTEXT
I need to build the "At Home" page for Phillip Collins's leadership coaching website. This page humanises the work through personal life content (cooking, Gracie the English Pointer, business fascination) while maintaining professional authority.

## COMPLETED FOUNDATION
- **Homepage:** Aggressive grid-based design with hero section, bubble images, navy/cream/tangerine color stripes, dense content packing ✅
- **This is Personal:** Personal story and philosophy page with breakthrough narrative approach ✅
- **At Work:** Professional coaching page with frameworks and methodology ✅
- **Social Impact:** Community leadership and five-domain philosophy ✅
- **Design System:** Established grid architecture, typography hierarchy, component library ✅
- **Header Component:** Complete with avatar integration and contrarian navigation ✅
- **Brand Voice:** Thoughtful, observant sage-caregiver archetype using UK English ✅

## REFERENCE FILES TO STUDY
**CRITICAL: Review these completed pages to understand our design approach:**
- **`pages/index.tsx`** - **ESSENTIAL:** Study the HERO SECTION structure with large headline, quote box, bubble image, and CTA buttons - COPY THIS PATTERN EXACTLY
- **`pages/this-is-personal.tsx`** - Reference the section structure, typography hierarchy, responsive grids, and authentic voice integration
- **`pages/at-work.tsx`** - Study professional framework presentation and client testimonial integration
- **`pages/social-impact.tsx`** - Reference community impact approach and Call & Response pattern

## HERO SECTION REQUIREMENTS (COPY INDEX.TSX PATTERN)
**CRITICAL: The hero section must model the index.tsx homepage hero exactly:**

**Hero Structure (COPY THIS FROM INDEX.TSX):**
1. **Large Headline:** Use `font-['Waiting_for_the_Sunrise']` with tangerine emphasis word
2. **Quote/Text Box:** Left-aligned box with border-l-8 and cream background
3. **Bubble Image:** Right-aligned square bubble image
4. **CTA Buttons:** Two buttons (primary + secondary) below content
5. **Grid Layout:** md:grid-cols-2 for text + image layout

**Hero Content for At Home:**
- **Headline:** "Where leadership lives too" or "Leadership in the ordinary" 
- **Quote Box Content:** Something about leadership not being performance but a way of showing up everywhere
- **Bubble Image:** `/images/bubble-home-1.png` (cooking, Gracie, or personal values theme)
- **CTA Buttons:** "Explore the work" (primary) + "This is personal" (secondary)

## PAGE BRIEF
**Purpose:** Humanise professional authority through personal life while demonstrating leadership values lived authentically

**Core Content:**
1. **Hero Section:** (Index.tsx pattern) "Where leadership lives too" with CTA buttons
2. **Cooking as Leadership Practice:** How cooking reflects coaching principles (presence, timing, care)
3. **Gracie's Lessons:** English Pointer as teacher of presence, sensitivity, attention
4. **Business Fascination:** Lifelong interest in business systems and how it informs coaching
5. **Values in Living:** How five core values show up in ordinary moments
6. **Integration Philosophy:** Where it all connects back to coaching work
7. **Call & Response:** "What if I trusted my own judgment?" + Country Head Engineering testimonial
8. **Personal Quote:** Closing reflection on leadership in ordinary moments

**Design Requirements:**
- **COPY INDEX HERO STRUCTURE** - Same layout, spacing, CTA button pattern
- Continue aggressive grid approach from previous pages
- Integrate 2-3 bubble images strategically 
- Use navy/cream/tangerine color stripe rhythm
- Dense content packing, no unnecessary white space
- UK English throughout
- Maintain breakthrough visual confidence

## KEY MATERIALS TO REFERENCE
**Technical & Brand Foundation Document Contains:**
- Complete design system specifications
- Grid architecture patterns and examples
- Color palette strategy (4-color system: White, Navy #1A365D, Cream #F8F5EB, Tangerine #F96E1E)
- Typography hierarchy and font usage (Waiting for the Sunrise headlines, Geist body text)
- Component specifications and spacing guidelines
- Tailwind class safety guide and proper ordering
- EQ-i bubble image system specifications
- Anti-template strategy principles

**Content Elements from Project Knowledge:**
- Cooking as leadership practice (presence meets creativity, attention to subtle signals)
- Gracie the English Pointer (alert, sensitive, fully herself - lessons in presence)
- Business fascination (systems thinking, pattern recognition, complexity)
- Values in ordinary moments (wisdom, integrity, self-respect, development, freedom)
- Call & Response: Personal empowerment testimonial
- Integration philosophy connecting personal life to coaching work

## CRITICAL ESLint COMPLIANCE
**HTML Entity Requirements (MUST ESCAPE):**
- All apostrophes: `don't` → `don&apos;t`, `I've` → `I&apos;ve`
- All quotes: `"word"` → `&ldquo;word&rdquo;`, `'word'` → `&lsquo;word&rsquo;`
- NO em dashes (AI tell): Replace `—` with `.` or `,` or remove entirely

**Tailwind Class Order (CRITICAL - CAUSES BUILD ERRORS):**
- **Correct order:** `[layout] [spacing] [sizing] [colors] [typography] [effects] [responsive]`
- **Example:** `flex items-center justify-center rounded-lg bg-white p-6 text-lg font-bold text-gray-700 hover:bg-gray-100 md:text-xl`
- **Typography order:** `text-lg leading-relaxed text-gray-700` (size, spacing, color)
- **Wrong order causes build failure:** Classes must be in exact order above

**Image Requirements (CAUSES BUILD ERRORS):**
- **NEVER use `<img>` elements** - Always import and use Next.js `<Image>` component
- **Must import:** `import Image from 'next/image'`
- **Required attributes:** `width` and `height` must be specified
- **Example:** `<Image src="/images/bubble.png" alt="Description" width={200} height={200} className="size-full object-contain" />`

**Tailwind Shorthand (CAUSES BUILD ERRORS):**
- **Use shorthand classes:** `size-full` instead of `w-full h-full`
- **Use shorthand classes:** `size-10` instead of `h-10 w-10` 
- **Use shorthand classes:** `size-12` instead of `h-12 w-12`
- **ESLint will fail build if using individual width/height classes**

## CONTENT APPROACH
**Humanising Without Undermining:**
- **Cooking:** Not hobby but practice of care, attention, timing
- **Gracie:** Not pet content but lessons in presence and sensitivity
- **Business Systems:** Not separate interest but foundation for coaching insight
- **Values Integration:** How principles show up in ordinary moments
- **Authenticity:** Leadership lived consistently across all contexts

**Personal Content That Builds Authority:**
- **Cooking parallels to coaching:** Both require presence, timing, trust in process
- **Gracie as teacher:** Alert, sensitive, fully herself - models authentic being
- **Business fascination:** Systems thinking informs individual coaching approach
- **Ordinary moments:** Where leadership actually develops and is practiced

## HERO SECTION SPECIFICATION (COPY INDEX.TSX)
**Must Include All These Elements:**

```tsx
{/* HERO SECTION - COPY INDEX PATTERN */}
<section className="relative w-full min-h-screen bg-white pt-20">
  <div className="flex min-h-[calc(100vh-5rem)] items-center">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="max-w-4xl space-y-8">
          <h1 className="font-['Waiting_for_the_Sunrise'] text-5xl font-bold leading-tight text-[#1A365D] md:text-6xl lg:text-7xl">
            Where leadership<br />
            <span className="font-light italic text-[#F96E1E]">lives too</span>.
          </h1>
        </div>
        
        {/* Quote + Bubble Image Grid */}
        <div className="w-full mt-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border-l-8 border-[#F96E1E] bg-[#F8F5EB] p-6 flex items-center min-h-[200px] md:min-h-[250px]">
                <p className="text-xl font-medium leading-relaxed text-[#1A365D] md:text-2xl">
                  Leadership isn&apos;t something we switch on and off.<br />
                  It lives in the <strong>kitchen</strong>.<br />
                  In <strong>conversation</strong>.<br />
                  In the <strong>ordinary</strong>.
                </p>
              </div>
              
              <div className="rounded-lg bg-white p-6 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                <Image
                  src="/images/bubble-home-1.png"
                  alt="Leadership in ordinary moments"
                  width={300}
                  height={300}
                  className="size-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
          <Link
            href="/the-work"
            className="rounded-lg bg-[#F96E1E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#E55A1A]"
          >
            Explore the work
          </Link>
          <Link
            href="/this-is-personal"
            className="rounded-lg border-2 border-[#1A365D] px-8 py-4 text-lg font-semibold text-[#1A365D] transition-colors hover:bg-[#1A365D] hover:text-white"
          >
            This is personal
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
```

## CALL & RESPONSE INTEGRATION
**For At Home Page:**
- **The Call:** "What if I trusted my own judgment?" or "I keep looking for validation from others"
- **Social Proof:** "I feel I have come a long way since we started to speak and feel far more self-empowered thanks to your intervention for which I am grateful." - Country Head, Engineering

## CONTENT SECTIONS (After Hero)
1. **Cooking as Leadership Practice** (Cream stripe)
2. **Lessons from Gracie** (White stripe) 
3. **Business Systems Fascination** (Navy stripe)
4. **Values in Living** (Cream stripe - 5 values grid)
5. **Where It All Connects** (White stripe)
6. **Call & Response** (Navy stripe - Personal empowerment)
7. **Personal Quote** (Tangerine stripe)
8. **Closing CTA** (Navy stripe)

## SPECIFIC CONTENT REQUIREMENTS

**Cooking Content:**
- "Cooking is one of the ways I express care. Presence meets creativity. Flavour meets intuition."
- "In the kitchen, I practice the same principles I bring to coaching: attention to subtle signals, respect for timing, and trust in the process."
- "Whether adjusting seasoning or creating space for insight, it's about being present to what's emerging."

**Gracie Content:**
- "Our English Pointer, Gracie, is alert, sensitive, and fully herself. She reminds me how to pay attention and when to rest."
- "Complete attention without agenda, sensitivity without overwhelm, wisdom to know when stillness serves better than action."
- "The best leadership often looks like quiet watchfulness, followed by precise, purposeful movement when it matters most."

**Business Systems Content:**
- "I've always been drawn to the psychology of business. Structure, rhythm, complexity."
- "The same curiosity that led me into turnaround leadership informs individual coaching. Systems thinking. Pattern recognition."
- "Whether diagnosing why a team isn't functioning or why a leader feels stuck, I'm looking for underlying dynamics that create surface symptoms."

**Values in Living (5 Grid):**
- **Wisdom:** Choosing ingredients mindfully, learning from every business pattern
- **Integrity:** Cooking with care when no one's watching, being honest about what I don't know
- **Self-respect:** Setting boundaries around rest, honouring sensitivity as strength  
- **Personal Development:** Every meal is practice, every business challenge teaches, every moment with Gracie reveals
- **Freedom:** To cook what nourishes, to rest when needed, to question what others accept

## BUBBLE IMAGE EXAMPLE (COPY THIS PATTERN):
```tsx
import Image from 'next/image'

{/* Bubble image container - CORRECT pattern */}
<div className="aspect-square flex items-center justify-center rounded-lg bg-[#1A365D] p-4">
  <Image
    src="/images/bubble-home-2.png"
    alt="Cooking and leadership practice"
    width={200}
    height={200}
    className="size-full object-contain"
  />
</div>
```

## COMMON ESLint ERRORS TO AVOID:
❌ **WRONG - CAUSES BUILD FAILURE:**
```tsx
<img src="/images/photo.png" className="w-full h-full" />
className="bg-white text-lg p-6 rounded-lg"
className="h-10 w-10"
```

✅ **CORRECT - BUILDS SUCCESSFULLY:**
```tsx
<Image src="/images/photo.png" width={200} height={200} className="size-full" />
className="rounded-lg bg-white p-6 text-lg"
className="size-10"
```

## URL STRUCTURE
File should be named: **`pages/at-home.tsx`** (matching navigation and internal links)

## FINAL BUILD SUCCESS CHECKLIST
Before submitting code, verify:
- [ ] All apostrophes escaped (`&apos;`)
- [ ] All quotes escaped (`&ldquo;` `&rdquo;` `&lsquo;` `&rsquo;`)
- [ ] No em dashes (`—`) anywhere
- [ ] Tailwind classes in correct order (layout → spacing → sizing → colors → typography)
- [ ] Using `size-full` not `w-full h-full`
- [ ] Using `<Image>` not `<img>` with width/height attributes
- [ ] Import statement: `import Image from 'next/image'`
- [ ] UK English spelling throughout (colour, centre, behaviour, whilst)
- [ ] **HERO SECTION matches index.tsx pattern** with headline, quote box, bubble image, CTA buttons

## SUCCESS CRITERIA
- **Hero section mirrors index.tsx structure** with same layout and CTA pattern
- Page humanises authority without undermining credibility
- Personal content demonstrates leadership values lived authentically
- Call & Response creates connection around personal empowerment
- Maintains aggressive grid visual confidence from established pages
- Integration shows how personal life informs coaching wisdom
- UK English throughout all content
- Zero ESLint errors on build (proper entity escaping, class order, Image components)

## CONTRARIAN POSITIONING
- **Not lifestyle content** - this is leadership demonstration through personal life
- **Not separate from work** - this shows integration and authenticity
- **Not performance** - this is genuine lived experience
- **Not hobby sharing** - this validates the whole-person leadership approach

**Following these requirements prevents build failures and ensures the hero section maintains visual consistency with the established homepage pattern.**
