import Hidden from '@material-ui/core/Hidden';

export default function IconDivider() {
    return (
        <div className="icon-divider">
            <Hidden xsDown>
                <img className="icon" width="50" src="/images/icons-vertical.svg" />
            </Hidden>
            <Hidden smUp>
                <img className="icon" width="150" src="/images/icons-horizontal.svg" />
            </Hidden>
            <style jsx>{`
            .icon-divider {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                height: 100%;
            }

            .icon {
                display: block;
                margin: 0 auto;
                flex: 1;
            }
            `}</style>
        </div>
  )
}
