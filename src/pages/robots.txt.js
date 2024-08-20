// pages/robots.txt.tsx
export async function getServerSideProps({ res }) {
    const robots = `
      User-agent: *
      Disallow: /background/
      Disallow: /audio/
      Allow: /
  
      Sitemap: https://evileyeremedy.com/sitemap.xml
    `;
  
    res.setHeader('Content-Type', 'text/plain');
    res.write(robots);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Robots() {
    return null;
  }
  