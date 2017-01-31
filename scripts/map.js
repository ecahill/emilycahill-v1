      $(function() {
        var maplace = new Maplace({
          locations: Locs,
            map_div: '#gmap-dropdown',
            controls_title: 'Choose a location:'
        }); 
        maplace.Load(); 
      });
      
      var Locs = [
          {
            lat: 41.38, 
            lon: 2.15, 
            zoom: 8,
            title: 'Barcelona, Spain',
            html: [
                  '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Barcelona, Spain</h3>',
                  '<p>I spent an amazing 12 weeks in Barcelona in the summer of 2014 for my study abroad program.',
                  ' While I was there, I had the chance to travel to five other European countries.</p></div>'
                  ].join(''),
          },
          {
            lat: 46.68,
            lon: 7.85,
            zoom: 8,
            title: 'Interlaken, Switzerland',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Interlaken, Switzerland</h3></div>'
          },
          {
            lat: 43.51,
            lon: 16.45,
            zoom: 8,
            title: 'Split, Croatia',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Split, Croatia</h3></div>'
          },
          {
            lat: 48.13,
            lon: 11.56,
            zoom: 8,
            title: 'Munich, Germany',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Munich, Germany</h3></div>'
          },
          {
            lat: 47.56,
            lon: 7.6,
            zoom: 8,
            title: 'Basel, Switzerland',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Basel, Switzerland</h3></div>'
          },
          {
            lat: 50.08,
            lon: 14.41,
            zoom: 8,
            title: 'Prague, Czech Republic',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Prague, Czech Republic</h3></div>'
          },
          {
            lat: 33.75,
            lon: -84.39, 
            zoom: 8, 
            title: 'Atlanta, Georgia',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Atlanta, Georgia</h3></div>'
          },
          {
            lat: 47.60,
            lon: -122.33,
            zoom: 8,
            title: 'Seattle, Washington',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Seattle, Washington</h3></div>'
          },
          {
            lat: 36.74,
            lon: -95.98,
            zoom: 8,
            title: 'Bartlesville, Oklahoma',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Bartlesville, Oklahoma</h3></div>'
          },
          {
            lat: 12.61,
            lon: -87.15,
            zoom: 8,
            title: 'Chinandega, Nicaragua',
            html: '<div><h3 style="font-family:verdana, font-size:160%, text-transform:capitalize">Chinandega, Nicaragua</h3></div>'
          }];
