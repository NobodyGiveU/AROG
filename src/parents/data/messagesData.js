// Message threads with coaches and healthcare providers
export const messageThreads = [
  {
    id: 1,
    participantName: 'Dr. Sarah Mitchell',
    participantRole: 'Primary Physician',
    participantType: 'doctor',
    avatar: null,
    lastMessage: {
      text: 'Emma\'s recovery is progressing well. Please continue with the current exercise plan.',
      timestamp: '2024-01-15T09:15:00',
      sender: 'Dr. Sarah Mitchell',
      read: true,
    },
    unreadCount: 0,
    lastActivity: '2024-01-15T09:15:00',
  },
  {
    id: 2,
    participantName: 'Lisa Chen, PT',
    participantRole: 'Physical Therapist',
    participantType: 'therapist',
    avatar: null,
    lastMessage: {
      text: 'Great job on the exercises today! I noticed improvement in flexibility.',
      timestamp: '2024-01-14T16:30:00',
      sender: 'Lisa Chen, PT',
      read: true,
    },
    unreadCount: 0,
    lastActivity: '2024-01-14T16:30:00',
  },
  {
    id: 3,
    participantName: 'Care Coordinator Team',
    participantRole: 'Care Coordinator',
    participantType: 'team',
    avatar: null,
    lastMessage: {
      text: 'Your next appointment is scheduled for January 22nd at 2:00 PM.',
      timestamp: '2024-01-13T14:00:00',
      sender: 'Care Coordinator Team',
      read: true,
    },
    unreadCount: 0,
    lastActivity: '2024-01-13T14:00:00',
  },
  {
    id: 4,
    participantName: 'Dr. Michael Thompson',
    participantRole: 'Surgeon',
    participantType: 'doctor',
    avatar: null,
    lastMessage: {
      text: 'The 6-week post-op assessment looks good. We can discuss next steps at the follow-up.',
      timestamp: '2024-01-12T11:00:00',
      sender: 'Dr. Michael Thompson',
      read: true,
    },
    unreadCount: 0,
    lastActivity: '2024-01-12T11:00:00',
  },
  {
    id: 5,
    participantName: 'Emily Foster, RN',
    participantRole: 'Nurse Coordinator',
    participantType: 'nurse',
    avatar: null,
    lastMessage: {
      text: 'I have a question about Emma\'s medication schedule. Could we discuss this?',
      timestamp: '2024-01-15T14:20:00',
      sender: 'Emily Foster, RN',
      read: false,
    },
    unreadCount: 1,
    lastActivity: '2024-01-15T14:20:00',
  },
];

export const messageHistory = [
  {
    threadId: 1,
    messages: [
      {
        id: 1,
        text: 'Good morning, I wanted to follow up on Emma\'s progress since the last visit.',
        sender: 'You',
        timestamp: '2024-01-15T08:30:00',
        read: true,
      },
      {
        id: 2,
        text: 'Thank you for reaching out. I reviewed her latest data, and Emma\'s recovery is progressing well. Please continue with the current exercise plan.',
        sender: 'Dr. Sarah Mitchell',
        timestamp: '2024-01-15T09:15:00',
        read: true,
      },
    ],
  },
  {
    threadId: 5,
    messages: [
      {
        id: 3,
        text: 'I have a question about Emma\'s medication schedule. Could we discuss this?',
        sender: 'Emily Foster, RN',
        timestamp: '2024-01-15T14:20:00',
        read: false,
      },
    ],
  },
];

export const quickContacts = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Primary Physician',
    phone: '(555) 123-4567',
    email: 's.mitchell@hospital.com',
    available: true,
    officeHours: 'Mon-Fri, 9:00 AM - 5:00 PM',
  },
  {
    id: 2,
    name: 'Lisa Chen, PT',
    role: 'Physical Therapist',
    phone: '(555) 234-5678',
    email: 'l.chen@ptcenter.com',
    available: true,
    officeHours: 'Mon-Fri, 8:00 AM - 6:00 PM',
  },
  {
    id: 3,
    name: 'Emergency Contact',
    role: 'Emergency Services',
    phone: '911',
    email: null,
    available: true,
    officeHours: '24/7',
  },
];

export const messageStats = {
  totalThreads: messageThreads.length,
  unreadMessages: messageThreads.reduce((sum, thread) => sum + thread.unreadCount, 0),
  lastContact: '2024-01-15T14:20:00',
  averageResponseTime: '4.5 hours',
};

export default {
  messageThreads,
  messageHistory,
  quickContacts,
  messageStats,
};

