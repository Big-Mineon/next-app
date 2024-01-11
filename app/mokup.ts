const sales = {
  greeting: "Also, recent company changes show effect, the company is experiencing strong growth...",
  title: "sales",
  description: "there is sizable increase in number of clients, and at the same churn has decreased",
  mark: "from analysis of 10,430 messages",
}

const finance = {
  greeting: "Hello Erica, with a week until end of the month, the company is on a way to book sizable revenue",
  title: "finance",
  description: "with 4 new clients signed in last 3 weeks, there is a solid chance of reaching this milestone",
  mark: "from analysis of past financial data and current market conditions",
}

const price = {
  image: '/images/3.svg',
  alt: 'description of image',
  price: 142200,
}

const client = {
  image: '/images/5.svg',
  client: 88,
  churn: 8,
}

const analysis = [
  {
    percent: 31,
    content: [
      'current profit',
      'margin',
    ],
    description: 'with a healthy profit margin, that may end up a second best month ever',
    image:'/images/4.svg',
  },
  {
    percent: 30,
    content: [
      'Improved ROI on ad spend',
    ],
    description: 'Media buying helped with these results, since it’s an important way of attracting clients',
    image:'/images/5.svg',
  },
  {
    percent: 50,
    content: [
      'more engagement compared to previous 3 campaigns',
    ],
    description: 'Ads generated significantly more engagement',
    image:'/images/6.svg',
  },
  {
    percent: 38,
    content: [
      'Surge in Wbesite',
      'Traffic',
    ],
    description: 'As a consequence, website visits skyrocketed, boosted by social media engagement',
    image:'/images/7.svg',
  },
  {
    percent: 42,
    content: [
      'Surge in Social',
      'Channels',
      'Traffic',
    ],
    description: 'The surge extended to social media, where engagement almost exactly followed website visits',
    image:'/images/8.svg',
  },
]

const modalSentence = [
  '',
  'What would you like to know related to the revenue estimate?',
  'Certainly, here\'s some reasoning: <br/><br/> 1. there are 4 new clients that combined could bring additional $20,000 by the end of the year',
  '2. There is a good chance of Telus singing the new $40,000 contract, first payment tranche is scheduled at September 25th <br/><br/> 3. There is a good engagement on the last marketing campaign',
  'Updating the Dashboard.',
  'Done <br/><br/> Shutting down...',
]

export {
  sales,
  finance,
  price,
  client,
  analysis,
  modalSentence,
}