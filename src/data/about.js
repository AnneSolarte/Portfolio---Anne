import behanceIcon from '../assets/behance-icon2.png'
import instagramIcon from '../assets/instagram-icon.png'
import aeIcon from '../assets/ae-icon.png'
import aiIcon from '../assets/ai-icon.png'
import psIcon from '../assets/ps-icon.png'
import prIcon from '../assets/pr-icon.png'
import figmaIcon from '../assets/figma-icon.png'
import jsIcon from '../assets/js-icon.png'
import tsIcon from '../assets/ts-icon.png'
import reactIcon from '../assets/react-icon.png'

export const dataIdentification = [
  {
    id: '1',
    key: 'Gender',
    value: 'Female'

  },
  {
    id: '2',
    key: 'Age',
    value: '19 y/o'
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
    value: 'AnneSolarte'

  },
  {
    id: '2',
    icon: instagramIcon,
    value: 'Anne_de_larregui98'
  }
]

export const personalSkills = [
  'Adaptability',
  'Creativity',
  'Critical Thinking',
  'Hobbies',
  'TeamWork'
]

export const services = [
  'User Experience Research',
  'Front-end Development',
  'Interface Development',
  'Brand Identity Design'
]

export const education = [
  {
    id: '1',
    major: 'Interactive Media Design',
    date: '2021 - Present',
    place: 'Icesi University, Cali Colombia'

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
