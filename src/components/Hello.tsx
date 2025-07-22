import { currentUser } from '@clerk/nextjs/server';
import { getTranslations } from 'next-intl/server';

export const Hello = async () => {
  const t = await getTranslations('Dashboard');
  const user = await currentUser();

  return (
    <>
      <p>
        {`👋 `}
        {t('hello_message', { email: user?.primaryEmailAddress?.emailAddress ?? '' })}
      </p>
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 text-sm">
          🚀 Il tuo progetto è ora pronto per essere personalizzato!
        </p>
      </div>
    </>
  );
};
