// // // server/controllers/astrologyController.js
// // const calculateSunSign = (birthDate) => {
// //   const date = new Date(birthDate);
// //   const month = date.getMonth() + 1;
// //   const day = date.getDate();

// //   const signs = {
// //     'Aries': { emoji: '♈', dates: [[3,21],[4,19]], desc: 'Bold and ambitious, you are a natural leader who faces life with courage and passion.' },
// //     'Taurus': { emoji: '♉', dates: [[4,20],[5,20]], desc: 'Reliable and patient, you appreciate beauty and value stability in all aspects of life.' },
// //     'Gemini': { emoji: '♊', dates: [[5,21],[6,20]], desc: 'Curious and adaptable, you thrive on communication and new experiences.' },
// //     'Cancer': { emoji: '♋', dates: [[6,21],[7,22]], desc: 'Intuitive and nurturing, you deeply value home, family, and emotional connections.' },
// //     'Leo': { emoji: '♌', dates: [[7,23],[8,22]], desc: 'Confident and generous, you shine brightly and inspire others with your warmth.' },
// //     'Virgo': { emoji: '♍', dates: [[8,23],[9,22]], desc: 'Analytical and practical, you excel at organization and helping others.' },
// //     'Libra': { emoji: '♎', dates: [[9,23],[10,22]], desc: 'Diplomatic and fair-minded, you seek balance and harmony in all relationships.' },
// //     'Scorpio': { emoji: '♏', dates: [[10,23],[11,21]], desc: 'Passionate and resourceful, you possess deep emotional strength and determination.' },
// //     'Sagittarius': { emoji: '♐', dates: [[11,22],[12,21]], desc: 'Optimistic and adventurous, you seek truth and love exploring new horizons.' },
// //     'Capricorn': { emoji: '♑', dates: [[12,22],[1,19]], desc: 'Disciplined and ambitious, you work steadily toward your goals with determination.' },
// //     'Aquarius': { emoji: '♒', dates: [[1,20],[2,18]], desc: 'Progressive and independent, you think outside the box and value humanitarian causes.' },
// //     'Pisces': { emoji: '♓', dates: [[2,19],[3,20]], desc: 'Compassionate and artistic, you are deeply intuitive and empathetic.' }
// //   };

// //   for (const [signName, signData] of Object.entries(signs)) {
// //     const [[startMonth, startDay], [endMonth, endDay]] = signData.dates;
// //     if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
// //       return { name: signName, emoji: signData.emoji, description: signData.desc };
// //     }
// //   }
  
// //   return signs['Aries'];
// // };

// // const generateGuidance = (concern, feeling, sunSign) => {
// //   const guidanceMap = {
// //     'Career': `As a ${sunSign}, your natural talents shine in leadership roles. ${feeling === 'Confused' ? 'Take time to reflect on what truly fulfills you.' : 'Trust your instincts and take bold steps forward.'}`,
// //     'Love': `Your ${sunSign} energy brings warmth to relationships. ${feeling === 'Anxious' ? 'Practice self-love first, and the right person will come.' : 'Open your heart and communicate honestly.'}`,
// //     'Health': `Focus on balance and self-care. ${feeling === 'Stuck' ? 'Try a new wellness routine to break the pattern.' : 'Your body is ready for positive changes.'}`,
// //     'Finance': `Financial stability comes through ${sunSign === 'Taurus' ? 'patience and smart planning' : 'calculated risks and hard work'}. ${feeling === 'Hopeful' ? 'Your optimism will attract opportunities.' : 'Stay disciplined with your budget.'}`,
// //     'Life Path': `Your journey as a ${sunSign} is unique. ${feeling === 'Excited' ? 'Channel this energy into meaningful goals.' : 'Trust that everything is unfolding as it should.'}`
// //   };
  
// //   return guidanceMap[concern] || 'Follow your intuition and trust the universe.';
// // };

