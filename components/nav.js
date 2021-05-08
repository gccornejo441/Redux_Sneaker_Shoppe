import Link from 'next/link';

const links = [
  { href: '//github.com/gccornejo441', label: 'Github' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
});

const Nav = () => (
  <nav class="bg-indigo-500 py-5">
    <ul>
      <li>
        <Link href="/">
          <a class="text-white">Home</a>
        </Link>
      </li>
      <ul>
        {links.map(
          ({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>
                <a class="text-white mr-2" >{label}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
