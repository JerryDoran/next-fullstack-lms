import Image from 'next/image';

export default function Home() {
  return (
    <main className='p-5'>
      <p>
        You are one of the first visitors to fullstackfoundations.com, welcome!
      </p>

      <p>
        We&lsquo;re just getting started around here. Check out the video below
        for an introduction.
      </p>

      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/Hd4_QWVnskM?si=VyZyEQ45Mls1iTGY'
          title='YouTube video player'
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