// // const generateInsights = (concern, sunSign) => {
// //   return [
// //     `Your ${sunSign} energy is particularly strong this month`,
// //     `Focus on ${concern.toLowerCase()} will bring positive transformations`,
// //     `Trust your intuition when making important decisions`,
// //     `Collaboration with others will amplify your success`
// //   ];
// // };

// // const getLuckyElements = (sunSign) => {
// //   const luckyMap = {
// //     'Aries': { number: 9, day: 'Tuesday', color: 'Red', stone: 'Ruby' },
// //     'Taurus': { number: 6, day: 'Friday', color: 'Green', stone: 'Emerald' },
// //     'Gemini': { number: 5, day: 'Wednesday', color: 'Yellow', stone: 'Agate' },
// //     'Cancer': { number: 2, day: 'Monday', color: 'Silver', stone: 'Pearl' },
// //     'Leo': { number: 1, day: 'Sunday', color: 'Gold', stone: 'Peridot' },
// //     'Virgo': { number: 5, day: 'Wednesday', color: 'Navy', stone: 'Sapphire' },
// //     'Libra': { number: 6, day: 'Friday', color: 'Pink', stone: 'Opal' },
// //     'Scorpio': { number: 9, day: 'Tuesday', color: 'Maroon', stone: 'Topaz' },
// //     'Sagittarius': { number: 3, day: 'Thursday', color: 'Purple', stone: 'Turquoise' },
// //     'Capricorn': { number: 8, day: 'Saturday', color: 'Brown', stone: 'Garnet' },
// //     'Aquarius': { number: 4, day: 'Saturday', color: 'Blue', stone: 'Amethyst' },
// //     'Pisces': { number: 7, day: 'Thursday', color: 'Sea Green', stone: 'Aquamarine' }
// //   };
  
// //   return luckyMap[sunSign] || luckyMap['Aries'];
// // };

// // const submit = async (req, res) => {
// //   try {
// //     const { name, birthDate, birthTime, concern, feeling } = req.body;

// //     const sunSign = calculateSunSign(birthDate);
// //     const guidance = generateGuidance(concern, feeling, sunSign.name);
// //     const insights = generateInsights(concern, sunSign.name);
// //     const lucky = getLuckyElements(sunSign.name);

// //     const report = {
// //       name,
// //       sunSign,
// //       concern,
// //       feeling,
// //       guidance,
// //       insights,
// //       lucky,
// //       createdAt: new Date()
// //     };

// //     res.status(200).json({ 
// //       message: 'Report generated successfully',
// //       report 
// //     });

// //   } catch (error) {
// //     console.error('Error:', error);
// //     res.status(500).json({ message: 'Failed to generate report' });
// //   }
// // };

// // module.exports = { submit };
// // server/controllers/astrologyController.js
// const calculateSunSign = (birthDate) => {
//   const date = new Date(birthDate);
//   const month = date.getMonth() + 1;
//   const day = date.getDate();

//   const signs = {
//     'Aries': { emoji: '♈', dates: [[3,21],[4,19]], desc: 'Bold and ambitious, you are a natural leader who faces life with courage and passion.' },
//     'Taurus': { emoji: '♉', dates: [[4,20],[5,20]], desc: 'Reliable and patient, you appreciate beauty and value stability in all aspects of life.' },
//     'Gemini': { emoji: '♊', dates: [[5,21],[6,20]], desc: 'Curious and adaptable, you thrive on communication and new experiences.' },
//     'Cancer': { emoji: '♋', dates: [[6,21],[7,22]], desc: 'Intuitive and nurturing, you deeply value home, family, and emotional connections.' },
//     'Leo': { emoji: '♌', dates: [[7,23],[8,22]], desc: 'Confident and generous, you shine brightly and inspire others with your warmth.' },
//     'Virgo': { emoji: '♍', dates: [[8,23],[9,22]], desc: 'Analytical and practical, you excel at organization and helping others.' },
//     'Libra': { emoji: '♎', dates: [[9,23],[10,22]], desc: 'Diplomatic and fair-minded, you seek balance and harmony in all relationships.' },
//     'Scorpio': { emoji: '♏', dates: [[10,23],[11,21]], desc: 'Passionate and resourceful, you possess deep emotional strength and determination.' },
//     'Sagittarius': { emoji: '♐', dates: [[11,22],[12,21]], desc: 'Optimistic and adventurous, you seek truth and love exploring new horizons.' },
//     'Capricorn': { emoji: '♑', dates: [[12,22],[1,19]], desc: 'Disciplined and ambitious, you work steadily toward your goals with determination.' },
//     'Aquarius': { emoji: '♒', dates: [[1,20],[2,18]], desc: 'Progressive and independent, you think outside the box and value humanitarian causes.' },
//     'Pisces': { emoji: '♓', dates: [[2,19],[3,20]], desc: 'Compassionate and artistic, you are deeply intuitive and empathetic.' }
//   };

