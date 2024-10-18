import behanceIcon from '../assets/behance-icom2.png'
import linkedinIcon from '../assets/linkedin-icom.png'
import aeIcon from '../assets/ae-icon.png'
import aiIcon from '../assets/ai-icon.png'
import psIcon from '../assets/ps-icon.png'
import prIcon from '../assets/pr-icon.png'
import figmaIcon from '../assets/figma-icon.png'
import jsIcon from '../assets/js-icon.png'
import tsIcon from '../assets/ts-icon.png'
import reactIcon from '../assets/react-icom.png'

export const dataIdentification = [
  {
    id: '1',
    key: 'Gender',
    value: 'Female'

  },
  {
    id: '2',
    key: 'Age',
    value: '20 y/o'
  },
  {
    id: '3',
    key: 'Nacionality',
    value: 'Colombia'
  }

]

export const socialNetworks = [
  {
    id: '1',
    icon: behanceIcon,
    link: 'https://www.behance.net/annesolarte1',
    value: 'Anne Solarte'

  },
  {
    id: '2',
    icon: linkedinIcon,
    link: 'https://www.linkedin.com/in/anne-solarte-461a961b3/',
    value: 'Anne Solarte'
  }
]

export const personalSkills = [
  'Adaptability',
  'Creativity',
  'Critical Thinking',
  'Leadership',
  'TeamWork'
]

export const services = [
  'User Experience Research',
  'Front-end Development',
  'Interface Development',
  'Brand Identity Design'
]

export const experience = [
  {
    id: '1',
    major: 'Web developer',
    date: '2024 - Present',
    place: 'ficacia, Remote'
  },
  {
    id: '2',
    major: 'UX / UI Designer',
    date: '2024 - Present',
    place: 'Bancoldex, Remote'
  },
  {
    id: '3',
    major: 'UI Designer',
    date: '2024',
    place: 'Alianza, Remote'
  },
  {
    id: '4',
    major: 'Web Programming Monitor',
    date: '2024 - Present',
    place: 'Icesi University, Cali - Colombia'
  },
  {
    id: '5',
    major: 'Designing with algorithms Monitor',
    date: '2024 - Present',
    place: 'Icesi University, Cali - Colombia'
  },
  {
    id: '6',
    major: 'Leader UI design- Integrating project 1',
    date: '2023',
    place: 'Icesi University, Cali - Colombia'
  }

]

export const education = [
  {
    id: '1',
    major: 'Interactive Media Design',
    date: '2021 - Present',
    place: 'Icesi University, Cali - Colombia'
  },
  {
    id: '2',
    major: 'High-school',
    date: '2021',
    place: 'I.E. San Agustín, Popayán - Colombia'
  }

]

export const softwareSkills = {
  DesignSoftware: {
    name: 'Design Software',
    icons: [aiIcon, aeIcon, psIcon, prIcon, figmaIcon]
  },
  DeveloperSoftware: {
    name: 'Developer Software',
    icons: [jsIcon, tsIcon, reactIcon]
  }
}
