import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AppConfig } from '@/utils/AppConfig';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Benvenuto in
          {' '}
          {AppConfig.name}
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Il tuo nuovo progetto è pronto.
          {' '}
          <br />
          Costruito con le migliori tecnologie moderne.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-semibold text-gray-900 mb-2">Next.js 15</h3>
            <p className="text-sm text-gray-600">App Router, Server Components, e performance ottimizzate</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
            <p className="text-sm text-gray-600">Design system moderno e completamente personalizzabile</p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600">Type safety e developer experience superiore</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            🔒 Autenticazione • 🗃️ Database • 🌍 i18n • 🧪 Testing • 📊 Analytics
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Tutto pre-configurato e pronto per la produzione
          </p>
        </div>
      </div>
    </div>
  );
};
