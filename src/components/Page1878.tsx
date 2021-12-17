import { default as React } from 'react';

function Page1878({config}: any) {
    React.useEffect(() => {
        const siteBranding: any = document.querySelector('.site-branding');
        siteBranding.style.display = 'none';
        return () => {
            siteBranding.style.display = 'block';
        };
    }, []);
    return <iframe className="frame-1878"
                   src={config.src} />;
}

export default Page1878;