import React, { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      learning layout
      <div>{children}</div>
    </div>
  );
}
