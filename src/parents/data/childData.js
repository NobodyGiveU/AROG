// Child profile and monitoring data for Parents Portal
export const childProfile = {
  id: 1,
  name: 'Emma Johnson',
  age: 14,
  dateOfBirth: '2010-03-15',
  gender: 'Female',
  height: '5\'4"',
  weight: '110 lbs',
  diagnosis: 'Post-surgical recovery',
  surgeryDate: '2023-12-10',
  condition: 'Spinal fusion recovery',
  primaryDoctor: 'Dr. Sarah Mitchell',
  medicalRecordNumber: 'MRN-2023-1456',
};

export const riskScore = {
  current: 6.5,
  max: 10,
  status: 'Moderate Risk',
  trend: 'stable',
  lastUpdated: '2024-01-15T10:30:00',
  history: [
    { date: '2024-01-15', score: 6.5, status: 'Moderate Risk' },
    { date: '2024-01-14', score: 6.8, status: 'Moderate Risk' },
    { date: '2024-01-13', score: 7.0, status: 'Moderate Risk' },
    { date: '2024-01-12', score: 6.2, status: 'Low-Moderate Risk' },
    { date: '2024-01-11', score: 6.5, status: 'Moderate Risk' },
  ],
};

export const adherenceStats = {
  currentWeek: {
    weekStart: '2024-01-08',
    weekEnd: '2024-01-14',
    exercisesCompleted: 18,
    exercisesTotal: 21,
    completionRate: 85.7,
    sessionsCompleted: 5,
    sessionsTotal: 6,
    sessionsRate: 83.3,
  },
  lastWeek: {
    weekStart: '2024-01-01',
    weekEnd: '2024-01-07',
    exercisesCompleted: 20,
    exercisesTotal: 21,
    completionRate: 95.2,
    sessionsCompleted: 6,
    sessionsTotal: 6,
    sessionsRate: 100,
  },
  monthly: {
    month: 'January 2024',
    exercisesCompleted: 72,
    exercisesTotal: 84,
    completionRate: 85.7,
    sessionsCompleted: 22,
    sessionsTotal: 24,
    sessionsRate: 91.7,
  },
  trends: {
    exerciseTrend: 'improving', // improving, stable, declining
    sessionTrend: 'stable',
    overallTrend: 'improving',
  },
};

export const dailyActivity = {
  today: {
    date: '2024-01-15',
    exercisesCompleted: 3,
    exercisesTotal: 4,
    sessionsCompleted: 1,
    painLevel: 4,
    mood: 'Good',
    notes: 'Completed morning exercises, skipped evening stretch',
  },
  yesterday: {
    date: '2024-01-14',
    exercisesCompleted: 3,
    exercisesTotal: 3,
    sessionsCompleted: 1,
    painLevel: 3,
    mood: 'Excellent',
    notes: 'Full completion, felt strong',
  },
};

export const progressMetrics = {
  painManagement: {
    averagePainLevel: 3.8,
    targetPainLevel: 3.0,
    daysUnderTarget: 8,
    daysOverTarget: 7,
  },
  exerciseCompliance: {
    weeklyAverage: 85.7,
    monthlyAverage: 87.2,
    target: 90.0,
    onTrack: true,
  },
  recoveryProgress: {
    weeksSinceSurgery: 5,
    expectedRecoveryWeeks: 12,
    progressPercentage: 41.7,
    milestones: [
      { milestone: 'Surgery', completed: true, date: '2023-12-10' },
      { milestone: 'First exercises', completed: true, date: '2023-12-20' },
      { milestone: 'Remove brace', completed: false, estimatedDate: '2024-02-15' },
      { milestone: 'Return to school', completed: false, estimatedDate: '2024-03-01' },
    ],
  },
};

export default {
  childProfile,
  riskScore,
  adherenceStats,
  dailyActivity,
  progressMetrics,
};