//   for (const [signName, signData] of Object.entries(signs)) {
//     const [[startMonth, startDay], [endMonth, endDay]] = signData.dates;
//     if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
//       return { name: signName, emoji: signData.emoji, description: signData.desc };
//     }
//   }
  
//   return { name: 'Aries', emoji: '♈', description: signs['Aries'].desc };
// };

// const generateGuidance = (concern, feeling, sunSignName) => {
//   const guidanceMap = {
//     'Career': {
//       'Confused': `As a ${sunSignName}, take time to reflect on what truly fulfills you. Your natural talents will guide you to the right path.`,
//       'Hopeful': `Your optimism is well-placed! As a ${sunSignName}, trust your instincts and take bold steps forward in your career.`,
//       'Stuck': `Feeling stuck is temporary. Your ${sunSignName} energy has the power to break through any barrier. Try a new approach.`,
//       'Excited': `Channel this excitement into action! Your ${sunSignName} determination will help you achieve great things.`,
//       'Anxious': `Your anxiety shows you care deeply. As a ${sunSignName}, remember that your worth isn't defined by your career alone.`
//     },
//     'Love': {
//       'Confused': `As a ${sunSignName}, take time to understand your heart. True love requires clarity and self-awareness.`,
//       'Hopeful': `Your positive energy attracts the right people. As a ${sunSignName}, keep your heart open and communicate honestly.`,
//       'Stuck': `Love requires patience. Your ${sunSignName} nature knows that good things take time. Trust the process.`,
//       'Excited': `New love is beautiful! As a ${sunSignName}, enjoy this journey while staying grounded in reality.`,
//       'Anxious': `Practice self-love first. Your ${sunSignName} compassion should extend to yourself before others.`
//     },
//     'Health': {
//       'Confused': `Listen to your body. As a ${sunSignName}, your intuition about health is usually right.`,
//       'Hopeful': `Your positive mindset is already healing. As a ${sunSignName}, maintain this optimism along with healthy habits.`,
//       'Stuck': `Try a new wellness routine. Your ${sunSignName} adaptability will help you find what works.`,
//       'Excited': `Your body is ready for positive changes! As a ${sunSignName}, channel this energy into consistent habits.`,
//       'Anxious': `Stress affects your wellbeing. As a ${sunSignName}, prioritize mental health as much as physical health.`
//     },
//     'Finance': {
//       'Confused': `Financial clarity comes with planning. As a ${sunSignName}, create a budget that aligns with your values.`,
//       'Hopeful': `Your optimism will attract opportunities. As a ${sunSignName}, pair hope with smart financial decisions.`,
//       'Stuck': `Financial stagnation is temporary. Your ${sunSignName} determination will find new income sources.`,
//       'Excited': `Great! As a ${sunSignName}, use this momentum to build long-term wealth, not just short-term gains.`,
//       'Anxious': `Financial stress is real. As a ${sunSignName}, focus on what you can control and seek professional advice.`
//     },
//     'Life Path': {
//       'Confused': `Your journey as a ${sunSignName} is unique. Confusion often precedes clarity. Keep moving forward.`,
//       'Hopeful': `Hope is a compass. As a ${sunSignName}, follow your passions and the path will reveal itself.`,
//       'Stuck': `Feeling stuck means you're ready for growth. Your ${sunSignName} spirit knows it's time for change.`,
//       'Excited': `Channel this energy into meaningful goals! As a ${sunSignName}, your enthusiasm can move mountains.`,
//       'Anxious': `Anxiety about the future is normal. As a ${sunSignName}, focus on the present moment and trust the universe.`
//     }
//   };
  
