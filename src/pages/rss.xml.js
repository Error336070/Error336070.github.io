import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getAdvisories, getResearch } from '../lib/content';

export async function GET(context) {
  const advisories = (await getAdvisories()).map((a) => ({
    title: `${a.data.advisoryId}: ${a.data.title}`,
    pubDate: a.data.published,
    description: a.data.summary,
    link: `/advisories/${a.id}/`,
    categories: ['advisory', 'security'],
  }));
  const research = (await getResearch()).map((r) => ({
    title: r.data.title,
    pubDate: r.data.date,
    description: r.data.summary,
    link: `/research/${r.id}/`,
    categories: [...r.data.field, ...r.data.tags],
  }));

  return rss({
    title: `${SITE.name}: advisories and research`,
    description: SITE.description,
    site: context.site,
    items: [...advisories, ...research].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
