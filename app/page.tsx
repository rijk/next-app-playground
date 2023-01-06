import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>This is page /</p>
      <br />
      <br />
      <Link href="/test-org/test-path/test-lesson" className="underline">
        &rarr; Go to test lesson
      </Link>
    </div>
  );
}
