export const device = {
  name: 'ORo Pet Companion',
  model: 'ORo Dog Companion Robot',
  status: 'connected',
  battery: 64,
  isCharging: false,
  lastSync: '10:45 AM',
  totalEventsToday: 22,
  importantCount: 1,
  networkDbm: -67,
  networkQuality: 'Strong signal',
  firmwareVersion: '2.4.1',
  firmwareStatus: 'Up to date',
  lastRestart: 'Yesterday at 11:34 PM',
  location: 'Living Room',
  mode: 'Pet Watching Mode'
};

export const statusSummary = {
  tone: 'amber',
  headline: '1 small note to see',
  title: 'Your pet is safe and having a calm morning',
  detail: 'ORo had a quick 24-minute Wi-Fi break at 10:18 AM, but reconnected all by itself. Your pet enjoyed morning treats and play, took a cozy sunlit nap, and all videos are safe.',
  awayDuration: 'Away for about 4 hours',
  lastUpdated: '10:45 AM',
  quickStats: [
    { label: 'Pet moments', value: '22 recorded' },
    { label: 'Needs your help', value: '0 (All good)' },
    { label: 'Robot health', value: 'Online · 64%' }
  ]
};

export const activityClusters = [
  {
    id: 'hallway-window',
    type: 'motion',
    priority: 'routine',
    category: 'Pet Activity',
    time: '10:42 AM – 10:45 AM',
    timeRange: '10:42 AM – 10:45 AM',
    duration: '3 minutes',
    title: 'Trotted to the sunny living room window',
    summary: 'Your pet walked over to look out the front bay window, wagged gently at passing birds, and settled back on the rug beside ORo.',
    resolved: true,
    resolvedBadge: 'Happy & calm',
    actionNeeded: false,
    events: [
      {
        id: 'hw-1',
        time: '10:45 AM',
        title: 'Settled comfortably on the living room rug',
        description: 'Laying down peacefully within view of ORo.'
      },
      {
        id: 'hw-2',
        time: '10:43 AM',
        title: 'Gentle tail wag watching birds outside',
        description: 'Curious and relaxed window watching.'
      },
      {
        id: 'hw-3',
        time: '10:42 AM',
        title: 'Trotted past the living room doorway',
        description: 'Casual morning stretch and stroll.'
      }
    ]
  },
  {
    id: 'wifi-disconnect',
    type: 'alert',
    priority: 'high',
    category: 'Wi-Fi Check',
    time: '10:18 AM – 10:42 AM',
    timeRange: '10:18 AM – 10:42 AM',
    duration: '24 minutes',
    title: 'Wi-Fi paused briefly for 24 minutes',
    summary: 'ORo briefly lost its connection to home Wi-Fi while following your pet, but reconnected all on its own. It kept watching your pet offline, and no photos or clips were lost.',
    resolved: true,
    resolvedBadge: 'Fixed on its own',
    actionNeeded: false,
    events: [
      {
        id: 'w-1',
        time: '10:42 AM',
        title: 'Reconnected to Wi-Fi automatically',
        description: 'Signal is strong again. All offline pet videos were saved.'
      },
      {
        id: 'w-2',
        time: '10:18 AM',
        title: 'Brief Wi-Fi pause while moving',
        description: 'Switched to offline recording so pet monitoring never stopped.'
      }
    ]
  },
  {
    id: 'door-sound',
    type: 'sound',
    priority: 'routine',
    category: 'Sound Check',
    time: '10:02 AM – 10:05 AM',
    timeRange: '10:02 AM – 10:05 AM',
    duration: '3 minutes',
    title: 'Heard postal delivery at the front door',
    summary: 'Mail dropped into the front door slot. Your pet trotted to investigate with 1 curious soft bark. ORo played a gentle calming chime, and your pet relaxed on the rug in under a minute.',
    resolved: true,
    resolvedBadge: 'Quickly settled',
    actionNeeded: false,
    events: [
      {
        id: 'ds-1',
        time: '10:05 AM',
        title: 'Returned to rug and laid down comfortably',
        description: 'Tail relaxed, breathing slow and steady.'
      },
      {
        id: 'ds-2',
        time: '10:03 AM',
        title: 'Investigated hallway & sniffed door draft',
        description: 'Checked the entryway curiously for 30 seconds.'
      },
      {
        id: 'ds-3',
        time: '10:02 AM',
        title: 'Heard mail drop · ORo played soothing chime',
        description: 'One soft alert "boof", immediately calmed by ORo.'
      }
    ]
  },
  {
    id: 'morning-motion',
    type: 'motion',
    priority: 'routine',
    category: 'Pet Activity',
    time: '9:31 AM – 9:55 AM',
    timeRange: '9:31 AM – 9:55 AM',
    duration: '24 minutes',
    title: 'Stretched, drank water, and explored the room',
    summary: 'ORo saw 4 moments of healthy movement. Your pet took a long drink from the kitchen water bowl, did a full downward stretch by the couch, and gave ORo a friendly nose boop.',
    resolved: true,
    resolvedBadge: 'Happy & normal',
    actionNeeded: false,
    events: [
      {
        id: 'p-1',
        time: '9:55 AM',
        title: 'Curiously tapped ORo’s front camera with nose',
        description: 'Friendly nose boop and playful tail wag.'
      },
      {
        id: 'p-2',
        time: '9:47 AM',
        title: 'Walked to kitchen & took a 25-second water break',
        description: 'Hydrated nicely from the water bowl.'
      },
      {
        id: 'p-3',
        time: '9:38 AM',
        title: 'Stretched near the couch & coffee table',
        description: 'Big morning yoga stretch.'
      },
      {
        id: 'p-4',
        time: '9:31 AM',
        title: 'Woke up from morning nap & shook out coat',
        description: 'First stretch after a peaceful rest.'
      }
    ]
  },
  {
    id: 'software-update',
    type: 'system',
    priority: 'info',
    category: 'Robot Care',
    time: '9:35 AM',
    timeRange: '9:35 AM',
    duration: 'Quick update',
    title: 'ORo updated itself quietly on its charger',
    summary: 'ORo installed a small routine software improvement while resting on its charging base. Everything is running smoothly.',
    resolved: true,
    resolvedBadge: 'All set',
    actionNeeded: false,
    events: [
      {
        id: 's-1',
        time: '9:35 AM',
        title: 'System update completed',
        description: 'All pet tracking and safety features are ready.'
      }
    ]
  },
  {
    id: 'sunbeam-nap',
    type: 'nap',
    priority: 'routine',
    category: 'Nap & Rest',
    time: '8:45 AM – 9:25 AM',
    timeRange: '8:45 AM – 9:25 AM',
    duration: '40 minutes',
    title: 'Cozy 40-minute nap in the sunbeam',
    summary: 'Your pet curled up on the orthopedic bed by the side window. ORo monitored relaxed resting breathing (steady 18 breaths per minute) with zero restless turning.',
    resolved: true,
    resolvedBadge: 'Peaceful sleep',
    actionNeeded: false,
    events: [
      {
        id: 'sn-1',
        time: '9:25 AM',
        title: 'Began stirring as the sunlight shifted',
        description: 'Slow gentle awakening in warm light.'
      },
      {
        id: 'sn-2',
        time: '9:02 AM',
        title: 'Deep resting breathing steady at 18 breaths/min',
        description: 'Vitals monitor confirms calm, deep sleep.'
      },
      {
        id: 'sn-3',
        time: '8:45 AM',
        title: 'Curled up into dog bed after morning play',
        description: 'Found favorite sunny spot on the rug.'
      }
    ]
  },
  {
    id: 'treat-dispense',
    type: 'treat',
    priority: 'routine',
    category: 'Play & Treats',
    time: '8:15 AM – 8:28 AM',
    timeRange: '8:15 AM – 8:28 AM',
    duration: '13 minutes',
    title: 'Dispensed 1 crunchy treat & rolled the ball',
    summary: 'ORo tossed 1 dental crunch treat and engaged your pet with a playful 5-minute rolling ball game. Your pet eagerly retrieved the ball and wagged happily.',
    resolved: true,
    resolvedBadge: 'Playful & active',
    actionNeeded: false,
    events: [
      {
        id: 'td-1',
        time: '8:28 AM',
        title: 'Pet happily finished crunching treat by the rug',
        description: 'Cleaned up crumbs and rested contentedly.'
      },
      {
        id: 'td-2',
        time: '8:22 AM',
        title: 'ORo rolled interactive ball · pet chased & tapped it',
        description: '5 minutes of healthy indoor physical activity.'
      },
      {
        id: 'td-3',
        time: '8:15 AM',
        title: 'Dispensed 1 scheduled morning dental bite',
        description: 'Happy chime sounded, treat safely tossed.'
      }
    ]
  },
  {
    id: 'morning-greeting',
    type: 'motion',
    priority: 'routine',
    category: 'Morning Hello',
    time: '7:45 AM – 8:05 AM',
    timeRange: '7:45 AM – 8:05 AM',
    duration: '20 minutes',
    title: 'First morning greeting when you left for work',
    summary: 'ORo undocked from its home charging dock at 7:45 AM. Your pet greeted the robot with 30 seconds of happy tail wags before settling into the living room.',
    resolved: true,
    resolvedBadge: 'Great start',
    actionNeeded: false,
    events: [
      {
        id: 'mg-1',
        time: '8:02 AM',
        title: 'Pet sniffed ORo’s bumper happily',
        description: 'Familiar, gentle morning interaction.'
      },
      {
        id: 'mg-2',
        time: '7:52 AM',
        title: '30-second tail wag greeting detected',
        description: 'Positive mood & high tail posture.'
      },
      {
        id: 'mg-3',
        time: '7:45 AM',
        title: 'ORo undocked to begin daytime companion schedule',
        description: 'Quiet departure from base station.'
      }
    ]
  }
];

export const filterOptions = [
  { id: 'all', label: 'All pet moments', count: 8 },
  { id: 'attention', label: 'Needs a look', count: 1 },
  { id: 'routine', label: 'Pet routine', count: 7 }
];
