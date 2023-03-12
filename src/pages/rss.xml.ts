import rss from "@astrojs/rss";

import * as postRepository from "../repositories/posts.astro";

export const get = async () => {
  const posts = await postRepository.all();

  return rss({
    title: "eowiz",
    description: "",
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: `${post.created_at}/${post.slug}`,
      title: post.title,
      pubDate: post.created_at,
    })),
  });
};
