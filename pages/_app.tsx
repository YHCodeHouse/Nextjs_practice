import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ul>
        <button>
          <Link href="/">홈</Link>
        </button>

        <button>
          <Link href="/gugudan">구구단</Link>
        </button>

        <button>
          <Link href="/wordrelay">끝말잇기</Link>
        </button>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
