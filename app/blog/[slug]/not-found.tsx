import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <main className="post-page">
      <div className="post-page-inner">
        <h1 className="modal-title">Post Not Found</h1>
        <p className="modal-subtitle">The blog post you requested does not exist.</p>
        <Link href="/" className="btn-ghost">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
