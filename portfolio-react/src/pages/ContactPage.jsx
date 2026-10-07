import Contact from '../components/Contact.jsx';
import PageIntro from '../components/PageIntro.jsx';
import PageMeta from '../components/PageMeta.jsx';

export const meta = {
  title: 'Contact — Sheikh Ayyan Iftikhar',
  description:
    'Get in touch with Sheikh Ayyan Iftikhar about frontend, full-stack and interactive 3D web work.',
};

export default function ContactPage() {
  return (
    <>
      <PageMeta {...meta} />
      <PageIntro
        eyebrow="Contact"
        title="Let's build something great."
        lede="Open to frontend, full-stack and interactive 3D work. The fastest way to reach me is email — I read everything."
      />
      <Contact />
    </>
  );
}
