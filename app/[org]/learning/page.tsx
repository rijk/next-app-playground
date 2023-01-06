import Link from 'next/link';

export default function Page({ params }: any) {
  return (
    <div>
      learning page (should show learning layout above)
      <br />
      <br />
      <Link href="/www" className="underline">
        &rarr; Go back to /www
      </Link>
    </div>
  );
}