//   return guidanceMap[concern]?.[feeling] || `As a ${sunSignName}, trust your intuition and follow your heart.`;
// };

// const generateInsights = (concern, sunSignName, feeling) => {
//   const baseInsights = [
//     `Your ${sunSignName} energy is particularly strong this month`,
//     `Focus on ${concern.toLowerCase()} will bring positive transformations`,
//     `Trust your intuition when making important decisions`
//   ];

//   const feelingInsights = {
//     'Confused': 'Take time for self-reflection and journaling',
//     'Hopeful': 'Your optimism will attract positive opportunities',
//     'Stuck': 'Consider trying something completely new',
//     'Excited': 'Use this energy wisely for maximum impact',
//     'Anxious': 'Practice mindfulness and breathing exercises'
//   };

//   return [...baseInsights, feelingInsights[feeling]];
// };

// const getLuckyElements = (sunSignName) => {
//   const luckyMap = {
//     'Aries': { number: 9, day: 'Tuesday', color: 'Red', stone: 'Ruby' },
//     'Taurus': { number: 6, day: 'Friday', color: 'Green', stone: 'Emerald' },
//     'Gemini': { number: 5, day: 'Wednesday', color: 'Yellow', stone: 'Agate' },
//     'Cancer': { number: 2, day: 'Monday', color: 'Silver', stone: 'Pearl' },
//     'Leo': { number: 1, day: 'Sunday', color: 'Gold', stone: 'Peridot' },
//     'Virgo': { number: 5, day: 'Wednesday', color: 'Navy', stone: 'Sapphire' },
//     'Libra': { number: 6, day: 'Friday', color: 'Pink', stone: 'Opal' },
//     'Scorpio': { number: 9, day: 'Tuesday', color: 'Maroon', stone: 'Topaz' },
//     'Sagittarius': { number: 3, day: 'Thursday', color: 'Purple', stone: 'Turquoise' },
//     'Capricorn': { number: 8, day: 'Saturday', color: 'Brown', stone: 'Garnet' },
//     'Aquarius': { number: 4, day: 'Saturday', color: 'Blue', stone: 'Amethyst' },
//     'Pisces': { number: 7, day: 'Thursday', color: 'Sea Green', stone: 'Aquamarine' }
//   };
  
//   return luckyMap[sunSignName] || luckyMap['Aries'];
// };

// const submit = async (req, res) => {
//   try {
//     const { name, birthDate, birthTime, concern, feeling } = req.body;

//     // Calculate sun sign
//     const sunSign = calculateSunSign(birthDate);
    
//     // Generate personalized content
//     const guidance = generateGuidance(concern, feeling, sunSign.name);
//     const insights = generateInsights(concern, sunSign.name, feeling);
//     const lucky = getLuckyElements(sunSign.name);

//     const report = {
//       name,
//       birthDate,
//       birthTime,
//       sunSign,
//       concern,
//       feeling,
//       guidance,
//       insights,
//       lucky,
//       createdAt: new Date()
//     };

//     res.status(200).json({ 
//       message: 'Report generated successfully',
//       report 
//     });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Failed to generate report' });
//   }
// };

// module.exports = { submit };
// server/controllers/astrologyController.js

