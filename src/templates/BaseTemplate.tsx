import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900">
            {AppConfig.name}
          </h1>
          <h2 className="text-lg text-gray-600 mt-2">{t('description')}</h2>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm text-gray-500">
          <p>
            {`© ${new Date().getFullYear()} ${AppConfig.name}. Tutti i diritti riservati.`}
          </p>
          <p className="mt-2 text-xs">
            Costruito con Next.js, TypeScript e Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
};
