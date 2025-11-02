// Team schedule and events
export const weeklySchedule = [
  {
    id: 1,
    day: 'Monday',
    date: '2024-01-15',
    time: '3:00 PM',
    activity: 'Group Exercise Session',
    location: 'Gym A',
    coach: 'Coach Martinez',
    participants: 10,
    duration: '45 min',
    type: 'exercise',
  },
  {
    id: 2,
    day: 'Wednesday',
    date: '2024-01-17',
    time: '3:00 PM',
    activity: 'Team Challenge',
    location: 'Gym B',
    coach: 'Coach Smith',
    participants: 12,
    duration: '50 min',
    type: 'challenge',
  },
  {
    id: 3,
    day: 'Friday',
    date: '2024-01-19',
    time: '3:00 PM',
    activity: 'Progress Review Session',
    location: 'Gym A',
    coach: 'Coach Martinez',
    participants: 12,
    duration: '40 min',
    type: 'review',
  },
];

export const upcomingEvents = [
  {
    id: 1,
    title: 'Team Building Activity',
    date: '2024-01-25',
    time: '2:00 PM',
    location: 'Outdoor Court',
    description: 'Team bonding and fun activities',
    participants: 12,
    type: 'social',
  },
  {
    id: 2,
    title: 'Monthly Progress Assessment',
    date: '2024-01-30',
    time: '3:00 PM',
    location: 'Conference Room',
    description: 'Individual progress reviews with coaches',
    participants: 12,
    type: 'assessment',
  },
  {
    id: 3,
    title: 'Guest Speaker: Nutrition & Recovery',
    date: '2024-02-05',
    time: '4:00 PM',
    location: 'Education Center',
    description: 'Learn about nutrition for optimal recovery',
    participants: 15,
    type: 'education',
  },
];

export const recentEvents = [
  {
    id: 1,
    title: 'Group Exercise Session',
    date: '2024-01-12',
    time: '3:00 PM',
    location: 'Gym A',
    status: 'Completed',
    attendance: 10,
    notes: 'Great session, all participants engaged',
  },
  {
    id: 2,
    title: 'Team Challenge',
    date: '2024-01-10',
    time: '3:00 PM',
    location: 'Gym B',
    status: 'Completed',
    attendance: 11,
    notes: 'New record set!',
  },
];

export const scheduleTypes = [
  { id: 'exercise', label: 'Exercise', color: '#FFC107' }, // Yellow
  { id: 'challenge', label: 'Challenge', color: '#9C27B0' }, // Purple
  { id: 'review', label: 'Review', color: '#FFE082' }, // Light Yellow
  { id: 'education', label: 'Education', color: '#FFC107' }, // Yellow
  { id: 'social', label: 'Social', color: '#9C27B0' }, // Purple
];

export const thisWeekSchedule = weeklySchedule.filter(
  (item) =>
    new Date(item.date) >= new Date('2024-01-15') &&
    new Date(item.date) <= new Date('2024-01-21')
);

export default {
  weeklySchedule,
  upcomingEvents,
  recentEvents,
  scheduleTypes,
  thisWeekSchedule,
};

