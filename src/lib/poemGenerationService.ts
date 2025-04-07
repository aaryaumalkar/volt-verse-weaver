
// This is a mock service that generates poems based on the input topic and style
// In a real application, this might call an external API or use a more sophisticated algorithm

const haikus = [
  [
    "Circuits connecting,",
    "Electrons dance through copper,",
    "Power awakens."
  ],
  [
    "Metal gears turning,",
    "Precision in every tooth,",
    "Systems in motion."
  ],
  [
    "Logic gates open,",
    "Information flows freely,",
    "Knowledge emerges."
  ],
  [
    "Voltage potential,",
    "Current finds its true pathway,",
    "Resistance gives heat."
  ]
];

const sonnets = [
  `The engines roar with calculated might,
A symphony of gears in perfect time.
Each part designed with clearance so sublime,
That friction yields to engineering's light.
Through thermodynamics' law so tight,
Efficiency climbs the gradient prime.
While heat equations plot their careful rhyme,
To make this marvel soar to wondrous height.
What mind conceived this integration pure?
What hand has crafted tolerances fine?
Such beauty in mechanics does allure,
Where form and function perfectly align.
The engineer's creation will endure,
A testament to human design divine.`,

  `In quantum realms where certainty dissolves,
The wave functions expand and then collapse.
Electrons jump between synaptic gaps,
As probability around them revolves.
Each measurement more mystery involves,
While Heisenberg's principle enwraps
The limits of the knowledge that perhaps
Our instruments can reach as science evolves.
Yet engineers harness this strange domain,
To build computers of unearthly speed.
Manipulating particles arcane,
To process data that our futures need.
Thus from the chaos comes the ordered gain,
When quantum theory meets pragmatic deed.`
];

const freeVerses = [
  `Hydraulic force multiplied
Through chambers of precise diameter
Pressure builds, transferring power
Across distances without loss

Pascal's principle in action
Every square inch bearing load
The mathematics of fluid dynamics
Converting motion into work

A mechanical advantage
Born of practical physics
The engineer's silent partner
In lifting what cannot be moved`,

  `Network packets pulse through fiber optic veins
Information transformed to light, then back again
Traveling at unimaginable speeds

Protocols layered like geological strata
Each with purpose, each with function
A handshake across digital divides

Latency measured in milliseconds
Throughput in gigabits per second
The architecture of our connected world

Built not on concrete and steel
But on algorithms and standards
The invisible infrastructure of modern life`
];

// Helper function to get a random item from an array
const getRandomItem = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Function to replace keywords in poems with user's topic
const insertTopic = (poem: string, topic: string) => {
  // List of engineering terms to potentially replace with the user's topic
  const replaceable = [
    "engines", "gears", "circuits", "systems", "network", "hydraulic", 
    "mechanical", "electrons", "quantum", "physics", "engineering"
  ];
  
  // Select a random term to replace (case insensitive)
  const termToReplace = getRandomItem(replaceable);
  const regex = new RegExp(`\\b${termToReplace}\\b`, 'i');
  
  // Replace at least one occurrence
  return poem.replace(regex, topic.toLowerCase());
};

// Main function to generate a poem
export const generatePoem = async (topic: string, style: string): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  let poem = "";
  
  switch (style) {
    case "haiku":
      poem = getRandomItem(haikus).join('\n');
      break;
    case "sonnet":
      poem = getRandomItem(sonnets);
      break;
    case "freeVerse":
      poem = getRandomItem(freeVerses);
      break;
    default:
      poem = getRandomItem(haikus).join('\n');
  }
  
  // Insert user's topic into the poem in a way that makes sense
  return insertTopic(poem, topic);
};
