import { IPal, SuitabilitiesEnum, TypesEnum } from "./interfaces";

export const pals: IPal[] = [
  {
    id: 1,
    key: "001",
    image: "/palfinder/images/pals/001.png",
    name: "Lamball",
    wiki: "https://palworld.fandom.com/wiki/Lamball",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Wool", "Lamball Mutton"],
    aura: {
      name: "Fluffy Shield",
      description: "When activated, equips to the player and becomes a shield. Sometimes drops Wool when assigned to Ranch.",
    },
    description: "A walk up a hill tends to end with this Pal tumbling back down. This causes it to become dizzy and unable to move, making it easy to capture and kill. As a result, this Pal has tumbled down to the very bottom of the food chain itself.",
  },
  {
    id: 2,
    key: "002",
    image: "/palfinder/images/pals/002.png",
    name: "Cattiva",
    wiki: "https://palworld.fandom.com/wiki/Cattiva",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Red Berries"],
    aura: {
      name: "Cat Helper",
      description: "While in party, Cattiva helps carry supplies, increasing the player's max carrying capacity by 100. (Does not stack)",
    },
    description: "At a glance it appears full of confidence, but it is in fact weak and cowardly. Being toyed with by a Cattiva is in many ways the greatest of disgraces.",
  },
  {
    id: 3,
    key: "003",
    image: "/palfinder/images/pals/003.png",
    name: "Chikipi",
    wiki: "https://palworld.fandom.com/wiki/Chikipi",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Egg", "Chikipi Poultry"],
    aura: {
      name: "Egg Layer",
      description: "Sometimes lays an Egg when assigned to Ranch.",
    },
    description: "Extremely weak and far too delicious. It is one of the weakest Pals alongside Lamball. No matter how many are hunted, they just keep appearing.",
  },
  {
    id: 4,
    key: "004",
    image: "/palfinder/images/pals/004.png",
    name: "Lifmunk",
    wiki: "https://palworld.fandom.com/wiki/Lifmunk",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
    ],
    drops: ["Wheat Seeds", "Low Grade Medical Supplies"],
    aura: {
      name: "Lifmunk Recoil",
      description: "When activated, leaps onto the player's head and uses a submachine gun to follows up player attacks. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Intelligent as a five to seven-year-old human child. It makes a wonderful partner, but there have been more than a few cases where they've killed their master after learning to use weapons.",
  },
  {
    id: 5,
    key: "005",
    image: "/palfinder/images/pals/005.png",
    name: "Fuack",
    wiki: "https://palworld.fandom.com/wiki/Fuack",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Aquatic Pal Fluids"],
    aura: {
      name: "Surfing Slam",
      description: "When activated, Fuack body surfs towards an enemy and slams into them. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Using its own body water, this Pal can create waves anywhere. It body surfs when in a hurry, but the resulting speed often ends in a fatal collision.",
  },
  {
    id: 6,
    key: "005B",
    image: "/palfinder/images/pals/005B.png",
    name: "Fuack Ignis",
    wiki: "https://palworld.fandom.com/wiki/Fuack_Ignis",
    types: [TypesEnum.WATER, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Aquatic Pal Fluids", "Flame Organ"],
    aura: {
      name: "Fire Tackle",
      description: "When activated, Fuack Ignis fire surfs towards an enemy and slams into them. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "With a belly built for friction, this Pal sparks flames as it body surfs. But when it gets carried away, it often ends up a rolling fireball.",
  },
  {
    id: 7,
    key: "006",
    image: "/palfinder/images/pals/006.png",
    name: "Vixy",
    wiki: "https://palworld.fandom.com/wiki/Vixy",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Dig Here!",
      description: "Sometimes digs up items from the ground when assigned to Ranch.",
    },
    description: "The idol of Palpagos Island. If you bully a Vixy, you best be prepared to become enemies with the whole world.",
  },
  {
    id: 8,
    key: "007",
    image: "/palfinder/images/pals/007.png",
    name: "Celaray",
    wiki: "https://palworld.fandom.com/wiki/Celaray",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Zephyr Glider",
      description: "While in party, modifies the performance of the equipped glider. Prevents fall damage and extends the duration of high-speed gliding. Rank 2: (Glider Performance Boost: S) Rank 3: (Glider Performance Boost: M) Rank 4: (Glider Performance Boost: L) Rank 5: (Glider Performance Boost: XL)",
    },
    description: "Riding the wind, this Pal travels where it pleases. Should it find a partner along the way, the encounter will mark its journey's end.",
  },
  {
    id: 9,
    key: "007B",
    image: "/palfinder/images/pals/007B.png",
    name: "Celaray Lux",
    wiki: "https://palworld.fandom.com/wiki/Celaray_Lux",
    types: [TypesEnum.WATER, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Jolt Glider",
      description: "While in party, modifies the performance of the equipped glider. Prevents fall damage and extends the duration of high-speed gliding. Rank 2: (Glider Performance Boost: S) Rank 3: (Glider Performance Boost: M) Rank 4: (Glider Performance Boost: L) Rank 5: (Glider Performance Boost: XL)",
    },
    description: "Its flashy patterns help it attract a partner. But after a long history of electrocution incidents involving Celaray Lux, yellow-and-black stripes are now seen across the island as a sign of danger.",
  },
  {
    id: 10,
    key: "008",
    image: "/palfinder/images/pals/008.png",
    name: "Cremis",
    wiki: "https://palworld.fandom.com/wiki/Cremis",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "Fluffy Wool",
      description: "While in party, increases Attack of Neutral Pals by 15%. (Does not stack) Sometimes drops Wool when assigned to Ranch.",
    },
    description: "Compared to Lamball, it has finer wool and a temperament more suited for domestication. However, it has historically always been kept as a pet. Cuteness is considered a virtue.",
  },
  {
    id: 11,
    key: "009",
    image: "/palfinder/images/pals/009.png",
    name: "Croajiro",
    wiki: "https://palworld.fandom.com/wiki/Croajiro",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Cloth"],
    aura: {
      name: "Leap Stance",
      description: "When activated, Croajiro Noct channels its loyalty and puffs up its abdomen to store energy. Climbing on top will propel the player high into the air. While airborne before landing, the player's Attack is increased by 50%.",
    },
    description: "Those who disgrace the honor of the herd are forced to take their own life. By piercing their inflated vocal sac with a tree branch, they are blown away into the atmosphere and return to the afterlife.",
  },
  {
    id: 12,
    key: "009B",
    image: "/palfinder/images/pals/009B.png",
    name: "Croajiro Noct",
    wiki: "https://palworld.fandom.com/wiki/Croajiro_Noct",
    types: [TypesEnum.WATER, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Cloth", "Venom Gland"],
    aura: {
      name: "Shadow Stance",
      description: "When activated, Croajiro Noct channels its loyalty and puffs up its abdomen to store energy. Climbing on top will propel the player high into the air. While in party, improves player's and Pals' Dark damage to enemy weak points by 25%. (Does not stack)",
    },
    description: "The Croajiro who have forsaken their honor gather and form splinter groups. They will use any underhanded means to take down their chosen prey. If you encounter a pack of Croajiro Noct in the dead of the night, it's your life that's on the line.",
  },
  {
    id: 13,
    key: "010",
    image: "/palfinder/images/pals/010.png",
    name: "Herbil",
    wiki: "https://palworld.fandom.com/wiki/Herbil",
    types: [TypesEnum.GRASS, TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Wheat Seeds"],
    aura: {
      name: "Herbil Pulse",
      description: "While in party, Herbil uses its healing powers to restore 30/36/42/48/60% of the player's Max Health when incapacitated. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "When in doubt, punch it till it works—that’s Herbil's approach to fixing things. With strength perfectly tuned for humans, sometimes just one punch is enough to restart a stopped heart.",
  },
  {
    id: 14,
    key: "011",
    image: "/palfinder/images/pals/011.png",
    name: "Teafant",
    wiki: "https://palworld.fandom.com/wiki/Teafant",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Soothing Shower",
      description: "While in party, restores 20% of the player's Health when Health falls below 30%. (Does not stack) (120-second cooldown after activation)",
    },
    description: "Large amounts of water pour from what is thought to be its nose, though some say that it is, in fact, just snot. This has sparked a fierce debate among Pal scholars.",
  },
  {
    id: 15,
    key: "012",
    image: "/palfinder/images/pals/012.png",
    name: "Gumoss",
    wiki: "https://palworld.fandom.com/wiki/Gumoss",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
    ],
    drops: ["Berry Seeds", "Gumoss Leaf"],
    aura: {
      name: "Logging Assistance",
      description: "While in party, improves logging efficiency by 30% and reduces weight of all types of wood by 35%. (Does not stack)",
    },
    description: "A strange Pal with a body resembling tree sap. It gradually loses strength if it has nothing to cover its body with, eventually rotting away.",
  },
  {
    id: 16,
    key: "013",
    image: "/palfinder/images/pals/013.png",
    name: "Pupperai",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Best Boy",
      description: "While in party, increases the player's melee weapon damage by 10%. (Does not stack)",
    },
    description: "Pupperai territorial disputes begin with a staredown and end in a single, quick strike. Training them to |stay| is risky business, as the |go| command triggers that same attack instinct.",
  },
  {
    id: 17,
    key: "014",
    image: "/palfinder/images/pals/014.png",
    name: "Clovee",
    wiki: "https://palworld.fandom.com/wiki/Clovee",
    types: [TypesEnum.GRASS, TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Berry Seeds"],
    aura: {
      name: "Happy Clover",
      description: "While at a base, increases the Gathering Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Some individuals once had three or more leaves on their foreheads. Regarded as symbols of good fortune, those with more leaves were heavily hunted, leading the species to evolve fewer leaves over time.",
  },
  {
    id: 18,
    key: "015",
    image: "/palfinder/images/pals/015.png",
    name: "Jolthog",
    wiki: "https://palworld.fandom.com/wiki/Jolthog",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Jolt Bomb",
      description: "When activated, equips Jolthog to the player to be thrown at an enemy, causing an Electric explosion upon impact. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "It releases the electricity stored in its body when under attack. The voltage it generates exceeds 10 million volts, making it more lethal than any conventional heavy firearms when thrown.",
  },
  {
    id: 19,
    key: "015B",
    image: "/palfinder/images/pals/015B.png",
    name: "Jolthog Cryst",
    wiki: "https://palworld.fandom.com/wiki/Jolthog_Cryst",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Cold Bomb",
      description: "When activated, equips Jolthog Cryst to the player to be thrown at an enemy, causing an Ice explosion upon impact. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "It releases the cold air stored in its body when under attack. The frigid blast it radiates is cold enough to freeze the surrounding air and easily pierces through any attacker's body.",
  },
  {
    id: 20,
    key: "016",
    image: "/palfinder/images/pals/016.png",
    name: "Depresso",
    wiki: "https://palworld.fandom.com/wiki/Depresso",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Venom Gland"],
    aura: {
      name: "Caffeine Inoculation",
      description: "When activated, Depresso chugs an entire energy drink, increasing its Movement Speed and Work Speed by 100%. Sometimes drops Venom Gland when assigned to Ranch.",
    },
    description: "It has few friends because of the perpetually grouchy look on its face, but it is in fact kindhearted. Some have seen it feeding Vixy who have strayed from their pack.",
  },
  {
    id: 21,
    key: "017",
    image: "/palfinder/images/pals/017.png",
    name: "Pengullet",
    wiki: "https://palworld.fandom.com/wiki/Pengullet",
    types: [TypesEnum.WATER, TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Ice Organ", "Aquatic Pal Fluids"],
    aura: {
      name: "Pengullet Launcher",
      description: "When activated, the player equips a Rocket Launcher to fire Pengullet as ammunition. Pengullet explodes on impact and is incapacitated. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "The feathers of this Pal have all but disappeared, but sadly, its desire to fly has remained as strong as ever. Even now, it tries to fly again in any way it can.",
  },
  {
    id: 22,
    key: "017B",
    image: "/palfinder/images/pals/017B.png",
    name: "Pengullet Lux",
    wiki: "https://palworld.fandom.com/wiki/Pengullet_Lux",
    types: [TypesEnum.WATER, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Electric Organ", "Aquatic Pal Fluids"],
    aura: {
      name: "Pengullet Lux Launcher",
      description: "When activated, the player equips Pengullet Lux to fire Rocket Launcher as ammunition. Pengullet Lux explodes on impact and is incapacitated. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "The feathers of this Pal have all but disappeared, and it can no longer fly. Yet its longing for the sky has turned to jealousy— so it harnessed electricity to strike down those who still soar.",
  },
  {
    id: 23,
    key: "018",
    image: "/palfinder/images/pals/018.png",
    name: "Penking",
    wiki: "https://palworld.fandom.com/wiki/Penking",
    types: [TypesEnum.WATER, TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Ice Organ", "Penking Plume"],
    aura: {
      name: "Brave Sailor",
      description: "While in party, Fire Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "Surprisingly, it is unrelated to Pengullet. However, since this Pal gets pampered as it pleases, for now, it's doing its best to strut arrogantly.",
  },
  {
    id: 24,
    key: "018B",
    image: "/palfinder/images/pals/018B.png",
    name: "Penking Lux",
    wiki: "https://palworld.fandom.com/wiki/Penking_Lux",
    types: [TypesEnum.WATER, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Electric Organ", "Penking Plume"],
    aura: {
      name: "Unyielding Storm Commander",
      description: "While in party, improves player's and Pals' Water damage to enemy weak points by 25%. (Does not stack)",
    },
    description: "Its body changed color after gaining electricity to improve underwater hunting. As a result, it lost the affection of Pengullet— but strangely enough, it now has a loyal follower: Pengullet Lux.",
  },
  {
    id: 25,
    key: "019",
    image: "/palfinder/images/pals/019.png",
    name: "Hoocrates",
    wiki: "https://palworld.fandom.com/wiki/Hoocrates",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Fiber", "Advanced Technical Manual"],
    aura: {
      name: "Dark Knowledge",
      description: "While in party, increases Attack of Dark Pals by 15%. (Does not stack)",
    },
    description: "Often lost in thought, it sometimes finds it difficult to sleep. |I think, therefore I am.|",
  },
  {
    id: 26,
    key: "020",
    image: "/palfinder/images/pals/020.png",
    name: "Melpaca",
    wiki: "https://palworld.fandom.com/wiki/Melpaca",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Wool", "Leather"],
    aura: {
      name: "Pacapaca Wool",
      description: "Can be ridden. While in party, increases Kingpaca's Defense and Movement Speed. Sometimes drops Wool when assigned to Ranch.",
    },
    description: "Don't be fooled by this Pal's fluffy appearance. A hypersonic kick from one of its long legs may send you flying to the other side of the world.",
  },
  {
    id: 27,
    key: "021",
    image: "/palfinder/images/pals/021.png",
    name: "Kingpaca",
    wiki: "https://palworld.fandom.com/wiki/Kingpaca",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "King of Muscles",
      description: "Can be ridden. This Pal's Defense and Movement Speed increase by 5% for each Melpaca in party.",
    },
    description: "Melpaca serve this Pal. Contests between Kingpaca offer up their vassals as a wager. Those seen alone are losers of such contests.",
  },
  {
    id: 28,
    key: "021B",
    image: "/palfinder/images/pals/021B.png",
    name: "Kingpaca Cryst",
    wiki: "https://palworld.fandom.com/wiki/Kingpaca_Cryst",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Wool", "Ice Organ"],
    aura: {
      name: "Coldhearted King",
      description: "Can be ridden. This Pal's Defense and Movement Speed increase by 5% for each Melpaca in party.",
    },
    description: "With a heart of ice, this Pal is terrible at expressing its emotions. A solitary individual is pitiable, seen as too clumsy in the eyes of a Melpaca.",
  },
  {
    id: 29,
    key: "022",
    image: "/palfinder/images/pals/022.png",
    name: "Daedream",
    wiki: "https://palworld.fandom.com/wiki/Daedream",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Venom Gland", "Small Pal Soul"],
    aura: {
      name: "Dream Chaser",
      description: "While in party, appears near the player. Attacks hostile enemies with Dark magic bullets. These bullets will not reduce the target's Health below 1. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "It puts those it is interested in to sleep and shows them an endless stream of happy dreams. Those who fall under its spell are never to wake until death takes them.",
  },
  {
    id: 30,
    key: "023",
    image: "/palfinder/images/pals/023.png",
    name: "Tanzee",
    wiki: "https://palworld.fandom.com/wiki/Tanzee",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Mushroom"],
    aura: {
      name: "Cheery Rifle",
      description: "When activated, Tanzee will mercilessly fire an assault rifle at nearby enemies for a limited time. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Long ago, this Pal used long objects like tree branches as weapons. After coming into contact with humans, however, it found something slightly more effective: guns.",
  },
  {
    id: 31,
    key: "023B",
    image: "/palfinder/images/pals/023B.png",
    name: "Tanzee Ignis",
    wiki: "None",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Mushroom", "Flame Organ"],
    aura: {
      name: "Chipper Chimp Gunfire",
      description: "When activated, Tanzee Ignis will mercilessly fire a Fire assault rifle at nearby enemies for a limited time. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Its palms have evolved to handle burning objects without getting scorched. When its gun runs out of ammo, it may grab the heated barrel with its bare hands and use it to club its foes.",
  },
  {
    id: 32,
    key: "024",
    image: "/palfinder/images/pals/024.png",
    name: "Nox",
    wiki: "https://palworld.fandom.com/wiki/Nox",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Small Pal Soul"],
    aura: {
      name: "Kuudere",
      description: "When activated, detects the location of nearby Pal Effigies. Rank 2: (Detection Range Expansion + Cooldown Reduction: S) Rank 3: (Detection Range Expansion + Cooldown Reduction: M) Rank 4: (Detection Range Expansion + Cooldown Reduction: L) Rank 5: (Detection Range Expansion + Cooldown Reduction: XL)",
    },
    description: "If you find Nox hair in your bedding, you should leave it where it lays and leave immediately. Picking it up is a one-way-ticket to a never ending night.",
  },
  {
    id: 33,
    key: "025",
    image: "/palfinder/images/pals/025.png",
    name: "Flambelle",
    wiki: "https://palworld.fandom.com/wiki/Flambelle",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "High Quality Pal Oil"],
    aura: {
      name: "Magma Tears",
      description: "While in party, recovers Health of the player and Party Pals by 0.1% per second outside of combat. (Does not stack) Sometimes drops Flame Organ when assigned to Ranch.",
    },
    description: "When it starts crying, this Pal produces magma in place of tears. The magma that pours out is absorbed back into its body, causing it to get hotter and hotter. The more it cries, the stronger it becomes.",
  },
  {
    id: 34,
    key: "026",
    image: "/palfinder/images/pals/026.png",
    name: "Rooby",
    wiki: "https://palworld.fandom.com/wiki/Rooby",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Tiny Spark",
      description: "While in party, increases Defense of Fire Pals by 15%. (Does not stack) Sometimes drops Flame Organ when assigned to Ranch.",
    },
    description: "Wild Rooby surprisingly never get sick. Eating one piece of charcoal a day, made by burning a branch, is the secret to its eternal health.",
  },
  {
    id: 35,
    key: "027",
    image: "/palfinder/images/pals/027.png",
    name: "Mau",
    wiki: "https://palworld.fandom.com/wiki/Mau",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Gold Coin", "Leather"],
    aura: {
      name: "Gold Digger",
      description: "Sometimes digs up Gold Coin when assigned to Ranch.",
    },
    description: "Its hard tail does not deteriorate even when cut off. Some believed these severed tails bring good luck, but for the innumerable Mau who were poached as a result, they were anything but.",
  },
  {
    id: 36,
    key: "027B",
    image: "/palfinder/images/pals/027B.png",
    name: "Mau Cryst",
    wiki: "https://palworld.fandom.com/wiki/Mau_Cryst",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Ice Organ", "Sapphire"],
    aura: {
      name: "Icy Whispers",
      description: "Sometimes drops <itemName id=|Iceorgan| style=|Status_Keyword|/> when assigned to Ranch.",
    },
    description: "Its crystalline tail is beautiful, but shatters when this Pal dies. Some believe it is good luck to raise them, so Mau Cryst in captivity are treated with great care.",
  },
  {
    id: 37,
    key: "028",
    image: "/palfinder/images/pals/028.png",
    name: "Rushoar",
    wiki: "https://palworld.fandom.com/wiki/Rushoar",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Rushoar Pork", "Leather", "Bone"],
    aura: {
      name: "Hard Head",
      description: "Can be ridden. While mounted, increases efficiency of destroying Stone by 500%.",
    },
    description: "Being an extremely aggressive Pal, it often picks fights before gauging its opponents' strength. Though small, its powerful charge can even send boulders flying.",
  },
  {
    id: 38,
    key: "029",
    image: "/palfinder/images/pals/029.png",
    name: "Foxparks",
    wiki: "https://palworld.fandom.com/wiki/Foxparks",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Huggy Fire",
      description: "When activated, equips to the player and transforms into a flamethrower. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "It is unskilled at controlling fire from the moment it is born and tends to choke on the flames it breathes unintentionally. Foxparks sneezes are one of the leading causes of forest fires.",
  },
  {
    id: 39,
    key: "029B",
    image: "/palfinder/images/pals/029B.png",
    name: "Foxparks Cryst",
    wiki: "https://palworld.fandom.com/wiki/Foxparks_Cryst",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Leather", "Ice Organ"],
    aura: {
      name: "Huggy Frost",
      description: "When activated, equips to the player and attacks using frigid air. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "It is unskilled at controlling cold air from the moment it is born and tends to choke on the frost it breathes unintentionally. When Foxparks Cryst catches a cold, its nasal discharge freezes, making it difficult to breathe and causing it to panic.",
  },
  {
    id: 40,
    key: "030",
    image: "/palfinder/images/pals/030.png",
    name: "Killamari",
    wiki: "https://palworld.fandom.com/wiki/Killamari",
    types: [TypesEnum.DARK, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Venom Gland", "Killamari Tentacle", "Aquatic Pal Fluids"],
    aura: {
      name: "Fried Squid",
      description: "While in party, modifies the performance of the equipped glider. Enables gentle floating while gliding for an extended time. Rank 2: (Glider Performance Boost: S) Rank 3: (Glider Performance Boost: M) Rank 4: (Glider Performance Boost: L) Rank 5: (Glider Performance Boost: XL)",
    },
    description: "It wraps itself around an enemy's head, sucking out their insides. Pal mummies are occasionally found, but these are in fact Killamari victims.",
  },
  {
    id: 41,
    key: "030B",
    image: "/palfinder/images/pals/030B.png",
    name: "Killamari Primo",
    wiki: "https://palworld.fandom.com/wiki/Killamari_Primo",
    types: [TypesEnum.NEUTRAL, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Killamari Tentacle"],
    aura: {
      name: "Fried Killamari",
      description: "While in party, modifies the performance of the equipped glider. Enables gentle floating while gliding for an extended time. Rank 2: (Glider Performance Boost: S) Rank 3: (Glider Performance Boost: M) Rank 4: (Glider Performance Boost: L) Rank 5: (Glider Performance Boost: XL)",
    },
    description: "It sinks its fangs into the enemy’s neck, draining every last drop of blood. When two Killamari Primos latch onto each other, they become locked in a relentless struggle—each trying to suck the other dry until one withers away.",
  },
  {
    id: 42,
    key: "031",
    image: "/palfinder/images/pals/031.png",
    name: "Fuddler",
    wiki: "https://palworld.fandom.com/wiki/Fuddler",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Mining Assistance",
      description: "While in party, improves player mining efficiency by 30% and reduces Stone weight by 34%. (Does not stack)",
    },
    description: "Its large claws boast of diamond-like hardness. However, sharpening these claws consumes most of its energy, leading it to sometimes spending entire days doing nothing else.",
  },
  {
    id: 43,
    key: "032",
    image: "/palfinder/images/pals/032.png",
    name: "Eikthyrdeer",
    wiki: "https://palworld.fandom.com/wiki/Eikthyrdeer",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Eikthyrdeer Venison", "Leather", "Horn"],
    aura: {
      name: "Guardian of the Forest",
      description: "Can be ridden. Can perform a double jump while mounted and increases lumbering efficiency by 220%.",
    },
    description: "The one who possesses the most impressive antlers becomes the leader of the herd. If their antlers are broken, they become depressed and leave the herd never to be seen again.",
  },
  {
    id: 44,
    key: "032B",
    image: "/palfinder/images/pals/032B.png",
    name: "Eikthyrdeer Terra",
    wiki: "https://palworld.fandom.com/wiki/Eikthyrdeer_Terra",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Eikthyrdeer Venison", "Leather", "Horn"],
    aura: {
      name: "Guardian of the Golden Forest",
      description: "Can be ridden. Can perform a double jump while mounted. While at a base, increases the Lumbering Work Suitability Level for all other Base Pals by +1 (Does not stack)",
    },
    description: "The individual with the hardest horns becomes the leader. Once the horns are lost, so too is its leadership status. It leaves the herd amidst farewell glances and quietly returns to the earth.",
  },
  {
    id: 45,
    key: "033",
    image: "/palfinder/images/pals/033.png",
    name: "Direhowl",
    wiki: "https://palworld.fandom.com/wiki/Direhowl",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Ruby", "Gold Coin"],
    aura: {
      name: "Direhowl Rider",
      description: "Can be ridden. Moves slightly faster than most mounts. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Long ago Direhowl would hunt alongside humans but over the years this bond faded.",
  },
  {
    id: 46,
    key: "034",
    image: "/palfinder/images/pals/034.png",
    name: "Caprity",
    wiki: "https://palworld.fandom.com/wiki/Caprity",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Caprity Meat", "Red Berries", "Horn"],
    aura: {
      name: "Berry Picker",
      description: "Sometimes drops Red Berries from its back when assigned to Ranch. While in party, restores 100 Pal’s Hunger to the Pal with the lowest Hunger every 5 minutes. (Does not stack)",
    },
    description: "The shrub on this Pal's back produces berries as long as it is properly fed. It offers these berries to potential mates, and if the flavor is to their liking, romance blossoms.",
  },
  {
    id: 47,
    key: "034B",
    image: "/palfinder/images/pals/034B.png",
    name: "Caprity Noct",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Caprity Meat", "Red Berries", "Horn", "Venom Gland"],
    aura: {
      name: "Venom Picker",
      description: "Sometimes drops Venom Gland from its back when assigned to Ranch. While in party, restores 100 Pal’s Hunger to the Pal with the lowest Hunger every 5 minutes. (Does not stack)",
    },
    description: "The berries that grow on its back change flavor according to its emotions. The harsher the environment it grows in, the sweeter the berries become. This is why most Caprity Noct raised in captivity have never known love.",
  },
  {
    id: 48,
    key: "035",
    image: "/palfinder/images/pals/035.png",
    name: "Swee",
    wiki: "https://palworld.fandom.com/wiki/Swee",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 1,
      },
    ],
    drops: ["Wool", "Swee Hair"],
    aura: {
      name: "Fluffy",
      description: "While in party, increases Attack and Defense of Sweepa.",
    },
    description: "Crawling along the ground, it eats microscopic organic matter. After a while, it discharges any substances that provide no nutrition. By using it as a mop for cleaning, everyone wins!",
  },
  {
    id: 49,
    key: "036",
    image: "/palfinder/images/pals/036.png",
    name: "Sweepa",
    wiki: "https://palworld.fandom.com/wiki/Sweepa",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
    ],
    drops: ["Wool"],
    aura: {
      name: "King of Fluff",
      description: "Can be ridden. This Pal's Attack and Defense increase by 12% for each Swee in party.",
    },
    description: "While hibernating, a large number of Swee hide within its voluminous body hair. The most ever recorded is 101.",
  },
  {
    id: 50,
    key: "037",
    image: "/palfinder/images/pals/037.png",
    name: "Turtacle",
    wiki: "https://palworld.fandom.com/wiki/Turtacle",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Bone"],
    aura: {
      name: "Spikey Carrier",
      description: "While in party, reduces Ore weight by 80%. (Does not stack)",
    },
    description: "To protect its fragile body, it developed an incredibly tough shell. Unfortunately, it's utterly defenseless underneath. Even a little tickle could knock it out cold.",
  },
  {
    id: 51,
    key: "037B",
    image: "/palfinder/images/pals/037B.png",
    name: "Turtacle Terra",
    wiki: "https://palworld.fandom.com/wiki/Turtacle_Terra",
    types: [TypesEnum.WATER, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Bone"],
    aura: {
      name: "Shiny Hauler",
      description: "While in party, reduces weight of Sulfur and Coal by 80%. Also improves player's and Pals' Ground damage to enemy weak points by 80%. (Does not stack)",
    },
    description: "To protect its fragile body, it developed an incredibly tough shell. With most of its senses concentrated in its limbs and shell, it can’t even tell if someone quietly touches its core.",
  },
  {
    id: 52,
    key: "038",
    image: "/palfinder/images/pals/038.png",
    name: "Hangyu",
    wiki: "https://palworld.fandom.com/wiki/Hangyu",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Fiber", "Wheat Seeds"],
    aura: {
      name: "Flying Trapeze",
      description: "",
    },
    description: "",
  },
  {
    id: 53,
    key: "038B",
    image: "/palfinder/images/pals/038B.png",
    name: "Hangyu Cryst",
    wiki: "https://palworld.fandom.com/wiki/Hangyu_Cryst",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Fiber", "Ice Organ"],
    aura: {
      name: "Winter Trapeze",
      description: "",
    },
    description: "",
  },
  {
    id: 54,
    key: "039",
    image: "/palfinder/images/pals/039.png",
    name: "Woolipop",
    wiki: "https://palworld.fandom.com/wiki/Woolipop",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Cotton Candy", "High Quality Pal Oil"],
    aura: {
      name: "Candy Pop",
      description: "Sometimes drops Cotton Candy when assigned to Ranch. While at a base, reduces Hunger depletion rate of Base Pals by -10%. (Does not stack)",
    },
    description: "Its entire body is 18,000 times sweeter than sugar. Carnivorous Pals lured by its scent will find themselves overwhelmed by sweetness and even pass out should they take a bite of this Pal.",
  },
  {
    id: 55,
    key: "039B",
    image: "/palfinder/images/pals/039B.png",
    name: "Woolipop Terra",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Caramel Cotton Candy", "Wool"],
    aura: {
      name: "Bitter Pop",
      description: "Sometimes drops Caramel Cotton Candy when assigned to Ranch. While at a base, reduces Hunger depletion rate of Base Pals by -15%. (Does not stack)",
    },
    description: "Its fur emits a sweet smell, but its meat is disgustingly bitter. Carnivorous Pals lured by its scent into taking a bite will find themselves overwhelmed by the foul taste and pass out.",
  },
  {
    id: 56,
    key: "040",
    image: "/palfinder/images/pals/040.png",
    name: "Mozzarina",
    wiki: "https://palworld.fandom.com/wiki/Mozzarina",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Mozzarina Meat", "Milk"],
    aura: {
      name: "Milk Maker",
      description: "Sometimes drops Milk when assigned to Ranch.",
    },
    description: "Milk pours from this Pal like water from an open faucet, regardless of its gender. It's truly a mystery of life, although this mystery may be better left unsolved.",
  },
  {
    id: 57,
    key: "041",
    image: "/palfinder/images/pals/041.png",
    name: "Azurobe",
    wiki: "https://palworld.fandom.com/wiki/Azurobe",
    types: [TypesEnum.WATER, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
    ],
    drops: ["Cloth", "Aquatic Pal Fluids"],
    aura: {
      name: "Waterwing Dance",
      description: "Can be ridden to travel on water. While mounted, changes the player's attack type to Water and increases Attack by 1%. Rank 2: (Swim Speed Up: 10%) Rank 3: (Swim Speed Up: 14%) Rank 4: (Swim Speed Up: 18%) Rank 5: (Swim Speed Up: 25%)",
    },
    description: "This Pal's white ribbon turns black if doused with impure water. Given its usefulness in detecting poison, this Pal was once overhunted. This past has left them bitter towards humanity.",
  },
  {
    id: 58,
    key: "041B",
    image: "/palfinder/images/pals/041B.png",
    name: "Azurobe Cryst",
    wiki: "https://palworld.fandom.com/wiki/Azurobe_Cryst",
    types: [TypesEnum.ICE, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Cloth", "Aquatic Pal Fluids", "Ice Organ"],
    aura: {
      name: "Icewing Dance",
      description: "Can be ridden to travel on water. While mounted, changes the player’s attack type to Ice and increases Attack by 1%. Rank 2: (Swim Speed Up: 10%) Rank 3: (Swim Speed Up: 14%) Rank 4: (Swim Speed Up: 18%) Rank 5: (Swim Speed Up: 25%)",
    },
    description: "This Pal’s white ribbon continuously absorbs heat from its surroundings, yet its temperature remains curiously unchanged. This strange ability once made it a target of relentless hunting, leaving it with a deep mistrust of humans to this day.",
  },
  {
    id: 59,
    key: "042",
    image: "/palfinder/images/pals/042.png",
    name: "Sparkit",
    wiki: "https://palworld.fandom.com/wiki/Sparkit",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Static Electricity",
      description: "While in party, increases Attack of Electric Pals by 15%. (Does not stack) Sometimes drops Electric Organ when assigned to Ranch.",
    },
    description: "During the dry season, this Pal is always on the verge of blowing a fuse. Sparks can fly with even the slightest provocation, even amongst allies.",
  },
  {
    id: 60,
    key: "043",
    image: "/palfinder/images/pals/043.png",
    name: "Kelpsea",
    wiki: "https://palworld.fandom.com/wiki/Kelpsea",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Raw Kelpsea", "Aquatic Pal Fluids"],
    aura: {
      name: "Aqua Spout",
      description: "While in party, increases Attack of Water Pals by 15%. (Does not stack) Sometimes drops Aquatic Pal Fluids when assigned to Ranch.",
    },
    description: "Its personality changes depending on the quality of the water it was born into. Kelpsea born into polluted waters are generally ill-tempered and quickly become delinquents.",
  },
  {
    id: 61,
    key: "043B",
    image: "/palfinder/images/pals/043B.png",
    name: "Kelpsea Ignis",
    wiki: "https://palworld.fandom.com/wiki/Kelpsea_Ignis",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Raw Kelpsea", "Flame Organ"],
    aura: {
      name: "Lava Spout",
      description: "While in party, increases Attack of Fire Pals by 15%. (Does not stack) Sometimes drops Flame Organ when assigned to Ranch.",
    },
    description: "Its personality changes depending on the temperature of the water it was born into. Kelpsea born in warm waters generally have a passionate, motivated personality.",
  },
  {
    id: 62,
    key: "044",
    image: "/palfinder/images/pals/044.png",
    name: "Ribbuny",
    wiki: "https://palworld.fandom.com/wiki/Ribbuny",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Beautiful Flower", "Ribbuny Ribbon", "Berry Seeds"],
    aura: {
      name: "Happy-Go-Lucky Bunny",
      description: "While in party, increases Attack of Neutral Pals by 15%. (Does not stack) While at a base, increases the Handiwork Work Suitability Level for all other Base Pals by +17. (Does not stack)",
    },
    description: "A Pal that's never without a bright smile. Occasionally, its tentacles get tied up in knots by Cattiva's pranks. During those moments, its expression turns demonic.",
  },
  {
    id: 63,
    key: "044B",
    image: "/palfinder/images/pals/044B.png",
    name: "Ribbuny Botan",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Ribbuny Ribbon", "Carrot Seeds", "Carrot"],
    aura: {
      name: "Ground 'n' Pound",
      description: "While in party, improves player's and Pals' Grass damage to enemy weak points by 25%. (Does not stack) Increases efficiency by 27% when working at a Weapon Workbench, Weapon Assembly Line, or other related facilities.",
    },
    description: "Always wears a cheerful smile. Sometimes, thanks to Cattiva's pranks, they end up tangled in tentacles and have to fight their way out! Even in tough situations, they keep smiling cheerfully.",
  },
  {
    id: 64,
    key: "047",
    image: "/palfinder/images/pals/047.png",
    name: "Amione",
    wiki: "https://palworld.fandom.com/wiki/Amione",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Magical Twin Powers",
      description: "While at a base, increases the Watering Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "If one disappears, another simply shows up to take its place, and life goes on like nothing happened. For Amione, companionship is everything.",
  },
  {
    id: 65,
    key: "048B",
    image: "/palfinder/images/pals/048B.png",
    name: "Gloopie Primo",
    wiki: "None",
    types: [TypesEnum.WATER, TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Gloopie Tentacle"],
    aura: {
      name: "Cephalo-Princess",
      description: "While in party, increases Defense of Water Pals by 15%. (Does not stack)",
    },
    description: "Be sure to check your plans for the next day before falling asleep with this Pal. Its suction cups leave marks that look suspiciously like bite marks. One sleepy cuddle session could lead to some truly unnecessary concern.",
  },
  {
    id: 66,
    key: "049",
    image: "/palfinder/images/pals/049.png",
    name: "Galeclaw",
    wiki: "https://palworld.fandom.com/wiki/Galeclaw",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Galeclaw Poultry", "Leather"],
    aura: {
      name: "Galeclaw Glider",
      description: "While in party, modifies the performance of the equipped glider. Enables high-speed gliding and allows shooting with the right hand. Rank 2: (Glider Performance Boost: S) Rank 3: (Glider Performance Boost: M) Rank 4: (Glider Performance Boost: L) Rank 5: (Glider Performance Boost: XL)",
    },
    description: "A Pal that can easily take flight even while grasping a human. It is, however, prone to letting go when tired, which has led to the sudden demise of more than a few souls.",
  },
  {
    id: 67,
    key: "050",
    image: "/palfinder/images/pals/050.png",
    name: "Wispaw",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Small Pal Soul", "Leather"],
    aura: {
      name: "Death-Cheating Feline",
      description: "While in party, increases the capture rate when awarded a back bonus. (Does not stack) Rank 2: (Capture Rate Up: S) Rank 3: (Capture Rate Up: M) Rank 4: (Capture Rate Up: L) Rank 5: (Capture Rate Up: XL)",
    },
    description: "The ghostly hands behind it embody the souls of all humans who have raised its kind. Lately, they seem to have reached a unanimous consensus to dote on Wispaw.",
  },
  {
    id: 68,
    key: "051",
    image: "/palfinder/images/pals/051.png",
    name: "Nitewing",
    wiki: "https://palworld.fandom.com/wiki/Nitewing",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Travel Companion",
      description: "Can be ridden as a flying mount. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "It carries newborn Pals to its nest and raises them as a surrogate parent. Once the baby Pal has fattened up, it hunts them.",
  },
  {
    id: 69,
    key: "052",
    image: "/palfinder/images/pals/052.png",
    name: "Tombat",
    wiki: "https://palworld.fandom.com/wiki/Tombat",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Small Pal Soul"],
    aura: {
      name: "Ultrasonic Sensor",
      description: "When activated, uses ultrasonic waves to detect nearby dungeons, treasure chests, and scrap. Rank 2: (Detection Range Expansion + Cooldown Reduction: S) Rank 3: (Detection Range Expansion + Cooldown Reduction: M) Rank 4: (Detection Range Expansion + Cooldown Reduction: L) Rank 5: (Detection Range Expansion + Cooldown Reduction: XL)",
    },
    description: "Often appears out of the blue to flaunt its prized wings in front of other Pals. Although this appears to be an intimidation tactic, the Pal seems to derive some kind of pleasure from the display.",
  },
  {
    id: 70,
    key: "053",
    image: "/palfinder/images/pals/053.png",
    name: "Tocotoco",
    wiki: "https://palworld.fandom.com/wiki/Tocotoco",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
    ],
    drops: ["Gunpowder", "Tocotoco Feather"],
    aura: {
      name: "Eggbomb Launcher",
      description: "When activated, equips to the player and transforms into an egg launcher. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "A frightening Pal that produces exploding eggs. It often fires these eggs from its rear end as a form of defense, but when spent, the Pal itself explodes.",
  },
  {
    id: 71,
    key: "054",
    image: "/palfinder/images/pals/054.png",
    name: "Univolt",
    wiki: "https://palworld.fandom.com/wiki/Univolt",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 1,
      },
    ],
    drops: ["Leather", "Electric Organ", "Horn"],
    aura: {
      name: "Swift Deity",
      description: "Can be ridden. While in party, improves player's and Pals' Electric damage to weak points by 25%. (Does not stack)",
    },
    description: "It used to be considered an emissary of the Thunder God, and thus was not hunted by people. However, after witnesses observed one die from a lightning strike, its reverence faded, and it quite literally fell into the role of a workhorse.",
  },
  {
    id: 72,
    key: "054B",
    image: "/palfinder/images/pals/054B.png",
    name: "Univolt Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 6,
      },
    ],
    drops: ["Leather", "Horn", "Ice Organ"],
    aura: {
      name: "Frigid Deity",
      description: "Can be ridden. While mounted, changes the player’s attack type to Ice and increases Attack by 1%.",
    },
    description: "It used to be considered an emissary of the Winter God, and thus was not hunted by people. However, after witnesses observed one lose its footing on the ice, its reverence faded, and it quite literally slid into the role of a workhorse.",
  },
  {
    id: 73,
    key: "055",
    image: "/palfinder/images/pals/055.png",
    name: "Gobfin",
    wiki: "https://palworld.fandom.com/wiki/Gobfin",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Angry Shark",
      description: "When activated, attacks targeted enemy with Aqua Gun. When this Pal uses Aqua Gun, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. While in party, increases the player's Attack by 10%.",
    },
    description: "Long ago, it was a giant and powerful aquatic Pal. However, as food became scarce, it evolved to live on land. Since walking requires much energy, it gradually became smaller and is now a small and puny Pal.",
  },
  {
    id: 74,
    key: "055B",
    image: "/palfinder/images/pals/055B.png",
    name: "Gobfin Ignis",
    wiki: "https://palworld.fandom.com/wiki/Gobfin_Ignis",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Angry Shark",
      description: "When activated, attacks targeted enemy with Spirit Fire. When this Pal uses Spirit Fire, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. While in party, increases the player's Attack by 10%.",
    },
    description: "Long ago, it was a giant and powerful aquatic Pal. However, as food became scarce, it evolved to live on land. Since walking burns many calories, it astonishingly awakened its power to control fire!",
  },
  {
    id: 75,
    key: "056",
    image: "/palfinder/images/pals/056.png",
    name: "Loupmoon",
    wiki: "https://palworld.fandom.com/wiki/Loupmoon",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Dark Gleam Strike",
      description: "When activated, attacks targeted enemy with Jumping Claw. When this Pal uses Jumping Claw, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. While in party, increases the player's melee weapon attack speed by 15%. (Does not stack)",
    },
    description: "The horns on its head grow under the moonlight. It doesn't hate the sun, but its horns itch when sunlight hits them.",
  },
  {
    id: 76,
    key: "056B",
    image: "/palfinder/images/pals/056B.png",
    name: "Loupmoon Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Frozen Gleam Strike",
      description: "When activated, attacks targeted enemy with Snow Claw. When this Pal uses Snow Claw, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. While in party, increases the player's melee weapon attack speed by 15%. (Does not stack)",
    },
    description: "The horns on its head are made of a mysterious ice that never melts. Shaved ice made by breaking off a horn is truly exquisite, but both the one who tries it and Loupmoon Cryst end up with a headache.",
  },
  {
    id: 77,
    key: "057",
    image: "/palfinder/images/pals/057.png",
    name: "Cawgnito",
    wiki: "https://palworld.fandom.com/wiki/Cawgnito",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Bone", "Venom Gland", "Small Pal Soul"],
    aura: {
      name: "Eerie Nightstreaker",
      description: "When activated, grants Night Vision to see in dark places. Activate again to turn off. Sometimes digs up Bone when assigned to Ranch.",
    },
    description: "Long ago it freely soared the skies. After losing a contest with Galeclaw, it abandoned the skies, and now lives a secretive life in the dark of night.",
  },
  {
    id: 78,
    key: "058",
    image: "/palfinder/images/pals/058.png",
    name: "Arsox",
    wiki: "https://palworld.fandom.com/wiki/Arsox",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Horn", "Flame Organ"],
    aura: {
      name: "Warm Body",
      description: "Can be ridden. While in party, the player gains Cold Resistance +2. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "In ancient times, carnivorous Pals pursued them relentlessly. The absurd fury in the cries of Arsox transformed into a raging inferno, which has been passed on to this day.",
  },
  {
    id: 79,
    key: "059",
    image: "/palfinder/images/pals/059.png",
    name: "Muffly",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Fluffy Flutterer",
      description: "While in party, increases the capture rate of Pals afflicted with Freeze. (Does not stack) Rank 2: (Capture Rate Up: S) Rank 3: (Capture Rate Up: M) Rank 4: (Capture Rate Up: L) Rank 5: (Capture Rate Up: XL)",
    },
    description: "Its soft facial fluff softens any hit, but it cannot groom itself well nor scratch its itches, leaving it in a constant state of mild frustration.",
  },
  {
    id: 80,
    key: "060",
    image: "/palfinder/images/pals/060.png",
    name: "Bristla",
    wiki: "https://palworld.fandom.com/wiki/Bristla",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Tomato Seeds", "Beautiful Flower"],
    aura: {
      name: "Princess Gaze",
      description: "While in party, increases Attack of Grass Pals by 15%. (Does not stack)",
    },
    description: "This prickly Pal's thorns are highly poisonous. It is friendly with Cinnamoth and only smiles while a Cinnamoth is drinking its nectar.",
  },
  {
    id: 81,
    key: "061",
    image: "/palfinder/images/pals/061.png",
    name: "Cinnamoth",
    wiki: "https://palworld.fandom.com/wiki/Cinnamoth",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
    ],
    drops: ["Honey", "Lettuce Seeds", "Tomato Seeds"],
    aura: {
      name: "Mysterious Scales",
      description: "When activated, attacks the targeted enemy with Poison Fog. While at a base, increases the Farming Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Sniffing its scales produces a feeling of unparalleled euphoria. There was some effort to further regulate this byproduct, but the Free Pal Alliance have vehemently opposed these measures, putting a stop to them.",
  },
  {
    id: 82,
    key: "062",
    image: "/palfinder/images/pals/062.png",
    name: "Puffolt",
    wiki: "None",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Crackle Booster",
      description: "While at a base, increases the Generating Electricity Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Its fluffy fur absorbs tremendous amounts of water when soaked. Shaking it dry releases a powerful electrical discharge, making bath time together a serious gamble.",
  },
  {
    id: 83,
    key: "063",
    image: "/palfinder/images/pals/063.png",
    name: "Elphidran",
    wiki: "https://palworld.fandom.com/wiki/Elphidran",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Amicable Holy Dragon",
      description: "Can be ridden as a flying mount. While flying, Movement Speed is increased. While in party, Dark Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "It possesses a demeanor as pure as its appearance suggests. Perhaps because of this, it is sometimes unable to discern good from evil, often allowing wrongdoers to take advantage of it.",
  },
  {
    id: 84,
    key: "063B",
    image: "/palfinder/images/pals/063B.png",
    name: "Elphidran Aqua",
    wiki: "https://palworld.fandom.com/wiki/Elphidran_Aqua",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Amicable Water Dragon",
      description: "Can be ridden as a flying mount. While flying, Movement Speed is increased. While in party, player and party Pals take 15% less Fire damage and are immune to Burn. (Does not stack)",
    },
    description: "It possesses a demeanor as pure as its appearance suggests. Perhaps because of this, it harbors no ill will in any of its actions and is indifferent even after killing someone.",
  },
  {
    id: 85,
    key: "064",
    image: "/palfinder/images/pals/064.png",
    name: "Vanwyrm",
    wiki: "https://palworld.fandom.com/wiki/Vanwyrm",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Bone", "Ruby", "Gold Coin"],
    aura: {
      name: "Aerial Marauder",
      description: "Can be ridden as a flying mount. While in party, increases damage player deals to enemy weak points by 20%. (Does not stack)",
    },
    description: "The melodies of a flute made from the exoskeleton of a Vanwyrm are said to cross whole mountain ranges. In ages past, such flutes were used to signal an attack.",
  },
  {
    id: 86,
    key: "064B",
    image: "/palfinder/images/pals/064B.png",
    name: "Vanwyrm Cryst",
    wiki: "https://palworld.fandom.com/wiki/Vanwyrm_Cryst",
    types: [TypesEnum.ICE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Bone", "Ice Organ", "Sapphire"],
    aura: {
      name: "Aerial Marauder",
      description: "Can be ridden as a flying mount. While in party, increases damage player deals to enemy weak points by 30%. (Does not stack)",
    },
    description: "The melodies of a flute made from the exoskeleton of a Vanwyrm Cryst are said to cross whole mountain ranges. In ages past, such flutes were used to signal victory in battle.",
  },
  {
    id: 87,
    key: "065",
    image: "/palfinder/images/pals/065.png",
    name: "Felbat",
    wiki: "https://palworld.fandom.com/wiki/Felbat",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
    ],
    drops: ["Cloth", "Small Pal Soul"],
    aura: {
      name: "Life Steal",
      description: "While fighting together, grants the player and Felbat a life steal effect that restores 5% of damage dealt as Health.",
    },
    description: "Attacking from the shadows, this Pal traps its prey within its cloak-like wings. It's probably best not to know what happens within them, or why the inside of its wings are stained red.",
  },
  {
    id: 88,
    key: "066",
    image: "/palfinder/images/pals/066.png",
    name: "Vaelet",
    wiki: "https://palworld.fandom.com/wiki/Vaelet",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Low Grade Medical Supplies", "Tomato Seeds", "Onion Seeds"],
    aura: {
      name: "Purification of Gaia",
      description: "While in party, Ground Pals drop 40% more items when defeated. (Does not stack) Sometimes drops various seeds when assigned to Ranch.",
    },
    description: "The castle was filled with the king's favorite flowers. A great battle ensued, and flames approached the castle. Amidst the chaos, the spirit of a flower appeared. - From the fairy tale, |The King's Flower.|",
  },
  {
    id: 89,
    key: "067",
    image: "/palfinder/images/pals/067.png",
    name: "Beegarde",
    wiki: "https://palworld.fandom.com/wiki/Beegarde",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 3,
      },
    ],
    drops: ["Honey"],
    aura: {
      name: "Worker Bee",
      description: "While in party, increases Elizabee's Attack. Sometimes drops Honey when assigned to Ranch.",
    },
    description: "A servant that pledges loyalty to Elizabee. Any that cause harm to the queen are immediately expelled from the hive. It will gladly give its life to protect its queen.",
  },
  {
    id: 90,
    key: "068",
    image: "/palfinder/images/pals/068.png",
    name: "Elizabee",
    wiki: "https://palworld.fandom.com/wiki/Elizabee",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
    ],
    drops: ["Honey", "Elizabee's Staff"],
    aura: {
      name: "Queen Bee Command",
      description: "This Pal's Attack increases by 12% for each Beegarde in party.",
    },
    description: "A chosen queen to rule over Beegardes. There is a never ending stream of servants willing to work themselves to death for the pleasure of serving their queen.",
  },
  {
    id: 91,
    key: "069",
    image: "/palfinder/images/pals/069.png",
    name: "Lovander",
    wiki: "https://palworld.fandom.com/wiki/Lovander",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Mushroom", "Cake", "Suspicious Juice", "Strange Juice", "Memory Wiping Medicine"],
    aura: {
      name: "Heart Drain",
      description: "While fighting together, grants the player and Lovander a life steal effect that restores 5% of damage dealt as Health.",
    },
    description: "Seeking a night of love, it is always chasing someone around. At first it only showed interest in other Pals, but in recent years even humans have become the target of its debauchery.",
  },
  {
    id: 92,
    key: "070",
    image: "/palfinder/images/pals/070.png",
    name: "Grintale",
    wiki: "https://palworld.fandom.com/wiki/Grintale",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Glaring Cat's Eye",
      description: "Can be ridden. While in party, picking up a Pal Egg has a 50% chance of receiving one extra. (Does not stack)",
    },
    description: "Grintale's eyes light up the moment anyone enters its territory. This is no figure of speech—its eyes literally light up.",
  },
  {
    id: 93,
    key: "072",
    image: "/palfinder/images/pals/072.png",
    name: "Polapup",
    wiki: "https://palworld.fandom.com/wiki/Polapup",
    types: [TypesEnum.ICE, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Rider of the Snowy Mountain",
      description: "Can be ridden. Movement Speed is increased by 80% while mounted on snow. Can also slide quickly down slopes.",
    },
    description: "Among Polapups, the fastest slider on the snow earns the highest respect. Sometimes, a too-forceful leap sends one tumbling from the sky— a common sight during territorial season. Forecast: clear skies with a chance of flying Polapups.",
  },
  {
    id: 94,
    key: "072B",
    image: "/palfinder/images/pals/072B.png",
    name: "Polapup Terra",
    wiki: "None",
    types: [TypesEnum.ICE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Leather", "Aquatic Pal Fluids"],
    aura: {
      name: "Snowy Mountain Slider",
      description: "Can be ridden. Movement Speed is increased by 80% while mounted on snow. Can also slide quickly down slopes. While it starts out slow, the top speed it can hit while sliding is no joke.",
    },
    description: "Among Polapup Terras, the fastest slider on the snow earns the highest respect. Sometimes, a too-forceful leap leaves one buried in the snow— a common sight during particularly competitive seasons. Traffic forecast: heavy Polapup Terra congestion.",
  },
  {
    id: 95,
    key: "073",
    image: "/palfinder/images/pals/073.png",
    name: "Leezpunk",
    wiki: "https://palworld.fandom.com/wiki/Leezpunk",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Copper Key", "Silver Key", "Leezpunk Crest"],
    aura: {
      name: "Too Cool to be Seen",
      description: "When activated, Leezpunk and the player become invisible, making them undetectable to enemies for 10/12/14/16/20 seconds. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "A Pal that always takes great care to maintain a stylish stance. Always on the hunt for the coolest poses, if given a mirror it will spend all day posing in front of it.",
  },
  {
    id: 96,
    key: "073B",
    image: "/palfinder/images/pals/073B.png",
    name: "Leezpunk Ignis",
    wiki: "https://palworld.fandom.com/wiki/Leezpunk_Ignis",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Flame Organ", "Silver Key", "Leezpunk Crest"],
    aura: {
      name: "Too Cool to be Seen",
      description: "When activated, Leezpunk Ignis and the player become invisible, making them undetectable to enemies for 10/12/14/16/20 seconds. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "A Pal that has an unusual obsession with their standing posture. Always in search of the hottest pose, this Pal's owner is constantly presented with fervent stances.",
  },
  {
    id: 97,
    key: "074",
    image: "/palfinder/images/pals/074.png",
    name: "Gorirat",
    wiki: "https://palworld.fandom.com/wiki/Gorirat",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Full-Power Gorilla Mode",
      description: "When activated, unleashes a primal fury that increases Gorirat's Attack by 75% for a limited time.",
    },
    description: "It beats the ground rhythmically to communicate with its comrades. The meaning of each rhythm differs by troop, but the distinction between them is still largely unknown.",
  },
  {
    id: 98,
    key: "074B",
    image: "/palfinder/images/pals/074B.png",
    name: "Gorirat Terra",
    wiki: "https://palworld.fandom.com/wiki/Gorirat_Terra",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Ore", "Bone"],
    aura: {
      name: "Full-Power Gorilla Pound",
      description: "While in party, increases the player's climbing speed by 50%. (Does not stack)",
    },
    description: "It beats the ground rhythmically to communicate with its comrades. Stronger than Gorirat, if every Gorirat Terra hit the ground at the same time, the island would sink in 1 second.",
  },
  {
    id: 99,
    key: "075",
    image: "/palfinder/images/pals/075.png",
    name: "Surfent",
    wiki: "https://palworld.fandom.com/wiki/Surfent",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Swift Swimmer",
      description: "Can be ridden to travel on water. Sometimes drops Leather when assigned to Ranch. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Its hydrodynamic form is well suited for activities on water. Poachers often catch them and use them in place of surfboards.",
  },
  {
    id: 100,
    key: "075B",
    image: "/palfinder/images/pals/075B.png",
    name: "Surfent Terra",
    wiki: "https://palworld.fandom.com/wiki/Surfent_Terra",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Ore"],
    aura: {
      name: "Sand Swimmer",
      description: "Can be ridden. While in party, the player's attacks inflict Muddy 2. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Its aerodynamic form is well suited for activities on sand. Poachers often catch them and use them in place of surfboards.",
  },
  {
    id: 101,
    key: "076",
    image: "/palfinder/images/pals/076.png",
    name: "Robinquill",
    wiki: "https://palworld.fandom.com/wiki/Robinquill",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Potato Seeds", "Arrow"],
    aura: {
      name: "Grounded Archer",
      description: "While in party, increases the player's bow damage by 10%. (Does not stack)",
    },
    description: "A Pal that is very similar to humans who hunt and live in the forests. It may prove to be a key for understanding what Pals are and how they diverged from humans in the distant past.",
  },
  {
    id: 102,
    key: "076B",
    image: "/palfinder/images/pals/076B.png",
    name: "Robinquill Terra",
    wiki: "https://palworld.fandom.com/wiki/Robinquill_Terra",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Potato Seeds", "Arrow"],
    aura: {
      name: "Master Archer",
      description: "While in party, increases the player's bow charge speed by 15%. (Does not stack)",
    },
    description: "A Pal that is very similar to humans who hunt and live in the rocky areas. When Robinquill Terra bones are found in ruins, there are always human bones found nearby as well.",
  },
  {
    id: 103,
    key: "077",
    image: "/palfinder/images/pals/077.png",
    name: "Flopie",
    wiki: "https://palworld.fandom.com/wiki/Flopie",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Low Grade Medical Supplies", "Lettuce Seeds"],
    aura: {
      name: "Helper Bunny",
      description: "While in party, appears near the player. Automatically picks up nearby items. Rank 2: (Item Collection Range Up: S) Rank 3: (Item Collection Range Up: M) Rank 4: (Item Collection Range Up: L) Rank 5: (Item Collection Range Up: XL)",
    },
    description: "It prefers places that have an abundance of vegetation, but hay fever has apparently become a problem for Flopie as of late.",
  },
  {
    id: 104,
    key: "078",
    image: "/palfinder/images/pals/078.png",
    name: "Wixen",
    wiki: "https://palworld.fandom.com/wiki/Wixen",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "Advanced Technical Manual"],
    aura: {
      name: "Lord Fox",
      description: "When activated, Wixen changes the player's attack type to Fire and increases Attack by 30%.",
    },
    description: "With the power of light, it produces arcane phenomena. It prefers to eat food well-done and is particularly hostile towards Katress.",
  },
  {
    id: 105,
    key: "078B",
    image: "/palfinder/images/pals/078B.png",
    name: "Wixen Noct",
    wiki: "https://palworld.fandom.com/wiki/Wixen_Noct",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Medium Pal Soul", "Advanced Technical Manual"],
    aura: {
      name: "Black Fox Lord",
      description: "When activated, Wixen Noct changes the player's attack type to Dark and increases Attack by 30%.",
    },
    description: "Due to its upbringing, it no longer cares about whether its food is cooked enough. This Pal stopped worrying about those details, and just prefers its food to be as sweet as possible. Not on good terms with Katress Ignis.",
  },
  {
    id: 106,
    key: "079",
    image: "/palfinder/images/pals/079.png",
    name: "Katress",
    wiki: "https://palworld.fandom.com/wiki/Katress",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Katress Hair", "Advanced Technical Manual"],
    aura: {
      name: "Mystical Black Magic",
      description: "While in party, Neutral Pals drop 40% more items when defeated. Also has a 50% chance to prevent Pal Sphere consumption when thrown. (Does not stack)",
    },
    description: "With the power of shadows, it produces arcane phenomena. It prefers to eat food raw and is particularly hostile towards Wixen.",
  },
  {
    id: 107,
    key: "079B",
    image: "/palfinder/images/pals/079B.png",
    name: "Katress Ignis",
    wiki: "https://palworld.fandom.com/wiki/Katress_Ignis",
    types: [TypesEnum.DARK, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "Katress Hair", "Advanced Technical Manual"],
    aura: {
      name: "Blazing Black Magic",
      description: "While at a base, increases the Kindling Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Due to its upbringing, it no longer cares about whether its food is raw enough. This Pal stopped worrying about those details, and just prefers its food to be as spicy as possible. Not on good terms with Wixen Noct.",
  },
  {
    id: 108,
    key: "080",
    image: "/palfinder/images/pals/080.png",
    name: "Helzephyr",
    wiki: "https://palworld.fandom.com/wiki/Helzephyr",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Venom Gland", "Medium Pal Soul"],
    aura: {
      name: "Wings of Death",
      description: "Can be ridden as a flying mount. While mounted, changes the player’s attack type to Dark and increases Attack by 1%.",
    },
    description: "It calls forth lightning from the depths of hell. Those who dies from Helzephyr's lightning are sure to have their soul sent to the underworld.",
  },
  {
    id: 109,
    key: "080B",
    image: "/palfinder/images/pals/080B.png",
    name: "Helzephyr Lux",
    wiki: "https://palworld.fandom.com/wiki/Helzephyr_Lux",
    types: [TypesEnum.DARK, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Electric Organ", "Medium Pal Soul"],
    aura: {
      name: "Wings of Thunder",
      description: "Can be ridden as a flying mount. While mounted, changes the player’s attack type to Electric and increases Attack by 1%.",
    },
    description: "It calls forth lightning from the depths of hell. While considered a subspecies of Helzephyr, there's a theory that suggests Helzephyr Lux, struck by lightning from hell, will transform into Helzephyr.",
  },
  {
    id: 110,
    key: "081",
    image: "/palfinder/images/pals/081.png",
    name: "Elgrove",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Horn", "Leather"],
    aura: {
      name: "Mother Nature's Menace",
      description: "When activated, Elgrove changes the player's attack type to Grass and increases Attack by 30%.",
    },
    description: "The leaf on its horn cannot be removed, no matter how hard it is pulled. When the leaf falls on its own, Elgrove accepts its time has come.",
  },
  {
    id: 111,
    key: "081B",
    image: "/palfinder/images/pals/081B.png",
    name: "Elgrove Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Horn", "Leather", "Ice Organ"],
    aura: {
      name: "Father Winter's Threat",
      description: "While in party, grants the player the ability to Freeze enemies afflicted with Soak in one strike.",
    },
    description: "Its frozen horn stays solid through its life. When water begins to drip from this ice, Elgrove Cryst feels the chill of its own life slipping away.",
  },
  {
    id: 112,
    key: "082",
    image: "/palfinder/images/pals/082.png",
    name: "Lunaris",
    wiki: "https://palworld.fandom.com/wiki/Lunaris",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Paldium Fragment"],
    aura: {
      name: "Antigravity",
      description: "While in party, spheres home in on Pals, and carrying capacity increases by 300. (Does not stack)",
    },
    description: "It can control those who carelessly stare into its eyes. Those seen with a Lunaris are in its mind, simply under its control.",
  },
  {
    id: 113,
    key: "083",
    image: "/palfinder/images/pals/083.png",
    name: "Fenglope",
    wiki: "https://palworld.fandom.com/wiki/Fenglope",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Leather", "Horn"],
    aura: {
      name: "Wind and Clouds",
      description: "Can be ridden. Can double jump while mounted. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "In ages past, its beautiful visage was a common sight in paintings. As time passed, its beautiful pelt and antlers were often seen in works of art.",
  },
  {
    id: 114,
    key: "083B",
    image: "/palfinder/images/pals/083B.png",
    name: "Fenglope Lux",
    wiki: "None",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
    ],
    drops: ["Leather", "Horn", "Electric Organ"],
    aura: {
      name: "Stormcloud",
      description: "Can be ridden. Can double jump while mounted. While in party, Water Pals drop 40% more items when defeated. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "In ages past, it was believed that drawing a picture of Fenglope Lux would result in being struck down by lightning. As time passes, artworks depicting Fenglope Lux became revered as charms to ward off lightning, making them a common presence.",
  },
  {
    id: 115,
    key: "084",
    image: "/palfinder/images/pals/084.png",
    name: "Dinossom",
    wiki: "https://palworld.fandom.com/wiki/Dinossom",
    types: [TypesEnum.GRASS, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Tomato Seeds", "Lettuce Seeds"],
    aura: {
      name: "Fragrant Dragon",
      description: "Can be ridden. While in party, increase Defense of Dragon Pals by 15%. (Does not stack)",
    },
    description: "A Pal who once angered cannot be pacified. It rages on and on like an inferno. The phrase |step on a Dinossom's tail| has come to mean enraging someone.",
  },
  {
    id: 116,
    key: "084B",
    image: "/palfinder/images/pals/084B.png",
    name: "Dinossom Lux",
    wiki: "https://palworld.fandom.com/wiki/Dinossom_Lux",
    types: [TypesEnum.ELECTRIC, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
    ],
    drops: ["Tomato Seeds", "Carrot Seeds"],
    aura: {
      name: "Thunder Dragon",
      description: "Can be ridden. While in party, increases Defense of Electric Pals by 15%. (Does not stack)",
    },
    description: "Though struck by lightning, it lives on. The phrase |struck by a Dinossom Lux's bolt| has come to mean narrowly escaping death.",
  },
  {
    id: 117,
    key: "085",
    image: "/palfinder/images/pals/085.png",
    name: "Bushi",
    wiki: "https://palworld.fandom.com/wiki/Bushi",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Bone", "Ingot"],
    aura: {
      name: "Brandish Blade",
      description: "When activated, attacks targeted enemy with Iaigiri. When this Pal uses Iaigiri, it has a x1.1/1.3/1.6/2/2.5 damage multiplier.",
    },
    description: "Its body becomes a blade upon death, to be taken up by the next generation. If someone other than a Bushi wields this blade, the soul within torments them until they are driven mad.",
  },
  {
    id: 118,
    key: "085B",
    image: "/palfinder/images/pals/085B.png",
    name: "Bushi Noct",
    wiki: "https://palworld.fandom.com/wiki/Bushi_Noct",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "Ingot", "Medium Pal Soul"],
    aura: {
      name: "Void Blade",
      description: "When activated, attacks targeted enemy with Iaigiri. When this Pal uses Iaigiri, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. While in party, increases the player's melee weapon damage by 30% but only when not in combat. (Does not stack)",
    },
    description: "Its body becomes a blade upon death, to be taken up by the next generation. If the Bushi who inherits it has a weak heart, the voices of the dead will drive it mad. The madness turns it into Bushi Noct that endlessly wanders.",
  },
  {
    id: 119,
    key: "086",
    image: "/palfinder/images/pals/086.png",
    name: "Munchill",
    wiki: "https://palworld.fandom.com/wiki/Munchill",
    types: [TypesEnum.ICE, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Munchill Meat", "Aquatic Pal Fluids", "Ice Organ"],
    aura: {
      name: "Icy Maw",
      description: "While in party, reduces the weight of ingredient and food by 30%. When paired with another Ice Pal, their Rot Speed also reduces by 35%. (Does not stack)",
    },
    description: "The inside of its mouth stays pleasantly cold, making it a natural fridge when closed. Its saliva contains enzymes that prevent food from rotting. Thus, it can serve as a food locker for humans— whether it is sanitary or not is another matter entirely.",
  },
  {
    id: 120,
    key: "087",
    image: "/palfinder/images/pals/087.png",
    name: "Mammorest",
    wiki: "https://palworld.fandom.com/wiki/Mammorest",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["High Quality Pal Oil", "Leather", "Mammorest Meat"],
    aura: {
      name: "Gaia Crusher",
      description: "Can be ridden. While mounted, increases logging efficiency by 220% and mining efficiency by 260%.",
    },
    description: "The vegetation on its back varies between individuals. There is a long history of appreciating this veritable garden of a Pal, and there are even Mammorest pruning specialists.",
  },
  {
    id: 121,
    key: "087B",
    image: "/palfinder/images/pals/087B.png",
    name: "Mammorest Cryst",
    wiki: "https://palworld.fandom.com/wiki/Mammorest_Cryst",
    types: [TypesEnum.ICE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
    ],
    drops: ["High Quality Pal Oil", "Leather", "Mammorest Meat"],
    aura: {
      name: "Ice Crusher",
      description: "Can be ridden. While mounted, increases logging efficiency by 220% and mining efficiency by 260%.",
    },
    description: "The vegetation on its back varies between individuals. There was a time when seeds of presumed extinct plants were found still frozen on the back of a Mammorest Cryst.",
  },
  {
    id: 122,
    key: "088",
    image: "/palfinder/images/pals/088.png",
    name: "Finsider",
    wiki: "https://palworld.fandom.com/wiki/Finsider",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Small Pal Soul", "Aquatic Pal Fluids"],
    aura: {
      name: "Water Gun",
      description: "When activated, Finsider changes the player's attack type to Water and increases Attack by 30%.",
    },
    description: "It looks like something is peeking out from inside a costume, but even if you reach inside, there’s nothing there. In fact, you can keep reaching deeper and deeper. Perhaps the universe itself lies within.",
  },
  {
    id: 123,
    key: "088B",
    image: "/palfinder/images/pals/088B.png",
    name: "Finsider Ignis",
    wiki: "https://palworld.fandom.com/wiki/Finsider_Ignis",
    types: [TypesEnum.WATER, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather", "Small Pal Soul", "Flame Organ"],
    aura: {
      name: "Ember Chamber",
      description: "While in party, Finsider Ignis helps carry supplies, reducing the weight of weapons in your inventory by 60%. Also improves player's and Pals' Fire damage to enemy weak points by 70%. (Does not stack)",
    },
    description: "Even if you reach into its mouth, there’s nothing inside—it just keeps going. Thinking it might be an interdimensional space, one researcher tried climbing in like a sleeping bag. But when the gag reflex kicked in, they realized... it’s definitely part of the creature’s body.",
  },
  {
    id: 124,
    key: "089",
    image: "/palfinder/images/pals/089.png",
    name: "Petallia",
    wiki: "https://palworld.fandom.com/wiki/Petallia",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Beautiful Flower", "Potato Seeds"],
    aura: {
      name: "Blessing of the Flower Spirit",
      description: "When activated, soothing blossoms restore the player's Health by 75/77/79/82/85%. While at a base, increases the Planting Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "A Pal that transforms into a massive plant when at the end of its life. Once every ten years, a beautiful flower blooms and a new Petallia is born.",
  },
  {
    id: 125,
    key: "089B",
    image: "/palfinder/images/pals/089B.png",
    name: "Petallia Ignis",
    wiki: "None",
    types: [TypesEnum.GRASS, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Beautiful Flower", "Flame Organ"],
    aura: {
      name: "Passion of the Flower Spirit",
      description: "When activated, soothing blossoms restore the player's Health by 80/82/84/86/90%. While in party, player and party Pals take 15% less Grass damage, and are immune to Ivy-Covered. (Does not stack)",
    },
    description: "A Pal that burns away into a pile of ash upon the end of its life. The surrounding soil becomes incredibly fertile, allowing an abundance of vegetation to thrive for the following decade.",
  },
  {
    id: 126,
    key: "090",
    image: "/palfinder/images/pals/090.png",
    name: "Leafan",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Selfless Discipline",
      description: "This Pal's Attack and Defense increase by 2% for each other Grass Pal in your party.",
    },
    description: "To hone the martial art passed down through a single bloodline: Daily training is the only way! Being distracted by romance? Unthinkable! Daily discipline is the only way! The time has come! Shoot my shot! Instant rejection, that’s all there is! The techniques of love were never passed down... Lingering regret, that’s all there is!",
  },
  {
    id: 127,
    key: "091",
    image: "/palfinder/images/pals/091.png",
    name: "Incineram",
    wiki: "https://palworld.fandom.com/wiki/Incineram",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Horn", "Leather"],
    aura: {
      name: "Flameclaw Hunter",
      description: "When activated, attacks the targeted enemy with Hellfire Claw. When this Pal uses Hellfire Claw, it has a x1.1/1.3/1.6/2/2.5 damage multiplier.",
    },
    description: "In the dark of night, this Pal snatches prey to bring back to its territory. What happens to those poor souls afterwards isn't too hard to imagine.",
  },
  {
    id: 128,
    key: "091B",
    image: "/palfinder/images/pals/091B.png",
    name: "Incineram Noct",
    wiki: "https://palworld.fandom.com/wiki/Incineram_Noct",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Horn", "Leather"],
    aura: {
      name: "Darkclaw Hunter",
      description: "When activated, attacks the targeted enemy with Nightmare Claw. When this Pal uses Nightmare Claw, it has a x1.1/1.3/1.6/2/2.5 damage multiplier.",
    },
    description: "It specifically targets baby Pals, taking them back to its domain. One can only imagine the profound despair of a parent whose child has been taken away.",
  },
  {
    id: 129,
    key: "092",
    image: "/palfinder/images/pals/092.png",
    name: "Dazzi",
    wiki: "https://palworld.fandom.com/wiki/Dazzi",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Electric Organ", "Dazzi Cloud"],
    aura: {
      name: "Lady of Lightning",
      description: "While in party, appears near the player. Attacks hostile enemies with Electric bolts. These bolts will not reduce the target's Health below 1. Rank 2: (Follow-Up Boost: S) Rank 3: (Follow-Up Boost: M) Rank 4: (Follow-Up Boost: L) Rank 5: (Follow-Up Boost: XL)",
    },
    description: "Often kind to lonely Pals. However, the moment a Pal mistakes this for actual friendship, it seizes the opportunity to blast them with a thunderbolt.",
  },
  {
    id: 130,
    key: "092B",
    image: "/palfinder/images/pals/092B.png",
    name: "Dazzi Noct",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Electric Organ", "Dazzi Cloud", "Dark Fragment"],
    aura: {
      name: "Lady of Dark Lightning",
      description: "While in party, appears near the player. Attacks hostile enemies with Dark bolts. These bolts will not reduce the target's Health below 1. Rank 2: (Follow-Up Boost: S) Rank 3: (Follow-Up Boost: M) Rank 4: (Follow-Up Boost: L) Rank 5: (Follow-Up Boost: XL)",
    },
    description: "Often kind to lonely Pals, it plots to lure them into dropping their guard before striking them down. Yet, unable to find the right moment, it ends up making friends with them instead.",
  },
  {
    id: 131,
    key: "093",
    image: "/palfinder/images/pals/093.png",
    name: "Pyrin",
    wiki: "https://palworld.fandom.com/wiki/Pyrin",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Red Hare",
      description: "Can be ridden. While mounted, changes the player’s attack type to Fire and increases Attack by 1%.",
    },
    description: "Its entire body has evolved into a highly efficient radiator, gifting it with astounding stamina. If someone rides it, this Pal takes caution not to burn them.",
  },
  {
    id: 132,
    key: "093B",
    image: "/palfinder/images/pals/093B.png",
    name: "Pyrin Noct",
    wiki: "https://palworld.fandom.com/wiki/Pyrin_Noct",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Black Hare",
      description: "Can be ridden. While mounted, changes the player’s attack type toDark and increases Attack by 1%.",
    },
    description: "It burns mysterious dark matter as energy and expels the remaining particles from its body. If someone rides it, they should take care so as not to gallop down the path of darkness.",
  },
  {
    id: 133,
    key: "094",
    image: "/palfinder/images/pals/094.png",
    name: "Relaxaurus",
    wiki: "https://palworld.fandom.com/wiki/Relaxaurus",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["High Quality Pal Oil", "Ruby"],
    aura: {
      name: "Hungry Missile",
      description: "Can be ridden. Can rapidly fire a missile launcher while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Contrary to its blasé appearance, it's quite ferocious. It perceives everything in its sight as prey and will stop at nothing to devour it.",
  },
  {
    id: 134,
    key: "094B",
    image: "/palfinder/images/pals/094B.png",
    name: "Relaxaurus Lux",
    wiki: "https://palworld.fandom.com/wiki/Relaxaurus_Lux",
    types: [TypesEnum.DRAGON, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["High Quality Pal Oil", "Electric Organ", "Sapphire"],
    aura: {
      name: "Missile Party",
      description: "Can be ridden. Can rapidly fire a missile launcher while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "One day, Relaxaurus had an idea. Maybe it was about time for a change. Just then, an electric shock raced through its body!",
  },
  {
    id: 135,
    key: "095",
    image: "/palfinder/images/pals/095.png",
    name: "Foxcicle",
    wiki: "https://palworld.fandom.com/wiki/Foxcicle",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 3,
      },
    ],
    drops: ["Leather", "Ice Organ"],
    aura: {
      name: "Aurora Guide",
      description: "While in party, increases Attack of Ice Pals by 15%. (Does not stack) Sometimes drops Ice Organ when assigned to Ranch.",
    },
    description: "On nights when the aurora is visible, it looks up towards the sky and begins to howl a beautiful song. This does, however, leave it vulnerable to attacks from enemies.",
  },
  {
    id: 136,
    key: "096",
    image: "/palfinder/images/pals/096.png",
    name: "Beakon",
    wiki: "https://palworld.fandom.com/wiki/Beakon",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Thunderous",
      description: "Can be ridden as a flying mount. While mounted, changes the player's attack type to Electric and increases Attack by 13%. This Pal’s Movement Speed increases by 5% for each other Electric Pal in your party. (Excluding Beakon)",
    },
    description: "Some think it is a related species to Ragnahawk, but there is in fact no connection. Using its sharp beak, it descends on its prey in a quick motion that resembles a bolt of lightning.",
  },
  {
    id: 137,
    key: "096B",
    image: "/palfinder/images/pals/096B.png",
    name: "Beakon Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Coldsnap",
      description: "Can be ridden as a flying mount. While mounted, changes the player's attack type to Ice and increases Attack by 13%. This Pal’s Movement Speed increases by 5% for each other Ice Pal in your party. (Excluding Beakon Cryst)",
    },
    description: "Perfectly adapted to colder environments, it hardly feels the cold despite its slender form. Its diving plunge carries tremendous force, as if a giant icicle were dropping straight from the sky.",
  },
  {
    id: 138,
    key: "097",
    image: "/palfinder/images/pals/097.png",
    name: "Ghangler",
    wiki: "https://palworld.fandom.com/wiki/Ghangler",
    types: [TypesEnum.DARK, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Bone", "Venom Gland"],
    aura: {
      name: "Master of Darkness",
      description: "Can be ridden to travel on water. This Pal’s Movement Speed increases by 5% for each other Dark or Water Pal in your party. (Excluding Ghangler)",
    },
    description: "With its shining lure, it illuminates the darkness. The wandering Pals drawn in by the light stand no chance of escape once spotted by <characterName id=|GhostAnglerFish|/>. No matter how far, it will keep guiding them until they get home safe and sound.",
  },
  {
    id: 139,
    key: "097B",
    image: "/palfinder/images/pals/097B.png",
    name: "Ghangler Ignis",
    wiki: "https://palworld.fandom.com/wiki/Ghangler_Ignis",
    types: [TypesEnum.FIRE, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Bone", "Flame Organ"],
    aura: {
      name: "Abyssal Celebrity Chef",
      description: "Can be ridden to travel on water. This Pal’s Movement Speed increases by 5% for each other Fire or Water Pal in your party. (Excluding Ghangler Ignis)",
    },
    description: "Its blazing lure doubles as a grill for roasting prey. Drawn in by the delicious aroma, Pals have no hope of escape once Ghangler Ignis sets its sights on them. In the end, they’re treated to a hearty meal—until everyone’s full.",
  },
  {
    id: 140,
    key: "098",
    image: "/palfinder/images/pals/098.png",
    name: "Rayhound",
    wiki: "https://palworld.fandom.com/wiki/Rayhound",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Lightning Shepherd",
      description: "Can be ridden. Can perform a double jump while mounted. This Pal’s Movement Speed increases by 5% for each other Electric Pal in your party. (Excluding Rayhound)",
    },
    description: "At full speed, it could be mistaken for a bolt of lightning. When two Rayhounds collide, a thunderous roar echoes through the air.",
  },
  {
    id: 141,
    key: "098B",
    image: "/palfinder/images/pals/098B.png",
    name: "Rayhound Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Snow Shepherd",
      description: "Can be ridden. Can perform a double jump while mounted. While in party, increases Defense of Ice Pals by 15%. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Sprinting across the tundra at full speed kicks up a blinding blizzard, leading to constant Rayhound Cryst collisions due to zero visibility.",
  },
  {
    id: 142,
    key: "099",
    image: "/palfinder/images/pals/099.png",
    name: "Menasting",
    wiki: "https://palworld.fandom.com/wiki/Menasting",
    types: [TypesEnum.DARK, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
    ],
    drops: ["Medium Pal Soul", "Venom Gland"],
    aura: {
      name: "Steel Scorpion",
      description: "While in party, player's Defense increases by 50%, and Electric Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "Being made of pure energy, its insides are completely hollow. This Pal crams still-living prey into its hollow body, where it absorbs them. Hellish screams of pain can often be heard coming from inside this Pal.",
  },
  {
    id: 143,
    key: "099B",
    image: "/palfinder/images/pals/099B.png",
    name: "Menasting Terra",
    wiki: "https://palworld.fandom.com/wiki/Menasting_Terra",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
    ],
    drops: ["Medium Pal Soul", "Sapphire"],
    aura: {
      name: "Golden Scorpion",
      description: "While in party, player's Defense increases by 50%, and Electric Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "Being made of pure energy, its insides are completely hollow. It stuffs earth and minerals into its outer shell, achieving overwhelming mass. Those who are struck by it can only let out hellish groans.",
  },
  {
    id: 144,
    key: "100",
    image: "/palfinder/images/pals/100.png",
    name: "Needoll",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Fiber"],
    aura: {
      name: "Hug Me Please",
      description: "While in party, increases player's and Pals' damage to enemies afflicted with Ivy-Covered by 50%. (Does not stack)",
    },
    description: "Its spikes react to its emotions. A dearly cherished Needoll is something one may instinctively want to embrace. But more often than not, it ends in a tragic accident.",
  },
  {
    id: 145,
    key: "100B",
    image: "/palfinder/images/pals/100B.png",
    name: "Needoll Noct",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Fiber", "Venom Gland"],
    aura: {
      name: "Hug You So Much",
      description: "While in party, the player's attacks inflict Ivy-Covered 2. (Does not stack)",
    },
    description: "Its spikes react to its emotions. A well-loved Needoll Noct clings to its owner, but accepting that love means accepting the pain too.",
  },
  {
    id: 146,
    key: "101",
    image: "/palfinder/images/pals/101.png",
    name: "Reindrix",
    wiki: "https://palworld.fandom.com/wiki/Reindrix",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
    ],
    drops: ["Reindrix Venison", "Leather", "Horn", "Ice Organ"],
    aura: {
      name: "Cool Body",
      description: "Can be ridden. While in party, the player gains Heat Resistance +2. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Its transparent cerulean antlers glow with the cold of absolute zero. Any who touch them with their bare hands are instantly frozen and smashed to pieces.",
  },
  {
    id: 147,
    key: "102",
    image: "/palfinder/images/pals/102.png",
    name: "Mossanda",
    wiki: "https://palworld.fandom.com/wiki/Mossanda",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Hardwood", "Leather", "Carrot Seeds"],
    aura: {
      name: "Grenadier Panda",
      description: "Can be ridden. Can rapidly fire a grenade launcher while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "A Pal so powerful it's hard to believe. In one experiment, this Pal tore through 3,000 sheets of paper at once! It's only by some miracle that this Pal isn't a meat-eater.",
  },
  {
    id: 148,
    key: "102B",
    image: "/palfinder/images/pals/102B.png",
    name: "Mossanda Lux",
    wiki: "https://palworld.fandom.com/wiki/Mossanda_Lux",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Hardwood", "Electric Organ", "Leather"],
    aura: {
      name: "Grenadier Panda",
      description: "Can be ridden. Can rapidly fire a grenade launcher while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "A Pal whose power is truly shocking. By altering the electrical currents in its body, this Pal's been able to overload its own strength. When it comes to sheer power, this Pal may be top of the list.",
  },
  {
    id: 149,
    key: "103",
    image: "/palfinder/images/pals/103.png",
    name: "Chillet",
    wiki: "https://palworld.fandom.com/wiki/Chillet",
    types: [TypesEnum.ICE, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Leather", "Ice Organ"],
    aura: {
      name: "Wriggling Weasel",
      description: "Can be ridden. While mounted, changes the player’s attack type to Dragon and increases Attack by 1%.",
    },
    description: "It can curl up its body and roll around at extremely high speeds. Long ago, people would tie bags of milk to domesticated Chillet as they grazed to produce butter using this spinning force.",
  },
  {
    id: 150,
    key: "103B",
    image: "/palfinder/images/pals/103B.png",
    name: "Chillet Ignis",
    wiki: "https://palworld.fandom.com/wiki/Chillet_Ignis",
    types: [TypesEnum.FIRE, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Sparkling Weasel",
      description: "Can be ridden. While mounted, changes the player’s attack type to Fire and increases Attack by 1%.",
    },
    description: "It can curl up its body and roll around so fast that sparks fly. Sparks also fly when it feels excited. If you stroke it too much, this pal will get fired up, literally!",
  },
  {
    id: 151,
    key: "104",
    image: "/palfinder/images/pals/104.png",
    name: "Ragnahawk",
    wiki: "https://palworld.fandom.com/wiki/Ragnahawk",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Flame Wing",
      description: "Can be ridden as a flying mount. While mounted, changes the player’s attack type to Fire and increases Attack by 1%.",
    },
    description: "Some think it is a related species to Beakon, but there is in fact no connection. It mainly eats rocks, and after many long years its beak and head have hardened to accommodate this diet.",
  },
  {
    id: 152,
    key: "105",
    image: "/palfinder/images/pals/105.png",
    name: "Moldron",
    wiki: "None",
    types: [TypesEnum.FIRE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Magma Overload",
      description: "Can be ridden as a mount. This Pal's Attack increases by 4% for each other Fire or Ground Pal in your party.",
    },
    description: "In a healthy individual, the lava on its back flows smoothly. However, a poor lifestyle will gradually worsen its circulation, eventually causing a lava clog that results in a sudden, massive explosion.",
  },
  {
    id: 153,
    key: "105B",
    image: "/palfinder/images/pals/105B.png",
    name: "Moldron Cryst",
    wiki: "None",
    types: [TypesEnum.ICE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
    ],
    drops: ["Ice Organ", "Leather"],
    aura: {
      name: "Ice Overload",
      description: "Can be ridden. While in party, improves player's and Pals' Ice damage to enemy weak points by 25%. (Does not stack)",
    },
    description: "In a healthy individual, the substance flowing along its back maintains a stable temperature. However, if its heartbeat quickens, the temperature destabilizes, eventually triggering vaporization or crystallization that results in a sudden, abrupt death from shock.",
  },
  {
    id: 154,
    key: "106",
    image: "/palfinder/images/pals/106.png",
    name: "Palumba",
    wiki: "https://palworld.fandom.com/wiki/Palumba",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
    ],
    drops: ["Hardwood", "Onion Seeds", "Carrot Seeds"],
    aura: {
      name: "Samba Step",
      description: "Can be ridden. Movement Speed is increased by 155% while mounted on grass.",
    },
    description: "Disrupts enemies’ rhythm with a signature dance. In turf battles, the first to fall in sync with the other’s rhythm loses. Courtship, boredom, battle—it all comes down to dance! Now then, what could a dance aimed at a human possibly mean?",
  },
  {
    id: 155,
    key: "107",
    image: "/palfinder/images/pals/107.png",
    name: "Digtoise",
    wiki: "https://palworld.fandom.com/wiki/Digtoise",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Predator Core", "Giant Pal Soul", "Ore", "High Quality Pal Oil"],
    aura: {
      name: "Drill Crusher",
      description: "When activated, enters the Shell Spin state. Follows the player while spinning, increasing ore mining efficiency by 800%.",
    },
    description: "A Digtoise possessing the strongest shell and the only drill capable of piercing it, ponders the contradictions of the world in the popular children's tale, |Digtoise's Fable|.",
  },
  {
    id: 156,
    key: "108",
    image: "/palfinder/images/pals/108.png",
    name: "Broncherry",
    wiki: "https://palworld.fandom.com/wiki/Broncherry",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 5,
      },
    ],
    drops: ["Broncherry Meat", "Onion Seeds"],
    aura: {
      name: "Love's First Blossom",
      description: "Can be ridden. While in party, Pal Eggs you pick up have a 35% chance of becoming an Alpha Pal Egg. (Does not stack)",
    },
    description: "Its scent drastically changes before and after pairing. It exudes a pleasing aroma after finding a partner, which is called the |Fragrance of First Love.|",
  },
  {
    id: 157,
    key: "108B",
    image: "/palfinder/images/pals/108B.png",
    name: "Broncherry Aqua",
    wiki: "https://palworld.fandom.com/wiki/Broncherry_Aqua",
    types: [TypesEnum.GRASS, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 5,
      },
    ],
    drops: ["Broncherry Meat", "Onion Seeds"],
    aura: {
      name: "Purity's Full Bloom",
      description: "Can be ridden. While in party, Pal Eggs you pick up have a 45% chance of becoming an Alpha Pal Egg. (Does not stack)",
    },
    description: "Its scent drastically changes before and after pairing. It exudes a pleasing aroma before finding a partner, which is called the |Perfume of Purity.|",
  },
  {
    id: 158,
    key: "109",
    image: "/palfinder/images/pals/109.png",
    name: "Dumud",
    wiki: "https://palworld.fandom.com/wiki/Dumud",
    types: [TypesEnum.GROUND, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 1,
      },
    ],
    drops: ["Raw Dumud", "High Quality Pal Oil"],
    aura: {
      name: "Soil Improver",
      description: "While in party, increases Attack of Ground Pals by 15%. (Does not stack) Sometimes drops High Quality Pal Oil when assigned to Ranch.",
    },
    description: "When too relaxed, its reaction time drastically declines. Even if it were sliced from head to tail, it probably wouldn't even realize that it should be dead until the next morning.",
  },
  {
    id: 159,
    key: "109B",
    image: "/palfinder/images/pals/109B.png",
    name: "Dumud Gild",
    wiki: "https://palworld.fandom.com/wiki/Dumud_Gild",
    types: [TypesEnum.GROUND, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 4,
      },
    ],
    drops: ["Raw Dumud", "High Quality Pal Oil", "Gold Coin"],
    aura: {
      name: "Golden Harvest",
      description: "While in party, increases amount of Gold Coin dropped by enemies by +100%. Sometimes drops High Quality Pal Oil when assigned to Ranch, with a small chance to drop Gold Coin. (Does not stack)",
    },
    description: "Its body reflects light with astounding clarity. Even more shocking, its reflexes are somehow even slower than Dumud.",
  },
  {
    id: 160,
    key: "110",
    image: "/palfinder/images/pals/110.png",
    name: "Braloha",
    wiki: "https://palworld.fandom.com/wiki/Braloha",
    types: [TypesEnum.GRASS, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
    ],
    drops: ["Leather", "Red Berries", "Lettuce Seeds", "Tomato Seeds"],
    aura: {
      name: "Balmy Weather",
      description: "Can be ridden. While in your base, increases the egg production speed of Pals assigned to Breeding Farm by 20%. (Does not stack)",
    },
    description: "Its breath carries a miraculous, pollen-like substance that pollinates any plant it touches. For plant-based Pals, being near it can be a bit… complicated.",
  },
  {
    id: 161,
    key: "111",
    image: "/palfinder/images/pals/111.png",
    name: "Kitsun",
    wiki: "https://palworld.fandom.com/wiki/Kitsun",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
    ],
    drops: ["Flame Organ", "Leather"],
    aura: {
      name: "Wolf of the Sun",
      description: "Can be ridden. While in party, player and party Pals take 15% less Ice damage and are immune to Freeze. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Despite its appearance, Kitsun is extremely sensitive and will flee into a cave when spooked. Long ago, it was considered an ill omen if one ran away from you.",
  },
  {
    id: 162,
    key: "111B",
    image: "/palfinder/images/pals/111B.png",
    name: "Kitsun Noct",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
    ],
    drops: ["Flame Organ", "Leather", "Dark Fragment"],
    aura: {
      name: "Gloomhowl",
      description: "Can be ridden. While in party, player and party Pals take 15% less Dark damage and are immune to Blind. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Despite its appearance, Kitsun Noct is extremely sensitive and will flee into a cave when spooked. It has become quite gloomy from being a shut-in for too long.",
  },
  {
    id: 163,
    key: "112",
    image: "/palfinder/images/pals/112.png",
    name: "Blazehowl",
    wiki: "https://palworld.fandom.com/wiki/Blazehowl",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Hellflame Lion",
      description: "Can be ridden. While in party, Grass Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "While it prefers raw meat, it always ends up eating well-done meat. This is due to its blistering claws, which it uses as its weapon—it simply doesn't realize its prey gets burned to a crisp.",
  },
  {
    id: 164,
    key: "112B",
    image: "/palfinder/images/pals/112B.png",
    name: "Blazehowl Noct",
    wiki: "https://palworld.fandom.com/wiki/Blazehowl_Noct",
    types: [TypesEnum.FIRE, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Darkflame Lion",
      description: "Can be ridden. While in party, Neutral Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "While it prefers raw meat, it always ends up eating tainted meat. This is due to its dark claws, which it uses as its weapon—it simply doesn't realize its prey gets cursed.",
  },
  {
    id: 165,
    key: "113",
    image: "/palfinder/images/pals/113.png",
    name: "Warsect",
    wiki: "https://palworld.fandom.com/wiki/Warsect",
    types: [TypesEnum.GROUND, TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Honey"],
    aura: {
      name: "Cast-Iron Shell",
      description: "While in your party, generates a barrier around the player after 5 melee hits are landed within 5 seconds. (Does not stack)",
    },
    description: "The ultra-hard armor surrounding its body is extremely strong and heat resistant. Even a napalm blast would hardly leave a scratch.",
  },
  {
    id: 166,
    key: "114",
    image: "/palfinder/images/pals/114.png",
    name: "Frostplume",
    wiki: "https://palworld.fandom.com/wiki/Frostplume",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Peacock Pounce",
      description: "While in party, Frostplume's icy aura sharpens focus, increasing the player's reload speeds by 20%. (Does not stack)",
    },
    description: "So precise is its sense of time that it awakens at the exact same hour every morning. According to Palpagos lore, a day was divided into 24 parts because when Frostplume spreads its tail feathers wide, it reveals a pattern with 24 distinct spaces.",
  },
  {
    id: 167,
    key: "115",
    image: "/palfinder/images/pals/115.png",
    name: "Majex",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Phantasmal Arcana",
      description: "While in party, when the player attacks an enemy afflicted with Burn, the enemy creates flames around itself, dealing continuous damage equal to 15% of the player's attack damage to enemies that come into contact with them. (Does not stack.)",
    },
    description: "It appears to be striking a heroic pose, but the reality is that it's simply bracing itself against the weight of its tail and hair to avoid toppling over.",
  },
  {
    id: 168,
    key: "116",
    image: "/palfinder/images/pals/116.png",
    name: "Sibelyx",
    wiki: "https://palworld.fandom.com/wiki/Sibelyx",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 3,
      },
    ],
    drops: ["High Quality Cloth", "Ice Organ"],
    aura: {
      name: "Silk Shroud",
      description: "When activated, attacks targeted enemy with Blizzard Spike. When this Pal uses Blizzard Spike, it has a x1.1/1.3/1.6/2/2.5 damage multiplier. Sometimes makes High Quality Cloth when assigned to Ranch.",
    },
    description: "A Pal that likes the rain, and will often bask in rain showers until the weather clears up. On rainy days, Foxparks can often be found taking shelter beneath it.",
  },
  {
    id: 169,
    key: "116B",
    image: "/palfinder/images/pals/116B.png",
    name: "Sibelyx Primo",
    wiki: "None",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 4,
      },
    ],
    drops: ["High Quality Cloth", "High Quality Pal Oil"],
    aura: {
      name: "Gilded Shroud",
      description: "While in party, increases Defense of Neutral Pals by 15%. (Does not stack) Sometimes makes High Quality Cloth when assigned to Ranch.",
    },
    description: "A Pal that loves gazing into the void, and will often remain completely still. It frequently becomes a gathering spot for smaller Pals.",
  },
  {
    id: 170,
    key: "117",
    image: "/palfinder/images/pals/117.png",
    name: "Maraith",
    wiki: "https://palworld.fandom.com/wiki/Maraith",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Bone", "Small Pal Soul", "Crude Oil"],
    aura: {
      name: "Messenger of Death",
      description: "Can be ridden. While in party, all Party Pals' Active Skill cooldowns are reduced by 30% whenever you defeat an enemy. (Does not stack)",
    },
    description: "It relishes the peculiar scent living things give off when they are near death. If a Maraith has taken a liking to you, it is safe to assume that is why.",
  },
  {
    id: 171,
    key: "118",
    image: "/palfinder/images/pals/118.png",
    name: "Shroomer",
    wiki: "https://palworld.fandom.com/wiki/Shroomer",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 3,
      },
    ],
    drops: ["Mushroom", "Red Berries"],
    aura: {
      name: "Rampant Spores",
      description: "Can be ridden. Sometimes drops Mushroom or Cavern Mushroom when assigned to Ranch.",
    },
    description: "Inhaling large amounts of its spores will put you into a trance. Sometimes, if Shroomer appears motionless, it's not because it's mimicking a mushroom, but rather because it's high off its own spores.",
  },
  {
    id: 172,
    key: "118B",
    image: "/palfinder/images/pals/118B.png",
    name: "Shroomer Noct",
    wiki: "https://palworld.fandom.com/wiki/Shroomer_Noct",
    types: [TypesEnum.GRASS, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
    ],
    drops: ["Venom Gland", "Mysterious Mushroom"],
    aura: {
      name: "Roiling Spores",
      description: "Can be ridden. While at a base, its mysterious spores slow the rate at which the SAN value of allies at the base decreases by 10%.",
    },
    description: "The abundance of spores released by this Pal blocks out sunlight. Sometimes, if Shroomer Noct appears motionless, it's not because it's mimicking a mushroom, but rather because its own spores don't let it see anything.",
  },
  {
    id: 173,
    key: "119",
    image: "/palfinder/images/pals/119.png",
    name: "Icelyn",
    wiki: "https://palworld.fandom.com/wiki/Icelyn",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Witch's Icy Veil",
      description: "When activated, Icelyn changes the player's attack type to Ice and increases Attack by 30%.",
    },
    description: "Though its body melts in the heat, it just can’t resist sunbathing. Though its body melts in the warmth, it likes hot springs too much. If it's going to melt anyway, it hopes it’ll be in a steaming outdoor bath under a clear blue sky.",
  },
  {
    id: 174,
    key: "120",
    image: "/palfinder/images/pals/120.png",
    name: "Gildra",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Cloth", "Leather"],
    aura: {
      name: "Resurrection",
      description: "While fighting together, when Gildra is incapacitated, it revives with its Hunger reduced to 0. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "The golden, bandage-like organs covering its body are highly elastic. However, they are prone to tearing under extremely dry conditions, so daily moisture checks are absolutely essential.",
  },
  {
    id: 175,
    key: "121",
    image: "/palfinder/images/pals/121.png",
    name: "Jormuntide",
    wiki: "https://palworld.fandom.com/wiki/Jormuntide",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 7,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Stormbringer Sea Dragon",
      description: "Can be ridden to travel on water. While in party, increases player's and Pals' damage to enemies afflicted with Soak by 50%. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Legend says the Jormuntide was once a wise man who, after being wrongly convicted and cast into a whirlpool, returned as this Pal to annihilate the kingdom.",
  },
  {
    id: 176,
    key: "121B",
    image: "/palfinder/images/pals/121B.png",
    name: "Jormuntide Ignis",
    wiki: "https://palworld.fandom.com/wiki/Jormuntide_Ignis",
    types: [TypesEnum.DRAGON, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 7,
      },
    ],
    drops: ["High Quality Pal Oil", "Flame Organ"],
    aura: {
      name: "Stormbringer Lava Dragon",
      description: "Can be ridden. While in party, nullifies lava damage and increases player's and Pals' damage to enemies afflicted with Burn by 50%. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Legend says the Jormuntide Ignis was once a warrior who, after being wrongly convicted and cast into a volcano, returned as this Pal to annihilate the kingdom.",
  },
  {
    id: 177,
    key: "122",
    image: "/palfinder/images/pals/122.png",
    name: "Suzaku",
    wiki: "https://palworld.fandom.com/wiki/Suzaku",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Wings of Flame",
      description: "Can be ridden as a flying mount. This Pal’s Movement Speed increases by 5% for each other Fire Pal in your party. (Excluding Suzaku)",
    },
    description: "It was once believed to usher in the dry season. Whenever there was a drought the previous year, people would relentlessly seek to cull its numbers, hoping to bring about a plentiful harvest in the next year.",
  },
  {
    id: 178,
    key: "122B",
    image: "/palfinder/images/pals/122B.png",
    name: "Suzaku Aqua",
    wiki: "https://palworld.fandom.com/wiki/Suzaku_Aqua",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 6,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Wings of Water",
      description: "Can be ridden as a flying mount. This Pal’s Movement Speed increases by 5% for each other Water Pal in your party. (Excluding Suzaku Aqua)",
    },
    description: "It was once believed to usher in the rainy season. Whenever there was a flood the previous year, people would relentlessly seek to cull its numbers, hoping to avert disaster in the coming year.",
  },
  {
    id: 179,
    key: "123",
    image: "/palfinder/images/pals/123.png",
    name: "Dazemu",
    wiki: "https://palworld.fandom.com/wiki/Dazemu",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Sand Sprint",
      description: "Can be ridden. Movement Speed is increased by 50% while mounted on sand.",
    },
    description: "Take one step forward and forget your doubts. Take two steps forward and forget your worries. Take three steps forward and forget your fears. Face any enemy.",
  },
  {
    id: 180,
    key: "124",
    image: "/palfinder/images/pals/124.png",
    name: "Quivern",
    wiki: "https://palworld.fandom.com/wiki/Quivern",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["High Quality Pal Oil"],
    aura: {
      name: "Sky Dragon Affection",
      description: "Can be ridden as a flying mount. While in party, increases Attack of Dragon Pals by 15%. (Does not stack)",
    },
    description: "Sleeping while cuddling a Quivern is said to be a heavenly experience, but there are some who have been crushed and sent to heaven by ones that toss and turn in their sleep.",
  },
  {
    id: 181,
    key: "124B",
    image: "/palfinder/images/pals/124B.png",
    name: "Quivern Botan",
    wiki: "https://palworld.fandom.com/wiki/Quivern_Botan",
    types: [TypesEnum.DRAGON, TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["High Quality Pal Oil", "Beautiful Flower", "Red Berries"],
    aura: {
      name: "Grass Dragon Affection",
      description: "Can be ridden as a flying mount. While mounted, changes the player’s attack type to Grass and increases Attack by 1%.",
    },
    description: "When you hug Quivern Botan, if it smells like sunshine and meadows, tomorrow will be sunny. If it smells damp, tomorrow will be wet and miserable.",
  },
  {
    id: 182,
    key: "125",
    image: "/palfinder/images/pals/125.png",
    name: "Lullu",
    wiki: "https://palworld.fandom.com/wiki/Lullu",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
    ],
    drops: ["Beautiful Flower", "Red Berries"],
    aura: {
      name: "Floral Boost",
      description: "While at a base, Lullu fills farms with good spirits, increasing the growth rate of the crops by 50%.",
    },
    description: "In early spring, pollen floats on the wind throughout the island. Flopie's hay fever is Lullu's fault.",
  },
  {
    id: 183,
    key: "126",
    image: "/palfinder/images/pals/126.png",
    name: "Kikit",
    wiki: "https://palworld.fandom.com/wiki/Kikit",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 1,
      },
    ],
    drops: ["Leather", "Bone", "Crude Oil"],
    aura: {
      name: "Sandball Soccer",
      description: "While in party, increases Defense of Ground Pals by 15%. (Does not stack)",
    },
    description: "A decade ago, Kikit soccer was popular. However, it quickly fell out of favor due to fierce opposition from the Free Pal Alliance. Nevertheless, the Kikit's themselves didn't mind because it helped shed their old carapace.",
  },
  {
    id: 184,
    key: "127",
    image: "/palfinder/images/pals/127.png",
    name: "Yakumo",
    wiki: "https://palworld.fandom.com/wiki/Yakumo",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Birds of a Feather",
      description: "Can be ridden. While fighting together, 15% increased chance of encountering pals with the same Passive Skill as this Pal. (Excludes certain Passive Skills)",
    },
    description: "It has a strong sense of justice and despises evil. In the past they were faithful and loving companions to the islanders. Nowadays, Yakumos are hostile to humans wherever they spot them.",
  },
  {
    id: 185,
    key: "128",
    image: "/palfinder/images/pals/128.png",
    name: "Skutlass",
    wiki: "None",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
    ],
    drops: ["Skutlass Sashimi", "Aquatic Pal Fluids"],
    aura: {
      name: "Fish Fillet",
      description: "When activated, Skutlass becomes the player's katana (Attack: 2600/2700/3000/3400/3900). If it does not revert to its normal form quickly, Skutlass will become incapacitated. It will also become incapacitated if Iaigiri is used.",
    },
    description: "A bizarre species which temporarily separates its body and uses its bones to slice through enemies, at the risk of perishing itself upon taking too long. While unconfirmed, older individuals are said to deliberately stay separated in order to trigger their survival instincts and prolong their lifespans.",
  },
  {
    id: 186,
    key: "128B",
    image: "/palfinder/images/pals/128B.png",
    name: "Skutlass Ignis",
    wiki: "None",
    types: [TypesEnum.WATER, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.WATERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
    ],
    drops: ["Skutlass Sashimi", "Flame Organ"],
    aura: {
      name: "Seared Fish Fillet",
      description: "When activated, Skutlass Ignis becomes the player's katana (Attack: 2900/3000/3300/3700/4200). If it does not revert to its normal form quickly, Skutlass Ignis will become incapacitated. It will also become incapacitated if Iaigiri is used.",
    },
    description: "A bizarre species which temporarily separates its body and uses its bones to slice through enemies, at the risk of perishing itself upon taking too long. While unconfirmed, older individuals are said to deliberately stay separated in order to trigger their survival instincts and prolong their lifespans.",
  },
  {
    id: 187,
    key: "129",
    image: "/palfinder/images/pals/129.png",
    name: "Reptyro",
    wiki: "https://palworld.fandom.com/wiki/Reptyro",
    types: [TypesEnum.FIRE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Ore-Loving Beast",
      description: "Can be ridden. While in party, reduces weight of all types of ore by 30%. (Does not stack)",
    },
    description: "Magma-like blood runs throughout its body. If a large amount of water is thrown on it, the water rapidly heats, causing an immense vapor explosion.",
  },
  {
    id: 188,
    key: "129B",
    image: "/palfinder/images/pals/129B.png",
    name: "Reptyro Cryst",
    wiki: "https://palworld.fandom.com/wiki/Reptyro_Cryst",
    types: [TypesEnum.ICE, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Ice-Loving Beast",
      description: "Can be ridden. While in party, reduces weight of all types of ore by 35%. (Does not stack)",
    },
    description: "Ice cold blood runs throughout its body. If heated rapidly, its blood evaporates, causing an immense vapor explosion.",
  },
  {
    id: 189,
    key: "130",
    image: "/palfinder/images/pals/130.png",
    name: "Starryon",
    wiki: "https://palworld.fandom.com/wiki/Starryon",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
    ],
    drops: ["Leather", "Dark Fragment"],
    aura: {
      name: "Night Dancer",
      description: "Can be ridden. Boosts jumping ability while mounted. This Pal's movement speed increases by +50% at night.",
    },
    description: "It takes great pride in its flowing, gorgeous mane. If it finds a split end, it becomes so mortified it can't focus on running properly. Because static electricity makes its hair frizzy, it avoids Azurmane at all costs.",
  },
  {
    id: 190,
    key: "130B",
    image: "/palfinder/images/pals/130B.png",
    name: "Starryon Primo",
    wiki: "None",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 7,
      },
    ],
    drops: ["Leather", "Nightstar Sand"],
    aura: {
      name: "Light Dancer",
      description: "Can be ridden. Boosts Jump Power while mounted. This Pal’s Movement Speed increases by 5% for each other Neutral Pal in your party. (Excluding Starryon Primo)",
    },
    description: "It takes great pride in its glowing, gorgeous mane. If it gets even slightly dirty, it becomes so mortified it can't focus on running properly. Because skin oils ruin its coat, it wants to avoid being touched too much, even by its favorite Pal Tamer.",
  },
  {
    id: 191,
    key: "131B",
    image: "/palfinder/images/pals/131B.png",
    name: "Pierdon Cryst",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 6,
      },
    ],
    drops: ["Soralite", "Ice Organ", "Pure Quartz"],
    aura: {
      name: "Power Crystal",
      description: "While in party, player and party Pals take 15% less Dragon damage. (Does not stack)",
    },
    description: "It basks in the sun, rotating just enough to melt its ice into its preferred shape. Lopsided ones should be left alone, much like a person who was a little too bold with their sideburns.",
  },
  {
    id: 192,
    key: "132",
    image: "/palfinder/images/pals/132.png",
    name: "Cryolinx",
    wiki: "https://palworld.fandom.com/wiki/Cryolinx",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Ice Organ"],
    aura: {
      name: "Dragon Hunter",
      description: "While in party, Dragon Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "It can easily climb steep mountains with its hard claws. However, its short legs make it difficult to descend, often leaving it stranded in high places.",
  },
  {
    id: 193,
    key: "132B",
    image: "/palfinder/images/pals/132B.png",
    name: "Cryolinx Terra",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Ore"],
    aura: {
      name: "Explosive Strength",
      description: "While in party, when attacking enemy weak point, increases the power of the next weak point attack by 30%. (Does not stack)",
    },
    description: "It can easily carry many items with its large hands. However, its short legs slow its pace, often leaving it overtaken by nightfall.",
  },
  {
    id: 194,
    key: "133",
    image: "/palfinder/images/pals/133.png",
    name: "Snugloo",
    wiki: "None",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Wool"],
    aura: {
      name: "Invisible Eye",
      description: "While in party, reduces the chance of being detected by enemies. (Does not stack) Rank 2: (Stealth Up: S) Rank 3: (Stealth Up: M) Rank 4: (Stealth Up: L) Rank 5: (Stealth Up: XL)",
    },
    description: "“To look at a Snugloo's eyes” is an expression which means to seek the unseen essence of things. Ironically, no researcher has ever confirmed whether Snugloos have eyes in the first place.",
  },
  {
    id: 195,
    key: "134",
    image: "/palfinder/images/pals/134.png",
    name: "Wumpo",
    wiki: "https://palworld.fandom.com/wiki/Wumpo",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Ice Organ", "Beautiful Flower"],
    aura: {
      name: "Guardian of the Snowy Mountain",
      description: "Can be ridden. While at a base, increases the Transporting Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Researchers once tried to shave off its hair to reveal its true form. In the end, only hair was left, as if that was all there was to begin with.",
  },
  {
    id: 196,
    key: "134B",
    image: "/palfinder/images/pals/134B.png",
    name: "Wumpo Botan",
    wiki: "https://palworld.fandom.com/wiki/Wumpo_Botan",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Hardwood", "Beautiful Flower", "Carrot Seeds"],
    aura: {
      name: "Guardian of the South",
      description: "Can be ridden. While in party, player and party Pals take 15% less Ground damage and are immune to Muddy status. (Does not stack)",
    },
    description: "Researchers once tried to cut the grass off its body to reveal its true form. In the end, only grass was left, as if that was all there was to begin with.",
  },
  {
    id: 197,
    key: "135",
    image: "/palfinder/images/pals/135.png",
    name: "Sootseer",
    wiki: "https://palworld.fandom.com/wiki/Sootseer",
    types: [TypesEnum.DARK, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.FARMING,
        level: 2,
      },
    ],
    drops: ["Medium Pal Soul", "Bone", "Crude Oil"],
    aura: {
      name: "Grave Robber",
      description: "While in party, player and party Pals take 15% less Neutral damage. (Does not stack) Sometimes digs up Bone when assigned to Ranch.",
    },
    description: "It was once believed that as the world approached its end, the flame would weaken. Doomsayers would repeatedly rejoice when the flame began to weaken, but in the end, it turned out to be a prank by Sootseer. At least, for now.",
  },
  {
    id: 198,
    key: "136",
    image: "/palfinder/images/pals/136.png",
    name: "Carnibora",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Venom Gland", "Fiber"],
    aura: {
      name: "Entangling Tongue",
      description: "While in party, when the player performs a dodge roll or dodge step, Carnibora creates a whirlwind that deals damage to enemies it touches (Grass / Power: 40). (Does not stack)",
    },
    description: "Prone to eating indiscriminately, the mouth atop its head frequently breaks out in agonizing ulcers, causing it to use the mouth on its face instead. However, its behavior doesn't change, which leads to both mouths suffering the same ulcers.",
  },
  {
    id: 199,
    key: "137",
    image: "/palfinder/images/pals/137.png",
    name: "Blazamut",
    wiki: "https://palworld.fandom.com/wiki/Blazamut",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 7,
      },
    ],
    drops: ["Coal", "Flame Organ"],
    aura: {
      name: "Magma Kaiser",
      description: "Can be ridden. While in party, increases the Attack and Defense of the Pal fighting alongside you by 5% whenever you defeat an enemy. This effect lasts 20 seconds and stacks up to five times.",
    },
    description: "Legends say it was born during a volcanic eruption. A strange group even claims that this continent is laid upon the back of a giant Blazamut.",
  },
  {
    id: 200,
    key: "137B",
    image: "/palfinder/images/pals/137B.png",
    name: "Blazamut Ryu",
    wiki: "https://palworld.fandom.com/wiki/Blazamut_Ryu",
    types: [TypesEnum.DRAGON, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 7,
      },
    ],
    drops: ["Coal", "Medium Pal Soul"],
    aura: {
      name: "Dragon Kaiser",
      description: "Can be ridden. While in party, improves player's and Pals' Dragon damage to enemy weak points by 25%. (Does not stack)",
    },
    description: "Long ago, it emerged from the depths of the earth. With relentless, raging flames showing no mercy, it burned the entire island until nothing remained. It was known as the Eternal Flame.",
  },
  {
    id: 201,
    key: "138",
    image: "/palfinder/images/pals/138.png",
    name: "Dualith",
    wiki: "None",
    types: [TypesEnum.GROUND, TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Beautiful Flower", "Large Pal Soul"],
    aura: {
      name: "Forest Laser",
      description: "Can be ridden. When activated, Dualith fires a powerful Grass laser from its right hand. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "One entity, two minds. When their wills clash, it's impossible to tell where the armor will wander until they reconcile.",
  },
  {
    id: 202,
    key: "138B",
    image: "/palfinder/images/pals/138B.png",
    name: "Dualith Noct",
    wiki: "None",
    types: [TypesEnum.GROUND, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Mysterious Mushroom", "Large Pal Soul"],
    aura: {
      name: "Corruption Laser",
      description: "Can be ridden. When activated, Dualith Noct fires a powerful Dark laser from its right hand. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "One entity, two minds. They rarely agree and bicker constantly, but once battle begins, mind and body instantly unite as one!",
  },
  {
    id: 203,
    key: "139",
    image: "/palfinder/images/pals/139.png",
    name: "Anubis",
    wiki: "https://palworld.fandom.com/wiki/Anubis",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Bone", "Large Pal Soul", "Innovative Technical Manual"],
    aura: {
      name: "Guardian of the Desert",
      description: "When activated, Anubis changes the player's attack type to Ground and increases Attack by 30%. Occasionally evades attacks with a flash sidestep during battle.",
    },
    description: "Once seen as a symbol of nobility, and an idol for those who shunned wealth and power. Yet over time, this Pal became a token of death.",
  },
  {
    id: 204,
    key: "141",
    image: "/palfinder/images/pals/141.png",
    name: "Prixter",
    wiki: "https://palworld.fandom.com/wiki/Prixter",
    types: [TypesEnum.DARK, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
    ],
    drops: ["Venom Gland"],
    aura: {
      name: "Phantom Venom",
      description: "While in party, increases player's and Pals' damage to enemies afflicted with Poison by 50%. (Does not stack)",
    },
    description: "It has about 5,000 types of venom. Some of them are deadly enough to cause instant death, but none are present in a high enough concentration to have any effect.",
  },
  {
    id: 205,
    key: "141B",
    image: "/palfinder/images/pals/141B.png",
    name: "Prixter Lux",
    wiki: "None",
    types: [TypesEnum.ELECTRIC, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Scorpion Longwave",
      description: "When activated, Prixter Lux changes the player's attack type to Electric and increases Attack by 30%.",
    },
    description: "It pierces foes with its tail to deliver an electric jolt directly into their bodies. However, the current it generates is extremely weak, so a simple punch would do far more damage.",
  },
  {
    id: 206,
    key: "142",
    image: "/palfinder/images/pals/142.png",
    name: "Tetroise ",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Ruby", "Large Pal Soul"],
    aura: {
      name: "Masonry Archelon",
      description: "Can be ridden While at a base, increases the Mining Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "Those stones on its back are not just cargo. Set them down somewhere distant and they will slowly make their way back home.",
  },
  {
    id: 207,
    key: "142B",
    image: "/palfinder/images/pals/142B.png",
    name: "Tetroise Primo",
    wiki: "None",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
    ],
    drops: ["Emerald", "Large Pal Soul"],
    aura: {
      name: "Stone-Chaser Archelon",
      description: "Can be ridden. While in party, increases the durability of all weapons and armor by 80%. (Does not stack)",
    },
    description: "Even if the stones on its back were to be removed, Tetroise Primo will know where they are. No matter how far apart, it will always track them down.",
  },
  {
    id: 208,
    key: "143",
    image: "/palfinder/images/pals/143.png",
    name: "Nyafia",
    wiki: "https://palworld.fandom.com/wiki/Nyafia",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Shot-Nyan Mode",
      description: "When activated, Nyafia will fire a shotgun at nearby enemies for a limited time. While in party, increases the player's shotgun damage by 10%. (Does not stack)",
    },
    description: "Strongly dislikes anyone catching a glimpse of its concealed eye. If you insist on trying, it'll burst into tears and ignore you for two weeks.",
  },
  {
    id: 209,
    key: "144",
    image: "/palfinder/images/pals/144.png",
    name: "Mimog",
    wiki: "https://palworld.fandom.com/wiki/Mimog",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Gold Coin", "Dog Coin", "Training Manual (XL)"],
    aura: {
      name: "Master of Unlocking",
      description: "While fighting together, Mimog can open treasure chests without using a key. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "There was once a tradition of handing out an award to the person who met their end in the most foolish way. The first award was given for |being unaware of Mimog, opening the chest, and being bitten to death.|",
  },
  {
    id: 210,
    key: "145",
    image: "/palfinder/images/pals/145.png",
    name: "Xenovader",
    wiki: "https://palworld.fandom.com/wiki/Xenovader",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Meteorite Fragment"],
    aura: {
      name: "Unknown Invader",
      description: "While in party, increases the damage of the last bullet fired from a full-auto weapon by 100%. (Does not stack)",
    },
    description: "Can send information and convert it into energy by forgetting it. Regularly seems to be sending information to someone. - Respond. Target located. Proceed to immediate destruction.",
  },
  {
    id: 211,
    key: "146",
    image: "/palfinder/images/pals/146.png",
    name: "Xenogard",
    wiki: "https://palworld.fandom.com/wiki/Xenogard",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
    ],
    drops: ["Meteorite Fragment", "High Quality Pal Oil"],
    aura: {
      name: "Unknown Intruder",
      description: "Can be ridden. While in party, increases the player's energy weapon damage by 10%. (Does not stack)",
    },
    description: "Consumes information and turns it into energy. Regularly seems to be sending information to someone. - Hello? What was the message you just sent? I devoured it before checking.",
  },
  {
    id: 212,
    key: "147",
    image: "/palfinder/images/pals/147.png",
    name: "Prunelia",
    wiki: "https://palworld.fandom.com/wiki/Prunelia",
    types: [TypesEnum.GRASS, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 1,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Low Grade Medical Supplies", "Beautiful Flower", "Carrot Seeds"],
    aura: {
      name: "Prayer for Abundant Harvest",
      description: "While at a base, Prunelia's prayers bless the crops, increasing their harvest by 18%.",
    },
    description: "Intelligent and graceful in its demeanor, it was frequently employed as an attendant by the island's nobles. However, when encountered at night, its face looked so eerie that it quickly fell out of favor.",
  },
  {
    id: 213,
    key: "148",
    image: "/palfinder/images/pals/148.png",
    name: "Nitemary",
    wiki: "https://palworld.fandom.com/wiki/Nitemary",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Small Pal Soul"],
    aura: {
      name: "Soul Collector",
      description: "While fighting together, Pals drop +100% more Pal Souls when defeated. (Does not stack)",
    },
    description: "What it carries is its own soul. When it falls for someone, it forcibly extracts their soul and merges it with its own, yearning to become one.",
  },
  {
    id: 214,
    key: "148B",
    image: "/palfinder/images/pals/148B.png",
    name: "Nitemary Botan",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Medium Pal Soul"],
    aura: {
      name: "Soul Binder",
      description: "While in party, increases Defense of Grass Pals by 15%. (Does not stack)",
    },
    description: "What it carries is its own soul. When it falls for someone, it flings its soul at them to merge it with theirs, yearning to become one.",
  },
  {
    id: 215,
    key: "149B",
    image: "/palfinder/images/pals/149B.png",
    name: "Smokie Cryst",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 2,
      },
    ],
    drops: ["Ice Organ", "Medium Pal Soul"],
    aura: {
      name: "Cryo Instincts",
      description: "While at a base, increases the Cooling Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "The blue flames are merely cool to the touch, but anything left in contact with them slowly freezes. Hold a milk bottle over them, and you get a frozen milkshake!",
  },
  {
    id: 216,
    key: "151B",
    image: "/palfinder/images/pals/151B.png",
    name: "Whalaska Ignis",
    wiki: "https://palworld.fandom.com/wiki/Whalaska_Ignis",
    types: [TypesEnum.ICE, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 6,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Coralum Ore", "Flame Organ", "Large Pal Soul"],
    aura: {
      name: "Cozy Whale Cruiser",
      description: "Can be ridden. While in party, fishing minigame begins with the capture gauge 7% higher than usual, and capture progress increases by 9% while the bars overlap. (Does not stack) Rank 2: (Swim Speed Up: 10%) Rank 3: (Swim Speed Up: 14%) Rank 4: (Swim Speed Up: 18%) Rank 5: (Swim Speed Up: 25%)",
    },
    description: "Determined never to be mistaken for drift ice again, it turned bright red through sheer will. Unfortunately, some Pals can’t see red. So despite its efforts, its personal space continues to be invaded.",
  },
  {
    id: 217,
    key: "152",
    image: "/palfinder/images/pals/152.png",
    name: "Verdash",
    wiki: "https://palworld.fandom.com/wiki/Verdash",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Leather", "Bone"],
    aura: {
      name: "Grassland Gymnast",
      description: "While in party, grants 1 additional jump and 1 additional mid-air dash. (Does not stack)",
    },
    description: "Land that Verdash has run across becomes extremely fertile, with thick vegetation growing soon after. It will not run anywhere that herbicide has been used.",
  },
  {
    id: 218,
    key: "154",
    image: "/palfinder/images/pals/154.png",
    name: "Gildane",
    wiki: "https://palworld.fandom.com/wiki/Gildane",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Sandstorm's Blessing",
      description: "Can be ridden. While mounted, changes the player’s attack type to Ground and increases Attack by 1%.",
    },
    description: "During the golden age of alchemy on the island, its ever-glowing golden fur was highly prized as a catalyst for transmuting gold. In time, a remarkable revelation was made: the same golden hue could be achieved simply by processing its mane.",
  },
  {
    id: 219,
    key: "155",
    image: "/palfinder/images/pals/155.png",
    name: "Dogen",
    wiki: "https://palworld.fandom.com/wiki/Dogen",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Bone"],
    aura: {
      name: "Homeward Prayer",
      description: "When activated, teleports to the nearest base. Cannot be used inside dungeons or similar areas. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "Striving for a state of selflessness, it meditates endlessly. After confronting its worldly desires, it eats a meal and reflects. It ate too much today.",
  },
  {
    id: 220,
    key: "156",
    image: "/palfinder/images/pals/156.png",
    name: "Bulldosu",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Bone", "Fiber"],
    aura: {
      name: "Yokozuna's Presence",
      description: "Can be ridden. While in party, player and party Pals take 15% less Electric damage and are immune to Electrify. (Does not stack)",
    },
    description: "In the old islands, Bulldosu sumo was widely enjoyed. At the highest levels, even a charging Rushoar would be sent flying instead.",
  },
  {
    id: 221,
    key: "157B",
    image: "/palfinder/images/pals/157B.png",
    name: "Celesdir Noct",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 8,
      },
    ],
    drops: ["Leather", "Horn", "Dark Fragment"],
    aura: {
      name: "Blessing of Chaos",
      description: "Can be ridden. While in party, the Pal fighting alongside you gradually loses Health in exchange for 40% Attack increase. (Does not stack)",
    },
    description: "Where blinding radiance shines, dark shadows are born. It scatters an all-enveloping darkness to reclaim the chaos that ought to be. Balance is what the world requires.",
  },
  {
    id: 222,
    key: "158",
    image: "/palfinder/images/pals/158.png",
    name: "Astegon",
    wiki: "https://palworld.fandom.com/wiki/Astegon",
    types: [TypesEnum.DRAGON, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 7,
      },
    ],
    drops: ["Plasteel", "Large Pal Soul"],
    aura: {
      name: "Black Ankylosaur",
      description: "Can be ridden as a flying mount. Increases the damage dealt to ores by 1100%, and you can obtain 1500% more Ore while mounted.",
    },
    description: "A savage beast born of the abyss. Thou shall not stand before the beast. Thou shall not heed the beast.",
  },
  {
    id: 223,
    key: "159",
    image: "/palfinder/images/pals/159.png",
    name: "Knocklem",
    wiki: "https://palworld.fandom.com/wiki/Knocklem",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 7,
      },
    ],
    drops: ["Ore"],
    aura: {
      name: "Steel Guardian Mode",
      description: "When activated, a steel resolve increases Knocklem's Attack by 50% and Defense by 75% for a limited time.",
    },
    description: "Can be disassembled into 215 parts. It is capable of being reassembled and functioning again even if the parts are scattered. Mixing parts from different individuals will trigger a malfunction due to mistaken identity.",
  },
  {
    id: 224,
    key: "159B",
    image: "/palfinder/images/pals/159B.png",
    name: "Knocklem Ignis",
    wiki: "None",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 7,
      },
    ],
    drops: ["Ore", "Flame Organ"],
    aura: {
      name: "Iron Guardian Mode",
      description: "When activated, a steel resolve increases Knocklem Ignis's Attack by 60% and Defense by 85% for a limited time.",
    },
    description: "Upon disassembly, it is capable of being reassembled and functioning again. Mixing parts from different individuals will trigger a fatal cognitive error that causes its systems to overheat.",
  },
  {
    id: 225,
    key: "162",
    image: "/palfinder/images/pals/162.png",
    name: "Valentail",
    wiki: "None",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Big Stretch",
      description: "While in party, reduces the effects of gravity on the player, making them more floaty while jumping and falling. (Does not stack)",
    },
    description: "In older paintings, it is depicted as much smaller than it is today. For reasons unknown, various parts of its body have begun to elongate rapidly in recent years, and it is predicted to reach nearly ten times its current size within the next century.",
  },
  {
    id: 226,
    key: "163",
    image: "/palfinder/images/pals/163.png",
    name: "Snock",
    wiki: "None",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
    ],
    drops: ["Electric Organ", "Aquatic Pal Fluids"],
    aura: {
      name: "Charging Shell",
      description: "While in party, the player's attacks inflict Electrify 2. (Does not stack)",
    },
    description: "Tossing an Snock into the bath for a shock spa is considered a traditional health practice. That is to say, the results may be rather shocking.",
  },
  {
    id: 227,
    key: "163B",
    image: "/palfinder/images/pals/163B.png",
    name: "Snock Lux",
    wiki: "None",
    types: [TypesEnum.ELECTRIC, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 4,
      },
    ],
    drops: ["Electric Organ", "High Quality Pal Oil"],
    aura: {
      name: "Grounding Shell",
      description: "While in party, player and party Pals take 15% less Water damage, and are immune to Soak. (Does not stack)",
    },
    description: "Tossing a heated Snock Lux into the bath for a scorching spa was once a fad of the distant past. Owing to a recent revival, it is now quite literally a hot trend.",
  },
  {
    id: 228,
    key: "164",
    image: "/palfinder/images/pals/164.png",
    name: "Souffline",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Wheat Seeds"],
    aura: {
      name: "Fuzzy Fairy",
      description: "While in party, increases the capture rate of Pals afflicted with Ivy-Covered. (Does not stack) Rank 2: (Capture Rate Up: S) Rank 3: (Capture Rate Up: M) Rank 4: (Capture Rate Up: L) Rank 5: (Capture Rate Up: XL)",
    },
    description: "Its fluff can be used to hide away unpleasant memories. Once carried off by the wind, you can bid farewell to the darkness they carried.",
  },
  {
    id: 229,
    key: "165",
    image: "/palfinder/images/pals/165.png",
    name: "Lapiron",
    wiki: "None",
    types: [TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 2,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Friend of Earth",
      description: "While in party, increases the player's Defense by 50% while sprinting. (Does not stack)",
    },
    description: "Listens to the earth as it runs, avoiding unstable footing with ease. However, uncooperative terrain will trick it into falling over constantly.",
  },
  {
    id: 230,
    key: "168",
    image: "/palfinder/images/pals/168.png",
    name: "Bakemi",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Cloth", "Horn", "Small Pal Soul"],
    aura: {
      name: "Grinning Death",
      description: "While in party, attacking enemies afflicted with Poison reduces their Attack by 40%. (Does not stack)",
    },
    description: "It lives entirely for the thrill of the scare, but is utterly un-frightening. As most cannot help but indulge it with feigned surprise for its cuteness, Bakemi now leaves a trail of smiles in its wake.",
  },
  {
    id: 231,
    key: "169",
    image: "/palfinder/images/pals/169.png",
    name: "Solmora",
    wiki: "None",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
    ],
    drops: ["High Quality Pal Oil", "Aquatic Pal Fluids"],
    aura: {
      name: "Charming Fish",
      description: "Can be ridden to travel on water. While in party, makes it easier to fish up talented Pals. (Does not stack) Rank 2: (Swim Speed Up: 10%) Rank 3: (Swim Speed Up: 14%) Rank 4: (Swim Speed Up: 18%) Rank 5: (Swim Speed Up: 25%)",
    },
    description: "Its corkscrew tail acts as a propeller. Research claims that if its body could withstand the strain, it could reach speeds beyond 88 mph.",
  },
  {
    id: 232,
    key: "169B",
    image: "/palfinder/images/pals/169B.png",
    name: "Solmora Lux",
    wiki: "None",
    types: [TypesEnum.WATER, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 6,
      },
    ],
    drops: ["High Quality Pal Oil", "Electric Organ"],
    aura: {
      name: "Shocking Fish",
      description: "Can be ridden to travel on water. While mounted, changes the player's attack type to Electric and increases Attack by 1%. While in party, makes it easier to fish up talented Pals. (Does not stack) Rank 2: (Swim Speed Up: 10%) Rank 3: (Swim Speed Up: 14%) Rank 4: (Swim Speed Up: 18%) Rank 5: (Swim Speed Up: 25%)",
    },
    description: "Its corkscrew tail acts as a propeller. Research claims that if its body could withstand the strain, it could generate over 1.21 gigawatts of power.",
  },
  {
    id: 233,
    key: "170",
    image: "/palfinder/images/pals/170.png",
    name: "Lapure",
    wiki: "None",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
    ],
    drops: ["Leather"],
    aura: {
      name: "Long-Sleeved Hurray",
      description: "While in party, reduces the Partner Skill cooldowns for other party Pals by 10%. (Does not stack)",
    },
    description: "It uses the long, flowing fur on its hands to attract attention, always taking the utmost care to keep them maintained. Highly sensitive to dirt and meticulously clean, kicking up dust nearby will invite a very disgusted glare.",
  },
  {
    id: 234,
    key: "171",
    image: "/palfinder/images/pals/171.png",
    name: "Eidrolon",
    wiki: "None",
    types: [TypesEnum.DRAGON, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Leather", "High Quality Pal Oil"],
    aura: {
      name: "Liberated Pterosaur",
      description: "Can be ridden as a flying mount. This Pal's Attack and Movement Speed increase by 2% for each other Dragonor Dark Pal in your party.",
    },
    description: "A new Pal that was only recently discovered. Calm and entirely docile, it spends its time as it pleases. It is no longer bound by anything.",
  },
  {
    id: 235,
    key: "171B",
    image: "/palfinder/images/pals/171B.png",
    name: "Eidrolon Ignis",
    wiki: "None",
    types: [TypesEnum.DRAGON, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 6,
      },
    ],
    drops: ["Leather", "High Quality Pal Oil", "Flame Organ"],
    aura: {
      name: "Resentful Pterosaur",
      description: "Can be ridden as a flying mount. This Pal's Attack and Movement Speed increase by 2% or each other Dragon or Fire Pal in your party. (Excluding Eidrolon Ignis)",
    },
    description: "A new Pal that was only recently discovered. It trusts nothing and no one, and its tempermental nature leads to it constantly venting its rage at the nearest target.",
  },
  {
    id: 236,
    key: "172",
    image: "/palfinder/images/pals/172.png",
    name: "Dynamoff",
    wiki: "None",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Electro-Massage Incubation",
      description: "Can be ridden as a flying mount. While at a base, shortens the time it takes to incubate eggs by 20%. (Does not stack)",
    },
    description: "With so little to eat at high altitudes, it will occasionally even feast on its enemies' brains. It is thought that groups seeking a more dependable food source descended to lower skies, ultimately diverging into Beakon.",
  },
  {
    id: 237,
    key: "173",
    image: "/palfinder/images/pals/173.png",
    name: "Tropicaw",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
    ],
    drops: ["Beautiful Flower", "Fiber"],
    aura: {
      name: "Flower Dance",
      description: "While in party, extends the invincibility period during dodge rolls and dodge steps by 15%. (Does not stack)",
    },
    description: "While some say that it flails around to mimic flowers swaying in the wind and avoid predators, others argue that a crimson flower thrashing violently at high speeds is simply so unsettling that nothing dares approach it.",
  },
  {
    id: 238,
    key: "174",
    image: "/palfinder/images/pals/174.png",
    name: "Flaracle",
    wiki: "None",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Burning Future",
      description: "While in party, when the player attacks an enemy afflicted with Burn, the enemy explodes, dealing damage equal to 40% of the player's attack damage to nearby enemies. (Does not stack.)",
    },
    description: "It focuses its mind and reads the future through flames. Should it glimpse an inconvenient destiny, it relentlessly rerolls the prophecy until it gets a favorable result. That is why the future of Flaracle is always exceptionally bright!",
  },
  {
    id: 239,
    key: "175",
    image: "/palfinder/images/pals/175.png",
    name: "Ophydia",
    wiki: "https://palworld.fandom.com/wiki/Ophydia",
    types: [TypesEnum.GRASS, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 7,
      },
    ],
    drops: ["High Quality Pal Oil", "Large Pal Soul"],
    aura: {
      name: "Glorious Mist",
      description: "Can be ridden. While in party, the player's attacks inflict Soak 2. (Does not stack)",
    },
    description: "Waters where Ophydias dwell are often filled with flowers that mimic its form. Many attempts have been made to directly propagate these blooms, but they inevitably wither the moment human hands interfere.",
  },
  {
    id: 240,
    key: "176",
    image: "/palfinder/images/pals/176.png",
    name: "Dupin",
    wiki: "None",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Trick-Loving Fluffle",
      description: "While in party, when the player's Health falls below 50%, Dupin generates an explosion around the player (Fire / Power: 100 / Burn buildup: 777). Additionally, while the player's Health is below 50%, the player's Attack is increased by 110%. (Does not stack)",
    },
    description: "A copy it created might quietly replace it, leaving even the Dupin itself unsure whether it is still the original.",
  },
  {
    id: 241,
    key: "177",
    image: "/palfinder/images/pals/177.png",
    name: "Roujay",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Leather", "Ruby"],
    aura: {
      name: "Dark-Nester",
      description: "Can be ridden as a flying mount. While in party, increases player's and Pals' damage to enemies afflicted with Blind by 50%. (Does not stack)",
    },
    description: "A thief by nature, it snatches items when no one is looking. No reason to be concerned when caught in the act. Once it swiftly steals your eyes, you won’t be seeing anything anyway.",
  },
  {
    id: 242,
    key: "178",
    image: "/palfinder/images/pals/178.png",
    name: "Venusa",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Aquatic Pal Fluids", "Venom Gland"],
    aura: {
      name: "Snake's Sagacity",
      description: "While in party, the player's attacks inflict Blind 2. (Does not stack)",
    },
    description: "Whenever it's confused, it resorts to consulting with the snakes on its head. However, since they're all ultimately the same being, it comes to understand that nothing is understood.",
  },
  {
    id: 243,
    key: "179",
    image: "/palfinder/images/pals/179.png",
    name: "Mycora",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 6,
      },
    ],
    drops: ["Mushroom", "Mysterious Mushroom"],
    aura: {
      name: "Charming Spore",
      description: "While at a base, increases the Medicine Production Work Suitability Level for all other Base Pals by +1. (Does not stack)",
    },
    description: "It views humans as nothing more than convenient parasitic hosts. The reason Mycora has taken this form is to deceive humans into lowering their guard, allowing its spores to spread more efficiently.",
  },
  {
    id: 244,
    key: "180",
    image: "/palfinder/images/pals/180.png",
    name: "Loomen",
    wiki: "None",
    types: [TypesEnum.DARK, TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 4,
      },
    ],
    drops: ["High Quality Pal Oil", "Leather", "Venom Gland"],
    aura: {
      name: "Lantern Enchantment",
      description: "While in party, the player's arrows explode on contact, dealing additional damage equal to 15% of the player's attack damage. (Does not stack)",
    },
    description: "Its lantern glows with an eerie light that lays bare the truth of the world. If that light strikes you as blinding, then you most likely have something to hide.",
  },
  {
    id: 245,
    key: "181",
    image: "/palfinder/images/pals/181.png",
    name: "Wistella",
    wiki: "None",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 1,
      },
    ],
    drops: ["Nightstar Sand", "Small Pal Soul"],
    aura: {
      name: "Hidden Dark Energy",
      description: "While in party, increases Defense of Dark Pals by 15%. (Does not stack)",
    },
    description: "At the end of its life, a new star appears somewhere in the skies, glowing with the weight of its memories.",
  },
  {
    id: 246,
    key: "182",
    image: "/palfinder/images/pals/182.png",
    name: "Solenne",
    wiki: "https://palworld.fandom.com/wiki/Solenne",
    types: [TypesEnum.DARK, TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Dark Fragment", "High Quality Recovery Meds"],
    aura: {
      name: "Untainted Maiden",
      description: "While in party, increases the player's Attack by 30% if all Pals in party are different species. (Does not stack)",
    },
    description: "Joy and misery come in equal measure for Solenne. Those who choose to take care of one must be prepared for what that entails.",
  },
  {
    id: 247,
    key: "183",
    image: "/palfinder/images/pals/183.png",
    name: "Renjishi",
    wiki: "None",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Leather", "Flame Organ"],
    aura: {
      name: "Stage Combat",
      description: "While in party, the player's attacks inflict Burn 2. (Does not stack)",
    },
    description: "At a glance, its movements appear exaggerated and full of openings. Strangely, however, any opponents become overwhelmed, and become unable to look away, as if transfixed.",
  },
  {
    id: 248,
    key: "184",
    image: "/palfinder/images/pals/184.png",
    name: "Aegidron",
    wiki: "None",
    types: [TypesEnum.DRAGON, TypesEnum.GROUND],
    suitability: [
      {
        type: SuitabilitiesEnum.MINING,
        level: 8,
      },
    ],
    drops: ["Thermal Core", "Giant Pal Soul"],
    aura: {
      name: "Indestructible Fortress",
      description: "Can be ridden. While in party, player and party Pals take 60% less damage from explosive attacks, and are immune to Stun. (Does not stack)",
    },
    description: "In ancient times, when means of communication were limited, the light within Aegidron's wings was used to send simple flash signals.",
  },
  {
    id: 249,
    key: "185",
    image: "/palfinder/images/pals/185.png",
    name: "Grizzbolt",
    wiki: "https://palworld.fandom.com/wiki/Grizzbolt",
    types: [TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Electric Organ", "Leather"],
    aura: {
      name: "Yellow Tank",
      description: "Can be ridden. Can rapidly fire a minigun while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "With a friendly smile and a hardy physique, it is docile towards one it recognizes as a partner. For reasons unexplained, its personality undergoes a drastic change when wielding a minigun.",
  },
  {
    id: 250,
    key: "186",
    image: "/palfinder/images/pals/186.png",
    name: "Lyleen",
    wiki: "https://palworld.fandom.com/wiki/Lyleen",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 5,
      },
    ],
    drops: ["High Quality Recovery Meds", "Beautiful Flower", "Innovative Technical Manual"],
    aura: {
      name: "Harvest Goddess",
      description: "When activated, the queen's soothing graces restore the Health of the player and Party Pals by 80/82/84/86/90%.",
    },
    description: "A docile Pal full of love. It watches over small Pals who have lost their parents. It uses a full-power Solar Blast to discipline naughty Pals.",
  },
  {
    id: 251,
    key: "186B",
    image: "/palfinder/images/pals/186B.png",
    name: "Lyleen Noct",
    wiki: "https://palworld.fandom.com/wiki/Lyleen_Noct",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 7,
      },
    ],
    drops: ["High Quality Recovery Meds", "Beautiful Flower", "Innovative Technical Manual"],
    aura: {
      name: "Goddess of the Tranquil Light",
      description: "When activated, the queen's soothing graces restore the Health of the player and Party Pals by 85/87/89/91/95%.",
    },
    description: "An elegant Pal full of grace. It admonishes any who are disrespectful with a painful slap. Some Pals actively seek out this punishment.",
  },
  {
    id: 252,
    key: "187",
    image: "/palfinder/images/pals/187.png",
    name: "Orserk",
    wiki: "https://palworld.fandom.com/wiki/Orserk",
    types: [TypesEnum.DRAGON, TypesEnum.ELECTRIC],
    suitability: [
      {
        type: SuitabilitiesEnum.ELECTRICITY,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 3,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: ["Electric Organ"],
    aura: {
      name: "Ferocious Thunder Dragon",
      description: "While in party, hitting an enemy with a bullet increases the Attack and Defense of the Pal fighting alongside you by 1% for 5 seconds. This effect stacks up to 30 times. (Does not stack.)",
    },
    description: "It sends electricity into its foes' wounds, roasting them from the inside out. Fights between Orserk end in the blink of an eye.",
  },
  {
    id: 253,
    key: "188",
    image: "/palfinder/images/pals/188.png",
    name: "Faleris",
    wiki: "https://palworld.fandom.com/wiki/Faleris",
    types: [TypesEnum.FIRE],
    suitability: [
      {
        type: SuitabilitiesEnum.KINDLING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Flame Organ"],
    aura: {
      name: "Scorching Predator",
      description: "Can be ridden as a flying mount. While in party, Ice Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "When it finds its prey it unleashes a whirlwind of flames, burning the entire area to ash. Faleris breath is known for its pleasing scent.",
  },
  {
    id: 254,
    key: "188B",
    image: "/palfinder/images/pals/188B.png",
    name: "Faleris Aqua",
    wiki: "https://palworld.fandom.com/wiki/Faleris_Aqua",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 5,
      },
    ],
    drops: ["Aquatic Pal Fluids"],
    aura: {
      name: "Tidal Predator",
      description: "Can be ridden as a flying mount. While in party, Fire Pals drop 40% more items when defeated. (Does not stack)",
    },
    description: "When it finds its prey, it unleashes a mighty torrent, sweeping the entire area. More often than not, the prey gets swept away in the chaos, leaving one to wonder whether this truly counts as hunting.",
  },
  {
    id: 255,
    key: "189",
    image: "/palfinder/images/pals/189.png",
    name: "Shadowbeak",
    wiki: "https://palworld.fandom.com/wiki/Shadowbeak",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Plasteel", "Carbon Fiber", "Innovative Technical Manual", "Large Pal Soul"],
    aura: {
      name: "Modified DNA",
      description: "Can be ridden as a flying mount. While flying, Movement Speed is increased. Enhances Dark attacks by 15% while mounted.",
    },
    description: "Born from the depths of insanity, its very existence defies reason. Having lost all genetic ties to other Pals, one wonders if it could still even be considered a Pal.",
  },
  {
    id: 256,
    key: "190",
    image: "/palfinder/images/pals/190.png",
    name: "Selyne",
    wiki: "https://palworld.fandom.com/wiki/Selyne",
    types: [TypesEnum.DARK, TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["High Quality Cloth", "Sapphire"],
    aura: {
      name: "Celestial Darkness",
      description: "Can be ridden as a flying mount. While mounted, enhances Neutral and Dark attacks by 15%.",
    },
    description: "The object floating behind, resembling the moon, is said to gradually become more circular with each passing generation. No one knows what will happen when the moon is full.",
  },
  {
    id: 257,
    key: "191",
    image: "/palfinder/images/pals/191.png",
    name: "Bastigor",
    wiki: "https://palworld.fandom.com/wiki/Bastigor",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.COOLING,
        level: 8,
      },
    ],
    drops: ["Leather", "Ice Organ"],
    aura: {
      name: "Blizzard Crash",
      description: "Can be ridden. While mounted, delivers crushing blows with a hammer forged from Ice. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "The sight of anything round gives it an uncontrollable urge to punch it. For <characterName id=|SnowTigerBeastMan|/> the toughest challenge, after simply living, is making a snowman.",
  },
  {
    id: 258,
    key: "192",
    image: "/palfinder/images/pals/192.png",
    name: "Shaolong",
    wiki: "https://palworld.fandom.com/wiki/Shaolong",
    types: [TypesEnum.DRAGON, TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
    ],
    drops: ["Horn", "Leather", "Large Pal Soul"],
    aura: {
      name: "Azure Sovereign",
      description: "Can be ridden as a flying mount. This Pal's Attack increases by 4% for each other Dragon Pal in your party.",
    },
    description: "Its ring is reserved for a special occasion: upon meeting its destined companion, the rings are traded, a symbol of their eternal partnership.",
  },
  {
    id: 259,
    key: "193",
    image: "/palfinder/images/pals/193.png",
    name: "Silvance",
    wiki: "None",
    types: [TypesEnum.GRASS],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 4,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 2,
      },
    ],
    drops: ["Giant Pal Soul", "Ancient Civilization Core"],
    aura: {
      name: "Spore Stalwart",
      description: "While in party, when the player attacks an enemy afflicted with Ivy-Covered, the enemy explodes, dealing additional damage equal to 1% of the player's attack damage. (Does not stack) Also grants immunity to the World Tree's Explosive Spores to both the player and their Pals.",
    },
    description: "Since ancient times, it has remained within the World Tree, continuing its vigil. What it protects, and for what purpose, Silvance does not know. After all, the World Tree will tell it everything. The spores it commands surely know who the enemy is.",
  },
  {
    id: 260,
    key: "194",
    image: "/palfinder/images/pals/194.png",
    name: "Dandilord",
    wiki: "None",
    types: [TypesEnum.GRASS, TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.PLANTING,
        level: 8,
      },
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 3,
      },
    ],
    drops: ["Giant Pal Soul", "Ancient Civilization Core", "Venom Gland"],
    aura: {
      name: "Mist Stalwart",
      description: "When activated, the player's attacks inflict Poison 2. While in party, grants the player and party Pals immunity to Poison, and nullifies the effects of toxic gas in the World Tree area. (Does not stack)",
    },
    description: "Since ancient times, it has remained within the World Tree, continuing its vigil. What it protects, and for what purpose, Dandilord does not care. After all, the World Tree knows everything. Only the mist it wields can reveal the truth.",
  },
  {
    id: 261,
    key: "195",
    image: "/palfinder/images/pals/195.png",
    name: "Bellanoir",
    wiki: "https://palworld.fandom.com/wiki/Bellanoir",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 5,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: [],
    aura: {
      name: "Nightmare Iris",
      description: "When activated, attacks targeted enemy with Nightmare Ray. When this Pal uses Nightmare Ray, it has a x1.1/1.3/1.6/2/2.5 damage multiplier.",
    },
    description: "Without existing, she quietly gazed upon the world. One day, she was seized with a longing to be seen. With unbridled lust for vengeance against reality, thus was born the Eclipsed Siren.",
  },
  {
    id: 262,
    key: "195B",
    image: "/palfinder/images/pals/195B.png",
    name: "Bellanoir Libero",
    wiki: "https://palworld.fandom.com/wiki/Bellanoir_Libero",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.HANDIWORK,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MEDICINE,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.TRANSPORTING,
        level: 4,
      },
    ],
    drops: [],
    aura: {
      name: "Nightmare Stare",
      description: "When activated, attacks targeted enemy with Nightmare Bloom. When this Pal uses Nightmare Bloom, it has a x1.1/1.3/1.6/2/2.5 damage multiplier.",
    },
    description: "With her desires set loose, she was soon overwhelmed. She longed for a self to gaze upon herself. And the sisters who gazed, resenting reality, were driven into the abyss and, at last, closed their eyes.",
  },
  {
    id: 263,
    key: "196",
    image: "/palfinder/images/pals/196.png",
    name: "Xenolord",
    wiki: "https://palworld.fandom.com/wiki/Xenolord",
    types: [TypesEnum.DARK, TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 2,
      },
    ],
    drops: ["Meteorite Fragment"],
    aura: {
      name: "Meteor Wings",
      description: "Can be ridden as a flying mount. While in party, damage done by Partner Skills of weapon-wielding Pals increases by 20%. (Does not stack) Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "-Destination reached. Priority: Locate entity |Supersonic Dragon| -Note: Conquest deadline exceeded by <://Error_Code:126DC> years. -Update: No conquest traces found. Naturalization confirmed. Commence elimination protocol. -Staff Memo: Refrain from forgetting or consuming critical data!",
  },
  {
    id: 264,
    key: "197",
    image: "/palfinder/images/pals/197.png",
    name: "Hartalis",
    wiki: "https://palworld.fandom.com/wiki/Hartalis",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 7,
      },
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 7,
      },
    ],
    drops: [],
    aura: {
      name: "Sacred Barrier",
      description: "Can be ridden. While mounted, it generates a barrier that blocks all attacks. Can triple jump while mounted. Rank 2: (Cooldown Reduction: S) Rank 3: (Cooldown Reduction: M) Rank 4: (Cooldown Reduction: L) Rank 5: (Cooldown Reduction: XL)",
    },
    description: "The silence is unsettling, yet strangely soothing. No one else remains. All have been delivered. O King of Salvation, carry me too into eternal stillness. -The ancient text cuts off here.",
  },
  {
    id: 265,
    key: "198",
    image: "/palfinder/images/pals/198.png",
    name: "Paladius",
    wiki: "https://palworld.fandom.com/wiki/Paladius",
    types: [TypesEnum.NEUTRAL],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
    ],
    drops: ["Hexolite", "Diamond", "Large Pal Soul"],
    aura: {
      name: "Holy Knight of the Firmament",
      description: "Can be ridden. Can triple jump while mounted. Activate Spear Thrust to have Necromus stay by your side and attack enemies in tandem. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Once one with Necromus. Its gleaming form is free of all negative emotions. However, a glimmer of hatred can still be seen deep within its eyes.",
  },
  {
    id: 266,
    key: "199",
    image: "/palfinder/images/pals/199.png",
    name: "Necromus",
    wiki: "https://palworld.fandom.com/wiki/Necromus",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.LUMBERING,
        level: 6,
      },
      {
        type: SuitabilitiesEnum.MINING,
        level: 6,
      },
    ],
    drops: ["Hexolite", "Diamond", "Large Pal Soul"],
    aura: {
      name: "Dark Knight of the Abyss",
      description: "Can be ridden. Can double jump while mounted. When Twin Spears skill is activated, a Paladius in your party will appear and attack alongside you. Rank 2: (Ride Speed Up: 10%) Rank 3: (Ride Speed Up: 12%) Rank 4: (Ride Speed Up: 15%) Rank 5: (Ride Speed Up: 20%)",
    },
    description: "Once one with Paladius. Its darkened form is the embodiment of negative emotions. However, a glimmer of compassion can still be seen deep within its eyes.",
  },
  {
    id: 267,
    key: "200",
    image: "/palfinder/images/pals/200.png",
    name: "Frostallion",
    wiki: "https://palworld.fandom.com/wiki/Frostallion",
    types: [TypesEnum.ICE],
    suitability: [
      {
        type: SuitabilitiesEnum.COOLING,
        level: 7,
      },
    ],
    drops: ["Ice Organ", "Diamond"],
    aura: {
      name: "Icy Steed",
      description: "Can be ridden as a flying mount. While mounted, changes the player's attack type to Ice, inflict Freeze 1, increases Attack by 1%.",
    },
    description: "Guardian deity of Palpagos Island, known as the Winter Caller. In the past, when a calamity struck the land, it soared into the sky and sealed away the threat by casting the island into eternal winter.",
  },
  {
    id: 268,
    key: "200B",
    image: "/palfinder/images/pals/200B.png",
    name: "Frostallion Noct",
    wiki: "https://palworld.fandom.com/wiki/Frostallion_Noct",
    types: [TypesEnum.DARK],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 7,
      },
    ],
    drops: ["Diamond", "Large Pal Soul"],
    aura: {
      name: "Black Steed",
      description: "Can be ridden as a flying mount. While mounted, changes the player's attack type to Dark, inflict Blind 1, increases Attack by 1%.",
    },
    description: "Guardian deity of Palpagos Island, known as the Night Caller. In the past, when a calamity struck the land, it soared into the sky and sealed away the threat by casting the island into eternal darkness.",
  },
  {
    id: 269,
    key: "201",
    image: "/palfinder/images/pals/201.png",
    name: "Neptilius",
    wiki: "https://palworld.fandom.com/wiki/Neptilius",
    types: [TypesEnum.WATER],
    suitability: [
      {
        type: SuitabilitiesEnum.WATERING,
        level: 7,
      },
    ],
    drops: ["Coralum Ore", "Hexolite", "Diamond", "Large Pal Soul"],
    aura: {
      name: "Sentinel of the Great Sea",
      description: "While in party, it follows up the player's attacks with Water spear strikes. Can be ridden to travel on water. While mounted, it can leap high into the air over water. Rank 2: (Swim Speed Up 10% + Cooldown Reduction: S) Rank 3: (Swim Speed Up 14% + Cooldown Reduction: M) Rank 4: (Swim Speed Up 18% + Cooldown Reduction: L) Rank 5: (Swim Speed Up 25% + Cooldown Reduction: XL)",
    },
    description: "After the sealing of the calamity, a champion from Feybreak emerged. It stares out to sea, awaiting one it deems worthy. For such encounters are no coincidence—they are fate.",
  },
  {
    id: 270,
    key: "202",
    image: "/palfinder/images/pals/202.png",
    name: "Jetragon",
    wiki: "https://palworld.fandom.com/wiki/Jetragon",
    types: [TypesEnum.DRAGON],
    suitability: [
      {
        type: SuitabilitiesEnum.GATHERING,
        level: 8,
      },
    ],
    drops: ["Soralite", "Thermal Core", "Diamond", "Large Pal Soul"],
    aura: {
      name: "Aerial Missile",
      description: "Can be ridden as a flying mount. Can rapidly fire a missile launcher while mounted. Rank 2: (Damage Up: S) Rank 3: (Damage Up: M) Rank 4: (Damage Up: L) Rank 5: (Damage Up: XL)",
    },
    description: "Watches over Palpagos Island from high above. When calamity returns to the land, the earth will split open, and the skies will burn. It is destined to strike down the calamity in a flash of total destruction.",
  },
  {
    id: 271,
    key: "204",
    image: "/palfinder/images/pals/204.png",
    name: "Astralym",
    wiki: "None",
    types: [],
    suitability: [
    ],
    drops: ["Leather", "High Quality Pal Oil"],
    aura: {
      name: "-",
      description: "This Pal's abilities are still being investigated.",
    },
    description: "A shadow of its former self, this mysterious Pal descended upon the Palpagos long ago. Bringing ruin and calamity, it was sealed away for millennia until it was ultimately defeated by a certain Pal Tamer",
  },
];
