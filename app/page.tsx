import Image from 'next/image'

const phrases = [
  'ramenbet',
  'раменбет',
  'ramenbet зеркало',
  'рамен бет',
  'ramen bet',
  'раменбет зеркало',
  'ramenbet официальный сайт',
  'раменбет официальный сайт',
  'раменбет рабочее зеркало',
  'ramenbet казино',
  'раменбет казино',
]

export default function Page() {
  return (
    <main className="rb-shell">
      <header className="rb-header">
        <a className="rb-brand" href="#top" aria-label="RamenBet — на главную">
          <span className="rb-brand-mark" aria-hidden="true">R</span>
          <span>RamenBet</span>
        </a>
        <nav className="rb-nav" aria-label="Основная навигация">
          <a href="#guide">Как начать</a>
          <a href="#mirror">Зеркало</a>
          <a href="#safety">Безопасность</a>
        </nav>
        <a className="rb-header-link" href="#guide">Войти на сайт <span aria-hidden="true">↗</span></a>
      </header>

      <section className="rb-hero" id="top" aria-labelledby="hero-title">
        <figure className="rb-hero-art">
          <Image src="/ramenbet-casino-art.png" alt="Карты, фишки и рулетка в атмосфере RamenBet" fill priority sizes="(max-width: 720px) 100vw, 52vw" />
        </figure>
        <article className="rb-hero-copy">
          <p className="rb-eyebrow"><span aria-hidden="true">✦</span> Игровой навигатор RamenBet</p>
          <h1 id="hero-title">RamenBet: понятный путь в мир онлайн-игр</h1>
          <p className="rb-lead">RamenBet — место для игроков, которые ценят быстрый доступ, аккуратную навигацию и честное знакомство с возможностями платформы. Всё важное — на одной странице.</p>
          <a className="rb-primary-link" href="#guide">Открыть инструкцию <span aria-hidden="true">→</span></a>
          <p className="rb-note">18+ · Играйте ответственно · Проверьте правила в своём регионе</p>
        </article>
      </section>

      <section className="rb-content" id="guide" aria-labelledby="guide-title">
        <p className="rb-kicker">Коротко и по делу</p>
        <h2 id="guide-title">ramenbet официальный сайт без лишних шагов</h2>
        <p>Чтобы найти ramenbet официальный сайт, используйте только сохранённый адрес и проверяйте название RamenBet в строке браузера. На стартовой странице удобно изучить разделы, выбрать подходящий формат игры и заранее ознакомиться с условиями. Такой порядок помогает не спешить и принимать решения спокойно.</p>

        <article className="rb-info-block" id="mirror">
          <p className="rb-kicker">Доступ в один клик</p>
          <h2>ramenbet зеркало и раменбет зеркало</h2>
          <p>Если основной адрес временно не открывается, ramenbet зеркало может стать альтернативным входом. Раменбет зеркало должно выглядеть знакомо: те же разделы, логика меню и понятные контакты поддержки. Не переходите по случайным ссылкам из комментариев — сверяйте адрес и соединение перед вводом данных.</p>
        </article>

        <article className="rb-info-block">
          <p className="rb-kicker">Поиск без путаницы</p>
          <h2>рамен бет, ramen bet и раменбет официальный сайт</h2>
          <p>В поиске встречаются разные варианты: рамен бет, ramen bet и раменбет официальный сайт. Все эти запросы могут вести к одному интересу пользователя — найти актуальную страницу бренда. Ориентируйтесь не на похожее имя, а на точный домен, защищённое соединение и прозрачные правила.</p>
        </article>

        <article className="rb-info-block" id="safety">
          <p className="rb-kicker">Внимательный выбор</p>
          <h2>раменбет рабочее зеркало: что проверить</h2>
          <p>Перед входом через раменбет рабочее зеркало посмотрите на адресную строку, язык интерфейса и наличие раздела помощи. Рабочее зеркало RamenBet не просит лишние документы или оплату за сам доступ. Для аккаунта используйте уникальный пароль и включайте дополнительные меры защиты, если они доступны.</p>
        </article>

        <article className="rb-info-block">
          <p className="rb-kicker">Игровой раздел</p>
          <h2>ramenbet казино и раменбет казино для новых игроков</h2>
          <p>RamenBet казино объединяет классические игровые форматы в одном интерфейсе. Раменбет казино легче освоить, если начать с правил, лимитов и демо-режима, а не с максимальных ставок. Определите бюджет заранее, не пытайтесь отыгрываться и делайте паузы: азарт должен оставаться развлечением, а не обязанностью.</p>
        </article>
      </section>

      <footer className="rb-footer">
        <section aria-labelledby="footer-title">
          <p className="rb-kicker">Смысловые метки</p>
          <h2 id="footer-title">RamenBet рядом, когда нужен понятный вход</h2>
          <p className="rb-footer-copy">Сохраните страницу как быстрый ориентир: здесь собраны основные формулировки, по которым игроки ищут официальный доступ и рабочее зеркало. Проверяйте информацию самостоятельно и соблюдайте возрастные ограничения.</p>
          <ul className="rb-tags" aria-label="Ключевые фразы">
            {phrases.map((phrase) => <li key={phrase}>#{phrase.replaceAll(' ', '')}</li>)}
          </ul>
        </section>
        <p className="rb-legal">© 2026 RamenBet Guide · Информационный материал для совершеннолетних пользователей</p>
      </footer>
    </main>
  )
}

export const dynamic = 'force-static'
