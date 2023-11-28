import { Locale } from '../../i18n.config';
import { getDictionary } from '../lib/switchLanguage';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const { home } = await getDictionary(lang)
  return (
    <div>
       <h1>{home.home_start}</h1>
  </div>
  )
}
