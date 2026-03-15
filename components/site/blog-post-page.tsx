import Link from "next/link";
import type { BlogPost } from "@/data/posts";

type BlogPostPageProps = {
  post: BlogPost;
  postIndex: number;
  totalPosts: number;
};

export function BlogPostPage({ post, postIndex, totalPosts }: BlogPostPageProps) {
  return (
    <main className="post-page">
      <div className="post-page-inner">
        <div className="post-breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>Blog</span>
        </div>

        <div className="modal-post-tag">{post.tag}</div>
        <h1 className="modal-title">{post.title}</h1>
        <p className="modal-subtitle">{post.subtitle}</p>

        <div className="modal-meta-row">
          <span className="modal-meta-item">Read: {post.readTime}</span>
          <span className="modal-meta-item">Date: {post.date}</span>
          <span className="modal-meta-item">{totalPosts === 1 ? "Featured blog post" : `Series Post ${postIndex + 1} of ${totalPosts}`}</span>
        </div>

        <article className="modal-body">{post.body}</article>

        <div className="post-page-actions">
          <Link href="/" className="btn-ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
