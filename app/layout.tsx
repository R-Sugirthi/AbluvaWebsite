"use client"
import './css/style.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Abluva | Where Trust and Data Security Unite</title>
        <meta name="description" content="ABLUVA: Data security startup, integrating seamless protection into enterprise ecosystems using advanced neural networks and contextual graphs."></meta>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/logo1_title.png" type="image/png" /> 
        <script
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/43888896.js"
        /> 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DPFKQ7JY2Q"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-DPFKQ7JY2Q');
          `}
        </script>
        <meta name="google-site-verification" content="1jF2DUuBHighu-2l57LxWPfTzmfeAJOtMxo5JUWN4Mc" />
      </head>
      <body className={`bg-defaultdark text-white`}>
        <div className="flex flex-col min-h-screen">
          {children}       
        </div>
      </body>
    </html>
  )
}
 