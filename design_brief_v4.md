### Brand Content

**logo and name**
Name: Pocket Dragon
Logo: ./requirement/Poquito_Logo_transparent.png

**tagline**
Mahjong on your time, anywhere you are!

**Description**
Practice, play, and compete your way to the top! Enjoy real-time Traditional
Mahjong action at your fingertips

### Client Brief

*Brand color*
Green: #143322 (this is mahjong board green color)
off white: #f9f2e4 (this denotes those pieces)
Rust: #b65a2f (use this for highlighted, Download button)

*font*
Heading - Hero front
Sub heading - Hero front
Numerical - Hero front

*client idea suggestion*
- Heading in all caps
- Use of icons which relates to mahjong pieces (off white color with rust text)
- Minimalist look with elegance and premium feel - it denotes china's ultra rich playing the game

### Sitemap of landingpage
1. Hero + Banner (Left content + Right side image + Download button with google & app store image clickable) use download-apple-app-store.svg & download-google-play-store.svg

2. THE COMPLETE MAHJONG PLAYGROUND
This is like Hero section that shows features of App.
    - _Practice Mode with Bots_: Sharpen your skills with endless practice rounds
    - _Private Tables with Friends_: Round up your crew and deal in
    - _Public Lobby Tables_: The lobby’s buzzing — grab a seat
    - _Ranked Points & Tiers_: Earn points, reach new tiers and unlock exclusive rewards
    - _Smart Matchmaking_: The right table, right away

3. SUbscription Plans
Monthly Plan
Rs [x] /month
Billed monthly. Cancel anytime.
Annual Plan
Rs [x] /year
Save [x]% | Rs [x]/month
(i) button: if tapped >> popup – Annual subscriptions are non-refundable. Upon cancellation,
benefits will remain active until the end of the current subscription term


4. Login Section - this should encourage to download or login into app.
Username
Password
Sign up
Forgot Password

5. FAQ Section - ASk answring questions interactive with fully immersive effect.

_Do I need to create a new account on the website?_
No. Log in with the same username and password as the App

_Can I still play without subscribing?_
Yes! New accounts receive a free 2-week trial with full access to the app. After the trial ends, you can continue playing by subscribing to our monthly or annual plans

_What is Traditional Mahjong?_
Traditional Mahjong is a four-player tile-based game where players build a complete winning
hand (of 14 tiles) by forming specific tile combinations. The traditional format includes variations such as Passport (East Wind Round), Goulash (West Wind Round), and more.

_What happens if a table doesn’t fill up?_
If a player has joined a table and there are one or more seats still open, the host may choose to begin the game with bots

_Will my subscription auto-renew?_
Yes — subscriptions are set to auto-renew by default, but you can turn off auto-renewal at any
time through your account settings

_Can I switch between monthly and annual plans?_
Yes — you can switch from a monthly plan to an annual plan at any time. Your annual
subscription will begin once your current monthly billing period ends

_Can I customize my gameplay experience?_
Yes. In Practice Mode and Create a Table Mode, you can customize game variants, number of
games, and turn timer settings to match your preferred style of play

_How do I report bugs or unfair behavior?_
You may contact us at [to be filled]

_What happens to my progress if I switch devices?_
No problem! Simply log in with the same account credentials on your new device to continue
with your current rank, stats, and progress.

6. Footer with link and policy links for Razor Pay - Privacy Policy & Terms of Use

7. Below the T&C: “(C) 2026 Pocket Dragon/Poquito. All Rights Reserved”


### My idea
- use of floating or flipping mahjong tiles for gamification on certain areas of landing page.

**Hero Section - Idea**
The Interaction Flow
1. The Initial State (Mystery):Page Load.When the user lands on the page, the right side displays a perfect grid of pristine, off-white (#f9f2e4) Mahjong tile backs. They are tightly packed, looking like a fresh, undisturbed wall of tiles in a high-stakes game.

2. The Mosaic Flip (The Reveal):0.5s - 1.5s Delay.After a brief split-second delay, the tiles begin to flip over one by one in a cascading wave (either from left-to-right or spiraling outward from the center). As they flip, their "fronts" don't show standard game suits; instead, each tile holds a sliced segment of the Pocket Dragon logo.
3. The Completed Picture:Static Hold.The wave finishes, and the tiles lock into place, seamlessly forming the complete, large logo against the rich, board-green (#143322) background. Because it’s made of tiles, the logo now looks deeply integrated into the game's universe.
4. The Micro-Interaction (Gamification):User Hover.To keep it interactive, if a user hovers their mouse over the completed logo, the specific tiles under their cursor give a slight 3D tilt or a quick spin, reminding them that this is a dynamic puzzle wall.

_Technical & Design Guidelines for the Developer_
To ensure this doesn't look like a cheap flash game, pass these specific design parameters to whoever is building or configuring the assets:

The Grid Ratio: Don't use too many tiles, or the logo will look like a low-resolution pixel art image. A $4 \times 4$ or $5 \times 5$ grid is the sweet spot. It keeps the individual Mahjong tiles recognizable while keeping the logo crisp.

The Seamless Slicing: The image asset (Poquito_Logo_transparent.png) needs to be mathematically sliced into equal rectangular pieces. Each piece will be set as the background-image for the face of its respective 3D CSS tile.

The 3D Depth: Use CSS perspective and transform-style: preserve-3d. When the tiles flip, they should have a slight shadow that shifts dynamically, giving the illusion that they are physical pieces lifting off a green felt table.

**Interactive FAQ (Sitemap Section 5)**: When a user clicks an FAQ question to expand it, you could use a crisp "clack" animation—reminiscent of two Mahjong tiles hitting each other—to open the answer box.


### UI/UX Design Direction: Immersive Micro-Interactive Pattern

**Layout Philosophy & Visual Grid**
- Implement a fluid, scrolling-driven layout that feels like a live, high-fidelity app preview. The user should feel like they are interacting with the digital Mahjong parlor from the moment they scroll down from the hero banner.
- Balance the deep green (#143322) backdrop with large, spacious layout blocks. Use large, oversized numeric characters (using Hero font) for section identifiers or pricing structures to keep the UI feeling bold, confident, and cutting-edge.

**Interactive Interactions & Gamification Motion**
- **Section 1 (Hero Mosaic):** The right side image space is occupied by the 3D mosaic wall. As the user moves their cursor across the screen, a subtle interactive parallax effect causes the un-flipped or flipped tiles to slightly follow the cursor's orientation angle before resetting. The cascading flip wave reveals the full logo cleanly.
- **Section 2 (Playground Cards):** Feature items are presented as interactive horizontal cards. Scrolling past them triggers a staggered entry transition where each item slides in smoothly from the bottom-right, feeling like a hand of tiles being dealt to a player at a table.
- **Section 5 (Interactive FAQ):** Every individual FAQ container acts like a closed Mahjong tile. Clicking to expand a question reveals the answer underneath via an elegant 3D vertical rotation (flipping open downwards), synchronized with a crisp, tactile mechanical "clack" spring transition.