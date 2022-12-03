/* eslint-disable no-undef */
import styles from './index.module.css';
import { countApi } from '../../apis/count';
import { redirectApi } from '../../apis/redirect';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function Main() {
  // 待ち人数
  const [count, setCount] = useState<number | null>(null);
  // 実行回数
  const [num, setNumber] = useState<number>(1);
  const [redirectPath, setRedirectPath] = useState<string>('');
  // ConnectIDをクエリストリングより取得
  const query1 = new URLSearchParams(useLocation().search);
  const connectParam = query1.get('connect') || '';
  const redirectDomain = process.env.REACT_APP_ORIGIN_APP_URL;
  // カウントアップを取得する処理
  const getCount = async () => {
    const res = await countApi.getCount(connectParam);
    setCount(res.count);
    // 成功したら実行回数をカウントアップする
    setNumber(num + 1);
    return res;
  };

  // リダイレクト先を取得する処理
  // カウントアップを取得する処理
  const getRedirectPath = async () => {
    const res = await redirectApi.getRedirectUrl(connectParam);
    setRedirectPath(res.url);
  };

  useEffect(() => {
    console.log('setting timeout execution');
    // 残カウントが0になった際にリダイレクトする処理
    if (count === 0) {
      window.location.replace(`${redirectDomain}${redirectPath}`);
    }
    setTimeout(getCount, 10000);
  }, [num]);

  useEffect(() => {
    getRedirectPath();
  }, []);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>待合室のテスト実装</p>
      </header>
      {/** 待ちカウントが存在する場合に表示する */}
      {count && <div className={styles.waiting}>{`現在の待ち人数は${count}人です`}</div>}
      <div className={styles.waiting}>しばらくお待ちください</div>
    </div>
  );
}

export default Main;
