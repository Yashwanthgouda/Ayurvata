import aloeVeraImage from '../assets/images/aloe-vera.jpg';
import tulsiImage from '../assets/images/tulsi2[1].jpg';
import neemImage from '../assets/images/neem.jpg';
import turmericImage from '../assets/images/turmeric.jpg';
import ashwagandhaImage from '../assets/images/ashwagandha.jpg';

const plantData = [
  {
    id: '1',
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    description: 'Aloe Vera is known for its healing properties and is widely used in skincare.',
    image: aloeVeraImage
  },
  {
    id: '2',
    name: 'Tulsi',
    scientificName: 'Ocimum tenuiflorum',
    description: 'Tulsi, also known as Holy Basil, is revered for its medicinal properties.',
    image: tulsiImage
  },
  {
    id: '3',
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    description: 'Neem is known for its antimicrobial properties and is used in various traditional medicines.',
    image: neemImage
  },
  {
    id: '4',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    description: 'Turmeric is renowned for its anti-inflammatory and antioxidant properties.',
    image: turmericImage
  },
  {
    id: '5',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    description: 'Ashwagandha is celebrated for its adaptogenic properties and its role in reducing stress.',
    image: ashwagandhaImage
  },
  // Add more plants as needed
];

export default plantData;
