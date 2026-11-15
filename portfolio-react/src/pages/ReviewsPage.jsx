import { lazy, Suspense } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import PageMeta from '../components/PageMeta.jsx';

const Testimonials = lazy(() => import('../components/Testimonials.jsx'));

export const meta = {
  title: 'Reviews — Sheikh Ayyan Iftikhar',
  description: 'Client testimonials and reviews for Sheikh Ayyan Iftikhar — Product Builder at Aplinode. Real feedback from founders, engineers, and product leaders.',
};

export default function ReviewsPage() {
  return (
    <>
      <PageMeta {...meta} />
      <PageIntro
        eyebrow="Social proof"
        title="Client reviews & testimonials"
        description="Real feedback from founders, engineers, and product leaders I've shipped products with. Every project is live and verifiable."
      />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
    </>
  );
}