const calculateSunSign = (birthDate) => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const signs = {
    'Aries': { 
      emoji: '♈', 
      dates: [[3,21],[4,19]], 
      desc: 'Bold and ambitious, you are a natural-born leader who faces life with courage and passion. Your pioneering spirit drives you to take initiative.' 
    },
    'Taurus': { 
      emoji: '♉', 
      dates: [[4,20],[5,20]], 
      desc: 'Reliable and patient, you appreciate beauty and value stability in all aspects of life. Your grounded nature brings comfort to those around you.' 
    },
    'Gemini': { 
      emoji: '♊', 
      dates: [[5,21],[6,20]], 
      desc: 'Curious and adaptable, you thrive on communication and new experiences. Your versatile mind sees connections others miss.' 
    },
    'Cancer': { 
      emoji: '♋', 
      dates: [[6,21],[7,22]], 
      desc: 'Intuitive and nurturing, you deeply value home, family, and emotional connections. Your empathy is your greatest strength.' 
    },
    'Leo': { 
      emoji: '♌', 
      dates: [[7,23],[8,22]], 
      desc: 'Confident and generous, you shine brightly and inspire others with your warmth. Your natural charisma draws people to you.' 
    },
    'Virgo': { 
      emoji: '♍', 
      dates: [[8,23],[9,22]], 
      desc: 'Analytical and practical, you excel at organization and helping others. Your attention to detail creates excellence.' 
    },
    'Libra': { 
      emoji: '♎', 
      dates: [[9,23],[10,22]], 
      desc: 'Diplomatic and fair-minded, you seek balance and harmony in all relationships. Your sense of justice guides your decisions.' 
    },
    'Scorpio': { 
      emoji: '♏', 
      dates: [[10,23],[11,21]], 
      desc: 'Passionate and resourceful, you possess deep emotional strength and determination. Your intensity transforms everything you touch.' 
    },
    'Sagittarius': { 
      emoji: '♐', 
      dates: [[11,22],[12,21]], 
      desc: 'Optimistic and adventurous, you seek truth and love exploring new horizons. Your philosophical nature expands boundaries.' 
    },
    'Capricorn': { 
      emoji: '♑', 
      dates: [[12,22],[1,19]], 
      desc: 'Disciplined and ambitious, you work steadily toward your goals with determination. Your perseverance leads to lasting success.' 
    },
    'Aquarius': { 
      emoji: '♒', 
      dates: [[1,20],[2,18]], 
      desc: 'Progressive and independent, you think outside the box and value humanitarian causes. Your innovative vision changes the world.' 
    },
    'Pisces': { 
      emoji: '♓', 
      dates: [[2,19],[3,20]], 
      desc: 'Compassionate and artistic, you are deeply intuitive and empathetic. Your spiritual awareness connects you to universal truths.' 
    }
  };

  for (const [signName, signData] of Object.entries(signs)) {
    const [[startMonth, startDay], [endMonth, endDay]] = signData.dates;
    if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
      return { name: signName, emoji: signData.emoji, description: signData.desc };
    }
  }
  
  return { name: 'Aries', emoji: '♈', description: signs['Aries'].desc };
};

