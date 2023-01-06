import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>This is page /</p>
      <br />
      <br />
      <Link href="/www" className="underline">
        &rarr; Go to /www
      </Link>
    </div>
  );
}
