import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dental care tips and oral health advice from Bright Smile Dental Care, Dhanmondi, Dhaka.",
};

const posts = [
  {
    title: "How Often Should You Brush and Floss?",
    excerpt: "Simple habits that prevent cavities, gum disease, and bad breath.",
    date: "Oct 2026",
  },
  {
    title: "Root Canal Myths Debunked",
    excerpt: "Modern root canal treatment is comfortable, safe, and saves your natural tooth.",
    date: "Oct 2026",
  },
  {
    title: "Braces vs Clear Aligners: Which is Right for You?",
    excerpt: "Compare options for straightening teeth based on lifestyle, budget, and goals.",
    date: "Sep 2026",
  },
  {
    title: "Foods That Keep Your Teeth Healthy",
    excerpt: "Learn which foods protect enamel and which ones to enjoy in moderation.",
    date: "Sep 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-teal-50/40 to-emerald-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Dental Care Tips & Insights
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Practical advice for healthier teeth and gums from our dental team.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-teal-500 to-emerald-500" />
                <div className="p-6">
                  <p className="text-xs text-slate-500">{post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{post.excerpt}</p>
                  <p className="mt-6 text-sm font-semibold text-teal-700">
                    Read More →
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
