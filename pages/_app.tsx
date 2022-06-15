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

        <li>
          <button>
            <Link href="/lecture/gugudan">구구단</Link>
          </button>

          <button>
            <Link href="/lecture/wordrelay">끝말잇기</Link>
          </button>
          <button>
            <Link href="/lecture/numberBaseball">숫자야구</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href="/weekend1/question1">문제1번</Link>
          </button>
          <button>
            <Link href="/weekend1/question2">문제2번</Link>
          </button>
          <button>
            <Link href="/weekend1/question3">문제3번</Link>
          </button>
          <button>
            <Link href="/weekend1/question4">문제4번</Link>
          </button>
          <button>
            <Link href="/weekend1/question5">문제5번</Link>
          </button>
          <button>
            <Link href="/weekend1/question6">문제6번</Link>
          </button>
          <button>
            <Link href="/weekend1/question7">문제7번</Link>
          </button>
          <button>
            <Link href="/weekend1/question8">문제8번</Link>
          </button>
          <button>
            <Link href="/weekend1/question9">문제9번</Link>
          </button>
        </li>
        <li>
          <button>
            <Link href="/study/useRefSample">useRef</Link>
          </button>
        </li>
      </ul>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
