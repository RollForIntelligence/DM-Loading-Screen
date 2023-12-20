//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

let tooltipList = [
  'Hiding behind most objects gives a character half cover, making them slightly harder to hit.',
  'Heavily concealing yourself such as in a bush or a barrel may reduce your mobility, but will greatly reduce your foes\' ability to hit you.', 
  'The point of cover is visibility, not durability; even an illusion will provide significant benefit.', 
  'While an enemy can move to nullify the benefits of most cover, this can be exploited by a nearby ally threatening opportunity attacks.',
  'There is always something around in the environment. Never be afraid to ask me what you can mess around with!',
  'If concerned primarily about ranged attacks, remember that you can always fall prone to impose disadvantage on such attacks.',
  'Tunnels are the worst enemy of a horde. Funnel your foes to thwart their team tactics.',
  'Remember: You are medium sized while some of your foes are large or huge. They can\'t go everywhere you can.',
  'You can always create your own field hazards. Set a rug on fire or coat the floor in ball bearings to put your foes on the back foot.',
  'When facing a single foe, sometimes it\'s better to sprint and take the opportunity attack than to take several full attacks on their turn.',
  'When being chased, make sure you\'re heading towards a place you can turn around and fight.',
  'If you can\'t do much to the boss, then focus your fire on the minions. Fewer foes means fewer chances for damage.',
  'When all foes are equal, focus your fire on one at a time to reduce their numbers.',
  'If you can\'t do much on your own, you can always help an ally to make them more likely to land a telling blow.',
  'Attacking from darkness gives you advantage and your foes disadvantage. If your enemies are doing this, join them in their darkness to nullify their advantage.',
  'Remember; neither advantage nor disadvantage stack, and any amount of one cancels out the other. Exploit this to equalize unbalanced encounters.',
  'If you are durable and your foe is not, feel free to grapple your opponent and drag them off a cliff. They\'ll go splat while you\'ll survive.',
  'A burly character can hold down a dangerous foe from attacking squishier allies.',
  'Teamwork is always a good idea. I will never object if you want to strategize for a minute or two.',
  'In a pinch, two allies can always flank an enemy to mutually gain advantage.',
  'If you\'re having trouble roleplaying your character, try getting into their head.',
  'If you want to do some roleplay, PLEASE tell me! I can\'t give you what you want if I don\'t know what you want me to give you.',
  'Keep in mind that we\'re effectively writing a story. Don\'t be afraid to make it more fun to spectate.',
  'If pretending to be your character makes you uncomfortable, feel free to talk about in the third person. Please just talk about them.',
  'Under any circumstance, feel free to add more detail to your characters\' actions.',
  'Whenever you\'re unsure what your character would do, refer to their background or character traits for advice.',
  'Your character knows things you don\'t. This can help in various situations depending on their history.',
  'Everyone else is participating too. Never be afraid to have your characters play off of each other.',
  'Quirks are fun. Give your characters as many minor idiosyncracies as your heart desires.',
  'Remember: This is a game. Play your character in a way that is fun for you and tell me what you want to do so I can give you the opportunity.',
  'Build off of each other. If you want to jump in with some in-character roleplay, feel free to do so.',
  'If I accidentally present your characters\' reactions incorrectly, don\'t worry about correcting me.',
  'Weaknesses can absolutely make things more interesting. The other characters\' strengths can pick your character up.',
  'Dramatic irony and genre savviness are potential pitfalls to be aware of. Don\'t be afraid to let your characters fail in reasonable ways.'
]

function ChangeTooltip() {
  let value = Math.random()
  let newTooltip = (value * tooltipList.length) - (value * tooltipList.length) % 1
  newTooltip = tooltipList[newTooltip]
  document.querySelector('#tooltip').innerHTML = newTooltip
}

document.body.onclick = ChangeTooltip