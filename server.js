const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs'); 
// define the view engine called portal
app.engine('blog', (filePath, options, callback) => {
  
    //read the file content
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    // replace placeholders in the content with actual values
    const rendered = content
    .toString()
    .replace('#title#', '<title>' + options.title + '</title>')
    .replace('#message#', '<h1>'+ options.message + '</h1>')
    .replace('#content#', '<div>' + options.content + '</div>')
    .replace('#url#', options.url);
  return callback(null, rendered);
});
});

app.set('views', './views');
app.set('view engine', 'blog');




//route 1
app.get('/', (req, res) => {
  res.render('template1', {
    title: 'Technology',
    message: 'Smartwatch',
    content: 'See why this smartwatch is gaining popularity quickly in the US and selling out everywhere. For a long time, the smartwatch industry had just a few big companies that could set any prices they wanted But now one tech startup is turning the $5 billion smartwatch industry on its head'
  
  });
});
//route 2
app.get('/medicine-health', (req, res) => {
    res.render('template1', {
      title: 'Medicine/Health',
      message: 'Prenatal exposure',
      content:
        'August 24, 2023 — Chemicals used in hundreds of products known as phthalates have been linked to emotional and behavioral development issues in 24-month-old-boys who were exposed during the first trimester of pregnancy, according to a new study by Hebrew University of Jerusalem (HU) researchers.',
    });
  });
//route 3
  app.get('/beauty-fashion', (req, res) => {
    res.render('template1', {
      title: 'Beauty-fashion',
      message: 'The State of Fashion',
      content:
        'The special edition of The State of Fashion report by BoF and McKinsey & Company explores the reshaping of the global beauty industry. Download the full report to learn about the key dynamics that will impact all categories in the years ahead, from the rise of wellness to the influence of Gen-Z.',
        
    });
  });
//route 4

app.get('/dominican-republic', (req, res) => {
    res.render('template2', {
      title:'Dominican Republic',
      message: 'Welcome to the Dominican Republic',
      content: 'one of the most beautiful island of the caribbean, Its a great destination for your next vacation!',
      url: 'https://media.istockphoto.com/id/1363783255/photo/aerial-view-of-a-boat-on-excursion-from-la-romana-to-saona-via-punta-cana-heading-along.jpg?s=612x612&w=is&k=20&c=6GUiT6quuWo6_kolVQDyvcdXntq18obaWIYotE9Zh4E=',
    });
  });

//route 5
  app.get('/puerto-rico', (req, res) => {
    res.render('template2', {
      title:'Puerto Rico',
      message: 'Welcome to Puerto Rico',
      content: 'Its a great destination for your next vacation!',
      url: 'https://media.istockphoto.com/id/1457790723/photo/aerial-trip-to-san-juan.jpg?s=612x612&w=is&k=20&c=fOAu1MW3su-PdqwPSYzUM6A0YQVJB2_VuaXtTLVPToI=',
    });
  });


  //route 6  not using the template but i just wanted to try it out and make it fun
  app.get('/vacation', (req, res) => {
    const answers = ['Dubai',
    'Punta Cana',
    'San Juan',
   'Medellin',
   'Cancun',
   'Acapulco',
   'Japan',
   'Spain',
   'Paris',
   'Stayhomecation'
  ];
  const random = answers[Math.floor(Math.random() * answers.length)];
  res.send(`<h3>What's your vacation Destination?</h3> <br/> <h1>${random}</h1>`);
});

//route 7  not using the template but i just wanted to try it out and make it fun
app.get('/dinner', (req, res) => {
    const answers = ['Hamburger',
    'Fried Chicken with fries',
    'Tacos',
    'Mangu with Los tres golpes',
    'Nothing',
    'Chicken nuggets',
    'Sandwich',
    'Hot coco with marshmellows'

];
  const random = answers[Math.floor(Math.random() * answers.length)];
  res.send(`<h3>What's for dinner tonight?</h3> <br/> <h1>${random}</h1>`);
});

//route 8
app.get('/dubai', (req, res) => {
    res.render('template2', {
      title:'Dubai',
      message: 'Welcome to Dubai',
      content: 'Its a great destination for your next vacation if you rich!',
      url: 'https://media.istockphoto.com/id/827901014/photo/dubai-marina-city-skyline-in-the-united-arab-emirates.jpg?s=612x612&w=is&k=20&c=KXA7EZvY2sR0Bse2SjNOEJg1oorF-jnkKsm3qQ_3C5g=',
    });
  });

  //route 9
  app.get('/cancun', (req, res) => {
    res.render('template2', {
      title:'Cancun',
      message: 'Welcome to Cancun',
      content: 'Its a great destination for your next vacation and the food its delicius!',
      url: 'https://media.istockphoto.com/id/1391487796/photo/cancun-resort-during-a-sunset.jpg?s=612x612&w=is&k=20&c=vR8QJ1f64VPV5aKxHwf0ODU3Tomo-iye3yGxc1ZsQgU=',
    });
  });


  //route 10
  app.get('/paris', (req, res) => {
    res.render('template2', {
      title:'Paris',
      message: 'Welcome to Paris',
      content: 'The city of love!',
      url: 'https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=is&k=20&c=GaLPYacVcplcRSHWF0oda5nODPA0yiyLHp44b-JOwy4=',
    });
  });




//app listening
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
  





