import css from 'styled-jsx/css';
import clsx from 'clsx';

const { className, styles } = css.resolve`
    .heading, .subheading {
        font-family: 'JetBrains Mono', monospace;
        text-transform: uppercase;
    }

    .subheading + .heading {
        margin-top: -18px;
    }

    .heading + .subheading {
        margin-top: -18px;
    }
`;

function HeadingComponent({ importance, ...props }) {
    switch (importance) {
        case 6: return <h6 {...props} />;
        case 5: return <h5 {...props} />;
        case 4: return <h4 {...props} />;
        case 3: return <h3 {...props} />;
        case 2: return <h2 {...props} />;
        case 1:
        default:
            return <h1 {...props} />;
    }
}

export default function Heading({ importance, subheading, color, children }) {
    const headingClassName = clsx(
        subheading ? 'subheading' : 'heading',
        color ? `text-color-${color}` : '',
        className
    );
    return (
        <HeadingComponent
            importance={importance}
            className={headingClassName}
        >
            {children}
            {styles}
        </HeadingComponent>
  )
}
