function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll('div')
  widgets.forEach(widget => widget.classList.add('widget'))

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomize = Math.floor(Math.random() * quotes.length)               // eslint-disable-line
  const randomQuote = quotes[randomize]                                     // eslint-disable-line
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)
  const authorDate = document.createElement('div')
  const { author, date} = randomQuote
  authorDate.textContent = `${author} in ${date || 'an unknown date'}`
  widget1.appendChild(authorDate)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]       // eslint-disable-line
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]       // eslint-disable-line
  const randomNoun1 = nouns[Math.floor(Math.random() * nouns.length)]       // eslint-disable-line
  const randomNoun2 = nouns[Math.floor(Math.random() * nouns.length)]       // eslint-disable-line
  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)] // eslint-disable-line
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)] // eslint-disable-line
  const speechContainer = document.createElement('p')
  const speechText = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} \n
                      in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.` // ok this . made me crazy, I had to check solution, I have not found it.
  speechContainer.textContent = speechText
  const widget2 = document.querySelector('.corporatespeak')
  widget2.appendChild(speechContainer)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countdownElement = document.querySelector('.countdown');
  const countdown = document.createElement('p')
  countdown.textContent = 'T-minus 5...'
  countdownElement.appendChild(countdown)

  let count = 4;
  function updateCountdown() {
    if (count > 0) {
      countdown.textContent = `T-minus ${count}...`
      count--
    } else {
      countdown.textContent = "Liftoff! 🚀";
      clearInterval(intervalId);
    }
  }
  const intervalId = setInterval(updateCountdown, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random() * people.length)]          // eslint-disable-line
  const personContainer = document.createElement('p')
  document.querySelector('.friends').appendChild(personContainer)
  const year = person.dateOfBirth.split('-')[0]
  let widgetText = `${person.fname} ${person.lname} was born in ${year} and `

  if (!person.friends.length) {
    widgetText += 'has no friends.'
  } else {
    const friendNames = person.friends.map(friendId => {
      const friend = people.find(p => p.id === friendId)                    // eslint-disable-line
      return `${friend.fname} ${friend.lname}`
    })

    widgetText += `is friends with ${friendNames.join(', ').replace(/,(?=[^,]*$)/, ' and')}.`// the last part I have found and works, however I don really get it
  }

  personContainer.textContent = widgetText;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgets5 = document.querySelectorAll('section>div')
  widgets5.forEach((widget, i) => {
    widget.classList.add('widget')
    widget.tabIndex = i + 1
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
