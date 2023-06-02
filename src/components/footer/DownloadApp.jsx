import { Link } from "react-router-dom";

const DownloadApp = ({ content }) => {
  return (
    <div className="flex items-center gap-3">
      <h3 className="font-bold uppercase text-neutral-300">Download App On</h3>
      {content?.map((app) => {
        switch (app.key) {
          case "Play Store":
            return (
              <div key="playstore">
                <Link to={app.url} target="_blank">
                  <img
                    src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4967912f.png&w=32&q=75"
                    alt=""
                  />
                </Link>
              </div>
            );
          case "App Store":
            return (
              <div key="appstore">
                <Link to={app.url} target="_blank">
                  <img
                    src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp.1b12d473.png&w=32&q=75"
                    alt=""
                  />
                </Link>
              </div>
            );
          default:
            return 0;
        }
      })}
    </div>
  );
};

export default DownloadApp;
