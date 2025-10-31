// // src/data/questions.js
// export const questions = [
//   {
//     id: 'name',
//     question: "What's your name?",
//     type: 'text',
//     placeholder: 'Enter your name'
//   },
//   {
//     id: 'birthDate',
//     question: 'When were you born?',
//     type: 'date'
//   },
//   {
//     id: 'birthTime',
//     question: 'What time were you born?',
//     type: 'time',
//     subtitle: 'This helps us calculate your rising sign'
//   },
//   {
//     id: 'concern',
//     question: 'What would you like guidance on?',
//     type: 'choice',
//     options: ['Career', 'Love', 'Health', 'Finance', 'Life Path']
//   },
//   {
//     id: 'feeling',
//     question: 'How are you feeling lately?',
//     type: 'choice',
//     options: ['Confused', 'Hopeful', 'Stuck', 'Excited', 'Anxious']
//   }
// ];
// src/data/questions.js
export const questions = [
  {
    id: 'name',
    question: "What's your name?",
    type: 'text',
    placeholder: 'Enter your name',
    subtitle: 'This helps us personalize your reading'
  },
  {
    id: 'gender',
    question: 'What is your gender?',
    type: 'choice',
    options: ['Male', 'Female', 'Other', 'Prefer not to say']
  },
  {
    id: 'birthDate',
    question: 'When were you born?',
    type: 'date',
    subtitle: 'We use this to calculate your sun sign'
  },
  {
    id: 'birthPlace',
    question: 'Where were you born?',
    type: 'text',
    placeholder: 'City name (e.g., Mumbai, Delhi)',
    subtitle: 'Your birthplace helps with more accurate readings'
  },
  {
    id: 'relationshipStatus',
    question: 'What is your relationship status?',
    type: 'choice',
    options: ['Single', 'In a Relationship', 'Married', 'Complicated', 'Prefer not to say']
  },
  {
    id: 'occupation',
    question: 'What do you do?',
    type: 'choice',
    options: ['Student', 'Working Professional', 'Business Owner', 'Freelancer', 'Homemaker', 'Retired', 'Between Jobs']
  },
  {
    id: 'concern',
    question: 'What would you like guidance on?',
    type: 'choice',
    options: ['Career', 'Love & Relationships', 'Health & Wellness', 'Finance & Money', 'Family', 'Personal Growth', 'Life Purpose']
  },
  {
    id: 'specificConcern',
    question: 'Can you tell us more about your concern?',
    type: 'textarea',
    placeholder: `Share what's on your mind... (optional)`,
    optional: true,
    subtitle: 'The more details you share, the better we can guide you'
  },
  {
    id: 'feeling',
    question: 'How are you feeling about life lately?',
    type: 'choice',
    options: ['Confused', 'Hopeful', 'Stuck', 'Excited', 'Anxious', 'Content', 'Overwhelmed']
  },
  {
    id: 'expectations',
    question: 'What are you hoping to gain from this reading?',
    type: 'choice',
    options: ['Clear Direction', 'Peace of Mind', 'Better Understanding', 'Confirmation', 'New Perspective', 'Practical Advice']
  }
];
