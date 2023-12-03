'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import Counter from '@/components/Counter';
import { Button } from '@/components/ui/button';

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div>
          <div className="flex justify-between p-8">
            <div className="flex justify-between gap-4">
              <div className="flex items-center">{session.user?.name}</div>
              <Button onClick={() => signOut()}>Logout</Button>
            </div>
          </div>
          <Counter />
        </div>
      ) : (
        <Button onClick={() => signIn()}>Login</Button>
      )}
    </div>
  );
}