const generateGuidance = (concern, feeling, sunSignName, specificConcern, occupation) => {
  const guidanceMap = {
    'Career': {
      'Confused': `As a ${sunSignName}, your natural talents will guide you through this confusion. Take time to reflect on what truly fulfills you beyond just a paycheck. ${occupation === 'Student' ? 'Focus on discovering your passions now.' : 'Consider what skills make you lose track of time.'}`,
      'Hopeful': `Your optimism is well-placed! As a ${sunSignName}, trust your instincts and take bold steps forward. ${occupation === 'Working Professional' ? 'This is the perfect time for that career move you\'ve been considering.' : 'Your positive energy will attract the right opportunities.'}`,
      'Stuck': `Feeling stuck is temporary. Your ${sunSignName} energy has the power to break through any barrier. ${occupation === 'Business Owner' ? 'Consider pivoting your strategy or exploring new markets.' : 'Try networking in different circles or learning a new skill.'}`,
      'Excited': `Channel this excitement into action! Your ${sunSignName} determination combined with your current energy will help you achieve great things. Make concrete plans while motivation is high.`,
      'Anxious': `Career anxiety is common, but as a ${sunSignName}, remember that your worth isn't defined by your job title alone. ${occupation === 'Between Jobs' ? 'This transition period is preparing you for something better.' : 'Focus on small, achievable goals to build confidence.'}`,
      'Content': `Your contentment shows wisdom. As a ${sunSignName}, maintain this balance while staying open to growth opportunities that align with your values.`,
      'Overwhelmed': `Take a step back and breathe. Your ${sunSignName} nature needs regular breaks to perform at its best. ${occupation === 'Working Professional' ? 'Consider delegating or setting better boundaries.' : 'Prioritize tasks and tackle them one at a time.'}`
    },
    'Love & Relationships': {
      'Confused': `As a ${sunSignName}, take time to understand your heart's true desires. Clarity comes when you listen to your intuition, not just your fears.`,
      'Hopeful': `Your positive energy attracts the right people. As a ${sunSignName}, keep your heart open and communicate honestly with those you care about.`,
      'Stuck': `Relationships require patience and growth. Your ${sunSignName} nature knows that good things take time. Focus on self-love first.`,
      'Excited': `New love or renewed passion is beautiful! As a ${sunSignName}, enjoy this journey while staying grounded in reality and maintaining your independence.`,
      'Anxious': `Practice self-love and compassion first. Your ${sunSignName} heart is big enough to love yourself before giving to others.`,
      'Content': `Cherish this contentment in your relationships. As a ${sunSignName}, gratitude deepens existing bonds and attracts more joy.`,
      'Overwhelmed': `Relationships shouldn't drain you. Set healthy boundaries and remember that ${sunSignName} individuals need space to recharge their emotional batteries.`
    },
    'Health & Wellness': {
      'Confused': `Listen to your body's signals. As a ${sunSignName}, your intuition about health is usually spot-on. Consider consulting professionals for clarity.`,
      'Hopeful': `Your positive mindset is already healing. As a ${sunSignName}, maintain this optimism along with consistent healthy habits and self-care routines.`,
      'Stuck': `Try a new wellness routine that excites you. Your ${sunSignName} adaptability will help you find what works for your unique body and lifestyle.`,
      'Excited': `Your body is ready for positive changes! As a ${sunSignName}, channel this energy into building sustainable, enjoyable health habits.`,
      'Anxious': `Health anxiety is real and valid. As a ${sunSignName}, prioritize mental health as much as physical health. Consider mindfulness practices.`,
      'Content': `Your wellness balance is admirable. As a ${sunSignName}, continue these habits while remaining flexible as your needs evolve.`,
      'Overwhelmed': `Simplify your wellness routine. As a ${sunSignName}, you don't need complex systems—just consistent basics: sleep, movement, nutrition, and joy.`
    },
    'Finance & Money': {
      'Confused': `Financial clarity comes with planning. As a ${sunSignName}, create a budget that aligns with your values and long-term goals.`,
      'Hopeful': `Your optimism will attract opportunities. As a ${sunSignName}, pair hope with smart financial decisions and practical planning.`,
      'Stuck': `Financial stagnation is temporary. Your ${sunSignName} determination will find new income sources. Consider diversifying your revenue streams.`,
      'Excited': `Great! As a ${sunSignName}, use this momentum to build long-term wealth, not just chase short-term gains. Invest wisely.`,
      'Anxious': `Financial stress is real. As a ${sunSignName}, focus on what you can control: spending, saving, and earning. Seek professional advice if needed.`,
      'Content': `Your financial stability reflects good choices. As a ${sunSignName}, maintain this while preparing for future opportunities and emergencies.`,
      'Overwhelmed': `Break down your finances into manageable pieces. As a ${sunSignName}, tackle one financial goal at a time with focused attention.`
    },
    'Family': {
      'Confused': `Family dynamics are complex. As a ${sunSignName}, trust that clarity will come through open, honest communication and patience.`,
      'Hopeful': `Hope strengthens family bonds. Your ${sunSignName} energy can bridge gaps and create healing moments through compassion.`,
      'Stuck': `Family patterns take time to shift. As a ${sunSignName}, focus on changing your responses, not controlling others' actions.`,
      'Excited': `Celebrate family joy! As a ${sunSignName}, use this positive energy to create lasting memories and deeper connections.`,
      'Anxious': `Family stress is common. As a ${sunSignName}, set boundaries that protect your peace while maintaining love and respect.`,
      'Content': `Treasure this family harmony. As a ${sunSignName}, gratitude strengthens these precious bonds that sustain us through life.`,
      'Overwhelmed': `You can't fix everyone. As a ${sunSignName}, focus on being present and loving without taking responsibility for others' happiness.`
    },
    'Personal Growth': {
      'Confused': `Growth often begins in confusion. As a ${sunSignName}, this uncertainty is preparing you for transformation. Keep exploring.`,
      'Hopeful': `Hope fuels growth. Your ${sunSignName} spirit is ready to evolve. Take small steps toward the person you want to become.`,
      'Stuck': `Feeling stuck means you're ready for breakthrough. Your ${sunSignName} determination will carry you through this growth phase.`,
      'Excited': `Channel growth excitement into action! As a ${sunSignName}, create concrete goals and celebrate small wins along your journey.`,
      'Anxious': `Growth can feel scary. As a ${sunSignName}, remember that discomfort is often the price of expansion. Be gentle with yourself.`,
      'Content': `Growth doesn't always mean striving. As a ${sunSignName}, sometimes the growth is in appreciating where you are right now.`,
      'Overwhelmed': `Personal growth isn't a race. As a ${sunSignName}, focus on one area at a time. Integration matters more than accumulation.`
    },
    'Life Purpose': {
      'Confused': `Your life purpose as a ${sunSignName} is unique and unfolding. Confusion often precedes clarity. Keep moving forward with curiosity.`,
      'Hopeful': `Hope is your compass. As a ${sunSignName}, follow your passions and the path will reveal itself step by step.`,
      'Stuck': `Feeling purposeless means you're ready for meaning. Your ${sunSignName} spirit knows it's time for alignment with your true calling.`,
      'Excited': `Channel this energy into meaningful goals! As a ${sunSignName}, your enthusiasm combined with purpose can move mountains.`,
      'Anxious': `Purpose anxiety is common. As a ${sunSignName}, focus on the present moment and contribute meaningfully right where you are.`,
      'Content': `Living with purpose brings this peace. As a ${sunSignName}, continue aligning your daily actions with your deeper values.`,
      'Overwhelmed': `Purpose doesn't require perfection. As a ${sunSignName}, start where you are, use what you have, do what you can.`
    }
  };
  
  const baseGuidance = guidanceMap[concern]?.[feeling] || `As a ${sunSignName}, trust your intuition and follow your heart in matters of ${concern}.`;
  
  // Add specific concern context if provided
  if (specificConcern && specificConcern.trim()) {
    return `${baseGuidance}\n\nRegarding your specific situation: Your ${sunSignName} wisdom and strength will guide you through this. Remember that every challenge carries within it the seed of opportunity.`;
  }
  
  return baseGuidance;
};

