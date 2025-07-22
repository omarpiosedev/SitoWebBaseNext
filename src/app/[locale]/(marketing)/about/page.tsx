import { getTranslations, setRequestLocale } from 'next-intl/server';

type IAboutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IAboutProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function About(props: IAboutProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Chi Siamo</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-600 mb-4">
          Inserisci qui la storia del tuo progetto, la tua missione e i tuoi valori.
        </p>
        <p className="text-gray-600">
          Questa sezione può contenere informazioni su di te, il tuo team,
          la vostra esperienza e cosa vi rende unici.
        </p>
      </div>
    </div>
  );
};
