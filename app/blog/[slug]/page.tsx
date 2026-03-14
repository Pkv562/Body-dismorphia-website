import { notFound } from "next/navigation";
import { BlogPostPage } from "@/components/site/blog-post-page";
import { postBySlug, posts } from "@/data/posts";

type BlogPostRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostRouteProps) {
  return params.then(({ slug }) => {
    const post = postBySlug[slug];
    if (!post) {
      return {
        title: "Post Not Found",
      };
    }

    return {
      title: `${post.title} - ${post.subtitle}`,
      description: post.topic,
    };
  });
}

export default async function BlogPostRoute({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = postBySlug[slug];

  if (!post) {
    notFound();
  }

  const postIndex = posts.findIndex((item) => item.slug === slug);

  return <BlogPostPage post={post} postIndex={postIndex} totalPosts={posts.length} />;
}
