const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
      <url>
        <loc>https://evileyeremedy.com/</loc>
        <lastmod>2024-07-12T05:48:14+00:00</lastmod>
      </url>
      <url>
        <loc>https://evileyeremedy.com/privacy-policy</loc>
        <lastmod>2024-07-12T05:48:14+00:00</lastmod>
      </url>
      <url>
        <loc>https://evileyeremedy.com/terms-and-conditions</loc>
        <lastmod>2024-07-12T05:48:14+00:00</lastmod>
      </url>
      <url>
        <loc>https://evileyeremedy.com/legal-disclaimer</loc>
        <lastmod>2024-07-12T05:48:14+00:00</lastmod>
      </url>
      <url>
        <loc>https://evileyeremedy.com/evil-eye-and-prayer</loc>
        <lastmod>2024-07-12T05:48:14+00:00</lastmod>
      </url>
    </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
