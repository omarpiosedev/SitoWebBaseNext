export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">
        Welcome to il mio sito
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        A minimal, clean Next.js application starter.
      </p>
      <div className="space-y-4">
        <div className="rounded-lg bg-gray-50 p-6">
          <h2 className="mb-2 text-xl font-semibold">Getting Started</h2>
          <p className="text-gray-700">
            Edit
            {' '}
            <code className="rounded bg-gray-200 px-2 py-1">
              src/app/page.tsx
            </code>
            {' '}
            to customize this page.
          </p>
        </div>
      </div>
    </div>
  );
}
