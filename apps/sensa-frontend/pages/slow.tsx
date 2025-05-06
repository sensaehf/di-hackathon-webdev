// pages/slow-page.tsx

import { GetServerSideProps } from 'next'

interface SlowPageProps {
  loadedAt: string
}

export default function SlowPage({ loadedAt }: SlowPageProps) {
  return (
    <div>
      <h1>This is a slow page</h1>
      <p>The content took 3 seconds to load (on the server).</p>
      <p>Loaded at: {loadedAt}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // Simulate a 3-second server-side delay
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return {
    props: {
      loadedAt: new Date().toISOString(),
    },
  }
}
