export async function generateMetadata() {
  return {
    title: 'Demo Database',
    description: 'Pagina demo per testare il database',
  };
}

export default function Counter() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Demo Database</h1>
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <p className="text-yellow-800">
          🚧 Questa pagina è in costruzione
        </p>
        <p className="text-yellow-700 mt-2 text-sm">
          Puoi usare questa sezione per testare il database o trasformarla in qualcosa di utile per il tuo progetto.
        </p>
      </div>
    </div>
  );
};
