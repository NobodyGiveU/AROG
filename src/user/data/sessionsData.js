// Session history and sensor data
export const sessionHistory = [
  {
    id: 1,
    date: '2024-01-15',
    duration: '30 min',
    durationMinutes: 30,
    type: 'Exercise Session',
    status: 'Completed',
    exercises: ['Shoulder Rolls', 'Neck Stretches', 'Back Strengthening'],
    videoUrl: null,
    notes: 'Good session, felt strong throughout',
  },
  {
    id: 2,
    date: '2024-01-14',
    duration: '25 min',
    durationMinutes: 25,
    type: 'Physical Therapy',
    status: 'Completed',
    exercises: ['Therapeutic stretches', 'Core stability'],
    videoUrl: null,
    notes: 'Focused on lower back pain relief',
  },
  {
    id: 3,
    date: '2024-01-13',
    duration: '20 min',
    durationMinutes: 20,
    type: 'Exercise Session',
    status: 'Completed',
    exercises: ['Morning routine', 'Balance training'],
    videoUrl: null,
    notes: null,
  },
  {
    id: 4,
    date: '2024-01-12',
    duration: '35 min',
    durationMinutes: 35,
    type: 'Physical Therapy',
    status: 'Completed',
    exercises: ['Flexibility work', 'Strength training'],
    videoUrl: null,
    notes: 'Longer session, increased intensity',
  },
  {
    id: 5,
    date: '2024-01-11',
    duration: '28 min',
    durationMinutes: 28,
    type: 'Exercise Session',
    status: 'Completed',
    exercises: ['Full body routine'],
    videoUrl: null,
    notes: null,
  },
  {
    id: 6,
    date: '2024-01-10',
    duration: '22 min',
    durationMinutes: 22,
    type: 'Exercise Session',
    status: 'Completed',
    exercises: ['Recovery exercises', 'Light stretching'],
    videoUrl: null,
    notes: 'Rest day, light activity',
  },
  {
    id: 7,
    date: '2024-01-09',
    duration: '32 min',
    durationMinutes: 32,
    type: 'Physical Therapy',
    status: 'Completed',
    exercises: ['Advanced movements', 'Pain management'],
    videoUrl: null,
    notes: 'Great progress today',
  },
];

export const sessionTypes = [
  'Exercise Session',
  'Physical Therapy',
  'Rehabilitation',
  'Pain Management',
  'Balance Training',
];

export const recentSessionStats = {
  totalSessions: sessionHistory.length,
  totalMinutes: sessionHistory.reduce((sum, s) => sum + s.durationMinutes, 0),
  averageDuration: Math.round(
    sessionHistory.reduce((sum, s) => sum + s.durationMinutes, 0) /
      sessionHistory.length
  ),
  completionRate: 100, // percentage
  lastSessionDate: '2024-01-15',
};

export default {
  sessionHistory,
  sessionTypes,
  recentSessionStats,
};

