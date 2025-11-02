// User profile and home screen data
export const userProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 32,
  memberSince: 'January 2024',
  avatar: null, // Placeholder for future avatar image
};

export const riskScore = {
  current: 7.5,
  max: 10,
  status: 'Moderate Risk',
  trend: 'improving', // improving, stable, worsening
  lastUpdated: '2024-01-15',
};

export const todaysPlan = [
  {
    id: 1,
    task: 'Morning Exercise Routine',
    time: '8:00 AM',
    completed: true,
    type: 'exercise',
  },
  {
    id: 2,
    task: 'Pain Assessment',
    time: '12:00 PM',
    completed: false,
    type: 'assessment',
  },
  {
    id: 3,
    task: 'Physical Therapy Session',
    time: '2:00 PM',
    completed: false,
    type: 'therapy',
  },
  {
    id: 4,
    task: 'Evening Stretch',
    time: '6:00 PM',
    completed: false,
    type: 'exercise',
  },
];

export const moodData = {
  current: 'Good',
  history: [
    { date: '2024-01-15', mood: 'Good' },
    { date: '2024-01-14', mood: 'Excellent' },
    { date: '2024-01-13', mood: 'Fair' },
    { date: '2024-01-12', mood: 'Good' },
  ],
};

export const painData = {
  current: 3,
  max: 10,
  location: 'Lower Back',
  history: [
    { date: '2024-01-15', level: 3 },
    { date: '2024-01-14', level: 4 },
    { date: '2024-01-13', level: 5 },
    { date: '2024-01-12', level: 3 },
  ],
};

export const alerts = [
  {
    id: 1,
    message: 'Remember to complete your morning exercises',
    type: 'info',
    timestamp: '2024-01-15T08:00:00',
    read: false,
  },
  {
    id: 2,
    message: 'New session data uploaded successfully',
    type: 'success',
    timestamp: '2024-01-15T14:30:00',
    read: false,
  },
  {
    id: 3,
    message: 'Your risk score has improved! Keep up the great work.',
    type: 'success',
    timestamp: '2024-01-14T09:15:00',
    read: true,
  },
  {
    id: 4,
    message: 'Weekly progress report is ready to view',
    type: 'info',
    timestamp: '2024-01-13T10:00:00',
    read: true,
  },
];

export default {
  userProfile,
  riskScore,
  todaysPlan,
  moodData,
  painData,
  alerts,
};

