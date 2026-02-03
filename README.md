# 💕 Valentine's Week Love Website for Radha

A beautiful, romantic, and cinematic web journey created with pure HTML, CSS, and JavaScript. This website unlocks day by day from February 7-14, 2025, revealing heartfelt messages for each special day of Valentine's week.

## 🎁 Features

- **Password Protection**: Entire website is password-protected (only for Radha!)
- **Time-Locked Days**: Each day unlocks automatically at 12:00 AM IST
- **Real-Time Countdown**: Live countdown timers for locked days
- **Beautiful Animations**: Each day features unique romantic animations
- **Mobile-First Design**: Fully responsive and touch-friendly
- **Cinematic Experience**: Elegant typography, smooth transitions, and emotional design

## 📁 Files Included

```
index.html           → Main landing page with 8 gift boxes
RoseDay.html         → February 7th - Rose Day
ProposeDay.html      → February 8th - Propose Day
ChocolateDay.html    → February 9th - Chocolate Day
TeddyDay.html        → February 10th - Teddy Day
PromiseDay.html      → February 11th - Promise Day
HugDay.html          → February 12th - Hug Day
KissDay.html         → February 13th - Kiss Day
ValentinesDay.html   → February 14th - Valentine's Day (Grand Finale)
style.css            → All styling and animations
script.js            → Password system, timers, unlock logic
README.md            → This file
```

## 🔐 Password Setup

**Default Password**: `radha` (lowercase)

### To Change the Password:

1. Open `script.js`
2. Find line 2: `const CORRECT_PASSWORD = "radha";`
3. Change `"radha"` to your desired password
4. Save the file

## ⏰ How the Time-Lock System Works

- Each day unlocks at **12:00 AM IST** (Indian Standard Time)
- The website automatically detects your timezone and converts to IST
- Countdown timers update in real-time (hours : minutes : seconds)
- Locked days show 🔒 icon and "Patience, my love... it opens at midnight ❤️"
- Unlocked days show 🔓 icon and are clickable

### Unlock Schedule:
- **February 7, 2025** → Rose Day unlocks
- **February 8, 2025** → Propose Day unlocks
- **February 9, 2025** → Chocolate Day unlocks
- **February 10, 2025** → Teddy Day unlocks
- **February 11, 2025** → Promise Day unlocks
- **February 12, 2025** → Hug Day unlocks
- **February 13, 2025** → Kiss Day unlocks
- **February 14, 2025** → Valentine's Day unlocks (Final Reveal)

## 🎨 Design Features

### Color Palette
- **Nude Pink**: #FFC5C5
- **Lavender**: #E6D5F5
- **Emerald Green**: #7EC8A3
- **Deep Pink**: #FF6B9D
- **Cream**: #FFF8F0

### Typography
- **Display Font**: Playfair Display (elegant serif for titles)
- **Body Font**: Cormorant Garamond (romantic italic for messages)
- **UI Font**: Quicksand (clean sans-serif for buttons and labels)

### Animations by Day
- 🌹 **Rose Day**: Falling rose petals
- 💖 **Propose Day**: Floating hearts
- 🍫 **Chocolate Day**: Falling chocolates
- 🧸 **Teddy Day**: Bouncing teddy bears
- 💍 **Promise Day**: Sparkles and promise rings
- 🤗 **Hug Day**: Hug emojis and hearts
- 💋 **Kiss Day**: Kiss emojis and romantic symbols
- 💝 **Valentine's Day**: Fireworks + hearts (grand finale)

## 🚀 How to Use

### Option 1: Local Testing (Simple)
1. Download all files to a folder
2. Open `index.html` in any web browser
3. Enter password: `radha`
4. Explore the website!

### Option 2: Host Online (Recommended for Radha)
1. Upload all files to a web hosting service:
   - **Free Options**: GitHub Pages, Netlify, Vercel, Firebase Hosting
   - **Paid Options**: Any web hosting provider
