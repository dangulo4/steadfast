const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Contacts collection and inserts the contacts below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/steadfast');

const contactSeed = [
  {
    firstName: 'Daniel',
    lastName: 'Angulo',
    company: 'Sharp',
    position: 'Web Developer',
    email: 'daniel.angulo@sharp.com',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis tellus quis turpis bibendum, nec rhoncus nulla fermentum. Pellentesque eleifend malesuada purus quis dapibus. Morbi varius porttitor tellus ut faucibus. Vestibulum lacinia ornare eros, eu aliquam elit commodo at. Mauris et quam a dui feugiat vehicula in et eros. Vestibulum sit amet bibendum odio. Nulla facilisi. Maecenas mi lectus, tincidunt ut massa eu, viverra egestas est. Morbi nisi neque, scelerisque ac lectus ultricies, auctor blandit ipsum. Praesent lobortis ipsum et pellentesque lacinia. Sed dignissim laoreet dolor, tempus efficitur magna euismod at. Etiam facilisis justo at risus laoreet iaculis. Nulla eu ipsum lectus. Nam fermentum mauris libero, nec tincidunt enim efficitur sit amet. In mollis lectus in elit imperdiet, sollicitudin accumsan quam scelerisque. Proin consequat mauris sit amet vulputate imperdiet. Donec maximus, ex quis interdum posuere, metus nisi aliquet justo, non laoreet justo risus eget dolor. Sed tempus, ligula eu dignissim fermentum, sem dui pretium elit, in facilisis arcu risus eu nulla. Curabitur convallis, nibh a eleifend vehicula, augue libero pulvinar ligula, eu pellentesque risus mi at orci. Vestibulum maximus urna eget diam egestas consequat. Duis dignissim, nisl nec scelerisque accumsan, eros diam volutpat elit, sit amet mollis sem sapien sit amet nunc. Nam aliquam ac diam eu imperdiet. Aenean non magna sagittis, pharetra nisi vel, finibus magna. Nunc pulvinar tortor et mollis commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: new Date(Date.now()),
  },
  {
    firstName: 'Alexia',
    lastName: 'Chalita',
    company: 'Digital Media',
    position: 'Media Director',
    email: 'alexia.chalita@mail.com',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis tellus quis turpis bibendum, nec rhoncus nulla fermentum. Pellentesque eleifend malesuada purus quis dapibus. Morbi varius porttitor tellus ut faucibus. Vestibulum lacinia ornare eros, eu aliquam elit commodo at. Mauris et quam a dui feugiat vehicula in et eros. Vestibulum sit amet bibendum odio. Nulla facilisi. Maecenas mi lectus, tincidunt ut massa eu, viverra egestas est. Morbi nisi neque, scelerisque ac lectus ultricies, auctor blandit ipsum. Praesent lobortis ipsum et pellentesque lacinia. Sed dignissim laoreet dolor, tempus efficitur magna euismod at. Etiam facilisis justo at risus laoreet iaculis. ',
    date: new Date(Date.now()),
  },
  {
    firstName: 'Said',
    lastName: 'Aguilar',
    company: 'WebDev Inc',
    position: 'Web Designer',
    email: 'said.aguilar@mail.com',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis tellus quis turpis bibendum, nec rhoncus nulla fermentum. Pellentesque eleifend malesuada purus quis dapibus. Morbi varius porttitor tellus ut faucibus. Vestibulum lacinia ornare eros, eu aliquam elit commodo at. Mauris et quam a dui feugiat vehicula in et eros. Vestibulum sit amet bibendum odio. Nulla facilisi. Maecenas mi lectus, tincidunt ut massa eu, viverra egestas est. Morbi nisi neque, scelerisque ac lectus ultricies, auctor blandit ipsum. Praesent lobortis ipsum et pellentesque lacinia. Sed dignissim laoreet dolor, tempus efficitur magna euismod at. Etiam facilisis justo at risus laoreet iaculis.Proin consequat mauris sit amet vulputate imperdiet. Donec maximus, ex quis interdum posuere, metus nisi aliquet justo, non laoreet justo risus eget dolor. Sed tempus, ligula eu dignissim fermentum, sem dui pretium elit, in facilisis arcu risus eu nulla. Curabitur convallis, nibh a eleifend vehicula, augue libero pulvinar ligula, eu pellentesque risus mi at orci. Vestibulum maximus urna eget diam egestas consequat. Duis dignissim, nisl nec scelerisque accumsan, eros diam volutpat elit, sit amet mollis sem sapien sit amet nunc. Nam aliquam ac diam eu imperdiet. Aenean non magna sagittis, pharetra nisi vel, finibus magna. Nunc pulvinar tortor et mollis commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: new Date(Date.now()),
  },
  {
    firstName: 'Matthew',
    lastName: 'Bell',
    company: 'Game Design Inc',
    position: 'Owner',
    email: 'matthew.bell@mail.com',
    notes:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis tellus quis turpis bibendum, nec rhoncus nulla fermentum. Pellentesque eleifend malesuada purus quis dapibus. Morbi varius porttitor tellus ut faucibus. Vestibulum lacinia ornare eros, eu aliquam elit commodo at. Mauris et quam a dui feugiat vehicula in et eros. Vestibulum sit amet bibendum odio. Nulla facilisi. Maecenas mi lectus, tincidunt ut massa eu, viverra egestas est. Morbi nisi neque, scelerisque ac lectus ultricies, auctor blandit ipsum. Praesent lobortis ipsum et pellentesque lacinia. Sed dignissim laoreet dolor, tempus efficitur magna euismod at. Etiam facilisis justo at risus laoreet iaculis.Proin consequat mauris sit amet vulputate imperdiet. Donec maximus, ex quis Aenean non magna sagittis, pharetra nisi vel, finibus magna. Nunc pulvinar tortor et mollis commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    date: new Date(Date.now()),
  },
];

db.Contact.remove({})
  .then(() => db.Contact.collection.insertMany(contactSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
