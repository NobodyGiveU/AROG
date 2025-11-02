// Team information and member data
export const teamInfo = {
  id: 1,
  name: 'Recovery Team A',
  coach: 'Coach Martinez',
  assistantCoach: 'Coach Smith',
  location: 'Regional Rehabilitation Center',
  established: '2023-12-01',
  totalMembers: 12,
};

export const teamRisk = {
  average: 6.8,
  max: 10,
  status: 'Moderate Risk',
  trend: 'improving',
  lastUpdated: '2024-01-15T10:00:00',
  history: [
    { date: '2024-01-15', score: 6.8, status: 'Moderate Risk' },
    { date: '2024-01-14', score: 7.0, status: 'Moderate Risk' },
    { date: '2024-01-13', score: 7.2, status: 'Moderate Risk' },
    { date: '2024-01-12', score: 7.5, status: 'Moderate-High Risk' },
  ],
};

export const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    age: 15,
    riskScore: 6.5,
    status: 'Active',
    attendanceRate: 95,
    role: 'Team Member',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    age: 16,
    riskScore: 5.8,
    status: 'Active',
    attendanceRate: 100,
    role: 'Team Lead',
  },
  {
    id: 3,
    name: 'Mike Chen',
    age: 14,
    riskScore: 7.2,
    status: 'Active',
    attendanceRate: 88,
    role: 'Team Member',
  },
  {
    id: 4,
    name: 'Emma Davis',
    age: 15,
    riskScore: 6.0,
    status: 'Active',
    attendanceRate: 92,
    role: 'Team Member',
  },
  {
    id: 5,
    name: 'James Wilson',
    age: 16,
    riskScore: 7.5,
    status: 'Active',
    attendanceRate: 85,
    role: 'Team Member',
  },
  {
    id: 6,
    name: 'Maria Garcia',
    age: 15,
    riskScore: 6.8,
    status: 'Active',
    attendanceRate: 98,
    role: 'Team Member',
  },
  {
    id: 7,
    name: 'Chris Lee',
    age: 14,
    riskScore: 7.0,
    status: 'Active',
    attendanceRate: 90,
    role: 'Team Member',
  },
  {
    id: 8,
    name: 'Lisa Anderson',
    age: 16,
    riskScore: 6.2,
    status: 'Active',
    attendanceRate: 95,
    role: 'Team Member',
  },
];

export const coaches = [
  {
    id: 1,
    name: 'Coach Martinez',
    role: 'Head Coach',
    specialization: 'Physical Therapy',
    email: 'martinez@rehabcenter.com',
    phone: '(555) 123-4567',
  },
  {
    id: 2,
    name: 'Coach Smith',
    role: 'Assistant Coach',
    specialization: 'Exercise Physiology',
    email: 'smith@rehabcenter.com',
    phone: '(555) 234-5678',
  },
];

export const teamStats = {
  totalMembers: teamMembers.length,
  activeMembers: teamMembers.filter((m) => m.status === 'Active').length,
  averageRiskScore: teamRisk.average,
  averageAttendance: Math.round(
    teamMembers.reduce((sum, m) => sum + m.attendanceRate, 0) / teamMembers.length
  ),
  totalSessionsThisMonth: 22,
  upcomingSessions: 3,
};

export default {
  teamInfo,
  teamRisk,
  teamMembers,
  coaches,
  teamStats,
};