2. Share the URL with Radha
3. She can visit from any device!

### For GitHub Pages (Free Hosting):
1. Create a GitHub account
2. Create a new repository (e.g., `valentine-for-radha`)
3. Upload all files
4. Go to Settings → Pages
5. Select main branch and save
6. Your site will be live at: `https://yourusername.github.io/valentine-for-radha/`

## 📱 Mobile Compatibility

The website is fully optimized for:
- ✅ iPhone (all models)
- ✅ Android phones
- ✅ Tablets (iPad, Android tablets)
- ✅ Desktop browsers
- ✅ All modern browsers (Chrome, Safari, Firefox, Edge)

## 🎭 Testing Before Valentine's Week

If you want to test the website before the actual dates:

1. Open `script.js`
2. Find the `unlockDates` array (lines 5-14)
3. Change the dates to current/near-future dates for testing
4. Example for immediate testing:
   ```javascript
   const unlockDates = [
       "2025-02-01", // Test today
       "2025-02-01", // Test today
       // ... etc
   ];
   ```
5. Save and reload the website

**IMPORTANT**: Remember to change the dates back to the original Valentine's week dates before giving to Radha!

## 💝 Customization Ideas

### Change Messages:
- Edit the `.daily-message` content in each HTML file
- Make them more personal, add inside jokes, memories, etc.

### Change Colors:
- Edit CSS variables in `style.css` (lines 2-11)
- Update the color scheme to match Radha's favorites

### Add Photos:
- Add `<img>` tags in the daily message sections
- Upload photos to the same folder
- Link them: `<img src="photo.jpg" alt="Our Memory">`

### Add Music:
- Add background music to Valentine's Day:
  ```html
  <audio autoplay loop>
    <source src="romantic-song.mp3" type="audio/mpeg">
  </audio>
  ```

## 🛠️ Technical Notes

- **No Dependencies**: Uses only native HTML, CSS, JavaScript
- **No Internet Required**: Works completely offline (except for Google Fonts)
- **Browser Storage**: Uses localStorage to remember if password was entered
- **Timezone Handling**: Automatically converts user timezone to IST
- **Performance**: Lightweight (~100KB total), loads instantly

## 🐛 Troubleshooting

### "Password doesn't work"
- Make sure you're typing it correctly (case-sensitive by default)
- Check `script.js` line 2 for the correct password
- Clear browser cache and try again

### "Countdown timer not showing correctly"
- Check your device's date/time settings
- Ensure JavaScript is enabled in your browser
- Try refreshing the page

### "Day won't unlock at midnight"
- The unlock is based on IST (Indian Standard Time)
- Refresh the page at midnight IST
- Check that dates in `script.js` are correct

### "Animations not working"
- Ensure JavaScript is enabled
- Try a different browser (Chrome recommended)
- Clear cache and reload

## 💌 Final Notes

This website is a labor of love, designed to make Radha feel cherished, special, and deeply loved throughout Valentine's week. Each day reveals a new aspect of your feelings, building up to the grand finale on Valentine's Day.

**Tips for Maximum Impact**:
1. Send Radha the link a day before (Feb 6th evening)
2. Don't tell her what it is - let her discover it!
3. Make sure she knows the password hint: "Only for Radha ❤️"
4. Be available to see her reaction each day 😊

**Remember**: The best part isn't the code or the animations - it's the genuine emotion and thought you've put into creating this for her. She's going to love it! ❤️

---

Created with ❤️ for Radha
Valentine's Week 2025

---

## 📋 Checklist Before Sending

- [ ] Password is set correctly
- [ ] All dates are set to February 7-14, 2025
- [ ] Messages are personalized and reviewed
- [ ] Tested on mobile device
- [ ] Tested on desktop
- [ ] Files uploaded to hosting (if using online)
- [ ] URL is bookmarked/ready to share
- [ ] You're ready to see her smile! 😊
