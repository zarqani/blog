export default function postPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime="2023-08-05T00:00:00.000Z">
                    Saturday, August 5, 2023
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Release of Tailwind Nextjs Starter Blog v2.0
              </h1>
            </div>
          </div>
        </header>
        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
          <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                <li className="flex items-center space-x-2">
                  <img
                    alt="avatar"
                    loading="lazy"
                    width="38"
                    height="38"
                    decoding="async"
                    data-nimg="1"
                    className="h-10 w-10 rounded-full"
                  />
                  <dl className="whitespace-nowrap text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900 dark:text-gray-100">
                      Tails Azimuth
                    </dd>
                    <dt className="sr-only">Twitter</dt>
                    <dd>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/Twitter"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        @Twitter
                      </a>
                    </dd>
                  </dl>
                </li>
              </ul>
            </dd>
          </dl>
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">
              <h2 id="introduction">
                <a href="#introduction" aria-hidden="true" tabindex="-1">
                  <span className="icon icon-link"></span>
                </a>
                Introduction
              </h2>
              <p>
                Welcome to the release of Tailwind Nextjs Starter Blog template
                v2.0. This release is a major refactor of the codebase to
                support Nextjs App directory and React Server Components. Read
                on to discover the new features and how to migrate from V1.
              </p>
              <p>
                Many thanks to the community of users and contributors for
                making this template a success! I created a small video montage
                of the blogs (while cleaning up the list in the readme) to
                showcase the diversity of the blogs created using the template
                and to celebrate the milestone:
              </p>
            </div>
          </div>
          <footer>
            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
              <div className="py-4 xl:py-8">
                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tags
                </h2>
                <div className="flex flex-wrap">
                  <a
                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href="/tags/next-js"
                  >
                    next-js
                  </a>
                  <a
                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href="/tags/tailwind"
                  >
                    tailwind
                  </a>
                  <a
                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href="/tags/guide"
                  >
                    guide
                  </a>
                  <a
                    className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href="/tags/feature"
                  >
                    feature
                  </a>
                </div>
              </div>
              <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                <div>
                  <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Previous Article
                  </h2>
                  <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                    <a href="/blog/new-features-in-v1">New features in v1</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4 xl:pt-8">
              <a
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
                href="/blog"
              >
                ← Back to the blog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
