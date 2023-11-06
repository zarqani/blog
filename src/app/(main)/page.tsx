import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Link href="/posts" className="mb-16">
        <h2 className="mb-3 text-2xl font-semibold">
          Go To Posts{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </Link>
      <div className="group">
        <h2 className="mb-3 text-xl font-semibold">Dashboard:</h2>
        <ul>
          <li>
            <h3 className="mb-3 text-lg font-semibold">Page Creation:</h3>
            <ul>
              <li>Register and Login Users</li>
              <li>Add new Post</li>
              <li>Edit and Remove Post</li>
              <li>Show All Posts and Individually</li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}