const generateInsights = (concern, sunSignName, feeling, occupation, relationshipStatus) => {
  const baseInsights = [
    `Your ${sunSignName} energy is particularly powerful during this phase of your life`,
    `Focus on ${concern.toLowerCase()} will bring meaningful transformations in the coming weeks`,
    `Trust your ${sunSignName} intuition when making important decisions—it rarely leads you astray`
  ];

  const feelingInsights = {
    'Confused': 'Embrace this confusion as the beginning of clarity. Journal your thoughts daily to find patterns.',
    'Hopeful': 'Your optimism will attract positive opportunities. Keep visualizing your desired outcomes.',
    'Stuck': 'Consider trying something completely new this week. Fresh perspectives break old patterns.',
    'Excited': 'Use this high energy wisely—create action plans and take concrete steps while motivation is strong.',
    'Anxious': 'Practice daily grounding: breathe deeply, spend time in nature, and limit information overload.',
    'Content': 'Gratitude amplifies contentment. Each day, acknowledge three things that brought you joy.',
    'Overwhelmed': 'Simplify ruthlessly. Say no to new commitments and focus only on essential priorities.'
  };

  const occupationInsights = {
    'Student': 'This learning phase is preparing you for greatness. Every subject teaches valuable life skills.',
    'Working Professional': 'Your professional experience is valuable. Consider mentoring others as you continue growing.',
    'Business Owner': 'Your entrepreneurial spirit reflects true ${sunSignName} courage. Trust your business instincts.',
    'Freelancer': 'Your independence suits your ${sunSignName} nature. Build systems that support sustainable success.',
    'Homemaker': 'The foundation you create at home ripples into every other area of your life. Honor this work.',
    'Retired': 'This life stage offers wisdom and freedom. Share your experiences and enjoy well-earned peace.',
    'Between Jobs': 'Transitions create opportunities. Use this time to clarify what truly matters in your next chapter.'
  };

  return [
    ...baseInsights,
    feelingInsights[feeling],
    occupation ? occupationInsights[occupation] : null
  ].filter(Boolean);
};

