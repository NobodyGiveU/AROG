// Team session history
export const teamSessions = [
  {
    id: 1,
    date: '2024-01-15',
    duration: '45 min',
    durationMinutes: 45,
    type: 'Team Session',
    coach: 'Coach Martinez',
    participants: 10,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Group Warm-up', 'Circuit Training', 'Cool-down'],
    notes: 'Excellent participation from all team members',
  },
  {
    id: 2,
    date: '2024-01-12',
    duration: '40 min',
    durationMinutes: 40,
    type: 'Team Session',
    coach: 'Coach Smith',
    participants: 8,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Strength Training', 'Flexibility Work'],
    notes: 'Good progress overall',
  },
  {
    id: 3,
    date: '2024-01-10',
    duration: '50 min',
    durationMinutes: 50,
    type: 'Group Challenge',
    coach: 'Coach Martinez',
    participants: 12,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Team Challenge Circuit', 'Competitive Activities'],
    notes: 'New team record achieved!',
  },
  {
    id: 4,
    date: '2024-01-08',
    duration: '35 min',
    durationMinutes: 35,
    type: 'Team Session',
    coach: 'Coach Smith',
    participants: 9,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Recovery Exercises', 'Balance Training'],
    notes: null,
  },
  {
    id: 5,
    date: '2024-01-05',
    duration: '45 min',
    durationMinutes: 45,
    type: 'Team Session',
    coach: 'Coach Martinez',
    participants: 11,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Full Body Workout', 'Team Exercises'],
    notes: 'Great energy today',
  },
  {
    id: 6,
    date: '2024-01-03',
    duration: '40 min',
    durationMinutes: 40,
    type: 'Progress Review',
    coach: 'Coach Martinez',
    participants: 12,
    totalParticipants: 12,
    status: 'Completed',
    exercises: ['Individual Assessments', 'Group Discussion'],
    notes: 'Monthly progress review completed',
  },
];

export const sessionTypes = [
  'Team Session',
  'Group Challenge',
  'Progress Review',
  'Individual Session',
  'Social Activity',
];

export const sessionStats = {
  totalSessions: teamSessions.length,
  totalMinutes: teamSessions.reduce((sum, s) => sum + s.durationMinutes, 0),
  averageDuration: Math.round(
    teamSessions.reduce((sum, s) => sum + s.durationMinutes, 0) / teamSessions.length
  ),
  averageAttendance: Math.round(
    (teamSessions.reduce((sum, s) => sum + s.participants, 0) /
      teamSessions.reduce((sum, s) => sum + s.totalParticipants, 0)) *
      100
  ),
  completionRate: 100,
  lastSessionDate: '2024-01-15',
};

export const upcomingSessions = [
  {
    id: 1,
    date: '2024-01-17',
    time: '3:00 PM',
    type: 'Team Challenge',
    coach: 'Coach Smith',
    expectedParticipants: 12,
    location: 'Gym B',
  },
  {
    id: 2,
    date: '2024-01-19',
    time: '3:00 PM',
    type: 'Progress Review',
    coach: 'Coach Martinez',
    expectedParticipants: 12,
    location: 'Gym A',
  },
];

export default {
  teamSessions,
  sessionTypes,
  sessionStats,
  upcomingSessions,
};

