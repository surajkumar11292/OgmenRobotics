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
  headline: 'All safe · 1 routine note',
  title: 'Your pet is safe and resting',
  detail: 'Wi-Fi reconnected automatically. All offline clips are saved and your pet is resting peacefully.',
  awayDuration: 'Away for 4 hrs',
  lastUpdated: '10:45 AM',
  quickStats: [
    { label: 'Pet moments', value: '22 recorded' },
    { label: 'Action needed', value: '0 (None)' },
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
    duration: '3 mins',
    title: 'Sunny window watch',
    summary: 'Watched birds by the window and settled comfortably on the rug.',
    resolved: true,
    resolvedBadge: 'Calm & resting',
    actionNeeded: false,
    events: [
      {
        id: 'hw-1',
        time: '10:45 AM',
        title: 'Resting on rug',
        description: 'Peaceful and relaxed by ORo.'
      },
      {
        id: 'hw-2',
        time: '10:43 AM',
        title: 'Watching birds',
        description: 'Gentle tail wag at the window.'
      },
      {
        id: 'hw-3',
        time: '10:42 AM',
        title: 'Morning stretch',
        description: 'Walked to living room window.'
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
    duration: '24 mins',
    title: 'Wi-Fi paused for 24 mins',
    summary: 'Brief pause while moving. Reconnected automatically; all clips saved.',
    resolved: true,
    resolvedBadge: 'Reconnected',
    actionNeeded: false,
    events: [
      {
        id: 'w-1',
        time: '10:42 AM',
        title: 'Wi-Fi reconnected',
        description: 'Signal strong; all offline clips saved.'
      },
      {
        id: 'w-2',
        time: '10:18 AM',
        title: 'Brief Wi-Fi pause',
        description: 'Switched to offline recording mode.'
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
    duration: '3 mins',
    title: 'Mail delivery at front door',
    summary: 'Heard mail drop; ORo played calming chime and pet settled right down.',
    resolved: true,
    resolvedBadge: 'Settled quickly',
    actionNeeded: false,
    events: [
      {
        id: 'ds-1',
        time: '10:05 AM',
        title: 'Resting on rug',
        description: 'Calm breathing and relaxed posture.'
      },
      {
        id: 'ds-2',
        time: '10:03 AM',
        title: 'Checked hallway',
        description: 'Curious sniff for 30 seconds.'
      },
      {
        id: 'ds-3',
        time: '10:02 AM',
        title: 'Mail dropped in slot',
        description: 'ORo played soothing chime.'
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
    duration: '24 mins',
    title: 'Morning play & water break',
    summary: 'Drank water in kitchen, did morning stretches, and greeted ORo.',
    resolved: true,
    resolvedBadge: 'Healthy & active',
    actionNeeded: false,
    events: [
      {
        id: 'p-1',
        time: '9:55 AM',
        title: 'Nose boop to ORo',
        description: 'Friendly camera tap & wag.'
      },
      {
        id: 'p-2',
        time: '9:47 AM',
        title: 'Water break',
        description: 'Hydrated in the kitchen.'
      },
      {
        id: 'p-3',
        time: '9:38 AM',
        title: 'Couch stretch',
        description: 'Full downward stretch.'
      },
      {
        id: 'p-4',
        time: '9:31 AM',
        title: 'Woke from rest',
        description: 'Gentle coat shake and stroll.'
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
    title: 'Routine software update',
    summary: 'Small update installed quietly on dock. All systems ready.',
    resolved: true,
    resolvedBadge: 'Up to date',
    actionNeeded: false,
    events: [
      {
        id: 's-1',
        time: '9:35 AM',
        title: 'Update complete',
        description: 'Pet safety features active.'
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
    duration: '40 mins',
    title: 'Sunbeam nap (40 mins)',
    summary: 'Deep sleep on window bed with steady resting breathing (18 bpm).',
    resolved: true,
    resolvedBadge: 'Peaceful sleep',
    actionNeeded: false,
    events: [
      {
        id: 'sn-1',
        time: '9:25 AM',
        title: 'Stirred gently',
        description: 'Slow stretch as sun moved.'
      },
      {
        id: 'sn-2',
        time: '9:02 AM',
        title: 'Deep sleep (18 bpm)',
        description: 'Calm, steady vitals.'
      },
      {
        id: 'sn-3',
        time: '8:45 AM',
        title: 'Curled up in bed',
        description: 'Settled into sunny spot.'
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
    duration: '13 mins',
    title: 'Morning treat & ball roll',
    summary: 'Tossed dental treat and played a quick 5-minute rolling ball game.',
    resolved: true,
    resolvedBadge: 'Playful',
    actionNeeded: false,
    events: [
      {
        id: 'td-1',
        time: '8:28 AM',
        title: 'Finished treat',
        description: 'Rested happily on rug.'
      },
      {
        id: 'td-2',
        time: '8:22 AM',
        title: 'Chased ball',
        description: '5 mins indoor activity.'
      },
      {
        id: 'td-3',
        time: '8:15 AM',
        title: 'Tossed dental treat',
        description: 'Morning bite dispensed.'
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
    duration: '20 mins',
    title: 'Morning departure greeting',
    summary: 'ORo started daytime watch. Cheerful tail-wag greeting when you left.',
    resolved: true,
    resolvedBadge: 'Happy greeting',
    actionNeeded: false,
    events: [
      {
        id: 'mg-1',
        time: '8:02 AM',
        title: 'Sniffed ORo bumper',
        description: 'Friendly morning check.'
      },
      {
        id: 'mg-2',
        time: '7:52 AM',
        title: 'Tail wag greeting',
        description: 'Positive, happy mood.'
      },
      {
        id: 'mg-3',
        time: '7:45 AM',
        title: 'ORo undocked',
        description: 'Started daytime watch.'
      }
    ]
  }
];

export const filterOptions = [
  { id: 'all', label: 'All', count: 8 },
  { id: 'attention', label: 'Needs look', count: 1 },
  { id: 'routine', label: 'Routine', count: 7 }
];
