import Link from 'next/link';

export default function Page({ params }: any) {
  return (
    <div>
      www page (should show www layout above)
      <br />
      <br />
      <Link href="/www/learning" className="underline">
        &rarr; Go to /learning
      </Link>
    </div>
  );
}
