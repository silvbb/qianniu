import { useEffect } from 'react';

interface GoogleAdProps {
  slot: string;
  style?: React.CSSProperties;
}

const GoogleAd = ({ slot, style }: GoogleAdProps): JSX.Element => {
  useEffect(() => {
    try {
      if (!window.adsbygoogle) {
        window.adsbygoogle = [];
      }
      window.adsbygoogle.push({} as { push(obj: object): void });
    } catch (err) {
      // 使用更具体的错误类型
      if (err instanceof Error) {
        console.error('Error loading ad:', err.message);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client="pub-6211159339566140"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;