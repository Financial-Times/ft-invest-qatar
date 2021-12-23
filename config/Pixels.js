import Script from 'next/script';

const Pixels = () => {
  return (
    <>
      <script
        id="twitter-pixel"
        dangerouslySetInnerHTML={{
          __html: `
        !(function (e, t, n, s, u, a) {
            e.twq ||
              ((s = e.twq =
                function () {
                  s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
                }),
              (s.version = '1.1'),
              (s.queue = []),
              (u = t.createElement(n)),
              (u.async = !0),
              (u.src = '//static.ads-twitter.com/uwt.js'),
              (a = t.getElementsByTagName(n)[0]),
              a.parentNode.insertBefore(u, a));
          })(window, document, 'script');
          twq('init', 'nxgf1');
          twq('track', 'PageView')
        `,
        }}
      ></script>
      <script
        id="cuts-the-mustard"
        dangerouslySetInnerHTML={{
          __html: `
            var cutsTheMustard =
            'querySelector' in document &&
            'localStorage' in window &&
            'addEventListener' in window;
            if (cutsTheMustard) { 
            document.documentElement.className =
            document.documentElement.className.replace(/core/g, 'enhanced');
            }
      `,
        }}
      ></script>
      <Script
        id="polyfill"
        src="https://cdn.polyfill.io/v2/polyfill.min.js"
      ></Script>
      <Script src="https://cdn.brandmetrics.com/survey/script/45b903c6675b4a9b85db13385a3d6084.js?checkconsent=false"></Script>
      <Script
        async
        src="https://e1c3fd73-dd41-4abd-b80b-4278d52bf7aa.edge.permutive.app/e1c3fd73-dd41-4abd-b80b-4278d52bf7aa-web.js"
      ></Script>
    </>
  );
};

export default Pixels;
