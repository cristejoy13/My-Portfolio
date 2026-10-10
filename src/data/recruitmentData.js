const BASE_URL = import.meta.env.BASE_URL

export const recruitmentSamples = [
  {
    id: 'blue-corporate',
    title: 'Corporate Recruitment Ad',
    src: `${BASE_URL}portfolio/recruitment/outsourced-cfo-controller-blue.jpeg`,
    alt: 'Blue corporate Outsourced CFO and Controller recruitment graphic',
  },
  {
    id: 'recruitment-poster',
    title: 'Recruitment Poster',
    src: `${BASE_URL}portfolio/recruitment/remote-imaging-recruitment-poster.jpeg`,
    alt: 'Remote Imaging Consultants Outsourced CFO and Controller recruitment poster',
  },
  {
    id: 'modern-corporate',
    title: 'Digital Recruitment Ad',
    src: `${BASE_URL}portfolio/recruitment/remote-imaging-cfo-cpa-modern.jpeg`,
    alt: 'Modern Remote Imaging Consultants CFO and CPA recruitment graphic',
  },
  {
    id: 'pink-corporate',
    title: 'Creative Recruitment Ad',
    src: `${BASE_URL}portfolio/recruitment/outsourced-cfo-controller-pink.jpeg`,
    alt: 'Pink and purple Outsourced CFO and Controller recruitment graphic',
  },
  {
    id: 'anime-businesswoman',
    title: 'Hiring Advertisement',
    src: `${BASE_URL}portfolio/recruitment/cfo-cpa-anime-businesswoman.jpeg`,
    alt: 'Remote Imaging Consultants CFO and CPA recruitment graphic with an illustrated businesswoman',
  },
]

// These files contain only reviewed redacted exports. Never place source screenshots in public/.
export const recruitmentEvidence = [
  { id: 'outreach', order: 1, category: 'Candidate Outreach', title: 'I introduced the role', caption: 'My first message described the CFO/Controller role and requirements.', src: `${BASE_URL}portfolio/recruitment/evidence/01-candidate-outreach.jpg`, alt: 'Redacted initial outreach message for the CFO and Controller role' },
  { id: 'response', order: 2, category: 'Candidate Reply', title: 'We discussed her application', caption: 'The candidate asked to send her résumé. I shared where to send it, and she confirmed that she had emailed it. Names, profile photos, compensation, and email addresses are redacted.', src: `${BASE_URL}portfolio/recruitment/evidence/02-candidate-response.jpg`, alt: 'Redacted candidate reply and résumé exchange' },
  { id: 'selection', order: 3, category: 'Candidate Selection', title: 'I invited her to the final interview', caption: 'My next message confirmed progression to the final interview with the CEO.', src: `${BASE_URL}portfolio/recruitment/evidence/03-final-interview.jpg`, alt: 'Redacted final interview invitation' },
  { id: 'hire', order: 4, category: 'Successful Hire', title: 'I welcomed her to the team', caption: 'My congratulatory message followed after the candidate joined the team.', src: `${BASE_URL}portfolio/recruitment/evidence/04-welcome-message.jpg`, alt: 'Redacted post-hire welcome message' },
]