const getLuckyElements = (sunSignName) => {
  const luckyMap = {
    'Aries': { number: 9, day: 'Tuesday', color: 'Red', stone: 'Ruby' },
    'Taurus': { number: 6, day: 'Friday', color: 'Green', stone: 'Emerald' },
    'Gemini': { number: 5, day: 'Wednesday', color: 'Yellow', stone: 'Agate' },
    'Cancer': { number: 2, day: 'Monday', color: 'Silver', stone: 'Pearl' },
    'Leo': { number: 1, day: 'Sunday', color: 'Gold', stone: 'Peridot' },
    'Virgo': { number: 5, day: 'Wednesday', color: 'Navy Blue', stone: 'Sapphire' },
    'Libra': { number: 6, day: 'Friday', color: 'Pink', stone: 'Opal' },
    'Scorpio': { number: 9, day: 'Tuesday', color: 'Maroon', stone: 'Topaz' },
    'Sagittarius': { number: 3, day: 'Thursday', color: 'Purple', stone: 'Turquoise' },
    'Capricorn': { number: 8, day: 'Saturday', color: 'Brown', stone: 'Garnet' },
    'Aquarius': { number: 4, day: 'Saturday', color: 'Electric Blue', stone: 'Amethyst' },
    'Pisces': { number: 7, day: 'Thursday', color: 'Sea Green', stone: 'Aquamarine' }
  };
  
  return luckyMap[sunSignName] || luckyMap['Aries'];
};

const submit = async (req, res) => {
  try {
    console.log('📥 Received request:', req.body);
    
    const { 
      name, 
      gender,
      birthDate, 
      birthPlace,
      relationshipStatus,
      occupation,
      concern, 
      specificConcern,
      feeling,
      expectations
    } = req.body;

    // Validate required fields
    if (!name || !birthDate || !concern || !feeling) {
      return res.status(400).json({ 
        message: 'Please complete all required fields (name, birth date, concern, and feeling)' 
      });
    }

    // Calculate sun sign
    const sunSign = calculateSunSign(birthDate);
    
    // Generate personalized content
    const guidance = generateGuidance(concern, feeling, sunSign.name, specificConcern, occupation);
    const insights = generateInsights(concern, sunSign.name, feeling, occupation, relationshipStatus);
    const lucky = getLuckyElements(sunSign.name);

    const report = {
      name,
      gender,
      birthDate,
      birthPlace,
      relationshipStatus,
      occupation,
      sunSign,
      concern,
      specificConcern: specificConcern || null,
      feeling,
      expectations,
      guidance,
      insights,
      lucky,
      createdAt: new Date()
    };

    console.log('✅ Sending report');

    res.status(200).json({ 
      message: 'Report generated successfully',
      report 
    });

  } catch (error) {
    console.error('❌ Controller error:', error);
    res.status(500).json({ 
      message: 'Failed to generate report',
      error: error.message 
    });
  }
};

module.exports = { submit };
