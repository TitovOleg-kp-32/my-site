import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Origin',
    Svg: require('@site/static/img/F1_logo1_.svg').default,
    description: (
      <>
        Formula 1 is the highest class of single-seater auto racing
        sanctioned by the Fédération Internationale de l'Automobile (FIA).
      </>
    ),
  },
  {
    title: 'First race',
    Svg: require('@site/static/img/F1_logo2__1.svg').default,
    description: (
      <>
        The first official F1 race took place
        in 1950 at Silverstone, United Kingdom.
      </>
    ),
  },
  {
    title: 'World Championship',
    Svg: require('@site/static/img/F1_logo3_.svg').default,
    description: (
      <>
        The F1 World Championship is held annually and 
        consists of a series of races known as Grands Prix,
        which are held worldwide on various circuits.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
