import mixmeImg1 from '../assets/mixme-img1.png'
import mixmeImg2 from '../assets/mixme-img2.png'
import mixmeImg3 from '../assets/mixme-img3.png'
import mixmeImg4 from '../assets/mixme-img4.png'
import proAppImg1 from '../assets/productivity-img1.png'
import geome3dImg1 from '../assets/geome3d-img1.png'
import bopitImg1 from '../assets/bopit-img1.png'

const projects = [
  {
    id: 1,
    title: 'MIXME',
    name: 'mixme',
    description: 'MIXME is a mobile app that empowers users to search, filter, index and buy outfits and clothes from big brands, fashion influencers or any other user of the app. ',
    project: 'Branding and app design',
    behanceLink: 'Link to Behance',
    images: {
      image1: mixmeImg1,
      image2: mixmeImg2,
      image3: mixmeImg3,
      image4: mixmeImg4
    },
    categories: {
      'ux-design': true,
      'ui-design': false,
      'front-end-dev': false
    }
  },
  {
    id: 2,
    title: 'PRODUCTIVITY APP',
    name: 'productivityapp',
    description: 'Description for Project 2',
    project: 'Link to the project',
    behanceLink: 'Link to Behance',
    images: {
      image1: proAppImg1,
      image2: 'url/to/image2.jpg',
      image3: 'url/to/image3.jpg',
      image4: 'url/to/image4.jpg'
    },
    categories: {
      'ux-design': true,
      'ui-design': true,
      'front-end-dev': false
    }
  },
  {
    id: 3,
    title: 'GEOME3D',
    name: 'geome3d',
    description: 'Description for Project 2',
    project: 'Link to the project',
    behanceLink: 'Link to Behance',
    images: {
      image1: geome3dImg1,
      image2: 'url/to/image2.jpg',
      image3: 'url/to/image3.jpg',
      image4: 'url/to/image4.jpg'
    },
    categories: {
      'ux-design': true,
      'ui-design': false,
      'front-end-dev': false
    }
  },
  {
    id: 4,
    title: 'BOP IT',
    name: 'bopit',
    description: 'Description for Project 2',
    project: 'Link to the project',
    behanceLink: 'Link to Behance',
    images: {
      image1: bopitImg1,
      image2: 'url/to/image2.jpg',
      image3: 'url/to/image3.jpg',
      image4: 'url/to/image4.jpg'
    },
    categories: {
      'ux-design': false,
      'ui-design': true,
      'front-end-dev': true
    }
  },
  {
    id: 5,
    title: 'OTRO',
    name: 'bopit',
    description: 'Description for Project 2',
    project: 'Link to the project',
    behanceLink: 'Link to Behance',
    images: {
      image1: bopitImg1,
      image2: 'url/to/image2.jpg',
      image3: 'url/to/image3.jpg',
      image4: 'url/to/image4.jpg'
    },
    categories: {
      'ux-design': false,
      'ui-design': true,
      'front-end-dev': true
    }
  },
  {
    id: 6,
    title: 'OTRO',
    name: 'bopit',
    description: 'Description for Project 2',
    project: 'Link to the project',
    behanceLink: 'Link to Behance',
    images: {
      image1: bopitImg1,
      image2: 'url/to/image2.jpg',
      image3: 'url/to/image3.jpg',
      image4: 'url/to/image4.jpg'
    },
    categories: {
      'ux-design': true,
      'ui-design': false,
      'front-end-dev': true
    }
  }
]

export default projects
