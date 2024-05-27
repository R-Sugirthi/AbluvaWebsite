module.exports = {
    siteUrl: 'https://abluva.com', 
    generateRobotsTxt: true,        
    exclude: ['/admin'],            
    robotsTxtOptions: {             
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin'],
        },
      ],
    },
    sitemapSize: 1000,           
  };
  