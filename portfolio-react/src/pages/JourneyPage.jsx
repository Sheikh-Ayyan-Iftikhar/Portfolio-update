import Experience from '../components/Experience.jsx';
import PageIntro from '../components/PageIntro.jsx';
import PageMeta from '../components/PageMeta.jsx';

export const meta = {
  title: 'Journey — Sheikh Ayyan Iftikhar',
  description:
    'The experience, education and certifications behind Sheikh Ayyan Iftikhar — former Co-Founder and CTO at AperaBoost, and a frontend and full-stack developer.',
};

export default function JourneyPage() {
  return (
    <>
      <PageMeta {...meta} />
      <PageIntro
        eyebrow="The journey"
        title="Experience, education and proof."
        lede="Where I've worked, what I've studied, and the certificates behind it. I prefer showing you the document over claiming the result."
      />
      <Experience />
    </>
  );
}
