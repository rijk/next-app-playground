export default function Page({ params }: any) {
  return (
    <div>
      Lesson page{' '}
      <b>
        {params.path}/{params.lesson}
      </b>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    {
      path: 'test-path',
      lesson: 'test-lesson',
    },
  ];
}
