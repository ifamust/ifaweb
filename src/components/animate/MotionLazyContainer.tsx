import PropTypes from 'prop-types';
import { LazyMotion } from 'framer-motion';

// ----------------------------------------------------------------------

// eslint-disable-next-line import/extensions
const loadFeatures = () => import('./features').then((res: any) => res.default);

MotionLazyContainer.propTypes = {
  children: PropTypes.node
};

export default function MotionLazyContainer({ children }: any) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
