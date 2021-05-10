


const chillGreeting = ['sweetie', 'honey', 'sugarplum', `darlin'`, 'smartypants'];


const chillActivities = ['snuggle with your pet', 'do some journaling', 'play animal crossing', 'take a bath', 'watch some old cartoons on youtube',
 'go on a chill walk', 'put on some dancing music', 'do some stretching', 'blow some bubbles', 'take a walk somewhere with trees',
  'have a one person dance party', 'do some colouring'];


const chillSnacks =  ['dried mango', 'apple chips', 'popcorn', 'little squares of dark chocolate',
 'hummus and veggies', 'bananas and peanut butter', 'chips and quacamole'];


const chillAffirmations = ['you are allowed to take up space',
     'you are allowed to make mistakes; they don’t make up your whole story',
     'you are in control of how you react to others',
     'you are  in charge of your life and no one will dictate your path besides you',
     'you are doing your best and that is enough',
     'you have the power to create change',
     'your contributions to the world are valuable',
     'you make a significant difference to the lives of people around you',
     'when you allow your light to shine, you unconsciously give other people permission to do the same',
     'no amount of guilt can change the past, and no amount of worrying can change the future',
     'you should choose to be proud of yourself and the things you choose to do'];


const randomGreeting = chillGreeting[Math.floor(Math.random() * chillGreeting.length)];
const randomActivity = chillActivities[Math.floor(Math.random() * chillActivities.length)];
const randomSnack = chillSnacks[Math.floor(Math.random() * chillSnacks.length)];
const randomAffirmation = chillAffirmations[Math.floor(Math.random() * chillAffirmations.length)];


const chillSentence = () => {
    return `Listen ${randomGreeting}, ${randomAffirmation}. Go get some ${randomSnack}, and ${randomActivity}. You deserve this.`;
     };

let button = document.getElementById('button');
let displaySentence = document.getElementById('sentence');

let sentence = function() {
     displaySentence.innerHTML = chillSentence();
}

button.onclick = sentence;