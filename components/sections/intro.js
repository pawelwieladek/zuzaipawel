import { useTheme } from '@material-ui/core/styles';

export default function Intro() {
    const theme = useTheme();
    return (
        <div className="intro">
            <div className="intro__apla"></div>
            <picture>
                <source media="(max-width: 640px)" srcSet="
                /images/intro-vertical-320w.jpg 320w,
                /images/intro-vertical-480w.jpg 480w,
                /images/intro-vertical-640w.jpg 640w,
                /images/intro-vertical-960w.jpg 960w,
                /images/intro-vertical-1280w.jpg 1280w" />
                <source media="(min-width: 641px)" srcSet="
                /images/intro-horizontal-1280w.jpg 1280w,
                /images/intro-horizontal-1920w.jpg 1920w,
                /images/intro-horizontal-2560w.jpg 2560w,
                /images/intro-horizontal-3840w.jpg 3840w" />
                <img src="/images/intro-horizontal-1920w.jpg" alt="Nasze zdjęcia" />
            </picture>
            <div className="intro__container">
                <img className="intro__container-item" src="/images/rings.svg" height="50" alt="Zuzia i Paweł" />
                <img className="intro__container-item intro__logo" src="/images/logo.svg" height="100" alt="Zuzia i Paweł" />
            </div>
            <style jsx>{`
            .intro {
                position: relative;
                font-size: 0;
                line-height: 0;
                overflow: hidden;
                max-height: 100vh;
            }

            .intro__apla {
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0.8;
                z-index: 1;
            }

            .intro__container {
                position: absolute;
                height: 0;
                top: 50%;
                margin-top: 0;
                width: 100%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .intro__container-item {
                flex: 1;
                margin-top: 20px;
            }

            .intro__container-item:first-child {
                margin-top: 0;
            }

            .intro__logo {
                filter: brightness(0) invert(1);
            }
            `}</style>
            <style jsx>{`
            .intro__apla {
                background-color: ${theme.palette.primary.main};
            }
            `}</style>
        </div>
    )
}
